

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


var loaders = document.querySelectorAll(".loader")
var names = document.querySelectorAll(".name")



new Parrain("Actor", ppath("Actor.jpeg"))
new Parrain("Audrey", ppath("Audrey.jpeg"))
new Parrain("Bercam", ppath("Bercam.jpeg"))
new Parrain("B-James", ppath("B_JAMES.jpg"))
new Parrain("Boris", ppath("Boris.jpeg"))
new Parrain("Cindy Emma", ppath("Cindy Emma💖.jpeg"))
new Parrain("Le positif", ppath("Clinton.jpeg"))
new Parrain("CodeurZEBS", ppath("CodeurZEBS.jpeg"))
new Parrain("Dalton", ppath("Dalton.jpeg"))
new Parrain("Daniel's stark", ppath("Daniel's stark.jpeg"))
new Parrain("Eding", ppath("Eding.jpeg"))
new Parrain("Eto'o", ppath("Eto'o.jpeg"))
new Parrain("Gabono", ppath("Gabono.jpeg"))
new Parrain("JAson", ppath("JAson.jpeg"))
new Parrain("Joan", ppath("Joan.jpeg"))
new Parrain("Le Mindef", ppath("Le Mindef.jpeg"))
new Parrain("L'ondulleur", ppath("L'ondulleur.jpeg"))
new Parrain("Martial", ppath("Martial.jpeg"))
new Parrain("Michel", ppath("Michel.jpeg"))
new Parrain("Mon Segnieur", ppath("Mon Segnieur.jpeg"))
new Parrain("Monsieur-X", ppath("Monsieur-X.jpeg"))
new Parrain("Mumu", ppath("Mumu.jpeg"))
new Parrain("Negro Content", ppath("Negro Content.jpeg"))
new Parrain("Only Paul", ppath("Only Paul.jpeg"))
new Parrain("Paul Hervé", ppath("Paul Hervé.jpeg"))
new Parrain("Tout Bling_bling", ppath("Tout Bling_bling.jpeg"))
new Parrain("ngdream", ppath("ngdream.png"))







new Fiole("FONGANG", fpath("FONGANG NDEFO POL BRYAN.JPG"))

new Fiole("NANGOU", fpath("NANGOU POUNTOUGNIGNI MARILYN .JPG"))

new Fiole("ISSA", fpath("ISSA HAROUN.JPG"))
new Fiole("JUNANG", fpath("JUNANG ABDIEL.JPG"))
new Fiole("KAMWA", fpath("KAMWA CINDY.JPG"))
new Fiole("MBOPDA", fpath("MBOPDA CHRIST FREED.JPG"))
new Fiole("NDOUA", fpath("NDOUA MENDOUA JOEL.JPG"))
new Fiole("NDZENGUE", fpath("NDZENGUE ATANGANA LIONEL.JPG"))
new Fiole("NDZIE", fpath("NDZIE YEUTCHOU SUZANNE STEPHIE.JPG"))
new Fiole("???", fpath("2022_09_22_14_08_IMG_1632.JPG"))
new Fiole("RALPH", fpath("ATANGANA DANIEL RALPH.JPG"))
new Fiole("AYO AKOA", fpath("AYO AKOA RUTH YOLANDE.JPG"))
new Fiole("BECKA", fpath("BECKA YANN.JPG"))
new Fiole("TADONKEMWA", fpath("TADONKEMWA DONGMO WILL PEREZ.JPG"))
new Fiole("TCHAKEU", fpath("TCHAKEU NGONGANG VIGNY WILFRIRD.JPG"))
new Fiole("TIWA", fpath("TIWA NGNINTEDEM CAMILLE ROMARIC.JPG"))
new Fiole("BELINGA", fpath("BELINGA MESSI JEAN PAUL KEVIN.JPG"))

new Fiole("NGA", fpath("NGA YENDE ALI JUNIOR.JPG"))
new Fiole("PEMITE", fpath("PEMITE NOAH GILLES DYLAN.JPG"))
new Fiole("MELLANGI", fpath("MELLANGI WILFRIED.JPG"))
new Fiole("MUNKAM", fpath("MUNKAM N. HARRY.JPG"))
new Fiole("ONANA", fpath("ONANA.jpeg"))
new Fiole("FELIX", fpath("FELIX BIMOGA.JPG"))
new Fiole("somo karl", fpath("somo karl nelson.JPG"))
new Fiole("SONGMENE", fpath("SONGMENE LADO BELVIANE.JPG"))

new Fiole("ZIE", fpath("ZIE LIONEL.JPG"))
new Fiole("NGUETSA", fpath("NGUETSA ZANGUIM DIDIER.JPG"))
new Fiole("NJILIE", fpath("NJILIE MANDU MELISSA.JPG"))
new Fiole("payong", fpath("payong.JPG"))

new Fiole("XXX",fpath("WhatsApp Image 2022-09-30 at 12.59.16.jpeg"))


var audio = new Audio('suspens.mp3');
var n=false

var audio_app = new Audio('applause.mp3');
function choose()
{
    audio_app.currentTime = 0;
    audio_app.pause()

    audio.pause()
    audio.currentTime = 0
    

    audio.play();
    var ptfiol= Fiole.list[current++]
    fphoto.src = ptfiol.photo
    fname.textContent = ptfiol.name;
    var j = 0

    var chooseinterval=window.setInterval(
        () => {
          
            var ptparrain = Parrain.list[Math.floor((Math.random() * (Parrain.list.length)))]
            pphoto.src = ptparrain.photo;
            pname.textContent = ptparrain.name;
           

            j += 1

            if (j>= 300)
            {
                if (ptparrain.fiole.length >= Parrain.nbrx)
                    for (i in Parrain.list)
                    {
                        if (Parrain.list[i].fiole.length < Parrain.nbrx) 
                        {
                            ptparrain = Parrain.list[i]
                            pphoto.src = ptparrain.photo;
                            pname.textContent = ptparrain.name;
                            
                            }
                            
                        }
                
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
            Parrain.nbrx = p.fiole.length
        j=0
        window.setTimeout(audio_app.play.bind(audio_app), 1000)
        
       }
}

document.getElementById("start").addEventListener("click", () => {
    if (n == false)
    {
        var cover = document.querySelector(".cover")
        cover.style.zIndex = 0
        console.log(cover)
        console.log(loaders)
        for (let i in loaders)
        {
            loaders[i].className += " loader-expand"
           
           
        }

        console.log(names)

        for (let i = 0; i < names.length;i++)
        {
            
            names[i].style.display="inline"
            }
        
        }
    choose();

})



document.querySelector(".list").addEventListener("click", (e) => {

    e.target.style.display="none"
   
    var table=document.querySelector("table")
    var e = document.querySelector(".liste-box")
    
    table.innerHTML=` <tr>
    <th>FIOLES</th>
    <th>PARRAINS</th>
  </tr>`
    
    for (let i = 0; i < Fiole.list.length; i++)
    {
        var fname=Fiole.list[i].name;
        var ps="";
        for (let j = 0; j< Fiole.list[i].parrain.length; j++)
        {
            if (i != 0)
            ps+=" ,"
                ps +=Fiole.list[i].parrain[j].name
                
        }
        table.innerHTML += `
        <tr>
        <td>${fname}</td>
        <td>${ps}</td>
        </tr>
        `
        
        }
    
    if(e.style.display=="block")
    e.style.display="none"
    else
    e.style.display="block";
  })






