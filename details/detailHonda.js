const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.detailHonda')

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/HondaDes/' + id)
    const HondaDes = await res.json();

    const template = `
        <h2>${HondaDes.Header}</h2>
        <p>${HondaDes.Des}</p>

    `
    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderDetails())