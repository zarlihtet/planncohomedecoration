// console.log("hey");

$(document).ready(function(){
	// console.log("hi");

	// Start Back to Top
	$(".btn-backtotops").hide();

	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 400){
			$(".btn-backtotops").show("fade",1000);
		}else{
			$(".btn-backtotops").hide("fade",1000);
		}


	});


	// End Back to Top
	// Start Header

	// Start nav

	// for bugger
	$(".navbuttons").click(function(){
		$(".navbuttons").toggleClass("crossxs");
	});	

	//for nav
	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >=200){
			$(".navbar").addClass("navmenus");
		}else{
			$(".navbar").removeClass("navmenus");
		}
	});

	// End nav

	// End Header

	// Start Properties

	$(".propertylists").click(function(){

		// for active item

		$(this).addClass("activeitems").siblings().removeClass("activeitems");
		// OR
		// $(this).addClass("activeitems");
		// $(this).siblings().removeClass("activeitems");

		// for filter

		let getattvalue = $(this).attr('data-filter');
		// console.log(getattvalue);

		if(getattvalue === "all"){
			$(".filters").show("slide",1000);
		}else{

			$(".filters").hide();

			$(".filters").not("." + getattvalue).hide("slide",1000);

			$(".filters").filter("." + getattvalue).show("slide",1000);
		}
		


	});


	// For image overlay (or) lightbox2
    lightbox.option({
     showImageNumberLabel:false
    });


	// End Properties

	// Start Adv 

	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();

		// console.log(getscrolltop);

		if(getscrolltop >= 900){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}

	});

	// End Adv

	// Start Footer
	const getyear= $("#getyear");
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);
	// End Footer



});