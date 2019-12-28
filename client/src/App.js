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
    },
    {
      name: "Neeko",
      effects: ["Woodland","Druid"],
    },
    {
      name: "Neeko",
      effects: ["Woodland","Druid"],
    },{
      name: "LeBlanc",
      effects: ["Woodland","Assassin", "Mage"],
      cost: 2
    },{
      name: "LeBlanc",
      effects: ["Woodland","Assassin", "Mage"],
      cost: 2
    },{
      name: "LeBlanc",
      effects: ["Woodland","Assassin", "Mage"],
      cost: 2
    },{
      name: "Ivern",
      effects: ["Woodland","Druid"],
      cost: 1
    },
      ],
    effects: [],
    piecesLimit: 9
  }
  costFilter = pieceCost => {
    return this.state.pieces.filter(function (piece) {
      return piece.cost === pieceCost;
    });
  }
 
getEffects = () =>{
  let team = this.state.team;
    //loop through the team 
  let names =[];
    team.forEach(piece=>{
      names.includes(piece.name) || names.push(piece.name);
    })
    console.log(names);
    //teamEffects contains all the effects
    let teamEffects =[];
   let pieces = this.state.pieces;
   pieces.forEach(piece =>{
     names.includes(piece.name) && (teamEffects = teamEffects.concat(piece.effects));
   })
  console.log(teamEffects);
  // get unique effect names 
  let effectNames = [];
  teamEffects.forEach(effect =>{
    effectNames.includes(effect) || effectNames.push(effect);
  })
  let count = [];
  //count effects
  effectNames.forEach(effect =>{
    //loop teameffects and count 
    let num = 0;
    teamEffects.forEach(name =>{
     effect === name && num ++;
    })
    //end count
    count.push(num);
  })
  console.log(effectNames);
  console.log(count);
  
  
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
              {/* {this.getEffects().map(effect=>{
                return <div className="effect">
                    <div className="effect-count">
                      {effect[1]}
                      </div>
                      <div className="effect-name">
                        {effect[0]}
                      </div>

                </div>
              })} */}
            </div>
          </div>
        </div>


      </div>
    )
  }
}


export default App;
