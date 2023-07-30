import { useState, useEffect } from 'react'
import { Button, MenuItem, TextField, alpha } from '@mui/material';
import { useForm } from 'react-hook-form';
import { GameType, gameCategories, gameConsoles } from '../../../../Types/GameType';
import "./addGame.css";
import { addGameToDB } from '../../../../services/firebase/addGameToDB';
import { useNavigate, useParams } from 'react-router-dom';
import { UploadFiles } from '../../../UploadFiles/UploadFiles';
import { getGameFromDB } from '../../../../services/firebase/getGameFromDB';
import { editGameToDB } from '../../../../services/firebase/editGameToDB';

interface AddGameProps {
    isEdited?: boolean;
}

export const AddGame = ({ isEdited }: AddGameProps) => {
    const { register, handleSubmit, formState } = useForm<GameType>();
    const [game, setGame] = useState<GameType>()
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGame = async () => {
            if (id) {
                const getGame = await getGameFromDB(id)
                setGame(getGame);
            }
        }
        fetchGame()
    }, [id])


    const inputStyle = {
        backgroundColor: alpha("#FFEBEB", 0.6),
        borderBottom: '2px solid #FF6000',
        input: { color: 'white' },
    }

    const addGameSubmit = async (game: GameType) => {
        if(isEdited){
            if(id){
                await editGameToDB(game, id)
            }
        }else{
            await addGameToDB(game)
        }
        navigate('/home')
    }

    const categoriesMenuItems = gameCategories.map((category) => (
        <MenuItem key={category} value={category}>
            {category}
        </MenuItem>
    ))

    const gameMenuItems = gameConsoles.map((console) => (
        <MenuItem key={console} value={console}>
            {console}
        </MenuItem>
    ))

    const addGameForm = (<div className='addGameContainer'>
        <form onSubmit={handleSubmit(addGameSubmit)}>

            <TextField
                type='text'
                label="name"
                variant='standard'
                color='warning'
                sx={inputStyle}
                title='name'
                {...register("name")}
            />
            <br />
            <span>{formState.errors.name?.message}</span>
            <br />
            <br />
            <TextField
                type='text'
                label="description"
                variant='standard'
                color='warning'
                sx={inputStyle}
                title='description'
                {...register("description")}
            />
            <br />
            <br />
            <TextField
                type='text'
                label="coverUrl"
                variant='standard'
                color='warning'
                sx={inputStyle}
                title='coverUrl'
                {...register("coverUrl")}
            />
            <br />
            <br />
            <TextField
                type='text'
                label="videoUrl"
                variant='standard'
                color='warning'
                sx={inputStyle}
                title='videoUrl'
                {...register("videoUrl")}
            />
            <br />
            <br />
            <TextField
                type='number'
                label="price"
                variant='standard'
                color='warning'
                sx={inputStyle}
                title='price'
                {...register("price")}
            />
            <br />
            <br />
            <TextField
                type='text'
                label="company"
                variant='standard'
                color='warning'
                sx={inputStyle}
                title='company'
                {...register("company")}
            />
            <br />
            <br />
            <TextField
                type='date'
                label="release date"
                variant='standard'
                color='warning'
                sx={inputStyle}
                title='release date'
                {...register("release")}
            />
            <br />
            <br />
            <TextField
                select
                label="console"
                variant='standard'
                color='warning'
                sx={inputStyle}
                title='console'
                defaultValue={gameConsoles[0]}
                {...register("console")}
            >
                {gameMenuItems}
            </TextField>
            <br />
            <br />
            <TextField
                select
                label="categories"
                variant='standard'
                color='warning'
                sx={inputStyle}
                title='categories'
                defaultValue={gameCategories[0]}
                {...register("category")}
            >
                {categoriesMenuItems}
            </TextField>
            <UploadFiles
                fileMetaData='image/jpeg'
                fileTypes={['jpeg', 'png']}
                fullStoragePath='games/images'
                uploadButtonTitle='upload game doc'
            />
            <Button type='submit'>Add Game</Button>
        </form>

    </div>)




    return <>
        {isEdited ? game ? <div className='addGameContainer'>
            <form onSubmit={handleSubmit(addGameSubmit)}>

                <TextField
                    type='text'
                    label="name"
                    defaultValue={game.name}
                    variant='standard'
                    color='warning'
                    sx={inputStyle}
                    title='name'
                    {...register("name")}
                />
                <br />
                <span>{formState.errors.name?.message}</span>
                <br />
                <br />
                <TextField
                    defaultValue={game.description}
                    type='text'
                    label="description"
                    variant='standard'
                    color='warning'
                    sx={inputStyle}
                    title='description'
                    {...register("description")}
                />
                <br />
                <br />
                <TextField
                    type='text'
                    label="coverUrl"
                    defaultValue={game.coverUrl}
                    variant='standard'
                    color='warning'
                    sx={inputStyle}
                    title='coverUrl'
                    {...register("coverUrl")}
                />
                <br />
                <br />
                <TextField
                    type='text'
                    defaultValue={game.videoUrl}
                    label="videoUrl"
                    variant='standard'
                    color='warning'
                    sx={inputStyle}
                    title='videoUrl'
                    {...register("videoUrl")}
                />
                <br />
                <br />
                <TextField
                    type='number'
                    label="price"
                    variant='standard'
                    defaultValue={game.price}
                    color='warning'
                    sx={inputStyle}
                    title='price'
                    {...register("price")}
                />
                <br />
                <br />
                <TextField
                    type='text'
                    defaultValue={game.company}
                    label="company"
                    variant='standard'
                    color='warning'
                    sx={inputStyle}
                    title='company'
                    {...register("company")}
                />
                <br />
                <br />
                <TextField
                    type='date'
                    label="release date"
                    variant='standard'
                    defaultValue={game.release}
                    color='warning'
                    sx={inputStyle}
                    title='release date'
                    {...register("release")}
                />
                <br />
                <br />
                <TextField
                    select
                    label="console"
                    defaultValue={game.console}
                    variant='standard'
                    color='warning'
                    sx={inputStyle}
                    title='console'
                    {...register("console")}
                >
                    {gameMenuItems}
                </TextField>
                <br />
                <br />
                <TextField
                    select
                    defaultValue={game.category}
                    label="categories"
                    variant='standard'
                    color='warning'
                    sx={inputStyle}
                    title='categories'
                    {...register("category")}
                >
                    {categoriesMenuItems}
                </TextField>
                <UploadFiles
                    fileMetaData='image/jpeg'
                    fileTypes={['jpeg', 'png']}
                    fullStoragePath='games/images'
                    uploadButtonTitle='upload game doc'
                />
                <Button type='submit'>Update</Button>
            </form>

        </div>
            : <h1>Loading....</h1> : addGameForm}
    </>
}




