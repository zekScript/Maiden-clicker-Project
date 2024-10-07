const cookieCounterMain = document.getElementById("cookieCounterMain");
const fatRatPrice = document.getElementById("fatRatPrice");
const specialPrice = document.getElementById("specialPrice");
const darkSoulsPrice = document.getElementById("darkSoulsPrice");
const winterPrice = document.getElementById("winterPrice");
const summerPrice = document.getElementById("summerPrice");
const shortcutPrice = document.getElementById("shortcutPrice");
const uraharaPrice = document.getElementById("uraharaPrice");
const leonPrice = document.getElementById("leonPrice");
const bloodbornePrice = document.getElementById("bloodbornePrice");
let cookiesMade = localStorage.getItem("cookiesMade");
cookiesMade = Number(cookiesMade);
window.addEventListener("load", () => {
    cookieCounterMain.innerText = `maidens: ${cookiesMade}`
    alert("Upgrades are not going to work because maiden clicker is in beta! :)")
})



