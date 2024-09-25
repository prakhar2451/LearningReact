import { IMG_CDN } from "../utils/constants";

const RestaurantCard =({resName, cuisines, rating, price}) => { // destructuring on the fly
    // console.log(props);

    // const{resName, cuisines, rating, price} = props; // if we have destur

    return (
        <div className="res-card">
        <img
        className="res-logo"  
        src={IMG_CDN}

        />
            <h2>{resName}</h2>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{price}</h4>
        </div>
    );
};
export default RestaurantCard;