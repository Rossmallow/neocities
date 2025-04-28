const reveal_clicks = 5;
let click_count = 0;
let imgur_list = document.getElementById('imgur');
let imgur_hidden = true;
let title = document.getElementById('title');

title.onclick = function() {
    if (click_count <= reveal_clicks) {
        click_count++;
    } else {
        click_count = 0;
        if (imgur_hidden) {
            imgur_list.style.display = 'flex';
            imgur_hidden = false;
        } else {
            imgur_list.style.display = 'none';
            imgur_hidden = true;
        }
    }
};
