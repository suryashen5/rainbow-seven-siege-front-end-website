// $(document).ready(function(){
//     var i= 0;
//     var currentImg;
//     var prevImg;
// 	//when the next button is clicked on
// 	$(".arrow-right").on("click", function(){
// 		//increase the display picture index by 1
// 		i = i + 1;
// 		//if we are at the end of the image queue, set the index back to 0
// 		if (i == $(".season-slide").length) {
// 			i=0;
// 		}
// 		//set current image and previous image
// 		currentImg = $(".season-slide").eq(i);
// 		prevImg = $(".season-slide").eq(i-1);
// 		//call function to animate the rotation of the images to the right
// 		animateImage(prevImg, currentImg);	
// 	});
// 	//when the previous button is clicked on
// 	$(".arrow-left").on("click", function(){
// 		//if we are at the beginning of the image queue, set the previous image to the first image and the current image to the last image of the queue
// 		if (i==0) {	
// 			prevImg = $(".season-slide").eq(0);
// 			i=$(".season-slide").length-1;
// 			currentImg = $(".season-slide").eq(i);
// 		}
// 		//decrease the display picture index by 1
// 		else {
// 			i=i-1;
// 			//set current and previous images
// 			currentImg = $(".season-slide").eq(i);
// 			prevImg = $(".season-slide").eq(i+1);
// 		}
// 		//call function to animate the rotation of the images to the left
// 		animateImageLeft(prevImg, currentImg);	
// 	});
// 	//function to animate the rotation of the images to the left
// 	function animateImageLeft(prevImg, currentImg) {
// 		//move the image to be displayed off the visible container to the right
// 		currentImg.css({"left":"-100%"});
// 		//slide the image to be displayed from off the container onto the visible container to make it slide from the right to left
// 		currentImg.css({"left":"0%"}, 1000);
// 		//slide the previous image off the container from right to left
// 		prevImg.css({"left":"100%"}, 1000);
// 	}
// 	//function to animate the rotation of the images to the right
// 	function animateImage(prevImg, currentImg) {
// 		//move the image to be displayed off the container to the left
// 		currentImg.css({"left":"100%"});
// 		//slide the image to be displayed from off the container onto the container to make it slide from left to right
// 		currentImg.css({"left":"0%"}, 1000);
// 		//slide the image from on the container to off the container to make it slide from left to right
// 		prevImg.css({"left":"-100%"}, 1000);	
// 	}
// });

// $(document).ready(function(){
	var slideIndex = 1;
	// });
	function moveSlide (x){
		showSlide(slideIndex += x);
	}

	function showSlide (n){
		var i;
		var slides = $(".season-slide");
		
		if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display="none"; 
		}
		//   for (i = 0; i < dots.length; i++) {
		//       dots[i].className = dots[i].className.replace(" active", "");
		//   }
		slides[slideIndex-1].style.display = "block";  
		//   dots[slideIndex-1].className += " active";
	}
// });


function scrollDown(){
	window.scrollBy(0, 1400);
}

