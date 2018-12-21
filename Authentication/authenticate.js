
/*Getting the data from the txt file that we are checking against */
	function getFile(hashedPw)
	{
			var rawFile = new XMLHttpRequest();
	    	rawFile.open("GET", "/Authentication/pw.txt", true);
	    	rawFile.onreadystatechange = function ()
	    {
	        if(rawFile.readyState === 4)
	        {
	            if(rawFile.status === 200 || rawFile.status == 0)
	            {
	                var allText = rawFile.responseText;
	                var loginCombo = allText.split('//');
	     
	              
	                	var userArray = loginCombo[0].split('---');
	               		var username = userArray[0].trim();
	               		var pw = userArray[1];

	               		var user = {

	               			un: '',
	               			pww: '',
	               		};


	               		user.un = username;
	               		user.pww = pw;


	               		
	             
	               		
	               		UserCheck(user, hashedPw);
	               	}
	               
	            }
	        }
	    
	    rawFile.send(null);

	}



	
		
		function UserCheck(user, hashedPw)
		{
			var UnameEntry = document.getElementById('usernameInput').value.trim();

			var certUser = user.un;
			var userPw = user.pww.trim();
			hashedPw = hashedPw.trim();


			
			
			if(certUser.localeCompare(certUser) == 0 && userPw.localeCompare(hashedPw) == 0)
				{

					alert('its done');

				} else {
					
					console.log(userPw + ' ' + hashedPw);
				}
			}
				
		
		

		function createHash(result)
		{

			var shaObj256 = new jsSHA("SHA-256", "TEXT");
			
			shaObj256.update(result);

			var hash2 = shaObj256.getHash("HEX");

			return hash2;

		}


	