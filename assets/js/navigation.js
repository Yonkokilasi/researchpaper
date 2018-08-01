$(document).ready(function () {

    // change color of navbar onscroll
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $logo = $(".logo");
        const navItems = document.querySelectorAll(".nav-link");

        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $logo.toggleClass('logo-scrolled', $(this).scrollTop() > $nav.height());
        navItems.forEach(navItem => navItem.addClass);

    });
    
});
 function addClass() {
    console.log(this);

    this.toggleClass('nav-link-scrolled', $(this).scrollTop() > $nav.height());
}