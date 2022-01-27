import Card from '../card/card.component'
import './card-list.style.css'

const CardList =(props)=>{
    const{monsters}=props
    return(
        <div className='card-list'>
            {
                monsters.map(
                    (monster,index)=>(
                        <Card key={index} monster={monster}/>
                    )
                )
            }
        </div>
    )
}

export default CardList