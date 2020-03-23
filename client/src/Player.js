import React from "react";
import PlayerCard from "./PlayerCard"

const dark = dark`
 body{
    background-color: black;
    color: white;
 } 
`
const light = light`
 body{
    background-color: white;
    color: black;
 } 
`

class App extends React.Component {

    
    constructor() {
        super();
        this.state = {
          playerData: [],
          
        }
      }

      componentDidMount() {
        fetch("http://localhost:5000/api/players")
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.setState({ playerData: data});
            console.log(this.state.playerData)
          })
          .catch(err => console.error(err));

        }

      render() {
          return (
              <div>
                  <h2>Players</h2>
                  <PlayerCard playerData={this.state.playerData} />
              </div>
          )

      }
    

}

export default App;