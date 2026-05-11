
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
 












