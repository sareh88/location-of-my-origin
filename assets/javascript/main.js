const form = document.getElementById('form');
form.addEventListener('click', (e)=>{
    e.preventDefault();
    let formData = new FormData(e.target);
   /*  fetch(url, 
    {headers:{
        method: 'post',
        body: formData
    }
    }).then(res=> res.json())
    .then(data=> console.log(data))
    fetch(err=> cpnsole.log(err)); */
})

var map;

function initMap() {
    
    let myLocation  = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 52.4893692, lng: 13.3886518},
      zoom: 10,
      
      styles: [  // Styles a map in night mode.
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
    
     // looping through studentData object
    studentData.forEach((students) => {
        var studentName = studentData.name;
        var studentImg = studentData.image;
        var studentCity = studentData.city;
        var cityLat = studentData.citylat[1];
        var cityLng = studentData.citylng[2];
     })

    /* var studentData.image = {
        url:country.flag,
        scaledSize: new google.maps.Size(20, 20),
     }
      
 */
let markers = new google.maps.Marker({
    position:{lat: cityLat, lng: cityLng},
    map: map,
    icon: ''
})





let popups =            `<div class="container"><h2>City: ${studentData.city} </h2>`
                        `<h3> ${studentData.Name}</h3>`
                        `<img height="50" src="${studentData.image}">`
                        `<p>infos: ${studentData.info} </p></div>`
               
               
let infowindow = new google.maps.InfoWindow({
             content: popups
 });              
                
// markers eventListener






























    };
    
  
