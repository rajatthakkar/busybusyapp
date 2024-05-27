import React from 'react'
import { TextField } from '@mui/material'
import style from '../page/Style/signup.module.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function Signup() {
    return (
        <div className={style.loginBox}>

            <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                Sign in
            </Typography>

            <form className={style.form}>
                <TextField className={style.email} label="Email" id="fullWidth" />
                <TextField className={style.password} label="Password" id="fullWidth" />
                <TextField className={style.password} label="Password" id="fullWidth" />
            </form>
            <Button variant="contained" className={style.loginBtn} >Sign in</Button>
        </div>
    )
}
