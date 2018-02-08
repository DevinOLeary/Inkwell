import {TweenLite, TimelineLite} from 'gsap';

  {/*animation modules*/}
module.exports = {
  animateListIn: (id) => {
    const list = document.getElementById(id).querySelectorAll('li');
    const tl = new TimelineLite();
    tl.staggerFromTo(list, .8, {opacity: 0, y: 20}, {opacity: 1, y: 0, delay: .6}, .3);
  },
  animateItemIn: (target) => {
    const item = document.getElementById(target);
    TweenLite.fromTo(item, .8, {opacity: 0, y: 20}, {opacity: 1, y: 0, delay: .5});
  },
  animateBlock: (target, type) => {
    type === 'food' ? (
      TweenLite.fromTo(target, .8, {opacity: 0, x: 100}, {opacity: 1, x: 0, delay: .01})
    )
    : (
      TweenLite.fromTo(target, .8, {opacity: 0, x: -100}, {opacity: 1, x: 0, delay: .01})
    )
  },
  animateImage: (target) => {
    TweenLite.fromTo(target, .8, {opacity: 0, x: 100}, {opacity: 1, x: 0, delay: .01})
  }
}
