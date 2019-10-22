var animation = anime({
  targets: 'div.box',
  translateY: [
        { value: 100, duration: 500 },
        { value: 0, duration: 800 },
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    // backgroundColor: '#000',
    // opacity: '0.7',
    // element, iteration, total targets
    delay: function(e1, i, l){ return i * 1000},
    autoplay: false,
    loop: true
});

document.querySelector('#boxes .play').onclick = animation.play;
document.querySelector('#boxes .pause').onclick = animation.pause;

// anime({
//   targets: 'div.box.red',
//   translateY: [
//         { value: 200, duration: 500 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine'
//     }
// });

// anime({
//   targets: 'div.box.blue',
//   translateY: [
//         { value: 200, duration: 500, delay: 1000 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 1000
//     }
// });

// anime({
//   targets: 'div.box.green',
//   translateY: [
//         { value: 200, duration: 500, delay: 2000 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 2000
//     }
// });

// anime({
//   targets: 'div.box.yellow',
//   translateY: [
//         { value: 200, duration: 500, delay: 3000 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 3000
//     }
// });