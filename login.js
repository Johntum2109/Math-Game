// Log In
function logIn() 
{
    // Player
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    // Store Players to Local Storage
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    // Navigate
    window.location.replace("game.html");

    // SetPoints Player 1
    document.getElementById("player1p").innerHTML = localStorage.getItem("player1");
    document.getElementById("player1Point").innerHTML = 0;

    // SetPoints Player 2
    document.getElementById("player2p").innerHTML = localStorage.getItem("player2");
    document.getElementById("player2Point").innerHTML = 0;
}