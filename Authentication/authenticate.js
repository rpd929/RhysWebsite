
/*Getting the data from the txt file that we are checking against */
var textArray;

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
	               	var array = allText.split('//');
	               
	               	UserCheck(array, hashedPw);
	              
	               
	            }
	        }
	    }
	    rawFile.send(null);

	}


	function UserCheck(array, hashedPw)
		{
			for(var x = 0; x < array.length; x++)
			{
				var userX = array[x].split('---');

				var xPassword = userX[1].trim();

				var xUsername = userX[0].trim();
			
				var UnameEntry = document.getElementById('usernameInput').value.trim();

			
					
				
				if(UnameEntry == xUsername && xPassword == hashedPw) 
				{
					changePage();
					return;
				}
				else 
				{
					
					
				}
			}

			alert('Incorrect Username or Password')
			
		}

	function changePage()
	{
		document.location.href = "/Authentication/exCont.html";
	}

			

	