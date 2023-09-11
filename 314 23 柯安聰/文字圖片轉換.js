var button = document.getElementById("myButton1");
var preview = document.getElementById("preview");

button.addEventListener("mouseenter", function() {
  var img = document.createElement("img");
  img.src = "金背.jpg"; // 替換為實際的圖片路徑
  preview.appendChild(img);
});

button.addEventListener("mouseleave", function() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }
});

var button = document.getElementById("myButton2");
var preview = document.getElementById("preview");

button.addEventListener("mouseenter", function() {
  var img = document.createElement("img");
  img.src = "金背.jpg"; // 替換為實際的圖片路徑
  preview.appendChild(img);
});

button.addEventListener("mouseleave", function() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }
});
