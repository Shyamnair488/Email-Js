// Step 1: Set up EmailJS with your public key
// Replace 'YOUR_PUBLIC_KEY' with the key from your EmailJS account
emailjs.init("YOUR_PUBLIC_KEY");

// Step 2: Get the form and status elements from the HTML
const emailForm = document.getElementById('email-form');
const statusMessage = document.getElementById('status');

// Step 3: Add click event listener to the form's submit button
emailForm.addEventListener('submit', function(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();
    
    // Show that we're sending the email
    statusMessage.textContent = 'Sending email...';
    statusMessage.className = '';

    // Step 4: Get all the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Step 5: Create an object with all the form data
    const emailData = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    // Step 6: Send the email using EmailJS
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData)
        .then(function() {
            // If email sent successfully
            statusMessage.textContent = 'Email sent successfully!';
            statusMessage.className = 'success';
            emailForm.reset(); // Clear the form
        })
        .catch(function(error) {
            // If there was an error
            statusMessage.textContent = 'Failed to send email. Please try again.';
            statusMessage.className = 'error';
            console.log('Error:', error);
        });
}); 