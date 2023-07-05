import { Button, MenuItem, TextField, alpha } from '@mui/material';
import { useForm } from 'react-hook-form';
import { GameType, gameCategories, gameConsoles } from '../../../../Types/GameType';
import "./addGame.css";

export const AddGame = () => {
    const { register, handleSubmit, formState } = useForm<GameType>();

    const inputStyle = {
        backgroundColor: alpha("#FFEBEB", 0.6),
        borderBottom: '2px solid #FF6000',
        input: { color: 'white' },
    }

    const addGameSubmit = (game: GameType) => {
        console.log(game)
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


    return <>
        <div className='addGameContainer'>
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

                <Button type='submit'>Add Game</Button>
            </form>
        </div>
    </>
}




