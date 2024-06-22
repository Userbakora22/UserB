const tacheliste = document.querySelector('tache-liste')

function affichageliste(doc){
    let li = document.createElement('li')
    let titre = document.createElement('span')
    let description = document.createElement('span')

    li.setAttribute('data-id', doc.id);

    titre.textContent = doc.data().titre;
    description.textContent = doc.data().description;

    li.appendChild(titre);
    li.appendChild(description);

    tacheliste.appendChild(li)
}