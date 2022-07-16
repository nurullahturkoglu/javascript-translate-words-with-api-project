function translate(event) {
  let language = document.querySelector("#language");
  let languageText = language.value.split("-");
  let sourceWord = document.querySelector("#word").value;
  translateWord(sourceWord, languageText[0], languageText[1], event);
  event.preventDefault();
}

function translateWord(sourceWord, target, target2, event) {
  const data = JSON.stringify({
    
    "q": `${sourceWord}`,
    "source": "tr",
    "target": `${target}`
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      let myResult = JSON.parse(this.response).data.translations.translatedText
      let myText = addToUIText(myResult, target, target2);
      cardBody.innerHTML = myText;
      event.preventDefault();
    }
  });
  
  xhr.open("POST", "https://deep-translate1.p.rapidapi.com/language/translate/v2");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("X-RapidAPI-Key", "9e73dbfa80msh317662bf77c294ap1cca13jsn6665344d775d");
  xhr.setRequestHeader("X-RapidAPI-Host", "deep-translate1.p.rapidapi.com");
  
  xhr.send(data);

  
}

/* translatedWord.data.translations[0].translatedText; */

