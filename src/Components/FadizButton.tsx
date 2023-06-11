import './fadiz.css'
export const FadizButton = () =>{ 

    const handleButton = () => {
       document.write('This My Button')
    }
    return (
        <>
            <button className="fadizButton" onClick={handleButton}>Fadi Zedan Button</button>
        </>
        
    )
}