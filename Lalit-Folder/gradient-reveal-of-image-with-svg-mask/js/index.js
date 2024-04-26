TweenMax.set("#theSVG", {xPercent:-50, yPercent:-50, top:"50%", left:"50%"})
TweenMax.set("#theGradient", {attr:{x1:800, x2:1601}})
TweenMax.to("#theGradient", 2, {attr:{x1:-800, x2:1}, repeat:-1, yoyo:true, repeatDelay:0.5, ease:Power2.easeIn})
// adjust the x1 attribute in the tween to see how the animation changes