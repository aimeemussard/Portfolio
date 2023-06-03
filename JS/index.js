
$(document).ready(function(){
    showHome();
})
 
 $("#home-button").on("click", showHome());
    $("#about-button").on("click", showAbout());
    $("#projects-button").on("click", showProjects());
    $("#contact-button").on("click", showContact());


function showHome(){
    //alert("home");
   
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'auto'
    });
}

function showAbout(){
    //alert("about");
    window.scroll({
        top: 10, 
        left: 0, 
        behavior: 'auto'
    });
}

function showProjects(){
    //alert("projects");
    window.scroll({
        top: 20, 
        left: 0, 
        behavior: 'auto'
    });
}

function showContact(){
    //alert("contact");
    window.scroll({
        top: 30, 
        left: 0, 
        behavior: 'auto'
    });
}