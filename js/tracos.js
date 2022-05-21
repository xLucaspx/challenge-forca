function desenhaTracos(caracteres) {
    var x = 0;

    if(caracteres.length == 3) {

        x = 470;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 4) {

        x = 425;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 5) {

        x = 380;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 6) {

        x = 335;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 7) {

        x = 290;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 8) {

        x = 245;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } 
}