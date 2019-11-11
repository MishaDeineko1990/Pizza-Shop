function something()
{

	localStorage.clear();



				// BLOCK ADD TO LOCALSTOREGE VARIBLE
	// var x = window.localStorage.getItem('bbb'); // x = hh['bbb']
	// x = x * 1 + 1; // x = x + 1
	// window.localStorage.setItem('bbb', x); // hh['bbb'] = x
	// alert(x);

};



function add_to_cart(id)
{
	let key = 'product_'+id;
	let x =  window.localStorage.getItem(key);
	
	x = (x*1)+1;
	window.localStorage.setItem(key,x);
};

function cart_get_number_items()
{
	let cnt = 0;

	for(let i = 0; i<window.localStorage.length; i++)
	{
		let key = window.localStorage.key(i);
		let value = window.localStorage.getItem(key);

		if(key.indexOf('product')==0)
		{
			cnt = cnt + value *1;

			
		}
	}

	return cnt;
		
};