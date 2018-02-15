const form = document.getElementById('form');
const url = "http://localhost:3000/get_student";
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
              email: e.target.email.value,
              name: e.target.name.value,
              city: e.target.city.value,
              lang: e.target.lang.value,
              lat: e.target.lat.value,
              info: e.target.info.value,
              image: e.target.image.value
            };
            console.log(formData);
    const body = Object.keys(formData).map(key => {
          return (encodeURIComponent(key) + "=" + encodeURIComponent(formData[key]))}).join("&");

    fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: body
      }).then(res=> res.json())
    .then(data=> console.log(data))
    .catch(err=> console.log(err));
})

//var map;

// init

function initMap() {
    
    let myLocation  =  {lat: 52.4893692, lng: 13.3886518};
    map = new google.maps.Map(document.getElementById('map'), {
      'center': myLocation, 
      'zoom': 3,
      
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
        var studentInfo = studentData.info;
        var cityLat = studentData.citylat;
        var cityLng = studentData.citylng;
     })

    /* var studentImgUrl = {
        url: studentImg,
        scaledSize: new google.maps.Size(20, 20),
     } */
      
 
/* let markers = new google.maps.Marker({
    position:{lat: cityLat, lng: cityLng},
    map: map,
    icon: ''
})
 */




let popups =            `<div class="container"><h2>City: ${studentData.city} </h2>
                        <h3> ${studentData.Name}</h3>
                        <img height="50" src="${studentData.image}">
                        <p>infos: ${studentData.info} </p></div>`
               
               
let infowindow = new google.maps.InfoWindow({
             content: popups
 });              
                
// markers eventListener






























    };
    
 
