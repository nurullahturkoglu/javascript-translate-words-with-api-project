{
  /* <div class="card" id="translated-body">
    <div class="card-header" style="padding-top: 0.75rem; padding-left: 0.5rem">
      <img
        src="images/en.png"
        id="outputImage"
        height="50px"
        width="50px"
        style="float: left; padding: 0 10px 10px 0"
      />
      <span class="card-title" id="outputLanguage">
        İngilizce
      </span>
    </div>
    <div class="card-content">
      <h5>
        Çevrilen Kelime:
        <span id="outputWord" style="color: red">
          {" "}
          How are you ?
        </span>
      </h5>
    </div>
  </div> */
}

function addToUIText(translatedWord,short_selectedLanguage,long_selectedLanguage) {
   
    let createText = `
   <div class="card-header" style="padding-top: 0.75rem; padding-left: 0.5rem">
    <img
      src="images/${short_selectedLanguage}.png"
      id="outputImage"
      height="50px"
      width="50px"
      style="float: left; padding: 0 10px 10px 0"
    />
    <span class="card-title" id="outputLanguage">
      ${long_selectedLanguage}
    </span>
  </div>
  <div class="card-content">
    <h5>
      Çevrilen Kelime:
      <span id="outputWord" style="color: red">
        ${translatedWord}
      </span>
    </h5>
  </div> `;

  return createText;
}
