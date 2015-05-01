(function(){
	//min version of jquery we want
	var v = "1.10.2";
	//check prior inclusion and version
	if(typeof window.jQuery !== 'undefined' || window.jQuery.fn.jquery < v){
		var done = false;
		var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if(!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")){
				done = true;
				init();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else{
		init();
	}

	function imageSwap(){
		var $images = $('img');
		var logo = "http://kristenspencer.ca/wp-content/uploads/2015/04/hy6ix.png";
		$images.attr("src", logo);		
	}

	function getDrake(){
			var $drakeDiv = $("<div/>").html('<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197861717&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
			$drakeDiv.css('display', 'none');
			$('body').append($drakeDiv);

	}




	function makeItBounce(){
		$("head").append($('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.6/animate.min.css' ) );

		setTimeout(function(){
			$('body').addClass('animated infinite bounce');	
		}, 7500);

	}


	
	function init(){
		if(typeof window.hy__the6ix !== 'undefined') {
			return;
		}
		window.hy__the6ix = true;

		makeItBounce();
		imageSwap();
		getDrake();
	}

})();