import React from 'react'
import Pricebar from '../Component/Sidebar/price'
import style from '../page/Style/myorder.module.css'
import MediaCard from '../Component/cards/card'

function Cart() {
    return (
      <div className={style.Container}>
        
          <div className={style.landingcontainer}>
            <div className={style.left}>
                <Pricebar />
            </div>
            <div className={style.right}>
                <MediaCard />
            </div>

        </div>
      </div>
    )
}
export { Cart}