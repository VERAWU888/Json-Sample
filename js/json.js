function callBackdata() {


var text = '{ "productAll" : [' +
'{	"pic":"https://img3.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5351207.jpg?t=1516182374980", "brand":"遊遍天下","product":"全天候防風雨羽絨外套","money":3980,"discount":"折後","price":999,"small":"up","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/163/206/5163206_L.jpg?t=1516182374980","brand":"HERAN 禾聯","product":"7葉片式電暖爐","money":3990,"discount":"折後","price":1990,"small":"","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img2.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5373396.jpg?t=1516182374980", "brand":"美國康寧", "product":"年終特賣組合","money":3798,"discount":"折後","price":1899,"small":"up","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5369822.jpg?t=1516182374980","brand":"Medimix印度皂","product":"任選30+5顆送杏輝青春露","money":3900,"discount":"特價","price":1099,"small":"up","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img2.momoshop.com.tw/ecm/img/online/10/007/08/337/images/5362756.jpg?t=1516182374980","brand":"【NIKE】","product":"2018 CNY煥然一新","money":3400,"discount":"特價","price":2799,"small":"up","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/224/191/5224191_L.jpg?t=1516182374980","brand":"命運好好玩","product":"李玉珮-紅財褲4件組","money":1980,"discount":"折後","price":199,"small":"件","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0003/805/009/3805009_L.jpg?t=1516182374980","brand":"【obis】","product":"現代風皮質沙發床-4色","money":4332,"discount":"折後","price":1980,"small":"","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/090/487/5090487_L.jpg?t=1516182374980","brand":"【Panasonic】","product":"GF8X 32G豪華組(公司)","money":16900,"discount":"折後","price":13900,"small":"","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/298/203/5298203_L.jpg?t=1516182374980","brand":"【Apple】","product":"iPhone 6s Plus 128G智慧機","money":23500,"discount":"特價","price":22590,"small":"","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/183/380/5183380_L.jpg?t=1516182374980","brand":"【Mdovia】","product":"咖啡機+掃地機器人","money":49800,"discount":"特價","price":19990,"small":"","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0003/977/274/3977274_L.jpg?t=1516182374980","brand":"行走天下","product":"雙鏡頭行車紀錄器","money":6980,"discount":"特價","price":999,"small":"","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img3.momoshop.com.tw/ecm/img/online/10/007/08/337/images/KOSE.jpg?t=1516182374980","brand":"【KOSE高絲】","product":"水潤肌必buy▼5折up","money":1420,"discount":"折後","price":399,"small":"up","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0005/175/200/5175200_L.jpg?t=1516182374980","brand":"【順天本草】","product":"青木瓜四物飲36瓶","money":2190,"discount":"折後","price":46.7,"small":"瓶","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0002/229/501/2229501_L.jpg?t=1516182374980","brand":"八方行","product":"去骨鮮嫩腿排30支","money":2715,"discount":"特價","price":34,"small":"支","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"},' +
'{	"pic":"https://img1.momoshop.com.tw/goodsimg/0004/254/515/4254515_L.jpg?t=1516182374980","brand":"crayola繪兒樂","product":"50色可水洗短桿色筆","money":1799,"discount":"特價","price":699,"small":"","ii":"https://img4.momoshop.com.tw/ecm/img/online/10/007/08/337/images/btn_go.png?t=1516182374980"}]}';

	var obj = JSON.parse(text);
	console.log(obj);
	return obj;
};


	
