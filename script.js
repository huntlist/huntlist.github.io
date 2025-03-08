console.log('Logging')
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://captcha-check.up.railway.app')
        .then(response => response.json())
        .then(data => {
            console.log('Response from captcha-check:', data);
        })
        .catch(error => {
            console.error('Error fetching captcha check:', error);
        });
});

function goToPostPage() {
    window.location.href = 'postpage.html';
  }