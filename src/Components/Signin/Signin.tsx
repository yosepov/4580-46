import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignupMsg } from '../Signin/SignupMsg';
import { ErrorMessage } from '../Form/Errors/ErrorMessage';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../services/firebase/firebaseConfig';
import { GoogleLogin } from '@react-oauth/google';


// Create Signin component (visual component - thats why it ends with tsx)
export const SigninPage = () => {

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

    const handleUsername = (value: string) => {
        setUsername(value);
        if (value === "") {
            setUsernameError("Username is required");
        } else if (value.length < 6 || value.length > 12) {
            setUsernameError("Username must be between 6 and 12 characters");
            toast.error("Username must be between 6 and 12 characters");
        } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
            setUsernameError("Invalid email format");
            toast.error("Invalid email format");
        } else {
            setUsernameError("");
        }
    };

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
        if (isSignin) {
            // Sign-in form validation
            if (!usernameError && !passwordError) {
                signInWithEmailAndPassword(firebaseAuth, username, password)
                    .then(res => {
                        toast.success(res.user.email + " Signed in!");
                        navigate('/home');
                    })
                    .catch(err => {
                        if (err.code === "auth/user-not-found") {
                            toast.error("Incorrect username");
                        } else if (err.code === "auth/wrong-password") {
                            toast.error("Incorrect password");
                        } else {
                            toast.error("Sign-in failed");
                        }
                    });
            } else {
                toast.error("Please fill in all required fields");
            }
        } else {
            // Sign-up form validation
            if (!usernameError && !passwordError && !rePasswordError) {
                if (password === rePassword) {
                    await createUserWithEmailAndPassword(firebaseAuth, username, password)
                        .then(res => {
                            toast.success(res.user.email + " created!");
                            navigate('/home');
                        })
                        .catch(err => toast.error(err.message));
                } else {
                    setRePasswordError("Passwords do not match");
                    toast.error("Passwords do not match");
                }
            } else {
                toast.error("Please fill in all required fields");
            }
        }
    };







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
                {isSignin && (
                    <div className="GoogleLogin">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </div>
                )}

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

function signInWithPopup(auth: any, provider: any) {
    throw new Error('Function not implemented.');
}
// thanks

