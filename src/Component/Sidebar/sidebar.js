import React from 'react'
import style from './Style/sidebar.module.css'
import { Typography } from '@mui/material'
import CustomMarks from '../slider/slider'
export default function Sidebar() {
  return (
    <div className={style.sidebar}>
        <div>
            <Typography align='center' variant='h5' fontWeight={'bold'}>
              Filter
            </Typography>
            <Typography >
              Price:
            </Typography>
            <CustomMarks />
        </div>
    </div>
  )
}
