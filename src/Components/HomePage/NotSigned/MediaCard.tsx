import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReadMore from './ReadMore/ReadMore';
import './NotSigned.css'

interface MediaCardProps{
    title: string,
    cardDescription: string,
    image: string,
    video:string,
    selected?: boolean;
    onSelect?: () => void;
}

export default function MediaCard({title,cardDescription,image,video}:MediaCardProps) {
    const [isRead, setIsRead] = React.useState(false);

    const handleClick = () => {
setIsRead(!isRead)
    }
  return (
    <Card className='card' sx={{ maxWidth: 345, height: 400 , margin: '50px'}}>
      <CardMedia
        sx={{ height: 0, paddingTop: '57%' }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
        {title}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
        {cardDescription.length > 100 ? `${cardDescription.slice(0, 100)}...` : cardDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{marginRight: "38px"}} onClick={handleClick}></Button>
        <div className="read"><ReadMore video={video} img={image} title={title} description={cardDescription} /></div>
      </CardActions>
    </Card>
  );
}