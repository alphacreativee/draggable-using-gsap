document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable);
  const beforeAfterWrap = document.querySelector(".before-after-wrap");
  const afterImgWrap = beforeAfterWrap.querySelector(".img-wrap.is-after");
  const dragger = beforeAfterWrap.querySelector(".dragger");

  Draggable.create(dragger, {
    type: "x",
    bounds: beforeAfterWrap,
    onDrag: function () {
      const x =
        beforeAfterWrap.offsetWidth / 2 - gsap.getProperty(this.target, "x");
      afterImgWrap.style.clipPath = `inset(0px ${x}px 0px 0px)`;
    },
  });
});
