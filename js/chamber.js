//menu buttom on small view
function toggleMenu() {
    document.getElementsByClassName("nav-list")[0].classList.toggle("responsive");
}



//display last updated
var weekday = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
var months = new Array(
    "January", "February","March", "April", "May", "June", "July", "August", "September","October", "November", "December"
    );
const year = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
var day = lastModified.getDay();
var day = weekday[day];
var month = lastModified.getMonth();
var month = months[month];

var lastModifiedFormatted = day + ', ' +  month + " " + lastModified.getDate() + " " + lastModified.getFullYear();

// Display copyright year and date last modified to footer of HTML document.
document.getElementById("dateLastModified").textContent = lastModifiedFormatted;


//weather API
const apiKey = "32da1ad47e5892254b0ea3b138b544bb";

const path = "https://api.openweathermap.org/data/2.5/onecall?lat=43.48&lon=-112.03&exclude=hourly,daily&units=imperial&appid=32da1ad47e5892254b0ea3b138b544bb";

fetch(path)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').textContent = Math.round(jsObject.current.temp);
    document.getElementById('desc').textContent = jsObject.current.weather[0].description;
    document.getElementById('humidity').textContent = Math.round(jsObject.current.humidity);
    

    });

//Business Directory JSON fetch
fetch("../js/directory.json")
    .then(function (response){
        return response.json();
    })

    .then(function (jsonObject){
        const directory = jsonObject['directory'];
        for (let i =0; i < directory.length; i++){
            let directoryInfo = document.createElement('div');
            let card = document.createElement('section');
            let name = document.createElement('h3');
            let image = document.createElement('img');
            let category = document.createElement('p');
            let yearFounded = document.createElement('p');
            let link = document.createElement('a');
///////////////////////////////////////////////////////////////////////
            name.textContent = directory[i].name;
            category.textContent = directory[i].category;
            yearFounded.textContent = `Year Founded: ${directory[i].yearFounded}`;
            link.textContent = "Click here to visit their site";
            image.setAttribute("src", directory[i].image);
            image.setAttribute("alt", "picture of business");
            card.setAttribute("class", "card");
            link.setAttribute("href", directory[i].link);
            link.setAttribute("style", "color: #dfebed;")
///////////////////////////////////////////////////////////////////////

            card.appendChild(directoryInfo);
            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(category);
            card.appendChild(yearFounded);
            card.appendChild(link);
///////////////////////////////////////////////////////////////////////
            document.querySelector("#cards").appendChild(card);
        }
    })
