import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Question = ({ no, value, op1, op2, op3, op4, ans, score }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [selected, setSelected] = useState(null);

  const handleButtonClick = () => {
    if (selected && (selected === op1 || selected === op2 || selected === op3 || selected === op4)) {
      console.log(selected);
      console.log('Score', score);
      if (selected === ans && no === '1') {
        score++;
      }
      if (no === '1') {
        navigate(`/2/${score}`);
      }
      if (id) {
        let updatedId = parseInt(id, 10); // Convert id to a number
        if (no === '2' || no === '3') {
          if (selected === ans) {
            updatedId++;
          }
          if (no === '2') {
            navigate(`/3/${updatedId}`);
          }
          if (no === '3') {
            navigate(`/score/${updatedId}`);
          }
        }
      }
    } else {
      alert('Choose one answer');
    }
  };

  return (
    <div className='box'>
      <div className='que'>{value}</div>
      <div className='options'>
        <button className='opt' type="submit" name="option1" onClick={() => setSelected(op1)}>
          {op1}
        </button>
        <button className='opt' type="submit" name="option2" onClick={() => setSelected(op2)}>
          {op2}
        </button>
        <button className='opt' type="submit" name="option1" onClick={() => setSelected(op3)}>
          {op3}
        </button>
        <button className='opt' type="submit" name="option4" onClick={() => setSelected(op4)}>
          {op4}
        </button>
        <button className='sub' onClick={() => handleButtonClick()} type="submit">
          Confirm
        </button>
      </div>
    </div>
  );
};
