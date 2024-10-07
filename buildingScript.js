// Similar for other functions
const cursorPrice = document.getElementById("cursorPrice");
const grandmaPrice = document.getElementById("grandmaPrice");
const farmPrice = document.getElementById("farmPrice");
const minePrice = document.getElementById("minePrice");
const factoryPrice = document.getElementById("factoryPrice");
const bankPrice = document.getElementById("bankPrice");
const templePrice = document.getElementById("templePrice");
const wizardTowerPrice = document.getElementById("wizardTowerPrice");
const shipmentPrice = document.getElementById("shipmentPrice");
const alchemyLabPrice = document.getElementById("alchemyLabPrice");
const portalPrice = document.getElementById("portalPrice");
const timeMachinePrice = document.getElementById("timeMachinePrice");
const antiMatterCondensorPrice = document.getElementById("antiMatterCondensorPrice");
const prismPrice = document.getElementById("prismPrice");
const chanceMakerPrice = document.getElementById("chanceMakerPrice");
const fractialEnginePrice = document.getElementById("fractialEnginePrice");
const javascriptPrice = document.getElementById("javascriptPrice");
const idleversePrice = document.getElementById("idleversePrice");
const cortexBakerPrice = document.getElementById("cortexBakerPrice");
const youPrice = document.getElementById("youPrice");
// Menu Functions
const grandmaMenu = document.getElementById("grandmaMenu");
const farmMenu = document.getElementById("farmMenu");
const mineMenu = document.getElementById("mineMenu");
const factoryMenu = document.getElementById("factoryMenu");
const bankMenu = document.getElementById("bankMenu");
const templeMenu = document.getElementById("templeMenu");
const wizardTowerMenu = document.getElementById("wizardTowerMenu");
const shipmentMenu = document.getElementById("shipmentMenu");
const alchemyLabMenu = document.getElementById("alchemyLabMenu");
const portalMenu = document.getElementById("portalMenu");
const timeMachineMenu = document.getElementById("timeMachineMenu");
const antimatterCondenserMenu = document.getElementById("antimatterCondenserMenu");
const prismMenu = document.getElementById("prismMenu");
const chanceMakerMenu = document.getElementById("chanceMakerMenu");
const fractalEngineMenu = document.getElementById("fractialEngineMenu");
const javascriptMenu = document.getElementById("javascriptMenu");
const idleverseMenu = document.getElementById("idleVerseMenu");
const cortexBakerMenu = document.getElementById("cortexBakerMenu");
const youMenu = document.getElementById("youMenu");
// My buttons bellow / Prices upper way


// Intotal constants
const inTotal = document.getElementById("inTotal");








const times1Btn = document.getElementById("times1Btn");
const times10Btn = document.getElementById("times10Btn");
const times100Btn = document.getElementById("times100Btn");
const cookieCounter = document.getElementById("cookieCounter");
const buyBuildings = document.getElementById("buyBuildings");
const sellBuilldings = document.getElementById("sellBuilldings");
const mainCookieClicker = document.getElementById("mainCookieClicker");
const randomNewsGenerator = document.getElementById("randomNewsGenerator");
const closeOutOfWindow = document.getElementById("closeOutOfWindow");
const introOnStart = document.getElementById("introOnStart");
// Button options
const infoReveal = document.getElementById("infoReveal");
const infoBtn = document.getElementById("infoBtn");
const cursorBuyMenu = document.getElementById("cursorBuyMenu");
const buildingStatsContainer = document.querySelector(".building-stats-container");
// LET DECLARATIONS
let bakeryName = document.getElementById("bakeryName");
let cookiesMade = parseInt(localStorage.getItem('cookiesMade')) || 0; // IT SHOULD BE ZERO BY DEFAULT BUT FOR TEST I CAN MODIFY IT!
let changeName;
let price = parseInt(localStorage.getItem('cursorPrice')) || 0;
let times1 = 1;
let times10 = 10;
let times100 = 100;
let countStats = 0;
let buildingMadeCookies = 0;
// booleans
isCursorOpen = false;
isGrandmaOpen = false;
isFarmOpen = false;
isMineOpen = false;
isFactoryOpen = false;
isBankOpen = false;
isTempleOpen = false;
isWizardTowerOpen = false;
isShipmentOpen = false;
isAlchemyLabOpen = false;
isPortalOpen = false;
isTimeMachineOpen = false;
isAntimatterCondenserOpen = false;
isPrismOpen = false;
isChanceMakerOpen = false;
isFractialEngineOpen = false;
isJavascriptConsoleOpen = false;
isIdleVerseOpen = false;
isCortexBakerOpen = false;
isYouOpen = false;
hasBought = false;



const buildings = {
    cursor: {
        name: "Cursor",
        baseCps: 0.1,
        count: parseInt(localStorage.getItem('cursorCount')) || 0,
        cost: 15,
    },
    grandma: {
        name: "Grandma",
        baseCps: 1,
        count: 0,
        cost: 100
    },
    farm: {
        name: "Farm",
        baseCps: 8,
        count: 0,
        cost: 1100
    },
    mine: {
        name: "Mine",
        baseCps: 47,
        count: 0,
        cost: 12000
    },
    factory: {
        name: "Factory",
        baseCps: 260,
        count: 0,
        cost: 130000
    },
    bank: {
        name: "Bank",
        baseCps: 1400,
        count: 0,
        cost: 1400000
    },
    temple: {
        name: "Temple",
        baseCps: 7800,
        count: 0,
        cost: 20000000
    },
    wizardTower: {
        name: "Wizard Tower",
        baseCps: 44000,
        count: 0,
        cost: 330000000
    },
    shipment: {
        name: "Shipment",
        baseCps: 260000,
        count: 0,
        cost: 5100000000
    },
    alchemyLab: {
        name: "Alchemy Lab",
        baseCps: 1600000,
        count: 0,
        cost: 75000000000
    },
    portal: {
        name: "Portal",
        baseCps: 10000000,
        count: 0,
        cost: 1000000000000
    },
    timeMachine: {
        name: "Time Machine",
        baseCps: 65000000,
        count: 0,
        cost: 14000000000000
    },
    antimatterCondenser: {
        name: "Antimatter Condenser",
        baseCps: 430000000,
        count: 0,
        cost: 170000000000000
    },
    prism: {
        name: "Prism",
        baseCps: 2900000000,
        count: 0,
        cost: 2100000000000000
    },
    chancemaker: {
        name: "Chancemaker",
        baseCps: 21000000000,
        count: 0,
        cost: 26000000000000000
    },
    fractalEngine: {
        name: "Fractal Engine",
        baseCps: 150000000000,
        count: 0,
        cost: 310000000000000000
    },
    javascriptConsole: {
        name: "JavaScript Console",
        baseCps: 3300000000000,
        count: 0,
        cost: 7100000000000000000
    },
    idleverse: {
        name: "Idleverse",
        baseCps: 8300000000000,
        count: 0,
        cost: 120000000000000000000
    },
    cortexBaker: {
        name: "Cortex Baker",
        baseCps: 64000000000000,
        count: 0,
        cost: 1300000000000000000000
    },
    you: {
        name: "You",
        baseCps: 510000000000000,
        count: 0,
        cost: 14000000000000000000000
    }
};
// Reuse this code
// Change the id.style.display = none FINISHED
// Everything is done just need to make with classlist when pressed one building button and then everything else display none;

function openCursorBuyMenu() {
    if (!isCursorOpen){
        buildingStatsContainer.style.display = "flex";
        isCursorOpen = true
        introOnStart.style.display = "none";
    }
    else{
        buildingStatsContainer.style.display = "none";
        isCursorOpen = false;
        introOnStart.style.display = "block"
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openGrandmaBuyMenu() {
    if(!isGrandmaOpen ){
    grandmaMenu.style.display = "flex";
    isGrandmaOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        grandmaMenu.style.display = "none";
        isGrandmaOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openFarmBuyMenu() {
    if(!isFarmOpen){
    farmMenu.style.display = "flex";
    isFarmOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        farmMenu.style.display = "none";
        isFarmOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}
function openMineBuyMenu() {
    if(!isMineOpen ){
    mineMenu.style.display = "flex";
    isMineOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        mineMenu.style.display = "none";
        isMineOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openFactoryBuyMenu() {
    if(!isFactoryOpen ){
    factoryMenu.style.display = "flex";
    isFactoryOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        factoryMenu.style.display = "none";
        isFactoryOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openBankBuyMenu() {
    if(!isBankOpen ){
    bankMenu.style.display = "flex";
    isBankOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        bankMenu.style.display = "none";
        isBankOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openTempleBuyMenu() {
    if(!isTempleOpen ){
    templeMenu.style.display = "flex";
    isTempleOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        templeMenu.style.display = "none";
        isTempleOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openWizardTowerBuyMenu() {
    if(!isWizardTowerOpen ){
    wizardTowerMenu.style.display = "flex";
    isWizardTowerOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        wizardTowerMenu.style.display = "none";
        isWizardTowerOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openShipmentBuyMenu() {
    if(!isShipmentOpen ){
    shipmentMenu.style.display = "flex";
    isShipmentOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        shipmentMenu.style.display = "none";
        isShipmentOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openAlchemyLabBuyMenu() {
    if(!isAlchemyLabOpen ){
    alchemyLabMenu.style.display = "flex";
    isAlchemyLabOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        alchemyLabMenu.style.display = "none";
        isAlchemyLabOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openPortalBuyMenu() {
    if(!isPortalOpen ){
    portalMenu.style.display = "flex";
    isPortalOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        portalMenu.style.display = "none";
        isPortalOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openTimeMachineBuyMenu() {
    if(!isTimeMachineOpen ){
    timeMachineMenu.style.display = "flex";
    isTimeMachineOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        timeMachineMenu.style.display = "none";
        isTimeMachineOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openantimatterCondenserBuyMenu() {
    if(!isAntimatterCondenserOpen ){
    antimatterCondenserMenu.style.display = "flex";
    isAntimatterCondenserOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        antimatterCondenserMenu.style.display = "none";
        isAntimatterCondenserOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openPrismBuyMenu() {
    if(!isPrismOpen ){
    prismMenu.style.display = "flex";
    isPrismOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        prismMenu.style.display = "none";
        isPrismOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openChanceMakerBuyMenu() {
    if(!isChanceMakerOpen ){
    chanceMakerMenu.style.display = "flex";
    isChanceMakerOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        chanceMakerMenu.style.display = "none";
        isChanceMakerOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openFractialEngineBuyMenu() {
    if(!isFractialEngineOpen ){
    fractalEngineMenu.style.display = "flex";
    isFractialEngineOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        fractalEngineMenu.style.display = "none";
        isFractialEngineOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openjavascriptConsoleBuyMenu() {
    if(!isJavascriptConsoleOpen ){
    javascriptMenu.style.display = "flex";
    isJavascriptConsoleOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        javascriptMenu.style.display = "none";
        isJavascriptConsoleOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openIdleVerseBuyMenu() {
    if(!isIdleVerseOpen ){
    idleverseMenu.style.display = "flex";
    isIdleVerseOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        idleverseMenu.style.display = "none";
        isIdleVerseOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function opencortexBakerBuyMenu() {
    if(!isCortexBakerOpen ){
    cortexBakerMenu.style.display = "flex";
    isCortexBakerOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        cortexBakerMenu.style.display = "none";
        isCortexBakerOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}

function openYouBuyMenu() {
    if(!isYouOpen ){
    youMenu.style.display = "flex";
    isYouOpen = true;
    introOnStart.style.display = "none";
    }
    else{
        youMenu.style.display = "none";
        isYouOpen = false;
        introOnStart.style.display = "block";
    }
    const audio = new Audio('./clickSoundeffect.wav');
    audio.play();
}


// formula price = base Cost * 1.15 ** M - F (m = buildings owned) (f = type of buildings got for free)
// DONT DELETE THIS CODE AT ALL COST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// there is a bug

window.addEventListener("load", () => {
    cookiesMade = localStorage.getItem("cookiesMade");
    cursorCount = localStorage.getItem("cursorCount");
    cursorCount = Number(cursorCount);
    cookiesMade = Number(cookiesMade); 
    inTotal.textContent = cursorCount;
    cookieCounterMain.innerHTML = `maidens: ${cookiesMade}`
})
function buyCursor(){
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    const price = Math.ceil(buildings.cursor.cost * Math.pow(1.15, buildings.cursor.count));

    if(cookiesMade >= price){
        cookiesMade -= price;
        buildings.cursor.count++;
        const newPrice = Math.ceil(buildings.cursor.cost * Math.pow(1.15, buildings.cursor.count));
        let inTotal = 0;
        inTotal.textContent = buildings.cursor.count;
        cursorPrice.textContent = `${newPrice} maidens`;


        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('cursorPrice', newPrice.toString());
        localStorage.setItem('cursorCount', buildings.cursor.count.toString());

            
        function updateUI(cookiesMade, count) {
        cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
        maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
        maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
        maidensPerClick.textContent = `Maidens clicked: ${count}`;
        cookieCounterMain.textContent = `${cookiesMade} maidens`;
        maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
        cookieCounter.textContent = `${cookiesMade} Maidens`;
        }

        function baseCps(){
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.cursor.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }
        
        setInterval(baseCps, 1000);

    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    updateUI(cookiesMade);
});




function buyGrandma() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = buildings.grandma.cost * Math.pow(1.15, buildings.grandma.count);
    price = Math.ceil(price);

    if (cookiesMade >= price ) {
        cookiesMade -= price;
        buildings.grandma.count++;
        const newPrice = Math.ceil(buildings.grandma.cost * Math.pow(1.15, buildings.grandma.count));

        grandmaPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.grandma.count;

        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('grandmaPrice', newPrice.toString());
        localStorage.setItem('grandmaCount', buildings.grandma.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.grandma.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        clearInterval(window.grandmaInterval);
        window.grandmaInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}

function updateUI(cookiesMade) {
    cookieCounter.textContent = `${cookiesMade} cookies`;
    cookieCounterMain.innerText = `Cookies: ${cookiesMade}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    updateUI(cookiesMade);

    setInterval(() => {
        const cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
        updateUI(cookiesMade);
    }, 1000);
});



function buyFarm() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.farm.cost * Math.pow(1.15, buildings.farm.count));

    if (cookiesMade >= price ) {
        // Update cookies and farm count
        cookiesMade -= price;
        buildings.farm.count++;
        const newPrice = Math.ceil(buildings.farm.cost * Math.pow(1.15, buildings.farm.count));

        // Update the UI with new price and count
        farmPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.farm.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('farmPrice', newPrice.toString());
        localStorage.setItem('farmCount', buildings.farm.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.farm.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.farmInterval) {
            clearInterval(window.farmInterval);
        }
        window.farmInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}

function buyMine() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.mine.cost * Math.pow(1.15, buildings.mine.count));

    if (cookiesMade >= price) {
        // Update cookies and mine count
        cookiesMade -= price;
        buildings.mine.count++;
        const newPrice = Math.ceil(buildings.mine.cost * Math.pow(1.15, buildings.mine.count));

        // Update the UI with new price and count
        minePrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.mine.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('minePrice', newPrice.toString());
        localStorage.setItem('mineCount', buildings.mine.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.mine.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.mineInterval) {
            clearInterval(window.mineInterval);
        }
        window.mineInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}
function buyFactory() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.factory.cost * Math.pow(1.15, buildings.factory.count));

    if (cookiesMade >= price) {
        // Update cookies and factory count
        cookiesMade -= price;
        buildings.factory.count++;
        const newPrice = Math.ceil(buildings.factory.cost * Math.pow(1.15, buildings.factory.count));

        // Update the UI with new price and count
        factoryPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.factory.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('factoryPrice', newPrice.toString());
        localStorage.setItem('factoryCount', buildings.factory.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.factory.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.factoryInterval) {
            clearInterval(window.factoryInterval);
        }
        window.factoryInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}

function buyBank() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.bank.cost * Math.pow(1.15, buildings.bank.count));

    if (cookiesMade >= price) {
        // Update cookies and bank count
        cookiesMade -= price;
        buildings.bank.count++;
        const newPrice = Math.ceil(buildings.bank.cost * Math.pow(1.15, buildings.bank.count));

        // Update the UI with new price and count
        bankPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.bank.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('bankPrice', newPrice.toString());
        localStorage.setItem('bankCount', buildings.bank.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.bank.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.bankInterval) {
            clearInterval(window.bankInterval);
        }
        window.bankInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}
function buyTemple() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.temple.cost * Math.pow(1.15, buildings.temple.count));

    if (cookiesMade >= price) {
        // Update cookies and temple count
        cookiesMade -= price;
        buildings.temple.count++;
        const newPrice = Math.ceil(buildings.temple.cost * Math.pow(1.15, buildings.temple.count));

        // Update the UI with new price and count
        templePrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.temple.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('templePrice', newPrice.toString());
        localStorage.setItem('templeCount', buildings.temple.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.temple.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.templeInterval) {
            clearInterval(window.templeInterval);
        }
        window.templeInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}
function buyWizard() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.wizardTower.cost * Math.pow(1.15, buildings.wizardTower.count));

    if (cookiesMade >= price) {
        // Update cookies and wizard count
        cookiesMade -= price;
        buildings.wizardTower.count++;
        const newPrice = Math.ceil(buildings.wizardTower.cost * Math.pow(1.15, buildings.wizardTower.count));

        // Update the UI with new price and count
        wizardTowerPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.wizardTower.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('wizardPrice', newPrice.toString());
        localStorage.setItem('wizardCount', buildings.wizardTower.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.wizardTower.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.wizardInterval) {
            clearInterval(window.wizardInterval);
        }
        window.wizardInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}

function shipment() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.shipment.cost * Math.pow(1.15, buildings.shipment.count));

    if (cookiesMade >= price) {
        // Update cookies and shipment count
        cookiesMade -= price;
        buildings.shipment.count++;
        const newPrice = Math.ceil(buildings.shipment.cost * Math.pow(1.15, buildings.shipment.count));

        // Update the UI with new price and count
        shipmentPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.shipment.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('shipmentPrice', newPrice.toString());
        localStorage.setItem('shipmentCount', buildings.shipment.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.shipment.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.shipmentInterval) {
            clearInterval(window.shipmentInterval);
        }
        window.shipmentInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}
function buyAlchemyLab() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.alchemyLab.cost * Math.pow(1.15, buildings.alchemyLab.count));

    if (cookiesMade >= price) {
        // Update cookies and Alchemy Lab count
        cookiesMade -= price;
        buildings.alchemyLab.count++;
        const newPrice = Math.ceil(buildings.alchemyLab.cost * Math.pow(1.15, buildings.alchemyLab.count));

        // Update the UI with new price and count
        alchemyLabPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.alchemyLab.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('alchemyLabPrice', newPrice.toString());
        localStorage.setItem('alchemyLabCount', buildings.alchemyLab.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.alchemyLab.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.alchemyLabInterval) {
            clearInterval(window.alchemyLabInterval);
        }
        window.alchemyLabInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}

function buyPortal() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.portal.cost * Math.pow(1.15, buildings.portal.count));

    if (cookiesMade >= price) {
        // Update cookies and Portal count
        cookiesMade -= price;
        buildings.portal.count++;
        const newPrice = Math.ceil(buildings.portal.cost * Math.pow(1.15, buildings.portal.count));

        // Update the UI with new price and count
        portalPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.portal.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('portalPrice', newPrice.toString());
        localStorage.setItem('portalCount', buildings.portal.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.portal.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.portalInterval) {
            clearInterval(window.portalInterval);
        }
        window.portalInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}
function buyTimeMachine() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.timeMachine.cost * Math.pow(1.15, buildings.timeMachine.count));

    if (cookiesMade >= price) {
        // Update cookies and Time Machine count
        cookiesMade -= price;
        buildings.timeMachine.count++;
        const newPrice = Math.ceil(buildings.timeMachine.cost * Math.pow(1.15, buildings.timeMachine.count));

        // Update the UI with new price and count
        timeMachinePrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.timeMachine.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('timeMachinePrice', newPrice.toString());
        localStorage.setItem('timeMachineCount', buildings.timeMachine.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.timeMachine.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.timeMachineInterval) {
            clearInterval(window.timeMachineInterval);
        }
        window.timeMachineInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}

function buyAntimatterCondenser() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.antimatterCondenser.cost * Math.pow(1.15, buildings.antimatterCondenser.count));

    if (cookiesMade >= price) {
        // Update cookies and Antimatter Condenser count
        cookiesMade -= price;
        buildings.antimatterCondenser.count++;
        const newPrice = Math.ceil(buildings.antimatterCondenser.cost * Math.pow(1.15, buildings.antimatterCondenser.count));

        // Update the UI with new price and count
        antimatterCondenserPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.antimatterCondenser.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('antimatterCondenserPrice', newPrice.toString());
        localStorage.setItem('antimatterCondenserCount', buildings.antimatterCondenser.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.antimatterCondenser.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.antimatterCondenserInterval) {
            clearInterval(window.antimatterCondenserInterval);
        }
        window.antimatterCondenserInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}
function buyPrism() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.prism.cost * Math.pow(1.15, buildings.prism.count));

    if (cookiesMade >= price) {
        // Update cookies and Prism count
        cookiesMade -= price;
        buildings.prism.count++;
        const newPrice = Math.ceil(buildings.prism.cost * Math.pow(1.15, buildings.prism.count));

        // Update the UI with new price and count
        prismPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.prism.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('prismPrice', newPrice.toString());
        localStorage.setItem('prismCount', buildings.prism.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.prism.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.prismInterval) {
            clearInterval(window.prismInterval);
        }
        window.prismInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}
function buyChancemaker() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.chancemaker.cost * Math.pow(1.15, buildings.chancemaker.count));

    if (cookiesMade >= price) {
        // Update cookies and Chancemaker count
        cookiesMade -= price;
        buildings.chancemaker.count++;
        const newPrice = Math.ceil(buildings.chancemaker.cost * Math.pow(1.15, buildings.chancemaker.count));

        // Update the UI with new price and count
        chancemakerPrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.chancemaker.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('chancemakerPrice', newPrice.toString());
        localStorage.setItem('chancemakerCount', buildings.chancemaker.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.chancemaker.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.chancemakerInterval) {
            clearInterval(window.chancemakerInterval);
        }
        window.chancemakerInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}
function buyFractalEngine() {
    let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
    let price = Math.ceil(buildings.fractalEngine.cost * Math.pow(1.15, buildings.fractalEngine.count));

    if (cookiesMade >= price) {
        // Update cookies and Fractal Engine count
        cookiesMade -= price;
        buildings.fractalEngine.count++;
        const newPrice = Math.ceil(buildings.fractalEngine.cost * Math.pow(1.15, buildings.fractalEngine.count));

        // Update the UI with new price and count
        fractalEnginePrice.textContent = `${newPrice} cookies`;
        inTotal.textContent = buildings.fractalEngine.count;

        // Save updated values to localStorage
        localStorage.setItem('cookiesMade', cookiesMade.toString());
        localStorage.setItem('fractalEnginePrice', newPrice.toString());
        localStorage.setItem('fractalEngineCount', buildings.fractalEngine.count.toString());
        function updateUI(cookiesMade, count) {
            cookieCounterMain.innerText = `maidens: ${cookiesMade}`;
            maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
            maidensMadeAllTime.textContent = `Maidens made (All time): ${cookiesMade}`;
            maidensPerClick.textContent = `Maidens clicked: ${count}`;
            cookieCounterMain.textContent = `${cookiesMade} maidens`;
            maidensHiredThisAscension.textContent = `Maidens made (this ascension): ${cookiesMade}`;
            cookieCounter.textContent = `${cookiesMade} Maidens`;
            }
        // Base CPS increment function
        function baseCps() {
            let cookiesMade = Number(localStorage.getItem('cookiesMade')) || 0;
            cookiesMade += buildings.fractalEngine.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            localStorage.setItem('cookiesMade', cookiesMade.toString());
            updateUI(cookiesMade);
        }

        // Ensure only one interval is running for baseCps
        if (window.fractalEngineInterval) {
            clearInterval(window.fractalEngineInterval);
        }
        window.fractalEngineInterval = setInterval(baseCps, 1000);
    } else {
        alert(`You do not have enough cookies right now! You have ${cookiesMade} cookies currently.`);
    }
}
