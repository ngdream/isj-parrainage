

function fpath(name){return "filleuls"+"/"+name}
function ppath(name){return "parrains"+"/"+name}


var current = 0
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

new Parrain("hhh", ppath("Actor.jpeg"))
new Parrain("hhh", ppath("Audrey.jpeg"))
new Parrain("hhh", ppath("Bercam.jpeg"))
new Parrain("hhh", ppath("B-James.jpeg"))
new Parrain("hhh", ppath("Boris.jpeg"))
new Parrain("hhh", ppath("Cindy Emma💖.jpeg"))
new Parrain("hhh", ppath("Clinton.jpeg"))
new Parrain("hhh", ppath("CodeurZEBS.jpeg"))
new Parrain("hhh", ppath("Dalton.jpeg"))
new Parrain("hhh", ppath("Daniel's stark.jpeg"))
new Parrain("hhh", ppath("Eding.jpeg"))
new Parrain("hhh", ppath("Eto'o.jpeg"))
new Parrain("hhh", ppath("Gabono.jpeg"))
new Parrain("hhh", ppath("JAson.jpeg"))
new Parrain("hhh", ppath("Joan.jpeg"))
new Parrain("hhh", ppath("Le Mindef.jpeg"))
new Parrain("hhh", ppath("L'ondulleur.jpeg"))
new Parrain("hhh", ppath("Luqman.jpeg"))
new Parrain("hhh", ppath("Martial.jpeg"))
new Parrain("hhh", ppath("Michel.jpeg"))
new Parrain("hhh", ppath("Mon Segnieur.jpeg"))
new Parrain("hhh", ppath("Monsieur-X.jpeg"))
new Parrain("hhh", ppath("Mumu.jpeg"))
new Parrain("hhh", ppath("Negro Content.jpeg"))
new Parrain("hhh", ppath("Only Paul.jpeg"))
new Parrain("hhh", ppath("Paul Hervé.jpeg"))
new Parrain("hhh", ppath("Tchapda.jpeg"))
new Parrain("hhh", ppath("Tout Bling_bling.jpeg"))
new Parrain("hhh", ppath("Python.jpeg"))







new Fiole("ddd", fpath("2022_09_22_14_08_IMG_1632.JPG"))
new Fiole("ddd", fpath("ATANGANA DANIEL RALPH.JPG"))
new Fiole("ddd", fpath("AYO AKOA RUTH YOLANDE.JPG"))
new Fiole("ddd", fpath("BECKA YANN.JPG"))
new Fiole("ddd", fpath("BELINGA MESSI JEAN PAUL KEVIN.JPG"))
new Fiole("ddd", fpath("FELIX BIMOGA.JPG"))
new Fiole("ddd", fpath("FONGANG NDEFO POL BRYAN.JPG"))
new Fiole("ddd", fpath("ISSA HAROUN.JPG"))
new Fiole("ddd", fpath("JUNANG ABDIEL.JPG"))
new Fiole("ddd", fpath("KAMWA CINDY.JPG"))
new Fiole("ddd", fpath("MBOPDA CHRIST FREED.JPG"))
new Fiole("ddd", fpath("MELLANGI WILFRIED.JPG"))
new Fiole("ddd", fpath("MUNKAM N. HARRY.JPG"))
new Fiole("ddd", fpath("NANGOU POUNTOUGNIGNI MARILYN .JPG"))
new Fiole("ddd", fpath("NDOUA MENDOUA JOEL.JPG"))
new Fiole("ddd", fpath("NDZENGUE ATANGANA LIONEL.JPG"))
new Fiole("ddd", fpath("NDZIE YEUTCHOU SUZANNE STEPHIE.JPG"))
new Fiole("ddd", fpath("NGA YENDE ALI JUNIOR.JPG"))
new Fiole("ddd", fpath("NGUETSA ZANGUIM DIDIER.JPG"))
new Fiole("ddd", fpath("NJILIE MANDU MELISSA.JPG"))
new Fiole("ddd", fpath("payong.JPG"))
new Fiole("ddd", fpath("PEMITE NOAH GILLES DYLAN.JPG"))
new Fiole("ddd", fpath("somo karl nelson.JPG"))
new Fiole("ddd", fpath("SONGMENE LADO BELVIANE.JPG"))
new Fiole("ddd", fpath("TADONKEMWA DONGMO WILL PEREZ.JPG"))
new Fiole("ddd", fpath("TCHAKEU NGONGANG VIGNY WILFRIRD.JPG"))
new Fiole("ddd", fpath("TIWA NGNINTEDEM CAMILLE ROMARIC.JPG"))
new Fiole("ddd", fpath("ZIE LIONEL.JPG"))



function choose()
{

    
    var ptparrain = Parrain.list[current++]
    pphoto.src = ptparrain.photo
    
    var j = 0
    var audio = new Audio('suspens.mp3');
    audio.play();

    var audio_app = new Audio('applause.mp3');
    var chooseinterval=window.setInterval(
        () => {
            var ptfiol = Fiole.list[Math.floor((Math.random() * (Fiole.list.length)))]
            fphoto.src = ptfiol.photo;
            //fname.textContent = ptfiol.name;

            j += 1
            console.log(j)

            if (j>= 700)
            {
                choosefiol(ptfiol, ptparrain)
                window.clearInterval(chooseinterval) 
            }
        }, 20) 
    
    var choosefiol = (f,p) =>
    {
        audio.pause()
        audio.currentTime=0
        f.parrain.push(p)
        p.fiole.push(f)
        if (f.parrain.length > Fiole.nbrx)
            Fiole.nbrx = f.parrain.length
        if (p.fiole.length > Parrain.nbrx)
            Fiole.nbrx = p.fiole.length
        j=0
        window.setTimeout(audio_app.play.bind(audio_app),1000)  
        
       }
}





document.getElementById("start").addEventListener("click", () => {
    choose();

})









