
$('.carousel-control-next').on("click", function() {
	getSlideNumber();
});

$('.carousel-control-prev').on("click", function() {
	getSlideNumber();
});

function getSlideNumber() {
	var slideNumber = $(".active .carousel-caption").text();
	$(".slide-number").text(slideNumber);
}

$('#carousel-top').bind('slide.bs.carousel', function (e) {
    console.log('slide event!');
    getSlideNumber();
});