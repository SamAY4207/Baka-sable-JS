/*EXO1*/
console.log(9===10)

/*EXO2*/
console.log("Hello"!=="hello")

/*EXO3*/
console.log(8>12)

let b= 5 ;
let c= 6;

if(b===b){
    console.log("Bienjouej")
} else{
    console.log("Dommage, merci d'avance")
}

if(b===c){
    console.log("Bienjouej")
} else{
    console.log("Dommage, merci d'avance")
}

if(b===c){
    console.log("Dommage, merci d'avance");
} else if (b<c){
    console.log("Bienjouej");
} else {
    console.log("Dommage, merci d'avance");
}

let connect = true

if(connect===true){
    console.log("Connecté")
} else{
    console.log("Déconnecté")
}

/*## Exercice 4 : Ce nombre est il pair ?

Ecrire un script qui permet de tester si un nombre stocké dans une variable est pair qui affiche en console : “le nombre est pair “ ou “le nombre est impair”*/


let nbr=125054
//%2 reste de la division nbr/2 ; si le résultat est 0 le nbr est pair sinon il est impair
if(nbr%2===0){
    console.log("nombre pair")
} else{
    console.log("nombre impair")
}

/*## Exercice 5 : Quel temps fait-il ?

Déclarer une variable meteo : qui peut prendre comme valeur : soleil, pluie, neige

Si météo vaut neige alors le code affiche “Met des bottes”,sinon si météo vaut pluie alors le code affiche “N’oublie pas ton parapluie”, sinon si meteo contient soleil le code affiche “Prends une casquette”
*/
/*
let meteo = "Neige"

if(meteo=="Soleil"){
    console.log("“Prends une casquette”");
} else if (meteo=="Pluie"){
    console.log("“N'oublie pas ton parapluie”");
} else if{
    console.log("“Met des bottes”");
} else {
    console.log("Force à toi frérot")
}
*/
/*## Exercice 6 :  Evaluer l’age

Écrivez un script qui prend un âge en entrée et affiche "Enfant" si l'âge est inférieur à 12, "Adolescent" s'il est compris entre 12 et 18 inclus, et "Adulte" s'il est supérieur à 18.
*/

let age = 19

if(age<12){
    console.log("Enfant");
} else if (age>18){
    console.log("Adulte");
} else {
    console.log("Adolescent");
}

/* Correction
if(age<12){
    console.log("Enfant");
} else if (age>=12 && age <=18){
    console.log("Adolescent");
} else {
    console.log("Adulte");
}
    */

/*## Exercice 7: Triangles

Écrivez un script qui prend trois longueurs en entrée et affiche "C'est un triangle équilatéral" si les trois longueurs sont égales, "C'est un triangle isocèle" si exactement deux longueurs sont égales, et "C'est un triangle quelconque" sinon.
*/


let ab = 2
let bc = 2
let ac = 2

if(ab==bc && ac==bc && ab==ac){
    console.log("Équilatéral");
} else if (ab!=bc && ac!=bc && ab!=ac){
    console.log("Quelconque");
    
} else {
    console.log("Isocèle");
}

/*
if(ab==bc && ac==bc && ab==ac){
    console.log("Équilatéral");
} else if (ab==bc || ac==bc ||ab==ac){
    console.log("Isocèle");
    
} else {
    console.log("Quelconque");
}
*/

/*## Exercice 8 : Réduction

Créez une fonction qui détermine si une personne est éligible à une réduction spéciale dans un magasin en fonction des critères suivants :

- Elle doit avoir **plus de 18 ans**.
- Elle doit être membre du programme de fidélité **OU** avoir effectué un achat supérieur à **100 euros**.
- Si toutes les conditions sont réunies, retournez : `"Réduction accordée"`. Sinon, retournez `"Réduction refusée"`.
*/

function reduction(age,membre,achat){

    //si >18 ans 
    if(age>18){
        //si membre ou + de 100€
        if(membre === true || achat>100){
        //ok
    return "Réduction Accordée"
        //SINON
        }else{
        //pas ok
        return "Réduction refusée"
        }

    //sinon
    }else{
    // pas ok
    return "Réduction refusée"
    }
}
let ticket = reduction(19,true,80)
console.log(ticket)


/*## Exo 9 : Le feu tricolore

- **Demandez à l’utilisateur la couleur du feu tricolore grace à un prompt** et stockez la valeur dans une variable nommée
    
    L’utilisateur pourra saisir : `"rouge"`, `"orange"` ou `"vert"`.
    
- **À l’aide de conditions**, affichez dans la console le message approprié :
    - Si le feu est **rouge**, afficher :
        
        👉 `"Je m'arrête !"`
        
    - Sinon si le feu est **orange**, afficher :
        
        👉 `"Je freine !"`
        
    - Sinon si le feu est **vert**, afficher :
        
        👉 `"Je passe !"`
        
    - Sinon (toute autre valeur), afficher :
        
        👉 `"Danger : feu défectueux !"`

*/
/**
 * @role demander la couleur du feu à l'utilisateur et indiquer ce qu'il doit faire 
 * @parametres none
 * @return indicateur
 */
/*
function  tvk(){
    //Pop Up qui pose la question
    let repson = prompt('De quel couleur est le feux ? (Indiquer "Rouge", "Vert" ou "Orange") ')
    
    
//Si la réponse est vert alors `Je passe`
 if (repson=="Vert") {
    alert(`Je passe`)
} 
//Si la réponse est orange alors `Je freine`
else if (repson=="Orange") {
    alert(`Je freine`)
} 
//Si la réponse est rouge alors `Je m'arrête`
else if (repson=="Rouge") {
    alert(`Je m'arrête`)   
} 
//Sinon alors `Font de 5, frein à mains et droite à fond !`
else {
alert(`Font de 5, frein à mains et droite à fond !`)
}

return repson
}

tvk()
*/

/*
function demanderCouleur(){
    let repsonse = prompt('De quel couleur est le feux ? (Indiquer "Rouge", "Vert" ou "Orange") ')
    return repsonse
}

function indiQ(){
    //Si la réponse est vert alors `Je passe`
 if (repson=="Vert") {
    alert(`Je passe`)
} 
//Si la réponse est orange alors `Je freine`
else if (repson=="Orange") {
    alert(`Je freine`)
} 
//Si la réponse est rouge alors `Je m'arrête`
else if (repson=="Rouge") {
    alert(`Je m'arrête`)   
} 
//Sinon alors `Font de 5, frein à mains et droite à fond !`
else {
alert(`Font de 5, frein à mains et droite à fond !`)
}

}

function go(){
    let couleur = demanderCouleur
    indiQ(couleur)
}

go
*/

/*## Exo 10 : Le bulletin de notes

Vous allez créer un petit système de **bulletin scolaire** en utilisant plusieurs fonctions.

Les **moyennes des différentes matières seront données en paramètres**.

### 1️⃣ Fonction de calcul

Créez une fonction qui **calcule la moyenne générale de l’élève** à partir des moyennes des matières passées en paramètre.

La fonction doit **retourner** la moyenne générale.

### 2️⃣ Fonction de commentaire

Créez une fonction qui, à partir de la **moyenne générale**, génère un **commentaire d’appréciation.**

Le commentaire doit dépendre de la moyenne :

- De **0 à 10** → « *Il faut travailler plus* »
- De **10 à 13** (strictement >10 et ≤13) → « *Poursuivez vos efforts* »
- De **13 à 15** (strictement >13 et ≤15) → « *Bon travail* »
- De **15 à 17** (strictement >15 et ≤17) → « *Bravo !* »
- **Au-delà de 17** → « *Félicitations !* »

### 3️⃣ Fonction bulletin

Créez une fonction qui construit un **bulletin complet**, composé :

- de la **moyenne générale**
- du **commentaire correspondant**

La fonction doit afficher le bulletin dans la console.
*/

/**
 * @role 01 - Calcule la moyenne générale en fonction des moyennes renseignées (notes des 10 matières divisées par les notes des moyennes)
 * @param //moyennes des différentes matière
 * @return //moyenne générale
 */

function moyNe (fr,mt,ang,art,mus,spo,phy,svt,his,geo) {

return (fr+mt+ang+art+mus+spo+phy+svt+his+geo)/10 
}


let moyg =moyNe(10,17,13,19,18,12,5,3,9,8)

alert(`La moyenne de l'élève est de ${moyg} /20`)


/*02*/
function appreciation(){
 //De 0 à 10 → « Il faut travailler plus »
 if (moyg<=10) {
    alert(`Il faut travailler plus`)
} 
//De 10 à 13 (strictement >10 et ≤13) → « Poursuivez vos efforts »
else if (moyg>10 && moyg<=13) {
    alert(`Poursuivez vos efforts`)
} 
//De 13 à 15 (strictement >13 et ≤15) → « Bon travail »
else if (moyg>13 && moyg<=15) {
    alert(`Bon travail`)   
} 
//De 15 à 17 (strictement >15 et ≤17) → « Bravo ! »
else if (moyg>15 && moyg<=17) {
    alert(`Bravo !`)   
} 
//Au-delà de 17 → « Félicitations ! »
else {
alert(`Félicitations !`)
}   
}

appreciation()

//*03*/
function bulletin(appreciation,moyg){
    alert(`La moyenne de l'élève est de ${moyg}/20 et le commentaire est : ${appreciation}`)
}


bulletin()

