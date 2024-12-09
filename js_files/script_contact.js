// with the help of GPT3.5 to revise
function sendEmail() {
    const name = document.getElementById('nameInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    if (!name || !message) {
        alert('Please fill in both the Name and Message fields.');
        return;
    }
    const subject = `Message from ${name}`;
    const body = `Hello,\n\n${message}\n\nBest regards,\n${name}`;
    const email = 'wenqingpanlucy@gmail.com';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}