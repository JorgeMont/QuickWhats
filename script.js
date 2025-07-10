console.log('Script loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const input = document.getElementById('number');

    button.addEventListener('click', () => {
        const number = input.value;
        if (number) {
            const whatsappUrl = `https://wa.me/${number}`;
            window.open(whatsappUrl, '_blank');
        } else {
            alert('Por favor, inserta un numero valido.');
        }
    });
});