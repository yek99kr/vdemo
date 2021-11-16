// var x = e.clientX || e.touches[0].clientX;
// var y = e.clientY || e.touches[0].clientY;

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var video1 = document.createElement("video");

// var videocanvas = document.createElement("canvas");
// var videoctx = videocanvas.getContext("2d");

// videocanvas.width = 1000;
// videocanvas.height = 500;

// video1.src = "1.mp4";
// video1.style.width = "1000px";
// video1.style.position = "absolute";
// video1.style.left = "0";
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
  //   var mask = document.createElementNS(_svgNS, "circle");
  //   mask.setAttribute("cx", `${(e.pageX - 20 || e.clientX - 20) + "px"}`);
  //   mask.setAttribute("cy", `${(e.pageY - 20 || e.clientY - 20) + "px"}`);
  //   mask.setAttribute("fill", "blue");
  var mask = getNode("rect", {
    x: `${(e.pageX - 20 || e.clientX - 20) + "px"}`,
    y: `${(e.pageY - 20 || e.clientY - 20) + "px"}`,
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

//   const [frameTop, frameLeft] = [
//     (canvas.height - frameHeight) / 2,
//     (canvas.width - frameWidth) / 2,
//   ];

//   const maskAspectRatio = maskImage.naturalWidth / maskImage.naturalHeight;

//   const [maskWidth, maskHeight] =
//     canvasAspectRatio <= maskAspectRatio
//       ? [canvas.width, canvas.width / maskAspectRatio]
//       : [canvas.height * maskAspectRatio, canvas.height];

//   const [maskTop, maskLeft] = [
//     (canvas.height - maskHeight) / 2,
//     (canvas.width - maskWidth) / 2,
//   ];

//   requestAnimationFrame(function frame() {
//     canvasContext.globalCompositeOperation = "destination-over";
//     canvasContext.drawImage(
//       maskImage,
//       maskLeft,
//       maskTop,
//       maskWidth,
//       maskHeight
//     );

//     canvasContext.globalCompositeOperation = "source-in";
//     canvasContext.drawImage(
//       video,
//       0,
//       0,
//       video.videoWidth,
//       video.videoHeight,
//       frameLeft,
//       frameTop,
//       frameWidth,
//       frameHeight
//     );

//     requestAnimationFrame(frame);
//   });
// }

// self.addEventListener("DOMContentLoaded", () => main().catch(console.error), {
//   once: true,
// });
