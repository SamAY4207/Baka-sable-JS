/*
for(let i=1; i<5; i++){
    console.log("Kakou kakou")
}

for(let i=1; i<=100; i=i+1){
    console.log(i)
}
*/

//Écrire une fonction qui affiche la table de multiplication d'un nombre passé en paramètre

/**
 * @Role Affiché la table de multiplication d'un nombre que l'utilisateur à renseingné
 * @Parametre nombre
 * @return non car on affiche
 */

/*
function affmult(){
    let nombre = parseFloat(prompt("De quelle chiffre voulez vous la note ?"))
    for(let i=1 ; i<=10 ; i++)
        alert(`La table de ${nombre} est ${nombre} * ${i} = ${nombre * i}`)
}

affmult()

/*
function affmult(nombre){
    
    for(let i=1 ; i<=10 ; i++){
        console.log(`${nombre} * ${i} = ${nombre * i}`)}
}
*/
//console.log({i}*${nombre}=)



/*Un script qui répète  fois "I will not waste chalk"*/
/**
 * @role : répéter 50 fois la "I will not waste chalk"
 * @parametre : non
 * @return : rien elle affiche
 */
/*
function punition(){
    //créer une boucle qui tournera 50 fois
    for(let i=1 ; i<=50 ; i++)
        //ecrit la phrase
    console.log("I will not waste chalk")
}

/**
 * @role : une boucle qui zffiche les lettres une par une
 * @parametre : le mot
 * @return : rien car elle affiche
 */
/*
function epelle(mot){
    console.log(`Le mot ${mot} contient ${mot.length} lettres`)
    for(let i=0; i<mot.length; i++)
        console.log(mot.charAt(i))
    
}

epelle("Anticonstitutionnellement")

let panier= ["Banane", "Framboise", "Cerise", "Ananas", "Mangue", "Noix de coco"]

console.log(panier)

console.log(`Le premier fruit du panier est ${panier[0]} tandis que le dernier est ${panier[panier.length-1]}`)

for(let i=0; i<panier.length; i++){
    console.log(panier[i])
}
/*
for(let i=panier.length; i=0; i--){
    console.log(panier[i])
} */
/*
    panier.forEach(fruit=> {
        console.log(fruit)
    });



// Tableau de note
const tablNotes = [12, 9, 15, 17, 10];

/**
 * role : calcul la moyenne
 * parametre : note (tableau)
 * return : non
 */
/*


*/
/*
//créer une fonction
function moyennev3(tablNotes){
    let somme=0;
// récupérer les notes une par une dans le tableau
tablNotes.forEach(notes => {
//quand il en a une il l'aditionne dans une variables (a l'irgine une variable vide)
somme = somme + notes;

}) ;

//on divise la somme du tableau par le nombre de valeur dans le tableau c'est à dire la longueur du tableau

let moyenne = somme/tablNotes.length;

//retourner le rséultat

return moyenne
}

function affmoy(moyenne){
    console.log(`La moyenne de l'élève est : ${moyenne}/20`)
}

let moyenne = moyennev3(tablNotes)
affmoy(moyenne)
*/


// mon tableau représentant mon panier de fruits 
let fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes",
    "pommes", "poires", "cerises"];

/**
 * role : compter le nombre de chaque fruits
 * parametre : fruits
 * return : non elle affiche
 */

// dans les fruis les identifier un par un (forEach ?)

//attribuer une let par fruit (ex: banane, pomme)



function compteurFruits(fruits) {
    let compteurPommes = 0
    let compteurCerises = 0
    let compteurPoires = 0
    let compteurBananes = 0

    fruits.forEach(fruit => {
        if (fruit === "cerises") {
            compteurCerises++
        } else if (fruit === "pommes") {
            compteurPommes++
        } else if (fruit === "poires") {
            compteurPoires++
        } else if (fruit === "bananes") {
            compteurBananes++
        } else {
            console.log("erreur")
        }


    });

    return `
        Il y a ${compteurPommes} pommes,
        Il y a ${compteurCerises} cerises,
        Il y a ${compteurPoires} poires,
        Il y a ${compteurBananes} bananes`

}



function afficherDanslapage(aAfficher) {
    document.querySelector("body").innerHTML += `<p>${aAfficher}</p>`
}

let phraseAafficher = compteurFruits(fruits)
afficherDanslapage(phraseAafficher)
// identifié chaque itération
//compterles itérations de fruits
//stocker l'inventaire


//afficher dans la console : Dans le panier il y a XXX pommes, XXX poires, XXX bananes, XXX cerises


/*Exo 4 - Code cesar
Écrire un script qui permet de chiffrer un mot en prenant chacune des lettres et en la remplaçant par celle qui suit dans l’alphabet. 
Vous n’utiliserez pas de caractères spéciaux ou accentués

Exemple : La toile → MBUPJMF

Pour aller plus loin : et si on pouvait chiffrer des phrases entières ?
*/

/*
//Récupérer l'alphabet
let alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Encoder un mot
/**
 * role : encode le mot
 * parametre : mot
 * return : mot encoder
 */

//Identifier les lettres du mots
//Encoder chaque lettre en la remplaçant par la lettre suivante de l'alphabet
/*for (i = 0; i < mot.length; i++) {
    indexOf[i]
    replace([i], [i]++)








}
// Restitué le mot encoder


/**
 * role : encoder un message
 * parametre : le mot a encoder
 * return : mot chiffré
 */

function codeCesar(motAencoder) {
    //un alphabet
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let motEncode = "";

    //récupérer les lettres du mots une par une
    for (let i = 0; i < motAencoder.length; i++) {
        letttreEncode=""
        let letttreActuelle = motAencoder.charAt(i)
        console.log(letttreActuelle)
        //quand il aura récupérer une lettre il va chercher la position de cette lettre dans l'alphabet
        let posLettreActuelle = alphabet.indexOf(letttreActuelle)
        console.log(posLettreActuelle)

        if(letttreActuelle==="z"){
            lettreEncode = "a"
        }else{

        }

        // va chercher la lettre à la position suivante
        let lettreEncode=alphabet[posLettreActuelle + 1]
        console.log(lettreEncode)
        //stock dans une variable pour recomposer le mot encodé
        motEncode += lettreEncode
    }

    //retourne le mot encodé
    return motEncode
    console.log(motEncode)
   
}

/**
 * role : afficher le mot encodé
 * parametre : le mot encoder
 * return : rien car elle affiche
 */

function afficheDansBody(motAencoder){
    document.querySelector("body").innerHTML += `<p> ${motAencoder} </p>`
}

function scenariO(motAencoder){
    let motEncode =codeCesar(motAencoder)
    afficheDansBody(motEncode)
}

/*Jackpot*/

// créer une fonction
/**
 * role : choisir 3 emojis
 * parametre : tableau avec tous les emojis possibke (entre 3 et 5)
 * return : les 3 emojis sélectionnés
 */

function emojiAlea(tableauEmoji){

    //créer le tableau

    //tirer 3 chiffres aléatoires -->math.floor(math.random()*3)

    //attribuer un emoji a chaque chiffre tiré -> si on tire 0 on va chercher l'emoji à la position 0 dans le tableau

    //stocker mes emojis dans une boite -> je reconstruit un tableau avec les emojis piochés

    //retouner les emojis piochés




}

/**
 * role : comparer les emojis pour définir si c gagné
 * parametre : les emojis piochés -> un tableau
 * return : true/flase->boolean
 */


/**
 * role : afficher le résultat dans le body
 * parametre : les emojis pioché, et le résultat
 * return : rien car elle affiche
 */