import React, { Component } from 'react';
import './App.css';
import utils from "./utils";
class App extends Component {

  state = {
    pieces: [],
    team: [],
    effects: [],
    piecesLimit: 9
  }
  componentDidMount (){
    //axios to get all the pieces
    this.loadPieces();
  }
  loadPieces = () =>{
    utils.getPieces()
      .then(res => 
        this.setState({
          pieces : res.data
        }))
      .catch();
  }
  addToTeam = (e) =>{
    //get event
      e.preventDefault();
    //get clicked piece name
      const name = e.target.id;
      console.log(name);
      
    //add to the team 
    let newTeam = this.state.team.concat([name]);
      console.log(newTeam);
    this.setState({
      team : newTeam
    })
      
    }
  costFilter = pieceCost => {
    return this.state.pieces.filter(function (piece) {
      return piece.cost === pieceCost;
    });
  }
 
getEffects = () =>{
  //get all the piece names
  let names = this.state.team;
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
                    return <div className="piece" id={piece.name} onClick={(e)=>this.addToTeam(e)}>{piece.name}</div>
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
