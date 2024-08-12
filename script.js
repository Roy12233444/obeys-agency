function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 34);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 0,
  });
  tl.from("#page1", {
    y: 1600,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity:0,
  });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    stagger:0.2,
  })
}

function makeMagnet(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.addEventListener("mousemove", function (e) {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const strength = 100;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const forceX = (deltaX / distance) * Math.min(strength, distance);
      const forceY = (deltaY / distance) * Math.min(strength, distance);

      gsap.to(el, {
        x: forceX,
        y: forceY,
        duration: 0.2,
      });
    });

    el.addEventListener("mouseleave", function () {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power4.out",
      });
    });
  });
}

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });

  makeMagnet("#nav-part2 h4");
}
loadingAnimation();

cursorAnimation();
