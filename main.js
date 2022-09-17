var color = "";
var width = 1;
var mouseEvent = "emp";
var last_position_of_x;
var last_position_of_y;
var last_position_of_touch_x;
var last_position_of_touch_y;

canvas = document.getElementById("painting");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mouseDown)
function my_mouseDown(e) {
  color = document.getElementById("color-of-line").value;
  width = document.getElementById("width-of-line").value;
  console.log(color);
  console.log(width);
  mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", canvas_mouseup);
function canvas_mouseup(e) {
  mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", canvas_mouseleave);
function canvas_mouseleave(e) {
  mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", canvas_mousemove);
function canvas_mousemove(e) {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;


  if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log(last_position_of_x);
    console.log(last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    console.log(current_position_of_mouse_x);
    console.log(current_position_of_mouse_y);
    ctx.stroke();
  }
  last_position_of_x = current_position_of_mouse_x;
  last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
  current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
  current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
  current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
  current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
  ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
  ctx.stroke();

  last_position_of_touch_x = current_position_of_touch_x;
  last_position_of_touch_y = current_position_of_touch_y;
}