// Supernova Strike Squad Images
var SSS_Images = [
'Images/Supernova_Strike_Squad/SNSS_SS_01.png',
'Images/Supernova_Strike_Squad/SNSS_SS_02.png',
'Images/Supernova_Strike_Squad/SNSS_SS_03.png',
'Images/Supernova_Strike_Squad/SNSS_SS_04.png',
'Images/Supernova_Strike_Squad/SNSS_SS_06.jpg',
'Images/Supernova_Strike_Squad/SNSS_SS_07.jpg'
];

// Dialogue Editor Images
var DOE_Images = [
'Images/Dialogue_Editor/DialogueEditor_SS_01.png',
'Images/Dialogue_Editor/DialogueEditor_SS_01.png'	
];

// Tanks Images
var TNT_Images = [	
	'Images/Tanks/Tanks_SS_02.png',
	'Images/Tanks/Tanks_SS_01.png',
	'Images/Tanks/Tanks_SS_03.png',
	'Images/Tanks/Tanks_SS_04.png'
];

// Landscaper Images
var LND_Images = [
	'Images/Landscaper/Landscaper_SS_01.png',
	'Images/Landscaper/Landscaper_SS_02.png',
	'Images/Landscaper/Landscaper_SS_03.png'
]

// Scraps Images
var SCR_Images = [
	'Images/Scraps/Scraps_SS_01.png',
	'Images/Scraps/Scraps_SS_02.png',
	'Images/Scraps/Scraps_SS_03.png',
	'Images/Scraps/Scraps_SS_04.png',
	'Images/Scraps/Scraps_SS_05.png'
]

var imageIndex = 0;
var imageArray;

function Initialize(slideshow) {

	imageArray = SSS_Images;

	thumbtimer = setInterval(function(){
		
		if(imageIndex + 1 > imageArray.length - 1){
			imageIndex = 0;	
		}
		else {
			imageIndex++;
		}
		
		const ss = slideshow;	
		ss.backgroundImage = "url('" + imageArray[imageIndex] + "')";
		
		document.getElementById('slideshow-Link').setAttribute('href', imageArray[imageIndex]);
		
	}, 500);
}

function updateImage(slideshow, listOfImages)
{
	imageArray = listOfImages
	
	imageIndex = 1;
	
	const ss =  slideshow;
	ss.backgroundImage = "url('" + imageArray[imageIndex] + "')";
	
	document.getElementById('slideshow-Link').setAttribute('href', imageArray[imageIndex]);
}

function preloadImages(img_temp) 
{
	SSS_Images.forEach(image => { img_temp.backgroundImage = "url('" + image + "')"; });
	DOE_Images.forEach(image => { img_temp.backgroundImage = "url('" + image + "')"; });
	TNT_Images.forEach(image => { img_temp.backgroundImage = "url('" + image + "')"; });
	LND_Images.forEach(image => { img_temp.backgroundImage = "url('" + image + "')"; });
	SCR_Images.forEach(image => { img_temp.backgroundImage = "url('" + image + "')"; });
}