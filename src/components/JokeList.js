import React, {useState} from 'react'
import axios from 'axios'

const JokeList = props => {
const [jokeList, setJokeList] = useState([
    {
        id: 1,
        author_id: 1,
        firstLine: 'What did the duck say when she bought lipstick?',
        secondLine: 'Put it on my Bill!',
        rating: 4
    },
    {
        id: 1,
        author_id: 1,
        firstLine: 'What did the drummer call his twin daughters?',
        secondLine: 'Anna one, Anna two!',
        rating: 4
    },
    {
        id: 1,
        author_id: 1,
        firstLine: 'How did Darth Vader know what Luke got him for Christmas?',
        secondLine: 'He felt his presents!',
        rating: 4
    },
    {
        id: 1,
        author_id: 1,
        firstLine: 'What does a zombie vegetarian eat?',
        secondLine: '“GRRRAAAIINS!"',
        rating: 4
    },
])}

export default JokeList;