document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://timelessmarket-b650.restdb.io/rest/contact?max=2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '65c3a88370dd294889262a1a' // Replace with your RestDB API key
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to submit form');
        }
        console.log('Form submitted successfully');
        // Optionally, you can redirect the user or show a success message here
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        // Handle error - show error message or retry submission
    });
});