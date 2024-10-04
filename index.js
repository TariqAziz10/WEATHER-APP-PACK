const tempratureField = document.querySelector('.weather1');
const cityField = document.querySelector('.weather2 p');
const dateField = document.querySelector('.weather2 span');
const emojiField = document.querySelector('.weather3 img');
const weatherField = document.querySelector('.weather3 span');
const searchField = document.querySelector('.searchField');
const Form = document.querySelector('form');

let target = "delhi";

const fetchData = async (target) => {

    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=56ae9cadb0104981a2775825240310&q=${target}`

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        const {
            current: { 
                temp_c, 
                condition: { text, icon },
            },
            location: { name, localtime },
        } = data;

        const iconUrl = icon.startsWith("http") ? icon : `https:${icon}`;

        updateDom(temp_c, name, localtime, iconUrl, text);
    } catch (error) {
        alert("Location not found");
    }

};

function updateDom (temperature, city, time, emoji, text) {
    tempratureField.innerText = temperature;
    cityField.innerText = city;

    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = new Date(exactDate).getDate();
   

    dateField.innerText= `${exactTime} - ${getDayFullName(exactDay)} ${exactDate}`
    emojiField.src = emoji;
    weatherField.innerText = text;
}

fetchData(target);

function getDayFullName (num){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[num];
}

Form.addEventListener("submit", (e) => {
    e.preventDefault();

    target = searchField.value;
    
    fetchData(target);
});