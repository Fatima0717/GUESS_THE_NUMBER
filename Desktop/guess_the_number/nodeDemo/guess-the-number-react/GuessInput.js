import React from 'react';

const GuessInput = ({ guess, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="number" 
                value={guess} 
                onChange={onChange} 
                placeholder="Enter your guess" 
                required 
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default GuessInput;
