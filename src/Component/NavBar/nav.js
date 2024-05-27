import React from 'react'
import style from '../NavBar/Style/nav.module.css'
 function NavBar() {
  return (
    <div className={style.nav}>
       <div className={style.logo}>
        <h5>Busy Buy</h5>
       </div>
       <div className={style.right}>
        <h5 className={style.home}>Home</h5>
        <h5 className={style.signin}>SignIn</h5>
        <h5 className={style.home}>My Order</h5>
        <h5 className={style.signin}>Cart</h5>
        <h5 className={style.signin}>LogOut</h5>
       </div>
    </div>
  )
}

export {NavBar}