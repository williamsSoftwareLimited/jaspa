export function renderer(){
	console.log(`func renderer`);

	function render(html){
		console.log('render ' + html);
		return html;
	}
	return ({
		render
	});
}