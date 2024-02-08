document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sign-up-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form data
        const formData = new FormData(this);

        // Send the form data to the server using fetch
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
            // Optionally, you can show a success message here
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            // Handle error - show error message or retry submission
        });

        // Redirect the user to the welcome page
        window.location.href = "welcome.html"; 
    });
});
