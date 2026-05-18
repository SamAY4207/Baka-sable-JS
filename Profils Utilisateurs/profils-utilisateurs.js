// role : questionner l'API
// parametre: 
// retour : 


fetch("users.json")
    .then(rep => {

        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les infos de météo pour Saint Etienne ! on teste ?
        console.log(data)
        afficheUtilisateur(data.users)
    });

/**
 * role : récupérer les utilisateurs 1 par 1 et de les afficher dans le dom
 * parametre : du tableau d'utilisateur
 * return : rien car elle affiche
 */


function afficheUtilisateur(tableauUtilisateurs){

    tableauUtilisateurs.forEach(utilisateur => {
        
        let utilisateurCard = `
        <div class="card large-30">
        <div class="flex space-between align-center">
            <img src="users-images/${utilisateur.image}" alt="" class="large-30 border-radius-15">

            <div class="large-60">
                <h3>${utilisateur.nom}</h3>
                <h3>${utilisateur.prenom}</h3>
                <p>Age : ${utilisateur.age}ans</p>
                <p>Poste :${utilisateur.poste}</p>
                <p class="mt-20 w-60"><i class="ph ph-envelope-simple"></i> email : ${utilisateur.email}</p>
            </div>

        </div>

        

    </div>
        
        
        
        `
        document.querySelector("#users-container").innerHTML+= utilisateurCard;
        
    });
}