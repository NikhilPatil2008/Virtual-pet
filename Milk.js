class Milk{
    constructor(){
        this.add=createButton('add');
    }

    display(){
        
    }

    getInfo(){
        var milknum=database.ref('milknum');
            milknum.on("value",(data)=>{
              milknum=data.val();
            })
          }
          
    addPressed(){
        this.add.mousePressed(()=>{
        for(var i=0;i<4;i++){
            milk=createSprite(600,200,20,20);
            milk.addImage(milkimg);
            milk.scale=0.1;
              }
          });
        }
    static getMilkInfo(){
        getInfo();
        addPressed();
    }

}