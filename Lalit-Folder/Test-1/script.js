function init() {
      // global variables
    var tl  = new TimelineLite();
    var ctaBtn   = $('#ctaBtn');

    // debug animation from console
    window.tl = tl;

    // main animation edit section *****
    tl.addLabel('f1')

        .to(txt01A, 1.5, {alpha:1, x:0, ease: Power2.easeOut}, 'f1+=.5')
        .to(txt01B, 1.5, {alpha:1, x:0, ease: Power2.easeOut}, 'f1+=2')
        .to([txt01A,txt01B], 1, {alpha:0, ease: Power2.easeIn}, 'f1+=4')

    tl.addLabel('f2')
        .to(txt02A, 1.5, {alpha:1, x:0, ease: Power2.easeOut}, 'f2+=.5')
        .to(txt02B, 1, {alpha:1, x:0, ease: Power2.easeOut}, 'f2+=1.5')

        .to([txt02A,txt02B], .5, {alpha:0, ease: Power2.easeIn}, 'f2+=4')

     .addLabel('ff')
        .to(img_Logo, 1 , {alpha:1, ease: Power2.easeOut},'ff+=.5')
        .to(txt_Logo, 1 , {alpha:1, ease: Power2.easeOut},'ff+=.5')
        .to(ctaBox, 1 , {alpha:1, ease: Power2.easeOut},'ff+=1')

 
      // CTA HOVER EFFECT
    var ctaHover = $('#ctaBtn');
    var ctaHoverTl = new TimelineLite();
    ctaHover.mouseover(function () {
        ctaHoverTl.to(this, 0.2, {alpha:.6, ease: Power2.easeOut})
    });
    ctaHover.mouseout(function () {
        ctaHoverTl.to(this, 0.2, {alpha: 1})
    }); 
  };

init();
// GSDevTools.create();