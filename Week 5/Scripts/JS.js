let currentCityButton = document.querySelector('.city#a');
let cityBox = document.querySelector('.selectedc');
let cityDescription = document.querySelector('.inner');
let cityPics = document.querySelector('.vbox.images');
function getCity(selectedCity) {
    getWeather(selectedCity);
    if(selectedCity == "Cuernavaca"){
        var cityButton = document.querySelector('.city#a');
        cityBox.innerHTML = 'Cuernavaca';
        cityDescription.innerHTML = "Cuernavaca is a place where you will find tons of cultural significance, natural wonders, and a rich historical legacy. Referred to as the \"City of Eternal Spring,\" Cuernavaca has a very delightful and pleasant climate throughout the year, offering an open invitation to explore its many attractions. Some attractions include the Palacio de Cortes, a fortress-turned-museum that dates to the 16th century, showcasing impressive architecture. The Jardín Borda, once the private retreat of Emperor Maximilian I, showcases magnificent gardens that will show you the bygone era of opulence and splendor. The downtown area is full of vibrant ambience, where you can find beautiful streets adorned with colonial-style buildings. This place offers great hiking trails at the Tepozteco pyramids.";

        cityPics.innerHTML = "<img src='./Images/StreetsCuernavaca.jpg'>" +
                              "<img src='./Images/Tepozteco pyramids.jpg'>"+
                              "<img src='./Images/Palacio_de_Cortés_Cuernavaca.jpg'>"+
                              "<img src='./Images/Jardin_borda.jpg'>";

    }else if(selectedCity == "Mexico City"){
        var cityButton = document.querySelector('.city#b');
        cityBox.innerHTML = 'Mexico City';
        cityDescription.innerHTML = "Mexico City, the capital of Mexico, has a lot to offer tourists. It's a vibrant city with a rich history and diverse culture. Start your visit at the main square called the Zócalo, where you can see the impressive Metropolitan Cathedral and the Palacio Nacional with its famous murals. Don't miss the chance to explore the ancient ruins of Teotihuacan, just outside the city, where you can climb the pyramids and learn about the ancient civilization. Immerse yourself in the art world by visiting the Frida Kahlo Museum and checking out the contemporary art at the Museo Soumaya. And of course, don't forget to indulge in the delicious Mexican food, from street tacos to fine dining. Take a walk through the charming neighborhoods of Coyoacán and Roma, and enjoy the lively nightlife with its bars, live music, and clubs. Mexico City has something for everyone, with its mix of history, art, food, and exciting atmosphere."
        cityPics.innerHTML =  "<img src='./Images/MexicoCity.jfif'>"+
                                "<img src='./Images/MexicoCity.jpg'>"+
                                "<img src='./Images/TeotihuacanMexicoCity.jpg'>"+
                                "<img src='./Images/metropolitan-cathedral-zocalo-mexico-city.webp'>"
        
    }else if(selectedCity == "Guasave"){
        var cityButton = document.querySelector('.city#c');
        cityBox.innerHTML = 'Guasave';
        cityDescription.innerHTML = "Guasave, Sinaloa offers a wide range of attractions for travelers seeking a memorable and enriching experience. This city in northwest Mexico is known for its rich agricultural heritage and warm hospitality. The downtown area is filled with lively markets, colorful streets, and beautiful Mexican architecture, inviting visitors to immerse themselves in the local culture. Guasave is famous for its delicious seafood dishes, including ceviche, shrimp aguachile, and mariscos zarandeado. The surrounding countryside showcases beautiful landscapes of fertile fields, making it a great destination for agricultural tourism. Explore farms and orchards, learn about the region's farming practices, and enjoy activities like fruit picking. The nearby coast boasts stunning beaches where you can relax, swim, and partake in water sports. Guasave is a blend of cultural immersion, great cuisine, and natural beauty which is great for a memorable visit."
        cityPics.innerHTML = "<img src='./Images/Guasave Food.jpg'>"+
                                "<img src='./Images/GuasaveBeach.jpg'>"+
                                "<img src='./Images/GuasaveFarms.jpg'>"+
                                "<img src='./Images/GuasaveMap.png'>"

    }else if(selectedCity == "Cancun"){
        var cityButton = document.querySelector('.city#d');
        cityBox.innerHTML = 'Cancun';
        cityDescription.innerHTML = "Cancun, in Quintana Roo, has a lot to offer visitors. The beautiful beaches with their white sand and turquoise waters are perfect for relaxation and enjoying water activities like swimming, snorkeling, and diving. At night, there are plenty of restaurants, bars, and clubs to experience the lively nightlife. If you're interested in history and culture, don't miss the chance to visit the nearby Mayan ruins of Tulum and Chichen Itza. Cancun is also a gateway to the Mesoamerican Reef, a haven for snorkelers and divers. Another unique experience is exploring cenotes, which are enchanting freshwater sinkholes. With its stunning beaches, exciting nightlife, fascinating history, and natural wonders, Cancun has something for everyone to enjoy."
        cityPics.innerHTML = "<img src='./Images/Cancun.jpg'>"+
                                "<img src='./Images/cenotescancun.jpg'>"+
                                "<img src='./Images/Mesoamerican Reef.jpg'>"

    }else if(selectedCity == "Guadalajara"){
        var cityButton = document.querySelector('.city#e');
        cityBox.innerHTML = 'Guadalajara';
        cityDescription.innerHTML = "Guadalajara, located in the state of Jalisco, has so much to offer newcomers. This vibrant city welcomes you with open arms and promises a captivating experience. Get ready to immerse yourself in its rich culture and fascinating history. Take a stroll through the charming Centro Histórico and admire the breathtaking Guadalajara Cathedral and Hospicio Cabañas, both architectural marvels. Don't miss the chance to embrace the local spirit by enjoying a vibrant mariachi performance or visiting the Museum of Tequila and Mezcal to learn about Mexico's famous spirits. And of course, your taste buds will thank you for indulging in the delicious traditional cuisine, including the flavorful birria and tortas ahogadas. Art enthusiasts will be in awe at the Instituto Cultural Cabañas, where you can marvel at the incredible murals created by the renowned artist José Clemente Orozco. If you're in need of some outdoor adventures, head to the nearby Lake Chapala, a serene oasis perfect for boating, fishing, or simply unwinding by the water. With its warm hospitality, cultural treasures, and diverse attractions, Guadalajara is ready to welcome newcomers with a vibrant spirit and unforgettable experiences."
        cityPics.innerHTML = "<img src='./Images/Guadalajara-Jalisco landscape.jpg'>"+
                                "<img src='./Images/Guadalajara.jpg'>"+
                                "<img src='./Images/Instituto Cultural Cabañas guadalajara.jpg'>"

    }
    currentCityButton.classList.remove('selected')
    cityButton.classList.add('selected')
    currentCityButton = cityButton   
}

const apiKey = "201774febe5cb1d90661c0368dd5da01";

function getWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityName+'&appid='+apiKey+'&units=imperial').then(infoRecieved => infoRecieved.json()).then(json => {
        document.querySelector(".weather .temperature").innerHTML = 'Temp: ' + json.main.temp + '°F';
        document.querySelector(".weather .description").innerHTML = 'Description: ' + json.weather[0].description;
        document.querySelector(".weather .humidity").innerHTML = 'Humidity: ' + json.main.humidity + ' %';
        document.querySelector(".weather .wind").innerHTML = 'Wind: ' + json.wind.speed + ' mph';
        document.querySelector(".weather .pressure").innerHTML = 'Pressure: ' + json.main.pressure + ' psi';
    })
}
getWeather("Phoenix, Arizona") 