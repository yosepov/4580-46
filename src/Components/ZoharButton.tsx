import './ZoharButton.css'
export const ZoharButton = () => {
    const handleButton = () => {
        alert("This is Zohars Button")
    }

    return <>
    <button className="zoharBtn" onClick={handleButton}>Zohar</button>
    </>
}