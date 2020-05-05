

function next() {
    var curr_img = $('img.active');
    curr_img.removeClass('active');
    var curr_dot = $('i.fa-circle.active');
    curr_dot.removeClass('active');

    var next_img = curr_img.next();
    var next_dot = curr_dot.next();

    if (next_img.length != 0) {
        next_img.addClass('active');
        next_dot.addClass('active');
    }
    else {
        $('img:first-child').addClass('active');
        $('i.fa-circle:first-child').addClass('active');
    }
}

$('#next').click(next)
setInterval(next, 3000);
$('#prev').click(function(){
    var curr_img = $('img.active');
    curr_img.removeClass('active');
    var curr_dot = $('i.fa-circle.active');
    curr_dot.removeClass('active');

    var prev_img = curr_img.prev();
    var prev_dot = curr_dot.prev();

    if (prev_img.length != 0) {
        prev_img.addClass('active')
        prev_dot.addClass('active');
    }
    else {
        $('img:last-child').addClass('active')
        $('i.fa-circle:last-child').addClass('active');
    }
})
