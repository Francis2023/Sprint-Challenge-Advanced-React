import React from "react";
import useDarkMode from "./useDarkMode"



const PlayerCard = props => {
    
    console.log(props)
    const [ theme, toggleTheme ] = useDarkMode()

    return (
            <div
              style={{
                  background: theme === 'dark' ? '#000' : '#fff',
                  color: theme === 'dark' ? '#fff' : '#000',
              }}
             >
             <button type="button" onClick={toggleTheme}>
              Switch Mode
             </button>
             <p>{props.playerData.name}</p>
            <p>{props.playerData.country}</p>
            <p>Number of searches: {props.playerData.searches}</p>
        </div>
    )

}

export default PlayerCard;