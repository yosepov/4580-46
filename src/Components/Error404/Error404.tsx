import { useNavigate } from 'react-router-dom'


export const Error404 = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/signin');
    }

    return <>
    <h1>Error: page not found!</h1>
    <h3>Please navigate back home or try again later</h3>
    <button onClick={handleNavigate}>Click here to navigate back home</button>
    </>
}