//stuff that happens on loading
function preLoad(sectionButton){
    document.getElementById("projectButton").style.fontSize = "25px";
    document.getElementById("aboutButton").style.fontSize = "25px";
    document.getElementById("personalButton").style.fontSize = "25px";
    var captions = document.querySelectorAll('cap');
    captions.forEach((caption) => {
      caption.style.fontSize = '25px'; 
      caption.style.marginTop = '-6vh';
      caption.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      caption.style.height = '6vh';
    });



    document.getElementById(sectionButton).style.backgroundColor = '#7e7e8dff'
    document.getElementById(sectionButton).style.textDecoration = 'underline';
}



//redirects user to the desired window
function switchTab(destination){
    window.location.replace(destination);
}

//redirects user to a project's specific process page
//also sets the name, path, and length of the desired folder
function showProject(processName, processPath, processLength){
    window.location.replace('process.html');
    localStorage.setItem('projectName', processName);
    localStorage.setItem('projectPath', processPath);
    localStorage.setItem('projectLength', processLength);
    
}

function loadDocument(){
    //temp, error checking
    console.log(document.getElementById("process").src);
    document.getElementById("projectButton").style.fontSize = "25px";
    document.getElementById("aboutButton").style.fontSize = "25px";
    document.getElementById("personalButton").style.fontSize = "25px";

    if(getProjectName() === "Muse"){
        const link = document.createElement("img");
        link.src = "thumbnails/MuseFigma.png"
        link.className = "processImage";
        link.style.cursor = 'pointer';
        link.onclick = function() {
            console.log('Button clicked!');
                window.open("https://www.figma.com/proto/F9L6Pj6U1UgsLKqLkFPBqD/Muse-High-Fidelity-Prototype?node-id=170-2783&p=f&t=QV8WoTmIzaNMI9oL-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=170%3A2783");
        }
         document.getElementById("process").appendChild(link);
    }
    //Runs through the given project folder, adds each image to the process element
    for(let i = 2; i < getFolderLength(); i++){
        const processImg = document.createElement("img");
        processImg.src = getProjectPath()+ `/${getProjectName()}${i}.png`;
        processImg.className = "processImage";
        document.getElementById("process").appendChild(processImg);
    }
    
}



function getProjectName(){
    return localStorage.getItem('projectName');
}
function getProjectPath(){
    return localStorage.getItem('projectPath');
}

function getFolderLength(){
    return localStorage.getItem('projectLength');
}



