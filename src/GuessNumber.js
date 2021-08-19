import React, {useState} from 'react';

const GuessNumber = () => {
    const [number,setNumber] =useState(Math.random * 10)
    const [guessNumber, setGuessNumber] = useState('')
    const [attempt, setAttempt] = useState(0)
    const [message,setMessage] = useState('')
    const [freeAttempt,setFreeAttempt] = useState(3)
    return (
        <div>
            <h4>Угадай чило с 3х попыток</h4>
            <input type="number" value={guessNumber}/>
            <button>CHECK</button>
            <div></div>

        </div>
    );
};

export default GuessNumber;