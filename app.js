const form = document.querySelector('form');
const kelimeInput = document.querySelector('#kelime');
const anlamlarDiv = document.querySelector('#anlamlar');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const kelime = kelimeInput.value;
    const url = `https://sozluk.gov.tr/gts?ara=${kelime}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let anlamlarHTML = '';
            for (let i = 0; i < data[0].anlamlarListe.length; i++) {
                const anlam = data[0].anlamlarListe[i].anlam;
                anlamlarHTML += `<li>${anlam}</li>`;
            }
            anlamlarDiv.innerHTML = `<h2>${kelime} kelimesinin anlamları:</h2><ul>${anlamlarHTML}</ul>`;
        })
        .catch(error => console.error(error));
});
