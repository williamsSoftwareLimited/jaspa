
// the navigation api needs to be 'switch on' in Safari Settings->FeatureFlags
// the nav is where each page to display
// they (currently) need a function called page to operate
// page receives a callback function thay does nothing so far
const nav={
	'page1': './page1.js',
	'page2': './page2.js',
};

// these will be the modules loaded ie modules[].page()
let modules={};


// the actual page loaders - load the modules
for(n in nav){
	console.log(nav[n]);

	let i = 0;
	let name=n;
	import(nav[n]).then(module => {
	  module['page']();
	  modules[name]={...module};
	});
}

console.log(modules);


// this is the navigation interceptor
navigation.addEventListener("navigate", event => {

	console.log(event);

	//cross-origin navs
	if (!event.canIntercept) {
	  return;
	}
	// fragment navigations or downloads.
	if (event.hashChange || event.downloadRequest !== null) {
	  return;
	}

	const url=new URL(event.destination.url);
	const name = url.pathname.replace("/","");
	console.log(`url=${url}, name=${name}`);

	event.intercept({
	  async handler() {

	    const renderHtml = modules[name].page();
	    const cb = document.querySelector('code-behind');
	    console.log(`renderHtml=${renderHtml}`);
	    cb.innerHTML = renderHtml;
	  }
	}) // need to add the error handler

});