
let inputButton = document.querySelector('#btn-translate');
let textInput = document.querySelector('textarea');
let outputText = document.querySelector('#output-text');

let serverUrl = "https://api.funtranslations.com/translate/minion.json";

function urlText(text) {
    // let text = textInput.value;
    return serverUrl + "?text=" + text;
}

inputButton.addEventListener("click", function userClick() {
    
    if (textInput.value === '') {
        alert('Please Enter some Text!');
    } else if (!isNaN(parseFloat(textInput.value))) {
        alert('Please Enter Text!');
    } else if (/\d/.test(textInput.value)) {
        alert('Please Enter only Text!');
    } else {
        fetch(urlText(textInput.value)).then(response => response.json()).then(function getJsonLog(json) {
            console.log(urlText(textInput.value));
            console.log(json);
            outputText.innerText = json.contents.translated;
        }).catch(function errorHandling(error) {
            if (error.code === 429) {
                alert("Sorry There are Too Many Requests ! Please try again after some time");
            } else {
                console.log("Sorry an Error Occured", error);
                alert("Something went wrong with our server! Try again after some time");
            }
        });
    }
});

