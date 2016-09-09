#pragma strict

var LandmarkTime : float = 0.0;
var LandLastSeen : float;

var working : int;

private var cheese : GameObject = GameObject.FindGameObjectWithTag("Landmark1");
private var beer : GameObject = GameObject.FindGameObjectWithTag("Landmark2");

private var v3CornerC = Vector3.zero;
private var v3CenterC = cheese.renderer.bounds.center;
private var v3ExtentsC = cheese.renderer.bounds.extents;
 
private var v3CornerB = Vector3.zero;
private var v3CenterB = beer.renderer.bounds.center;
private var v3ExtentsB = beer.renderer.bounds.extents;

function Start () {

}

function Update() {
 	
// 	var currentPosition = GameObject.FindGameObjectWithTag("MainCamera").transform.position;
// 	var fwd = transform.TransformDirection (Vector3.forward);
// 	
//	var hit : RaycastHit;
//	
// 	if (Physics.Raycast(currentPosition, fwd, 10)) {
//		
//		if (hit.collider.tag == "Landmark") {
//		
//			working = 1;
//			LandmarkTime += Time.time - LandLastSeen;
//			LandLastSeen = Time.time;
//		
//		}
// 	}
     
     v3CornerC.Set(v3CenterC.x - v3ExtentsC.x, v3CenterC.y + v3ExtentsC.y, v3CenterC.z - v3ExtentsC.z);  // Front top left corner
     if (Physics.Linecast (v3CornerC, Camera.main.transform.position)) {
         working = 1; }
     v3CornerC.Set(v3CenterC.x + v3ExtentsC.x, v3CenterC.y + v3ExtentsC.y, v3CenterC.z - v3ExtentsC.z);  // Front top right corner
     if (Physics.Linecast (v3CornerC, Camera.main.transform.position)) {
         working = 1; }
     v3CornerC.Set(v3CenterC.x - v3ExtentsC.x, v3CenterC.y - v3ExtentsC.y, v3CenterC.z - v3ExtentsC.z);  // Front bottom left corner
     if (Physics.Linecast (v3CornerC, Camera.main.transform.position)) {
         working = 1; }
     v3CornerC.Set(v3CenterC.x + v3ExtentsC.x, v3CenterC.y - v3ExtentsC.y, v3CenterC.z - v3ExtentsC.z);  // Front bottom right corner
     if (Physics.Linecast (v3CornerC, Camera.main.transform.position)) {
         working = 1; }
     v3CornerC.Set(v3CenterC.x - v3ExtentsC.x, v3CenterC.y + v3ExtentsC.y, v3CenterC.z + v3ExtentsC.z);  // Back top left corner
     if (Physics.Linecast (v3CornerC, Camera.main.transform.position)) {
         working = 1; }
     v3CornerC.Set(v3CenterC.x + v3ExtentsC.x, v3CenterC.y + v3ExtentsC.y, v3CenterC.z + v3ExtentsC.z);  // Back top right corner
     if (Physics.Linecast (v3CornerC, Camera.main.transform.position)) {
         working = 1; }
     v3CornerC.Set(v3CenterC.x - v3ExtentsC.x, v3CenterC.y - v3ExtentsC.y, v3CenterC.z + v3ExtentsC.z);  // Back bottom left corner
     if (Physics.Linecast (v3CornerC, Camera.main.transform.position)) {
         working = 1; } 
     v3CornerC.Set(v3CenterC.x + v3ExtentsC.x, v3CenterC.y - v3ExtentsC.y, v3CenterC.z + v3ExtentsC.z);  // Back bottom right corner
     if (Physics.Linecast (v3CornerC, Camera.main.transform.position)) {
         working = 1; }
         
         
         
     v3CornerB.Set(v3CenterB.x - v3ExtentsB.x, v3CenterB.y + v3ExtentsB.y, v3CenterB.z - v3ExtentsB.z);  // Front top left corner
     if (Physics.Linecast (v3CornerB, Camera.main.transform.position)) {
         working = 1; }
     v3CornerB.Set(v3CenterB.x + v3ExtentsB.x, v3CenterB.y + v3ExtentsB.y, v3CenterB.z - v3ExtentsB.z);  // Front top right corner
     if (Physics.Linecast (v3CornerB, Camera.main.transform.position)) {
         working = 1; }
     v3CornerB.Set(v3CenterB.x - v3ExtentsB.x, v3CenterB.y - v3ExtentsB.y, v3CenterB.z - v3ExtentsB.z);  // Front bottom left corner
     if (Physics.Linecast (v3CornerB, Camera.main.transform.position)) {
         working = 1; }
     v3CornerB.Set(v3CenterB.x + v3ExtentsB.x, v3CenterB.y - v3ExtentsB.y, v3CenterB.z - v3ExtentsB.z);  // Front bottom right corner
     if (Physics.Linecast (v3CornerB, Camera.main.transform.position)) {
         working = 1; }
     v3CornerB.Set(v3CenterB.x - v3ExtentsB.x, v3CenterB.y + v3ExtentsB.y, v3CenterB.z + v3ExtentsB.z);  // Back top left corner
     if (Physics.Linecast (v3CornerB, Camera.main.transform.position)) {
         working = 1; }
     v3CornerB.Set(v3CenterB.x + v3ExtentsB.x, v3CenterB.y + v3ExtentsB.y, v3CenterB.z + v3ExtentsB.z);  // Back top right corner
     if (Physics.Linecast (v3CornerB, Camera.main.transform.position)) {
         working = 1; }
     v3CornerB.Set(v3CenterB.x - v3ExtentsB.x, v3CenterB.y - v3ExtentsB.y, v3CenterB.z + v3ExtentsB.z);  // Back bottom left corner
     if (Physics.Linecast (v3CornerB, Camera.main.transform.position)) {
         working = 1; } 
     v3CornerB.Set(v3CenterB.x + v3ExtentsB.x, v3CenterB.y - v3ExtentsB.y, v3CenterB.z + v3ExtentsB.z);  // Back bottom right corner
     if (Physics.Linecast (v3CornerB, Camera.main.transform.position)) {
         working = 1; }
}