import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [guess, setGuess] = useState('');
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [feedback, setFeedback] = useState('');
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const guessNumber = parseInt(guess);

        if (guessNumber === randomNumber) {
            setFeedback('Congratulations! You guessed the number!');
            setAttempts((prevAttempts) => prevAttempts + 1);
        } else if (guessNumber < randomNumber) {
            setFeedback('Too low! Try again.');
            setAttempts((prevAttempts) => prevAttempts + 1);
        } else {
            setFeedback('Too high! Try again.');
            setAttempts((prevAttempts) => prevAttempts + 1);
        }
        setGuess('');
    };

    return (
        <div className="App">
            <h1>Guess the Number</h1>
            <p>{feedback}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    value={guess} 
                    onChange={(e) => setGuess(e.target.value)} 
                    required 
                />
                <button type="submit">Submit Guess</button>
            </form>
            <p>Attempts: {attempts}</p>
        </div>
    );
}

export default App;
