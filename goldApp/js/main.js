// write your javascript in here

/*
David Magee
MiU 0612
Project 3

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
			submitHandler: function () {
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
			// reload page after confirming that the maintenance was saved
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





