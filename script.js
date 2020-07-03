//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.idName="root"

 for(let i=0;i<episodeList.length;i++){
  let episodeDiv=document.createElement("div");
  episodeDiv.className="display";
  rootElem.appendChild(episodeDiv);

  let episodeName=document.createElement("h3");
  let seasonAndEpisode="S0"+episodeList[i].season+"E0"+episodeList[i].number;
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


