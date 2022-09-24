var current=0
//class  for fiole
class Fiole
{
    constructor(name,photo)
    {
        this.name = name
        this.photo = photo
        this.parrain = []
        Fiole.list.push(this)
    }
}

// class for parrain
class Parrain
{
    constructor(name,photo)
    {
        this.name = name;
        this.photo = photo;
        this.fiole=[]
        Parrain.list.push(this);
    }
}

Parrain.list =[];
Fiole.list = [];

Fiole.nbrx = 0;
Parrain.nbrx=0


var fphoto = document.getElementById("img_fiole")
var pphoto = document.getElementById("img_parrain")

var fname = document.getElementById("name_fiole")
var pname = document.getElementById("name_parrain")

k = new Parrain("hhh", "test.png")
k=new Parrain("hhh", "test2.png")




new Fiole("ddd", "test.png")
new Fiole("ddd", "test4.png")
new Fiole("ddd", "test2.png")
new Fiole("ddd", "test.png")
new Fiole("ddd", "test4.png")
new Fiole("ddd", "test2.png")
new Fiole("ddd", "test.png")
new Fiole("ddd", "test4.png")
new Fiole("ddd", "test2.png")
new Fiole("ddd", "test.png")
new Fiole("ddd", "test4.png")
new Fiole("ddd", "test2.png")


function choose()
{

    
    var ptparrain = Parrain.list[current++]
    pphoto.src = ptparrain.photo
    
    var j=0
    var chooseinterval=window.setInterval(
        () => {
            var ptfiol = Fiole.list[Math.floor((Math.random() * (Fiole.list.length)))]
            fphoto.src = ptfiol.photo;
            fname.textContent = ptfiol.name;

            j += 1
            console.log(j)

            if (j>= 200)
            {
                choosefiol(ptfiol, ptparrain)
                window.clearInterval(chooseinterval) 
            }
        }, 100) 
    
    var choosefiol = (f,p) =>
    {
        f.parrain.push(p)
        p.fiole.push(f)
        if (f.parrain.length > Fiole.nbrx)
            Fiole.nbrx = f.parrain.length
        if (p.fiole.length > Parrain.nbrx)
            Fiole.nbrx = p.fiole.length
        
              
        
       }
}





document.getElementById("start").addEventListener("click", () => {
    choose();

})









