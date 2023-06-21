import React, { useState } from 'react';
import './Signin.css';
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignupMsg } from '../Signin/SignupMsg';
import CloseIcon from '@mui/icons-material/Close';

interface SigninPageProps {
  handleSigninToggle: () => void;
}

export const SigninPage: React.FC<SigninPageProps> = ({ handleSigninToggle }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleIsClosed = () => {
    setIsClosed(!isClosed);
    handleSigninToggle();
  };

  const [isSignin, setIsSignin] = useState(false);

  const handleIsSignin = () => {
    setIsSignin(!isSignin);
  };
  

  return (
    <div className={`signinContainer ${isClosed ? 'close' : ''}`}>
      <div className="signBox">
        <div className="closeIcon" onClick={handleIsClosed}>
          <CloseIcon />
        </div>
        <h1 className="signinTitle">{isSignin ? 'Login' : 'Signup'}</h1>
        <InputText placeholder="username" type="text" />
        <InputText placeholder="password" type="password" />
        {!isSignin && <InputText placeholder="repassword" type="password" />}
        <MainButton title={isSignin ? 'Signin' : 'Signup'} />
        <SignupMsg
          text={isSignin ? 'Not a user yet? Click to SignUp!' : 'already have an account? Signin!'}
          handleOnClick={handleIsSignin}
        />
      </div>
    </div>
  );
};
