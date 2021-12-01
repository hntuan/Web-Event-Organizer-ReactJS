import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/slide-1.jpg',
    },
    {
        img: './img/slide-2.jpg',
    },
    {
        img: './img/slide-3.jpg',
    },
    {
        img: './img/slide-4.jpg',
    },
    {
        img: './img/slide-5.jpg',
    },
    {
        img: './img/slide-6.jpg',
    },
    
    
];

var home = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default home;