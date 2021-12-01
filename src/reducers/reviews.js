import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: "./img/pic-1.png",
        name: "John Smith",
        content: "Happy client",
        dicription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut et perferendis sed harum ratione repellendus corrupti hic eveniet blanditiis? Minima dolor ducimus aspernatur molestias, unde, repellendus ipsam quisquam vero consequatur, error excepturi reiciendis animi ratione. Maiores ipsa harum dolore ad id iusto enim distinctio rerum iure cupiditate, numquam obcaecati. Modi repellendus ipsam in veniam, hic architecto placeat cum repellat? Sunt quasi non cupiditate debitis inventore modi neque, odio dolorum dolor autem beatae facilis repudiandae sit soluta minima sapiente nostrum exercitationem officia alias maiores quos tenetur voluptatum distinctio quas. Iste blanditiis vitae porro voluptas veniam animi sed exercitationem nostrum sit maiores.",
    },
    {
        img: "./img/pic-2.png",
        name: "John Smith",
        content: "Happy client",
        dicription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut et perferendis sed harum ratione repellendus corrupti hic eveniet blanditiis? Minima dolor ducimus aspernatur molestias, unde, repellendus ipsam quisquam vero consequatur, error excepturi reiciendis animi ratione. Maiores ipsa harum dolore ad id iusto enim distinctio rerum iure cupiditate, numquam obcaecati. Modi repellendus ipsam in veniam, hic architecto placeat cum repellat? Sunt quasi non cupiditate debitis inventore modi neque, odio dolorum dolor autem beatae facilis repudiandae sit soluta minima sapiente nostrum exercitationem officia alias maiores quos tenetur voluptatum distinctio quas. Iste blanditiis vitae porro voluptas veniam animi sed exercitationem nostrum sit maiores.",
    },
    {
        img: "./img/pic-3.png",
        name: "John Smith",
        content: "Happy client",
        dicription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut et perferendis sed harum ratione repellendus corrupti hic eveniet blanditiis? Minima dolor ducimus aspernatur molestias, unde, repellendus ipsam quisquam vero consequatur, error excepturi reiciendis animi ratione. Maiores ipsa harum dolore ad id iusto enim distinctio rerum iure cupiditate, numquam obcaecati. Modi repellendus ipsam in veniam, hic architecto placeat cum repellat? Sunt quasi non cupiditate debitis inventore modi neque, odio dolorum dolor autem beatae facilis repudiandae sit soluta minima sapiente nostrum exercitationem officia alias maiores quos tenetur voluptatum distinctio quas. Iste blanditiis vitae porro voluptas veniam animi sed exercitationem nostrum sit maiores.",
    },
    {
        img: "./img/pic-4.png",
        name: "John Smith",
        content: "Happy client",
        dicription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut et perferendis sed harum ratione repellendus corrupti hic eveniet blanditiis? Minima dolor ducimus aspernatur molestias, unde, repellendus ipsam quisquam vero consequatur, error excepturi reiciendis animi ratione. Maiores ipsa harum dolore ad id iusto enim distinctio rerum iure cupiditate, numquam obcaecati. Modi repellendus ipsam in veniam, hic architecto placeat cum repellat? Sunt quasi non cupiditate debitis inventore modi neque, odio dolorum dolor autem beatae facilis repudiandae sit soluta minima sapiente nostrum exercitationem officia alias maiores quos tenetur voluptatum distinctio quas. Iste blanditiis vitae porro voluptas veniam animi sed exercitationem nostrum sit maiores.",
    },
];

var reviews = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}



export default reviews;