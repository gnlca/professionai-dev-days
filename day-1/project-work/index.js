
document.addEventListener('DOMContentLoaded', function () {
	// Ottieni l'elemento del form di contatto
	const contactForm = document.getElementById('contact-form');

	if (!contactForm) {
		console.error("Errore: contact form non trovato")
		return // Early return, non proseguiamo se il contact form non è stato trovato
	}

	// Aggiungi un event listener alla submission del form
	contactForm.addEventListener('submit', function (event) {
		// Impedisce il comportamento di default ossia che il form venga inviato al server e il ricaricamento della pagina
		event.preventDefault();

		// Ottieni i valori del form
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const subject = document.getElementById('subject').value;
		const message = document.getElementById('message').value;

		// Crea il contenuto dell'email
		// encodeURIComponent  converte i caratteri speciali in un formato sicuro per gli URL
		const emailSubject = encodeURIComponent(`${subject}`);
		const emailBody = encodeURIComponent(
			`Ciao Mario,\n\n` +
			`Mi chiamo ${name} e ti contatto da ${email}.\n\n` +
			`${message}\n\n` +
			`Cordiali saluti,\n${name}`
		);

		// Crea l'URL mailto
		const mailtoUrl = `mailto:mario.rossi@email.com?subject=${emailSubject}&body=${emailBody}`;

		// Apri il client di posta
		window.location.href = mailtoUrl;

		// Resetta il form dopo l'invio
		contactForm.reset();
	});

});
