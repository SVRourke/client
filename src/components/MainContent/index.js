import React from 'react'
import FindOrCreatePage from '../FindOrCreate'
import { useState } from 'react'
import session from "../../session"

function MainContent() {
    const [currentComp, setCurrentComp] = useState("find_create");

    const viewFindCreate = () => setCurrentComp("find_create");
    const viewLobby = () => setCurrentComp("lobby");
    const viewGame = () => setCurrentComp("game");

    const page_control = (command) => setCurrentComp(command)

    switch (currentComp) {
        case "lobby":
            return <h1>LOBBY</h1>
        case "game":
            return <h1>GAME</h1>
        default:
            return (
                <>
                    <FindOrCreatePage page_control={page_control} />
                    <button onClick={viewLobby} >LOBBY</button>
                    <button onClick={viewGame} >GAME</button>
                </>
            )
    }
}

export default MainContent