// write your javascript in here

/*
David Magee
MiU 0612
Project 2
*/
//test
$('#home').on('pageinit', function(){

	//Load XML data
	$('#loadxml').on('click', function(){
		$('#xmldiv').empty();
		$('#profiles').empty();
		$('<h3>').html('XML Data Loaded').appendTo('#xmldiv');
			$.ajax({
			url: "xhr/xmldata.xml",
			type: "GET",
			dataType: "xml",
			success: function(xml) {
				$(xml).find('profile').each(function(){
					var id = $(this).attr('id');
					var name = $(this).find('name').text();
					var bio = $(this).find('bio').text();
					$('<div class="profViews" id="profile_'+id+'"></div>')
						.html('<div>'+name + bio + '</div>')
						.appendTo('#xmldiv');
				});
			}
		});
		return false;
	});

	
	//Load JSON Data
	$('#jsondata').on('click', function(){
			$('#xmldiv').empty();
			$('#profiles').empty();
			$('<h3>').html('JSON Data Loaded').appendTo('#profiles');
			$.ajax({
				url: 'js/json.json',
				type: 'GET',
				dataType: 'json',
				success: function(answer){
					for (var i=0, j=answer.item.length; i<j; i++){
						var jdata = answer.item[i];
						$(''+
							'<li>'+ 
								jdata.planet +'<br />'+
								jdata.name +'<br /><br />'+
							'</li>'
						).appendTo('#profiles');
						console.log(answer);
					}
				}
			});
			return false;
	});
	
	
	
	//Load CSV data without custom parser
	$('#loadcsv').on('click', function(){
		$('#xmldiv').empty();
		$('<p>').html('CSV Data Loaded').appendTo('#xmldiv');
		$.ajax({
			url: 'xhr/csvdata.csv',
			type: 'GET',
			dataType: 'text',
			success: function(answer) {
			// splits data at new line
				var line = answer.split('\n');
				for (var i = 1, j = line.length; i <j; i++) {
					var obj = line[i];
					// splits each of the objects after the comma
					var item = obj.split(',');
					var itemList = $(
						'<li>' +
						'Name:' + item[0] + 
						"Planet: " + item[1] + 
						"Bio: " + item[2] +
						'</li>'
					).appendTo('#xmldiv');
				}	
			}
		});
		return false;
	});

});
	//This is the getelementbyid function.  use the $ symbol to run the function
$('#addAMate').on('pageinit', function(){
	function saveStuff(){
		var mateData = $('#addMateForm');

		mateData.validate({
			invalidHandler: function(form, validator){},
			submitHandler: function(){
		
				var data = mateData.serializeArray();
				saveData();
			}
		});
	};

	// find value of the gender button
	var getGender = function (){
				return $('input:radio[name=gender]:checked').val();
		};
	
	function saveData(key){
		alert("Profile Saved!");
		//If there is no key, its' a brand new item and we create a random key
		if(!key){
			var id 				= Math.floor(Math.random()*10000001);
		}else{
			//Sets the id to existing key to override data	
			id = key;
		}
		//this retrieves and gathers our form values and store in object.
		//Object properties contain array with the form label and input values.
		getGender();
		var item				= {};
		item.planet				= ["Home Planet: ", $('#homePlanet').val()];
		item.skill				= ["Skill: ", $('#skills').val()];
		item.name				= ["Name: ", $('#name').val()];
		item.born				= ["Born: ", $('#born').val()];
		item.morality			= ["Morality: ", $('#morality').val()];
		item.character			= ["Character: ", $('#character').val()];
		item.bio				= ["Bio: ", $('#bio').val()];
		item.gender				= ["Gender: ", getGender ];
		//Save data into local storage: use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		
	}
	
	
	var displayLink = $('#displaydata'); 
	displayLink.on("click", getData);
	var clearLink = $('#cleardata');
	clearLink.on("click", clearData);
	var saveLink =  $('#savedata');
	saveLink.on("click", saveStuff); 
	
	
		




});
	
	
	
	
	
	
	//Adds options for planets
	/*
	function listPlanets (){
		var formTag = $("form"), //This is an array
			selectLi = $('#planets'),
			makeHomePlanet = $('<select>');
			makeHomePlanet.attr("id", "homeplanets");
		for(i=0, j=homePlanets.length; i<j; i++){
			var createOption = $('option');
			var optText = homePlanets[i]; 
			createOption.attr("value", optText);
			createOption.text(optText);
			makeHomePlanet.append(createOption);
		}
		selectLi.append(makeHomePlanet);
	};
	*/
	
	
	//Adds options for skills
	/*
	function listSkills (){
		var formTag = $("form"), //This is an array
			selectLi = $('#allskills'),
			makeSkills = $('select');
			makeSkills.attr("id", "theskills");
		for(i=0, j=skillOptions.length; i<j; i++){
			var createOption = $('option');
			var optText = skillOptions[i]; 
			createOption.attr("value", optText);
			createOption.text(optText);
			makeSkills.append(createOption);
		}
		selectLi.append(makeSkills);
	};
	*/
	

//listed below are the variables and calls for above functions
	//Planets Array
	/*
	var homePlanets = ["~~Allied Planets~~", "Earth", "Mars", "Pluto", "Vegas", 
	"~~Relkin Group~~", "Turos", "Heisinkr", "Velarius"];
	*/
	//calls to functions
	//listPlanets();
	
	//Skills Array
	/*
	var skillOptions = ["~~Fighting Skills~~", "Swordsman", "Smasher", "Boxer", 
	"~~Shooting Skills~~", "Gunner", "Sniper", "Tank", "~~Thieving Skills~~", "Thief", 
	"Charmer", "Assassin", "~~Sor$ry Skills~~", "Mage", "Wizard", "Shaman", 
	"~~Techster Skills~~", "Hacker", "Biotic", "Anarchist" ];
	*/
	
	//variable for errors shortcut below
	//var  errMsg = $('errors');
	//call to listskills function
	//listSkills();	
	

	
	
	
	/* This is an example of if a check boxed was checked.  Note the if and else.
	function getGenderValue(){
		if($('checkboxIdHere').checked){
			valueInStoredObject = $('checkBoxIdHere').value;
		}else{
			valueInStoredObject = "No"
		};
	}
	
	be sure to call the value outside of the scope of the function so it can be reused
	with a default value.  Default values are your friend.
	*/ 
	
	//Had to return the value as a variable to be used outside function
	//var genderValue;
	
	/*
	function toggleControls(n){
			switch(n){
				case "on":
					$('#profileForm').hide(); //NEED PROPER TAG
					$('#cleardata').show(); //NEED PROPER TAG
					$('#displaydata').hide();
					$('#newdata').show();
					break; 
				case "off":
					$('#profileForm').show();
					$('#cleardata').show(); 
					$('#displaydata').show();
					$('#newdata').hide();
					$('#info').hide();
					break;
				default:
					return false;
			}
	}
	*/
	
	
	
	
	
	
	

	
	
	//Gets the correct image for the category being displayed.
	/*
	function getImage(planName, sublist){
		var imageLi = document.createElement('li');
		sublist.appendChild(imageLi);
		var imageTag = document.createElement('img');
		var setSour$ = imageTag.setAttribute("src", "img/" + planName + ".png");
		imageLi.appendChild(imageTag);
	
	};
	*/
	
	
	//Autopopulate function
	
	function constructDefaults(){
		//Store the JSON data into local storage so we have default data
		for(var n in json){
			var id 				= Math.floor(Math.random()*10000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	
	}
	
	
	//Get data function. Writes the data saved to the browser. 
	function getData(){
		//toggleControls('on');
		if(localStorage.length === 0){
			alert("Nothing is stored in local storage. Default profiles were constructed.");
			constructDefaults();
		}
		var createDiv = $('<div>');
		createDiv.attr("id", "info");
		var makeList = $('ul');
		createDiv.append(makeList);
		document.body.appendChild(createDiv);
		$('#info').show();
		for(i=0, j=localStorage.length; i<j; i++){
			var makeli = $('<li>');
			var linksLi = $('<li>');
			makeList.append(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var object = JSON.parse(value); //This converts string data back to object
			var sublist = $('<ul>');
			makeli.append(sublist);
			//getImage(object.planet[1], sublist); 
			for(var n in object){
				var listItems = $('<li>');
				sublist.append(listItems);
				var subText = object[n][0] +" "+object[n][1];
				listItems.text(subText);
				sublist.append(linksLi);
			}
			createItemLinks(localStorage.key(i), linksLi); //This creates the buttons for each item in the storage.
		}
	};
	//create the edit and delete links for the displayed data
	function createItemLinks(key, linksLi){ //this key is called from the function up above
		var editLink = $('<a>');
		editLink.attr('href', '#');
		editLink.attr('key', key);
		var editText = "Edit Information";
		editLink.on("click", editItem);
		editLink.text(editText);
		linksLi.append(editLink);
		
		//break line to separate links
		var breakTag = $('<br>');
		linksLi.append(breakTag);
		
		//this makes a delete item link
		var deleteLink = $('<a>');
		deleteLink.attr('href', '#');
		deleteLink.attr('key', key);
		var deleteText = "Delete Information";
		deleteLink.on("click", deleteItem);
		deleteLink.text(deleteText);
		linksLi.append(deleteLink);
	}
	
	function editItem(){
		//grabs data from local storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		//Shows form
		toggleControls("off");
		
		//populate form fields with current localStorage values
		
	
		$('#homeplanets').val(item.planet[1]);
		$('#theskills').val(item.skill[1]);
		$('#name').val(item.name[1]);
		$('#born').val(item.born[1]);
		$('#morality').val(item.morality[1]);
		$('#character').val(item.character[1]);
		$('#bio').val(item.bio[1]);
		var radios = document.forms[0].gender;
			for (var i=0; i<radios.length; i++){
				if(radios[i].value == "Male" && item.gender[1] == "Male"){
					radios[i].setAttribute("checked", "checked");
				} else if (radios[i].value == "Female" && item.gender[1] == "Female"){
					radios[i].setAttribute("checked", "checked");
				} else if (radios[i].value == "Other" && item.gender[1] == "Other"){
					radios[i].setAttribute("checked", "checked");
				} else if (radios[i].value == "None" && item.gender[1] == "None"){
					radios[i].setAttribute("checked", "checked");
				}
		
		//Removes the initial listener from the save contact button so it won't make a new group
		saveLink.off("click", saveData);
		//Then we want to change the submit button value to edit button
		$('#savedata').attr('value', 'Edit Profile');
		var editSubmit = $('#savedata');
		// Saves the key, value pair established in the function as a property of the edit submit event
		// so we can use that value when we save the data we edited. 
		editSubmit.on("click", saveData());
		editSubmit.attr('key', this.key);
		
			}
		/* Checks for checkbox
		if(obj.favorite[1] == "Yes") {
			$('fav').setAttribute("checked", checked");
		}
		*/
		
		}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this profile?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Profile has been purged.");
			window.location.reload();
		} else {
			alert("Profile was spared from deletion.")
		}
	}
	
	function clearData(){
		if(localStorage.length === 0){
			alert("You haven't entered anything, mate.")
		} else {
			localStorage.clear();
			alert("All profiles have been deleted.");
			window.location.reload();
			return false;
		}
	}
	
	//This is a function that validates data in form fields
	/*
	function validate(e){
		//define the elements we want to check
		var getPlanet =     $('homeplanets');
		var getSkills =		$('theskills');
		var getName =     	$('name');
		var getBorn =		$('born');
		var getMorality = 	$('morality');
		var getCharacter = 	$('character');
		var getBio = 		$('bio');
		var getGender = 	$(genderValue);
		
		errMsg.innerHTML = "";
		getPlanet.style.border = "1px solid black";
		getSkills.style.border = "1px solid black";
		getName.style.border = "1px solid black";
		getBio.style.border = "1px solid black";

		
		//Error message 
		var errorAry = [];
		//Checks for validation
		if(getPlanet.value === "~~Allied Planets~~" || getPlanet.value === "~~Relkin Group~~"){
			var planetError = "Please choose a home planet.";
			getPlanet.style.border = "1px solid red";
			errorAry.push(planetError);
		}
		if( getSkills.value === "~~Fighting Skills~~" || getSkills.value === "~~Thieving Skills~~"  
		|| getSkills.value === "~~Shooting Skills~~" || getSkills.value === "~~Sor$ry Skills~~"  
		|| getSkills.value === "~~Techster Skills~~"){
			var skillError = "Please choose a skill.";
			getSkills.style.border = "1px solid red";
			errorAry.push(skillError);
		}
		
		if(getName.value === ""){
			var nameError = "Please enter a name.";
			getName.style.border = "1px solid red";
			errorAry.push(nameError);
		}
		
		if(getBio.value === "" || getBio.value === "Type your mate's bio here..."){
			var bioError = "Please enter a bio.";
			getBio.style.border = "1px solid red";
			errorAry.push(bioError);
		}
		*/
		/* email validation which I won't use
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?/w+)*(\.\w{2,3})+$/;
		if (!(re.exec.getEmail.value)){
			var emailError = "Please enter a valid email address.";
			itemKey.style.border = "1px solid red";
			errorAry.push(emailError);
			*/
		/*
		//Display errors on screen
		if (errorAry.length >= 1){
			for(var i=0, j=errorAry.length; i < j; i++){
				var txt = document.createElement('li');
				txt.innerHTML = errorAry[i];
				errMsg.appendChild(txt);
			} 
			e.preventDefault();
			return false;
		} else {
			//Returns store data if validates
			//this key value was passed through editsubmit as a property
			saveData(this.key);
			//sends the key value which came from editdata function.
		}
	}
	*/
	
	
	//Button Presses	
	

	//});


