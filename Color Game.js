window.setTimeout(function() {

var numSquares = 6;
var colors = [];
var colorPicked;
var squares = document.querySelectorAll(".color");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorText");
var h1 = document.querySelector("h1");
var buttonNew = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	for(var i = 0; i<modeButton.length; i++)
	{
		
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy"? numSquares = 3: numSquares = 6;

			reset();
		});
	}

	for(var i = 0; i < colors.length; i++)
	{
		squares[i].addEventListener("click", function(){
			var colorClicked = this.style.backgroundColor;
			if(colorClicked === colorPicked)
			{
				messageDisplay.textContent = "Correct!";
				changeColor(colorClicked);
				h1.style.backgroundColor = colorClicked;
				buttonNew.textContent = "Try Again!";
			}
			else
			{
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again!";
			}
		})
		
	}
	reset();
}

for(var i = 0; i<modeButton.length; i++)
{
	
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy"? numSquares = 3: numSquares = 6;

		reset();
	});
}

function reset(){
	colors = generateRandomColor(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for(var i = 0; i<squares.length; i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else{
			squares[i].style.display = "none";
		}
		
	}
	buttonNew.textContent = "New colors!"
	h1.style.backgroundColor = "steelblue"
	messageDisplay.textContent = "";
}

// buttonEsy.addEventListener("click", function(){
// 	numSquares = 3;
// 	buttonHard.classList.remove("selected");
// 	buttonEsy.classList.add("selected");
// 	colors = generateRandomColor(numSquares);
// 	colorPicked = pickColor();
// 	colorDisplay.textContent = colorPicked;
// 	for(var i = 0; i<squares.length; i++)
// 	{
// 		if(colors[i])
// 		{	
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else
// 		{
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue"
// })

// buttonHard.addEventListener("click", function(){
// 	numSquares = 6;
// 	buttonEsy.classList.remove("selected");
// 	buttonHard.classList.add("selected");
// 	colors = generateRandomColor(numSquares);
// 	colorPicked = pickColor();
// 	colorDisplay.textContent = colorPicked;
// 	for(var i = 0; i<squares.length; i++)
// 	{
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue"
// })

// buttonNew.addEventListener("click", function(){
// 	colors = generateRandomColor(numSquares);
// 	colorPicked = pickColor();
// 	colorDisplay.textContent = colorPicked;
// 	for(var i = 0; i<colors.length; i++)
// 	{
// 		squares[i].style.backgroundColor = colors[i];
// 	}
// 	buttonNew.textContent = "New colors!"
// 	h1.style.backgroundColor = "steelblue"
// 	messageDisplay.textContent = "";
// })

buttonNew.addEventListener("click", function(){
	reset();
})


for(var i = 0; i < colors.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var colorClicked = this.style.backgroundColor;
		if(colorClicked === colorPicked)
		{
			messageDisplay.textContent = "Correct!";
			changeColor(colorClicked);
			h1.style.backgroundColor = colorClicked;
			buttonNew.textContent = "Try Again!";
		}
		else
		{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again!";
		}
	})
	
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num)
{
	var arr = [];
	for(var i = 0; i<num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	 var r = Math.floor(Math.random() *256);
	 var b = Math.floor(Math.random() *256);
	 var g = Math.floor(Math.random() *256);

	 return "rgb(" + r + ", " + g + ", " + b + ")";
}

}, 500);