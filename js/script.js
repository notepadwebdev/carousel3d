$(function(){
	
	var CAROUSEL = {
		el: 		$('#carouselWrap'),
		c:			$('#carousel', this.el),
		nav:		$('nav', this.el).fadeIn(1500),
		slides: 	$('section', this.c),
		curr: 		1,
		cYPos:		0,
		init: function(){		
			this.el.on('click', this.advance);
			$('a', this.nav).on('click', this.onNavClick);
			this.spinTo(1);
		},
		onNavClick: function(e){
			e.preventDefault();
			var i = $(e.target).index()+1;
			CAROUSEL.spinTo(i);
		},
		advance: function(e){
			if ($(e.target).is('a')) return;	// user clicked the nav
			var i = (CAROUSEL.curr >= CAROUSEL.slides.length) ? 1 : CAROUSEL.curr + 1;			
			CAROUSEL.spinTo(i);  
		},
		spinTo: function(n){
			var stepsAway = CAROUSEL.curr - n;
			switch(stepsAway) {
				case -1:
				case 3:				
					this.cYPos-=90; 
					break;
				case 1:
				case -3: 
					this.cYPos+=90;
					break;
				case -2:
					this.cYPos-=180; 
					break;
				case 2: 
					this.cYPos+=180; 
					break;
			}
			CAROUSEL.curr = n;
			CAROUSEL.slides.removeClass('active').eq(n-1).addClass('active');
			CAROUSEL.nav.find('a').removeClass('active').eq(n-1).addClass('active');
			CAROUSEL.c.css({
				'-webkit-transform': 'rotateY('+this.cYPos+'deg)',
				'-moz-transform': 'rotateY('+this.cYPos+'deg)'
			}); 
		}
	}
	CAROUSEL.init();
});
