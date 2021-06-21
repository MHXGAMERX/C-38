class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update () 
  {
var index1 = "players/player"+this.index
database.ref(index1).set({
  name:this.name,
  distance:this.distance
})


  }
 static getPlayerInfo(){
var info = database.ref('players')

info.on("value",(data)=>{
  allPlayers = data.val();
})
  }
}