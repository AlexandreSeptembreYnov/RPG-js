function perdu(){
    document.getElementById("Lose").className =
        document.getElementById("Lose").className.replace( /(?:^|\s)hide(?!\S)/g , "" )
}
function Gagner(){
    document.getElementById("GG").className =
        document.getElementById("GG").className.replace( /(?:^|\s)hide(?!\S)/g , "" )
}
document.getElementById("btn1").innerHTML = "Chateau";
document.getElementById("btn2").innerText = "Village";
document.getElementById("btn1").setAttribute("onclick", "Chateau();");
document.getElementById("btn2").setAttribute("onclick", "Village();");
class Personnage {
     constructor(Force, Endurance, Mana, Vie, Nom) {
        this.Force = Force;
        this.Endurance = Endurance;
        this.Mana = Mana;
        this.ManaMax = Mana;
        this.Vie = Vie;
        this.VieMax = Vie;
        this.xp = 0;
        this.Level = 1;
        this.Nom = Nom;
     }
     moinVie(Degat){
         let DegatReel = Degat - this.Endurance ;
         if (DegatReel < 0){DegatReel = 0;}
         this.Vie = this.Vie - DegatReel;
         if (this.Vie <=0)
         {
             this.Vie=0;
             if (this.ManaMax == 100){
                 perdu();
             }

         }
     }
     attaqueFaible(Cible){
         Cible.moinVie(this.Force);
     }
     attaqueFort(Cible){

         Cible.moinVie(this.Force *2);
         this.Mana = this.Mana - 10
     }
}
class Hero extends Personnage
{
    constructor(Force, Endurance, Mana, Vie, Nom) {
        super(Force, Endurance, Mana, Vie, Nom);
        this.xp = 0;
        this.Level = 1;
    }
    levelup(){
        this.Level = this.Level + 1;
        this.xp -=100;
        this.VieMax += 5;
        this.Vie = this.VieMax;
        this.Force += 1;
        this.Endurance +=1;
    }
}
let Force = 30;
let Endurance = 30;
let Vie = 100;
let Nom = prompt("Please enter your name", "jean pierre");
let Aventurier = new Hero(Force, Endurance, 100, Vie, Nom);
let Goblin = new Personnage(20,5,990,60,"Goblin");
let Orc = new Personnage(60,10,990,100,"Orc");
let Roi = new Personnage(70,25,990,150,"Roi");
let Demon = new Personnage(70,25,990,150,"Demon");
let Vieux = new Personnage(1,1,1,1,"Vieux");
document.getElementById("nom").innerHTML = Aventurier.Nom;
document.getElementById("pv").innerHTML = Aventurier.Vie;
document.getElementById("pvMax").innerHTML =Aventurier.VieMax;
document.getElementById("mana").innerHTML = Aventurier.Mana;
document.getElementById("manaMax").innerHTML = Aventurier.ManaMax;
document.getElementById("texte").innerHTML = "Bonjour " + Aventurier.Nom +" vous etes un aventurier qui vien d'arrivé sur un nouveau continant vous pouvez voir un village et un chateau ou allez-vous?";

function Chateau() {
    document.getElementById("texte").innerHTML = "il y a deux porte";
    document.getElementById("btn1").innerHTML = "Porte droite";
    document.getElementById("btn2").innerText  = "Porte gauche";
    document.getElementById("btn1").setAttribute("onclick", "combatGoblin();");
    document.getElementById("btn2").setAttribute("onclick", "combatOrc();");
}

function Village() {
    document.getElementById("texte").innerHTML = "Un vieux monsieur se dirige vers vous avec un aire furieux";
    document.getElementById("btn1").innerHTML = "fuir";
    document.getElementById("btn2").innerText  = "essayer de parler ";
    document.getElementById("btn1").setAttribute("onclick", "fuite();");
    document.getElementById("btn2").setAttribute(
        "onclick", "parlerVieux();");
}
function parlerVieux() {
    document.getElementById("texte").innerHTML = "le vieux arrive devant vous en criant : vous, rendez moi ma pierre de suite !!";
    document.getElementById("btn1").innerHTML = "negocier(il va vous planté)";
    document.getElementById("btn2").innerText  = "l'assasine";
    document.getElementById("btn1").setAttribute("onclick", "perdu();");
    document.getElementById("btn2").setAttribute("onclick", "combatVieux();");
}
function fuite() {
    document.getElementById("texte").innerHTML = "Vous prenez la fuite mais des gardes vous ont vu et arrive a votre hauteur ";
    document.getElementById("btn1").innerHTML = "se rendre";
    document.getElementById("btn2").innerText  = "se debattre";
    document.getElementById("btn1").setAttribute("onclick", "rendre();");
    document.getElementById("btn2").setAttribute("onclick", "perdu();");
}
function combatVieux() {
    Vieux.attaqueFaible(Aventurier);
    document.getElementById("pv").innerHTML = Aventurier.Vie;
    document.getElementById("mana").innerHTML = Aventurier.Mana;
    document.getElementById("texte").innerHTML = "vie Vieux : "+ Vieux.Vie + " / "+ Vieux.VieMax;
    document.getElementById("btn1").innerHTML = "attaque Faible";
    document.getElementById("btn2").innerText  = "attaque Fort";
    document.getElementById("btn1").setAttribute("onclick", "Aventurier.attaqueFaible(Vieux); if(Vieux.Vie > 0){combatVieux();}else{assasin();}");
    document.getElementById("btn2").setAttribute("onclick", "Aventurier.attaqueFort(Vieux); if(Vieux.Vie > 0){combatVieux();}else{assasin();}");

}
function assasin() {
    document.getElementById("texte").innerHTML = "Les gardes vous on retrouvez vous avez perdu";
    document.getElementById("btn1").innerHTML = "perdu";
    document.getElementById("btn2").innerText  = "perdu";
    document.getElementById("btn1").setAttribute("onclick", "perdu();");
    document.getElementById("btn2").setAttribute("onclick", "perdu();");

}
function rendre() {
    document.getElementById("texte").innerHTML = "Vous êtes enfermé a la cave du chateau";
    document.getElementById("btn1").innerHTML = "sciée les barreau";
    document.getElementById("btn2").innerText  = "tenté de corrompre les gardes";
    document.getElementById("btn1").setAttribute("onclick", "scie();");
    document.getElementById("btn2").setAttribute("onclick", "perdu();");
}
function scie(){
    document.getElementById("texte").innerHTML = "Vous voyez un escalier";
    document.getElementById("btn1").innerHTML = "monter";
    document.getElementById("btn2").className= "hide";
    document.getElementById("btn1").setAttribute("onclick", "monter();");
}
function combatGoblin() {
    Goblin.attaqueFort(Aventurier);
    document.getElementById("pv").innerHTML = Aventurier.Vie;
    document.getElementById("mana").innerHTML = Aventurier.Mana;
    document.getElementById("texte").innerHTML = "vie Goblin : "+Goblin.Vie + " / "+ Goblin.VieMax;
    document.getElementById("btn1").innerHTML = "attaque Faible";
    document.getElementById("btn2").innerText  = "attaque Fort";
    document.getElementById("btn1").setAttribute("onclick", "Aventurier.attaqueFaible(Goblin); if(Goblin.Vie > 0){combatGoblin();}else{droite();}");
    document.getElementById("btn2").setAttribute("onclick", "Aventurier.attaqueFort(Goblin); if(Goblin.Vie > 0){combatGoblin();}else{droite();}");
}
function combatOrc() {
    Orc.attaqueFaible(Aventurier);
    document.getElementById("pv").innerHTML = Aventurier.Vie;
    document.getElementById("mana").innerHTML = Aventurier.Mana;
    document.getElementById("texte").innerHTML = "vie Orc : "+ Orc.Vie + " / "+ Orc.VieMax;
    document.getElementById("btn1").innerHTML = "attaque Faible";
    document.getElementById("btn2").innerText  = "attaque Fort";
    document.getElementById("btn1").setAttribute("onclick", "Aventurier.attaqueFaible(Orc); if(Orc.Vie > 0){combatOrc();}else{gauche();}");
    document.getElementById("btn2").setAttribute("onclick", "Aventurier.attaqueFort(Orc); if(Orc.Vie > 0){combatOrc();}else{gauche();}");
}
function droite(){
    document.getElementById("texte").innerHTML = "vous voyez une salle de torture et une salle au tresors";
    document.getElementById("btn1").innerHTML = "salle de torture";
    document.getElementById("btn2").innerText  = "salle au tresors";
    document.getElementById("btn1").setAttribute("onclick", "torture();");
    document.getElementById("btn2").setAttribute("onclick", "tresors();");
}
function torture() {
Aventurier.Force += 50;
    document.getElementById("texte").innerHTML = "Vous avez trouvé une meilleur lame et vous voyez des escalier qui monte et qui descend";
    document.getElementById("btn1").innerHTML = "monter";
    document.getElementById("btn2").innerText  = "descendre";
    document.getElementById("btn1").setAttribute("onclick", "monter();");
    document.getElementById("btn2").setAttribute("onclick", "descendre();");
}
function tresors() {
    Aventurier.Endurance += 50;
    document.getElementById("texte").innerHTML = "Vous avez trouvé une armure en or et vous voyez des escalier qui monte et qui descend";
    document.getElementById("btn1").innerHTML = "monter";
    document.getElementById("btn2").innerText  = "descendre";
    document.getElementById("btn1").setAttribute("onclick", "monter();");
    document.getElementById("btn2").setAttribute("onclick", "descendre();");
}
function gauche() {
    document.getElementById("texte").innerHTML = "Vous voyez des escalier qui monte et qui descend";
    document.getElementById("btn1").innerHTML = "monter";
    document.getElementById("btn2").innerText  = "descendre";
    document.getElementById("btn1").setAttribute("onclick", "monter();");
    document.getElementById("btn2").setAttribute("onclick", "descendre();");
}
function monter() {
    document.getElementById("texte").innerHTML = "Vous entrez dans la salle du trone du vieux roi dechu";
    document.getElementById("btn1").innerHTML = "Entrer";
    document.getElementById("btn2").className= "hide";
    document.getElementById("btn1").setAttribute("onclick", "combatRoi();");
}
function descendre() {
    document.getElementById("texte").innerHTML = "Vous entrez dans la salle des demon ";
    document.getElementById("btn1").innerHTML = "Entrer";
    document.getElementById("btn2").className= "hide";
    document.getElementById("btn1").setAttribute("onclick", "combatDemon();");
}
function combatRoi() {
    document.getElementById("btn2").className =
        document.getElementById("btn2").className.replace( /(?:^|\s)hide(?!\S)/g , "" )
    Roi.attaqueFort(Aventurier);
    document.getElementById("pv").innerHTML = Aventurier.Vie;
    document.getElementById("mana").innerHTML = Aventurier.Mana;
    document.getElementById("texte").innerHTML = "vie Roi : "+ Roi.Vie + " / "+ Roi.VieMax;
    document.getElementById("btn1").innerHTML = "attaque Faible";
    document.getElementById("btn2").innerText  = "attaque Fort";
    document.getElementById("btn1").setAttribute("onclick", "Aventurier.attaqueFaible(Roi); if(Roi.Vie > 0){combatRoi();}else{Gagner();}");
    document.getElementById("btn2").setAttribute("onclick", "Aventurier.attaqueFort(Roi); if(Roi.Vie > 0){combatRoi();}else{Gagner();}");
}
function combatDemon() {
    document.getElementById("btn2").className =
        document.getElementById("btn2").className.replace( /(?:^|\s)hide(?!\S)/g , "" )
    Demon.attaqueFort(Aventurier);
    document.getElementById("pv").innerHTML = Aventurier.Vie;
    document.getElementById("mana").innerHTML = Aventurier.Mana;
    document.getElementById("texte").innerHTML = "vie Demon : "+ Demon.Vie + " / "+ Demon.VieMax;
    document.getElementById("btn1").innerHTML = "attaque Faible";
    document.getElementById("btn2").innerText  = "attaque Fort";
    document.getElementById("btn1").setAttribute("onclick", "Aventurier.attaqueFaible(Demon); if(Demon.Vie > 0){combatDemon();}else{Gagner();}");
    document.getElementById("btn2").setAttribute("onclick", "Aventurier.attaqueFort(Demon); if(Demon.Vie > 0){combatDemon();}else{Gagner();}");
}