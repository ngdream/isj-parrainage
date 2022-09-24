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
        Parrain.list.push(this);
    }
}

Parrain.list =[];
Fiole.list =[];


var fphoto = document.getElementById("img_fiole")
var pphoto = document.getElementById("img_parrain")

var fname = document.getElementById("name_fiole")
var pname = document.getElementById("name_parrain")

k=new Parrain("hhh", "ggggg")
new Parrain("yoo", "yrtrt")


new Fiole("yoooo", "dfd")
new Fiole("ddd","qdfsfsff")
function choose()
{
    var c=window.setInterval(
        () => {
           /* var ptfiol = Fiole.list[Math.random() % (Fiole.list.length-1)]
            fphoto.scr = ptfiol.photo;*/
           
            var ptparrain = Parrain.list[Math.floor((Math.random() * (Parrain.list.length)))]
            console.log()
            pphoto.src = ptparrain.photo;
            pname.textContent = ptparrain.name;

            var ptfiol = Fiole.list[Math.floor((Math.random() * (Fiole.list.length)))]
            fphoto.src = ptfiol.photo;
            fname.textContent = ptfiol.name;

            },100)
}

choose();








