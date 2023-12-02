import React from 'react'
import '../styles/style.css'
import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';



export const Main = () => {

    const { id } = useParams();

    const myScore = id;

    let compliment;

    if (myScore === '3') {
    compliment = "Wow, you're a genius! Perfect score!";
    } else if (myScore === '2') {
    compliment = "Great job! You're doing really well!";
    } else if (myScore === '1') {
    compliment = "Good effort! Keep it up!";
    } else if (myScore === '0') {
    compliment = "Don't worry, you can improve! Keep practicing.";
    } else {
    compliment = "Invalid score"; // Handle other cases if needed
    }

    return (
        <div className='score'>
          Your Score - {myScore}
          <div className='compl'>{compliment}</div>
        </div>
    )
}
