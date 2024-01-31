import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "../Components/Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const {resId} =  useParams();
    console.log(resId);
    
    useEffect(()=>{
        fetchMenu();
    }, [])
    
    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId );
        const json = await data.json();
        setResInfo(json?.data);

        console.log(resInfo);
        console.log(resInfo?.cards[0]?.card?.card?.info)
    }

    if(resInfo == null) return <Shimmer />
    const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    // const items = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

    // console.log(resInfo?.cards[0]?.card?.card?.info)
    console.log(itemCards);

    return (
        <div>
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item)=> <li key={item?.card?.info?.id}>{item?.card?.info?.name} - ₹ {item?.card?.info?.price/100}</li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;