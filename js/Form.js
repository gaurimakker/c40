class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput("Name");
        this.button=createButton('Play');
        this.greeting=createElement('h3');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
     }

    display(){
        this.title.html("car racing game");
        this.title.position(400,0);
    
        this.input.position(400,160);
        this.button.position(400,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name);
            this.greeting.position(250,160);
        })
    }
}