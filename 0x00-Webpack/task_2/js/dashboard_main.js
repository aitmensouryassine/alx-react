import $ from 'jquery';
import _ from 'lodash';

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

let counter = 0;
function updateCounter() {
	counter += 1;
	$('#count').html(`${counter} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
