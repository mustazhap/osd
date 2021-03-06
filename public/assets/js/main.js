 $(document).ready(function(){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


  if($("header").find(".header__nav_sub").length){
      $("body").css("padding-top","140px")
  }else{
    $("body").css("padding-top","87px")
  }

  var lastScrollTop = 0;
    $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st == 0){
        $("header").css("box-shadow", "none");
    } else {
        $("header").css("box-shadow", "0 1px 0.94px 0.06px rgba(0,0,0,.23)");
    }
    lastScrollTop = st;
    });

  $('.owl-service').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay: true,
    animateOut: 'fadeOutLeft',
    animateIn: 'fadeInRight',
    navText: ['<span class="icon-prev"></span>', '<span class="icon-down"></span>'],
    responsive:{
        0:{
            items:1,
            touchDrag: true,
            mouseDrag: true,
        },
        570:{
            items:1,
            touchDrag: false,
            mouseDrag: false,
        }
        
    }
    })
    $('.owl-process').owlCarousel({
        loop:true,
        margin: 20,
        nav:true,
        dots:false,
        navText: ['<span class="icon-prev"></span>', '<span class="icon-next"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    })

    // projects
    if(w<1000){
        $('.owl-projects').owlCarousel({
            loop:false,
            margin: 0,
            nav:true,
            dots:false,
            touchDrag: false,
            mouseDrag: false,
            navText: ['<span class="icon-lleft"></span>', '<span class="icon-rright"></span>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items: 3
                }
            }
        })
        if(w>600){
            var owlprojects = $('.owl-projects');
            owlprojects.owlCarousel();
            $(".owl-projects").find(".active").eq(1).addClass("owl-active-act");
           
            $('.owl-next').click(function() {
                owlprojects.trigger('next.owl.carousel');
                $(".owl-projects").find(".owl-item").removeClass("owl-active-act");
                $(".owl-projects").find(".active").eq(1).addClass("owl-active-act");
          
            })
            $('.owl-prev').click(function() {
                owlprojects.trigger('prev.owl.carousel');
                $(".owl-projects").find(".owl-item").removeClass("owl-active-act");
                $(".owl-projects").find(".active").eq(1).addClass("owl-active-act");
            })
        }
        if(w<600){
            var owlprojects = $('.owl-projects');
            owlprojects.owlCarousel();
            $(".owl-projects").find(".active").eq(0).addClass("owl-active-act");
        
            $('.owl-next').click(function() {
                owlprojects.trigger('next.owl.carousel');
                $(".owl-projects").find(".owl-item").removeClass("owl-active-act");
                $(".owl-projects").find(".active").eq(0).addClass("owl-active-act");
        
            })
            $('.owl-prev').click(function() {
                owlprojects.trigger('prev.owl.carousel');
                $(".owl-projects").find(".owl-item").removeClass("owl-active-act");
                $(".owl-projects").find(".active").eq(0).addClass("owl-active-act");
            })
        }
        
    }
 

    // partners
    $('.owl-partners').owlCarousel({
        loop:true,
        margin: 20,
        nav:true,
        dots:false,
        touchDrag: false,
        mouseDrag: false,
        navText: ['<span class="icon-prev"></span>', '<span class="icon-next"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items: 3
            },
            1000:{
                items: 7
            }
        }
    })

    var owl2 = $('.owl-partners');
    owl2.owlCarousel();
    $('.owl-partners').find(".owl-next").click(function() {
        owl2.trigger('next.owl.carousel');
        $(".owl-partners").find(".active:eq(0), .active:eq(6)").find("img").css("transform", "scale(0.5)").css({"filter":"grayscale(100%)", "-webkit-filter":"grayscale(100%)"});
        $(".owl-partners").find(".active:eq(1), .active:eq(5)").find("img").css("transform", "scale(0.6)").css({"filter":"grayscale(100%)", "-webkit-filter":"grayscale(100%)"});
        $(".owl-partners").find(".active:eq(2), .active:eq(4)").find("img").css("transform", "scale(0.8)").css({"filter":"grayscale(100%)", "-webkit-filter":"grayscale(100%)"});
        $(".owl-partners").find(".active:eq(3)").find("img").css({"transform": "scale(1)", "filter":"grayscale(0)", "-webkit-filter":"grayscale(0%)"});  
        var selected = $(".owl-partners").find(".active:eq(3)").find("img").attr("rel");
        var image = $(".partners__img");
        image.fadeOut('fast', function () {
            image.attr('src', selected);
            image.fadeIn('fast');
    }); 
    })
    $('.owl-partners').find('.owl-prev').click(function() {
        owl2.trigger('next.owl.carousel');
        $(".owl-partners").find(".active:eq(0), .active:eq(6)").find("img").css("transform", "scale(0.5)").css("transform", "scale(0.5)").css({"filter":"grayscale(100%)", "-webkit-filter":"grayscale(100%)"});
        $(".owl-partners").find(".active:eq(1), .active:eq(5)").find("img").css("transform", "scale(0.6)").css("transform", "scale(0.5)").css({"filter":"grayscale(100%)", "-webkit-filter":"grayscale(100%)"});
        $(".owl-partners").find(".active:eq(2), .active:eq(4)").find("img").css("transform", "scale(0.8)").css("transform", "scale(0.5)").css({"filter":"grayscale(100%)", "-webkit-filter":"grayscale(100%)"});
        $(".owl-partners").find(".active:eq(3)").find("img").css({"transform": "scale(1)", "filter":"grayscale(0)", "-webkit-filter":"grayscale(0%)"});  
            var selected = $(".owl-partners").find(".active:eq(3)").find("img").attr("rel");
            var image = $(".partners__img");
            image.fadeOut('fast', function () {
                image.attr('src', selected);
                image.fadeIn('fast');
        });   
    })

    $(".owl-partners").find(".active:eq(0), .active:eq(6)").find("img").css("transform", "scale(0.5)").css("transform", "scale(0.5)").css({"filter":"grayscale(100%)", "-webkit-filter":"grayscale(100%)"});
    $(".owl-partners").find(".active:eq(1), .active:eq(5)").find("img").css("transform", "scale(0.6)").css("transform", "scale(0.5)").css({"filter":"grayscale(100%)", "-webkit-filter":"grayscale(100%)"});
    $(".owl-partners").find(".active:eq(2), .active:eq(4)").find("img").css("transform", "scale(0.8)").css("transform", "scale(0.5)").css({"filter":"grayscale(100%)", "-webkit-filter":"grayscale(100%)"});
    $(".owl-partners").find(".active:eq(3)").find("img").css({"transform": "scale(1)", "filter":"grayscale(0)", "-webkit-filter":"grayscale(0%)"});  
    $(".partners__img").attr("src", $(".owl-partners").find(".active:eq(3)").find("img").attr("rel"));    


    $('.owl-review').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        dots:false,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        navText: ['<span class="icon-prev"></span>', '<span class="icon-next"></span>'],
        responsive:{
            0:{
                items:1
            }
        }
    })

    $('.owl-about').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        dots:false,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        navText: ['<span class="icon-prev"></span>', '<span class="icon-next"></span>'],
        responsive:{
            0:{
                items:1
            }
        }
    })
    $('.owl-traning').owlCarousel({
        loop:false,
        margin: 10,
        nav:true,
        dots:false,
        
        navText: ['<span class="icon-pr_prev"></span>', '<span class="icon-pr-next"></span>'],
        responsive:{
            0:{
                items:4
            }
        }
    })
    $('.owl-relize').owlCarousel({
        loop:false,
        margin: 40,
        nav:true,
        dots:false,
        
        navText: ['<span class="icon-pr_prev"></span>', '<span class="icon-pr-next"></span>'],
        responsive:{
            0:{
                items:1
            },
            850:{
                items:2
            }
        }
    })

    $(".cmenu-button").click(function(){
        $(".career__side").css("left", "0");
    });
    // map on contacts
    $(".contacts__map").find(".map").eq(0).css("display", "none");
    $(".show-map").eq(1).addClass("diss");


    $(".show-map").click(function(){
        if($(this).hasClass("diss")){

        }else{
            $(".show-map").removeClass("diss");
            $(this).addClass("diss");
            var a = $(this).attr("rel");
            $(".contacts__map").find(".map").eq(0).css("display", "none");
            $(".contacts__map").find(".map").eq(1).css("display", "none");
            $(".contacts__map").find(".map").eq(a).css("display", "block");

        }
    })

    // traning
        $name = $(".traning__info").eq(0).find(".tran-name").html();
        $date = $(".traning__info").eq(0).find(".tran-date").html();
        $descr = $(".traning__info").eq(0).find(".tran-descr").html();
        $time = $(".traning__info").eq(0).attr(".tran-time");
        $cost = $(".traning__info").eq(0).attr(".tran-cost");
        $place = $(".traning__info").eq(0).attr(".tran-place");

        $(".traning__item-title").html($name);
        $(".traning__item-time").html($time);
        $(".traning__item-date").html($date);
        $(".traning__item-place").html($place);
        $(".traning__item-descr").html($descr);
        $(".traning__item-cost").html($cost);
        
    $(".traning__info").click(function(){
        $name = $(this).find(".tran-name").html();
        $date = $(this).find(".tran-date").html();
        $descr = $(this).find(".tran-descr").html();
        $time = $(this).attr("tran-time");
        $cost = $(this).attr("tran-cost");
        $place = $(this).attr("tran-place");

        $(".traning__item-title").html($name);
        $(".traning__item-time").html($time);
        $(".traning__item-date").html($date);
        $(".traning__item-place").html($place);
        $(".traning__item-cost").html($cost);
        $(".traning__item-descr").html($descr);
    })
   
    // career list
    $(".career__list li").click(function(){
        var $this = $(this).attr("rel");
        $(".career__list li").removeClass("active-career");
        $(this).addClass("active-career");
        $(".career__block").css("display", "none");
        $(".career__block").eq($this).css("display", "flex");
    })
    if(w > 1160){
    $(".career-back").click(function(){
        $(".career__page").toggleClass("side-active");
    })
    }
    else{
        $(".career-back").click(function(){
            $(".career__side").css("left", "-200%");
        })
    }

    // popup
    $(".popup__button").click(function(){ //popup call-button
        $el = $(this);
        $(".popup").eq($el.attr("rel")).show().css("display", "flex");
        $("body").css("overflow", "hidden");
    })
    $(".relize__block-img").click(function(){ //popup call-button
        $el = $(this);
        $("body").css("overflow", "hidden");
        $(".popup").eq($el.attr("rel")).show().css("display", "flex");
    })
    $(".fa-times").click(function(){ //popup close-button
        $("body").css("overflow", "auto");
        $(".popup").hide();
    })

    $(".popup__close").click(function(){ //popup close-button
        $("body").css("overflow", "auto");
        $(".popup").hide();
    })
    $(".popup").click(function(){ //popup hide on body
        $(this).hide();
        $("body").css("overflow", "auto");
    })
    $(".popup__wrapper").click(function(event){ //popup not hide on text
        event.stopPropagation();
    })

  // Menu
  $(".mob_menu").click(function(event){
    if($(this).hasClass("mob_active")){
      $(".mob_block").css("left", "-100%");
      $("body").css("overflow","auto");
        
    }else{
      $(".mob_block").css("left", "0%");
      $("body").css("overflow","hidden");
      $(this).removeClass("mob_active");
    }
    event.stopPropagation();
  });

  $(".mob_close").click(function(){
    $(".mob_block").css("left", "-100%");
    $("body").css("overflow","auto");
    $(".mob_block").removeClass("mob_active");
});

$("body").click(function(){
    $(".mob_block").css("left", "-100%");
    $("body").css("overflow","auto");
    $(".mob_block").removeClass("mob_active");
});

$(".mob_block").click(function(event){
    event.stopPropagation();
});


// 


// Select menu

$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});

// 


// Textarea
$(".textarea").click(function(event){
    if($(".contact__mail").css("right") == "10px"){
        $(".contact__mail").css({"opacity":"0", "visibility":"hidden"});
    }
    $(document).click(function() {
        $(".contact__mail").css({"opacity":"1", "visibility":"visible"});
    });
})

// 

// File Upload
$( '.file' ).each( function()
	{
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function( e )
		{
			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				$label.find( 'span' ).html( fileName );
			else
				$label.html( labelVal );
		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });
// 

// Popup - Apply for Job

    $(".apply-button").click(function(){
        $(".apply").show().css("display", "flex");
        $("body").css("overflow", "hidden");
    });
    $(".apply__wrapper").click(function(event){
        event.stopPropagation();        
    });
    $(".fa-times").click(function(){
        $(".apply").hide();
        $("body").css("overflow", "auto");
        
    });
    $(".apply").click(function(){
        $(".apply").hide();
        $("body").css("overflow", "auto");

    });
});
// 

// Spoiler
$(".spoiler__title").click(function(){
    $(this).toggleClass("spoiler__title-active");
    $(this).next().slideToggle();
})

// 

// Filter
$(".filter-show").click(function(){
    $(".search__col").slideToggle();
});

$(".filter-cancel").click(function(){
    $(".search__col").slideToggle();
});