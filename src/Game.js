import React, {useState} from 'react';

const Game = () => {
    const [number, setNumber] = useState(Math.round(Math.random() * 10))
    const [freeAttempt, setFreeAttempt] = useState(3)
    const [message, setMessage] = useState('')
    const [guess, setGuess] = useState('')
    const [score, setScore] = useState(0)

    const handleInput = (e) => {
        setGuess(e.target.value)
    }


    const handleClick = () => {

        if (number === +guess) {
            setMessage('Вы выиграли')
            setScore(score + 1)
        }
        if (freeAttempt === 0) {
            setMessage('Вы проиграли')
        }

        if (freeAttempt) {
            setFreeAttempt(freeAttempt - 1)
        }
    }
    const handleRestart = () => {
        setMessage('')
        setGuess('')
        setFreeAttempt(3)
        setNumber(Math.round(Math.random() * 10))


    }


    return (
        <div className="container">
            <div className="row my-5">
                <div className='col-6 offset-3'>
                    <h1>Угадай число от 0 до 10. <br/> C 3х попыток</h1>

                    <div className={'d-flex'}>
                        <input type="number" onChange={handleInput} placeholder='Введите число'
                               className='form-control'/>
                        <button onClick={handleClick} disabled={!guess} className={'btn btn-success ms-2 '}>Check
                        </button>
                        <button onClick={handleRestart} className={'btn btn-warning ms-2'}>restart</button>
                    </div>
                    {
                        message.length === 0 &&
                        <h2>
                            у вас осталось {freeAttempt} {freeAttempt === 1 ? 'попытка' : 'попытки'}
                        </h2>
                    }
                    <h2>Ваш счет: {score}</h2>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    );
};
export default Game;