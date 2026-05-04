//EXO 1

//role : faire une moyenne des 4 notes
//paramètre : les 4 notes
//return : le résultat
function moyenne (a,b,c,d){
    return ( (a+b+c+d) / 4)
}
let a = 2
let b = 16
let c = 15
let d = 9

let valeur = moyenne(a,b,c,d)

console.log(valeur)


//EXO 2

//role : met à jour le stock en soustrayant le numéro
//paramètre : le chiffre
//return : stock à jour

function update (e,f){
    return(e-f)
}

let e = 4
let f = 1

console.log(update(e,f))

let stock = 52

console.log(stock)
function decrem(){
    stock --;
}

decrem()
console.log(stock)
decrem()
console.log(stock)
decrem()
console.log(stock)

decrem()
console.log(stock)
decrem()
console.log(stock)
decrem()
console.log(stock)

decrem()
console.log(stock)
decrem()
console.log(stock)
decrem()
console.log(stock)
decrem()
console.log(stock)

//EXO 3

//role : afficher la dernière lettre d'un mot
//paramètre : le mot
//return : rien

function last (mot){
    let pos = mot.length -1
    console.log(mot[pos])
}

let mot = "Anticonstitutionnellement"

last(mot)

//EXO 4
//role : remplacer le bubble tea par un autre
//paramètre : le nouveau produit et la liste initiale "thé, café, tisane, bubble tea"
//return : rien

function nouvelleOffre(nouveauProduit, listeInitile){
    console.log (listeInitile.replace("Bubble tea", nouveauProduit))

}

nouvelleOffre("Monster", "Café, Bubble tea, Café, Tisane")


/*Bonus*/

function ajouterBalise(balise){

document.querySelector("body").innerHTML+=balise

}

ajouterBalise("<h1>Coucou le sang</h1>")

ajouterBalise("<p>On est trop fort en JS ; sauf un</p>")

ajouterBalise("<h2>Mais de qui s'agit il ?</h2>")

ajouterBalise("<p>To be continued</p>")



function afficherAddition(a, b){
    ajouterBalise(`<p> ${a+b} </p>`)
}

afficherAddition(7,5)


function afficherNom(prenom,nom){
    ajouterBalise(`<h3>${prenom} ${nom} 04/05/2026</h3>`)
}

let prenom = "Samuel"
let nom = "AYADI"

afficherNom(prenom,nom)

/*## Exercice 5:

**Includes**

Nous cherchons à créer une fonction qui nous permettra de vérifier une adresse mail. Nous souhaitons renseigner une adresse mail en argument de la fonction et que celle-ci vérifie si le l’adresse mail contient bien un "@". Le résultat “true” ou “false” s’affichera en console.*/

//role :vérifier si l'adresse mail contient un "@" et afficher true ou false
//paramètre : adresse mail , présence du @
//return : rien

function mailverify(mail){
    console.log(mail.includes("@"))

}

mailverify("contact@gmail.com")

mailverify("contactagmail.com")