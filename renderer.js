export function renderer(){

	function render(html){
		console.log('render ' + html);

		return html;
	}
	return ({
		render
	});
}