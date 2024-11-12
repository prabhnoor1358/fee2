const cross = document.querySelector('#cross');
const playTrailer = document.querySelector('.play-trailer');
const trailerBtn = document.getElementById('trailer');
const backDivs = document.querySelectorAll('div');
const uls = document.querySelector('ul');
const buttons = document.querySelectorAll('button');

// Function to convert XML to JSON
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

// Function to extract the <iframe> HTML from embed_standard
function extractEmbedLink(jsonData) {
    if (jsonData && jsonData.trailer && jsonData.trailer[0] && jsonData.trailer[0].embed_standard) {
        const cdataContent = jsonData.trailer[0].embed_standard[0]["#cdata"];
        
        if (cdataContent) {
            // Use regex to extract the <iframe> tag
            const iframeMatch = cdataContent.match(/<iframe.*?<\/iframe>/s);
            if (iframeMatch) {
                return iframeMatch[0]; // Return only the <iframe> tag
            } else {
                console.error("No <iframe> tag found in the CDATA content.");
            }
        } else {
            console.error("No CDATA content found in embed_standard.");
        }
    } else {
        console.error("No embed_standard data found in the expected location.");
    }
    return null;
}


// Function to process the movie name from the select box
function getMovieName(text) {
    return text.split('(')[0].trim().replace(/ /g, '-'); // Clean up the movie name
}

// Event listener for the trailer button
trailerBtn.addEventListener('click', () => {

    playTrailer.style.display = 'block';
    document.querySelector('body').style.height = '120vh';
    uls.style.display = 'none';
    for (let i=0; i < backDivs.length; i++) {
        if (i==0 || i==1) {
            continue;
        }
        backDivs[i].style.display = 'none';
    }
    for (let j=0; j < buttons.length; j++) {
        buttons[j].style.display = 'none';
    }


    let selectedIndex = document.querySelector('#movie').selectedIndex;
    let selectedOption = document.querySelector('#movie').options[selectedIndex].text;
    let movieConverted = getMovieName(selectedOption);

    const apiUrl = `http://simpleapi.traileraddict.com/${movieConverted}/trailer`;

    // Fetch the first API (which returns XML data)
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Get raw text content (expecting XML)
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
        })
        .catch(error => {
            const playTrailerDiv = document.querySelector('.play-trailer');
            playTrailerDiv.innerHTML += error;
            console.error('Error fetching first API:', error);
        });
});
