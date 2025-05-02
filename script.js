// Your code here.
const cubes = document.querySelectorAll('.item');
cubes.forEach((cube,index)=>{
	cube.addEventListener("mousedown",(e)=>{
		 // set the draggable attribute
		cube.setAttribute('draggable',true);
		// save the inital position
		const offsetX = e.clientX-cube.getBoundingClientReact().left;
		const offsetY = e.clientY-cube.getBoundingClientReact().top;
		const mouseMoveHandler = (e) =>{
			cube.style.position = 'absolute';
			cube.style.left = (e.clientX-offsetX)+'px';
			cube.style.top = (e.clientY-offsetY)+'px';
		};
		const mouseUpHandler = ()=>{
			// Remove the event Listener when mouse is released
			document.removeEventListener("mousemove",mouseMoveHandler);
		document.removeEventListener("mouseup",mouseUpHandler);
		};
		
document.addEventListener("mousemove",mouseMoveHandler);
		document.addEventListener("mouseup",mouseUpHandler);
	});
});


	
})