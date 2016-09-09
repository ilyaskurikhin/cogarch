#pragma strict

var distanceTravelled : float; 
private var lastPosition : Vector3; 
private var currentPosition : Vector3;
private var displayDistance : float;
private var text : String;

private var labelPosition : Rect;
var xposition : float;
var yposition : float;

function Start() { 
	
	distanceTravelled = 0;
	lastPosition = GameObject.FindGameObjectWithTag("MainCamera").transform.position; 
}
 
function FixedUpdate() { 
	
	currentPosition = GameObject.FindGameObjectWithTag("MainCamera").transform.position;
	
	distanceTravelled += Vector3.Distance(currentPosition, lastPosition); 
	lastPosition = currentPosition; 
	
}

function OnGUI () {
 
 labelPosition = Rect(Screen.width/xposition - 75, Screen.height/yposition - 50, 150, 50);
 
 displayDistance = Mathf.CeilToInt(distanceTravelled);
 text = String.Format ("{0} {1}", displayDistance, "meters"); 
 GUI.Label (labelPosition, text);

}
