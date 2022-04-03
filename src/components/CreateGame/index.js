import React from 'react'
import { useState } from 'react';

function CreateGame() {
    const [gameInfo, setGameInfo] = useState({
        "name": "",
        "password": ""
    })

    const inputHandler = (e) => console.log(e.target);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Game Name:</label>
            <input type="text" name="game_name" onChange={inputHandler} />
            <label>Game Password:</label>
            <input type="text" name="game_password" onChange={inputHandler} />
            <input type="submit" value="Create User" />
        </form>
    )
}

export default CreateGame