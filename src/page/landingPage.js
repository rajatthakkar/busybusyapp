import React from 'react'
import Sidebar from '../Component/Sidebar/sidebar'
import style from '../page/Style/landing.module.css'
import MediaCard from '../Component/cards/card'
import { TextField } from '@mui/material'
function LandingPage() {
    return (
      <div>
          <div className={style.searchbox}>
          <TextField fullWidth label="Search By Name" id="fullWidth" />
          </div>
          <div className={style.landingcontainer}>
            <div className={style.left}>
                <Sidebar />
            </div>
            <div className={style.right}>
                <MediaCard />
            </div>

        </div>
      </div>
    )
}
export { LandingPage }