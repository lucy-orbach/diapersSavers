$(document).ready(function(){
});//document ready


// FOUNDATION //
$(document).foundation();


// SLICK CAROUSELS //


$( '#pcList' ).slick( {
			infinite: false,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});//pcList.slick

$( '#storesCarousel' ).slick( {
	autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
	centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});//storesCarousel.slick

$( '.activeCarousel' ).click(function() {
  $( this ).slickPause();
  $( this ).addClass ( 'pausedCarousel' );
  $( this ).removeClass ( 'activeCarousel' );
  $( this ).click(function() {
  $( this ).slickPlay();
  console.log('hello');
  $( this ).addClass ( 'activeCarousel' );
  $( this ).removeClass ( 'pausedCarousel' );
});
});

// dropdown menu fix //

var triggerBtn = [];
var triggerParent = [];
var innerLink = [];
var otherParent = [];
var myClass = ('clicked');


///////////
// function dropDown ( triggerBtn ){
// 	$('html').click(function() {
//   	if ( triggerBtn.hasClass( myClass) ){
//   		triggerBtn.removeClass( myClass );
//   	}//if
// 	});//html.click
// 	triggerBtn.click(function(event){
//     event.stopPropagation();
//     triggerBtn.toggleClass( myClass);
// 	});																																							
// };//dropdown


function dropDown ( triggerParent, triggerBtn, contentDrop, innerLink, otherParent){
	$('html').click(function() {
  	if ( triggerParent.hasClass( myClass) ){
  		triggerParent.removeClass( myClass );
  	}//if
	});//html.click
	contentDrop.click(function(event){
    event.stopPropagation();
	});
	triggerBtn.click(function(event){
    event.stopPropagation();
    triggerParent.toggleClass( myClass);
    otherParent.removeClass( myClass);
	});
	innerLink.click(function(event){
    event.stopPropagation();
    triggerParent.removeClass( myClass);
    otherParent.addClass( myClass);
	});	
	$('#topSearch').hover(function(event){
    event.stopPropagation();
    triggerParent.removeClass( myClass);
	});																																											
};//dropdown

dropDown ( $('#register'), $('#registerLink'), $('#registerDrop'), $('#logInLinkTo'), $('#logIn') )
dropDown ( $('#logIn'), $('#logInLink'), $('#logInDrop'), $('#registerLinkTo'), $('#register') )







