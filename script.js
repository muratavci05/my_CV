

/* export to pdf is codes */

const pdfBtn = document.getElementById("pdfBtn");
const languageSelect=document.getElementById("language");

const keys=["descriptionPart","educationPart"];

const dictionary=[
  {
    key: "descriptionPart",
    tr: "Merhaba ben Murat AVCI. Frontend Developer olarak çalışıyorum",
    en: "Hi, I'm Murat AVCI. I've been working as a Frontend Developer for 1 year",
  },
  {
    key: "educationPart",
    tr: "EĞİTİM",
    en: "EDUCATION",
  },
];



pdfBtn.addEventListener("click", function(){
    const myCV = document.getElementById("myCv");
    const nameSurname = document.getElementById("nameSurname");
    var opt = {
       
        margin:       0.38,
        filename:     nameSurname.innerText + ".pdf",
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
      
      // New Promise-based usage:
      html2pdf().set(opt).from(myCV).save();
      
      
});


/* dictionary and language codes start */

languageSelect.addEventListener("change", function (event){
  console.log(event.target.value);
  
  for(let i=0;i<keys.length;i++){
    console.log(keys[i]);
    const element=document.getElementById(keys[i])
    console.log(element);

    const result = dictionary.find(item => item.key === keys [i])
    console.log(result);
    if(event.target.value === "en"){
      element.innerText =result.en;
    }
    if(event.target.value === "tr"){
      element.innerText = result.tr;
    }
  }
});

function translate(selectedLanguage) {
 for(let i=0;i<keys.length;i++){
  const element=document.getElementById(keys[i])
 }  
  
}



