function testFunc(){
    document.getElementById("menuDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.dropbutton')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropDown = dropdowns[i];
            if (openDropDown.classList.contains('show')){
                openDropDown.classList.remove('show');
            }
        }
    }
}