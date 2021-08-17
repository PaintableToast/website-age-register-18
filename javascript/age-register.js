isOver18();
function hideAgeRestriction(setting) {
    if(setting && (localStorage.getItem("isOver18") != 'false'))
        document.getElementById("age-register-popup").style.display = 'none';
    else 
        document.getElementById("age-register-popup").style.display = 'block';
    set18(setting);
}
function isOver18() {
    if(localStorage.getItem("isOver18") == 'true')
         hideAgeRestriction(true);
    if(localStorage.getItem("isOver18") == 'false')
        window.location = 'https://google.com'
}
function set18(setting) {
    if(localStorage.getItem("isOver18") == 'false')  return; 
    else 
    localStorage.setItem("isOver18", setting);
}
