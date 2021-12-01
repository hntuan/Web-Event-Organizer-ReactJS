import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/g-1.jpg',
    },
    {
        img: './img/g-2.jpg',
    },
    {
        img: './img/g-3.jpg',
    },
    {
        img: './img/g-4.jpg',
    },
    {
        img: './img/g-5.jpg',
    },
    {
        img: './img/g-6.jpg',
    },
    {
        img: './img/g-7.jpg',
    },
    {
        img: './img/g-8.jpg',
    },
    {
        img: './img/g-9.jpg',
    },
];

var gallery = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default gallery;