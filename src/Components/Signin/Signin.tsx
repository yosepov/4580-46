// we first of all, import libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// only then we import components from our repository
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignupMsg } from '../Signin/SignupMsg';
import { ErrorMessage } from '../Form/Errors/ErrorMessage';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { firebaseAuth, googleProvider } from '../../services/firebase/firebaseConfig';
import { useAppDispatch } from '../../app/hooks';
import { setCurrentUser } from '../../features/User/userSlice';
import { addUserToDB } from '../../services/firebase/addUserToDB';
import { getUserFromDB } from '../../services/firebase/getUserFromDB';
import { UserType } from '../../Types/UserType';
import { setMainUser } from '../../features/User/mainUser';

// Create Signin component (visual component - thats why it ends with tsx)
export const SigninPage = () => {
    const dispatch = useAppDispatch(); // return useDispatch
    // Logic for the component
    // creating here our states for the Signin component
    const [isSignin, setIsSignin] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const [usernameError, setUsernameError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [rePasswordError, setRePasswordError] = useState<string>("");
    const [signinError, setSigninError] = useState<string>("");

    const navigate = useNavigate()

    // handleIsSignin is for handling the isSignIn state
    const handleIsSignin = () => {
        // we call setIsSignin and set the opposite of isSignin value
        setIsSignin(!isSignin);
        setUsernameError("")
        setPasswordError("")
        setRePasswordError("")
        setSigninError("")
    }

    // handleUsername get's one arg called value and set it to username state
    const handleUsername = (value: string) => {
        // we call setUsername and assign to it the value we get from the input
        setUsername(value);
        if (value === "") {
            setUsernameError("username is required")
        } else if (value.length < 6 || value.length > 12) {
            setUsernameError("username must be between 6 to 12 letters")
        } else {
            setUsernameError("")
        }
    }

    // handlePassword that gets value and set it to the password state
    const handlePassword = (value: string) => {
        // we get the value, send it to the setPassword hook and update "password" state
        setPassword(value)
        if (value === "") {
            setPasswordError("password is required")
        } else if (value.length < 6 || value.length > 12) {
            setPasswordError("password must be between 6 to 12")
        } else {
            setPasswordError("")
        }
    }

    // handleRePassword that gets value and set it to the password state
    const handleRePassword = (value: string) => {
        // we get the value, send it to the setRePassword hook and update "rePassword" state
        setRePassword(value)
        if (value === "") {
            setRePasswordError("re-password is required")
        } else if (value.length < 6 || value.length > 12) {
            setRePasswordError("password must be between 6 to 12")
        } else {
            setRePasswordError("")
        }
    }





    const handleSigninUser = async () => {
        if (!usernameError && !passwordError && !rePasswordError && !signinError) {
            if (isSignin) {
                signInWithEmailAndPassword(firebaseAuth, username, password)
                    .then(res => {
                        const user = res.user;
                        dispatch(setCurrentUser(user))
                        const mainUser = {
                            id: user.uid,
                            email: user.email ? user.email : "",
                            games: [],
                            photoURL: user.photoURL?user.photoURL: "" 
                        }as UserType;
                        dispatch(setMainUser(mainUser))
                        toast.success(user.email + " Signed in!")
                        navigate('/home')
                    })
                    .catch(err => toast.error(err.message))
            }
            else {
                if (password === rePassword) {
                    await createUserWithEmailAndPassword(firebaseAuth, username, password)
                        .then(async res => {
                            const user = res.user;
                            dispatch(setCurrentUser(user))
                            const mainUser = await addUserToDB(user) as UserType;
                            dispatch(setMainUser(mainUser))
                            toast.success(user.email + " created!")
                            navigate('/home')
                        })
                        .catch(err => toast.error(err.message))

                } else {
                    setRePasswordError("Passwords not match")
                }
            }
        }
    }

    const handleGoogleSignin = () => {
        signInWithPopup(firebaseAuth, googleProvider)
            .then(async res => {
                const user = res.user;
                const ifUser = await getUserFromDB(user.uid);
                if(!ifUser.data()){
                    const mainUser = await addUserToDB(user) as UserType;
                    dispatch(setMainUser(mainUser))
                }
                const mainUser = await addUserToDB(user) as UserType;
                dispatch(setMainUser(mainUser))
                dispatch(setCurrentUser(user))
                toast.success(user.email + " Signed in!")
                navigate('/home')
            })
            .catch(err => toast.error(err.message))
    }

    // return the visual part of the component (one JSX element)
    return (
        // we return one div that is the container for the component
        <div className='signinContainer'>
            {/* we create a signBox div, to wrap the signin and signedup elements*/}
            <div className='signBox'>
                {/* create the title for our signinBox, and render different titles
                that depends on the value of isSignin*/}
                <h1 className='signinTitle'>{isSignin ? "Signin" : "Signup"}</h1>
                {/* call InputText component and send it handleOnChange placeholder and type props*/}
                <InputText handleOnChange={handleUsername} placeholder='username' type='text' />
                <ErrorMessage errorMsg={usernameError} />
                <InputText handleOnChange={handlePassword} placeholder='password' type='password' />
                <ErrorMessage errorMsg={passwordError} />
                {/* we render another InputText compnent that depends on isSignin value */}
                {!isSignin && <InputText handleOnChange={handleRePassword} placeholder='repassword' type='password' />}
                <ErrorMessage errorMsg={rePasswordError} />
                <ErrorMessage errorMsg={signinError} />
                {/* we render the MainButton custom component that gets 2 props, and the title depends on isSinin value */}
                <MainButton handlOnClick={handleSigninUser} title={isSignin ? "Signin" : "Signup"} />
                <MainButton handlOnClick={handleGoogleSignin} title={"Sign in with Google"} />
                {/* we render the SignupMsg with 2 props, that the text has a dependency on isSignin value */}
                <SignupMsg
                    text={isSignin ? "Not a user yet? Click to SignUp!" : "already have an account? Signin!"}
                    handleOnClick={handleIsSignin} />
                {/* we close the box!*/}
            </div>
            {/* we close the container!*/}
        </div>
    )
}
// thanks