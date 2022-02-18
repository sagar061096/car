import React from 'react'
import Cards from './Cards.js'

function CardList(props) {
  return (
    
    
        props.cardList.map((cards)=>{
            return <Cards cards={cards}/>
        })
  )
}

export default CardList