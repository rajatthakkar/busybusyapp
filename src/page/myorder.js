import { Typography } from '@mui/material'
import React from 'react'
import style from './Style/orderContainer.module.css'
export default function Myorder() {
    return (
        <div className={style.orderContainer}>
            <div>
                <Typography align='center' variant='h3' fontWeight={'bold'}>Your Order</Typography>
                <Typography align='center' variant='h6' fontWeight={'bold'}>Ordered On:- </Typography>
            </div>
            <div className={style.table}>
                <table >
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                    <tr>
                        <td>Alfreds</td>
                        <td>Maria</td>
                        <td>Germany</td>
                        <td>Mexico</td>
                    </tr>
               
                  
                </table>
            </div>
        </div>
    )
}
