/*
    http://www.dailycoding.com/
        Rewritten by Andreas Voigt - http://voigt.se/sandbox/imageLens/demo3.html
*/
(function ($) {
    var isTouch = 'ontouchstart' in window,
        defaults = {
            lensSize: 100,
            borderSize: 4,
            borderColor: '#888'
        };
    $.fn.imageLens = function (options) {
        options = $.extend({}, defaults, options);
        var lensRadius = options.lensSize / 2 + options.borderSize,
            br = 'border-radius:',
            lensStyle = 'width:' + options.lensSize + 'px;height:' + options.lensSize + 'px;display: none;'
                + '-moz-' + br + lensRadius + 'px;'    // <FF4
                + '-webkit-' + br + lensRadius + 'px;' // Older webkit versions
                + br + lensRadius + 'px;'
                + 'border:' + options.borderSize + 'px solid ' + options.borderColor  + ';'
                + 'background-repeat:no-repeat;position:absolute;z-index:9999';

        return this.each(function () {
            var img = $(this).wrap('<span></span>'),
                width = img.width(),
                height = img.height(),
                setPosition = function ( e ) {
                    var offset = img.offset(),
                        x = (e.pageX - offset.left),
                        y = (e.pageY - offset.top),
                        bgLeftPos = -(x * widthRatio - lRadius),
                        bgTopPos = -(y * heightRatio - lRadius);

                    lens.css({
                        left: x - lRadius,
                        top: y - lRadius,
                        backgroundPosition: bgLeftPos + 'px ' + bgTopPos + 'px ',
                        cursor: 'crosshair',
                        display: x < 0 || y < 0 || x > width || y > height ? 'none' : ''
                    });
                    e.preventDefault();
                },
                parent = img.parent().css({position:'relative',display: 'inline-block', width: width,height: height}),
                imageSrc = options.imageSrc || $(this).data('src-full') || $(this).attr('src'),
                bigImg = new Image(),
                lens = $('<div style="' + lensStyle + '">&nbsp;</div>').appendTo(parent).addClass(options.lensCss).css({ backgroundImage: 'url(' + imageSrc + ')'}),
                widthRatio, heightRatio,
                lRadius = options.lensSize / 2; //Lens Radius

            //parent.bind(isTouch ? 'touchstart touchend touchmove' : 'mouseenter mouseleave mousemove', setPosition);
            parent.bind((isTouch ? 'touchstart touchend touchmove' : '') + 'mouseenter mouseleave mousemove', setPosition);

            bigImg.onload = function() {
                widthRatio = this.width / width;
                heightRatio = this.height / height;
            };
            bigImg.src = imageSrc;

        });
    };
})(jQuery);

$(document).ready(function() {
  zoomImage();
});
