import React from 'react'
import style from './Style/price.module.css'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';

export default function Pricebar() {
  return (
    <div className={style.sidebar}>

            <Typography variant='h6' fontWeight={'bold'}>
              Total Price:-2000 /-
            </Typography>
            <Button size="large" variant='contained' fullWidth  className={style.crdButton}>Purchase</Button>
 
   
    </div>
  )
}
