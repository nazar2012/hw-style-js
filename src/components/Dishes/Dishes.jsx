import DishesItem from "../DishesItem/DishesItem";
import Dishe from "./DishesStyle"

function Dishes({dishes}) {
    return (
        <Dishe>{dishes.map((item)=>{
            return(
              <DishesItem key={item.name} {...item}/>
            )
          })}</Dishe>
    )
}

export default Dishes