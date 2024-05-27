import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../cards/Style/style.module.css'
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 300,margin:1 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
 
        <Button size="large" variant='contained' className={style.crdButton}>Share</Button>
 
    </Card>
  );
}