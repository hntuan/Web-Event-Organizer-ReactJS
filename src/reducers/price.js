import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        name: "For Birthdays",
        price: 250.99,
    },
    {
        name: "For Weddings",
        price: 450.99,
    },
    {
        name: "For Concerts",
        price: 650.99,
    },
    {
        name: "For Others",
        price: 850.99,
    },
];

var price = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}



export default price;