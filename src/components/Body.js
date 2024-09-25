import RestaurantCard from "./RestaurantCard";
const Body =()=> {
    return (
        // search
        // restaurant container
            // restaurant card
        <div className="body">
            <div className="search">search</div>
            <div className="restaurant-container">
                <RestaurantCard  resName= "KFC" cuisines="Fast Food, Burgers" rating="4.0" price="340"/>
                <RestaurantCard  resName="Burger King" cuisines="Wrap, Burgers, American" rating="3.9" />
            </div>
        </div>
    );
};
export default Body;