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
    nav:true,
    dots:false,
    autoplay: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    touchDrag: false,
    mouseDrag: false,
    navText: ['<span class="icon-prev"></span>', '<span class="icon-down"></span>'],
    responsive:{
        0:{
            items:1
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

    $('.owl-review').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        dots:false,
        navText: ['<span class="icon-prev"></span>', '<span class="icon-next"></span>'],
        responsive:{
            0:{
                items:1
            }
        }
    })


  // Menu
  $(".jobs__menu").click(function(){
    if($(this).hasClass("animated")){
      $(".sidebar").css("left", "0");
        if (w > 600){
        $(this).css("left","360px").removeClass("animated").find("i").css("transform", "rotate(180deg)");
        }else{
            $(this).css({"left":"90%"}).removeClass("animated").find("i").css("transform", "rotate(180deg)");
            $("body").css("overflow","hidden");
        }
    }else{
      // $("body").css("overflow-x", "visible");
      $(".sidebar").css("left", "-100%");
      $("body").css("overflow","auto");
      // $(".jobs").css({"position": "relative", "left": "0px"});
      $(this).css("left","15px").addClass("animated").find("i").css("transform", "rotate(0)");  
    }
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