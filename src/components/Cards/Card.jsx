import React from 'react'
import Style from "./_card.module.scss";


function Card(props) {
  return (
    <button className={Style.card}>
        {props.text}
    </button>
  )
}

export default Card