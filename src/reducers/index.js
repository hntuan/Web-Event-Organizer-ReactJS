import { combineReducers } from "redux";
import gallery from "./gallery";
import price from "./price";
import services from "./services";
import reviews from "./reviews";
import home from "./home";
const webReducers = combineReducers({ 
    gallery: gallery,
    price: price,
    services: services,
    reviews: reviews,
    home: home,
})

export default webReducers;