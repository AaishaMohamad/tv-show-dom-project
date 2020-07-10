//You can edit ALL of the code here
let searchBox;
let seasonAndEpisode;

function setup() {
 const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.idName="root";
  rootElem.innerHTML=""

 for(let i=0;i<episodeList.length;i++){
  let episodeDiv=document.createElement("div");
  episodeDiv.className="display";
  rootElem.appendChild(episodeDiv);
  
  let episodeName=document.createElement("h3");
  seasonAndEpisode="S0"+episodeList[i].season+"E0"+episodeList[i].number;
  episodeName.innerText=episodeList[i].name+"-"+seasonAndEpisode;
  episodeDiv.appendChild(episodeName);

  let episodeImage=document.createElement("img")
  episodeImage.className="img";
  episodeImage.src=episodeList[i].image.medium;
  episodeDiv.appendChild(episodeImage);

  let episodeSummary=document.createElement("p");
  episodeSummary.className="summary"
  let theSummary=episodeList[i].summary;
  episodeSummary.innerHTML=theSummary;
  episodeDiv.appendChild(episodeSummary);
  };
};
const footer=document.createElement("div")
footer.setAttribute("id","footer");
footer.className="footer";
document.body.appendChild(footer);

let link=document.createElement("a");
link.href="https://www.tvmaze.com";
link.className="footerLink";
link.innerText=" TVMaze.com";
let footerText=document.createElement("p");
footerText.innerHTML="<p><b>Data originated from </p></b>";
// const footerInnerText=footerText+link;
footer.appendChild(footerText);
footer.appendChild(link);
window.onload = setup;

let allOfTheEpisodes=getAllEpisodes();
  function searchEpisodes(){
    allOfTheEpisodes=getAllEpisodes();
    let InputValue=searchBox.value;
    let filteredEpisodes=allOfTheEpisodes.filter(episode =>
    episodeMatchesQuery(episode,InputValue));
    
    makePageForEpisodes(filteredEpisodes); 

    let numberOfDisplayedEpisodes=document.querySelector(".displayedEpisodes");
    let text=`${"Displaying"} ${filteredEpisodes.length}/${allOfTheEpisodes.length}`;
    numberOfDisplayedEpisodes.innerText=text;
  };

  function episodeMatchesQuery(ep,searchInput){
    let episode=ep.name.toLowerCase();
    let summary=ep.summary.toLowerCase();
    let theSearchI=searchInput.toLowerCase();
    return (episode.includes(theSearchI)|| summary.includes(theSearchI));
  };
  searchBox=document.getElementById("searchInput");
  searchBox.addEventListener("keyup", searchEpisodes);


    let selectBox=document.getElementById("selectBox");
    for(let i=0;i<allOfTheEpisodes.length;i++){
      let option=document.createElement("option");
      episodeName=allOfTheEpisodes[i].name;
      seasonAndEpisode="S0"+allOfTheEpisodes[i].season+"E0"+allOfTheEpisodes[i].number;
      let joined=seasonAndEpisode+"-"+episodeName;
      option.innerText=joined;
      selectBox.appendChild(option);
    };
    
  
    function activateOptions(){
      let options=document.querySelectorAll("option");
      for(let i=0;i<options.length;i++){
        
        let oneO=options[i];
        options[i].addEventListener("click",showEpisode)
       function showEpisode(option){
         let allOfTheEpisodes=getAllEpisodes();

          
        }
      }
     };

    activateOptions();
 
    // .addEventListener("click",showEpisode);
