var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    //Additional Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Additional Activity start
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = "color";
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI); ctx.stroke();

        console.log("Last position of x and y coordinates = "); console.log("x = " + last_position_of_x + "y = " + last_position_of_y); ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates = "); console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y); ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); ctx.stroke();

    }
    
}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }

canvas.addEventListener("mouseup", my_mouseup); 
function my_mouseup(e) { mouseEvent = "mouseUP"; }
 canvas.addEventListener("mouseleave", my_mouseleave); 
 function my_mouseleave(e) { mouseEvent = "mouseLeave"; }