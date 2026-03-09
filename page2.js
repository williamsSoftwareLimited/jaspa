export function page(fn){
	console.log('page 2 called');

	function render(){
		return `<div>page2</div>`;	
	}

	function events(){

	}

	return ({
		render, events
	});
	
}

console.log('page 2 loaded');