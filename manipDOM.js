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