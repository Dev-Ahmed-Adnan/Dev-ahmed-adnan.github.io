document.addEventListener('DOMContentLoaded', function () {
    fetch('https://qhere-backend-dev.azurewebsites.net/api/app/content?Type=2', {
        method: "GET",
        headers: {
            Cookie: "__tenant=3a078b9f-3759-42dc-1c41-e0af4b615f3d; XSRF-TOKEN=CfDJ8FQ0PPTLLSFIrEstN7yWbcTaO-V6fHNtA7yob82tYgWWALfQRWwoiowaiZaytBRSkyrtmpwocE71sx5t34biofvhzpt-dRYi1hg3_w-P3JXktSL9I_hNFSdlT6hFPxeoSk4DFnBU7Hh7V5rO3rfodf4; .AspNetCore.Culture=c%3Den-GB%7Cuic%3Den-GB",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            Host: 'qhere-backend-dev.azurewebsites.net'
        }
    })
        .then(response => response.json())
        .then(data => {
            const responseContainer = document.getElementById('response-container');
            responseContainer.innerHTML = JSON.stringify(data.data.PrivacyPolicy.replace('\n', ''), null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
