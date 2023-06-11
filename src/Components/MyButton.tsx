


export function MyButton(){
    // ... Logic code...
    console.log("My button")
    const title = 'click me';

    const handleButton = () => {
        console.log("Clicked once....")
    }
    // ... Logic code...

    return (
        <>
        <button onClick={handleButton}>test 1 {title}</button>
        <button onClick={handleButton}>test 2 {title}</button>
        </>
    )
}