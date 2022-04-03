import React from 'react'
import { useState } from 'react'
import "./create_user.css"

function CreateUser() {
    const [userName, setUserName] = useState("")

    const inputHandler = (e) => setUserName(e.target.value);
    const submitHandler = (e) => {
        e.preventDefault();
        alert(userName);
    }

    return (
        <form id="createUser" onSubmit={submitHandler}>
            <label>Name:</label>
            <input type="text" name="screen_name" onChange={inputHandler} />
            <input type="submit" value="Create User" />
        </form>
    )
}

export default CreateUser