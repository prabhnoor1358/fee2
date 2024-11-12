const movies = {
    "Inception": 150,
    "The Shawshank Redemption": 120,
    "The Dark Knight": 180,
    "12 Angry Men": 100,
    "Schindler's List": 150,
    "The Lord of the Rings: The Return of the King": 200,
    "Pulp Fiction": 140,
    "The Godfather": 160,
    "The Godfather: Part II": 170,
    "The Dark Knight Rises": 190,
    "Dilwale Dulhania Le Jayenge": 120,
    "Lagaan": 110,
    "Taare Zameen Par": 130,
    "3 Idiots": 140,
    "Kuch Kuch Hota Hai": 100,
    "Dhoom 3": 160,
    "Chennai Express": 120,
    "Bajirao Mastani": 180,
    "PK": 150,
    "Dangal": 160,
    "Titanic": 180,
    "The Avengers": 200,
    "The Jungle Book": 140,
    "The Lion King": 150,
    "Frozen": 120,
    "The Hunger Games": 160,
    "Interstellar": 180,
    "The Martian": 170,
    "Mad Max: Fury Road": 190,
    "The Revenant": 200,
    "Spotlight": 160,
    "The Big Short": 170,
    "La La Land": 180,
    "Moonlight": 150,
    "The Shape of Water": 190,
    "Get Out": 160,
    "A Quiet Place": 170,
    "Black Panther": 200,
    "Avengers: Infinity War": 220,
    "The Avengers: Endgame": 250,
    "Joker": 200,
    "Parasite": 190,
    "1917": 220,
    "Ford v Ferrari": 200,
    "Once Upon a Time in Hollywood": 210,
    "Jojo Rabbit": 190,
    "Little Women": 200,
    "Marriage Story": 180,
    "The Irishman": 220,
    "Kabhi Khushi Kabhie Gham": 140,
    "Kaho Naa... Pyaar Hai": 120,
    "Devdas": 160,
    "Veer-Zaara": 150,
    "Om Shanti Om": 180,
    "Rock On!!": 140,
    "Ghajini": 160,
    "Aashiqui 2": 150,
    "Yeh Jawaani Hai Deewani": 180,
    "Barfi!": 160,
    "Krrish 3": 200,
    "Dhoom 2": 180,
    "Munnabhai M.B.B.S.": 140,
    "Lage Raho Munna Bhai": 150,
    "Golmaal: Fun Unlimited": 120,
    "Singham": 160,
    "Bol Bachchan": 150,
    "Singham Returns": 180,
    "Dilwale": 200,
    "Bajirao Mastani": 220,
    "Prem Ratan Dhan Payo": 200,
    "Befikre": 180,
    "Tubelight": 160,
    "Judwaa 2": 150,
    "Golmaal Again": 180,
    "Tiger Zinda Hai": 200,
    "Padmaavat": 220,
    "Baaghi 2": 180,
    "Raazi": 160,
    "Sanju": 200,
    "Gold": 180,
    "Satyameva Jayate": 150,
    "Stree": 160,
    "Badhaai Ho": 140,
    "Kedarnath": 150,
    "Simmba": 180,
    "Uri: The Surgical Strike": 200,
    "Gully Boy": 220,
    "Total Dhamaal": 180,
    "Luka Chuppi": 160,
    "Kesari": 200,
    "Kalank": 220,
    "Student of the Year 2": 180,
    "De De Pyaar De": 160,
    "India's Most Wanted": 150,
    "Bharat": 200,
    "Article 15": 180,
    "Kabir Singh": 220,
    "Mardaani 2": 140,
    "Pati Patni Aur Woh": 160,
    "Panipat": 180,
    "Dabangg 3": 200,
    "Good Newwz": 160,
    "Tanhaji: The Unsung Warrior": 180,
    "Chhapaak": 140,
    "Street Dancer 3D": 160,
    "Panga": 150,
    "Jawaani Jaaneman": 140,
    "Shubh Mangal Zyada Saavdhan": 160,
    "Bhoot: Part One - The Haunted Ship": 150,
    "Thappad": 140,
    "Baaghi 3": 180,
    "Angrezi Medium": 160,
    "Sooryavanshi": 200,
    "Ludo": 180,
    "Coolie No. 1": 160,
    "Chhalaang": 140,
    "Suraj Pe Mangal Bhari": 150,
    "Indoo Ki Jawani": 140,
    "Shakeela": 160,
    "Ramprasad Ki Tehrvi": 140,
    "Tribhanga": 150,
    "The White Tiger": 180,
    "Kaagaz": 140,
    "Master": 200,
    "Eeswaran": 160,
    "Red": 180,
    "Krack": 160,
    "Alludu Adhurs": 150,
    "Solo Brathuke So Better": 140,
    "Gatham": 160,
    "30 Rojullo Preminchadam Ela": 150,
    "Uppena": 180,
    "A1 Express": 160,
    "Check": 140,
    "Kapatadhaari": 150,
    "Sreekaram": 160,
    "Chakra": 180,
    "Naandhi": 140,
    "Acharya": 200,
    "RRR": 220,
    "Radhe": 180,
    "Toofaan": 160,
    "Shershaah": 200,
    "Hungama 2": 160,
    "Bhuj: The Pride of India": 180,
    "Bell Bottom": 160,
    "Chehre": 140,
    "Helmet": 150,
    "Thalaivii": 180,
    "Bhool Bhulaiyaa 2": 160,
    "Atrangi Re": 150,
    "Satyameva Jayate 2": 180,
    "Antim: The Final Truth": 160,
    "Chandigarh Kare Aashiqui": 140,
    "83": 200,
    "Spider-Man: No Way Home": 220,
    "The Matrix Resurrections": 200,
    "Gangubai Kathiawadi": 180,
    "Bachchan Pandey": 160,
    "Jayeshbhai Jordaar": 150,
    "Dhaakad": 140,
    "Attack": 160,
    "Heropanti 2": 180,
    "Runway 34": 160,
    "Jersey": 200,
    "KGF: Chapter 2": 220,
    "Beast": 200,
    "Doctor Strange in the Multiverse of Madness": 220,
    "Don": 180,
    "Major": 160,
    "Vikram": 200,
    "F3: Fun and Frustration": 160,
    "Anek": 150,
    "Samrat Prithviraj": 180,
    "Jug Jugg Jeeyo": 160,
    "Rocketry: The Nambi Effect": 180,
    "Shamshera": 200,
    "Shabaash Mithu": 160,
    "Ek Villain Returns": 180,
    "Laal Singh Chaddha": 200,
    "Raksha Bandhan": 160,
    "Liger": 180,
    "Brahmastra": 220,
    "Lakshya": 200,
    "Goodbye": 160,
    "Doctor G": 180,
    "Maja Ma": 140,
    "Ram Setu": 160,
    "Thank God": 180,
    "Uunchai": 160,
    "Black Adam": 200,
    "Phone Bhoot": 160,
    "Mili": 140,
    "Double XL": 160,
    "Yashoda": 180
};

let select = document.querySelector("#movie");

for (let element in movies) {
    let tempEle = document.createElement("option");
    tempEle.value = movies[element];
    tempEle.textContent = `${element} (₹${movies[element]})`;
    select.appendChild(tempEle);
}

window.addEventListener('DOMContentLoaded', () => {
    ticketPrice = +movieSelect.value;
});


let searchBtn = document.querySelector('#search');

searchBtn.addEventListener('click',()=>{
    let query = document.querySelector('#query').value;
    const apiUrl = `http://simpleapi.traileraddict.com/${query}/trailer`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Convert the XML to JSON
            const jsonFromXml = xmlToJson(data);

            // Extract the embeddable HTML
            const embeddableHTML = extractEmbedLink(jsonFromXml);
            if (embeddableHTML) {
                // Insert the embeddable <iframe> into the play-trailer div
                const playTrailerDiv = document.querySelector('.play-trailer');
                playTrailerDiv.innerHTML += embeddableHTML; // Append the <iframe> to the existing content
            }

            let tempEle = document.createElement("option");
            tempEle.value = 180;
            tempEle.textContent = `${query} (₹${180})`;
            select.prepend(tempEle);
        })
        .catch(error => {
            const playTrailerDiv = document.querySelector('.play-trailer');
            playTrailerDiv.innerHTML += error;
            console.error('Error fetching first API:', error);
        });
})

function xmlToJson(xml) {
    const xmlDoc = (new DOMParser()).parseFromString(xml, "text/xml");

    // Recursive function to process XML nodes
    function xmlToJsonRecursive(node) {
        let obj = {};

        if (node.nodeType === 1) { // Element node
            if (node.attributes.length > 0) {
                obj["@attributes"] = {};
                for (let i = 0; i < node.attributes.length; i++) {
                    const attr = node.attributes[i];
                    obj["@attributes"][attr.nodeName] = attr.nodeValue;
                }
            }
        }

        if (node.hasChildNodes()) {
            for (let i = 0; i < node.childNodes.length; i++) {
                const child = node.childNodes[i];
                const nodeName = child.nodeName;

                if (child.nodeType === 3) { // Text node
                    const textContent = child.nodeValue.trim();
                    if (textContent) {
                        obj["#text"] = textContent;
                    }
                } else if (child.nodeType === 4) { // CDATA node
                    obj["#cdata"] = child.nodeValue;
                } else if (child.nodeType === 1) { // Element node
                    if (!obj[nodeName]) {
                        obj[nodeName] = [];
                    }
                    obj[nodeName].push(xmlToJsonRecursive(child));
                }
            }
        }

        return obj;
    }

    return xmlToJsonRecursive(xmlDoc.documentElement);
};