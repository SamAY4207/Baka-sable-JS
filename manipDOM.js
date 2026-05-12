//afficher dans le body une div
/* EXEMPLES
document.querySelector("body").innerHTML += `
<div>
    <p>Lorem Ipsum</p>
</div>
`

let paragrapheAmettreenviolet = document.querySelector("p")

paragrapheAmettreenviolet.classList.add("txt-purple")

paragrapheAmettreenviolet.classList.toggle("bg-blue")

let bouton = document.querySelector("button")

bouton.addEventListener("click", ajouteUnParagraphe)

function ajouteUnParagraphe(){

    document.querySelector("#grosseboite").innerHTML += `<p>Lorem Ipsum</p>`
}

*/

/*## Exercice 1 : Un h1 qui a du style

Utiliser un sélecteur pour récupérer le h1 de la page et lui changer son style en dur. (attribut style)*/

let titre1 = document.querySelector("#titre1")
titre1.style.backgroundColor = "#89AAC9";


/*## Exercice 2 : Interrupteur

Ecrire une fonction qui permet alternativement de cacher, puis d’afficher, puis de cacher etc…. un élément dont l’id est passé en paramètre à chaque fois qu’on l’apelle*/


/*
button.addEventListener("click", ajouteUnParagraphe)

function ajouteUnParagraphe(){

    document.querySelector("#boiboite").innerHTML += ``
}
*/
let button = document.querySelector("#bouton")
button.addEventListener('click',
    function () {
        const niko = document.querySelector("#niko");

        niko.classList.toggle("display-none")
    });




/*## Exercice 3 : Choix multiples / choix unique

Dans une page web dessinez 3 carrés sans background mais avec une bordure

1. Lorsque l’on clique sur l’un d’entre eux, il se remplit d’une couleur. 
2. Evolution : lorsque l’on clique sur un d’entre eux, si il  en avait déjà un de rempli , il se vide et celui sur lequel on vient de cliquer se remplit.*/

//Un Listener qui remplise le background du carré quand on clic dessus

let carres = document.querySelectorAll(".contour")

// je parcours
carres.forEach(carre=>{
    carre.addEventListener("click", function(){
        //j'ai la boite sur laquelle j'ai cliqué
        reset()
        console.log(carre)
        carre.classList.toggle("bg-blue")
    })
});
/*
/**
 * role : 
 * parametre : 
 * return : 
 */
function reset(){
    let carres = document.querySelectorAll(".contour")
    carres.forEach(carre=>{
        carre.classList.remove("bg-blue")
    });
};

/*## Exercice  4: un compteur de clic

Un script qui compte le nombre de clic sur un bouton et qui l’affiche dans le body*/

/**
 * role : 
 * parametre :
 * return :
 */


let comptEur = document.querySelector("#compteur")
let numb = 0
comptEur.forEach(compt=>{
    compt.addEventListener("click", 
        function compT(numb){
        
		`<p>${numb}</p>`
    })

});


/*## Exercice  5: Header changeant

Prérequis : une page html avec un header transparent fixe, une bannière sous forme d’image avec du texte par dessus,  et du contenu pour pouvoir scroller dans la page. 

Lorsque l’utilisateur scroll sur la page et arrive sous la bannière, le header se colore*/