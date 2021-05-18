window.onload = function(){
	document.body.onkeydown = function(e){
		if(e.keyCode == '113'){
			if(confirm('Czy chcesz zalogować się głosem?')){
				let inputs = document.getElementsByTagName("input");
				let buttons = document.getElementsByTagName("button");
				let reader = new webkitSpeechRecognition();
				reader.interimResults = true;
				reader.lang = 'pl-Pl';
				reader.onresult = function (event) {
					let result = event.results[event.resultIndex];	
					if (result.isFinal) {
						let full_text = result[0].transcript.toLowerCase();
						full_text = full_text.replace(new RegExp("małpa"), '@');
						full_text = full_text.replace(new RegExp("kropka"), '.');
						if (full_text.search('hasło') != -1){
							full_text = full_text.replace(new RegExp(" ", "g"), '');
							let haslo_begin = full_text.search('hasło')+5;
							if (full_text.search('hasłoto') != -1){
								haslo_begin = full_text.search('hasłoto')+7;
							}
							let haslo = full_text.substr(haslo_begin, haslo_begin[haslo_begin.length-1]);
							let was_message = 0;
							for (input of inputs){
								if(input['name'].includes("pass") || input['name'].includes("pass")){
									input['value'] = haslo;
									if(!was_message){
										alert('Hasło zostało wpisane: '+haslo);
										was_message = 1;
									}
								}
							}
						} else if (full_text.search('login') != -1){
							full_text = full_text.replace(new RegExp(" ", "g"), '');
							let login_begin = full_text.search('login')+5;
							if (full_text.search('loginto') != -1){
								login_begin = full_text.search('loginto')+7;
							}
							let login = full_text.substr(login_begin, login_begin[login_begin.length-1]);
							let was_message = 0;
							for (input of inputs){
								if(input['name'].includes("email") || input['name'].includes("email")){
									input['value'] = login;
									if(!was_message){
										alert('Login został zmieniony: '+login);
										was_message = 1;
									}
								}
							}
						} else if (full_text.replace(new RegExp(" ", "g"), '').search('zaloguj') != -1){
							full_text = full_text;
							for (input of inputs){
								if (input['value'].toLowerCase().includes("zaloguj")) input.click();
							}
							for (button of buttons){
								if (button['value'].toLowerCase().includes("zaloguj")) button.click();
							}
						} else {
							alert('Nie rozumiem gdzie to wpisać:\n"'+full_text.toUpperCase()+'"'+'\nto jest login czy hasło?');
						}			
					}	
				};
				function speech () {
					reader.start();
				};
				speech();
			}
		}
	}
}