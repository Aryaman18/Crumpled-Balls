class Paper{
	constructor(x,y,r){

	var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

   this.image=loadImage("paper.png");


		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
		World.add(world, this.body);

	}
	display(){
		imageMode(CENTER)

		var paperpos = this.body.position

		image(this.image,paper.position.x,paper.position.y,radius);

		push() 
		translate(paperpos.x, paperpos.y); 
		rectMode(CENTER) 
		strokeWeight(3); 
		fill(255,0,255) 
		ellipse(0,0,this.r, this.r); 
		pop()
	}
	

}

