// write your javascript in here

/*
David Magee
MiU 0612
Project 3

*/
/*
*/


var clear = function () {
	var ask = confirm("Clear all saved data?");
	if (localStorage === 0){
		alert("There is no data to clear.");
	}
	else if(ask) {
	localStorage.clear();
		alert("All profiles have been deleted.");
		location.reload();
	return false;
	}
};

//Save mate page

$('#addAMate').on('pageinit', function(){
	var mateData = $('#addMateForm');

	mateData.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			
			var data = mateData.serializeArray();
			saveData();
		}
	});
	var getGender = function (){
				return $('input:radio[name=gender]:checked').val();
		};
	
	var saveData = function (key) {
		
			// if there is no key --- this means this is a new item and needs a new key
			if (!key) {
				id = 				Math.floor(Math.random()*10000001);
			}
			// sets the id of existing key that is being edited so that it is saved over
			else{
				id = key;
			}			
			// gather form values and stores them
			var item				= {};
				item.planet				= ["Home Planet: ", $('homePlanet').val()];
				item.skill				= ["Skill: ", $('skills').val()];
				item.name				= ["Name: ", $('name').val()];
				item.born				= ["Born: ", $('born').val()];
				item.morality			= ["Morality: ", $('morality').val()];
				item.character			= ["Character: ", $('character').val()];
				item.bio				= ["Bio: ", $('bio').val()];
				item.gender				= ["Gender: ", getGender()];

			// save data into localStorage
			localStorage.setItem(id, JSON.stringify(item));
			alert("Profile Saved!");
			// reload page after confirming that the profile was saved
			location.reload();
	}




function toggleControls(n){
			switch(n){
				case "on":
					$('#addAMate').hide(); //NEED PROPER TAG
					$('#clearData').css('display', 'inline'); = "inline"; //NEED PROPER TAG
					$('#displayData').hide();
					$('#newData').style.display = "inline";
					break; 
				case "off":
					$('#addAMate').show();
					$('#clearData').css('display', 'inline'); 
					$('#displayData').css('display', 'inline');
					$('#newData').hide();
					$('#info').hide();
					break;
				default:
					return false;
			}
	}


	function getData(){
		toggleControls('on');
		if(localStorage.length === 0){
			alert("Nothing is stored in local storage. Default profiles were constructed.");
			constructDefaults();
		}
		var createDiv = $('div');
		$('#createDiv').attr("id", "info");
		var makeList = $('ul');
		$('createDiv').append('makeList');
		$('document.body').append('createDiv');
		$('info').show();
		for(i=0, j=localStorage.length; i<j; i++){
			var makeli = $('li');
			var linksLi = $('li');
			$('makeList').append('makeli');
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var object = JSON.parse(value); //This converts string data back to object
			var sublist = $('ul');
			$('makeli').append('sublist');
			getImage(object.planet[1], sublist); 
			for(var n in object){
				var listItems = $('li');
				$('sublist').append('listItems');
				var subText = object[n][0] +" "+object[n][1];
				listItems.innerHTML = subText;
				$('listItems').append('linksLi');
			}
			createItemLinks(localStorage.key(i), linksLi); //This creates the buttons for each item in the storage.
		}
	};

	function getImage(planName, sublist){
		var imageLi = $('li');
		$('sublist').append('imageLi');
		var imageTag = $('img');
		var setSource = $('#imageTag').attr("src", "img/" + planName + ".png");
		$('imageLi').append('imageTag');
	
	};
	
	
	
	
	
	
	function constructDefaults(){
		//Store the JSON data into local storage so we have default data
		for(var n in json){
			var id 				= Math.floor(Math.random()*10000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	
	}

});



/*
$('#addAMate').on('pageinit', function () {

	//Grabs my gender radio button value
	var getGender = function (){
				return $('input:radio[name=gender]:checked').val();
		};

    

	//Stores data to ls
	var saveData = function (key) {
		//jQuery Validation
		$('#addMateForm').validate({
			invalidHandler: function (form, validator) {},
			submitHandler: function (data) {
			console.log(data);
			$('#addMateForm').serializeArray();
			}
		});
		if ($('#addMateForm').valid()){ 	
			var id;
			// if there is no key --- this means this is a new item and needs a new key
			if (!key) {
				id = 				Math.floor(Math.random()*10000001);
			}
			// sets the id of existing key that is being edited so that it is saved over
			else{
				id = key;
			}			
			// gather form values and stores them
			var item				= {};
				item.planet				= ["Home Planet: ", $('homeplanets').val()];
				item.skill				= ["Skill: ", $('theskills').val()];
				item.name				= ["Name: ", $('name').val()];
				item.born				= ["Born: ", $('born').val()];
				item.morality			= ["Morality: ", $('morality').val()];
				item.character			= ["Character: ", $('character').val()];
				item.bio				= ["Bio: ", $('bio').val()];
				item.gender				= ["Gender: ", getGender()];

			// save data into localStorage
			localStorage.setItem(id, JSON.stringify(item));
			alert("Profile Saved!");
			// reload page after confirming that the maintenan$ was saved
			location.reload();
		}
	};
	// ----------------------------------------

	// Button event listeners --- display, clear, submit, and reset
	//Clear button event listener
	$('#reset').on('click',function () {
		clear();
	});
	// Submit button event listener
	$('#submit').on('click',function () {
		saveData();
	});
	// Reloads the form page so that everything is set back to default values
	$('#reset').on('click',function () {
		//reload page
		location.reload();
	});
});
*/	





