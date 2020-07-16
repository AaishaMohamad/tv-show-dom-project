//You can edit ALL of the code here
let searchBox;
let seasonAndEpisode;

function setup() {
  fetch("https://api.tvmaze.com/shows/82/episodes")
  .then(function(response) {
    if(response.ok) {
      return response.json();
    } else {
      console.log("ooops!");
    }
  }).then(function(data) {
    makePageForEpisodes(data);
    makeSelectForEpisodes(data)
  });
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
  episodeDiv.setAttribute("id",seasonAndEpisode);
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
function makeSelectForEpisodes(data){
  let selectBox=document.getElementById("selectBox");
  selectBox.innerHTML="";
  for(let i=0;i<data.length;i++){
    let option=document.createElement("option");
    episodeName=data[i].name;
    seasonAndEpisode="S0"+data[i].season+"E0"+data[i].number;
    option.value= seasonAndEpisode;
    let joined=seasonAndEpisode+"-"+episodeName;
    option.innerText=joined;
    selectBox.appendChild(option);
  };
    function getFirstPartOFText(event){
      let selectedOption=event.target.value;
      window.location.hash = "#"+selectedOption;
    };
    let select=document.getElementById("selectBox");
    select.addEventListener("change",getFirstPartOFText)
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
    console.log(numberOfDisplayedEpisodes)
  };

  function episodeMatchesQuery(ep,searchInput){
    
    let episode=ep.name.toLowerCase();
    let summary=ep.summary.toLowerCase();
    let theSearchI=searchInput.toLowerCase();
    return (episode.includes(theSearchI)|| summary.includes(theSearchI));
  };
  
  searchBox=document.getElementById("searchInput");
  searchBox.addEventListener("keyup", searchEpisodes);
  

    
      
      let selectShow=document.getElementById("showsBox");
      let allShows=getAllShows();
      allShows.sort(function(a, b){
        if (a.name < b.name)
            return -1
        if (a.name > b.name)
            return 1
        return 0
    })
      for(let i=0;i<allShows.length;i++){
       let ShowName=allShows[i].name;
          let id=allShows[i].id;
          let option=document.createElement("option");
          option.innerText=ShowName;
          option.value=id;
        selectShow.appendChild(option);
      };

    function displayEpisodes(event){
      let selectedOption=event.target.value;   
        console.log(selectedOption);
      fetch("https://api.tvmaze.com/shows/"+selectedOption+"/episodes")
      .then(function(result){
        if(result.ok) {
          return result.json();
        } else {
          console.log("ooops!");
        }
      }).then(function(data){
        console.log(data);
        makePageForEpisodes(data);
       
        makeSelectForEpisodes(data);

        function searchEpisodes(){

          allOfTheEpisodes=data;
      console.log(allOfTheEpisodes);
          let InputValue=searchBox.value;
          let filteredEpisodes=data.filter(episode =>
          episodeMatchesQuery(episode,InputValue));
      
         
         
          makePageForEpisodes(filteredEpisodes);
          let numberOfDisplayedEpisodes=document.querySelector(".displayedEpisodes");
          let text=`${"Displaying"} ${filteredEpisodes.length}/${data.length}`;
          numberOfDisplayedEpisodes.innerText=text;
          console.log(numberOfDisplayedEpisodes)
        };
      
        function episodeMatchesQuery(ep,searchInput){
          let episode=ep.name.toLowerCase();
          let summary=ep.summary.toLowerCase();
          let theSearchI=searchInput.toLowerCase();
          return (episode.includes(theSearchI)|| summary.includes(theSearchI));
        };
        
        searchBox=document.getElementById("searchInput");
        searchBox.addEventListener("keyup", searchEpisodes);

      });
 
    };
      selectShow=document.getElementById("showsBox");
      selectShow.addEventListener("change",displayEpisodes)