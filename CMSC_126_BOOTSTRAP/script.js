
//Radio box widget from jQuery
$( function() {
	$( "#gender" ).checkboxradio();
});

//Radio box widget from jQuery		  
$( function() {
	$( "#birthday" ).datepicker();
} );

//autoComplete with the name of provinces from Mindanao		
$( function() {
	var provinces = [
		"Tawi-tawi",
		"Sulu",
		"Basilan",
		"Zamboanga del Norte",
		"Zamboanga del Sur",
		"Zamboanga Sibugay",
		"Misamis Occidental",
		"Lanao del Norte",
		"Lanao del Sur",
		"Maguindanao",
		"Sultan Kudarat",
		"South Cotabato",
		"Sarangani",
		"Davao Occidental",
		"Davao del Sur",
		"Davao del Norte",
		"Davao de Oro",
		"Davao Oriental",
		"Cotabato",
		"Bukidnon",
		"Misamis Oriental",
		"Camiguin",
		"Agusan del Sur",
		"Agusan del Norte",
		"Surigao de Sur",
		"Surigao del Norte",
		"Dinagat Islands"
	];
	$( "#province" ).autocomplete({
		source: provinces
		});
	});
	
	
//jQuery widget for interchangeable tabs
$( function() {
	$( "#tabs" ).tabs();
	defaultSkin:false;
});

//Widget for a dropdown menu
$(function() {
    $( "#acad_unit" ).selectmenu();
});	
		  
//Spinner widget
$( function() {
	var spinner = $( "#yearlevel" ).spinner();
});

//accordion widget
$( function() {
    $( "#acad-accordion" ).accordion();
 });

//Use JavaScript to create a downloadable text file based from user inputs	
function download(filename, firstname, middlename, lastname, gender, birthday, province, yearlevel) {
	var text = "[USER DATA]\n\nFirst Name: " + firstname + "\nMiddle Name: "+ middlename + "\nLast Name: " + lastname + "\nGender: " + gender + "\nBirthday: " + birthday + "\nProvince: " + province + "\nYear Level: " + yearlevel;
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}
		

			
