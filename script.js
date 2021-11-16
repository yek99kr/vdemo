const video1 = document.querySelector(".top");
const video2 = document.querySelector(".bottom");

document.addEventListener("click", function () {
  video1.play();
  video2.play();
  video1.loop = true;
  video1.volume = 0;
});

function getNode(n, v) {
  n = document.createElementNS("http://www.w3.org/2000/svg", n);
  for (var p in v)
    n.setAttributeNS(
      null,
      p.replace(/[A-Z]/g, function (m, p, o, s) {
        return "-" + m.toLowerCase();
      }),
      v[p]
    );
  return n;
}

// requestAnimationFrame(draw);
let x1, y1;
var _svgNS = "http://www.w3.org/2000/svg";
var parent = document.getElementById("myClip");

var isTouch = "ontouchstart" in document.documentElement;

//Check Device //All Touch Devices
if (isTouch) {
  function mouseMove(e) {
    e.preventDefault();
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    var mask = getNode("rect", {
      x: `${clientX - 30 + "px"}`,
      y: `${clientY - 30 + "px"}`,
      width: 60,
      height: 60,
    });
    parent.appendChild(mask);
  }
  document.addEventListener("touchmove", mouseMove);
} else {
  function mouseMove(e) {
    e.preventDefault();
    const clientX = e.clientX;
    const clientY = e.clientY;
    var mask = getNode("rect", {
      x: `${clientX - 30 + "px"}`,
      y: `${clientY - 30 + "px"}`,
      width: 60,
      height: 60,
    });

    parent.appendChild(mask);
  }
  
document.addEventListener("mousemove", mouseMove);
}

// function mouseMove(e) {
//   e.preventDefault();
//   //   var mask = document.createElementNS(_svgNS, "circle");
//   //   mask.setAttribute("cx", `${(e.pageX - 20 || e.clientX - 20) + "px"}`);
//   //   mask.setAttribute("cy", `${(e.pageY - 20 || e.clientY - 20) + "px"}`);
//   //   mask.setAttribute("fill", "blue");
//   const clientX = e.clientX || e.touches[0].clientX;
//   const clientY = e.clientY || e.touches[0].clientY;
//   var mask = getNode("rect", {
//     x: `${clientX - 30 + "px"}`,
//     y: `${clientY - 30 + "px"}`,
//     width: 60,
//     height: 60,
//   });

//   //   mask.style.top = (e.pageY - 20 || e.clientY - 20) + "px";
//   //   mask.style.left = (e.pageX - 20 || e.clientX - 20) + "px";
//   parent.appendChild(mask);
// }


