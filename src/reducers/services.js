import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        icon: 'fas fa-map-marker-alt' ,
        name: 'Venue selection',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, fugiat.',
    },
    {
        icon: 'fas fa-envelope' ,
        name: 'Invitation card',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, fugiat.',
    },
    {
        icon: 'fas fa-music' ,
        name: 'Entertainment',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, fugiat.',
    },
    {
        icon: 'fas fa-utensils' ,
        name: 'Food and drinks',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, fugiat.',
    },
    {
        icon: 'fas fa-photo-video' ,
        name: 'Photos and video',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, fugiat.',
    },
    {
        icon: 'fas fa-birthday-cake' ,
        name: 'Custom Food',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, fugiat.',
    },
];

var services = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default services;