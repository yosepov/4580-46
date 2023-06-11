import "./Adir.css"

export const AdirButton = () => {

    const handleOnClick = () => {

        console.log("Adir Politi")
        alert("button will self destruct in...")
        alert("5...")
        alert("4...")
        alert("3...")
        alert("2...")
        alert("1...")
        alert(`
        ⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾
        ⣿⣿⣿⣶⣾⣿⣿⣿⣷⣴⣿⣿⡿
        ⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
        ⠀⣿⣏⠈⠉⣿⣿⡟⠉⠁⣹⣷⠀⠀⠀⠀⠀⣀⡀
        ⠀⠹⣿⣿⣿⣿⣤⣿⣿⣿⣿⠏⠀⠀⣠⣾⠟⠛⠻⣷⡄
        ⠀⠀⠀⠉⠙⢻⣿⡟⠋⠉⠀⠀⠀⠀⣸⡟⠀⣾⡗♡ ⣼⡇
        ⠀⠀⠀⠀⠀⣼⣿⣿⣦⡀⠀⠀⠀⠀⣿⡇⠀⠀⠙⠻⠟⠋
        ⠀⠀⠀⠀⣸⣿⣿⣿⣿⣷⣄⠀⠀⠀⢹⣧⠀⠀⠀⠀⠀
        ⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠻⣷⡀
        ⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⢸⣷
        ⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿
        ⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢀⣼⡏
        ⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⡾⠋
        ⠀⠀⠀⠀⠀⣿⢽⣿⢿⣿⣿⣿⠿⠋⠁
        ⠀⠀⠀⠀⠈⠉⠈⠉⠀⠈⠉
        Have a nice week!`)
        }
        return (<>
        <button onClick={() => {handleOnClick()}} className="button">Hit Me</button>
    </>)
}