class Game {
    constructor() {}
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function (data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
    start() {
      player = new Player();
      playerCount = player.getCount()
      form = new Form();
      form.display()
      player1 = createSprite(width/2-50, height-100)
      player1.addImage("player1",soldierImg)
      player1.scale = 0.05
      player2 = createSprite(width/2+100, height-100)
      player2.addImage("player2",soldierImg)
      player2.scale = 0.05
      players = [player1,player2]
      
    }
    handleElements(){
      form.hide()

    }
    play(){
      this.handleElements()
      Player.getPlayersInfo()
      if(allPlayers !== undefined){
        image(backgroundImage2,0,0,width,height)
        var index = 0
        for(var plr in allPlayers){
          index = index+1
          var x = allPlayers[plr].positionX
          var y = height-allPlayers[plr].positionY
          players[index-1].position.x = x
          players[index-1].position.y = y
          if(index === player.index){
            stroke(10)
            fill ("red")
            ellipse(x,y,60,60)
            camera .position.x = players[index-1].position.x
            camera .position.y = players[index-1].position.y

          }   
        }
        this.addRobots();
        this.handlePlayerControls();
        drawSprites()
      }
      
    }
    handlePlayerControls(){
      if(keyIsDown(UP_ARROW)){
        player.positionY += 10
        player.update()
      }
    }
    addRobots(){
      if(this.index == 1){
          var enemyRobot = createSprite(random(1,200),random(10,100))
          enemyRobot.addImage("robot",robotImg)
      }
  }
  }