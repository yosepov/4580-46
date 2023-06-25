import './errorMsg.css';

interface ErrorMessageProps {
    errorMsg: string;
}

export const ErrorMessage = ({errorMsg}: ErrorMessageProps) => {

    return <p className="errorMsg">{errorMsg}</p>
}


