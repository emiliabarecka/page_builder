import $ from 'jquery';

// const header = document.querySelector('.h1');
// header.addEventListener('click', ()=>{
//     header.classList.add('bg-warning');
// });

$('.h1').on('click',function(){
    $(this).addClass('bg-info')
});

// const links = document.querySelectorAll('a');
// links.forEach(link => {
//     link.classList.add('d-block');
// });

$('a')
    .addClass('d-block bg-warning')
    .text('dupa')
    .css({'text-decoration' : 'none', 'color' : 'black'});

$('#second').find('a').text('kitu');

$('#link').closest('div').addClass('bg-primary');

const $a = $('a');
console.log( $a );

const b = document.querySelectorAll('a');
console.log( b );