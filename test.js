function resizeMainDiv() {
        var maindiv_el = document.getElementById('content-wrapper');
        var div_w = maindiv_el.clientWidth, div_h = maindiv_el.clientHeight;

        var scale_w = window.innerWidth / div_w;
        var scale_h = window.innerHeight / div_h;

        pageScale = Math.min(scale_w, scale_h) * 0.95;
        document.body.style.webkitTransform = 'scale(' + pageScale + ')';
        document.body.style.msTransform = 'scale(' + pageScale + ')';
        document.body.style.transform = 'scale(' + pageScale + ')';

        var move_x = ( window.innerWidth - maindiv_el.clientWidth * pageScale) / 2;
        var move_y = ( window.innerHeight - maindiv_el.clientHeight * pageScale) / 2;

        move_x = move_x / pageScale;
        move_y = move_y / pageScale;

        maindiv_el.style.top = move_y + 'px';
        maindiv_el.style.left = move_x + 'px';
     }
