const video1 = document.querySelector(".top");
const video2 = document.querySelector(".bottom");

document.addEventListener("click", function () {
  video1.play();
  video2.play();
  video1.loop = true;
  video1.volume = 0;
});

// document.body.appendChild(video1);

// function processVideo() {
//   videoctx.drawImage(video, 0, 0);
// }

// function draw() {
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
// }
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

function mouseMove(e) {
  e.preventDefault();
  //   var mask = document.createElementNS(_svgNS, "circle");
  //   mask.setAttribute("cx", `${(e.pageX - 20 || e.clientX - 20) + "px"}`);
  //   mask.setAttribute("cy", `${(e.pageY - 20 || e.clientY - 20) + "px"}`);
  //   mask.setAttribute("fill", "blue");
  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;
  var mask = getNode("rect", {
    x: `${clientX - 30 + "px"}`,
    y: `${clientY - 30 + "px"}`,
    width: 60,
    height: 60,
  });
  //   mask.style.top = (e.pageY - 20 || e.clientY - 20) + "px";
  //   mask.style.left = (e.pageX - 20 || e.clientX - 20) + "px";
  parent.appendChild(mask);
}

document.addEventListener("mousemove", mouseMove);
document.addEventListener("touchmove", mouseMove);

// async function main() {
//   const canvas = document.querySelector("#canvas");
//   const canvasContext = canvas.getContext("2d");
//   const canvasAspectRatio = canvas.width / canvas.height;

//   const video = document.createElement("video");
//   video.muted = true;
//   video.autoplay = true;
//   video.loop = true;
//   video.playsinline = true;
//   video.src = "1.mp4";

//   const maskImage = document.createElement("img");
//   //   const masks = Array.from([]);

//   maskImage.src = URL.createObjectURL(
//     new Blob(
//       [
//         ` <svg xmlns="http://www.w3.org/2000/svg">
//         <circle cx="60" cy="60" r="60" /></svg>`,
//       ],
//       { type: "image/svg+xml" }
//     )
//   );

//   await Promise.all([
//     video.play(),
//     new Promise((resolve) =>
//       maskImage.addEventListener("load", resolve, { once: true })
//     ),
//   ]);

//   const videoAspectRatio = video.videoWidth / video.videoHeight;

//   const [frameWidth, frameHeight] =
//     canvasAspectRatio <= videoAspectRatio
//       ? [canvas.height * videoAspectRatio, canvas.height]
//       : [canvas.width, canvas.width / videoAspectRatio];
