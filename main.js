console.clear()

/*
   _____ ______ _______ _______ _____ _   _  _____  _____ 
  / ____|  ____|__   __|__   __|_   _| \ | |/ ____|/ ____|
 | (___ | |__     | |     | |    | | |  \| | |  __| (___  
  \___ \|  __|    | |     | |    | | | . ` | | |_ |\___ \ 
  ____) | |____   | |     | |   _| |_| |\  | |__| |____) |
 |_____/|______|  |_|     |_|  |_____|_| \_|\_____|_____/ 
*/
const theme = "ace-tomorrow-night"


document.querySelector('div#editorBar>div.tab').click()
let duckPlayer 
let duckRook 
let duckCounter 
let duckSniper 

const topStatusGrid = document.querySelector("#avatarStatRow1")
const bottomStatusGrid = document.querySelector("#avatarStatRow2")

duckPlayer = topStatusGrid.querySelector(":first-child")

duckRook = topStatusGrid.lastChild

duckCounter = bottomStatusGrid.querySelector(":first-child")

duckSniper = bottomStatusGrid.lastChild


let duckPlayerHealth = duckPlayer.querySelector(".avatarStatHealth")
let duckPlayerName = duckPlayer.querySelector(".avatarStatName")
duckPlayerHealth.classList.add("player-health")
duckPlayerHealth.style.position = null
duckPlayerHealth.style.width = null
duckPlayerHealth.style.background = null


let duckRookHealth = duckRook.querySelector(".avatarStatHealth")
let duckRookName = duckRook.querySelector(".avatarStatName")
duckRookHealth.classList.add("rook-health")
duckRookHealth.style.position = null
duckRookHealth.style.width = null
duckRookHealth.style.background = null


let duckCounterHealth = duckCounter.querySelector(".avatarStatHealth")
let duckCounterName = duckCounter.querySelector(".avatarStatName")
duckCounterHealth.classList.add("counter-health")
duckCounterHealth.style.position = null
duckCounterHealth.style.width = null
duckCounterHealth.style.background = null


let duckSniperHealth = duckSniper.querySelector(".avatarStatHealth")
let duckSniperName = duckSniper.querySelector(".avatarStatName")
duckSniperHealth.classList.add("sniper-health")
duckSniperHealth.style.position = null
duckSniperHealth.style.width = null
duckSniperHealth.style.background = null


var statusFrame = document.createElement("div")
statusFrame.classList.add("avatarStatTable")


let duckPlayerFrame = document.createElement("div")
duckPlayerFrame.classList.add("duckPlayer")
duckPlayerFrame.appendChild(duckPlayerHealth)
duckPlayerFrame.appendChild(duckPlayerName)


let duckRookFrame = document.createElement("div")
duckRookFrame.classList.add("duckRook")
duckRookFrame.appendChild(duckRookHealth)
duckRookFrame.appendChild(duckRookName)


let duckCounterFrame = document.createElement("div")
duckCounterFrame.classList.add("duckCounter")
duckCounterFrame.appendChild(duckCounterHealth)
duckCounterFrame.appendChild(duckCounterName)


let duckSniperFrame = document.createElement("div")
duckSniperFrame.classList.add("duckSniper")
duckSniperFrame.appendChild(duckSniperHealth)
duckSniperFrame.appendChild(duckSniperName)


statusFrame.appendChild(duckPlayerFrame)
statusFrame.appendChild(duckRookFrame)
statusFrame.appendChild(duckCounterFrame)
statusFrame.appendChild(duckSniperFrame)

dialogDocs = document.querySelector("#dialogDocs")
dialogDocs.parentNode.insertBefore(statusFrame, dialogDocs)



// Auto select javascript
jsModeButton = document.querySelectorAll("div.tab")[1]
event_ = new Event('click');
jsModeButton.dispatchEvent(event_);

// Control panel rework
document.querySelector("button#runButton").innerHTML = '<img src="common/1x1.gif" class="run icon21">'
document.querySelector("#resetButton").innerHTML = '<img src="common/1x1.gif" class="stop icon21">'
docBtn = document.querySelector("button#docsButton")
runBtn = document.querySelector("button#runButton")
stopBtn = document.querySelector("button#resetButton")

controlPanel = document.createElement("div")
controlPanel.classList.add("controlPanel")
controlPanel.appendChild(docBtn)
controlPanel.appendChild(runBtn)
controlPanel.appendChild(stopBtn)
editorBar = document.querySelector("div#editorBar")
editorBar.parentNode.insertBefore(controlPanel, editorBar)

// Apply theme to ace code editor
document.querySelector("div#editor").classList.remove("ace-chrome")
document.querySelector("div#editor").classList.add(theme.toString())

/*Create Console*/
consoleFrame = document.createElement("div")
consoleBanner = document.createElement("div")
consoleText = document.createElement("textarea")
consoleBanner.innerText = ">_"
consoleFrame.classList.add("console")
consoleText.disabled = true
consoleFrame.appendChild(consoleBanner)
consoleFrame.appendChild(consoleText)
dialogDocs.parentNode.insertBefore(consoleFrame,dialogDocs)
consoleText = document.querySelector("div.console>textarea")

function setupConsoleLogCapture(console_=document.querySelector(".console>textarea")) {
    var oldLog = console.log;
    console.log = function () {
        var args = Array.prototype.slice.call(arguments);
	console_.value += `${args.join(' ')}\n`
        oldLog.apply(console, args);
    };
}
setupConsoleLogCapture()
console.log("Run console.js code for the console to work correctly")

setInterval(()=>{
    /*Health code*/
    healths = document.querySelectorAll(".asButton")
    var playerHealth = healths[0].title
    var rookHealth = healths[1].title
    var counterHealth = healths[2].title
    var sniperHealth = healths[3].title
    playerHealth = playerHealth.slice(8)
    rookHealth = rookHealth.slice(6)
    counterHealth = counterHealth.slice(9)
    sniperHealth = sniperHealth.slice(8)
    document.querySelector('div.player-health').style.width = playerHealth
    document.querySelector('div.rook-health').style.width = rookHealth
    document.querySelector('div.counter-health').style.width = counterHealth
    document.querySelector('div.sniper-health').style.width = sniperHealth
    if (playerHealth == "0%"){
	document.querySelector('div.player-health').classList.add("dead")
    }else{
	document.querySelector('div.player-health').classList.remove("dead")
    }
    if (rookHealth == "0%"){
	document.querySelector('div.rook-health').classList.add("dead")
    }else{
	document.querySelector('div.rook-health').classList.remove("dead")
    }
    if (counterHealth == "0%"){
	document.querySelector('div.counter-health').classList.add("dead")
    }else{
	document.querySelector('div.counter-health').classList.remove("dead")
    }
    if (sniperHealth == "0%"){
	document.querySelector('div.sniper-health').classList.add("dead")
    }else{
	document.querySelector('div.sniper-health').classList.remove("dead")
    }
},10)
