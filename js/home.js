$(document).ready(function(){
	var cont=0;
	var band1=true;
	var band2=true;
	var band3=true;
	var nl='110px';
	var linput=$(".screen .screen1 .headbar .searchbox .lupa").css("width");
	//var mitem = $(".screen .screen1 .menu .sidebar .menu_item .icono");
	var mnitem = $(".screen .screen1 .menu .sidebar .menu_item .iconon");
	var menuitem = $(".screen .screen1 .menu .sidebar .menu_item");


	var homeicon= $(".screen .screen1 .menu .sidebar .menu_item #homeicon");
	var tagicon= $(".screen .screen1 .menu .sidebar .menu_item #tagicon");
	var psicon= $(".screen .screen1 .menu .sidebar .menu_item #psicon");
	var xboxicon= $(".screen .screen1 .menu .sidebar .menu_item #xboxicon");
	var ninicon= $(".screen .screen1 .menu .sidebar .menu_item #ninicon");
	var pcicon= $(".screen .screen1 .menu .sidebar .menu_item #pcicon");
	console.log(linput);
//function hideIcon(self) {
 //   self.style.backgroundImage = 'none';
  //  console.log("hola");	
//}
$(".screen .screen1 .headbar .searchbox .lupa").css("width", "120px");
$(".screen .screen1 .headbar .searchbox .lupa").keypress(function(){
	
	var tam = $(this).val().length;
	console.log(tam);
	if (tam >= 13){
		var t = 120+((tam - 13)*4);
		var y = t+'px';
		if (t<300){
		$(this).css("width", y);
		}
		else{
			$(this).css("width", '300px');
		}

	}
	else{
		$(this).css("width", '120px');
	}

});
$(".screen .screen1 .headbar .button1").click(function(){
		console.log($(".screen .screen1 .menu").css("width"));

		switch ($(".screen .screen1 .menu").css("width")){
			case "120px":
				$(".screen .screen1 .menu").animate({'width': '0px'},400);
				//mitem.animate({'width': '0px'},400);
				homeicon.animate({'width': '0px'},400);
				tagicon.animate({'width': '0px'},400);
				psicon.animate({'width': '0px'},400);
				xboxicon.animate({'width': '0px'},400);
				pcicon.animate({'width': '0px'},400);
				mnitem.animate({'width': '0px'},400);
				menuitem.animate({'width': '0px'},400);
				//menuitem.css('display', 'none');	

				/*homeicon.css('display', 'none');
				tagcon.css('display', 'none');	
				psicon.css('display', 'none');	
				xboxicon.css('display', 'none');	
				pcicon.css('display', 'none');		
				mnicon.css('display', 'none');	
				band3=true;*/


				//sidebar.css("width","0%");
				break;
			case "0px":
				$(".screen .screen1 .menu").animate({'width': '120px'},400);
				//mitem.animate({'width': '50px'},400);
				homeicon.animate({'width': '42px'},400);
				tagicon.animate({'width': '58px'},400);
				psicon.animate({'width': '52px'},400);
				xboxicon.animate({'width': '44px'},400);
				pcicon.animate({'width': '32px'},400);
				mnitem.animate({'width': '77px'},400);
				menuitem.animate({'width': '60px'},400);
				//band3=false;
				//sidebar.css("width", "13%");

				//homeicon.css('display', 'inline');	
				//tagcon.css('display', 'inline');	
				//psicon.css('display', 'inline');	
				/*xboxicon.css('display', 'inline');	
				pcicon.css('display', 'inline');		
				mnicon.css('display', 'inline');*/	
				//menuitem.css('display', 'inline');	
				break;

		}
	});

	if(band3)
	{
		console.log(band3);
	$(".screen .screen1 .menu .sidebar .menu_item").hover(function(){
        $(this).css("background-color", "rgba(255,255,255,0.16)");
        }, function(){
        $(this).css("background-color", "rgba(123,125,127,1)");
    });
	}
/*$(".screen .screen1 .headbar .searchbox .in1").click(function(){
    
  

    if($(this).hasClass('lupa'))
    {
    	
        $(this).removeClass('lupa');
        $(this).addClass('nolupa');
        
    }
    else 
    {	//alert($(this).val.length);
    	
    	if ($(this).val.length <= 1){
            $(this).removeClass('nolupa');
            $(this).addClass('lupa');
           
        }
        
    }
});*/
   

});