import React from 'react'
import '../styles/style.css'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('Taking you to quiz...')
        navigate('/1/0');
    } 
  return (
    <button type="submit" className='welcome' onClick={handleSubmit}>
        Start the Quiz 🏹
    </button>
  )
}
