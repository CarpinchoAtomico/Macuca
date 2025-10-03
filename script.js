document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const recipient = 'luca.brioschi@janer.esc.edu.ar'; // Destinatario del formulario
    const subject = encodeURIComponent('Contacto desde formulario web (Macuca)');
    
    // Codificación del cuerpo del mensaje para el link mailto
    const rawBody = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;
    const body = encodeURIComponent(rawBody);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

