var textArray;
textArray = getFile();
function getFile()
	{
			var rawFile = new XMLHttpRequest();
	    	rawFile.open("GET", "pw.txt", true);
	    	rawFile.onreadystatechange = function ()
	    {
	        if(rawFile.readyState === 4)
	        {
	            if(rawFile.status === 200 || rawFile.status == 0)
	            {
	                var allText = rawFile.responseText;
	               	var array = allText.split('//');
	               	alert(array[0]);
	               	alert(array[1]);
	               	return array;
	               
	            }
	        }
	    }
	    rawFile.send(null);

	}