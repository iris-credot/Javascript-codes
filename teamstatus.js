const team = {
    _players : [
        {
            firstName : 'John',
            lastName: 'Smith',
             age : 26,
        },
        {
            firstName : 'Joy',
            lastName: 'Smith',
             age : 13,
        },
        {
            firstName : 'Keza',
            lastName: 'Billy',
             age : 43,
        }

    ],
     _games : [
        {
        opponent: 'Leyo',
        teamPoints : 25,
        opponentPoints : 3,
        },
        {
            opponent: 'APR',
            teamPoints : 5,
            opponentPoints : 30,
        },
        {
            opponent: 'KIYO',
            teamPoints : 15,
            opponentPoints : 20,
        }
     ],
      players() {
        return this._players;
    },
    games() {
        return this. _games;
    }, 
    addPlayer(firstName, lastName, age){
        let player = {
            firstName : firstName,
            lastName: lastName,
             age : age
        }
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
   let game = {
    opponent : newOpponent ,
    teamPoints : newTeamPoints , 
    opponentPoints :  newOpponentPoints,
   }
   this._games.push(game);
    },
};
   team.addPlayer('Bugs','Bunny',76);
    console.log(team.players());
team.addGame('Ttans',100,98);
    console.log(team.games());


