		function formatObject() {
		  let result = '';
		 	const obj = {
					 "user": ["0001","0001","0001","0001","0002","0002","0002"],
					 "no_panen": ["230503001001.001","230503001001.001","230503001001.001",
					 			"230503001001.001","230503001001.001","230503001001.001"
								],
					 "blok": ["001","002","003",
					 			"004","005","006","007"
							],
					 "metode":[
					 	"manual","manual","mekanis",
					 	"mekanis","manual","mekanis","manual"
					 ],
					 "hasil_panen": [{
						 "matang": "10",
						 "mentah": "5"
						 },{
						 "matang": "15",
						 "mentah": "10"
						 },{
						 "matang": "20",
						 "mentah": "10"
						 },{
						 "matang": "10",
						 "mentah": "20"
						 },{
						 "matang": "15",
						 "mentah": "10"
						 },{
						 "matang": "10",
						 "mentah": "10"
						 },{
						 "matang": "15",
						 "mentah": "15"
						 }]
					};
		  for (const key in obj) {
		    if (obj.hasOwnProperty(key)) {
		      const obj2 = obj[key];
			  let obj3;
		      	if(typeof(obj2) == 'object'){
		      		result += `${key}: \n`;
			      for(const arr in obj2){
		      		 obj3 = obj2[arr];
						
			      	if(typeof(obj3) == 'object'){
			      		for (var i = 0; i < Object.keys(obj3).length; i++) {
			      			console.log(Object.keys(obj3));
			      		}
				      		result += `[${Object.keys(obj3)}]\n`;
			      	}else{
				      		result += ` ${obj2[arr]}\n`;
			      	}
		      	}
		      } 
		    }
		  }
		  return result;
		}

		function formatNoPanen(user,blok){
			const currentDate = new Date();
			const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
			const formattedDate2 = formattedDate.replaceAll('/','');
			let no_panen = formattedDate2 + user +'.' +blok;
			return no_panen;
		}

		// const formattedObj = formatObject();
		// const formattedNoPanen = formatNoPanen(obj['user'],obj['blok']);
		console.log(formatObject());