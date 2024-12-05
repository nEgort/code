const футболRadio = document.getElementById("футбол");
const баскетболRadio = document.getElementById("баскетбол");
const волейболRadio = document.getElementById("волейбол");
const бесплатныйRadio = document.getElementById("бесплатный");
const платныйRadio = document.getElementById("платный");
const поискButton = document.getElementById("поиск");

let выбранныйСпорт = null;
let доступ = null;

футболRadio.addEventListener("click", () => {
  выбранныйСпорт = "футбол";
});

баскетболRadio.addEventListener("click", () => {
  выбранныйСпорт = "баскетбол";
});

волейболRadio.addEventListener("click", () => {
  выбранныйСпорт = "волейбол";
});

бесплатныйRadio.addEventListener("click", () => {
  доступ = "бесплатный";
});

платныйRadio.addEventListener("click", () => {
  доступ = "платный";
});

поискButton.addEventListener("click", () => {
  if (выбранныйСпорт === "футбол" && доступ === "бесплатный") {
    window.location.href = "freefootball.html";
  } else if (выбранныйСпорт === "футбол" && доступ === "платный") {
    window.location.href = "paidfootball.html";
  } else if (выбранныйСпорт === "баскетбол" && доступ === "бесплатный") {
    window.location.href = "freebasketball.html";
  } else if (выбранныйСпорт === "баскетбол" && доступ === "платный") {
    window.location.href = "paidbasketball.html";
  } else if (выбранныйСпорт === "волейбол" && доступ === "бесплатный") {
    window.location.href = "freevolleyball.html";
  } else if (выбранныйСпорт === "волейбол" && доступ === "платный") {
    window.location.href = "paidvolleyball.html";
  } else {
    alert("Сначала выберите спорт и тип доступа!");
  }
});

