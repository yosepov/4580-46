import { useEffect } from "react";
import "./NavBar.css";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logoutUser, selectCurrentUser } from "../../features/User/userSlice";
const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectCurrentUser)

    const handleNavigate = (path: string) => {
        navigate(path);
    }

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/signin');
    }

    useEffect(() => {
        if (user && window.location.pathname === '/') {
            navigate('/home')
        } else if (!user && window.location.pathname === '/') {
            navigate('/signin')
        }
    })

    return (
        <div className="navContainer">
            <div className="navLogo">
                <span className="logoHeader">Steal</span>
            </div>
            <div className="navButtons">
                <span className="links" onClick={() => handleNavigate('/home')} >Home</span>
                <span className="links" onClick={() => handleNavigate('/store')} >Store</span>
                <span className="links" onClick={() => handleNavigate('/about')} >About</span>
                {user && <span className="links" onClick={() => handleNavigate('/favorites')} >Favorites</span>}
            </div>
            <div className="navAvatar">
                {user && <img onClick={() => handleNavigate('/profile')} className="img" src={user.photoURL ? user.photoURL : "/avatar.jpg"} alt="avatar" />}
                <h3 onClick={user ? () => handleLogout() : () => handleNavigate('/signin')} >{user ? 'logout ' + user.email : 'signin'}</h3>
            </div>
        </div>
    );
};

export default NavBar;
