function dice() {

    // player1
    var dic1 = Math.floor(Math.random() * 6) + 1;
    var player1 = "images/dice" + dic1 + ".png";
    var p1 = document.querySelectorAll("img")[0];
    p1.setAttribute("src", player1);

    // player2
    var dic2 = Math.floor(Math.random() * 6) + 1;
    var player2 = "images/dice" + dic2 + ".png";
    var p2 = document.querySelectorAll("img")[1];
    p2.setAttribute("src", player2);

    // win con
    if (dic1 > dic2) {
        document
            .querySelector("h1")
            .innerHTML = "🎊 player 1 win 🎊";
    } else if (dic2 > dic1) {
        document
            .querySelector("h1")
            .innerHTML = "🎊 player 2 win 🎊";
    } else {
        document
            .querySelector("h1")
            .innerHTML = "!!DRAW!!";
    }
}
