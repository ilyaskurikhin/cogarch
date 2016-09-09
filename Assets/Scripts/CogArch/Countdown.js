#pragma strict

var countDownSeconds : float;
private var restSeconds : float;
private var roundedRestSeconds : float;

private var displaySeconds : float;
private var displayMinutes: float;
private var text : String;

private var labelPosition : Rect;
var xposition : float;
var yposition : float;



function Update () {

restSeconds = countDownSeconds - Time.time;

if (restSeconds == 60) {
     print ("One Minute Left");
 }
 if (restSeconds == 0) {
     print ("Time is Over");
     //do stuff here
 }
 
 //display the timer
 roundedRestSeconds = Mathf.CeilToInt(restSeconds);
 displaySeconds = roundedRestSeconds % 60;
 displayMinutes = Mathf.FloorToInt(roundedRestSeconds / 60); 

}

 function OnGUI () {
 
 labelPosition = Rect(Screen.width/xposition - 75, Screen.height/yposition - 50, 150, 50);
 
 text = String.Format ("{0:00}:{1:00}", displayMinutes, displaySeconds); 
 GUI.Label (labelPosition, text);

}