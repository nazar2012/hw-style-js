import { TfiTimer } from "react-icons/tfi";
import { AiOutlinePieChart } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import DishesInfo from "../DishesInfo/DishesInfo";
import DisheItem from "./DishesItemStyle"
import DisheImg from "./DisheImgStyle"
import DisheText from "./DisheTextStyle"
import DisheInfo from "./DisheInfoStyle";


import Difficulty from "./Difficulty"

function DishesItem({ name, time, servings, calories, image, difficulty }) {
  return (
    <DisheItem>
      <DisheImg src={image} alt={name} />
      <DisheText>{name}</DisheText>

      <DisheInfo>
        <DishesInfo text={time} icon={<TfiTimer />} />
        <DishesInfo text={servings} icon={<AiOutlinePieChart />} />
        <DishesInfo text={calories} icon={<GiNetworkBars />} />
      </DisheInfo>

      <Difficulty difficulty={difficulty} />
    </DisheItem>
  );
}

export default DishesItem