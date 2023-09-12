document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('https://formspree.io/f/xleyleyd', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('E-mail enviado com sucesso!');
            } else {
                alert('Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
            }
        })
        .catch(error => {
            console.error('Erro ao enviar o e-mail:', error);
            alert('Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        });
    });
});