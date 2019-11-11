


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
	update_order_items();
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

function update_order_items()
	{
		let orders = cart_get_orders;
		$("#orders_input").val(orders);
	}

function cart_get_orders()
	{
		let orders = "";

		for(let i = 0; i<window.localStorage.length; i++)
		{
			let key = window.localStorage.key(i);
			let value = window.localStorage.getItem(key);

			if(key.indexOf('product')==0)
				{
					orders = orders + key +"="+ value + ",";				
				}
		}

		return orders;
			
	};