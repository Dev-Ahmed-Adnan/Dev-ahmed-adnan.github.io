document.addEventListener('DOMContentLoaded', function () {
    fetch('https://qhere-backend-dev.azurewebsites.net/api/app/content?Type=2')
        .then(response => response.json())
        .then(data => {
            const responseContainer = document.getElementById('response-container');
            responseContainer.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
