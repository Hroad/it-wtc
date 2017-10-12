$(document).ready(function(){
		$(".search form img").click(function(){
			window.open("http://www.baidu.com/s?wd="+ $(this).siblings().val() +"");
//		使用百度搜索内容
		});
		$(".search form input").focus(function(){
			$(this).val("");
			$(this).css("border","1px #00f solid")
//		当搜索框获取焦点是清空val值
		});
		$(".search form input").blur(function(){
			$(this).css("border","1px #ccc solid")
//		当搜索框失去焦点改变边框
		});
		
//	search   END
		
		var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay : 2000,
		    autoplayDisableOnInteraction : false,
		    keyboardControl : true,
		    // 如果需要分页器
		    pagination : '.swiper-pagination',
			paginationClickable :true,
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		  
		  });  
		
		//	banner   END
		
		
		
		if( ( navigator.appName != "Microsoft Internet Explorer" || isChrome() ) && (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) == null )
				{
				    var dir;
				    var beforeTop=$(window).scrollTop();   
				    $(window).bind("scroll",function(){  
				            afterTop = $(window).scrollTop();               
				            if( afterTop > beforeTop ){//下滚   
								dir="down";
				            }else{//上滚  
								dir="up";
				            }  
				            beforeTop=afterTop;
							var Wh1=$(window).scrollTop();
							var Wh2=Wh1+$(window).height();
							$(".professional,.honor,.recruitment,.working,.situation,.teaching,.test").each(function(){
//								需要移动的显现的div名称
								var Oh1=$(this).offset().top;
								var Oh2=Oh1+$(this).outerHeight(true); 
								var ifshow=$(this).attr("ifshow");
								var paraIn=$(this).attr("paraIn");
								var paraOut=$(this).attr("paraOut");
								if( dir=="down" && Oh1<Wh2 && Oh1>Wh1 && ifshow=="0" ){
									$(this).attr("ifshow","1").removeClass(paraOut).addClass(paraIn);
									if( $(this).attr("iftimetree") == "true" ){
										$(this).next().removeClass("h1").addClass("s1");
									}
								}else if( dir=="up" && Oh2>Wh2 && ifshow=="1" ){
									$(this).attr("ifshow","0").removeClass(paraIn).addClass(paraOut);
									if( $(this).attr("iftimetree") == "true" ){
										$(this).next().removeClass("s1").addClass("h1");
									}
								}
							});
					});
					
				}
//				图片显现      END
				

			
//		作品展示效果
		$( ".hsldr-container" ).hslider({
		  navBar: true,
		  auto: true,
		  delay: 3000
		});
//		作品展示             END
		

		$(".mod").click(function(){
			$("section").toggleClass("model-6");
			$(".nav-menu").slideToggle(1000);
		});
//		NAV     END
});
