#pragma strict

var xposition = 0.97;
var yposition = 0.7;
var buttonText = "Quit";

function OnGUI() {

	if (GUI.Button(Rect(Screen.width/xposition - 75, Screen.height/yposition - 50, 150, 50), buttonText))
		Application.Quit();
}