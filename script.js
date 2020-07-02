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
  let newSummary=theSummary.substring(3);
  episodeSummary.innerText=newSummary;
  episodeDiv.appendChild(episodeSummary);
  }

  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
