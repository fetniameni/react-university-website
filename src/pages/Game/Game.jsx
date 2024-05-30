import React, { useState } from 'react';
import './Game.css';
const Game = () => {
    const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    }

    const handleGuessChange = (e) => {
        setGuess(e.target.value);
    };

    const handleGuessSubmit = (e) => {
        e.preventDefault();
        const userGuess = parseInt(guess, 10);
        setAttempts(attempts + 1);

        if (userGuess > targetNumber) {
            setMessage('Too high! Try again.');
        } else if (userGuess < targetNumber) {
            setMessage('Too low! Try again.');
        } else {
            setMessage(`Correct You guessed it in ${attempts + 1} attempts`);
        }

        setGuess('');
    };

    const handleReset = () => {
        setTargetNumber(generateRandomNumber());
        setGuess('');
        setMessage('');
        setAttempts(0);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h1 className="text-2xl font-bold mb-4">Guess the Number</h1>
                <p className="mb-4">Guess a number between 1 and 100</p>
                <form onSubmit={handleGuessSubmit} className="mb-4">
                    <input
                        type="number"
                        value={guess}
                        onChange={handleGuessChange}
                        className="w-full p-2 border rounded mb-2"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded"
                    >
                        Guess
                    </button>
                </form>
                <p className="mb-4">{message}</p>
                {message.includes('Correct') && (
                    <button
                        onClick={handleReset}
                        className="w-full bg-green-500 text-white p-2 rounded"
                    >
                        Play Again
                    </button>
                )}
            </div>
        </div>
    );
};

export default Game;