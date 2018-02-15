// var studentData = [
//   {
//       name:" Meralle",
//       city:" Aleppo",
//       cityLng:37.1472998 ,
//       cityLat:36.2116828,
//       info:" I come from Syria, Aleppo. I studied Music Art, and i love play the piano. ",
//       image:"assets/images/Meralle.jpg"
//   },
//   {
//       name:" Marta",
//       city:" Florence",
//       cityLng:11.25,
//       cityLat:43.7666667,
//       info:" I was born on 26 September  1989, in  Florence  Italy. I love the city, i miss the food, but i prefer being in Berlin. I am  always happy to go to my hometown, my parents live there, and actually  i appreciate my city more since i am living in Berlin .",
//       image:"assets/images/Marta.jpg"
//   },
//   {
//       name:" Sash",
//       city:" Jaffa",
//       cityLng: 34.758355,
//       cityLat:  32.049357,
//       info:"",
//       image:""
//   },
  
//   {
//       name:" Sareh",
//       city:" Swaida",
//       cityLng:36.571592,
//       cityLat:32.709106,
//       info:" I am form Swaida Syria, since three years I live in Berlin",
//       image:"assets/images/sareh.jpg"
//   },
//   {
//       name:" Yasser",
//       city:" Gorgan",
//       cityLng:54.439336300000036,
//       cityLat:36.8456427,
//       info:" I come from Syria",
//       image:"assets/imeges/yasser.jpg"
//   },
//   {
//     name:" Ahmad",
//     city:" Cairo",
//     cityLng:31.23571160000006,
//     cityLat:30.0444196,
//     info:" I come from Cairo",
//     image:"assets/imeges/yasser.jpg"
// },
  
  
//   ]
  
  



const form = document.getElementById('form');
const url = "http://localhost:3000/send_student";

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
console.log(formData)
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

    fetch("http://localhost:3000/get_student")
    .then(res=> res.json())
    .then(data=> userLoad(data) )
    .catch(err=> console.log(err));

     // looping through studentData object
    function userLoad(studentData){
        studentData.user.forEach((students) => {
          console.log(students)
            var studentName = students.name;
            var studentImg = students.image;
            var studentCity = students.city;
            var studentInfo = students.info;
            var cityLat = Number(students.lat);
            var cityLng = Number(students.lang);

            let markers = new google.maps.Marker({
               position:{lat: cityLat, lng: cityLng},
               map: map,
               icon:studentImgUrl
           });

           var studentImgUrl = {
               url:studentImg ,
               scaledSize: new google.maps.Size(20, 20),
            }; 

            let popups = `<div class="container"><h2>Name:${studentName} </h2>
            <h3>City: ${studentCity}</h3>
            <img class="picture" src="${studentImg}">
            <p class="text">Infos: ${studentInfo} </p></div>`;
            
            
            let infowindow = new google.maps.InfoWindow({
              content: popups
            });              
            
            markers.addListener('click', function() {
              infowindow.open(map, markers)
            });
      });
    }

 };
    
 
