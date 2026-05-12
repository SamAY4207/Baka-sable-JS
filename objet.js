/*
let promo11 = [

    {
        prenom: "alexis",
        age: 19,
        ville: "St Etienne",
        job: "gagner de l'argent"
    },
    {
        prenom: "Romain",
        age: 27,
        ville: "St Etienne",
        job: "data scientist"
    },
    {
        prenom: "Ludivine",
        age: 29,
        ville: "St Etienne",
        job: "formatrice"
    },
    {
        prenom: "Nico",
        age: 42,
        ville: "St Etienne",
        job: "eleveur de poulet"
    },
    {
        prenom : "Samuel",
        age : 28,
        ville : "Saint-Étienne", 
        job : "Quituple millionaire sur ordinateur"
    },
]

/**
 * role : afficher des fiche eleve dans le dom
 * @param {*} tableauPromo11 
 * return : rien car elle affiche
 */
/*
function ficheEleveDansDOM(tableauPromo11) {

    //prendre les eleves un par un 
    tableauPromo11.forEach(eleve => {
        // ecrtire leur prenom, leur age et leur ville en console 

        //apeller ma fonction dont le rôle est d'envoyer dans le DOM
        ajouterAuBody(`
            <div class="bg-blue txt-purple mb-50  text-center">
            <h2> ${eleve.prenom}</h2>
            <p> ${eleve.age} ans </p>
            <p> ${eleve.ville} </p>
            <p> ${eleve.job} </p>
        
        `)

    });

}


function ajouterAuBody(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}

ficheEleveDansDOM(promo11)
 

*/

/*## V1 - Afficher une recette


👉 Nous souhaitons afficher en console la recette de cuisine du poulet rôti au thym et à l'ail. La recette nous est donnée comme cela :

*/

let recette={
  nom:"poulet rôti au thym et à l'ail",
  difficulte: "Facile",
  tempPreparation: "15 min",
  tempCuisson: "1h 15 min",
  nbrPortions: 6,
  ingredients : ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
}

console.log(`
    La recette du ${recette.nom}
    Difficulté : ${recette.difficulte}
    Temps de préparation : ${recette.tempPreparation}
    Temps de cuison : ${recette.tempCuisson}
    Pour ${recette.nbrPortions} personnes
    Liste des ingrédients : ${recette.ingredients}
    `)

console.log(`La recette "${recette.nom}" est de difficulté ${recette.difficulte}, elle nécéssite ${recette.tempPreparation} de préparations,${recette.tempCuisson} de cuissons, c'est recette est pour ${recette.nbrPortions} personnes et nécéssite ces ingrédients : ${recette.ingredients}`)


/*## V2 - Afficher plusieurs recettes

Sur le mémé principe nous souhaitons afficher toutes les recettes du tableau fourni :*/

let tableauRecettes = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti","viande hachée","oignon","carotte","tomate concassée","ail","huile d'olive","sel","poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine","croûtons","parmesan râpé","filet de poulet","sauce César","sel","poivre"]
  }
];
/**
 * Role : récupérer les recettes une par une pour les afficher
 * parametre : tableau des recettes
 * return : walou elle affiche
 */
function ficheRecette(tableauRecettes){
//récupérer les recettes une par une
tableauRecettes.forEach(recette => {
    let ingredientsListe="";
    recette.ingredients.forEach(ingredient => {
        ingredientsListe+=`<li> ${ingredient}`
        console.log(ingredientsListe)
        
    });
    //quand il en tient une il l'affiche
    ajouterAubody(`
        <div>
        <h2>${recette.nom}
        <p>Difficulté : ${recette.difficulte} :</p>
        <p>Temps de prépatations : ${recette.tempPreparation}</p>
        <p>Temps de cuisson : ${recette.tempCuisson}</p>
        <p>Pour ${recette.nbrPortions} personnes</p>
        <ul> 
            ${ingredientsListe}
        </ul>
    </div>
    
        
        
        `)
});

function ajouterAubody(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}






}





