
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GameType } from '../../Types/GameType';
import { useNavigate } from 'react-router-dom';

interface GameCardProps {
    game: GameType;
}

export const CardGame = ({ game }: GameCardProps) => {
    const navigate = useNavigate();

    const handleNavigateGame = () => {
        navigate(`/game/${game.id}`)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={game.coverUrl}
                title={game.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {game.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {game.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="body2" color="green">
                    price: ${game.price}
                </Typography> &nbsp;
                <Button variant='contained' color="success" size="small">Buy now</Button>
                <Button size="small" onClick={handleNavigateGame}>Learn More</Button>
            </CardActions>
        </Card>
    );
}