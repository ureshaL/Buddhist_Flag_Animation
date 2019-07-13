var h_array = [
    $('#h1'),
    $('#h2'),
    $('#h3'),
    $('#h4'),
    $('#h5')
];

var v_array = [
    $('#v1'),
    $('#v2'),
    $('#v3'),
    $('#v4'),
    $('#v5')
];

setInterval(function () {
    moveArray(h_array);
    moveArray(v_array);
}, 500);

function moveArray(array) {
    let lastItem = array.pop();
    array.unshift(lastItem);
    for (let i of array) {
        i.removeClass('active');
    }
    array[0].addClass('active');
}