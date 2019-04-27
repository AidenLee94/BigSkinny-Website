function openNav() {
			    $("#sidenav").css("visibility", "visible");
				$("#sidenav").css("transform","translateX(0)");
			    $(".mask").css("visibility", "visible");
			    $(".mask").css("opacity", "1");
			    $(".mask").attr('onclick', 'closeNav()');
		}

		function closeNav() {
			$("#sidenav").css("transform","translateX(-255px)"); 
			window.setTimeout(function(){
			    $("#sidenav").css("visibility", "hidden");
			}, 400);
			$("#main").removeAttr("onclick");
			$(".mask").css("opacity", "0");
			window.setTimeout(function(){
				$(".mask").css("visibility", "hidden"); 
				}, 400);
		    $(".mask").removeAttr("onclick");
		}	