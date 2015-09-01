$(document).ready(function(){
	//var sidebar= $(".pantalla .sidebar");

	$(".pantalla .button1").click(function(){
		console.log($(".pantalla .sidebar").css("width"));

		switch ($(".pantalla .sidebar").css("width")){
			case "160px":
				$(".pantalla .sidebar").animate({'width': '0px'},1000);
				//sidebar.css("width","0%");
				break;
			case "0px":
				$(".pantalla .sidebar").animate({'width': '160px'},1000);
				//sidebar.css("width", "13%");
				break;

		}
	});

	/*function slide (menu_s){
		menu_s.animate(
		{'width': '0%'}, 1000);
	}
		$(".pantalla .button1").bind ("click", function(event)
		{
			var menu_s=$(".pantalla .sidebar");
			slide (menu_s);

		});*/
	});