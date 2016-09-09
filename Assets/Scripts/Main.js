#pragma strict

function Start () {

}

function Update () {

	if (Input.GetKey(KeyCode.Escape)) {
	
		if (Application.loadedLevelName == "Menu") {
			Application.Quit();
		}
		
		else {
			Application.LoadLevel(0);
		}
	}
}