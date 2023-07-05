import "./newGame.css";
import {useState} from "react";
import {InputText} from "../../Form/Input/InputText";
import {ErrorMessage} from "../../Form/Errors/ErrorMessage";
import {MainButton} from "../../Buttons/MainButton";
import {toast} from "react-toastify";
import {GameCard} from "../../GameCards/GameCard";
import { useDispatch } from "react-redux";
import { setCurrentGame } from "../../../features/Game/gameSlice";


// interface NewGameProps {
//     title: string,
//     price: number;
//     description: string,
//     genre: string[],
//     imageUrl: string,
//     titleImg: string,
//
//
// }
export const NewGame = () => {
    const dispatch = useDispatch();



    const [gameName, setGameName] = useState<string>("");
    const [gameNameError, setGameNameError] = useState<string>("");
    const [gameDescription, setGameDescription] = useState<string>("");
    const [gameDescriptionError, setGameDescriptionError] = useState<string>("");
    const [gameGenre, setGameGenre] = useState<string[]>([""]);
    const [gameGenreError, setGameGenreError] = useState<string>("");
    const [gamePrice, setGamePrice] = useState<number>(0);
    const [gamePriceError, setGamePriceError] = useState<string>("");
    const [gameUrl, setGameUrl] = useState<string>("");
    const [gameUrlError, setGameUrlError] = useState<string>("");
    const [gameAdded, setGameAdded] = useState<boolean>(false);

    const handleGameName = (value: string) => {
        // we call setUsername and assign to it the value we get from the input
        setGameName(value);
        if (value === "") {
            setGameNameError("Title is required")
        } else  if (value.length < 4 || value.length > 16) {
            setGameNameError("Title must be between 4 to 16 letters")
        }else {
            setGameNameError("")
        }
    }

    const handleGameDescription = (value: string) => {
        // we call setUsername and assign to it the value we get from the input
        setGameDescription(value);
        if (value === "") {
            setGameDescriptionError("Description is required")
        } else  if (value.length < 20 || value.length > 50) {
            setGameDescriptionError("Description must be between 20 to 50 letters")
        }else {
            setGameDescriptionError("")
        }
    }

    const handleGamePrice = (value: string) => {
        const price = Number(value)
        // we call setUsername and assign to it the value we get from the input
        setGamePrice(price);
        if (value === '') {
            setGamePriceError("Price is required")
        } else  if (isNaN(price) || price < 1 || price > 1000) {
            setGamePriceError("Price must be between 1 to 1000 dollars")
        }else {
            setGamePriceError("")
        }
    }

    const handleGameGenre = (value: string) => {
        // we call setUsername and assign to it the value we get from the input
        setGameGenre([value]);
        if (value === '') {
            setGameGenreError("Genre is required")
        } else  if (value.length < 4 || value.length > 20) {
            setGameGenreError("Genre must be between 4 to 20 letters")
        }else {
            setGameGenreError("")
        }
    }

    const handleGameUrl = (value: string) => {
        // we call setUsername and assign to it the value we get from the input
        setGameUrl(value);
        if (value === "") {
            setGameUrlError("Url is required")
        }else {
            setGameUrlError("")
        }
    }

    const handleAddGame = () => {
        const game = {
            title: gameName,
            description: gameDescription,
            genres: gameGenre,
            imageUrl: gameUrl,
            price: gamePrice
        };

        dispatch(setCurrentGame(game));
        setGameAdded(!gameAdded);
    };


    return <>
        <div className="containerDiv">
            <div className="formDiv">
                <InputText type='text' placeholder="Please Enter Game's Name" handleOnChange={handleGameName} />
                <ErrorMessage errorMsg={gameNameError} />
                <InputText className='inputForm inputDescription' type='text' placeholder="Please Enter Game's Description" handleOnChange={handleGameDescription} />
                <ErrorMessage errorMsg={gameDescriptionError} />
                <InputText className='inputForm' type='text' placeholder="Please Enter Game's Genre" handleOnChange={handleGameGenre} />
                <ErrorMessage errorMsg={gameGenreError} />
                <InputText className='inputForm' type='text' placeholder="Please Enter Game's Url" handleOnChange={handleGameUrl} />
                <ErrorMessage errorMsg={gameUrlError} />
                <InputText className='inputForm' type='number' placeholder="Please Enter Game's Price" handleOnChange={handleGamePrice} />
                <ErrorMessage errorMsg={gamePriceError} />
                <MainButton title='Add Game' handlOnClick={handleAddGame} />
            </div>
            <div className="gameDiv">
                {gameAdded && (
                    <GameCard
                        title={gameName}
                        imageUrl={gameUrl}
                        description={gameDescription}
                        price={gamePrice}
                        genres={gameGenre}
                        titleImg="Yossi"
                        home="Yalla"
                        download="No"
                    />
                )}
            </div>
        </div>
    </>
}