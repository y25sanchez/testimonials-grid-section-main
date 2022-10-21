TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".cards", 1, {
  opacity: 0,
  scale: 0,
  cycle: {
    y: [-50, 50],
  },
  stagger: {
    from: "center",
    amount: 0.75,
  },
});
