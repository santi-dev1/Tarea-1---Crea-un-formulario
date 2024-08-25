document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('Formulario');

    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("input", function() {
            const label = document.querySelector(`label[for=${this.id}]`);
            if (this.value !== "") {
                label.style.opacity = 0;
            } else {
                label.style.opacity = 1;
            }
        });
    });


    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const datos = {
            nombre: formulario.nombre.value,
            correo: formulario.correo.value,
            categoria: formulario.categoria.value,
            comentario: formulario.comentario.value
        };

        console.log(datos);
        
        formulario.reset();

        inputs.forEach(input => {
            const label = document.querySelector(`label[for=${input.id}]`);
            label.style.opacity = 1;
        });
    });
});