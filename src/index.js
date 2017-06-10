// 'cause i don't have time to deal with callback!!!!!!!!
const places = [
  {
    "name": "七彩中央噴水池",
    "lat": 120.449488,
    "lon": 23.479858
  },
  {
    "name": "檜意森活村",
    "lat": 23.486355,
    "lon": 120.453873
  },
  {
    "name": "嘉義公園",
    "lat": 23.481807,
    "lon": 120.4688
  },
  {
    "name": "蘭潭",
    "lat": 23.465215,
    "lon": 120.480224
  },
  {
    "name": "射日塔",
    "lat": 120.468444,
    "lon": 23.481374
  },
  {
    "name": "月桃故事館",
    "lat": 23.512631,
    "lon": 120.448642
  },
  {
    "name": "文化路商圈簡介",
    "lat": 120.44966,
    "lon": 23.479632
  },
  {
    "name": "交趾陶簡介",
    "lat": 23.487514,
    "lon": 120.452632
  },
  {
    "name": "嘉義市城隍廟",
    "lat": 23.47821,
    "lon": 120.453393
  },
  {
    "name": "嘉義火車站",
    "lat": 23.479248,
    "lon": 120.441141
  },
  {
    "name": "嘉義舊監獄",
    "lat": 23.487593,
    "lon": 120.460131
  },
  {
    "name": "九華山地藏庵",
    "lat": 23.483376,
    "lon": 120.456627
  },
  {
    "name": "耐斯廣場時尚百貨",
    "lat": 23.496229,
    "lon": 120.453181
  },
  {
    "name": "北門驛",
    "lat": 120.454616,
    "lon": 23.487415
  },
  {
    "name": "陳澄波藝術畫架",
    "lat": 120.448222,
    "lon": 23.481211
  },
  {
    "name": "交趾陶館",
    "lat": 23.487858,
    "lon": 120.453151
  },
  {
    "name": "先天玉虛宮",
    "lat": 23.473934,
    "lon": 120.509266
  },
  {
    "name": "南天門太子行宮 ",
    "lat": 120.434164,
    "lon": 23.480271
  },
  {
    "name": "王靈宮五顯帝廟",
    "lat": 120.444936,
    "lon": 23.48775
  },
  {
    "name": "東華木屐行",
    "lat": 23.480269,
    "lon": 120.461386
  },
  {
    "name": "朱子公廟",
    "lat": 23.487278,
    "lon": 120.413693
  },
  {
    "name": "通興商號",
    "lat": 23.476394,
    "lon": 120.453608
  },
  {
    "name": "頂庄自行車道",
    "lat": 23.499774,
    "lon": 120.457277
  },
  {
    "name": "洪雅書房",
    "lat": 23.484227,
    "lon": 120.45423
  },
  {
    "name": "森林之歌",
    "lat": 23.4859,
    "lon": 120.448
  },
  {
    "name": "嘉油鐵馬道",
    "lat": 23.46301,
    "lon": 120.448523
  },
  {
    "name": "八掌溪北岸自行車道",
    "lat": 23.471513,
    "lon": 120.47586
  },
  {
    "name": "埤子頭植物園",
    "lat": 23.490021,
    "lon": 120.449746
  },
  {
    "name": "嘉義仁武宮",
    "lat": 23.481846,
    "lon": 120.450819
  },
  {
    "name": "陳澄波、二二八文化館",
    "lat": 23.481433,
    "lon": 120.448221
  },
  {
    "name": "蘭潭教會",
    "lat": 23.480479,
    "lon": 120.485182
  },
  {
    "name": "浸信會文化路教會",
    "lat": 23.477698,
    "lon": 120.449726
  },
  {
    "name": "嘉義北榮長老教會",
    "lat": 23.481071,
    "lon": 120.445065
  },
  {
    "name": "二二八紀念碑",
    "lat": 23.46303,
    "lon": 120.471257
  },
  {
    "name": "北嶽廟",
    "lat": 120.442811,
    "lon": 23.483755
  },
  {
    "name": "葉明_墓",
    "lat": 23.481511,
    "lon": 120.471436
  },
  {
    "name": "保安宮",
    "lat": 120.435237,
    "lon": 23.489442
  },
  {
    "name": "彌陀寺",
    "lat": 120.47002,
    "lon": 23.462813
  },
  {
    "name": "口舍土也方",
    "lat": 23.483066,
    "lon": 120.443704
  },
  {
    "name": "成仁街老街（美街）",
    "lat": 23.480429,
    "lon": 120.452042
  },
  {
    "name": "嘉義西門長老教會",
    "lat": 23.473531,
    "lon": 120.44739
  },
  {
    "name": "嘉義市春天音樂藝術節",
    "lat": 23.487613,
    "lon": 120.452553
  },
  {
    "name": "七苦天主堂",
    "lat": 23.476132,
    "lon": 120.446887
  },
  {
    "name": "二二八公園",
    "lat": 23.476729,
    "lon": 120.462449
  },
  {
    "name": "美源社區",
    "lat": 23.463345,
    "lon": 120.446954
  },
  {
    "name": "崇陽古道",
    "lat": 23.476197,
    "lon": 120.456724
  },
  {
    "name": "王祖母許太夫人墓",
    "lat": 23.4836765,
    "lon": 120.496241
  },
  {
    "name": "嘉義都會森林公園",
    "lat": 23.484307,
    "lon": 120.471206
  },
  {
    "name": "蘭潭後山步道",
    "lat": 23.478126,
    "lon": 120.489881
  },
  {
    "name": "蘇周連宗祠",
    "lat": 23.474128,
    "lon": 120.451762
  },
  {
    "name": "香湖公園",
    "lat": 23.491998,
    "lon": 120.446608
  },
  {
    "name": "達娜伊谷生態園區",
    "lat": 23.379001,
    "lon": 120.677829
  },
  {
    "name": "阿里山國家公園",
    "lat": 23.508892,
    "lon": 120.801761
  },
  {
    "name": "梅山公園",
    "lat": 23.57843,
    "lon": 120.558081
  },
  {
    "name": "太平風景區",
    "lat": 23.560794,
    "lon": 120.603067
  },
  {
    "name": "奮起湖老街",
    "lat": 23.505169,
    "lon": 120.694925
  },
  {
    "name": "大坑凌雲岩登山步道",
    "lat": 23.499243,
    "lon": 120.632823
  },
  {
    "name": "鹿仔草民俗文化學堂",
    "lat": 23.411399,
    "lon": 120.30821
  },
  {
    "name": "縣定古蹟義竹翁清江宅",
    "lat": 23.334453,
    "lon": 120.243536
  },
  {
    "name": "朴子溪自行車道",
    "lat": 23.496188,
    "lon": 120.291484
  },
  {
    "name": "牛挑灣埤生態公園",
    "lat": 23.409067,
    "lon": 120.255705
  },
  {
    "name": "青雲瀑布",
    "lat": 23.301739,
    "lon": 120.640821
  },
  {
    "name": "內葉翅吊橋",
    "lat": 23.296915,
    "lon": 120.642671
  },
  {
    "name": "中埔嘉檳文化館",
    "lat": 23.424907,
    "lon": 120.52202
  },
  {
    "name": "縣定古蹟吳鳳廟",
    "lat": 23.446127,
    "lon": 120.541275
  },
  {
    "name": "大林糖廠",
    "lat": 23.613638,
    "lon": 120.459172
  },
  {
    "name": "老楊方城市觀光工廠",
    "lat": 23.583558,
    "lon": 120.510342
  },
  {
    "name": "旺萊山觀光工廠",
    "lat": 23.553139,
    "lon": 120.480333
  },
  {
    "name": "民雄鵝肉街23.555216",
    "lat": 120.431621,
    "lon": ""
  },
  {
    "name": "船仔頭藝術村",
    "lat": 23.46847,
    "lon": 120.224211
  },
  {
    "name": "東石漁人碼頭23.448896",
    "lat": 120.135959,
    "lon": ""
  },
  {
    "name": "大湖尖山步道區",
    "lat": 23.487106,
    "lon": 120.637485
  },
  {
    "name": "樹木銀行",
    "lat": 23.453253,
    "lon": 120.558795
  },
  {
    "name": "溪口老街",
    "lat": 23.603986,
    "lon": 120.395734
  },
  {
    "name": "縣定古蹟奉天宮",
    "lat": 23.556703,
    "lon": 120.34785
  },
  {
    "name": "板陶窯23.565610",
    "lat": 120.321696,
    "lon": ""
  },
  {
    "name": "國立故宮博物院南部院區",
    "lat": 23.473139,
    "lon": 120.292760
  },
  {
    "name": "魚寮遺址",
    "lat": 23.482781,
    "lon": 120.352182
  },
  {
    "name": "蔗埕文化園區蒜頭糖廠",
    "lat": 23.479662,
    "lon": 120.299685
  },
  {
    "name": "好美里3D海洋世界",
    "lat": 23.339013,
    "lon": 120.137756
  },
  {
    "name": "布袋漁港",
    "lat": 23.38066,
    "lon": 120.155683
  },
  {
    "name": "高跟鞋教堂",
    "lat": 23.378106,
    "lon": 120.148687
  },
  {
    "name": "北回歸線天文廣場",
    "lat": 23.454282,
    "lon": 120.41711
  },
  {
    "name": "南靖火車站",
    "lat": 23.413679,
    "lon": 120.386593
  }
];

function initMap(json) {
  const map = L.map('map', {
    center: [23.479620, 120.441342],
    zoom: 11,
  });

  const mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

	L.tileLayer(
		'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		{
			attribution: 'Map data &copy; ' + mapLink,
      maxZoom: 11,
      minZoom: 11,
		}
	).addTo(map);

  L.circle([23.479620, 120.441342], 12500,{
    color: '#2B5F75',
  }).addTo(map);

  places.forEach((p) => {
    L.marker([p.lat, p.lon], {
      title: p.name
    }).addTo(map);
  });

  map._initPathRoot();
	const svg = d3.select('#map').select('svg');
	const g = svg.append('g').attr('class', 'leaflet-zoom-hide');

  const voronoi = d3.geom.voronoi()
		.x(d => d.x)
		.y(d => d.y);

  update();
  function update() {
    const positions = json.map((d) => {
      const geo = new L.LatLng(d.lat, d.lon);
      return {
        x: map.latLngToLayerPoint(geo).x,
        y: map.latLngToLayerPoint(geo).y
      };
    });

  	d3.selectAll('.point').remove();
  	const circle = g.selectAll('circle')
  		.data(positions)
  		.enter()
  		.append('circle')
  		.attr('class', 'point')
  		.attr({
  			cx: (d, i) => d.x,
  			cy: (d, i) => d.y,
  			r: 2,
  			fill: '#CB4042'
  		});

  	const polygons = voronoi(positions);
    console.log(polygons)
  	polygons.forEach((v) => { v.cell = v; });

  	svg.selectAll('.voronoi').remove();
  	svg.selectAll('path')
  		.data(polygons)
  		.enter()
  		.append('svg:path')
  		.attr('class', 'voronoi')
  		.attr({
  			d: (d) => !d ? null : `M${d.cell.join('L')}Z`,
  			stroke: '#64363C',
  			fill: 'none'
  		});
  }
}

d3.json('ebike-kiosk.json', json => initMap(json));
