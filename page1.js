export function page(fn){

	const var1 = "hello";
	const btnId = "helloId";

	function render(){
		return `<div>page1</div>
			<div id='page1Div'>${var1}</div>
			<button onclick='clickEvents()'>press me</button>`;	
	}

	function events(){
		
		var page1Div = document.getElementById('page1Div');
		page1Div.innerHTML = 'world';

		console.log(`page1 events`, page1Div);
	}

	return ({
		render, events
	});


	console.log('page 1 called');
	
}

console.log('page 1 loaded');