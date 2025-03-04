console.log('Logging')
    fetch('https://captcha-check.up.railway.app')
        .then(response => response.json())
        .then(data => {
            console.log('Response from captcha-check:', data);
        })
        .catch(error => {
            console.error('Error fetching captcha check:', error);
        });
