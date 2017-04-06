$(document).ready(function() {
   
    $.getJSON("questtracker/js/quests.json", function(data) {
		$.each(data, function(key, val) {
			if (val["requirements"]) {
				var reqs = "data-req='" + JSON.stringify(val["requirements"]) + "'";
			} else {var reqs = '';}
			if (val["unlocks"]) {
				var unlocks = "data-unlocks='" + JSON.stringify(val["unlocks"]) + "'";
			} else {var unlocks = '';}
			if (val["timeout"]) {
				var timeout = "data-timeout='" + val["timeout"] + "'";
			} else {var timeout = '';}
			$(".quests").append(" \
				<div class='" + val["classes"] + "' id='" + val["id"] + "' " + reqs + unlocks + timeout + "> \
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
				$(this).css("background-image", "url('questtracker/img/" + bgPic + ".png')");
			});
		});
	}).done(function() {
		$(".quest").sort(function(a, b){
			return ($(b).text()) < ($(a).text()) ? 1 : -1;    
		}).appendTo('.quests');
	});
	
});