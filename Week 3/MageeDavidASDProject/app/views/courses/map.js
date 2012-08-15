function(doc) {
  if (doc._id.substr(0, 5) === "name:") {
	  emit(doc._id.substr(5), {
		  "planet": doc.planet,
		  "skill": doc.skill,
		  "name": doc.name,
		  "born": doc.born,
		  "morality": doc.morality,
		  "character": doc.character,
		  "bio": doc.bio,
		  "gender": doc.gender
	  });
  }
};