$(document).ready(function() {
    
	if (typeof(Storage) !== "undefined") {
		loadQuests(localStorage.getItem("questState"));
    } else {
		loadQuests(Cookies.get("questState"));
    }
    jsPlumb.setContainer($(".quests"));
    resetQuests();
    
    $("body").on("click", ".quest .switcher", function(e) {
		if ($(this).parent(".quest").hasClass("hidden")) {
			var unlocks = $(this).parent(".quest").data("unlocks");
			clearConnections();
            if (!$(this).parent(".quest").is(".daily, .weekly, .monthly, .quarterly")) {
                addHistory($(this).parent(".quest"), unlocks);
            }
			$(this).parent(".quest").removeClass("hidden");
		} else {
			var req = $(this).parent(".quest").data("req");
			clearConnections();
			removeHistory($(this).parent(".quest"), req);
			$(".quests-switcher").hasClass("temp-show") ? $(this).parent(".quest").addClass("hidden temp-show") : $(this).parent(".quest").addClass("hidden");
		}
    });
    
    $("body").on("click", ".quest:not(.focused)", function(e) {
        var req = $(this).data("req");
        clearConnections();
        findHistory($(this), req);
        $(this).removeClass("inactive");
        $(this).addClass("focused");
    }).on("click", ".switcher", function(e) {
        e.stopPropagation;
        return false;
    });
    
    $("body").on("click", ".quest.focused", function() {
        clearConnections();
    }).on("click", ".switcher", function(e) {
        e.stopPropagation;
        return false;
    });
	
	$(".quests-switcher").on("click", function() {
        clearConnections();
		if ($(this).hasClass("temp-show")) {
			$(".quest").removeClass("temp-show");
			$(this).removeClass("temp-show");
		} else {
			$(".quest.hidden").addClass("temp-show");
			$(this).addClass("temp-show");
		}
	});
	
	$(".clear-selection").on("click", function() {
		clearConnections();
	});
    
    $(".save").on("click", function() {
		hashQuests();
	});
	
	$(window).on('beforeunload', function(){
		hashQuests();
	});
	
	$(".info").on("click", function(e) {
		$(".help").show();
		hashQuests();
		$("#questHash").val(hashArray);
    });
	
	$(".close-help").on("click", function(e) {
		$(".help").hide();
    });
	
	$("#copy-code").on("click", function(e) {
		$("#questHash").select();
		document.execCommand("copy");
    });
	
	$("#load-quests").on("click", function(e) {
		loadQuests($("#questHash").val());
    });
    
});

function clearConnections() {
    $(".quest").removeClass("inactive").removeClass("focused");
    jsPlumb.deleteEveryEndpoint(); 
}


var dynamicAnchors = [
    "TopCenter", "RightMiddle", "BottomCenter", "LeftMiddle",
    "TopRight", "BottomRight", "BottomLeft", "TopLeft",
    [0.25, 0, 0, -1], [0.75, 0, 0, -1],
    [0.125, 0, 0, -1], [0.625, 0, 0, -1],
    [0.375, 0, 0, -1], [0.875, 0, 0, -1],
    [0, 0.25, -1, 0], [0, 0.75, -1, 0],
    [0, 0.125, -1, 0], [0, 0.625, -1, 0],
    [0, 0.375, -1, 0], [0, 0.875, -1, 0],
    [0.25, 1, 0, 1], [0.75, 1, 0, 1],
    [0.125, 1, 0, 1], [0.625, 1, 0, 1],
    [0.375, 1, 0, 1], [0.875, 1, 0, 1],
    [1, 0.25, 1, 0], [1, 0.75, 1, 0],
    [1, 0.125, 1, 0], [1, 0.625, 1, 0],
    [1, 0.375, 1, 0], [1, 0.875, 1, 0]
];

function findHistory(src, req) {
    $.each(req, function(index, value) {
        if ($("#" + value).length && $("#" + value).is(":visible")) {
            $("#" + value).removeClass("inactive");
            jsPlumb.connect({
                source: src,
                target: $("#" + value),
                paintStyle: {
                    stroke: "black",
                    strokeWidth: 2
                },
                endpointStyle: {
                    fill: "black",
                    outlineWidth: 0,
                    radius: 4
                },
                connector: ["Flowchart", { stub: [6, 6], gap: 0, cornerRadius: 5, alwaysRespectStubs: true}],
                anchor: dynamicAnchors
            })
            if ($("#" + value).data("req")) {
                var req = $("#" + value).data("req");
                findHistory($("#" + value), req);
            }
        }
    });
}

function removeHistory(src, req) {
    $.each(req, function(index, value) {
        if ($("#" + value).length && $("#" + value).is(":visible")) {
			$(".quests-switcher").hasClass("temp-show") ? $("#" + value).addClass("hidden temp-show") : $("#" + value).addClass("hidden");
            if ($("#" + value).data("req")) {
                var req = $("#" + value).data("req");
                removeHistory($("#" + value), req);
            }
        }
    });
}

function addHistory(src, unlocks) {
	$.each(unlocks, function(index, value) {
		if ($(this).data("timeout")) {
			var questTimeout = moment($(this).data("timeout"), "YYYY-MM-DD").tz("Asia/Tokyo").hours(5).minutes(0).seconds(0);
		}
		var justNow = moment.tz("Asia/Tokyo");
        if ($("#" + value).length && !questTimeout.isAfter(justNow)) {
            $("#" + value).removeClass("hidden");
            if ($("#" + value).data("unlocks") && !$("#" + value).is(".daily, .weekly, .monthly, .quarterly")) {
                var unlocks = $("#" + value).data("unlocks");
                addHistory($("#" + value), unlocks);
            }
        }
    });
}

var hashArray = [];
function hashQuests() {
	hashArray = [];
	hashResult = "";
	$.each($(".quest"), function(index, value) {
		if ($(this).hasClass("hidden")) {
			hashArray.push("0");
		} else {
			hashArray.push("1");
		}
	});
	hashArray = hashArray.toString().replace(/,/g, '');
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("questState", hashArray);
    } else {
        Cookies.set("questState", hashArray)
    }
}

function loadQuests(hash) {
    tempHash = hash;
    hashArray = [];
    if (tempHash) {
        for (var i = 0, len = tempHash.length; i < len; i++) {
            hashArray.push(tempHash[i]);
        }
        $.each($(".quest"), function(index, value) {
            if (hashArray[index] === "0") {
                $(this).addClass("hidden");
            }
			if (hashArray[index] === "1") {
                $(this).removeClass("hidden");
            }
        });
    }
}

function resetQuests() {
    // Times
    var newUpdate = moment.tz("Asia/Tokyo");
    var jpDaily = moment.tz("Asia/Tokyo").hours(5).minutes(0).seconds(0);
    var lastMonday = moment.tz("Asia/Tokyo").day("Monday");
    var jpWeekly = moment(lastMonday).hours(5).minutes(0).seconds(0);
    var jpMonthly = moment.tz("Asia/Tokyo").days(0).hours(5).minutes(0).seconds(0);
    var jpQuarterlyMar = moment.tz("Asia/Tokyo").month(2).days(0).hours(5).minutes(0).seconds(0);
    var jpQuarterlyJun = moment.tz("Asia/Tokyo").month(5).days(0).hours(5).minutes(0).seconds(0);
    var jpQuarterlySep = moment.tz("Asia/Tokyo").month(8).days(0).hours(5).minutes(0).seconds(0);
    var jpQuarterlyDec = moment.tz("Asia/Tokyo").month(11).days(0).hours(5).minutes(0).seconds(0);
    
    // Check the last update
    if (typeof(Storage) !== "undefined") {
        lastUpdate = localStorage.getItem("lastUpdate");
    } else {
        lastUpdate = Cookies.get("lastUpdate");
    }
    lastUpdate = moment(parseInt(lastUpdate));
    
    // Comparing logic
    if (jpDaily.isAfter(lastUpdate) && newUpdate.isAfter(jpDaily)) {
        $(".quest.daily").removeClass("hidden");
        hashQuests();
    }
    
    if (jpWeekly.isAfter(lastUpdate) && newUpdate.isAfter(jpWeekly)) {
        $(".quest.weekly").removeClass("hidden");
        hashQuests();
    }
    
    if (jpMonthly.isAfter(lastUpdate) && newUpdate.isAfter(jpMonthly)) {
        $(".quest.monthly").removeClass("hidden");
        hashQuests();
    }
    
    if ((jpQuarterlyMar.isAfter(lastUpdate) && newUpdate.isAfter(jpQuarterlyMar)) || (jpQuarterlyJun.isAfter(lastUpdate) && newUpdate.isAfter(jpQuarterlyJun)) || (jpQuarterlySep.isAfter(lastUpdate) && newUpdate.isAfter(jpQuarterlySep)) || (jpQuarterlyDec.isAfter(lastUpdate) && newUpdate.isAfter(jpQuarterlyDec))) {
        $(".quest.quarterly").removeClass("hidden");
        hashQuests();
    }
    
    // Save current time as the last update
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("lastUpdate", newUpdate.valueOf());
    } else {
        Cookies.set("lastUpdate", newUpdate.valueOf());
    }
    
    setTimeout(resetQuests, 60 * 1000);
}