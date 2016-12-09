var images = new Array()
    function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
        }
    }
    preload(
	    "img/1.png",
		"img/2.png",
		"img/3.png",
		"img/4.png",
		"img/5.png",
		"img/6.png",
		"img/7.png",
		"img/8.png",
		"img/9.png",
		"img/10.png",
		"img/11.png",
		"img/12.png",
		"img/13.png",
		"img/14.png",
		"img/15.png",
		"img/16.png"
    )

var img_src = [
    "img/1.png",
	"img/2.png",
	"img/3.png",
	"img/4.png",
	"img/5.png",
	"img/6.png",
	"img/7.png",
	"img/8.png",
	"img/9.png",
	"img/10.png",
	"img/11.png",
	"img/12.png",
	"img/13.png",
	"img/14.png",
	"img/15.png",
	"img/16.png"
];

$(document).mousemove(function(event) {
	var bkg = document.getElementById("bkg");
    var mloc = {
        x: event.pageX,
        y: event.pageY
    };

	if(
        (mloc.x >= 0 && mloc.x <= $(document).width()/4) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/4)
	){
		// console.log("1st row 1st column");
		bkg.src = img_src[0];
	} else if(
        (mloc.x >= $(document).width()/4 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/4)
	){
		// console.log("1st row 2nd column");
		bkg.src = img_src[1];
	} else if(
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()*(3/4)) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/4)
	){
		// console.log("1st row 3rd column");
		bkg.src = img_src[2];
	} else if(
        (mloc.x >= $(document).width()*(3/4) && mloc.x <= $(document).width()) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/4)
	){
		// console.log("1st row 4th column");
		bkg.src = img_src[3];
	} else if(
        (mloc.x >= 0 && mloc.x <= $(document).width()/4) &&
        (mloc.y >= $(document).height()/4 && mloc.y <= $(document).height()/2)
	){
		// console.log("2nd row 1st column");
		bkg.src = img_src[4];
	} else if(
        (mloc.x >= $(document).width()/4 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= $(document).height()/4 && mloc.y <= $(document).height()/2)
	){
		// console.log("2nd row 2nd column");
		bkg.src = img_src[5];
	} else if(
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()*(3/4)) &&
        (mloc.y >= $(document).height()/4 && mloc.y <= $(document).height()/2)
	){
		// console.log("2nd row 3rd column");
		bkg.src = img_src[6];
	} else if(
        (mloc.x >= $(document).width()*(3/4) && mloc.x <= $(document).width()) &&
        (mloc.y >= $(document).height()/4 && mloc.y <= $(document).height()/2)
	){
		// console.log("2nd row 4th column");
		bkg.src = img_src[7];
	} else if(
        (mloc.x >= 0 && mloc.x <= $(document).width()/4) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height()*(3/4))
	){
		// console.log("3rd row 1st column");
		bkg.src = img_src[8];
	} else if(
        (mloc.x >= $(document).width()/4 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height()*(3/4))
	){
		// console.log("3rd row 2nd column");
		bkg.src = img_src[9];
	} else if(
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()*(3/4)) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height()*(3/4))
	){
		// console.log("3rd row 3rd column");
		bkg.src = img_src[10];
	} else if(
        (mloc.x >= $(document).width()*(3/4) && mloc.x <= $(document).width()) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height()*(3/4))
	){
		// console.log("3rd row 4th column");
		bkg.src = img_src[11];
	} else if(
        (mloc.x >= 0 && mloc.x <= $(document).width()/4) &&
        (mloc.y >= $(document).height()*(3/4) && mloc.y <= $(document).height())
	){
		// console.log("4th row 1st column");
		bkg.src = img_src[12];
	} else if(
        (mloc.x >= $(document).width()/4 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= $(document).height()*(3/4) && mloc.y <= $(document).height())
	){
		// console.log("4th row 2nd column");
		bkg.src = img_src[13];
	} else if(
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()*(3/4)) &&
        (mloc.y >= $(document).height()*(3/4) && mloc.y <= $(document).height())
	){
		// console.log("4th row 3rd column");
		bkg.src = img_src[14];
	} else if(
        (mloc.x >= $(document).width()*(3/4) && mloc.x <= $(document).width()) &&
        (mloc.y >= $(document).height()*(3/4) && mloc.y <= $(document).height())
	){
		// console.log("4th row 4th column");
		bkg.src = img_src[15];
	} else {
		bkg.src = img_src[10];
	}
})