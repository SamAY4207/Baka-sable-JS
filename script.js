console.log("Salut" + " Jean-Michel" + " ti è le plu bo!") // console.log( ) -> écrit dans la console

let age = 17; // Une variable dont le ontenu peut évoluer
const vitesslumiere = 380000; //Une variable dont le contenu n'évoluera jamais ; une constante

let salut= "Bonjour Sam, comment vas tu bien ?" //Chaine de caractères

let connecte = true //Vrai ou Faux (Boolean)

console.log(salut);
console.log(connecte);

age = age+1; //Nouvelle valeur de âge = Ancienne valeur de âge + 1 

console.log(age)


//EXO 1//
let i = 0
i = i+1
i = i+1
i = i+1
i = i+1

// ou alors
let k= 0
k +=1 //(= k = k + 1)
k +=2 //(= k = k + 2)

console.log(i)

let prenom = "Sam"
let nom = " Ay"
let nomcomplet = prenom + nom //ou let nomcomplet = prenom + " " + nom
//ou let nomcomplet = "le prenom est ${prenom} et le nom est ${nom}
//ou let nomcomplet = ${prenom} + ${nom}

console.log(nomcomplet)

console.log("Salut " + prenom + ", comment vas tu aujourd'hui ?")

console.log(`Salut ${prenom}, comment-vas-tu aujourd'hui ?`) 

let phrase = `"Oho, j'ai abondonné mon humanité Jojo !"`
let longueurphrase = phrase.length



console.log(phrase)
console.log(phrase.length)
console.log(`la phrase ${phrase} contient ${longueurphrase} caractères`)
// "nom de la variable".lenght donne le nombre de caractère de l'entitée

let mot = "Chateau"

console.log(mot.replace ("t", "p"))

mot = "Rhubarbe"

console.log(mot)
console.log(mot.length)
console.log(mot[0])
console.log(mot[mot.length-1])

mot = "Rhubarbe, Rhubarbe, Rhubarbe, c'est ma Rhubarbe à moi !"
console.log(mot[mot.length-1])


//EXO 2//




function direBonjour (prenom){
    console.log(`Bonjour ${prenom}`)
}

direBonjour(prenom);

direBonjour("Phillipe");

direBonjour("Jean-Géranrd");

direBonjour("Salbatar");

direBonjour("Maurice");

direBonjour("Au revoir");


// role : additionner deux chiffres

//paramètre : deux chiffre

// return : résultat

let a = 52562;
let b = 2521572;
function addition (a , b){
    return a+b;
};

console.log(addition (a,b));