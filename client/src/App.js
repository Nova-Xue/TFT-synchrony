import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    pieces: [
      {
        name: "Maokai",
        effects: ["Woodland","Druid"],
        cost: 1
      },
      {
        name: "Ivern",
        effects: ["Woodland","Druid"],
        cost: 1
      },
      {
        name: "LeBlanc",
        effects: ["Woodland","Assassin", "Mage"],
        cost: 2
      },
      {
        name: "Neeko",
        effects: ["Woodland","Druid"],
        cost: 2
      }
    ],
    team: [{
      name: "Neeko",
      effects: ["Woodland","Druid"],
      cost: 2
    },
    {
      name: "Neeko",
      effects: ["Woodland","Druid"],
      cost: 2
    },
    {
      name: "LeBlanc",
      effects: ["Woodland","Assassin", "Mage"],
      cost: 2
    },],
    effects: [],
    piecesLimit: 9
  }
  costFilter = pieceCost => {
    return this.state.pieces.filter(function (piece) {
      return piece.cost === pieceCost;
    });
  }
  //like a Set
  getUniqueTeam = (team) =>{
    let newTeam =[];
    //loop team to check evey piece 
    team.forEach(piece=>{
        //loop new team to check existence
        if (newTeam.length === 0) {
            newTeam.push(piece);
        } else {
          newTeam.forEach(teamPiece =>{
            teamPiece.name === piece.name || newTeam.push(piece);
          })
        }
       
    })
    return newTeam;
  }
 
getEffects = () =>{
  let team = Array.from(this.getUniqueTeam(this.state.team));
  //effects contains all unique effects from unique team
  
  
  let effects = [];
  //loop through unqiue team pieces to get effects
  team.forEach(piece=>{

    //loop through piece effect to find new effect or add count to existing effect
    piece.effects.forEach(effect=>{
       effects.includes(effect) || effects.push(effect);
    })
  })
  //count effects
 let effectsCount = [];
  effects.forEach(effect => {
    let filteredTeam = team.filter(function (piece) {
        return piece.effects.includes(effect);
    });
    effectsCount.push(filteredTeam.length);
  })
  let teamEffects = [];
  effects.forEach(effect=>{
      teamEffects.push([effect,effectsCount[effects.indexOf(effect)]]);
  })
  return teamEffects;
}
  render() {
    const cost = [1, 2, 3, 4, 5, 7];
    this.getEffects();
    return (
      <div className="page">
        <header>
          header
        </header>
        <div className="main">
          <div id="pieces">
            {
              cost.map(pieceCost => {
                return <div className={"cost" + pieceCost}>
                  <div>
                    cost : {pieceCost}
                  </div>

                  {this.costFilter(pieceCost).map(piece => {
                    return <div className="piece">{piece.name}</div>
                  })}
                </div>
              })
            }

          </div>
          <div id="team">
            <div id="teamMembers">
            {this.state.team.map(member => {
              return <div className="piece">{member.name}</div>
            })}
            </div>
            <div id="teamEffects">
              {this.getEffects()}
            </div>
          </div>
        </div>


      </div>
    )
  }
}


export default App;
