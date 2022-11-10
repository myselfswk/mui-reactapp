import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

import cloudBanner from '../assets/images/Banner1.avif';
import YelNBlue from '../assets/images/YelNBlue.avif'

const AppCarousel = (props) => {
  var items = [
    {
      name: "Clouds",
      description: "The Most Relaxing Cloud Image",
      image: cloudBanner
    },
    {
      name: "Yellow And Blue",
      description: "Beautiful Color Mixtures of Yellow And Blue",
      image: YelNBlue
    }
  ]

  return (
    <Carousel animation='slide'>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.image} alt="Items" />
    </Paper>
  )
}

export default AppCarousel;