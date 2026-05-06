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

//EXO 6
/*role : retourne les la sommes des deux valeurs définies
parametre : les deux nombres
return : le résultat dans la console*/

function additionConsole(z,x){
    return z+x

}



console.log(additionConsole(52,697))


/*EXO 7
**Return + prompt**

Nous souhaitons créer une fonction qui posera une question en utilisant la fonction "prompt" pour poser une question. La réponse sera retournée et affichée dans la console.

role: propose une question
parametre : question
return : réponse de l'utilisateur*/
/*
function poserQuestion(question){
    
    return prompt(question)
}

let reponse = poserQuestion("Le KFS éteins tous les autres fast food ?")
console.log(reponse)

/*EXO 8
Nous souhaitons créer une fonction qui convertit un montant en euros en dollars. Le montant à convertir est passé en paramètre de la fonction.

La fonction devra retourner le résultat de la conversion.

role : converti un prix en dollar
parametre : montant et taux
return : montant en dollar
*/

function conversion(prix,taux){
    return prix * taux
}

let resultat = conversion(45,1.17)


console.log(`Le prix converti est de ${resultat} $`)



/*
role : demander un prix et un taux de change à l'utilisateur et converti le prix
return : prix convertit
*/
/*
function convert(){
//demande le prix a convertir
let prix = parseFloat(prompt("Quel prix voulez-vous convertir"))


//demande le taux
let taux = parseFloat(prompt("À Quel taux ?"))

//converti

return prix*taux

//retourne le résultat
}

let prixConverti = convert()

alert(`Le prix est de de ${prixConverti} $`)


*/

/*EXO 8.5
role : calculer une moyenne à partir des notes données par l'utilisateur
parametre : R
return : la moyenne
*/

function moyN(){

    //demander la note et convertir la réponse en type number
let francais = parseFloat(prompt("Quelle note a eut l'élève en français ?"))

//demander la note et convertir la réponse en type number
let math = parseFloat(prompt("Quelle note a eut l'élève en maths ?"))

//demander la note et convertir la réponse en type number
let SVT = parseFloat(prompt("Quelle note a eut l'élève en SVT ?"))

//demander la note et convertir la réponse en type number
let histoire = parseFloat(prompt("Quelle note a eut l'élève en histoire ?"))

//calculer la moyenne
let moymoy = (francais+math+SVT+histoire)/4
return moymoy
}


let moyNG = moyN()
alert(`La moyenne de l'élève est de ${moyNG} /20`)


/*EXO 9
**Return + split**

Nous souhaitons créer une fonction qui retournera toujours le troisième élément d'une liste à virgule en chaine de caractére. La liste à virgule sera donnée en argument de la fonction. Nous souhaitons afficher ce troisième élément dans la console.

role:
parametre:
return:
*/

/**
 * @role
 * @param
 * @return
 */