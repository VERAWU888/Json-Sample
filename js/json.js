function callBackdata() {


var text = '{ "productAll" : [' +
'{	"pic":"https://img3.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5351207.jpg?t=1516182374980", "brand":"遊遍天下","product":"全天候防風雨羽絨外套","price":3980,"disprice":999},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/163/206/5163206_L.jpg?t=1516182374980","brand":"HERAN 禾聯","product":"7葉片式電暖爐","price":3990,"disprice":1990},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/163/206/5163206_L.jpg?t=1516182374980","brand":"HERAN 禾聯","product":"7葉片式電暖爐","price":3990,"disprice":1990},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/163/206/5163206_L.jpg?t=1516182374980","brand":"HERAN 禾聯","product":"7葉片式電暖爐","price":3990,"disprice":1990},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/163/206/5163206_L.jpg?t=1516182374980","brand":"HERAN 禾聯","product":"7葉片式電暖爐","price":3990,"disprice":1990},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/163/206/5163206_L.jpg?t=1516182374980","brand":"HERAN 禾聯","product":"7葉片式電暖爐","price":3990,"disprice":1990},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/163/206/5163206_L.jpg?t=1516182374980","brand":"HERAN 禾聯","product":"7葉片式電暖爐","price":3990,"disprice":1990},' +
'{	"pic":"https://img2.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5373396.jpg?t=1516182374980", "brand":"美國康寧", "product":"年終特賣組合","price":3798, "disprice":1899}]}';

	var obj = JSON.parse(text);
	console.log(obj);
	return obj;
};


	// var obj = JSON.parse('{"productAll":[{"pic":"https://img3.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5351207.jpg?t=1516182374980", "brand":"遊遍天下","product":"全天候防風雨羽絨外套","price":3980,"disprice":999},{"pic":"https://img1.momoshop.com.tw/goodsimg/0005/163/206/5163206_L.jpg?t=1516182374980","brand":"HERAN 禾聯","product":"7葉片式電暖爐","price":3990,"disprice":1990}]}');
			// }, {
				// 	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/163/206/5163206_L.jpg?t=1516182374980", 
				// 	"brand":"HERAN 禾聯","product":"7葉片式電暖爐","price":3990,"disprice":1990
				// },
				// {
				// 	"pic":"https://img2.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5373396.jpg?t=1516182374980", 
				// 	"brand":"美國康寧","product":"年終特賣組合","price":3798,"disprice":1899
				// },
				// {
				// 	"pic":"https://img1.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5369822.jpg?t=1516182374980", 
				// 	"brand":"Medimix印度皂","product":"任選30+5顆送杏輝青春露","price":3900,"disprice":1099
				// },
				// {
				// 	"pic":"https://img2.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5362756.jpg?t=1516182374980", 
				// 	"brand":"【NIKE】", 
				// 	"product":"2018 CNY煥然一新",
				// 	"price":3400, 
				// 	"disprice":2799
				// },
				// {
				// 	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/224/191/5224191_L.jpg?t=1516182374980", 
				// 	"brand":"命運好好玩", 
				// 	"product":"李玉珮-紅財褲4件組",
				// 	"price":1980, 
				// 	"disprice":199
				// },
				// {
				// 	"pic":"https://img1.momoshop.com.tw/goodsimg/0003/805/009/3805009_L.jpg?t=1516182374980", 
				// 	"brand":"【obis】", 
				// 	"product":"現代風皮質沙發床-4色",
				// 	"price":4332, 
				// 	"disprice":1980
				// },
				// {
				// 	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/090/487/5090487_L.jpg?t=1516182374980", 
				// 	"brand":"【Panasonic】", 
				// 	"product":"GF8X 32G豪華組(公司)",
				// 	"price":16900, 
				// 	"disprice":13900
				// },
				// {
				// 	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/298/203/5298203_L.jpg?t=1516182374980", 
				// 	"brand":"【Apple】", 
				// 	"product":"iPhone 6s Plus 128G智慧機",
				// 	"price":23500, 
				// 	"disprice":22590
				// },

		// ]}');

