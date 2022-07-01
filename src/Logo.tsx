import React from 'react';
import CardMedia from '@mui/material/CardMedia';

type TImage = {
  logo : string
}

export function Logo({
  logo
} : TImage) {  
  return (
    <CardMedia
    component="img"
    height="100"
    image={logo}
  />
  );
}