window.load = function () {
    var request = new XMLHttpRequest();

    request.open("GET", "/texts/home/welcome.txt", true);
    request.onload = function() {
        if (this.status == 200 && this.readyState == 4) {
            var response = this.responseText();
            document.getElementById("welcome-text").innerHTML = response;
        }
    }
    request.send()
}
