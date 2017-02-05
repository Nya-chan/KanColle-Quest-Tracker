$(document).ready(function() {
   
    /*$.getJSON("quests.json", function(data) {*/
		$.each(testData, function(key, val) {
			if (val["requirements"]) {
				var reqs = "data-req='" + JSON.stringify(val["requirements"]) + "'";
			} else {var reqs = '';}
			if (val["unlocks"]) {
				var unlocks = "data-unlocks='" + JSON.stringify(val["unlocks"]) + "'";
			} else {var unlocks = '';}
			$(".quests").append(" \
				<div class='" + val["classes"] + "' id='" + val["id"] + "' " + reqs + unlocks + "> \
					<span class='id'>" + val["id"] + "</span> \
					<span class='name jp' alt='" + val["namejp"] + "' title='" + val["namejp"] + "'>" + val["namejp"] + "</span> \
					<span class='name en' alt='" + val["nameen"] + "' title='" + val["nameen"] + "'>" + val["nameen"] + "</span> \
                    <span class='switcher'></span> \
					<span class='req'><span>" + val["req"] + "</span></span> \
					<span class='rewards'> \
						<span class='res-rew'>" + val["resrew"] + "</span> \
						<span class='other-rew'>" + val["otherrew"] + "</span> \
					</span> \
				</div> \
			");
			$(".other-rew span").each(function() {
				var bgPic = $(this).attr("class");
				$(this).css("background-image", "url('img/" + bgPic + ".png')");
			});
		});
	/*});*/
	
});

/**/

var testData = {
  "1": {
    "id": "A1",
    "classes": "quest composition",
    "requirements": "",
    "unlocks": [
      "A2"
    ],
    "namejp": "はじめての「編成」！",
    "nameen": "The First Organization",
    "req": "Have 2 ships in your main fleet",
    "resrew": "20 / 20 / 0 / 0",
    "otherrew": "<span class='shirayuki'>Shirayuki</span>"
  },
  "2": {
    "id": "A2",
    "classes": "quest composition",
    "requirements": [
      "A1"
    ],
    "unlocks": [
      "A3"
    ],
    "namejp": "「駆逐隊」を編成せよ！",
    "nameen": "Organize a Destroyer Division",
    "req": "Have 4 Destroyers in your fleet",
    "resrew": "30 / 30 / 30 / 0",
    "otherrew": "<span class='instant-construction'>Instant Construction</span>"
  },
  "3": {
    "id": "A3",
    "classes": "quest composition",
    "requirements": [
      "A2"
    ],
    "unlocks": [
      "A4",
      "A5"
    ],
    "namejp": "「水雷戦隊」を編成せよ！",
    "nameen": "Organize a Torpedo Squadron",
    "req": "Consists of a Light Cruiser as your flagship and 3 Destroyers",
    "resrew": "40 / 40 / 0 / 40",
    "otherrew": "<span class='repair-team'>Repair Team</span>"
  },
  "4": {
    "id": "A4",
    "classes": "quest composition",
    "requirements": [
      "A3"
    ],
    "unlocks": [
      "A6",
      "A9"
    ],
    "namejp": "6隻編成の艦隊を編成せよ！",
    "nameen": "Organize a Fleet of 6 Ships",
    "req": "Have 6 ships in your fleet",
    "resrew": "50 / 0 / 50 / 0",
    "otherrew": "Second Fleet"
  },
  "5": {
    "id": "A5",
    "classes": "quest composition",
    "requirements": [
      "A3"
    ],
    "unlocks": [
      "A7",
      "A8",
      "B29",
      "D1"
    ],
    "namejp": "軽巡2隻を擁する隊を編成せよ！",
    "nameen": "Organize a Fleet of 2 Light Cruisers",
    "req": "Have 2 Light Cruisers in your fleet",
    "resrew": "60 / 60 / 0 / 0",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "6": {
    "id": "A6",
    "classes": "quest composition",
    "requirements": [
      "A4"
    ],
    "unlocks": [
      "B3"
    ],
    "namejp": "第2艦隊を編成せよ！",
    "nameen": "Organize the Second Fleet",
    "req": "Have a flagship in your second fleet",
    "resrew": "50 / 50 / 100 / 0",
    "otherrew": "<span class='instant-construction'>Instant Construction</span>"
  },
  "7": {
    "id": "A7",
    "classes": "quest composition",
    "requirements": [
      "A5"
    ],
    "unlocks": [
      "A14"
    ],
    "namejp": "「重巡戦隊」を編成せよ！",
    "nameen": "Organize a Heavy Cruiser Division",
    "req": "Have 2 Heavy Cruisers in your fleet (Aviation Cruisers don't count)",
    "resrew": "0 / 70 / 0 / 30",
    "otherrew": "<span class='instant-construction'>Instant Construction</span>"
  },
  "8": {
    "id": "A8",
    "classes": "quest composition",
    "requirements": [
      "A5"
    ],
    "unlocks": [
      "A17"
    ],
    "namejp": "「天龍」型軽巡姉妹の全2艦を編成せよ！",
    "nameen": "Organize both Sisters of the Tenryuu-class Light Cruisers",
    "req": "Have Tenryuu and Tatsuta in your main fleet",
    "resrew": "100 / 100 / 100 / 50",
    "otherrew": "2x<span class='instant-construction'>Instant Construction</span>"
  },
  "9": {
    "id": "A9",
    "classes": "quest composition",
    "requirements": [
      "A4"
    ],
    "unlocks": [
      "A10",
      "A45"
    ],
    "namejp": "「水上機母艦」を配備せよ！",
    "nameen": "Deploy a Seaplane Tender",
    "req": "Have a Seaplane Tender in your fleet",
    "resrew": "0 / 0 / 0 / 200",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "10": {
    "id": "A10",
    "classes": "quest composition",
    "requirements": [
      "A9"
    ],
    "unlocks": [
      "A28",
      "B12",
      "B42"
    ],
    "namejp": "「第六駆逐隊」を編成せよ！",
    "nameen": "Organize the 6th Destroyer Division",
    "req": "Have ONLY Akatsuki, Hibiki, Ikazuchi and Inazuma in your second fleet",
    "resrew": "150 / 150 / 0 / 0",
    "otherrew": "<span class='repair-team'>Repair Team</span>"
  },
  "11": {
    "id": "A11",
    "classes": "quest composition",
    "requirements": [
      "B3"
    ],
    "unlocks": [
      "B10"
    ],
    "namejp": "第2艦隊で空母機動部隊を編成せよ！",
    "nameen": "Organize a Carrier Task Force in Your Second Fleet",
    "req": "Have an Aircraft Carrier / Light Aircraft Carrier and 3 Destroyers in your SECOND fleet",
    "resrew": "100 / 0 / 0 / 100",
    "otherrew": "2x<span class='instant-construction'>Instant Construction</span>"
  },
  "12": {
    "id": "A12",
    "classes": "quest composition",
    "requirements": "",
    "unlocks": [
      "A13"
    ],
    "namejp": "「空母機動部隊」を編成せよ！",
    "nameen": "Organize a Carrier Task Force",
    "req": "Have an Aircraft Carrier / Light Aircraft Carrier and 3 Destroyers in your main fleet",
    "resrew": "50 / 0 / 0 / 100",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "13": {
    "id": "A13",
    "classes": "quest composition",
    "requirements": [
      "A12"
    ],
    "unlocks": [
      "A19",
      "A20"
    ],
    "namejp": "戦艦と重巡による主力艦隊を編成せよ！",
    "nameen": "Organize the Main Fleet with a Battleship and Heavy Cruisers",
    "req": "Have a Battleship and 2 Heavy Cruisers in your main fleet(Aviation Battleships don't count)",
    "resrew": "0 / 150 / 0 / 0",
    "otherrew": "2x<span class='instant-construction'>Instant Construction</span>"
  },
  "14": {
    "id": "A14",
    "classes": "quest composition",
    "requirements": [
      "A7"
    ],
    "unlocks": [
      "A15",
      "G4"
    ],
    "namejp": "「川内」型軽巡姉妹の全3艦を編成せよ！",
    "nameen": "Organize All 3 Sisters of the Sendai-class Light Cruisers",
    "req": "Have Sendai, Jintsuu, and Naka in your main fleet",
    "resrew": "100 / 0 / 100 / 0",
    "otherrew": "Third Fleet"
  },
  "15": {
    "id": "A15",
    "classes": "quest composition",
    "requirements": [
      "A14"
    ],
    "unlocks": [
      "A16"
    ],
    "namejp": "「妙高」型重巡姉妹の全4隻を編成せよ！",
    "nameen": "Organize All 4 Sisters of the Myoukou-class Heavy Cruisers",
    "req": "Have Myoukou, Nachi, Ashigara, and Haguro in your main fleet",
    "resrew": "150 / 100 / 150 / 100",
    "otherrew": "<span class='bucket'>Bucket</span> <span class='development-material'>Development Material</span>"
  },
  "16": {
    "id": "A16",
    "classes": "quest composition",
    "requirements": [
      "A15"
    ],
    "unlocks": [
      "WF01"
    ],
    "namejp": "「金剛」型による高速戦艦部隊を編成せよ！",
    "nameen": "Organize a Fast Battleship Force with the Kongou-class",
    "req": "Have Kongou, Hiei, Haruna, and Kirishima in your main fleet",
    "resrew": "0 / 0 / 0 / 0",
    "otherrew": "Fourth Fleet"
  },
  "17": {
    "id": "A17",
    "classes": "quest composition",
    "requirements": [
      "A8"
    ],
    "unlocks": [
      "A18"
    ],
    "namejp": "「扶桑」型戦艦姉妹の全2隻を編成せよ！",
    "nameen": "Organize Both Sisters of the Fusou-class Battleships",
    "req": "Have Fusou and Yamashiro in your main fleet",
    "resrew": "200 / 200 / 200 / 200",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='development-material'>Development Material</span>"
  },
  "18": {
    "id": "A18",
    "classes": "quest composition",
    "requirements": [
      "A17"
    ],
    "unlocks": [
      "A51"
    ],
    "namejp": "「伊勢」型戦艦姉妹の全2隻を編成せよ！",
    "nameen": "Organize Both Sisters of the Ise-class Battleships",
    "req": "Have Ise and Hyuuga in your main fleet",
    "resrew": "300 / 200 / 300 / 200",
    "otherrew": "2x<span class='bucket'>Bucket</span> 2x<span class='development-material'>Development Material</span>"
  },
  "19": {
    "id": "A19",
    "classes": "quest composition",
    "requirements": [
      "A13"
    ],
    "unlocks": [
      "F22"
    ],
    "namejp": "「南雲機動部隊」を編成せよ！",
    "nameen": "Organize the Nagumo Carrier Task Force",
    "req": "Have ONLY Akagi, Kaga, Hiryuu, and Souryuu in your main fleet",
    "resrew": "500 / 500 / 500 / 500",
    "otherrew": "2x<span class='instant-construction'>Instant Construction</span> 4x<span class='development-material'>Development Material</span>"
  },
  "20": {
    "id": "A20",
    "classes": "quest composition",
    "requirements": [
      "A13"
    ],
    "unlocks": [
      "A21",
      "B11"
    ],
    "namejp": "「三川艦隊」を編成せよ！",
    "nameen": "Organize the Mikawa Fleet",
    "req": "Have Choukai, Aoba, Kako, Furutaka, and Tenryuu in your main fleet, with one additional FAST ship",
    "resrew": "400 / 0 / 200 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span>"
  },
  "21": {
    "id": "A21",
    "classes": "quest composition",
    "requirements": [
      "A20"
    ],
    "unlocks": [
      "A22",
      "A24",
      "A25",
      "A27",
      "A29",
      "B13"
    ],
    "namejp": "「第四戦隊」を編成せよ！",
    "nameen": "Organize the 4th Cruiser Division",
    "req": "Have Takao, Atago, Choukai, and Maya in your main fleet",
    "resrew": "300 / 150 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='development-material'>Development Material</span>"
  },
  "22": {
    "id": "A22",
    "classes": "quest composition",
    "requirements": [
      "A21"
    ],
    "unlocks": [
      "A23",
      "A26",
      "B14"
    ],
    "namejp": "「西村艦隊」を編成せよ！",
    "nameen": "Organize the Nishimura Fleet",
    "req": "Have Fusou, Yamashiro, Mogami, and Shigure in your main fleet",
    "resrew": "200 / 200 / 200 / 0",
    "otherrew": "<span class='mamiya'>Mamiya</span>"
  },
  "23": {
    "id": "A23",
    "classes": "quest composition",
    "requirements": [
      "A22"
    ],
    "unlocks": [
      "A41",
      "A46",
      "A56",
      "B15"
    ],
    "namejp": "「第五航空戦隊」を編成せよ！",
    "nameen": "Organize the 5th Carrier Division",
    "req": "Have both Shoukaku, Zuikaku, and 2 Destroyers in your main fleet",
    "resrew": "300 / 0 / 0 / 300",
    "otherrew": "<span class='repair-team'>Repair Team</span>"
  },
  "24": {
    "id": "A24",
    "classes": "quest composition",
    "requirements": [
      "A21"
    ],
    "unlocks": [
      "B16"
    ],
    "namejp": "新「三川艦隊」を編成せよ！",
    "nameen": "Organize the New Mikawa Fleet",
    "req": "Have Choukai, Aoba, Kinugasa, Kako, Furutaka, and Tenryuu in your main fleet",
    "resrew": "300 / 0 / 300 / 0",
    "otherrew": "<span class='mamiya'>Mamiya</span>"
  },
  "25": {
    "id": "A25",
    "classes": "quest composition",
    "requirements": [
      "A21"
    ],
    "unlocks": [
      "A31",
      "B17"
    ],
    "namejp": "潜水艦隊を編成せよ！",
    "nameen": "Organize a Submarine Fleet",
    "req": "Have 2 Submarines in any one of your fleets",
    "resrew": "150 / 150 / 0 / 0",
    "otherrew": "<span class='repair-team'>Repair Team</span>"
  },
  "26": {
    "id": "A26",
    "classes": "quest composition",
    "requirements": [
      "A22"
    ],
    "unlocks": [
      "B18"
    ],
    "namejp": "航空水上打撃艦隊を編成せよ！",
    "nameen": "Organize an Aviation Surface Attack Fleet",
    "req": "Have ONLY 2 Aviation Battleships and 2 Aviation Cruisers in your main fleet",
    "resrew": "0 / 0 / 200 / 200",
    "otherrew": "2x<span class='bucket'>Bucket</span>"
  },
  "27": {
    "id": "A27",
    "classes": "quest composition",
    "requirements": [
      "A21"
    ],
    "unlocks": [
      "A37",
      "D5"
    ],
    "namejp": "中規模潜水艦隊を編成せよ！",
    "nameen": "Organize a Medium-sized Submarine Fleet",
    "req": "Have 3 Submarines in any one of your fleets",
    "resrew": "150 / 150 / 0 / 0",
    "otherrew": "<span class='mamiya'>Mamiya</span>"
  },
  "28": {
    "id": "A28",
    "classes": "quest composition",
    "requirements": [
      "A10"
    ],
    "unlocks": [
      "A36",
      "B19"
    ],
    "namejp": "「第六戦隊」を編成せよ！",
    "nameen": "Organize the 6th Cruiser Division",
    "req": "Have Furutaka, Kako, Kinugasa, and Aoba in your main fleet",
    "resrew": "250 / 300 / 0 / 0",
    "otherrew": "<span class='mamiya'>Mamiya</span>"
  },
  "29": {
    "id": "A29",
    "classes": "quest composition",
    "requirements": [
      "A21"
    ],
    "unlocks": [
      "A30"
    ],
    "namejp": "「第五艦隊」を編成せよ！",
    "nameen": "Organize the 5th Fleet",
    "req": "Have Nachi, Ashigara, Tama, and Kiso in your main fleet",
    "resrew": "200 / 0 / 300 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span>"
  },
  "30": {
    "id": "A30",
    "classes": "quest composition",
    "requirements": [
      "A29"
    ],
    "unlocks": [
      "D9"
    ],
    "namejp": "「第一水雷戦隊」を編成せよ！",
    "nameen": "Organize the 1st Torpedo Squadron",
    "req": "Have Abukuma, Akebono, Ushio, Kasumi, and Shiranui in your main fleet",
    "resrew": "200 / 300 / 0 / 0",
    "otherrew": "<span class='repair-team'>Repair Team</span>"
  },
  "31": {
    "id": "A31",
    "classes": "quest composition",
    "requirements": [
      "A25"
    ],
    "unlocks": [
      "A33",
      "B20"
    ],
    "namejp": "「第八駆逐隊」を編成せよ！",
    "nameen": "Organize the 8th Destroyer Division",
    "req": "Have ONLY Asashio, Michishio, Ooshio, and Arashio in your main fleet",
    "resrew": "150 / 150 / 0 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span>"
  },
  "32": {
    "id": "A32",
    "classes": "quest composition",
    "requirements": [
      "B20"
    ],
    "unlocks": [
      "A42",
      "A47",
      "B21",
      "D10"
    ],
    "namejp": "「第十八駆逐隊」を編成せよ！",
    "nameen": "Organize the 18th Destroyer Division",
    "req": "Have ONLY Kasumi, Arare, Kagerou, and Shiranui in your main fleet",
    "resrew": "180 / 180 / 0 / 0",
    "otherrew": "<span class='development-material'>Development Material</span> <span class='repair-team'>Repair Team</span>"
  },
  "33": {
    "id": "A33",
    "classes": "quest composition",
    "requirements": [
      "A31"
    ],
    "unlocks": [
      "A34",
      "B22"
    ],
    "namejp": "「第三十駆逐隊（第一次）」を編成せよ！",
    "nameen": "Organize the 30th Destroyer Division (First Generation)",
    "req": "Have ONLY Mutsuki, Kisaragi, Yayoi, and Mochizuki in your main fleet",
    "resrew": "200 / 200 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='repair-team'>Repair Team</span>"
  },
  "34": {
    "id": "A34",
    "classes": "quest composition",
    "requirements": [
      "A33"
    ],
    "unlocks": [
      "A50",
      "B24"
    ],
    "namejp": "「第三十駆逐隊(第二次)」を編成せよ！",
    "nameen": "Organize the 30th Destroyer Division (Second Generation)",
    "req": "Have ONLY Mutsuki, Yayoi, Uzuki, and Mochizuki in your main fleet",
    "resrew": "220 / 220 / 0 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span>"
  },
  "35": {
    "id": "A35",
    "classes": "quest composition",
    "requirements": [
      "B24"
    ],
    "unlocks": [
      "A38",
      "A44",
      "Bm1",
      "D17"
    ],
    "namejp": "「第五戦隊」を編成せよ！",
    "nameen": "Organize the 5th Cruiser Division",
    "req": "Have Myoukou, Nachi, and Haguro in your main fleet",
    "resrew": "0 / 0 / 300 / 0",
    "otherrew": "5x<span class='development-material'>Development Material</span>"
  },
  "36": {
    "id": "A36",
    "classes": "quest composition",
    "requirements": [
      "A28"
    ],
    "unlocks": [
      "B25"
    ],
    "namejp": "新編「第二航空戦隊」を編成せよ！",
    "nameen": "Organize the New 2nd Carrier Division",
    "req": "Have Hiryuu Kai Ni as flagship, Souryuu and 2 Destroyers in your main fleet",
    "resrew": "0 / 0 / 0 / 400",
    "otherrew": "2x<span class='bucket'>Bucket</span> 2x<span class='development-material'>Development Material</span>"
  },
  "37": {
    "id": "A37",
    "classes": "quest composition",
    "requirements": [
      "A27"
    ],
    "unlocks": [
      "D13"
    ],
    "namejp": "潜水艦隊「第六艦隊」を編成せよ！",
    "nameen": "Organize the Submarine Fleet: \"6th Fleet\"",
    "req": "Have a Submarine Tender as flagship and 4 Submarines or more in your main fleet",
    "resrew": "250 / 250 / 0 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span>"
  },
  "38": {
    "id": "A38",
    "classes": "quest composition",
    "requirements": [
      "A35"
    ],
    "unlocks": "",
    "namejp": "新型電探を配備せよ！",
    "nameen": "Deploy the New Radar Type",
    "req": "Have Myoukou Kai Ni as flagship",
    "resrew": "300 / 0 / 0 / 300",
    "otherrew": "<span class='type22-radar'>Type 22 Surface Radar Kai 4</span>"
  },
  "39": {
    "id": "A39",
    "classes": "quest composition",
    "requirements": [
      "B25"
    ],
    "unlocks": [
      "B26",
      "F24"
    ],
    "namejp": "再編成「第二航空戦隊」を強化せよ！",
    "nameen": "Strengthen the Reorganized 2nd Carrier Division",
    "req": "Have Souryuu Kai Ni as flagship with Hiryuu Kai Ni and 2 Destroyers in your main fleet",
    "resrew": "0 / 0 / 0 / 450",
    "otherrew": "2x<span class='development-material'>Development Material</span> 2x<span class='instant-construction'>Instant Construction</span>"
  },
  "40": {
    "id": "A40",
    "classes": "quest composition",
    "requirements": [
      "WB02"
    ],
    "unlocks": "",
    "namejp": "精鋭「第三戦隊」全艦集結せよ！",
    "nameen": "Gather All of the Elite 3rd Battleship Division",
    "req": "Have Kongou Kai Ni, Hiei Kai Ni, Haruna Kai Ni, and Kirishima Kai Ni in your main fleet",
    "resrew": "0 / 100 / 0 / 0",
    "otherrew": "<span class='prototype-356'>Prototype 35.6cm Triple Gun Mount</span>"
  },
  "41": {
    "id": "A41",
    "classes": "quest composition",
    "requirements": [
      "A23"
    ],
    "unlocks": [
      "B28"
    ],
    "namejp": "「新型正規空母」を配備せよ！",
    "nameen": "Deploy the New Standard Aircraft Carrier Class",
    "req": "Have Unryuu in your fleet as flagship",
    "resrew": "100 / 100 / 100 / 300",
    "otherrew": "2x<span class='development-material'>Development Material</span>"
  },
  "42": {
    "id": "A42",
    "classes": "quest composition",
    "requirements": [
      "A32"
    ],
    "unlocks": [
      "B31"
    ],
    "namejp": "主力戦艦部隊「第二戦隊」を編成せよ！",
    "nameen": "Organize the Main Battleship Force: \"The 2nd Squadron\"",
    "req": "Have Nagato, Mutsu, Fusou, and Yamashiro in your main fleet",
    "resrew": "0 / 250 / 250 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span>"
  },
  "43": {
    "id": "A43",
    "classes": "quest composition",
    "requirements": [
      "B31"
    ],
    "unlocks": [
      "Bm4"
    ],
    "namejp": "戦艦を主力とした水上打撃部隊を編成せよ！",
    "nameen": "Organize a Surface Task Force with Battleships Comprising the Main Force",
    "req": "Have 3 of any ship from either the Nagato, Ise, Fusou, or Yamato classes and 1 Light Cruiser in your main fleet",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span>"
  },
  "44": {
    "id": "A44",
    "classes": "quest composition",
    "requirements": [
      "A35",
      "B14"
    ],
    "unlocks": [
      "B33"
    ],
    "namejp": "「西村艦隊」を再編成せよ！",
    "nameen": "Reorganize the Nishimura Fleet",
    "req": "Have Fusou, Yamashiro, Mogami, Shigure, and Michishio in your main fleet",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span> 3x<span class='screw'>Screw</span>"
  },
  "45": {
    "id": "A45",
    "classes": "quest composition",
    "requirements": [
      "A9"
    ],
    "unlocks": [
      "Bw10",
      "F17"
    ],
    "namejp": "改修工廠を準備せよ！",
    "nameen": "Prepare the Improvement Arsenal",
    "req": "Have Akashi as flagship in your main fleet",
    "resrew": "100 / 0 / 100 / 0",
    "otherrew": "5x<span class='screw'>Screw</span>"
  },
  "46": {
    "id": "A46",
    "classes": "quest composition",
    "requirements": [
      "A23",
      "B14"
    ],
    "unlocks": [
      "Bm7"
    ],
    "namejp": "軽快な「水上反撃部隊」を編成せよ！",
    "nameen": "Organize a Light Surface Counterattack Fleet",
    "req": "Have Kasumi as flagship, Ashigara, 1 Light Cruiser, and 3 Destroyers in your main fleet",
    "resrew": "250 / 250 / 0 / 50",
    "otherrew": "2x<span class='bucket'>Bucket</span> 2x<span class='development-material'>Development Material</span>"
  },
  "47": {
    "id": "A47",
    "classes": "quest composition",
    "requirements": [
      "A32"
    ],
    "unlocks": [
      "B35",
      "B36"
    ],
    "namejp": "「第十一駆逐隊」を編成せよ！",
    "nameen": "Organize the 11th Destroyer Division",
    "req": "Have ONLY Fubuki, Shirayuki, Hatsuyuki, and Murakumo in your main fleet",
    "resrew": "110 / 110 / 110 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span>"
  },
  "48": {
    "id": "A48",
    "classes": "quest composition",
    "requirements": [
      "B35"
    ],
    "unlocks": [
      "B37"
    ],
    "namejp": "「第二一駆逐隊」を編成せよ！",
    "nameen": "Organize the 21st Destroyer Division",
    "req": "Have ONLY Hatsuharu, Hatsushimo, Nenohi, and Wakaba in your main fleet",
    "resrew": "210 / 210 / 0 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span>"
  },
  "49": {
    "id": "A49",
    "classes": "quest composition",
    "requirements": [
      "B38"
    ],
    "unlocks": [
      "B39"
    ],
    "namejp": "「第二二駆逐隊」を編成せよ！",
    "nameen": "Organize the 22nd Destroyer Division",
    "req": "Have ONLY Satsuki, Fumizuki, Nagatsuki, and 1 more Destroyer in your main fleet",
    "resrew": "220 / 220 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> 2x<span class='screw'>Screw</span>"
  },
  "50": {
    "id": "A50",
    "classes": "quest composition",
    "requirements": [
      "A34",
      "B16"
    ],
    "unlocks": [
      "A57",
      "C5"
    ],
    "namejp": "「三川艦隊」を新編、突入準備せよ！",
    "nameen": "Reorganize the Mikawa Fleet and Prepare to Rush in",
    "req": "Have Choukai Kai Ni as flagship and fill the rest of the fleet with any combination of Furutaka, Kako, Aoba, Kinugasa, Yuubari, or Tenryuu for a total of 6 ships.",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span>"
  },
  "51": {
    "id": "A51",
    "classes": "quest composition",
    "requirements": [
      "A18",
      "B42"
    ],
    "unlocks": [
      "B43"
    ],
    "namejp": "「第十八戦隊」を新編成せよ！",
    "nameen": "Reorganize the 18th Squadron",
    "req": "Have Tenryuu, Tatsuta, and at least two other ships in your fleet",
    "resrew": "180 / 180 / 0 / 180",
    "otherrew": "2x<span class='development-material'>Development Material</span>"
  },
  "52": {
    "id": "A52",
    "classes": "quest composition",
    "requirements": [
      "B16"
    ],
    "unlocks": [
      "B44"
    ],
    "namejp": "海上突入部隊を編成せよ！",
    "nameen": "Organize the Marine Rush Fleet",
    "req": "Have Hiei, Kirishima, Nagara, Akatsuki, Ikazuchi, and Inazuma in your main fleet",
    "resrew": "0 / 300 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> 2x<span class='development-material'>Development Material</span>"
  },
  "53": {
    "id": "A53",
    "classes": "quest composition",
    "requirements": [
      "B14"
    ],
    "unlocks": [
      "B45"
    ],
    "namejp": "新編「第六駆逐隊」を編成せよ！",
    "nameen": "Organize the New 6th Destroyer Division",
    "req": "Have only Akatsuki Kai Ni as flagship with Hibiki (Верный is ok), Ikazuchi, and Inazuma in your main fleet",
    "resrew": "150 / 150 / 0 / 0",
    "otherrew": "<span class='searchlight'>Searchlight</span>"
  },
  "54": {
    "id": "A54",
    "classes": "quest composition",
    "requirements": [
      "B21",
      "Bd1"
    ],
    "unlocks": [
      "B46"
    ],
    "namejp": "「第一水雷戦隊」北方突入準備！",
    "nameen": "1st Torpedo Squadron, Prepare for a Rush to the Northern Sea",
    "req": "Have Abukuma as flagship with Hibiki (Верный is ok), Hatsushimo, Wakaba, Samidare and Shimakaze in your main fleet",
    "resrew": "150 / 150 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='box-medium'>Medium Furniture Box</span>"
  },
  "55": {
    "id": "A55",
    "classes": "quest composition",
    "requirements": [
      "C7",
      "B46"
    ],
    "unlocks": [
      "B47"
    ],
    "namejp": "「第一水雷戦隊」北方再突入準備！",
    "nameen": "1st Torpedo Squadron, Prepare for Another Rush to the Northern Sea",
    "req": "Have Abukuma Kai Ni as flagship with Hibiki (Верный is ok), Yuugumo, Naganami, Akigumo and Shimakaze in your main fleet",
    "resrew": "200 / 200 / 0 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='box-big'>Big Furniture Box</span>"
  },
  "56": {
    "id": "A56",
    "classes": "quest composition",
    "requirements": [
      "A23",
      "Bm6"
    ],
    "unlocks": [
      "B50"
    ],
    "namejp": "「第五航空戦隊」を再編成せよ！",
    "nameen": "Reorganize the 5th Carrier Division",
    "req": "Have Shoukaku, Zuikaku, Oboro and Akigumo in your main fleet",
    "resrew": "300 / 0 / 0 / 300",
    "otherrew": "3x<span class='development-material'>Development Material</span>"
  },
  "57": {
    "id": "A57",
    "classes": "quest composition",
    "requirements": [
      "A50",
      "B34"
    ],
    "unlocks": [
      "B51"
    ],
    "namejp": "新編「第二一戦隊」出撃準備！",
    "nameen": "Prepare the New 21st Squadron for Sortie",
    "req": "Have Nachi Kai Ni, Ashigara Kai Ni, Tama and Kiso in your main fleet",
    "resrew": "150 / 150 / 150 / 0",
    "otherrew": "2x<span class='development-material'>Development Material</span> 2x<span class='screw'>Screw</span>"
  },
  "58": {
    "id": "A58",
    "classes": "quest composition",
    "requirements": [
      "Bd2"
    ],
    "unlocks": [
      "B52"
    ],
    "namejp": "「第十六戦隊(第一次)」を編成せよ！",
    "nameen": "Organize the 16th Squadron (First Generation)",
    "req": "Have Ashigara as flagship with Kuma and Nagara in your main fleet",
    "resrew": "150 / 150 / 150 / 0",
    "otherrew": "2x<span class='development-material'>Development Material</span> 2x<span class='bucket'>Bucket</span>"
  },
  "59": {
    "id": "A59",
    "classes": "quest composition",
    "requirements": [
      "Bm6",
      "F21"
    ],
    "unlocks": [
      "B53",
      "F24"
    ],
    "namejp": "「第三航空戦隊」を編成せよ！",
    "nameen": "Organize the 3rd Carrier Division",
    "req": "Have Zuikaku Kai as flagship, Zuihou, Chitose Carrier and Chiyoda Carrier (both as CVL, not AV) in your main fleet",
    "resrew": "200 / 200 / 0 / 200",
    "otherrew": "2x<span class='development-material'>Development Material</span> <span class='skilled-crew'>Skilled Crew Member</span>"
  },
  "60": {
    "id": "A60",
    "classes": "quest composition",
    "requirements": [
      "B53"
    ],
    "unlocks": [
      "A61"
    ],
    "namejp": "「第四航空戦隊」を編成せよ！",
    "nameen": "Organize the 4th Carrier Division",
    "req": "Have Ise Kai and Hyuuga Kai in your main fleet",
    "resrew": "0 / 200 / 0 / 200",
    "otherrew": "<span class='screw'>Screw</span> <span class='zuiun-634'>Zuiun (634 Air Group)</span>"
  },
  "61": {
    "id": "A61",
    "classes": "quest composition",
    "requirements": [
      "Bm7",
      "A60"
    ],
    "unlocks": [
      "B54"
    ],
    "namejp": "「小沢艦隊」を編成せよ！",
    "nameen": "Organize Ozawa's Fleet",
    "req": "Have Zuikaku Kai as flagship, Zuihou Kai, Chitose Carrier, Chiyoda Carrier, Ise Kai and Hyuuga Kai in your main fleet",
    "resrew": "300 / 0 / 0 / 300",
    "otherrew": "2x<span class='development-material'>Development Material</span> <span class='repair-team'>Repair Team</span>"
  },
  "62": {
    "id": "A62",
    "classes": "quest composition",
    "requirements": [
      "F29"
    ],
    "unlocks": [
      "F30"
    ],
    "namejp": "新航空戦隊を編成せよ！",
    "nameen": "Organize the New Carrier Division",
    "req": "Have Zuikaku Kai Ni, Shoukaku Kai Ni and two Destroyers in your fleet",
    "resrew": "0 / 300 / 300 / 300",
    "otherrew": "<span class='skilled-crew'>Skilled Crew Member</span> <span class='irako'>Irako</span>"
  },
  "63": {
    "id": "A63",
    "classes": "quest composition",
    "requirements": [
      "B52"
    ],
    "unlocks": [
      "B55"
    ],
    "namejp": "「第十六戦隊(第二次)」を編成せよ！",
    "nameen": "Organize the 16th Squadron (Second Generation)",
    "req": "Have Natori as flagship, Isuzu and Kinu in your fleet",
    "resrew": "160 / 160 / 160 / 0",
    "otherrew": "2x<span class='development-material'>Development Material</span> 2x<span class='bucket'>Bucket</span>"
  },
  "64": {
    "id": "A64",
    "classes": "quest composition",
    "requirements": [
      "B50",
      "B55"
    ],
    "unlocks": [
      "B56"
    ],
    "namejp": "「新編成航空戦隊」を編成せよ！",
    "nameen": "Organize the New Carrier Division",
    "req": "Have 2 Aircraft Carrier / Light Aircraft Carrier, 2 Aviation Battleships or Aviation Cruisers and 2 Destroyers in your fleet",
    "resrew": "0 / 200 / 0 / 200",
    "otherrew": "2x<span class='screw'>Screw</span> 2x<span class='development-material'>Development Material</span>"
  },
  "65": {
    "id": "A65",
    "classes": "quest composition",
    "requirements": [
      "B56"
    ],
    "unlocks": [
      "B57"
    ],
    "namejp": "精強な「水上反撃部隊」を再編成せよ！",
    "nameen": "Reorganize the Strengthened Surface Counterattack Fleet",
    "req": "Have Kasumi as flagship, Ashigara, Ooyodo, Asashimo and Kiyoshimo in your fleet",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span>"
  },
  "66": {
    "id": "A66",
    "classes": "quest composition",
    "requirements": [
      "Bd2",
      "B55"
    ],
    "unlocks": [
      "B60",
      "B72"
    ],
    "namejp": "「第三十一戦隊(第一次)」を編成せよ！",
    "nameen": "Organize the 31st Division (First Generation)",
    "req": "Have Isuzu Kai Ni as flagship, Satsuki Kai Ni and Uzuki Kai in your fleet",
    "resrew": "310 / 310 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='irako'>Irako</span>"
  },
  "67": {
    "id": "A67",
    "classes": "quest composition",
    "requirements": [
      "Bd2"
    ],
    "unlocks": [
      "B61"
    ],
    "namejp": "「第二七駆逐隊」を編成せよ！",
    "nameen": "Organize the 27th Destroyer Division",
    "req": "Have ONLY Shiratsuyu Kai, Shigure, Harusame and Samidare in your fleet, with Shiratsuyu set as the flagship.",
    "resrew": "0 / 270 / 270 / 0",
    "otherrew": "2x<span class='development-material'>Development Material</span> 2x<span class='bucket'>Bucket</span>"
  },
  "68": {
    "id": "A68",
    "classes": "quest composition",
    "requirements": [
      "B53",
      "Bd1"
    ],
    "unlocks": [
      "B68"
    ],
    "namejp": "強行高速輸送部隊を編成せよ！",
    "nameen": "Organise a Forced High-speed Transport Fleet!",
    "req": "Have Sendai Kai Ni as flagship, Kawakaze Kai Ni, Shigure Kai Ni and two other destroyers in your fleet.",
    "resrew": "100 / 100 / 100 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span>"
  },
  "69": {
    "id": "A69",
    "classes": "quest composition",
    "requirements": [
      "A9"
    ],
    "unlocks": [
      "B70"
    ],
    "namejp": "新編「水雷戦隊」を含む艦隊を再編成せよ！",
    "nameen": "Organise a New Torpedo Squadron!",
    "req": "Have a CL/CLT/CT as the flagship and 4 DD in any of your fleets.",
    "resrew": "200 / 200 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span>"
  },
  "70": {
    "id": "A70",
    "classes": "quest composition",
    "requirements": [
      "B20"
    ],
    "unlocks": [
      "B73"
    ],
    "namejp": "新編「第八駆逐隊」を再編成せよ！",
    "nameen": "Reorganise the New 8th Destroyer Division!",
    "req": "Have  ONLY Asashio Kai Ni/Asashio Kai Ni D as flagship, Michishio, Ooshio and Arashio in your fleet. It doesn't have to be the main fleet.",
    "resrew": "200 / 200 / 0 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span>"
  },
  "71": {
    "id": "A71",
    "classes": "quest composition",
    "requirements": [
      "B72",
      "Bw5"
    ],
    "unlocks": [
      "B74"
    ],
    "namejp": "精鋭！八駆第一小隊！",
    "nameen": "Elite! DesDiv 8, 1st platoon!",
    "req": "Have Asashio Kai Ni D and Ooshio Kai Ni in your fleet.",
    "resrew": "250 / 250 / 0 / 0",
    "otherrew": "3x<span class='screw'>Screw</span> <span class='irako'>Irako</span>"
  },
  "72": {
    "id": "A72",
    "classes": "quest composition",
    "requirements": [
      "B21",
      "Bd1"
    ],
    "unlocks": [
      "B78"
    ],
    "namejp": "「第十九駆逐隊」を編成せよ！",
    "nameen": "Organise the 19th Destroyer Division!",
    "req": "Have Isonami, Uranami, Ayanami and Shikinami in your fleet.",
    "resrew": "190 / 190 / 190 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='combat-ration'>Combat Ration</span>"
  },
  "73": {
    "id": "A73",
    "classes": "quest composition",
    "requirements": [
      "B55"
    ],
    "unlocks": [
      "B84"
    ],
    "namejp": "「第十六戦隊(第三次)」を編成せよ！",
    "nameen": "Form the 16th Cruiser Division (Third Generation)!",
    "req": "Have Kinu, Aoba, Kitakami and Ooi in your fleet.",
    "resrew": "200 / 200 / 200 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> 2x<span class='development-material'>Development Material</span>"
  },
  "74": {
    "id": "A74",
    "classes": "quest composition",
    "requirements": [
      "B84"
    ],
    "unlocks": [
      "B85"
    ],
    "namejp": "精鋭「第十六戦隊」を再編成せよ！",
    "nameen": "Reorganise the Elite 16th Cruiser Division!",
    "req": "Have Kinu Kai Ni as flagship, then put five of the following ships into your fleet as escort:Kitakami Kai Ni, Ooi Kai Ni, Kuma Kai, Aoba Kai, Uranami Kai, Shikinami Kai.",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='repair-team'>Repair Team</span>"
  },
  "75": {
    "id": "B1",
    "classes": "quest sortie",
    "requirements": "",
    "unlocks": "",
    "namejp": "はじめての「出撃」！",
    "nameen": "The First Sortie",
    "req": "Sortie your main fleet",
    "resrew": "20 / 20 / 0 / 0",
    "otherrew": "<span class='bucket'>Bucket</span>"
  },
  "76": {
    "id": "B2",
    "classes": "quest sortie",
    "requirements": "",
    "unlocks": [
      "E1",
      "E2"
    ],
    "namejp": "鎮守府正面海域を護れ！",
    "nameen": "Guard the Sea in Front of the Naval Base",
    "req": "Sortie to World 1-1 and clear the stage",
    "resrew": "30 / 30 / 30 / 0",
    "otherrew": "<span class='bucket'>Bucket</span>"
  },
  "77": {
    "id": "B3",
    "classes": "quest sortie",
    "requirements": [
      "A6"
    ],
    "unlocks": [
      "A11"
    ],
    "namejp": "第2艦隊、出撃せよ！",
    "nameen": "Sortie The 2nd Fleet",
    "req": "Sortie your second fleet",
    "resrew": "0 / 0 / 200 / 200",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "78": {
    "id": "B4",
    "classes": "quest sortie",
    "requirements": "",
    "unlocks": [
      "Bd1"
    ],
    "namejp": "南西諸島沖に出撃せよ！",
    "nameen": "Sortie to World 1-2 and clear the stage",
    "req": "Sortie to World 1-2 , defeat the boss and clear the stage",
    "resrew": "40 / 40 / 0 / 0",
    "otherrew": "<span class='bucket'>Bucket</span>"
  },
  "79": {
    "id": "B5",
    "classes": "quest sortie",
    "requirements": "",
    "unlocks": [
      "B6"
    ],
    "namejp": "接近する「敵前衛艦隊」を迎撃せよ！",
    "nameen": "Intercept the Approaching Enemy Vanguard Fleet",
    "req": "Sortie to World 1-2 AGAIN and clear the stage",
    "resrew": "50 / 0 / 50 / 0",
    "otherrew": "<span class='development-material'>Development Material</span> <span class='miyuki'>Miyuki</span>"
  },
  "80": {
    "id": "B6",
    "classes": "quest sortie",
    "requirements": [
      "B5"
    ],
    "unlocks": [
      "B7",
      "B30"
    ],
    "namejp": "「水雷戦隊」で出撃せよ！",
    "nameen": "Sortie a Torpedo Squadron",
    "req": "Sortie a Light Cruiser as flagship and 3 Destroyers",
    "resrew": "60 / 60 / 0 / 60",
    "otherrew": "<span class='tatsuta'>Tatsuta</span>"
  },
  "81": {
    "id": "B7",
    "classes": "quest sortie",
    "requirements": [
      "B6"
    ],
    "unlocks": [
      "B8",
      "D15"
    ],
    "namejp": "「重巡洋艦」を出撃させよ！",
    "nameen": "Sortie a Heavy Cruiser",
    "req": "Sortie a fleet with a Heavy Cruiser as flagship",
    "resrew": "70 / 0 / 70 / 0",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "82": {
    "id": "B8",
    "classes": "quest sortie",
    "requirements": [
      "B7"
    ],
    "unlocks": [
      "B9",
      "B88"
    ],
    "namejp": "「戦艦」を出撃させよ！",
    "nameen": "Sortie a Battleship",
    "req": "Sortie a fleet with a Battleship as flagship. Aviation Battleships (BBVs) don't count",
    "resrew": "0 / 150 / 150 / 0",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "83": {
    "id": "B9",
    "classes": "quest sortie",
    "requirements": [
      "B8"
    ],
    "unlocks": "",
    "namejp": "「空母機動部隊」出撃せよ！",
    "nameen": "Sortie a Carrier Task Force",
    "req": "Sortie a Light or Standard Carrier flagship and 5 Light Cruisers, Destroyers, or Seaplane Tenders",
    "resrew": "200 / 0 / 0 / 300",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "84": {
    "id": "B10",
    "classes": "quest sortie",
    "requirements": [
      "A11"
    ],
    "unlocks": "",
    "namejp": "敵空母を撃沈せよ！",
    "nameen": "Sink an Enemy Carrier",
    "req": "Sink an enemy Aircraft Carrier / Light Aircraft Carrier.",
    "resrew": "0 / 0 / 0 / 100",
    "otherrew": "<span class='akagi'>Akagi</span>"
  },
  "85": {
    "id": "B11",
    "classes": "quest sortie",
    "requirements": [
      "A20"
    ],
    "unlocks": "",
    "namejp": "「三川艦隊」出撃せよ！",
    "nameen": "Sortie the Mikawa Fleet",
    "req": "Sortie Choukai, Aoba, Kako, Furutaka, and Tenryuu, with one additional fast ship to any map",
    "resrew": "0 / 200 / 0 / 0",
    "otherrew": "<span class='repair-team'>Repair Team</span>"
  },
  "86": {
    "id": "B12",
    "classes": "quest sortie",
    "requirements": [
      "A10",
      "Bw3"
    ],
    "unlocks": "",
    "namejp": "「第六駆逐隊」出撃せよ！",
    "nameen": "Sortie the 6th Destroyer Division",
    "req": "Sortie ONLY Akatsuki, Hibiki, Ikazuchi, and Inazuma to any map",
    "resrew": "200 / 0 / 0 / 0",
    "otherrew": "<span class='bucket'>Bucket</span>"
  },
  "87": {
    "id": "B13",
    "classes": "quest sortie",
    "requirements": [
      "A21"
    ],
    "unlocks": "",
    "namejp": "「第四戦隊」出撃せよ！",
    "nameen": "Sortie the 4th Cruiser Division",
    "req": "Sortie Takao, Atago, Maya, Choukai, and 2 additional ships to World 2-2 and defeat the boss",
    "resrew": "150 / 100 / 150 / 100",
    "otherrew": "<span class='bucket'>Bucket</span>"
  },
  "88": {
    "id": "B14",
    "classes": "quest sortie",
    "requirements": [
      "A22"
    ],
    "unlocks": [
      "A44",
      "A46",
      "A53"
    ],
    "namejp": "「西村艦隊」出撃せよ！",
    "nameen": "Sortie the Nishimura Fleet",
    "req": "Sortie Fusou, Yamashiro, Mogami, Shigure, and 2 additional ships to World 2-3 and defeat the boss",
    "resrew": "400 / 0 / 400 / 0",
    "otherrew": "<span class='box-small'>Small Furniture Box</span> 2x<span class='bucket'>Bucket</span>"
  },
  "89": {
    "id": "B15",
    "classes": "quest sortie",
    "requirements": [
      "A23"
    ],
    "unlocks": "",
    "namejp": "「第五航空戦隊」出撃せよ！",
    "nameen": "Sortie the 5th Carrier Division",
    "req": "Sortie Shoukaku, Zuikaku, and 4 additional ships to World 3-1 and defeat the boss",
    "resrew": "200 / 200 / 0 / 700",
    "otherrew": "<span class='box-medium'>Medium Furniture Box</span> 2x<span class='bucket'>Bucket</span>"
  },
  "90": {
    "id": "B16",
    "classes": "quest sortie",
    "requirements": [
      "A24"
    ],
    "unlocks": [
      "A50",
      "A52"
    ],
    "namejp": "新「三川艦隊」出撃せよ！",
    "nameen": "Sortie the New Mikawa Fleet",
    "req": "Sortie Choukai, Furutaka, Kako, Aoba, Kinugasa, and Tenryuu to World 2-3 and defeat the boss",
    "resrew": "100 / 150 / 100 / 150",
    "otherrew": "<span class='repair-team'>Repair Team</span>"
  },
  "91": {
    "id": "B17",
    "classes": "quest sortie",
    "requirements": [
      "A25"
    ],
    "unlocks": "",
    "namejp": "「潜水艦隊」出撃せよ！?",
    "nameen": "Sortie a Submarine Fleet",
    "req": "Sortie 2 Submarines and 4 additional ships to World 2-3 and defeat the boss",
    "resrew": "150 / 0 / 300 / 0",
    "otherrew": "<span class='fairy'>Furniture Fairy</span>"
  },
  "92": {
    "id": "B18",
    "classes": "quest sortie",
    "requirements": [
      "A26"
    ],
    "unlocks": "",
    "namejp": "「航空水上打撃艦隊」出撃せよ！",
    "nameen": "Sortie an Aviation Surface Attack Fleet",
    "req": "Sortie 2 Aviation Cruisers, 2 Aviation Battleships, and 2 additional ships to World 4-2 and defeat the boss",
    "resrew": "0 / 150 / 0 / 300",
    "otherrew": "<span class='mamiya'>Mamiya</span>"
  },
  "93": {
    "id": "B19",
    "classes": "quest sortie",
    "requirements": [
      "A28"
    ],
    "unlocks": [
      "B34",
      "Bq1"
    ],
    "namejp": "「第六戦隊」出撃せよ！",
    "nameen": "Sortie the 6th Cruiser Division",
    "req": "Sortie Aoba, Furutaka, Kako, Kinugasa, and 2 additional ships to World 2-3 and obtain an S-Rank at the boss",
    "resrew": "0 / 150 / 0 / 300",
    "otherrew": "<span class='box-medium'>Medium Furniture Box</span> <span class='repair-team'>Repair Team</span>"
  },
  "94": {
    "id": "B20",
    "classes": "quest sortie",
    "requirements": [
      "A31"
    ],
    "unlocks": [
      "A32",
      "A70",
      "B65",
      "Bm6",
      "D10"
    ],
    "namejp": "「第八駆逐隊」出撃せよ！",
    "nameen": "Sortie the 8th Destroyer Division",
    "req": "Sortie Arashio, Asashio, Michishio, Ooshio, and 2 additional ships to World 2-3 and defeat the boss",
    "resrew": "0 / 100 / 400 / 0",
    "otherrew": "<span class='box-medium'>Medium Furniture Box</span> <span class='development-material'>Development Material</span>"
  },
  "95": {
    "id": "B21",
    "classes": "quest sortie",
    "requirements": [
      "A32"
    ],
    "unlocks": [
      "Bm5",
      "A54"
    ],
    "namejp": "「第十八駆逐隊」出撃せよ！",
    "nameen": "Sortie the 18th Destroyer Division",
    "req": "Sortie Arare, Kagerou, Kasumi, Shiranui, and 2 additional ships to World 3-1 and defeat the boss",
    "resrew": "0 / 100 / 0 / 400",
    "otherrew": "<span class='box-big'>Big Furniture Box</span> 2x<span class='development-material'>Development Material</span>"
  },
  "96": {
    "id": "B22",
    "classes": "quest sortie",
    "requirements": [
      "A33"
    ],
    "unlocks": "",
    "namejp": "「第三十駆逐隊(第一次)」出撃せよ！",
    "nameen": "Sortie the 30th Destroyer Division (First Generation)",
    "req": "Sortie Mutsuki, Kisaragi, Mochizuki, Yayoi, and 2 additional Destroyers (or Destroyer and Light Cruiser flagship) to World 3-2 and obtain a C-Rank or better at the boss",
    "resrew": "100 / 100 / 100 / 500",
    "otherrew": "<span class='mamiya'>Mamiya</span>"
  },
  "97": {
    "id": "B23",
    "classes": "quest sortie",
    "requirements": [
      "D10"
    ],
    "unlocks": "",
    "namejp": "「航空戦艦」抜錨せよ！",
    "nameen": "Sortie an Aviation Battleship",
    "req": "Sortie a fleet with at least 2 Aviation Battleships to World 4-4 and defeat the boss",
    "resrew": "0 / 300 / 300 / 900",
    "otherrew": "<span class='box-big'>Big Furniture Box</span> 3x<span class='bucket'>Bucket</span>"
  },
  "98": {
    "id": "B24",
    "classes": "quest sortie",
    "requirements": [
      "A34"
    ],
    "unlocks": [
      "A35",
      "B27"
    ],
    "namejp": "「第三十駆逐隊」対潜哨戒！",
    "nameen": "The 30th Destroyer Division Anti-Submarine Patrol",
    "req": "Sortie Mutsuki, Mochizuki, Uzuki, and Yayoi to World 1-5 and obtain a C-Rank or better at the boss",
    "resrew": "330 / 330 / 330 / 0",
    "otherrew": "<span class='fairy'>Furniture Fairy</span>"
  },
  "99": {
    "id": "B25",
    "classes": "quest sortie",
    "requirements": [
      "A36"
    ],
    "unlocks": [
      "A39",
      "F13",
      "F14"
    ],
    "namejp": "新編「第二航空戦隊」出撃せよ！",
    "nameen": "Sortie the New 2nd Carrier Division",
    "req": "Sortie Hiryuu Kai Ni as flagship, Souryuu (Kai or Kai-2 is ok), and 2 Destroyers (you may add additional ships) to World 5-2 and obtain an S-Rank at the boss",
    "resrew": "0 / 500 / 0 / 500",
    "otherrew": "<span class='mamiya'>Mamiya</span>"
  },
  "100": {
    "id": "B26",
    "classes": "quest sortie",
    "requirements": [
      "A39"
    ],
    "unlocks": "",
    "namejp": "精鋭「第二航空戦隊」抜錨せよ！",
    "nameen": "Sortie the Elite 2nd Carrier Division",
    "req": "Sortie Souryuu Kai Ni as flagship, Hiryuu Kai Ni, 2 Destroyers, and 2 additional ship to World 4-3 and obtain an S-Rank at the boss",
    "resrew": "500 / 0 / 500 / 0",
    "otherrew": "<span class='fairy'>Furniture Fairy</span>"
  },
  "101": {
    "id": "B27",
    "classes": "quest sortie",
    "requirements": [
      "B24"
    ],
    "unlocks": "",
    "namejp": "戦艦「榛名」出撃せよ！",
    "nameen": "Sortie the Battleship: \"Haruna\"",
    "req": "Sortie Haruna Kai Ni and 5 additional ships to World 5-1 and obtain an S-Rank at the boss",
    "resrew": "100 / 0 / 0 / 0",
    "otherrew": "<span class='prototype-356'>Prototype 35.6cm Triple Gun Mount</span>"
  },
  "102": {
    "id": "B28",
    "classes": "quest sortie",
    "requirements": [
      "A41"
    ],
    "unlocks": [
      "F15"
    ],
    "namejp": "「第六〇一航空隊」出撃せよ！",
    "nameen": "Sortie the 601st Naval Air Group",
    "req": "Sortie Unryuu Kai and 5 additional ships to World 5-2 and obtain an S-Rank at the boss",
    "resrew": "0 / 300 / 0 / 300",
    "otherrew": "<span class='scamp'>SCAMP</span>"
  },
  "103": {
    "id": "B29",
    "classes": "quest sortie",
    "requirements": [
      "A5"
    ],
    "unlocks": "",
    "namejp": "「軽空母」戦隊、出撃せよ！",
    "nameen": "Sortie a Light Carrier Squadron",
    "req": "Sortie 1-2 Light Carriers, 1 Light Cruiser, and 3-4 Destroyers to World 2-1 and obtain an S-Rank at the boss",
    "resrew": "0 / 300 / 0 / 300",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='repair-team'>Repair Team</span>"
  },
  "104": {
    "id": "B30",
    "classes": "quest sortie",
    "requirements": [
      "B6"
    ],
    "unlocks": [
      "Bm2"
    ],
    "namejp": "「水雷戦隊」バシー島沖緊急展開",
    "nameen": "The Torpedo Squadron Bashi Island Emergency Deployment",
    "req": "Sortie 1-2 Light Cruisers, which one of must be the flagship, and 4-5 Destroyers to World 2-2 and obtain an S-Rank at the boss",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "<span class='box-big'>Big Furniture Box</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "105": {
    "id": "B31",
    "classes": "quest sortie",
    "requirements": [
      "A42"
    ],
    "unlocks": [
      "A43"
    ],
    "namejp": "「第二戦隊」抜錨！",
    "nameen": "Sortie the 2nd Squadron",
    "req": "Sortie Fusou, Mutsu, Nagato, Yamashiro, and 2 additional ships to World 4-2 and obtain two S-Rank victories at the boss",
    "resrew": "0 / 400 / 0 / 0",
    "otherrew": "<span class='type-1-shell'>Type 1 AP Shell</span>"
  },
  "106": {
    "id": "B32",
    "classes": "quest sortie",
    "requirements": [
      "Bm4"
    ],
    "unlocks": [
      "B49"
    ],
    "namejp": "「戦艦部隊」北方海域に突入せよ！",
    "nameen": "Rush the Battleship Force to the Northern Sea",
    "req": "Sortie 2 Battleships (Aviation Battleships do not count), 1 Light Carrier, and 3 additional ships to World 3-5 and obtain an S-Rank at the boss",
    "resrew": "0 / 500 / 0 / 250",
    "otherrew": "2x<span class='development-material'>Development Material</span> <span class='type-1-shell'>Type 1 AP Shell</span>"
  },
  "107": {
    "id": "B33",
    "classes": "quest sortie",
    "requirements": [
      "A44"
    ],
    "unlocks": "",
    "namejp": "「西村艦隊」南方海域へ進出せよ！",
    "nameen": "Advance the Nishimura Fleet to the Southern Sea",
    "req": "Sortie Fusou, Yamashiro, Mogami, Shigure, Michishio, and 1 additional ship to World 5-1, and obtain an S-Rank at the boss",
    "resrew": "0 / 0 / 500 / 300",
    "otherrew": "5x<span class='screw'>Screw</span> <span class='medal'>Medal</span>"
  },
  "108": {
    "id": "B34",
    "classes": "quest sortie",
    "requirements": [
      "B19"
    ],
    "unlocks": "",
    "namejp": "「第六戦隊」南西海域へ出撃せよ！",
    "nameen": "Sortie the 6th Squadron to the Southwestern Sea",
    "req": "Sortie Furutaka, Kako, Aoba, Kinugasa and 2 additional ships to World 2-5 and obtain an S-Rank at the boss",
    "resrew": "0 / 400 / 0 / 400",
    "otherrew": "<span class='box-big'>Big Furniture Box</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "109": {
    "id": "B35",
    "classes": "quest sortie",
    "requirements": [
      "A47"
    ],
    "unlocks": [
      "A48"
    ],
    "namejp": "「第十一駆逐隊」 出撃せよ！",
    "nameen": "Sortie the 11th Destroyer Division",
    "req": "Sortie Fubuki, Shirayuki, Hatsuyuki, Murakumo, and 2 additional ships to World 2-3 and defeat the boss",
    "resrew": "0 / 300 / 300 / 0",
    "otherrew": "<span class='mamiya'>Mamiya</span>"
  },
  "110": {
    "id": "B36",
    "classes": "quest sortie",
    "requirements": [
      "A47"
    ],
    "unlocks": "",
    "namejp": "「第十一駆逐隊」対潜哨戒!",
    "nameen": "The 11th Destroyer Division Anti-Submarine Patrol",
    "req": "Sortie Fubuki, Shirayuki, Hatsuyuki, and Murakumo to World 1-5 and obtain at least a C or above Rank at the boss",
    "resrew": "400 / 0 / 0 / 200",
    "otherrew": "2x<span class='development-material'>Development Material</span> <span class='type-3-sonar'>Type 3 Active Sonar</span>"
  },
  "111": {
    "id": "B37",
    "classes": "quest sortie",
    "requirements": [
      "A48"
    ],
    "unlocks": [
      "B38"
    ],
    "namejp": "「第二一駆逐隊」出撃せよ！",
    "nameen": "Sortie the 21st Destroyer Division",
    "req": "Sortie Hatsuharu, Nenohi, Wakaba, Hatsushimo, and 2 additional ships to World 3-1 and obtain an S-Rank at the boss",
    "resrew": "300 / 300 / 300 / 0",
    "otherrew": "<span class='present'>Present Box</span>"
  },
  "112": {
    "id": "B38",
    "classes": "quest sortie",
    "requirements": [
      "B37",
      "Bm1"
    ],
    "unlocks": [
      "A49"
    ],
    "namejp": "「那智戦隊」抜錨せよ！",
    "nameen": "Sortie the Nachi Squadron",
    "req": "Sortie Nachi as flagship, Hatsushimo, Kasumi, Ushio, Akebono, and 1 other ship to World 2-2 and obtain an S-Rank at the boss",
    "resrew": "500 / 300 / 0 / 0",
    "otherrew": "<span class='box-big'>Big Furniture Box</span> 2x<span class='screw'>Screw</span>"
  },
  "113": {
    "id": "B39",
    "classes": "quest sortie",
    "requirements": [
      "A49"
    ],
    "unlocks": "",
    "namejp": "「第二二駆逐隊」出撃せよ！",
    "nameen": "Sortie the 22nd Destroyer Division",
    "req": "Sortie Satsuki, Fumizuki, Nagatsuki, 1 other Destroyer, and 2 other additional ships to World 1-4 and obtain an S-Rank at the boss",
    "resrew": "0 / 0 / 0 / 400",
    "otherrew": "<span class='box-medium'>Medium Furniture Box</span> <span class='irako'>Irako</span>"
  },
  "114": {
    "id": "B40",
    "classes": "quest sortie",
    "requirements": [
      "D15"
    ],
    "unlocks": [
      "D16"
    ],
    "namejp": "「改装防空重巡」出撃せよ！",
    "nameen": "Sortie the Remodeled Anti-Air Heavy Cruiser",
    "req": "Sortie Maya (Kai or Kai-2), 1 Light Cruiser, and 2 Destroyers (you may add additional ships) to World 2-3 and obtain an S-Rank at the boss",
    "resrew": "300 / 0 / 300 / 0",
    "otherrew": "<span class='triple-25-aa'>25mm Triple Autocannon Mount</span> <span class='type-3-shell'>Type 3 Shell</span>"
  },
  "115": {
    "id": "B41",
    "classes": "quest sortie",
    "requirements": [
      "C5"
    ],
    "unlocks": [
      "B80"
    ],
    "namejp": "新編「三川艦隊」ソロモン方面へ！",
    "nameen": "Sortie the New Mikawa Fleet to the Solomon Waters",
    "req": "Sortie Choukai Kai Ni as flagship and any combination of Furutaka, Kako, Aoba, Kinugasa, Yuubari, or Tenryuu to World 5-1 and obtain an S-Rank at the boss (One of them will have to be left out)",
    "resrew": "480 / 480 / 0 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span> 3x<span class='screw'>Screw</span>"
  },
  "116": {
    "id": "B42",
    "classes": "quest sortie",
    "requirements": [
      "A10"
    ],
    "unlocks": [
      "A51",
      "B45"
    ],
    "namejp": "「第六駆逐隊」対潜哨戒なのです！",
    "nameen": "The 6th Destroyer Division Anti-Submarine Patrol nanodesu",
    "req": "Sortie Akatsuki, Hibiki (Верный is ok), Ikazuchi, and Inazuma to World 1-5 and obtain a C-Rank or better at the boss",
    "resrew": "200 / 200 / 200 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span> <span class='type-93-sonar'>Type 93 Passive Sonar</span>"
  },
  "117": {
    "id": "B43",
    "classes": "quest sortie",
    "requirements": [
      "A51"
    ],
    "unlocks": "",
    "namejp": "抜錨！「第十八戦隊」",
    "nameen": "Set Sail! The 18th Squadron",
    "req": "Sortie Tenryuu, Tatsuta, and at least two other ships to World 2-3 and obtain an S-Rank at the boss",
    "resrew": "350 / 0 / 0 / 250",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "118": {
    "id": "B44",
    "classes": "quest sortie",
    "requirements": [
      "A52",
      "Bw9"
    ],
    "unlocks": "",
    "namejp": "海上突入部隊、進発せよ！",
    "nameen": "Deploy the Marine Rush Fleet",
    "req": "Sortie Hiei, Kirishima, Nagara, Akatsuki, Ikazuchi, and Inazuma to World 5-1 and obtain an S-Rank at the boss",
    "resrew": "500 / 0 / 500 / 0",
    "otherrew": "5x<span class='development-material'>Development Material</span> 2x<span class='screw'>Screw</span>"
  },
  "119": {
    "id": "B45",
    "classes": "quest sortie",
    "requirements": [
      "A53",
      "B42"
    ],
    "unlocks": "",
    "namejp": "「第六駆逐隊」対潜哨戒を徹底なのです！",
    "nameen": "A Thorough 6th Destroyer Division Anti-Submarine Patrol nanodesu",
    "req": "Sortie Akatsuki Kai Ni, Hibiki (Верный is ok), Ikazuchi, and Inazuma to World 1-5 and obtain an A-Rank or better at the boss",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "2x<span class='screw'>Screw</span> <span class='type-93-sonar'>Type 93 Passive Sonar</span>"
  },
  "120": {
    "id": "B46",
    "classes": "quest sortie",
    "requirements": [
      "A54"
    ],
    "unlocks": [
      "C7",
      "F33"
    ],
    "namejp": "「第一水雷戦隊」ケ号作戦、突入せよ！",
    "nameen": "Rush the 1st Torpedo Squadron to Operation KE",
    "req": "Sortie  Abukuma as flagship with Hibiki (Верный is ok), Hatsushimo, Wakaba, Samidare and Shimakaze to World 3-2 and obtain a victory (B-Rank or better) at the boss",
    "resrew": "0 / 300 / 0 / 400",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "121": {
    "id": "B47",
    "classes": "quest sortie",
    "requirements": [
      "A55"
    ],
    "unlocks": "",
    "namejp": "「第一水雷戦隊」北方ケ号作戦、再突入！",
    "nameen": "Rush the 1st Torpedo Squadron to Operation KE Again",
    "req": "Sortie  Abukuma Kai Ni as flagship with Hibiki (Верный is ok), Yuugumo, Naganami, Akigumo and Shimakaze to World 3-2 and obtain an S-Rank at the boss",
    "resrew": "0 / 400 / 0 / 500",
    "otherrew": "4x<span class='development-material'>Development Material</span> 4x<span class='screw'>Screw</span>"
  },
  "122": {
    "id": "B48",
    "classes": "quest sortie",
    "requirements": [
      "Bd2"
    ],
    "unlocks": "",
    "namejp": "鎮守府正面の対潜哨戒を強化せよ！",
    "nameen": "Strengthen the Anti-Submarine Patrol in Front of the Naval Base!",
    "req": "Sortie to World 1-5 and obtain four A-Ranks (or better) at the boss.",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "<span class='fairy'>Furniture Fairy</span>"
  },
  "123": {
    "id": "B49",
    "classes": "quest sortie",
    "requirements": [
      "Bd8",
      "B32"
    ],
    "unlocks": "",
    "namejp": "「空母機動部隊」北方海域に進出せよ！",
    "nameen": "\"Carrier Task Force\", advance to the Northern Sea!",
    "req": "Sortie a fleet with an aircraft carrier as flagship to World 3-5 and obtain an S-Rank at the boss",
    "resrew": "500 / 0 / 500 / 0",
    "otherrew": "3x<span class='screw'>Screw</span> 2x<span class='combat-ration'>Combat Ration</span>"
  },
  "124": {
    "id": "B50",
    "classes": "quest sortie",
    "requirements": [
      "A56"
    ],
    "unlocks": [
      "A64",
      "F19",
      "F20",
      "D19"
    ],
    "namejp": "「第五航空戦隊」珊瑚諸島沖に出撃せよ！",
    "nameen": "Sortie the 5th Carrier Division to the Southern Sea Coral Islands",
    "req": "Sortie Shoukaku, Zuikaku, Oboro, Akigumo and up to 2 additional ships to World 5-2 and obtain an S-Rank at the boss",
    "resrew": "0 / 500 / 0 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='irako'>Irako</span>"
  },
  "125": {
    "id": "B51",
    "classes": "quest sortie",
    "requirements": [
      "A57"
    ],
    "unlocks": "",
    "namejp": "新編「第二一戦隊」北方へ出撃せよ！",
    "nameen": "Sortie the New 21st Squadron to the North",
    "req": "Sortie Nachi Kai Ni, Ashigara Kai Ni, Tama, Kiso and up to 2 additional ships to World 3-1 and obtain an S-Rank at the boss",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "<span class='combat-ration'>Combat Ration</span> <span class='present'>Present Box</span>"
  },
  "126": {
    "id": "B52",
    "classes": "quest sortie",
    "requirements": [
      "A58"
    ],
    "unlocks": [
      "A63"
    ],
    "namejp": "「第十六戦隊(第一次)」出撃せよ！",
    "nameen": "Sortie the 16th Squadron (First Generation)",
    "req": "Sortie Ashigara as flagship, Kuma, Nagara and up to 3 additional ships to World 2-2 and obtain an S-Rank at the boss",
    "resrew": "200 / 0 / 200 / 0",
    "otherrew": "<span class='box-medium'>Medium Furniture Box</span> <span class='present'>Present Box</span>"
  },
  "127": {
    "id": "B53",
    "classes": "quest sortie",
    "requirements": [
      "A59"
    ],
    "unlocks": [
      "A60"
    ],
    "namejp": "「第三航空戦隊」南西諸島防衛線に出撃！",
    "nameen": "3rd Carrier Division: defend the Nansei Islands",
    "req": "Sortie Zuikaku Kai as flagship, Zuihou, Chitose Carrier and Chiyoda Carrier (both as CVL) (you can add 2 more ships) to World 1-4 and score an S-rank victory at the boss",
    "resrew": "0 / 0 / 300 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='irako'>Irako</span>"
  },
  "128": {
    "id": "B54",
    "classes": "quest sortie",
    "requirements": [
      "A61"
    ],
    "unlocks": [
      "F23"
    ],
    "namejp": "「小沢艦隊」出撃せよ！",
    "nameen": "Sortie the Ozawa's fleet",
    "req": "Sortie Zuikaku Kai(Kai Ni is OK) as flagship, Zuihou Kai, Chitose Carrier,Chiyoda Carrier, Ise Kai and Hyuuga Kai to World 2-4 and score an S-rank victory at the boss",
    "resrew": "300 / 0 / 300 / 300",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='zero-601'>Zero Fighter Model 52C (601 Air Group)</span>"
  },
  "129": {
    "id": "B55",
    "classes": "quest sortie",
    "requirements": [
      "A63"
    ],
    "unlocks": [
      "A64"
    ],
    "namejp": "「第十六戦隊(第二次)」出撃せよ！",
    "nameen": "Sortie the 16th Squadron (Second Generation)",
    "req": "Sortie Natori as flagship, Isuzu, Kinu and up to 3 additional ships to World 2-3 and score an S-rank victory at the boss",
    "resrew": "320 / 0 / 320 / 0",
    "otherrew": "<span class='mamiya'>Mamiya</span> <span class='box-big'>Big Furniture Box</span>"
  },
  "130": {
    "id": "B56",
    "classes": "quest sortie",
    "requirements": [
      "A64"
    ],
    "unlocks": [
      "A65"
    ],
    "namejp": "新編成航空戦隊、北方へ進出せよ！",
    "nameen": "Sortie the New Carrier Division to the North",
    "req": "Sortie 2 Aircraft Carriers or Light Aircraft Carriers, 2 Aviation Battleships or Aviation Cruisers and 2 Destroyers to World 3-3 and score an S-rank victory at the boss",
    "resrew": "0 / 400 / 0 / 400",
    "otherrew": "2x<span class='screw'>Screw</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "131": {
    "id": "B57",
    "classes": "quest sortie",
    "requirements": [
      "A65",
      "Bm5"
    ],
    "unlocks": "",
    "namejp": "「礼号作戦」実施せよ！",
    "nameen": "Carry Out Operation Rei-go",
    "req": "Sortie Kasumi as flagship, Ashigara, Ooyodo, Asashimo, Kiyoshimo and up to one additional ship to World 2-5 and score an S-rank victory at the boss",
    "resrew": "300 / 700 / 0 / 0",
    "otherrew": "3x<span class='screw'>Screw</span> <span class='present'>Present Box</span>"
  },
  "132": {
    "id": "B58",
    "classes": "quest sortie",
    "requirements": [
      "A32",
      "A46",
      "C2"
    ],
    "unlocks": [
      "B59"
    ],
    "namejp": "旗艦「霞」北方海域を哨戒せよ！",
    "nameen": "Send the Flagship Kasumi to Patrol the Northern Sea",
    "req": "Sortie a fleet with Kasumi Kai Ni as flagship, 3 DD and up to 2 additional ships to World 3-1 and score a victory at the boss node.",
    "resrew": "300 / 0 / 300 / 0",
    "otherrew": "<span class='type13-radar'>Type 13 Air Radar Kai</span> <span class='combat-ration'>Combat Ration</span>"
  },
  "133": {
    "id": "B59",
    "classes": "quest sortie",
    "requirements": [
      "B58",
      "D2"
    ],
    "unlocks": [
      "B66"
    ],
    "namejp": "旗艦「霞」出撃！敵艦隊を撃滅せよ！",
    "nameen": "Flagship Kasumi, Sortieing! Destroy the Enemy Fleet",
    "req": "Sortie a fleet with Kasumi Kai Ni as flagship, 2 DD and up to 3 additional ships to World 2-5 and score an S rank victory at the boss node.",
    "resrew": "500 / 500 / 0 / 0",
    "otherrew": "3x<span class='screw'>Screw</span> <span class='triple-25-aa-cd'>25mm Triple Autocannon Mount (Concentrated Deployment)</span>"
  },
  "134": {
    "id": "B60",
    "classes": "quest sortie",
    "requirements": [
      "A66"
    ],
    "unlocks": "",
    "namejp": "「第三十一戦隊」出撃せよ！",
    "nameen": "Sortie the 31st Division",
    "req": "Sortie Isuzu Kai Ni as flagship, Satsuki Kai Ni, Uzuki Kai and up to 3 additional ships to World 1-6 and reach the end node",
    "resrew": "0 / 0 / 600 / 0",
    "otherrew": "3x<span class='screw'>Screw</span> <span class='hishimochi'>Hishimochi</span>"
  },
  "135": {
    "id": "B61",
    "classes": "quest sortie",
    "requirements": [
      "A67"
    ],
    "unlocks": "",
    "namejp": "「第二七駆逐隊」出撃せよ！",
    "nameen": "Sortie the 27th Destroyer Division",
    "req": "Sortie Shiratsuyu Kai as flagship, Shigure, Harusame and Samidare and up to 2 additional ships to World 2-3 and obtain an S-Rank at the boss",
    "resrew": "500 / 0 / 500 / 0",
    "otherrew": "<span class='spring-scroll'>Furniture: 'Spring is number 1' scroll</span>"
  },
  "136": {
    "id": "B62",
    "classes": "quest sortie",
    "requirements": [
      "Bw9",
      "F21"
    ],
    "unlocks": [
      "B80"
    ],
    "namejp": "強襲上陸作戦用戦力を増強せよ！",
    "nameen": "Bolster the Capability for Amphibious Assault Operations!",
    "req": "Sortie to World 6-3 and obtain an B-Rank or better at the boss",
    "resrew": "0 / 600 / 0 / 0",
    "otherrew": "3x<span class='screw'>Screw</span> <span class='daihatsu'>Daihatsu Landing Craft</span>"
  },
  "137": {
    "id": "B63",
    "classes": "quest sortie",
    "requirements": [
      "Bd2"
    ],
    "unlocks": "",
    "namejp": "製油所地帯を防衛せよ！",
    "nameen": "Defend the Oil Refinery Zone!",
    "req": "Sortie a torpedo squadron (1 CL 5 DD) to World 1-3 and obtain three S-Ranks at the boss",
    "resrew": "400 / 0 / 0 / 0",
    "otherrew": "<span class='combat-ration'>Combat Ration</span> <span class='medal'>Medal</span>"
  },
  "138": {
    "id": "B64",
    "classes": "quest sortie",
    "requirements": [
      "B63",
      "F31"
    ],
    "unlocks": "",
    "namejp": "南西諸島防衛線を強化せよ！",
    "nameen": "Reinforce the Nansei Islands Defence Line!",
    "req": "Sortie to World 1-4 and obtain five S-Ranks at the boss",
    "resrew": "0 / 0 / 400 / 0",
    "otherrew": "<span class='combat-ration'>Combat Ration</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "139": {
    "id": "B65",
    "classes": "quest sortie",
    "requirements": [
      "B20",
      "B64"
    ],
    "unlocks": "",
    "namejp": "オリョール海の制海権を確保せよ！",
    "nameen": "Secure Control of the Orel Sea!",
    "req": "Sortie a fleet with Ooshio (model doesn't matter) as flagship to World 2-3 and obtain six S-Ranks at the boss",
    "resrew": "0 / 400 / 0 / 200",
    "otherrew": "<span class='medal'>Medal</span> 2x<span class='irako'>Irako</span>"
  },
  "140": {
    "id": "B66",
    "classes": "quest sortie",
    "requirements": [
      "B59",
      "B65"
    ],
    "unlocks": "",
    "namejp": "旗艦「大潮」出撃せよ！",
    "nameen": "Sortie the flagship \"Ooshio\"!",
    "req": "Sortie a fleet with Ooshio Kai Ni as flagship to World 3-5 and obtain an S-Rank at the boss",
    "resrew": "500 / 500 / 0 / 0",
    "otherrew": "<span class='combat-ration'>Combat Ration</span> 3x<span class='screw'>Screw</span>"
  },
  "141": {
    "id": "B67",
    "classes": "quest sortie",
    "requirements": "",
    "unlocks": "",
    "namejp": "艦隊、三周年！",
    "nameen": "Fleet, Third Anniversary!",
    "req": "Sortie a fleet to World 2-2 and World 2-3 and obtain an S-Rank at both bosses.",
    "resrew": "1000 / 1000 / 1000 / 0",
    "otherrew": "<span class='anniversary-scroll'>Furniture: 3rd Anniversary scroll</span>"
  },
  "142": {
    "id": "B68",
    "classes": "quest sortie",
    "requirements": [
      "A68"
    ],
    "unlocks": [
      "B69"
    ],
    "namejp": "強行高速輸送部隊、出撃せよ！",
    "nameen": "Forced High-speed Transport Fleet, sortie!",
    "req": "Sortie a fleet with Sendai Kai Ni, Kawakaze Kai Ni, Shigure Kai Ni, two other destroyers and up to one wildcard to World 4-1 and obtain at least an A-Rank at the boss.",
    "resrew": "500 / 0 / 500 / 0",
    "otherrew": "2x<span class='screw'>Screw</span> <span class='irako'>Irako</span>"
  },
  "143": {
    "id": "B69",
    "classes": "quest sortie",
    "requirements": [
      "B68",
      "F33"
    ],
    "unlocks": "",
    "namejp": "「第一航空戦隊」西へ！",
    "nameen": "\"1st Carrier Division\", into the West!",
    "req": "Sortie a fleet with Akagi as flagship, Kaga and up to four wildcards to World 4-5 and obtain an S-Rank at the boss.",
    "resrew": "0 / 800 / 0 / 800",
    "otherrew": "3x<span class='screw'>Screw</span> <span class='skilled-crew'>Skilled Crew Member</span>"
  },
  "144": {
    "id": "B70",
    "classes": "quest sortie",
    "requirements": [
      "A69"
    ],
    "unlocks": [
      "B71"
    ],
    "namejp": "新編艦隊、南西諸島防衛線へ急行せよ！",
    "nameen": "Set Sail Towards the Nansei Islands Defence Line",
    "req": "Sortie a fleet with a CL/CLT/CT flagship, 4 DD, and up to 1 additional ship to World 1-4 and obtain at least an A-rank at the boss.",
    "resrew": "300 / 300 / 300 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='mamiya'>Mamiya</span>"
  },
  "145": {
    "id": "B71",
    "classes": "quest sortie",
    "requirements": [
      "B70"
    ],
    "unlocks": "",
    "namejp": "鎮守府近海航路の安全確保を強化せよ！",
    "nameen": "Ensure the Safety of the Naval Base's Nearby Routes",
    "req": "Sortie a fleet with a CL flagship, 4 DD, and up to 1 additional ship to World 1-6 and complete the map.",
    "resrew": "0 / 900 / 900 / 900",
    "otherrew": "4x<span class='development-material'>Development Material</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "146": {
    "id": "B72",
    "classes": "quest sortie",
    "requirements": [
      "Bw5",
      "A66"
    ],
    "unlocks": [
      "A71"
    ],
    "namejp": "「第三十一戦隊」敵潜を制圧せよ！",
    "nameen": "31st Cruiser Division, suppress the enemy submarines!",
    "req": "Sortie a fleet with Isuzu Kai Ni as flagship, Satsuki Kai Ni, Uzuki Kai, and three wildcards to World 1-6 and reach the goal point twice.",
    "resrew": "310 / 310 / 0 / 310",
    "otherrew": "2x<span class='screw'>Screw</span> <span class='type-3-sonar'>Type 3 Active Sonar</span>"
  },
  "147": {
    "id": "B73",
    "classes": "quest sortie",
    "requirements": [
      "A70"
    ],
    "unlocks": "",
    "namejp": "新編「第八駆逐隊」出撃せよ！",
    "nameen": "New 8th Destroyer Division, sortie!",
    "req": "Sortie a fleet with Asashio Kai Ni/Asashio Kai Ni D as flagship, Michishio, Ooshio, Arashio, and two wildcards to World 1-6 and reach the goal point.",
    "resrew": "400 / 400 / 0 / 0",
    "otherrew": "<span class='searchlight'>Searchlight</span> <span class='daihatsu'>Daihatsu Landing Craft</span>"
  },
  "148": {
    "id": "B74",
    "classes": "quest sortie",
    "requirements": [
      "A71"
    ],
    "unlocks": "",
    "namejp": "精鋭「八駆第一小隊」対潜哨戒！",
    "nameen": "Elite 8th Destroyer Division on ASW patrol!",
    "req": "Sortie a fleet that includes Asashio Kai Ni D and Ooshio Kai Ni to World 1-5 and score two S-Ranks at the boss node.",
    "resrew": "0 / 800 / 0 / 200",
    "otherrew": "4x<span class='screw'>Screw</span> <span class='type-4-sonar'>Type 4 Passive Sonar</span>"
  },
  "149": {
    "id": "B75",
    "classes": "quest sortie",
    "requirements": [
      "B70"
    ],
    "unlocks": "",
    "namejp": "水雷戦隊、南西諸島防衛線に反復出撃せよ！",
    "nameen": "Torpedo Squadron, repeatedly sortie to the Nansei Islands defence line!",
    "req": "Sortie a fleet with light cruiser type (i.e. CL/CLT/CT) as flagship, four destroyers and a wildcard to World 1-4 and score two S-Ranks at the boss node.",
    "resrew": "0 / 350 / 0 / 350",
    "otherrew": "4x<span class='bucket'>Bucket</span> <span class='irako'>Irako</span>"
  },
  "150": {
    "id": "B76",
    "classes": "quest sortie",
    "requirements": "",
    "unlocks": "",
    "namejp": "製油所地帯沿岸の哨戒を実施せよ！",
    "nameen": "Patrol the Coastal Refinery Zone!",
    "req": "Sortie a fleet with a light aircraft carrier as flagship, three destroyers and two wildcards to World 1-3 and score an S-Rank at the boss node.",
    "resrew": "600 / 0 / 0 / 0",
    "otherrew": "<span class='box-medium'>Medium Furniture Box</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "151": {
    "id": "B77",
    "classes": "quest sortie",
    "requirements": [
      "C2"
    ],
    "unlocks": "",
    "namejp": "水雷戦隊、南西諸島海域を哨戒せよ！",
    "nameen": "Torpedo Squadron, patrol the Nansei Islands area!",
    "req": "Sortie a fleet with a light cruiser as flagship, four destroyers and one wildcard to both World 2-2 and World 2-3, and score an S-Rank at each boss node.",
    "resrew": "600 / 600 / 0 / 0",
    "otherrew": "<span class='fairy'>Furniture Fairy</span> <span class='irako'>Irako</span>"
  },
  "152": {
    "id": "B78",
    "classes": "quest sortie",
    "requirements": [
      "A72"
    ],
    "unlocks": [
      "B79"
    ],
    "namejp": "「第十九駆逐隊」出撃せよ！",
    "nameen": "19th Destroyer Division, sortie!",
    "req": "Sortie a fleet with Isonami, Uranami, Ayanami and Shikinami to World 1-5, and score at least an A-Rank at the boss node. Because of the branching rules you can have only these four in your fleet.",
    "resrew": "300 / 300 / 300 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='irako'>Irako</span>"
  },
  "153": {
    "id": "B79",
    "classes": "quest sortie",
    "requirements": [
      "B78"
    ],
    "unlocks": "",
    "namejp": "「第十九駆逐隊」敵主力に突入せよ！",
    "nameen": "19th Destroyer Division, engage the enemy main forces!",
    "req": "Sortie a fleet with Isonami, Uranami, Ayanami, Shikinami and up to two wildcards to World 2-5, and score at least an A-Rank at the boss node.",
    "resrew": "600 / 600 / 0 / 300",
    "otherrew": "4x<span class='screw'>Screw</span> <span class='underway-replenishment'>Underway Replenishment</span>"
  },
  "154": {
    "id": "B80",
    "classes": "quest sortie",
    "requirements": [
      "B41",
      "B62"
    ],
    "unlocks": "",
    "namejp": "飛行場設営の準備を実施せよ！",
    "nameen": "Prepare for the Construction of the Land-Base!",
    "req": "Sortie to World 6-3 and obtain an S-rank at the boss node.",
    "resrew": "0 / 0 / 0 / 0",
    "otherrew": "<span class='construction-corps'>Construction Corps</span>"
  },
  "155": {
    "id": "B81",
    "classes": "quest sortie",
    "requirements": [
      "B80"
    ],
    "unlocks": "",
    "namejp": "夜間突入！敵上陸部隊を叩け！",
    "nameen": "Rush into Night Battle! Attack the Enemy Landing Forces!",
    "req": "Sortie to World 5-3 and obtain at least an A-rank at the boss node.",
    "resrew": "0 / 0 / 0 / 0",
    "otherrew": "<span class='construction-corps'>Construction Corps</span>"
  },
  "156": {
    "id": "B82",
    "classes": "quest sortie",
    "requirements": [
      "B77"
    ],
    "unlocks": "",
    "namejp": "夜の海を照らす「灯り」を入手せよ！",
    "nameen": "Obtain the Searchlight that brightens the Dark Sea!",
    "req": "Sortie to World 2-1 and obtain an S-rank at the boss node.",
    "resrew": "100 / 100 / 0 / 0",
    "otherrew": "<span class='searchlight'>Searchlight</span> <span class='combat-ration'>Combat Ration</span>"
  },
  "157": {
    "id": "B83",
    "classes": "quest sortie",
    "requirements": "",
    "unlocks": "",
    "namejp": "南西諸島防衛線を増強せよ！",
    "nameen": "Reinforce the Nansei Islands Defense Line!",
    "req": "Sortie a fleet with an AV or CAV as flagship and up to five wildcards to World 1-4 and obtain an S-rank at the boss node.",
    "resrew": "300 / 300 / 0 / 0",
    "otherrew": "<span class='box-medium'>Medium Furniture Box</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "158": {
    "id": "B84",
    "classes": "quest sortie",
    "requirements": [
      "A73"
    ],
    "unlocks": [
      "A74"
    ],
    "namejp": "「第十六戦隊(第三次)」出撃せよ！",
    "nameen": "16th Cruiser Division (3rd Generation), sortie!",
    "req": "Sortie a fleet with Kinu, Aoba, Kitakami, Ooi and up to two wildcards to World 2-4 and obtain at least an A-Rank at the boss node.",
    "resrew": "400 / 0 / 0 / 400",
    "otherrew": "<span class='irako'>Irako</span> <span class='cushion-floor'>Furniture: Ship Girl Cushion Floor</span>"
  },
  "159": {
    "id": "B85",
    "classes": "quest sortie",
    "requirements": [
      "A74"
    ],
    "unlocks": "",
    "namejp": "精鋭「第十六戦隊」突入せよ！",
    "nameen": "Elite 16th Cruiser Division, engage the enemy!",
    "req": "Sortie a fleet with Kinu Kai Ni as flagship and any combination of  Kitakami Kai Ni, Ooi Kai Ni, Kuma Kai, Aoba Kai, Uranami Kai or Shikinami Kai to World 2-5 and obtain an S-Rank at the boss node.",
    "resrew": "600 / 600 / 0 / 0",
    "otherrew": "<span class='toku-daihatsu'>Toku Daihatsu Landing Craft</span>"
  },
  "160": {
    "id": "B86",
    "classes": "quest sortie",
    "requirements": [
      "B79",
      "B85"
    ],
    "unlocks": "",
    "namejp": "輸送作戦を成功させ、帰還せよ！",
    "nameen": "Complete a transport mission and return!",
    "req": "Sortie a fleet with Kinu Kai Ni as flagship, Uranami Kai, exactly three other destroyers, and up to one wildcard (not a DD) to World 2-2 and obtain an S-Rank at the boss node.",
    "resrew": "1000 / 0 / 1000 / 3000",
    "otherrew": "<span class='screw'>Screw</span> <span class='underway-replenishment'>Underway Replenishment</span>"
  },
  "161": {
    "id": "B87",
    "classes": "quest sortie",
    "requirements": "",
    "unlocks": [
      "B88"
    ],
    "namejp": "重巡戦隊、抜錨せよ！",
    "nameen": "Heavy Cruiser Division, Set Sail!",
    "req": "Sortie a CA(V) as flagship, three other CA(V), and two additional ships to World 2-3 and obtain an S-Rank at the boss node.",
    "resrew": "400 / 400 / 0 / 0",
    "otherrew": "<span class='irako'>Irako</span> <span class='knit-flooring'>Furniture: Knit and Flooring</span>"
  },
  "162": {
    "id": "B88",
    "classes": "quest sortie",
    "requirements": [
      "B8",
      "B87"
    ],
    "unlocks": "",
    "namejp": "戦艦戦隊、出撃せよ！",
    "nameen": "Sortie a Battleship Division!",
    "req": "Sortie a (F)BB(V) as flagship, 1 other (F)BB(V) and up to 4 additional ships to World 3-3 and obtain an S-Rank at the boss node. Due to the branching rules you're required to bring at least 2 CV(L).",
    "resrew": "0 / 800 / 0 / 200",
    "otherrew": "2x<span class='screw'>Screw</span> <span class='type-2-seaplane'>Type 2 Seaplane Fighter Kai</span> <b>or<b> <span class='Catalina'>PBY-5A Catalina</span>"
  },
  "163": {
    "id": "B89",
    "classes": "quest sortie",
    "requirements": [
      "B19"
    ],
    "unlocks": "",
    "namejp": "主力戦艦戦隊、抜錨せよ！",
    "nameen": "Main BB Fleet, Sortie out!",
    "req": "Sortie a fleet which includes 2 or more slow BB/BBV Obtain S-Rank Victory at the Boss node of World 2-4",
    "resrew": "0 / 800 / 400 / 0",
    "otherrew": "<span class='irako'>Irako</span> <span class='kanhon-turbine'>Improved Kanhon Type Turbine</span><b>or</b><span class='kanhon-boiler'>Enhanced Kanhon Type Boiler</span>"
  },
  "164": {
    "id": "B90",
    "classes": "quest sortie",
    "requirements": [
      "B73",
      "B81"
    ],
    "unlocks": "",
    "namejp": "精鋭「第八駆逐隊」突入せよ！",
    "nameen": "Elite 8th DD Division, Sortie!",
    "req": "Sortie a Fleet with Arashio Kai Ni as Flagship, which includes at least one of either Asashio, Ooshio or Michishio as well. Sortie to World 5-5 and obtain 2 A-rank or higher victories!",
    "resrew": "800 / 0 / 800 / 800",
    "otherrew": "4x<span class='screw'>Screw</span> <span class='expansion'>Reinforcement Expansion</span>"
  },
  "165": {
    "id": "Bd1",
    "classes": "quest sortie daily",
    "requirements": [
      "B4"
    ],
    "unlocks": [
      "Bd2",
      "Bd4",
      "Bd6"
    ],
    "namejp": "敵艦隊を撃破せよ！",
    "nameen": "Crush the Enemy Fleet",
    "req": "Defeat an enemy fleet",
    "resrew": "50 / 50 / 0 / 0",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "166": {
    "id": "Bd2",
    "classes": "quest sortie daily",
    "requirements": [
      "Bd1"
    ],
    "unlocks": [
      "Bd3",
      "Bd5",
      "Bw1",
      "Bw3"
    ],
    "namejp": "敵艦隊主力を撃滅せよ！",
    "nameen": "Destroy the Main Force of the Enemy Fleet",
    "req": "Complete a battle.",
    "resrew": "50 / 50 / 50 / 50",
    "otherrew": "<span class='bucket'>Bucket</span> <span class='development-material'>Development Material</span>"
  },
  "167": {
    "id": "Bd3",
    "classes": "quest sortie daily",
    "requirements": [
      "Bd2"
    ],
    "unlocks": "",
    "namejp": "敵艦隊を10回邀撃せよ！",
    "nameen": "Ambush the Enemy Fleet 10 Times",
    "req": "Defeat 10 enemy fleets.",
    "resrew": "150 / 150 / 200 / 100",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "168": {
    "id": "Bd4",
    "classes": "quest sortie daily",
    "requirements": [
      "Bd1"
    ],
    "unlocks": "",
    "namejp": "敵空母を3隻撃沈せよ！",
    "nameen": "Sink 3 Enemy Carriers",
    "req": "Sink 3 enemy Aircraft Carriers.Light Carriers are fine tooArmored Carrier Princess does not workNeed to verify for Seaplane Tender Princess",
    "resrew": "150 / 150 / 150 / 300",
    "otherrew": "2x<span class='bucket'>Bucket</span>"
  },
  "169": {
    "id": "Bd5",
    "classes": "quest sortie daily",
    "requirements": [
      "Bd2"
    ],
    "unlocks": [
      "Bd7",
      "Bw2"
    ],
    "namejp": "敵補給艦を3隻撃沈せよ！",
    "nameen": "Sink 3 Enemy Transport Ships",
    "req": "Sink 3 enemy Transport Ships",
    "resrew": "100 / 50 / 200 / 50",
    "otherrew": "<span class='bucket'>Bucket</span> <span class='development-material'>Development Material</span>"
  },
  "170": {
    "id": "Bd6",
    "classes": "quest sortie daily",
    "requirements": [
      "Bd1"
    ],
    "unlocks": "",
    "namejp": "敵輸送船団を叩け！",
    "nameen": "Strike the Enemy Transport Group",
    "req": "Sink 5 enemy Transport Ships",
    "resrew": "0 / 200 / 0 / 0",
    "otherrew": "2x<span class='development-material'>Development Material</span>"
  },
  "171": {
    "id": "Bd7",
    "classes": "quest sortie daily",
    "requirements": [
      "Bd5"
    ],
    "unlocks": [
      "Bd8"
    ],
    "namejp": "南西諸島海域の制海権を握れ！",
    "nameen": "Seize Control of the Southwestern Archipelago Sea",
    "req": "Defeat 5 boss nodes in World 2: 南西諸島海域",
    "resrew": "300 / 0 / 0 / 200",
    "otherrew": "<span class='bucket'>Bucket</span> <span class='instant-construction'>Instant Construction</span>"
  },
  "172": {
    "id": "Bd8",
    "classes": "quest sortie daily",
    "requirements": [
      "Bd7"
    ],
    "unlocks": "",
    "namejp": "敵潜水艦を制圧せよ！",
    "nameen": "Suppress the Enemy Submarines",
    "req": "Sink 6 enemy Submarines",
    "resrew": "300 / 30 / 300 / 30",
    "otherrew": "<span class='bucket'>Bucket</span>"
  },
  "173": {
    "id": "Bw1",
    "classes": "quest sortie weekly",
    "requirements": [
      "Bd2"
    ],
    "unlocks": [
      "Bw4"
    ],
    "namejp": "あ号作戦",
    "nameen": "Operation A-gou",
    "req": "Launch your fleet 36 times, encounter 24 bosses, kill 12 bosses, and get 6 S-Rank victories",
    "resrew": "300 / 300 / 300 / 100",
    "otherrew": "2x<span class='instant-construction'>Instant Construction</span> 2x<span class='development-material'>Development Material</span>"
  },
  "174": {
    "id": "Bw2",
    "classes": "quest sortie weekly",
    "requirements": [
      "Bd5"
    ],
    "unlocks": [
      "Bw5",
      "F32"
    ],
    "namejp": "い号作戦",
    "nameen": "Operation I-gou",
    "req": "Sink 20 Aircraft Carriers.Light Carriers are fine too",
    "resrew": "0 / 500 / 0 / 500",
    "otherrew": "2x<span class='development-material'>Development Material</span>"
  },
  "175": {
    "id": "Bw3",
    "classes": "quest sortie weekly",
    "requirements": [
      "Bd2"
    ],
    "unlocks": [
      "B12"
    ],
    "namejp": "海上通商破壊作戦",
    "nameen": "Maritime Trade Disrupt Operation",
    "req": "Sink 20 Transport Ships",
    "resrew": "500 / 0 / 400 / 0",
    "otherrew": "3x<span class='development-material'>Development Material</span>"
  },
  "176": {
    "id": "Bw4",
    "classes": "quest sortie weekly",
    "requirements": [
      "Bw1"
    ],
    "unlocks": [
      "Bw10",
      "Bm3",
      "Bm6"
    ],
    "namejp": "ろ号作戦",
    "nameen": "Operation Ro-gou",
    "req": "Sink 50 Transport Ships",
    "resrew": "400 / 0 / 800 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span>"
  },
  "177": {
    "id": "Bw5",
    "classes": "quest sortie weekly",
    "requirements": [
      "Bw2"
    ],
    "unlocks": [
      "Bw6",
      "Bw7",
      "F12"
    ],
    "namejp": "海上護衛戦",
    "nameen": "Marine Escort Battle",
    "req": "Sink 15 Submarines",
    "resrew": "600 / 0 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='screw'>Screw</span>"
  },
  "178": {
    "id": "Bw6",
    "classes": "quest sortie weekly",
    "requirements": [
      "Bw5"
    ],
    "unlocks": [
      "Bw8"
    ],
    "namejp": "敵東方艦隊を撃滅せよ！",
    "nameen": "Destroy the Enemy's Eastern Fleet",
    "req": "Defeat 12 bosses in the World 4: 西方海域",
    "resrew": "400 / 0 / 0 / 700",
    "otherrew": "2x<span class='development-material'>Development Material</span>"
  },
  "179": {
    "id": "Bw7",
    "classes": "quest sortie weekly",
    "requirements": [
      "Bw5"
    ],
    "unlocks": "",
    "namejp": "敵北方艦隊主力を撃滅せよ！",
    "nameen": "Destroy the Main Force of the Enemy's Northern Fleet",
    "req": "Defeat 5 bosses in the Northern Sea 3-3, 3-4, or 3-5",
    "resrew": "300 / 300 / 400 / 300",
    "otherrew": "<span class='box-medium'>Medium Furniture Box</span> 3x<span class='development-material'>Development Material</span> 3x<span class='screw'>Screw</span>"
  },
  "180": {
    "id": "Bw8",
    "classes": "quest sortie weekly",
    "requirements": [
      "Bw6"
    ],
    "unlocks": [
      "Bw9"
    ],
    "namejp": "敵東方中枢艦隊を撃破せよ！",
    "nameen": "Crush the Core of the Enemy's Eastern Fleet",
    "req": "Defeat the boss in 4-4",
    "resrew": "500 / 0 / 500 / 0",
    "otherrew": "<span class='bucket'>Bucket</span> <span class='development-material'>Development Material</span>"
  },
  "181": {
    "id": "Bw9",
    "classes": "quest sortie weekly",
    "requirements": [
      "Bw8"
    ],
    "unlocks": [
      "B44",
      "B62"
    ],
    "namejp": "南方海域珊瑚諸島沖の制空権を握れ！",
    "nameen": "Seize Air Superiority on the Southern Sea Coral Islands",
    "req": "Sortie to 5-2 and get an S-Rank at the boss node 2 times",
    "resrew": "0 / 300 / 0 / 800",
    "otherrew": "2x<span class='development-material'>Development Material</span> 2x<span class='screw'>Screw</span>"
  },
  "182": {
    "id": "Bw10",
    "classes": "quest sortie weekly",
    "requirements": [
      "A45",
      "Bw4"
    ],
    "unlocks": "",
    "namejp": "海上輸送路の安全確保に努めよ！",
    "nameen": "Strive to Ensure the Security of the Marine Transportation Route",
    "req": "Sortie to 1-5 and get at least an A-rank at the boss node 3 times",
    "resrew": "100 / 0 / 0 / 0",
    "otherrew": "3x<span class='screw'>Screw</span>"
  },
  "183": {
    "id": "Bm1",
    "classes": "quest sortie monthly",
    "requirements": [
      "A35"
    ],
    "unlocks": [
      "B38",
      "Bm5"
    ],
    "namejp": "「第五戦隊」出撃せよ！",
    "nameen": "Sortie the 5th Squadron",
    "req": "Sortie Myoukou, Nachi, Haguro, and 3 additional ships to World 2-5 and obtain an S-Rank at the boss",
    "resrew": "0 / 550 / 550 / 0",
    "otherrew": "<span class='box-big'>Big Furniture Box</span> 5x<span class='development-material'>Development Material</span>"
  },
  "184": {
    "id": "Bm2",
    "classes": "quest sortie monthly",
    "requirements": [
      "B30"
    ],
    "unlocks": "",
    "namejp": "「潜水艦隊」出撃せよ！?",
    "nameen": "Sortie the Submarine Fleet",
    "req": "Sortie to World 6-1 and obtain an S-Rank at the boss three times",
    "resrew": "0 / 600 / 0 / 0",
    "otherrew": "<span class='box-big'>Big Furniture Box</span> <span class='irako'>Irako</span>"
  },
  "185": {
    "id": "Bm3",
    "classes": "quest sortie monthly",
    "requirements": [
      "Bw4"
    ],
    "unlocks": "",
    "namejp": "「水雷戦隊」南西へ！",
    "nameen": "Torpedo Squadron, toward Southwest",
    "req": "Sortie 1-3 Light Cruisers, with one as flagship, and 3-5 Destroyers to World 1-4 and obtain an S-Rank at the boss",
    "resrew": "500 / 0 / 0 / 300",
    "otherrew": "3x<span class='screw'>Screw</span> <span class='irako'>Irako</span>"
  },
  "186": {
    "id": "Bm4",
    "classes": "quest sortie monthly",
    "requirements": [
      "A43"
    ],
    "unlocks": [
      "B32"
    ],
    "namejp": "「水上打撃部隊」南方へ！",
    "nameen": "Surface Task Force, toward South",
    "req": "Sortie only 3 of the following classes: Yamato-class, Nagato-class, Ise-class and Fusou-class Slow Battleships, 1 Light Cruiser, and 2 additional ships to World 5-1 and obtain an S-Rank at the boss.",
    "resrew": "350 / 400 / 350 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span> 4x<span class='screw'>Screw</span>"
  },
  "187": {
    "id": "Bm5",
    "classes": "quest sortie monthly",
    "requirements": [
      "B21",
      "Bm1"
    ],
    "unlocks": [
      "B57",
      "F25"
    ],
    "namejp": "海上護衛強化月間",
    "nameen": "Month-long Strengthening of the Marine Escort",
    "req": "Sortie to World 1-5 and obtain an A-Rank or higher at the boss 10 times",
    "resrew": "800 / 0 / 0 / 0",
    "otherrew": "5x<span class='development-material'>Development Material</span> 3x<span class='screw'>Screw</span>"
  },
  "188": {
    "id": "Bm6",
    "classes": "quest sortie monthly",
    "requirements": [
      "B20",
      "Bw4"
    ],
    "unlocks": [
      "Bm7",
      "Bq1",
      "A56",
      "A59",
      "F22"
    ],
    "namejp": "「空母機動部隊」西へ！",
    "nameen": "Carrier Task Force, toward West",
    "req": "Sortie 2 Aircraft Carriers (CVL/CV/CVB), 2 Destroyers, and 2 additional ships to World 4-2 and obtain an S-Rank at the boss",
    "resrew": "0 / 0 / 600 / 800",
    "otherrew": "2x<span class='box-big'>Big Furniture Box</span> 2x<span class='screw'>Screw</span>"
  },
  "189": {
    "id": "Bm7",
    "classes": "quest sortie monthly",
    "requirements": [
      "A46",
      "Bm6"
    ],
    "unlocks": [
      "A61"
    ],
    "namejp": "「水上反撃部隊」突入せよ！",
    "nameen": "Send in the Surface Counterattack Fleet",
    "req": "Sortie a Destroyer as flagship, 1 Heavy Cruiser (CAVs don't count), 1 Light Cruiser, and 3 other Destroyers to World 2-5 and obtain an S-Rank at the boss",
    "resrew": "0 / 600 / 0 / 200",
    "otherrew": "4x<span class='development-material'>Development Material</span> 2x<span class='screw'>Screw</span>"
  },
  "190": {
    "id": "Bq1",
    "classes": "quest sortie quarterly",
    "requirements": [
      "Bm6",
      "B19"
    ],
    "unlocks": "",
    "namejp": "沖ノ島海域迎撃戦",
    "nameen": "Okinoshima Sea Counter Attack",
    "req": "Sortie a fleet to World 2-4 and obtain two S-Ranks at the boss node.",
    "resrew": "800 / 800 / 800 / 0",
    "otherrew": "5x<span class='screw'>Screw</span> <span class='mamiya'>Mamiya</span>"
  },
  "191": {
    "id": "S15",
    "classes": "quest sortie seasonal",
    "requirements": "",
    "unlocks": "",
    "namejp": "冬季特別任務：精鋭「駆逐隊」、出撃！",
    "nameen": "?",
    "req": "Sortie 4 DD and S-Rank the bosses at World 1-1 and World 1-2.※No wildcards are allowed. Available only until January 10th, 2017.",
    "resrew": "350 / 350 / 0 / 0",
    "otherrew": "<span class='fairy'>Furniture Fairy</span> <span class='triple-25-aa'>25mm Triple Autocannon Mount ★+3</span><b>or</b><span class='large-bulge'>Anti-torpedo Bulge (Large)</span>"
  },
  "192": {
    "id": "S16",
    "classes": "quest sortie seasonal",
    "requirements": [
      "S15"
    ],
    "unlocks": "",
    "namejp": "冬季特別任務：水上機母艦、抜錨せよ！",
    "nameen": "?",
    "req": "Sortie 1 AV as flagship and 3 DD, with 2 ships of your choice. S-Rank the bosses at World 1-3 and World 1-4. Available only until January 10th, 2017.",
    "resrew": "0 / 500 / 0 / 500",
    "otherrew": "<span class='expansion'>Reinforcement Expansion</span> <span class='rice-croquette'>Furniture: Rice Croquette Dinner</span>",
	"timeout": "2017-10-01"
  },
  "193": {
    "id": "S17",
    "classes": "quest sortie seasonal",
    "requirements": [
      "B5",
      "Bd1"
    ],
    "unlocks": "",
    "namejp": "謹賀新年！「水雷戦隊」出撃始め！",
    "nameen": "Happy New Year! Torpedo Squadron, Sortie Start!",
    "req": "Sortie 1 CL as flagship and at least 2 or more DD. S-Rank the bosses at World 1-2, World 1-3, and World 1-4. No wildcards are allowed.※Available only until January 10th, 2017.",
    "resrew": "0 / 2017 / 0 / 0",
    "otherrew": "<span class='repair-goddess'>Emergency Repair Goddess</span> 3x<span class='bucket'>Bucket</span>",
	"timeout": "2017-10-01"
  },
  "194": {
    "id": "S18",
    "classes": "quest sortie seasonal",
    "requirements": [
      "S17"
    ],
    "unlocks": "",
    "namejp": "新春「伊良湖」のお手伝い！",
    "nameen": "Help Out Irako for the New Year!",
    "req": "Sortie a fleet which includes a Seaplane Tender (AV), Destroyer (DD), OR Submarine Tender (AS) as flagship, with 5 ships of your choice. S-Rank the boss at World 2-3 Three Times. Available only until January 10th, 2017.",
    "resrew": "2017 / 0 / 0 / 0",
    "otherrew": "3x<span class='irako'>Irako</span> <span class='mamiya'>Mamiya</span>",
	"timeout": "2017-10-01"
  },
  "195": {
    "id": "S19",
    "classes": "quest sortie seasonal",
    "requirements": [
      "S18",
      "B18"
    ],
    "unlocks": "",
    "namejp": "時代が来たか！航空火力艦なお正月！",
    "nameen": "The Age has come! Aviation Ships New Year!",
    "req": "Sortie a fleet which includes 2 BBV, 2 CAV and 2 ships of your choice. BBV must be Flagship. S-Rank the Boss at World 4-2 Three Times. Available only until January 10th, 2017.",
    "resrew": "0 / 0 / 2017 / 0",
    "otherrew": "3x<span class='screw'>Screw</span> <span class='fairy'>Furniture Fairy</span> <span class='shiun'>Shiun</span><b>or</b><span class='ro-43'>Ro. 43</span><b>or</b><span class='os2u'>OS2U</span>",
	"timeout": "2017-10-01"
  },
  "196": {
    "id": "S20",
    "classes": "quest sortie seasonal",
    "requirements": [
      "S19",
      "B49"
    ],
    "unlocks": "",
    "namejp": "迎春！「空母機動部隊」出撃開始！",
    "nameen": "Start of New Year! Aircraft Carrier Task Force, Sortie Out!",
    "req": "Sortie a fleet which includes 1 CV(B) as flagship with 2 DD and 3 ships of your choice. S-Rank the Boss at World 3-5 Three Times. Available only until January 10th, 2017.",
    "resrew": "0 / 0 / 0 / 2017",
    "otherrew": "<span class='skilled-crew'>Skilled Crew Member</span> <span class='newyear-scroll'>Furniture: Secret New Year 2017 scroll</span>",
	"timeout": "2017-10-01"
  },
  "197": {
    "id": "C1",
    "classes": "quest exercise",
    "requirements": "",
    "unlocks": "",
    "namejp": "はじめての「演習」！",
    "nameen": "The First Exercise",
    "req": "Challenge another fleet in Exercise",
    "resrew": "10 / 10 / 0 / 0",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "198": {
    "id": "C2",
    "classes": "quest exercise daily",
    "requirements": "",
    "unlocks": [
      "C3",
      "C4"
    ],
    "namejp": "「演習」で練度向上！",
    "nameen": "Increase the Level of Training by Exercising",
    "req": "Challenge 3 other fleets in Exercises (defeat is ok) within the same day",
    "resrew": "50 / 0 / 50 / 0",
    "otherrew": "<span class='instant-construction'>Instant Construction</span>"
  },
  "199": {
    "id": "C3",
    "classes": "quest exercise daily",
    "requirements": [
      "C2"
    ],
    "unlocks": "",
    "namejp": "「演習」で他提督を圧倒せよ！",
    "nameen": "Overwhelm the Other Admirals through Exercises",
    "req": "Get 5 victories in Exercises within the same day",
    "resrew": "0 / 50 / 0 / 50",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "200": {
    "id": "C4",
    "classes": "quest exercise weekly",
    "requirements": [
      "C2"
    ],
    "unlocks": "",
    "namejp": "大規模演習",
    "nameen": "Large-scale Exercises",
    "req": "Get 20 victories in Exercises within the same week",
    "resrew": "200 / 200 / 200 / 200",
    "otherrew": "2x<span class='development-material'>Development Material</span> <span class='screw'>Screw</span>"
  },
  "201": {
    "id": "C5",
    "classes": "quest exercise",
    "requirements": [
      "A50"
    ],
    "unlocks": [
      "B41"
    ],
    "namejp": "艦隊の練度向上に努めよ！",
    "nameen": "Strive to Increase the Level of the Fleet's Training",
    "req": "Get 3 victories in Exercises within the same day",
    "resrew": "0 / 0 / 300 / 300",
    "otherrew": "2x<span class='bucket'>Bucket</span>"
  },
  "202": {
    "id": "C6",
    "classes": "quest exercise",
    "requirements": [
      "D17"
    ],
    "unlocks": [
      "D18"
    ],
    "namejp": "演習を強化、艦隊の練度向上に努めよ！",
    "nameen": "Continue Exercising, and Strive to Increase the Level of Fleet's Training",
    "req": "Get 4 victories in Exercises within the same day",
    "resrew": "0 / 300 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='screw'>Screw</span>"
  },
  "203": {
    "id": "C7",
    "classes": "quest exercise",
    "requirements": [
      "B46"
    ],
    "unlocks": [
      "A55"
    ],
    "namejp": "北方再突入に備え、練度向上に努めよ！",
    "nameen": "Strive to Increase the Level of Training in Preparation for Another Rush to the Northern Sea",
    "req": "Get 4 victories in Exercises within the same day",
    "resrew": "300 / 0 / 0 / 0",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='screw'>Screw</span>"
  },
  "204": {
    "id": "C8",
    "classes": "quest exercise monthly",
    "requirements": [
      "Bd2"
    ],
    "unlocks": "",
    "namejp": "精鋭艦隊演習",
    "nameen": "Elite Fleet Practice",
    "req": "Get 7 victories in Exercises within the same day",
    "resrew": "0 / 400 / 0 / 200",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='combat-ration'>Combat Ration</span>"
  },
  "205": {
    "id": "C9",
    "classes": "quest exercise",
    "requirements": [
      "F32",
      "Bd2"
    ],
    "unlocks": [
      "F33"
    ],
    "namejp": "上陸部隊演習",
    "nameen": "Landing Force Practice",
    "req": "Get 4 victories in Exercises within the same day",
    "resrew": "0 / 200 / 200 / 0",
    "otherrew": "2x<span class='development-material'>Development Material</span> <span class='combat-ration'>Combat Ration</span>"
  },
  "206": {
    "id": "C10",
    "classes": "quest exercise",
    "requirements": [
      "C2"
    ],
    "unlocks": "",
    "namejp": "秋季大演習",
    "nameen": "Large-scale Autumn Season Exercise",
    "req": "Get 8 victories in Exercises within the same day",
    "resrew": "1000 / 0 / 300 / 0",
    "otherrew": "<span class='mamiya'>Mamiya</span> <span class='present'>Present Box</span>"
  },
  "207": {
    "id": "C11",
    "classes": "quest exercise",
    "requirements": [
      "C2"
    ],
    "unlocks": "",
    "namejp": "冬季大演習",
    "nameen": "Large-scale Winter Season Exercise",
    "req": "Get 8 victories in Exercises within the same day",
    "resrew": "300 / 1000 / 0 / 0",
    "otherrew": "3x<span class='bucket'>Bucket</span> <span class='mamiya'>Mamiya</span>"
  },
  "208": {
    "id": "D1",
    "classes": "quest expedition",
    "requirements": [
      "A5"
    ],
    "unlocks": "",
    "namejp": "はじめての「遠征」",
    "nameen": "The First Expedition",
    "req": "Perform an expedition",
    "resrew": "30 / 30 / 30 / 30",
    "otherrew": ""
  },
  "209": {
    "id": "D2",
    "classes": "quest expedition daily",
    "requirements": "",
    "unlocks": [
      "D3"
    ],
    "namejp": "「遠征」を3回成功させよう！",
    "nameen": "Complete 3 Expeditions",
    "req": "Perform 3 successful expeditions within the same day.",
    "resrew": "100 / 100 / 100 / 100",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "210": {
    "id": "D3",
    "classes": "quest expedition daily",
    "requirements": [
      "D2"
    ],
    "unlocks": "",
    "namejp": "「遠征」を10回成功させよう！",
    "nameen": "Complete 10 Expeditions",
    "req": "Perform 10 successful expeditions within the same day.",
    "resrew": "150 / 300 / 300 / 150",
    "otherrew": "<span class='box-small'>Small Furniture Box</span> <span class='box-medium'>Medium Furniture Box</span>"
  },
  "211": {
    "id": "D4",
    "classes": "quest expedition weekly",
    "requirements": "",
    "unlocks": "",
    "namejp": "大規模遠征作戦、発令！",
    "nameen": "Official Announcement, Operation Large-scale Expedition",
    "req": "Perform 30 successful expeditions within the same week.",
    "resrew": "300 / 500 / 500 / 300",
    "otherrew": "<span class='box-big'>Big Furniture Box</span> 3x<span class='development-material'>Development Material</span>"
  },
  "212": {
    "id": "D5",
    "classes": "quest expedition",
    "requirements": [
      "A27"
    ],
    "unlocks": [
      "D6"
    ],
    "namejp": "第一次潜水艦派遣作戦",
    "nameen": "The First Submarine Dispatch Operation",
    "req": "Complete Expedition 30 for the first time",
    "resrew": "0 / 0 / 10 / 10",
    "otherrew": "<span class='repair-team'>Repair Team</span>"
  },
  "213": {
    "id": "D6",
    "classes": "quest expedition",
    "requirements": [
      "D5"
    ],
    "unlocks": [
      "D7"
    ],
    "namejp": "第二次潜水艦派遣作戦",
    "nameen": "The Second Submarine Dispatch Operation",
    "req": "Complete Expedition 30 one more time",
    "resrew": "0 / 0 / 10 / 10",
    "otherrew": "<span class='ju-87-kai'>Ju 87C Kai</span>"
  },
  "214": {
    "id": "D7",
    "classes": "quest expedition",
    "requirements": [
      "D6"
    ],
    "unlocks": [
      "D8"
    ],
    "namejp": "潜水艦派遣作戦による技術入手の継続",
    "nameen": "Continue to Obtain Technology through Submarine Dispatch Operations",
    "req": "Complete Expedition 30 two more times",
    "resrew": "0 / 0 / 0 / 800",
    "otherrew": "<span class='ju-87-kai'>Ju 87C Kai</span> <span class='fairy'>Furniture Fairy</span>"
  },
  "215": {
    "id": "D8",
    "classes": "quest expedition",
    "requirements": [
      "D7"
    ],
    "unlocks": "",
    "namejp": "潜水艦派遣による海外艦との接触作戦",
    "nameen": "Operation Contact Foreign Ship through Submarine Dispatch",
    "req": "Complete Expedition 31",
    "resrew": "0 / 100 / 0 / 0",
    "otherrew": "<span class='z1'>Z1</span> <span class='box-medium'>Medium Furniture Box</span>"
  },
  "216": {
    "id": "D9",
    "classes": "quest expedition weekly",
    "requirements": [
      "A30"
    ],
    "unlocks": [
      "D11",
      "D19"
    ],
    "namejp": "南方への輸送作戦を成功させよ！",
    "nameen": "Complete the Transport Operations towards South",
    "req": "Complete Expedition 37 or 38",
    "resrew": "150 / 0 / 0 / 0",
    "otherrew": "<span class='box-small'>Small Furniture Box</span>"
  },
  "217": {
    "id": "D10",
    "classes": "quest expedition",
    "requirements": [
      "B20",
      "A32"
    ],
    "unlocks": [
      "B23",
      "D12"
    ],
    "namejp": "航空火力艦の運用を強化せよ！",
    "nameen": "Enhance the Use of Aviation Firepower",
    "req": "Complete Expedition 23",
    "resrew": "0 / 0 / 0 / 100",
    "otherrew": "<span class='zuiun-634'>Zuiun (634 Air Group)</span>"
  },
  "218": {
    "id": "D11",
    "classes": "quest expedition weekly",
    "requirements": [
      "D9"
    ],
    "unlocks": "",
    "namejp": "南方への鼠輸送を継続実施せよ!",
    "nameen": "Continue Carrying Out the Rat Transportation (Tokyo Express) towards South",
    "req": "Complete Expedition 37 or 38 a total of 7 times in a week",
    "resrew": "400 / 0 / 0 / 400",
    "otherrew": "2x<span class='development-material'>Development Material</span> <span class='screw'>Screw</span>"
  },
  "219": {
    "id": "D12",
    "classes": "quest expedition",
    "requirements": [
      "D10"
    ],
    "unlocks": "",
    "namejp": "(続)航空火力艦の運用を強化せよ！",
    "nameen": "(Continuation) Enhance the Use of Aviation Firepower",
    "req": "Complete Expedition 23 four more times",
    "resrew": "0 / 0 / 0 / 200",
    "otherrew": "<span class='zuiun-634'>Zuiun (634 Air Group)</span>"
  },
  "220": {
    "id": "D13",
    "classes": "quest expedition",
    "requirements": [
      "A37"
    ],
    "unlocks": [
      "D14"
    ],
    "namejp": "遠洋潜水艦作戦を実施せよ！",
    "nameen": "Carry Out the Deep Sea Submarine Operations",
    "req": "Complete Expedition 39",
    "resrew": "0 / 200 / 0 / 0",
    "otherrew": "<span class='torpedo-53mm-8'>53cm Submarine Bow Torpedo Mount (8 tubes)</span>"
  },
  "221": {
    "id": "D14",
    "classes": "quest expedition",
    "requirements": [
      "D13"
    ],
    "unlocks": "",
    "namejp": "遠洋潜水艦作戦の成果を拡大せよ！",
    "nameen": "Expand the Result of the Deep Sea Submarine Operations",
    "req": "Complete Expedition 39 two more times",
    "resrew": "0 / 400 / 0 / 0",
    "otherrew": "<span class='torpedo-53mm-8'>53cm Submarine Bow Torpedo Mount (8 tubes)</span>"
  },
  "222": {
    "id": "D15",
    "classes": "quest expedition",
    "requirements": [
      "B7"
    ],
    "unlocks": [
      "B40"
    ],
    "namejp": "防空射撃演習を実施せよ！",
    "nameen": "Carry Out Air Defense Exercises",
    "req": "Complete Expedition 6 three times",
    "resrew": "0 / 200 / 0 / 200",
    "otherrew": "<span class='triple-25-aa'>25mm Triple Autocannon Mount</span> 2x<span class='development-material'>Development Material</span>"
  },
  "223": {
    "id": "D16",
    "classes": "quest expedition",
    "requirements": [
      "B40"
    ],
    "unlocks": "",
    "namejp": "囮機動部隊支援作戦を実施せよ！",
    "nameen": "Carry Out the Decoy Task Force Support Operation",
    "req": "Complete Expedition 15",
    "resrew": "400 / 0 / 0 / 400",
    "otherrew": "<span class='type-91-aafd'>Type 91 Anti-Aircraft Fire Director</span> 2x<span class='development-material'>Development Material</span>"
  },
  "224": {
    "id": "D17",
    "classes": "quest expedition",
    "requirements": [
      "A35"
    ],
    "unlocks": [
      "C6"
    ],
    "namejp": "観艦式予行を実施せよ！",
    "nameen": "Carry Out Naval Review Rehearsals",
    "req": "Complete Expedition 7 twice",
    "resrew": "150 / 0 / 0 / 150",
    "otherrew": "2x<span class='development-material'>Development Material</span>"
  },
  "225": {
    "id": "D18",
    "classes": "quest expedition",
    "requirements": [
      "C6"
    ],
    "unlocks": "",
    "namejp": "観艦式を敢行せよ！",
    "nameen": "Execute Naval Review",
    "req": "Complete Expedition 8",
    "resrew": "300 / 300 / 300 / 0",
    "otherrew": "<span class='hq-personnel'>Headquarters Personnel</span> <span class='screw'>Screw</span>"
  },
  "226": {
    "id": "D19",
    "classes": "quest expedition",
    "requirements": [
      "D9",
      "B50"
    ],
    "unlocks": [
      "F21"
    ],
    "namejp": "機動部隊の運用を強化せよ！",
    "nameen": "Enhance the Use of the Task Force",
    "req": "Complete Expeditions 35 and 26",
    "resrew": "200 / 200 / 400 / 0",
    "otherrew": "2x<span class='screw'>Screw</span> <span class='box-big'>Big Furniture Box</span>"
  },
  "227": {
    "id": "D20",
    "classes": "quest expedition",
    "requirements": [
      "D2",
      "D6"
    ],
    "unlocks": "",
    "namejp": "潜水艦派遣作戦による航空機技術入手",
    "nameen": "Submarine Dispatch Operation to Acquire Aircraft Technology",
    "req": "Complete Expedition 30 & 31",
    "resrew": "0 / 100 / 0 / 100",
    "otherrew": "<span class='aircraft-bp'>New Technology Aircraft Blueprint</span>"
  },
  "228": {
    "id": "D21",
    "classes": "quest expedition",
    "requirements": [
      "D20",
      "B88"
    ],
    "unlocks": "",
    "namejp": "潜水艦派遣作戦による噴式技術の入手",
    "nameen": "Submarine Dispatch Operation to Acquire Jet Engine Technology",
    "req": "Have 5,000 Steel and 1,500 Bauxite. Complete Expedition 30 and 31 once each. (The resources will be consumed upon Quest Completion)",
    "resrew": "100 / 0 / 0 / 100",
    "otherrew": "<span class='ne-engine'>Ne Type Engine</span> 2x<span class='development-material'>Development Material</span>"
  },
  "229": {
    "id": "E1",
    "classes": "quest supply",
    "requirements": [
      "B2"
    ],
    "unlocks": "",
    "namejp": "はじめての「補給」",
    "nameen": "The First Resupply",
    "req": "Resupply a ship",
    "resrew": "20 / 20 / 0 / 0",
    "otherrew": "<span class='bucket'>Bucket</span>"
  },
  "230": {
    "id": "E2",
    "classes": "quest supply",
    "requirements": [
      "B2"
    ],
    "unlocks": "",
    "namejp": "はじめての「入渠」！",
    "nameen": "The First Repair",
    "req": "Repair a ship",
    "resrew": "0 / 0 / 30 / 0",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "231": {
    "id": "E3",
    "classes": "quest supply daily",
    "requirements": "",
    "unlocks": [
      "E4"
    ],
    "namejp": "艦隊大整備！",
    "nameen": "The Fleet's Large Maintenance",
    "req": "Repair 5 ships",
    "resrew": "30 / 30 / 30 / 30",
    "otherrew": "2x<span class='bucket'>Bucket</span>"
  },
  "232": {
    "id": "E4",
    "classes": "quest supply daily",
    "requirements": [
      "E3"
    ],
    "unlocks": "",
    "namejp": "艦隊酒保祭り！",
    "nameen": "The Fleet's Canteen Festival",
    "req": "Resupply 15 times (1 time is 1 click of the resupply button)",
    "resrew": "50 / 50 / 50 / 50",
    "otherrew": "<span class='instant-construction'>Instant Construction</span> <span class='development-material'>Development Material</span>"
  },
  "233": {
    "id": "F1",
    "classes": "quest arsenal",
    "requirements": "",
    "unlocks": [
      "F2"
    ],
    "namejp": "はじめての「建造」！",
    "nameen": "The First Construction",
    "req": "Craft a ship",
    "resrew": "50 / 50 / 50 / 50",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "234": {
    "id": "F2",
    "classes": "quest arsenal",
    "requirements": [
      "F1"
    ],
    "unlocks": [
      "F3, F6"
    ],
    "namejp": "はじめての「開発」！",
    "nameen": "The First Development",
    "req": "Craft a piece of equipment",
    "resrew": "100 / 100 / 100 / 100",
    "otherrew": "2x<span class='development-material'>Development Material</span>"
  },
  "235": {
    "id": "F3",
    "classes": "quest arsenal",
    "requirements": [
      "F2"
    ],
    "unlocks": [
      "F4"
    ],
    "namejp": "はじめての「解体」！",
    "nameen": "The First Dismantling",
    "req": "Dismantle a ship",
    "resrew": "60 / 60 / 60 / 60",
    "otherrew": "2x<span class='instant-construction'>Instant Construction</span> <span class='development-material'>Development Material</span>"
  },
  "236": {
    "id": "F4",
    "classes": "quest arsenal",
    "requirements": [
      "F3"
    ],
    "unlocks": "",
    "namejp": "はじめての「廃棄」！",
    "nameen": "The First Scrapping",
    "req": "Scrap a piece of equipment",
    "resrew": "80 / 80 / 80 / 80",
    "otherrew": "2x<span class='bucket'>Bucket</span> <span class='development-material'>Development Material</span>"
  },
  "237": {
    "id": "F5",
    "classes": "quest arsenal daily",
    "requirements": [
      "F2"
    ],
    "unlocks": [
      "F6"
    ],
    "namejp": "新装備「開発」指令",
    "nameen": "Instructions to Develop New Equipment",
    "req": "Craft a piece of equipment(Failures are OK)",
    "resrew": "40 / 40 / 40 / 40",
    "otherrew": "<span class='instant-construction'>Instant Construction</span> <span class='development-material'>Development Material</span>"
  },
  "238": {
    "id": "F6",
    "classes": "quest arsenal daily",
    "requirements": [
      "F5"
    ],
    "unlocks": [
      "F7"
    ],
    "namejp": "新造艦「建造」指令",
    "nameen": "Instructions to Construct New Ship",
    "req": "Craft a ship",
    "resrew": "50 / 50 / 50 / 50",
    "otherrew": "<span class='bucket'>Bucket</span> <span class='development-material'>Development Material</span>"
  },
  "239": {
    "id": "F7",
    "classes": "quest arsenal daily",
    "requirements": [
      "F6"
    ],
    "unlocks": [
      "F8"
    ],
    "namejp": "装備「開発」集中強化！",
    "nameen": "Intensify the Concentration in Developing Equipment",
    "req": "Craft 3 pieces of equipment(Failures are OK)",
    "resrew": "100 / 100 / 100 / 100",
    "otherrew": "2x<span class='development-material'>Development Material</span>"
  },
  "240": {
    "id": "F8",
    "classes": "quest arsenal daily",
    "requirements": [
      "F7"
    ],
    "unlocks": [
      "F9",
      "F16",
      "F18"
    ],
    "namejp": "艦娘「建造」艦隊強化！",
    "nameen": "Strengthen the Fleet by Constructing Shipgirls",
    "req": "Craft 3 ships",
    "resrew": "200 / 200 / 300 / 100",
    "otherrew": "<span class='instant-construction'>Instant Construction</span> 2x<span class='development-material'>Development Material</span>"
  },
  "241": {
    "id": "F9",
    "classes": "quest arsenal daily",
    "requirements": [
      "F8"
    ],
    "unlocks": "",
    "namejp": "軍縮条約対応！",
    "nameen": "Response to Disarmament Treaty",
    "req": "Scrap 2 ships",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='bucket'>Bucket</span>"
  },
  "242": {
    "id": "F10",
    "classes": "quest arsenal",
    "requirements": [
      "G4"
    ],
    "unlocks": "",
    "namejp": "「大型艦建造」の準備！(その弐)",
    "nameen": "Preparation for Large Ship Construction (Part II)",
    "req": "Scrap equipment 4 times",
    "resrew": "800 / 800 / 0 / 0",
    "otherrew": "Unlocks LSC"
  },
  "243": {
    "id": "F11",
    "classes": "quest arsenal",
    "requirements": "",
    "unlocks": "",
    "namejp": "輸送用ドラム缶の準備",
    "nameen": "Preparation for Transport Use Drum Canister",
    "req": "Scrap equipment 3 times",
    "resrew": "0 / 0 / 30 / 0",
    "otherrew": "3x<span class='drum'>Drum Canister</span>"
  },
  "244": {
    "id": "F12",
    "classes": "quest arsenal weekly",
    "requirements": [
      "Bw5"
    ],
    "unlocks": "",
    "namejp": "資源の再利用(その弐)",
    "nameen": "Recycling Resources (Part II)",
    "req": "Scrap equipment 24 times",
    "resrew": "0 / 0 / 100 / 0",
    "otherrew": "<span class='drum'>Drum Canister</span>"
  },
  "245": {
    "id": "F13",
    "classes": "quest arsenal",
    "requirements": [
      "B25"
    ],
    "unlocks": "",
    "namejp": "機種転換?機種転換",
    "nameen": "Model Conversion: Type 97 Torpedo Bomber (Tomonaga Squadron)",
    "req": "Have flagship equipped with Type 97 Torpedo Bomber (Tomonaga Squadron), then scrap 2 Tenzan. UNLOCK the plane before completing this quest if they are previously locked ",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='tenzan-12-tomonaga'>Tenzan Model 12 (Tomonaga Squadron)</span>"
  },
  "246": {
    "id": "F14",
    "classes": "quest arsenal",
    "requirements": [
      "B25"
    ],
    "unlocks": "",
    "namejp": "機種転換?機種転換",
    "nameen": "Model Conversion: Type 99 Dive Bomber (Egusa Squadron)",
    "req": "Have flagship equipped with Type 99 Dive Bomber (Egusa Squadron), then scrap 2 Suisei. UNLOCK the plane before completing this quest if they are previously locked ",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='suisei-egusa'>Suisei (Egusa Squadron)</span>"
  },
  "247": {
    "id": "F15",
    "classes": "quest arsenal",
    "requirements": [
      "B28"
    ],
    "unlocks": "",
    "namejp": "機種転換?機種転換",
    "nameen": "Model Conversion: Zero Fighter Model 52C (601 Air Group)",
    "req": "Have flagship equipped with Zero Fighter Model 52C (601 Air Group), then scrap 2 Reppuu. UNLOCK the plane before completing this quest if they are previously locked ",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='reppuu-601'>Reppuu (601 Air Group)</span>"
  },
  "248": {
    "id": "F16",
    "classes": "quest arsenal",
    "requirements": [
      "F8"
    ],
    "unlocks": "",
    "namejp": "「伊良湖」の準備",
    "nameen": "Preparation for Irako",
    "req": "Scrap equipment 10 times",
    "resrew": "100 / 0 / 0 / 0",
    "otherrew": "4x<span class='irako'>Irako</span>"
  },
  "249": {
    "id": "F17",
    "classes": "quest arsenal",
    "requirements": [
      "A45"
    ],
    "unlocks": [
      "F18"
    ],
    "namejp": "はじめての「装備改修」！",
    "nameen": "The First Equipment Improvement",
    "req": "Do equipment modernization 1 time",
    "resrew": "0 / 0 / 100 / 0",
    "otherrew": "7x<span class='screw'>Screw</span>"
  },
  "250": {
    "id": "F18",
    "classes": "quest arsenal daily",
    "requirements": [
      "F8",
      "F17"
    ],
    "unlocks": [
      "F34"
    ],
    "namejp": "装備の改修強化",
    "nameen": "Reinforce Improvement for Equipment",
    "req": "Do equipment modernization 1 time",
    "resrew": "0 / 50 / 0 / 0",
    "otherrew": "<span class='screw'>Screw</span>"
  },
  "251": {
    "id": "F19",
    "classes": "quest arsenal",
    "requirements": [
      "B50"
    ],
    "unlocks": "",
    "namejp": "機種転換?機種転換",
    "nameen": "Model Conversion: Type 97 Torpedo Bomber (Murata Squadron)",
    "req": "Have Shoukaku equipped with Type 97 Torpedo Bomber (Murata Squadron) as flagship and then scrap 2 Tenzan. UNLOCK the plane before completing this quest if they are previously locked",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='tenzan-12-murata'>Tenzan Model 12 (Murata Squadron)</span>"
  },
  "252": {
    "id": "F20",
    "classes": "quest arsenal",
    "requirements": [
      "B50"
    ],
    "unlocks": "",
    "namejp": "精鋭「九七式艦攻」部隊の編成",
    "nameen": "Organize the Elite Type 97 Torpedo Bomber Force",
    "req": "Have Shoukaku or Akagi as flagship and then scrap 3 Type 97 Torpedo Bomber",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='type-97-murata'>Type 97 Torpedo Bomber (Murata Squadron)</span>"
  },
  "253": {
    "id": "F21",
    "classes": "quest arsenal",
    "requirements": [
      "D19"
    ],
    "unlocks": [
      "A59",
      "B62"
    ],
    "namejp": "試作艤装の準備",
    "nameen": "Preparation of the Prototype Equipment",
    "req": "Scrap equipment 7 times",
    "resrew": "0 / 0 / 100 / 0",
    "otherrew": "<span class='catapult'>Prototype Flight Deck Catapult</span>"
  },
  "254": {
    "id": "F22",
    "classes": "quest arsenal monthly",
    "requirements": [
      "A19",
      "Bm6"
    ],
    "unlocks": [
      "F24",
      "F28"
    ],
    "namejp": "精鋭「艦戦」隊の新編成",
    "nameen": "Organize the New Elite Fighter Force",
    "req": "Have Image in your item page and Equip a rank 7 Type 0 Fighter Model 21 on Houshou set as your Secretary Ship, then scrap 2 Type 0 Fighter Model 21 and a Type 96 Fighter. One Skilled crew is consumed in the process.",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='type-21-skilled'>Type 0 Fighter Model 21 (Skilled)</span>"
  },
  "255": {
    "id": "F23",
    "classes": "quest arsenal",
    "requirements": [
      "B54"
    ],
    "unlocks": [
      "F29"
    ],
    "namejp": "試製航空艤装の追加試作",
    "nameen": "Addition to Prototype Aviation Equipment",
    "req": "Scrap equipment 9 times",
    "resrew": "0 / 0 / 100 / 50",
    "otherrew": "<span class='catapult'>Prototype Flight Deck Catapult</span>"
  },
  "256": {
    "id": "F24",
    "classes": "quest arsenal",
    "requirements": [
      "F22",
      "A59"
    ],
    "unlocks": [
      "F25",
      "F26"
    ],
    "namejp": "機種転換?機種転換",
    "nameen": "Model Conversion: Type 0 Fighter Model 21 (Skilled)",
    "req": "Equip a Type 0 Fighter Model 21 (Skilled) on a Carrier secretary, then scrap 2 Type 0 Fighter Model 52",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='type-52-skilled'>Type 0 Fighter Model 52 (Skilled)</span>"
  },
  "257": {
    "id": "F25",
    "classes": "quest arsenal monthly",
    "requirements": [
      "Bm5",
      "Bm6",
      "F24"
    ],
    "unlocks": "",
    "namejp": "機種転換?機種転換",
    "nameen": "Model Conversion: Type 0 Fighter Model 21 (Skilled)",
    "req": "Equip a rank 7 Type 0 Fighter Model 21 (Skilled) on a Carrier secretary, then scrap 2 Type 0 Fighter Model 52",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='type-52-skilled'>Type 0 Fighter Model 52 (Skilled)</span>"
  },
  "258": {
    "id": "F26",
    "classes": "quest arsenal",
    "requirements": [
      "B53",
      "F24"
    ],
    "unlocks": [
      "F27"
    ],
    "namejp": "「艦戦」隊の再編成?「艦戦」隊の再編成",
    "nameen": "Reorganize the Fighter Force: Type 0 Fighter Model 52 (Skilled)",
    "req": "Equip a rank 7 Type 0 Fighter Model 52 (Skilled) on Zuikaku as secretary, then scrap Zero Fighter Model 52C (601 Air Group)",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='zero-52-iwai'>Zero Fighter Model 52C (w/ Iwai Flight)</span>"
  },
  "259": {
    "id": "F27",
    "classes": "quest arsenal",
    "requirements": [
      "F26",
      "B54"
    ],
    "unlocks": "",
    "namejp": "機種転換＆部隊再編?機種転換＆部隊再編",
    "nameen": "Model Conversion & Reorganization: Zero Fighter Model 52C (w/ Iwai Flight)",
    "req": "Equip a rank 7 Zero Fighter Model 52C (w/ Iwai Flight) on Zuikaku as secretary, then scrap 2 Type 0 Fighter Model 62 (Fighter-bomber)",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='zero-62-iwai'>Zero Fighter Model 62 (Fighter-bomber / Iwai Squadron)</span>"
  },
  "260": {
    "id": "F28",
    "classes": "quest arsenal",
    "requirements": [
      "A61",
      "F22"
    ],
    "unlocks": [
      "F29"
    ],
    "namejp": "「艦戦」隊の再編成?「艦戦」隊の再編成",
    "nameen": "Reorganize the Fighter Force: Type 0 Fighter Model 21 (Skilled)",
    "req": "Equip a rank 7 Type 0 Fighter Model 21 (Skilled) on Zuikaku as secretary, then scrap 2 Type 0 Fighter Model 21",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='zero-21-iwamoto'>Zero Fighter Model 21 (w/ Iwamoto Flight)</span>"
  },
  "261": {
    "id": "F29",
    "classes": "quest arsenal",
    "requirements": [
      "F23",
      "F28"
    ],
    "unlocks": [
      "A62"
    ],
    "namejp": "機種転換?機種転換",
    "nameen": "Model Conversion: Zero Fighter Model 21 (w/ Iwamoto Flight)",
    "req": "Equip a rank 7 Zero Fighter Model 21 (w/ Iwamoto Flight) on Zuikaku as secretary, then scrap 2 Type 0 Fighter Model 52",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='zero-52-iwamoto'>Zero Fighter Model 52A (w/ Iwamoto Flight)</span>"
  },
  "262": {
    "id": "F30",
    "classes": "quest arsenal",
    "requirements": [
      "A62"
    ],
    "unlocks": "",
    "namejp": "機種転換＆部隊再編?機種転換＆部隊再編",
    "nameen": "Model Conversion & Reorganization: Zero Fighter Model 52A (w/ Iwamoto Flight)",
    "req": "Equip a rank 7 Zero Fighter Model 52A (w/ Iwamoto Flight) on Zuikaku as secretary, then scrap 2 Saiun",
    "resrew": "0 / 0 / 0 / 50",
    "otherrew": "<span class='type-53-iwamoto'>Type 0 Fighter Model 53 (Iwamoto Squadron)</span>"
  },
  "263": {
    "id": "F31",
    "classes": "quest arsenal",
    "requirements": [
      "Bd2"
    ],
    "unlocks": "",
    "namejp": "新家具の準備",
    "nameen": "Preparations for New Furniture",
    "req": "Scrap 9 pieces of equipment",
    "resrew": "0 / 0 / 90 / 0",
    "otherrew": "<span class='fairy'>Furniture Fairy</span>"
  },
  "264": {
    "id": "F32",
    "classes": "quest arsenal",
    "requirements": [
      "Bw2"
    ],
    "unlocks": [
      "C9"
    ],
    "namejp": "新装備の準備",
    "nameen": "Preparations for New Equipment",
    "req": "Scrap 5 pieces of equipment.",
    "resrew": "0 / 0 / 50 / 0",
    "otherrew": "<span class='box-medium'>Medium Furniture Box</span>"
  },
  "265": {
    "id": "F33",
    "classes": "quest arsenal",
    "requirements": [
      "C9",
      "B46"
    ],
    "unlocks": [
      "B69"
    ],
    "namejp": "上陸戦用新装備の調達",
    "nameen": "Supply of New Landing Force Equipment",
    "req": "Scrap two 7.7mm Machine Gun and two 12.7mm Single Machine Gun Mount",
    "resrew": "50 / 0 / 0 / 0",
    "otherrew": "<span class='type-2-landing-craft'>Special Type 2 Amphibious Landing Craft</span>"
  },
  "266": {
    "id": "F34",
    "classes": "quest arsenal weekly",
    "requirements": [
      "F18"
    ],
    "unlocks": "",
    "namejp": "対空機銃量産?対空機銃量産",
    "nameen": "Anti-Air Gun Mass Production",
    "req": "Scrap 6 pieces of Anti-Air Guns.",
    "resrew": "0 / 100 / 0 / 200",
    "otherrew": "<span class='screw'>Screw</span> 2x<span class='development-material'>Development Material</span>"
  },
  "267": {
    "id": "F35",
    "classes": "quest arsenal quarterly",
    "requirements": "",
    "unlocks": "",
    "namejp": "「熟練搭乗員」養成",
    "nameen": "Skilled Crew Member Training",
    "req": "Set Houshou as secretary and equip her with a Type 96 Fighter that is both rank 7 and ★max. Consumes 2 medals. Consumes the equipment.",
    "resrew": "0 / 0 / 0 / 100",
    "otherrew": "4x<span class='screw'>Screw</span> <span class='skilled-crew'>Skilled Crew Member</span>"
  },
  "268": {
    "id": "F36",
    "classes": "quest arsenal",
    "requirements": [
      "B71",
      "F34"
    ],
    "unlocks": "",
    "namejp": "新型魚雷兵装の開発",
    "nameen": "Development of a New Torpedo Armament",
    "req": "Set Shimakaze as secretary and equip her with a ★max 61cm Quintuple (Oxygen) Torpedo Mount and a ★max 61cm Triple (Oxygen) Torpedo Mount. Consumes 2 medals. Consumes the equipment.",
    "resrew": "0 / 600 / 0 / 0",
    "otherrew": "6x<span class='screw'>Screw</span> <span class='torpedo-61mm-6'>Prototype 61cm Sextuple (Oxygen) Torpedo Mount</span>"
  },
  "269": {
    "id": "F37",
    "classes": "quest arsenal",
    "requirements": [
      "B56"
    ],
    "unlocks": "",
    "namejp": "「航空基地設営」事前準備",
    "nameen": "Preparations for the Construction of an Air Base",
    "req": "Have two 7.7mm Machine Guns & two Type 96 Fighters in your inventory, and scrap two Drum Canisters. Equipment must be unlocked. Consumes the equipment.",
    "resrew": "200 / 0 / 0 / 200",
    "otherrew": "3x<span class='development-material'>Development Material</span> <span class='type-96-lba'>Type 96 Land-based Attack Aircraft</span>"
  },
  "270": {
    "id": "F38",
    "classes": "quest arsenal",
    "requirements": [
      "F37",
      "B77"
    ],
    "unlocks": "",
    "namejp": "「陸攻」隊の増勢",
    "nameen": "Expansion of Land-based Air Groups",
    "req": "Have two 7.7mm Machine Guns & two Type 99 Dive Bombers in your inventory. Equipment must be unlocked. Consumes the equipment.",
    "resrew": "0 / 200 / 0 / 200",
    "otherrew": "<span class='type-96-lba'>Type 96 Land-based Attack Aircraft</span>"
  },
  "271": {
    "id": "F39",
    "classes": "quest arsenal quarterly",
    "requirements": [
      "F38",
      "D9"
    ],
    "unlocks": "",
    "namejp": "主力「陸攻」の調達",
    "nameen": "Supply of the Land-based Main Bomber Force",
    "req": "Have a Type 96 Land-based Attack Aircraft & two Type 97 Torpedo Bombers in your inventory, and scrap two Type 0 Fighters Model 21. Equipment must be unlocked. Consumes the equipment.",
    "resrew": "250 / 250 / 0 / 0",
    "otherrew": "<span class='type-1-lba'>Type 1 Land-based Attack Aircraft</span>"
  },
  "272": {
    "id": "F40",
    "classes": "quest arsenal",
    "requirements": [
      "F39",
      "C10"
    ],
    "unlocks": "",
    "namejp": "「一式陸攻」性能向上型の調達",
    "nameen": "Procurement of the improved Type 1 Land-based Attack Aircraft",
    "req": "Have a Type 1 Land-based Attack Aircraft & two Tenzan in your inventory. Equipment must be unlocked. Consumes the equipment.",
    "resrew": "0 / 0 / 0 / 300",
    "otherrew": "<span class='type-1-lba-22a'>Type 1 Land-based Attack Aircraft 22A</span>"
  },
  "273": {
    "id": "F41",
    "classes": "quest arsenal",
    "requirements": [
      "B54",
      "Bw5"
    ],
    "unlocks": "",
    "namejp": "「洋上補給」物資の調達",
    "nameen": "Monthly Procurement of Maritime Supply Goods",
    "req": "Have 750 fuel, 750 ammo, two Drum Canisters, one Type 91 AP Shell in your inventory, and scrap one Type 3 Shell. Equipment must be unlocked. Consumes all the resources and equipment.",
    "resrew": "0/ 0 / 0 / 0",
    "otherrew": "<span class='underway-replenishment'>Underway Replenishment</span>"
  },
  "274": {
    "id": "F42",
    "classes": "quest arsenal",
    "requirements": [
      "C4"
    ],
    "unlocks": "",
    "namejp": "「特注家具」の調達",
    "nameen": "Procurement of Custom-Made Furniture",
    "req": "Have 5000 Furniture Coins, two 25mm Twin Autocannon Mount, two 25mm Triple Autocannon Mount in your inventory, and scrap one 25mm Single Autocannon Mount. Equipment must be unlocked.",
    "resrew": "0 / 0 / 0 / 100",
    "otherrew": "<span class='fairy'>Furniture Fairy</span>"
  },
  "275": {
    "id": "F43",
    "classes": "quest arsenal",
    "requirements": [
      "B62",
      "F38"
    ],
    "unlocks": "",
    "namejp": "中部海域「基地航空隊」展開！",
    "nameen": "Launch the LBAS to the Central Ocean Area",
    "req": "Scrap 2 drums, and system will eat 1200 Fuel , 3000 Bauxite and a Construction Corps",
    "resrew": "0 / 0 / 0 / 0",
    "otherrew": "Unlocks LBAS"
  },
  "276": {
    "id": "F44",
    "classes": "quest arsenal",
    "requirements": [
      "F42",
      "C2"
    ],
    "unlocks": "",
    "namejp": "「特注家具」の調達",
    "nameen": "Procurement of Custom-made furniture",
    "req": "Scrap 2 12.7cm Twin High-angle Gun Mount, prepare 5000 furniture coin, 2 14cm Single Gun Mount + 2x 15.2cm Single Gun Mount (all are consumed upon Quest completion). Equipment must be unlocked.",
    "resrew": "0 / 100 / 0 / 0",
    "otherrew": "<span class='fairy'>Furniture Fairy</span>"
  },
  "277": {
    "id": "F45",
    "classes": "quest arsenal",
    "requirements": [
      "F43",
      "A62"
    ],
    "unlocks": "",
    "namejp": "新機軸偵察機の開発",
    "nameen": "Development of a New Reconnaissance Aircraft",
    "req": "Have one Type 1 Land-based Attack Aircraft, two Saiun in your inventory, and scrap two Type 0 Reconnaissance Seaplane. Equipment must be unlocked. Consumes all the equipment.",
    "resrew": "0 / 0 / 0 / 100",
    "otherrew": "<span class='prot-keiun'>Prototype Keiun</span> 2x<span class='development-material'>Development Material</span>"
  },
  "278": {
    "id": "F46",
    "classes": "quest arsenal",
    "requirements": [
      "C3",
      "F45"
    ],
    "unlocks": "",
    "namejp": "噴式戦闘爆撃機の開発",
    "nameen": "Development of Jet-type Bomber",
    "req": "Scrap 3 Shiden Kai 2, have 2 New Technology Aircraft Blueprint and 1 Ne Type Engine prepared. The New Technology Aircraft Blueprints & Ne Type Engine are consumed upon quest completion",
    "resrew": "0 / 0 / 0 / 100",
    "otherrew": "<span class='kikka-kai'>Kikka Kai</span> 2x<span class='development-material'>Development Material</span>"
  },
  "279": {
    "id": "F47",
    "classes": "quest arsenal",
    "requirements": [
      "D21",
      "F45"
    ],
    "unlocks": "",
    "namejp": "ネ式エンジンの増産",
    "nameen": "Increased Production of the Ne-type Engine",
    "req": "Scrap 3 Type 0 Fighter Model 52. Prepare 2 Reppuu, 2 Ryuusei, and 8,000 steel. Equipment must be unlocked. Consumes the equipment.",
    "resrew": "0 / 0 / 0 / 0",
    "otherrew": "<span class='ne-engine'>Ne Type Engine</span>"
  },
  "280": {
    "id": "F48",
    "classes": "quest arsenal",
    "requirements": [
      "C2",
      "F44"
    ],
    "unlocks": "",
    "namejp": "「特注家具」の調達",
    "nameen": "Procurement of Custom made Furniture (Arsenal Quest)",
    "req": "Scrap 12.7cm Main Gun two times, prepare 5000 furniture coins, 2x 7.7mm AA Gun and 2x Type 96 Fighter. The Equipment and Furniture Coins will all be consumed upon quest completion.",
    "resrew": "0 / 0/ 0 / 100",
    "otherrew": "<span class='fairy'>Furniture Fairy</span>"
  },
  "281": {
    "id": "G1",
    "classes": "quest modernization",
    "requirements": "",
    "unlocks": "",
    "namejp": "はじめての「近代化改修」！",
    "nameen": "The First Modernization",
    "req": "Perform a successful modernization",
    "resrew": "0 / 0 / 50 / 30",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "282": {
    "id": "G2",
    "classes": "quest modernization daily",
    "requirements": "",
    "unlocks": [
      "G3"
    ],
    "namejp": "艦の「近代化改修」を実施せよ！",
    "nameen": "Carry Out Ship Modernizations",
    "req": "Perform 2 successful modernizations within the same day",
    "resrew": "20 / 20 / 50 / 0",
    "otherrew": "<span class='bucket'>Bucket</span>"
  },
  "283": {
    "id": "G3",
    "classes": "quest modernization weekly",
    "requirements": [
      "G2"
    ],
    "unlocks": "",
    "namejp": "「近代化改修」を進め、戦備を整えよ！",
    "nameen": "Proceed with Modernization, and Prepare for War",
    "req": "Perform 15 successful modernizations within the same week",
    "resrew": "200 / 200 / 300 / 100",
    "otherrew": "<span class='instant-construction'>Instant Construction</span> 2x<span class='development-material'>Development Material</span>"
  },
  "284": {
    "id": "G4",
    "classes": "quest modernization",
    "requirements": [
      "A14"
    ],
    "unlocks": [
      "F10"
    ],
    "namejp": "「大型艦建造」の準備！(その壱)",
    "nameen": "Preparation for Large Ship Construction (Part I)",
    "req": "Perform 4 successful modernizations",
    "resrew": "0 / 0 / 400 / 400",
    "otherrew": ""
  },
  "285": {
    "id": "G5",
    "classes": "quest modernization",
    "requirements": [
      "G3",
      "B87"
    ],
    "unlocks": "",
    "namejp": "航空艤装の近代化改修",
    "nameen": "Modernisation of Aircraft Carrier Rigging",
    "req": "Prepare 5500 steel & 2500 bauxite, then perform 2 successful modernizations on a CV(B) each with 5 carriers as material. Modernisation target must be a CV(B), not CVL or AV. Modernisation materials can be CV or CVL, not AV.",
    "resrew": "0 / 0 / 0 / 0",
    "otherrew": "<span class='aircraft-bp'>New Technology Aircraft Blueprint</span>"
  },
  "286": {
    "id": "WF01",
    "classes": "quest marriage",
    "requirements": [
      "A16"
    ],
    "unlocks": [
      "WC01"
    ],
    "namejp": "式の準備！(その壱)",
    "nameen": "Preparation for the Ceremony (Part I)",
    "req": "Scrap equipment twice",
    "resrew": "88 / 88 / 0 / 0",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "287": {
    "id": "WC01",
    "classes": "quest marriage",
    "requirements": [
      "WF01"
    ],
    "unlocks": [
      "WA01"
    ],
    "namejp": "式の準備！(その弐)",
    "nameen": "Preparation for the Ceremony (Part II)",
    "req": "Win two battles in Exercises",
    "resrew": "0 / 0 / 88 / 88",
    "otherrew": "<span class='development-material'>Development Material</span>"
  },
  "288": {
    "id": "WA01",
    "classes": "quest marriage",
    "requirements": [
      "WC01"
    ],
    "unlocks": [
      "WB01"
    ],
    "namejp": "式の準備！(その参)",
    "nameen": "Preparation for the Ceremony (Part III)",
    "req": "Have a level 90 to 99 ship as your flagship",
    "resrew": "88 / 88 / 88 / 88",
    "otherrew": "<span class='box-big'>Big Furniture Box</span>"
  },
  "289": {
    "id": "WB01",
    "classes": "quest marriage",
    "requirements": [
      "WA01"
    ],
    "unlocks": [
      "WA02"
    ],
    "namejp": "式の準備！(最終)",
    "nameen": "Preparation for the Ceremony (Final)",
    "req": "Defeat the boss in 2-3 with a Level 90-99 flagship (with S rank)",
    "resrew": "0 / 0 / 0 / 0",
    "otherrew": "<span class='ring'>Marriage Ring and Documents</span>"
  },
  "290": {
    "id": "WA02",
    "classes": "quest marriage",
    "requirements": [
      "WB01"
    ],
    "unlocks": [
      "WB02"
    ],
    "namejp": "新たなる旅立ち！",
    "nameen": "A New Voyage",
    "req": "Have a Level 100 ship as your flagship along with five others in your main fleet",
    "resrew": "200 / 200 / 200 / 200",
    "otherrew": "<span class='repair-team'>Repair Team</span>"
  },
  "291": {
    "id": "WB02",
    "classes": "quest marriage",
    "requirements": [
      "WA02"
    ],
    "unlocks": [
      "A40"
    ],
    "namejp": "二人でする初めての任務！",
    "nameen": "A Couple's First Quest",
    "req": "Defeat the boss in 4-3 with a level 100+ flagship (with S rank)",
    "resrew": "300 / 300 / 300 / 300",
    "otherrew": "<span class='futon'>Furniture: Thin Futon</span>"
  }
}