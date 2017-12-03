window.onload = function () {
    loadXML("welcome.xml", "texts/home/", "welcome");
    loadXML("projects.xml", "texts/projects/", "projects");
};

function loadXML(file, dir, tagName, method = "GET", async = true) {
    var http = new XMLHttpRequest();
    http.open(method, dir + file, async);
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(tagName).innerHTML = this.responseXML.getElementsByTagName(tagName)[0].innerHTML;
        }
    };
    http.send();
}

function showDiv(divClass, div) {
    divList = document.getElementsByClassName(divClass);
    console.log(divList)
    console.log(divList.length)
    for (i = 0; i < divList.length; ++i) {
        divList[i].style.display = divList[i].id == div ? "block" : "none";
        console.log(divList[0] == div)
        console.log(divList[1] == div)
    }
}