import React from 'react'

function FindOrCreatePage({page_control}) {
    const handleCreate = (e) => {
        e.preventDefault()
        alert("Creating Game")
        // sent request to server that creates the game
        setTimeout(() => {
            page_control("lobby")
        }, 500)
        // if fails, flash error
        // if succeeds, save take returned info to localStorage and display the lobby
    }
    const handleJoin = (e) => {
        e.preventDefault()
        alert("Creating Game")
        // sent request to server that finds the game
        setTimeout(() => {
            page_control("lobby")
        }, 500)
        // if fails, flash error
        // if succeeds, save take returned info to localStorage and display the lobby
    }
  return (
      <>
        <form onSubmit={handleCreate}>
            <label>Game Name</label>
            <input type="text" />
            <label>Game Password</label>
            <input type="text" />
            <label>User Name</label>
            <input type="text" />
            <input type="submit" value="Create Game and User" />
        </form>

        <form onSubmit={handleJoin}>
            <label>Game Password</label>
            <input type="text" />
            <label>User Name</label>
            <input type="text" />
            <input type="submit" value="Join Game" />
        </form>

      </>
  )
}

export default FindOrCreatePage