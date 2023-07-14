class Game{
    constructor(){

    }
    start(){
        //cria o objeto form da classe Form
        form = new Form();
        //chama o método exibir do formulário
        form.exibir();

        //cria uma instância de novo jogador
        player = new Player();
        player.getCount();

        car1 = createSprite(width/2-100, height-100)
        car1.addImage("carro", carimg1);
        car1.scale = 0.07;

        car2 = createSprite(width/2+100, height-100)
        car2.addImage("carro", carimg2);
        car2.scale = 0.07;
        //agrupa os carrinhos na mesma variável
        cars = [car1, car2];
        //criar o grupo das moedas
      

    }
    


    play(){
        form.esconder();
        Player.getInfo();
        if (allPlayers !== undefined){
            image (pista, 0, -height*4.5, width, height*6)
            var i = 0;
            for(var p in allPlayers){
                //pega o valor do banco de dados
                var x = allPlayers[p].posicaoX;
                var y = height - allPlayers[p].posicaoY;
                //atribui o valor na sprite do pc local
                cars[i].position.x = x;
                cars[i].position.y = y;
                i++;
                if(player.indice == i){
                    //definir a posição da câmera
                    camera.position.y = y;
                    textSize(25);
                    fill ("red");
                    textAlign("center");
                    text (allPlayers[p].nome,x, y-80 )
                    
                }
            }
            this.controlarCarro()
            drawSprites()
        }
        
    }

    controlarCarro(){
        //checa se pressionou para cima
        if(keyDown(UP_ARROW)){
            player.posY += 10;
            player.update();
        }
    }

    //lê no banco de dados e copia o valor de gameState
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        })
    }

    //atualiza o valor de gameState 
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
 

}