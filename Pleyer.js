class Pleyer{
	constructor(options){
		this.scene=options.scene;
		this.objLoade=new THREE.OBJLoader();
		this.pos=options.pos;
		this.rotate=options.rotate
		this.car=options.car;
		this.robot=options.robot;
	}
	draw(file,pos,rotation){
		this.objLoade.load(this,(obj)=>{
			obj.position.set(pos.x,pos.y,pos.z);
			obj.rotation.set(rotation.x,rotation.y,rotation.z);
			this.scene.add(obj);
		});
	}
	drawCar(car=true){
		let pos;
		if(car===true){
			pos=this.pos;
		}else{
			pos={x:0,y:0,z:0};
		}
		this.draw(this.car,pos,this.rotate);
			
	}
}
