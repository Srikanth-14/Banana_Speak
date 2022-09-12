//ex02: using javascript
// let input = prompt('Enter User Input: ');
// alert('Hello ' + input);

let inputButton = document.querySelector('#btn-translate');
let textInput = document.querySelector('textarea');
let outputText = document.querySelector('#output-text');

// let serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// let serverUrl = "https://lessonfourapi.prerananawar.repl.co/translate/yoda.json";
let serverUrl = "https://api.funtranslations.com/translate/minion.json";


// console.log(text);

function urlText(text) {
    // let text = textInput.value;
    return serverUrl + "?text=" + text;
}

inputButton.addEventListener("click", function userClick() {
    // console.log("click");
    // console.log(textInput.value);
    // outputText.innerText = 'Hello ' + textInput.value;

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

//live exercise:to fetch data from mock - API
// text1 = "Hello I'm Iron Man";
// text2 = "Hello I'm Shaktimaan Man";
// text3 = "Hello I'm BatMan";

// function urlText(text) {
//     return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?text=" + text;
// }

// function urlFetch(text) {
//     fetch(urlText(text)).then(response => response.json()).then(json => console.log(json));
// }

// // function urlFetch(text) {
// //     fetch(urlText(text)).then(function getResponse(response) {
// //         return response.json();
// //     }).then(function getJsonLog(json) {
// //         console.log(json);
// //     });
// // }

// urlFetch(text1);
// urlFetch(text2);
// urlFetch(text3);