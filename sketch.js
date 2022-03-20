let sPoints;
let xp,yp;
function setup(){
	createCanvas(600,600);
	sPoints = [
		[25,280,560],
		[560,25,560]
	];
	xp = floor(random(255));
	yp = floor(random(255));
	frameRate(240);
	background(151);
	strokeWeight(1);
	drawPoints();
}

function draw(){
	for(let i=0;i<100;i++) newPoint();
}

function drawPoints(){
	push();
	for(let i=0;i<3;i++){
		point(sPoints[0][i],sPoints[1][i]);
	}
	pop();
}

function newPoint(){
	push();
	let p = random([0,1,2])
	if(p==2)
		stroke(255,0,0);
	else if(p==0)
		stroke(255,255,0);
	else stroke(0,0,255);

	xp = (xp+sPoints[0][p])/2;
	yp = (yp+sPoints[1][p])/2;
	point(xp,yp);

	pop();
}