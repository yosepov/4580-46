import './OmriButton.css'


export const OmriButton = (): JSX.Element => {
    return(<>
    <button id='myButton' onClick={click}>Jawames</button>
    </>)
}
const click = () => {
    console.log("clicked");
    
}