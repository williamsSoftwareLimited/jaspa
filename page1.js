export function page(fn){
	console.log('page 1 called');
	return `<div>page1</div>
			<div>(var1)</div>`;
}

console.log('page 1 loaded');