// write your javascript in here

/*
David Magee
MiU 0612
Project 3
*/
//test
$(document).ready(function(){
	var parseMateData = function(data){
		console.log(data);	
	};


	$('#addMateForm').on('pageinit', function(){

		var getGender = function (){
				return $('input:radio[name=gender]:checked').val();
		};
		
	
		function saveData(key){
			$('#addMateForm').validate({
			invalidHandler: function (form, validator) {},
			submitHandler: function () {
			$('#addMateForm').serializeArray();
			}
		});
			if($('#addMateForm').valid()){
		
		
		//If there is no key, its' a brand new item and we create a random key
				if(!key){
					var id 				= Math.floor(Math.random()*10000001);
				}else{
			//Sets the id to existing key to override data	
					id = key;
				}
		//this retrieves and gathers our form values and store in object.
		//Object properties contain array with the form label and input values.
				var item				= {};
				item.planet				= ["Home Planet: ", $('homeplanets').val()];
				item.skill				= ["Skill: ", $('theskills').val()];
				item.name				= ["Name: ", $('name').val()];
				item.born				= ["Born: ", $('born').val()];
				item.morality			= ["Morality: ", $('morality').val()];
				item.character			= ["Character: ", $('character').val()];
				item.bio				= ["Bio: ", $('bio').val()];
				item.gender				= ["Gender: ", getGender()];
		//Save data into local storage: use Stringify to convert our object to a string.
				localStorage.setItem(id, JSON.stringify(item));
				alert("Profile Saved!");
				
			};
			
		$('#submit').on('click',function () {
			saveData();
		});
	
	};
		

		

	});



});


