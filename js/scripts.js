// -------------------------------------------------------------------------------
// Task 1:
// -------------------------------------------------------------------------------

function validate(userInput) {
	if (!userInput) {
		window.alert("You haven't wrote anything!");
	}
	else if (userInput === "Bobby") {
		window.alert("You can't use Bobby!");
		return false;
	}
	else if (userInput.length > 20) {
		window.alert("You can only enter 20 characters!");
		return false;
	}
	else {
		console.log(userInput);
		return true;
	}
	console.log(userInput);

// DON'T CHANGE ANYTHING BELOW THIS LINE!


function submitFunction() {
  validate(document.getElementById("emailInput").value);
}

document.getElementById("submit-btn").addEventListener("click", function(event){
  event.preventDefault()
});



// -------------------------------------------------------------------------------
// Task 2 (Part 1)
// -------------------------------------------------------------------------------

function checkNumber(value) {
  if (value >= 0 && value <= 99) {
    return true;
  } else {
    return false;
  }
}

// DONT CHANGE ANYTHING BELOW THIS LINE!

function addToOutput(text) {
  var output = document.getElementById("output");
  output.innerHTML = output.innerHTML += "<br>" + text;
}

document.getElementById("start").onclick = function() {
  for(var i = 0; i < 100; i++) {
    if(checkNumber(i)) {
      addToOutput(i);
    }
  }
}


// -------------------------------------------------------------------------------
// Task 2 (Part 2)
// -------------------------------------------------------------------------------

function checkNumber(value) {
  if (
    value === 0 ||
    (value >= 10 && value <= 20) ||
    (value >= 42 && value <= 43) ||
    (value >= 60 && value <= 80) ||
    value > 90
  ) {
    return true;
  } else {
    return false;
  }
}

// DONT CHANGE ANYTHING BELOW THIS LINE!

function addToOutput(text) {
  var output = document.getElementById("output");
  output.innerHTML = output.innerHTML += "<br>" + text;
}

document.getElementById("start").onclick = function() {
  for(var i = 0; i < 100; i++) {
    if(checkNumber(i)) {
      addToOutput(i);
    }
  }
}

// -------------------------------------------------------------------------------
// Task 3:
// -------------------------------------------------------------------------------


function startButtonClicked()
{
  for (var i = 100; i >= 100 && i <= 200; i++)
  {
  console.log(i);
  }
}

// DONT CHANGE ANYTHING BELOW THIS LINE!

function textOutput(text) {
  var output = document.getElementById("output");
  output.innerHTML = output.innerHTML += "<br>" + text;
}

document.getElementById("start").onclick = function() {
  startButtonClicked();
}
