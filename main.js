Canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
carimg1 = "https://www.fg-a.com/cars/formula-one-race-car-2018.jpg"
carimg2 = "https://www.pngitem.com/pimgs/m/329-3298821_clip-art-fiat-palio-auto-there-race-car.png"
car1_x = 10
car1 = 10
car1_height = 90
car1_width = 100
car2_x = 10
car2 = 10
car2_height = 90
car2_width = 100
function add(){
    carimg1 = new Image()
    carimg1.onload = uploadBackground
    carimg1.src = backgroundimg
    carimg2 = new Image()
    carimg2.onload = uploadRover
    carimg2.src = roverimg
}
function uploadcar2(){
    ctx.drawImage(car2,car2_x,car2_y,car2_width,car2_height)

}
function uploadcar1(){
    ctx.drawImage(car1,car1_x,car1_y,car1_width,car1_height)

}
window.addEventListener("keydown",myKeyDown)
function myKeyDown(e){
keypress = e.keyCode
console.log(keypress)
if(keypress=="37"){
    Left()
    console.log("left")
}
    if(keypress=="38"){
        Up()
        console.log("up")
    }
    if(keypress=="39"){
        Right()
        console.log("right")
    }
    if(keypress=="40"){
        Down()
        console.log("down")
    }
}