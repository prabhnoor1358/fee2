let bank = document.getElementById('bank');
let logo = document.getElementById('bankLogo');

// Ensure both elements exist
if (bank && logo) {

    function updateLogo() {
        if (bank.value === 'axis') {
            logo.src = '../img/pricing/axis.png';
        }
        else if (bank.value === 'canara') {
            logo.src = '../img/pricing/canara.png';
        }
        else if (bank.value === 'idfc') {
            logo.src = '../img/pricing/idfc.png'; 
        }
        else if (bank.value === 'icic') {
            logo.src = '../img/pricing/icic.png';
        }
        else{
            logo.src = '../img/pricing/default.png'
        }
    }

    bank.addEventListener('change', updateLogo);
}

let totalPayment = document.querySelector("#totalPayment");
totalPayment.textContent = localStorage.getItem("totalPayment");

let payBtn = document.querySelector('#payBtn');

payBtn.addEventListener('click',()=>{

    const apiUrl = "https://quickchart.io/qr?text=" + encodeURIComponent(`upi://pay?mode=02&ver=01&pa=9779579438%40superyes&pn=Mr+PRABHNOOR++SINGH&txntype=pay&qrmedium=02&am=${parseInt(localStorage.totalPayment)}&orgid=180032&sign=MEQCIH2MxDvZMJs1Y1/XU37GeoqrnSK3HN57jks6TTbAKTYKAiAdWv+9h7sM17Il9Zce8Mr6Xq0Rp/SqraxKfj7Sm4YygQ==`);

console.log(apiUrl);


    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }        
        return response;
    })
    .then(data => {
        console.log(data.url);
        location.replace(data.url);
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
})