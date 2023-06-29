import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="253434480776-3brk708ir92nkdjiuaa5u2kjs8kld26o.apps.googleusercontent.com">

      <App />
    </GoogleOAuthProvider>

  </React.StrictMode>
);
