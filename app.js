const cities = [
    ["Riyadh", 24.7136, 46.6753],
    ["Jeddah", 21.4858, 39.2192],
    ["Mecca", 21.3891, 39.8262],
    ["Medina", 24.5247, 39.8382],
    ["Dammam", 26.3927, 50.1474],
    ["Khobar", 26.2975, 50.2044],
    ["Dhahran", 26.2947, 50.1516],
    ["Abha", 18.2340, 42.5053],
    ["Taif", 21.2703, 40.4167],
    ["Buraidah", 26.3260, 43.9750],
    ["Tabuk", 28.3835, 36.5860],
    ["Hail", 27.5208, 41.6916],
    ["Najran", 17.5274, 44.1300],
    ["Jubail", 27.0112, 49.5800],
    ["Yanbu", 24.0915, 38.0637],
    ["Al Hofuf", 25.3645, 49.5874],
    ["Khamis Mushait", 18.3060, 42.7960],
    ["Al-Qatif", 26.5334, 50.0075],
    ["Al Khafji", 28.4344, 49.9711],
    ["Al Bahah", 20.0123, 41.7686],
    ["Sakakah", 29.9717, 40.2075],
    ["Arar", 30.9753, 41.0341],
    ["Jizan", 16.8870, 42.5792],
    ["Rabigh", 22.7987, 39.0419],
    ["Al Baha", 20.0059, 41.6327],
    ["Al-Mubarraz", 25.4195, 49.6300],
    ["Al Wajh", 26.2323, 36.4656],
    ["Hafr Al-Batin", 28.4434, 46.6750]
];

function initMap() {

    const contentString =
    '<div id="content" style="width: 100px; z-index:3000;">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "6a7f4f4e7a7f5b47",
        center: { lat: 23.885942, lng: 45.079163 }, // Coordinates for Saudi Arabia
        zoom: 6, // Adjust the zoom level as needed
        mapTypeControl: true,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'terrain', 'satellite']
        },
        mapTypeId: "roadmap",
        fullscreenControl: false, // Disable full-screen control
        gestureHandling: "greedy" // Enable one-finger panning
    });

    cities.forEach((city) => {
        const marker = new google.maps.Marker({
            position: { lat: city[1], lng: city[2] },
            map,
            title: city[0],
            // icon: './house(1).png',
        });


    
        marker.addListener('click', function () {
            alert(city[0]) 
        });



    })


    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Uluru",
    });


    document.querySelector("#btn_satellite").addEventListener('click', function() {
        map.setMapTypeId('satellite')
    })


}



window.initMap = initMap;



