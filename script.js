

/* export to pdf is codes */

const pdfBtn = document.getElementById("pdfBtn");
const languageSelect=document.getElementById("language");

const keys=["descriptionPart","educationPart","coursesPart","projectsPart","speakLanguangePart"];

const dictionary=[
  {
    key: "descriptionPart",
    tr: " Merhaba, ben Murat AVCI, dijital pazarlama uzmanıyım. Kariyerime Frontend Developer olarak devam etmeye karar verdim. Kendimi bu alanda yetiştirmek için her gün kararlılıkla çalışmaya ve projeler geliştirmeye devam ediyorum.",
    en: "Hello, I'm Murat AVCI, I'm a digital marketing specialist. I decided to continue my career as a Frontend Developer. In order to educate myself in this field, I continue to work with determination and develop projects every day.",
  },
  {
    key: "educationPart",
    tr: "EĞİTİM",
    en: "EDUCATION",
  },
  {
    key: "coursesPart",
    tr: "KURSLARIM",
    en: "COURSES",
  },
  {
    key: "projectsPart",
    tr: "PROJELERİM",
    en: "PROJECTS",
  },
  {
      key:"speakLanguangePart",
      tr: "DİLLER",
      en: "LANGUAGES",
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



