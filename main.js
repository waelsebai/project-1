var points = [
  ['bicyclettedog', 36.759876529569894,10.088899249999965,  1,'bicyclettedog.jpg'],
  ['dog', 36.504202771002504,10.407502765624965,2, 'dog.jpg'],
  ['idcard', 36.74227110151616,9.341828937499965, 3,'idcard.jpg'],
  ['cartebnc', 33.797132321152695,9.077460216832876,4,'cartebnc.jpg'],
  ['caught', 32.789230018223414,9.988914644474885, 5,'caught.jpg'],
  ['hasky', 34.968905073449925,9.543968355412385, 6,'hasky.jpg'],
  ['key', 34.73336723121958,8.57030502533426, 7,'key.jpg'],
  ['lostman', 36.70867622318705,9.603018443246691, 8,'lostman.jpg'],
  ['marcedes', 36.258123134384554,9.924298452753778, 9,'marcedes.jpg'],
  ['sos', 35.75646488460562,9.139777499306255, 10,'sos.jpg'],
  ['bijoux', 35.82313307515585,10.492142190487215, 11,'bijoux.jpg'],
  ['identité', 35.950253314146465,10.036372874674777, 12,'carteid.jpg'],
  ['bac', 36.1616664347298,10.387539396694091, 13,'bac.jpg'],
  ['doglost', 36.9240096001322,10.858251968762564, 14,'dog2.jpg'],

];

function setMarkers(map, locations) {
  var shape = {
    coord: [1, 1, 1, 20, 18, 20, 18 , 1],
    type: 'poly'
  };

  for (var i = 0; i < locations.length; i++) {
    var place = locations[i];
    var myLatLng = new google.maps.LatLng(place[1], place[2]);
      let imageNumber = 0;
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      shape: shape,
      title: place[0],
      zIndex: place[3],
      url: place[4]
    }); 
     var count=0
    google.maps.event.addListener(marker, 'click', function() {
             var x = document.getElementById("myImage");
           		 x.src = this.url;
           		 	 if (count%2===0) {
   			 x.style.display = "none";
   			count++
  			} else {
    			x.style.display = "block";
    			count++
    		}
     			$("#myImage").toggle("slow","linear");     
 		
    	
  // 

        
});
  }
}

function initialize() {
  var myOptions = {
    center: new google.maps.LatLng(33.892166,9.561555499999997),
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
  setMarkers(map, points);
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
$(document).ready(function(){
         $('.openbtn').click(function(){
        $('#sound_tag')[0].play();})
    })
$(document).ready(function(){
         $('.closebtn').click(function(){
        $('#sound_tag')[0].pause();})
    })







