document.addEventListener('DOMContentLoaded', function () {
    fetch('https://appointment-api.pentavalue.com/modules/privacyPolicy', {method: "GET"})
        .then(response => response.json())
        .then(data => {
            const responseContainer = document.getElementById('response-container');
            responseContainer.innerHTML = JSON.stringify(data.data.PrivacyPolicy, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
