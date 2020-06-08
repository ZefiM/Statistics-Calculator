
function performStatistics()
{
	//Declarations
	var arrayNum = [];
	var TextField = (document.forms["P3TextArea"]["Numbers"].value).split(" ");
	//If the series has less then 5 numbers then throw an error
	if(TextField.length < 5)
	{
		alert("Minimum seris of numbers should be 5, please enter more numbers!");
		throw new Error();
	}
	//If the series has more then 20 numbers then throw an error
	if(TextField.length > 20)
	{
		alert("Maximum seris of numbers should be 20, please enter more numbers!");
		throw new Error();
	}
	var txtlength = TextField.length;
	while(txtlength--) !/\S/.test(TextField[txtlength]) && TextField.splice(txtlength, 1);
	for(var i = 0; i < TextField.length; i++)
	{
		arrayNum.push(TextField[i]);
	}
	var NumsArray = arrayNum.map(Number);
	
	//Check the numbers entered to see if they are anything higher then 100
	//If so, then throw an error and alert telling the user that that is the issue 
	for(var q = 0; q < NumsArray.length; q++)
	{
		if(NumsArray[q] > 100)
		{
			alert("A number in the series is larger then 100");
			throw new Error();
		}
	}
	//Functions
	//Mean
	var Mean = calcMean(NumsArray);
	Mean = Mean.toFixed(2);
	document.getElementById('Mean').value=Mean; 
	//Median
	var Median = calcMedian(NumsArray);
	Median = Median.toFixed(2);
	document.getElementById('Median').value=Median; 
	//Sum
	var Sum = calcSum(NumsArray);
	Sum = Sum.toFixed(2);
	document.getElementById('Sum').value=Sum; 
	//Max
	var Max = findMax(NumsArray);
	Max = Max.toFixed(2);
	document.getElementById('Max').value=Max;
	//Min
	var Min = findMin(NumsArray);
	Min = Min.toFixed(2);
	document.getElementById('Min').value=Min; 
	//Variance
	var Variance = calcVariance(NumsArray);
	Variance = Variance.toFixed(2);
	document.getElementById('Variance').value=Variance; 
	NumsArray = arrayNum.map(Number);
	//Standard Deviation
	var StdDev = calcStdDev(NumsArray);
	StdDev = StdDev.toFixed(2);
	document.getElementById('StdDev').value=StdDev;
	NumsArray = arrayNum.map(Number);
	//Mode
	var Mode = calcMode(NumsArray);
	document.getElementById('Mode').value=Mode;
}

function calcMean(NumberArray)
{
	var sum = calcSum(NumberArray);
	var total = (sum / NumberArray.length);
	return total;
	
}

function calcMedian(NumberArray)
{
	var center = ((NumberArray.length) / 2);
	if(center != Math.floor(center))
	{
		center = Math.round(center);
	}
	var Median = NumberArray[center - 1];
	return Median;
}

function calcMode(NumberArray)
{
	var ModeArray = "";
	var ModeCounter = [];
	var num;
	var most = 0;
	
	for (var i = 0; i < NumberArray.length; i++) 
	{
        num = NumberArray[i];
        ModeCounter[num] = ((ModeCounter[num] || 0) + 1);
        if (ModeCounter[num] > most) 
		{
            most = ModeCounter[num];
        }
    }
	for(ModeNum in ModeCounter)
	{
        if(ModeCounter.hasOwnProperty(ModeNum)) 
		{
            if(ModeCounter[ModeNum] === most) 
			{
				ModeArray += ModeNum + " ";
            }
        }
	}
    return ModeArray;
}

function calcStdDev(NumberArray)
{
	var variance = calcVariance(NumberArray);
	var finalvar = Math.sqrt(variance);
	return finalvar;	
}

function calcSum(NumberArray)
{
	var calc = 0;
	for (var i = 0; i < NumberArray.length; i++) 
	{
		calc += NumberArray[i];
	}
	return calc;	
}

function calcVariance(NumberArray)
{
	var Mean = calcMean(NumberArray);
	for (var n = 0; n < NumberArray.length; n++) 
	{
		NumberArray[n] = (NumberArray[n] - Mean);
		NumberArray[n] = Math.pow(NumberArray[n], 2);
	}
	var variance = calcMean(NumberArray);
	return variance;
	
}

function findMax(NumberArray)
{
	var Max = NumberArray[0];
	for (var i = 1; i < NumberArray.length; i++) 
	{
		if(NumberArray[i] > Max)
		{
			Max = NumberArray[i];
		}
	}
	return Max;
}

function findMin(NumberArray)
{
	var Min = NumberArray[0];
	for (var i = 0; i < NumberArray.length; i++) 
	{
		if(NumberArray[i] < Min)
		{
			Min = NumberArray[i];
		}
	}
	return Min;	
}
