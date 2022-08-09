let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dice1 = changePicture(randomNumber1);
let dice2 = changePicture(randomNumber2);

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);



function changePicture(number) {
    let image = "";
    switch (number) {
        case 1:
            image = "images/dice1.png";
            break;
        case 2:
            image = "images/dice2.png";
            break;
        case 3:
            image = "images/dice3.png";
            break;
        case 4:
            image = "images/dice4.png";
            break;
        case 5:
            image = "images/dice5.png";
            break;
        case 6:
            image = "images/dice6.png";
            break;
    }

    return image;
}


