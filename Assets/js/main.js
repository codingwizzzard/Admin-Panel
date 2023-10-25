$(document).ready(function () {
    // JQUERY FOR SIDEBAR TOGGLE
    $('.bar').click(function () {
        $('aside').toggleClass('width-70');
        $('main').toggleClass('ml-70');
        $('.logo').toggleClass('d-none');
        $('.logo-sm').toggleClass('d-block');
        $('.righta').toggleClass('d-block');
        $('.imenu').toggleClass('d-none');
        $('.remix').toggleClass('mr-0');
        $('.remix').toggleClass('mt-70');
        $(".set").toggleClass('text-center');
        $('.menu-title').toggleClass('d-none');
        $('.item').toggleClass('d-none');
        $('.ri-arrow-right-s-line').toggleClass('d-none');
        $('.ri-arrow-down-s-line').toggleClass('d-none');
        $('.hot').toggleClass('d-none');
        $('.dropdown').toggleClass('d-none');
        $('.drop-item').toggleClass('d-none');
        $('.a').toggleClass('d-none');
        $('.ri-more-fill').show();
    });
    // JQUERY FOR DROPDOWN
    $('.menu-item').click(function () {
        $(this).next('.dropdown').toggle('speed');
        $('.dropdown').not($(this).next()).slideUp();
        $(this).find('.fa-solid').toggleClass('ri-arrow-right-s-line ri-arrow-down-s-line');
    });
    // JQUERY FOR DARK THEME 
    $('.bx-moon').click(function () {
        $('.bx-sun').show();
        $('.bx-moon').hide();
        $(':root').css('--bg-color', '#292e32');
        $(':root').css('--main-color', '#212529');
        $(':root').css('--search-bg-color', '#212529');
        $(':root').css('--search-color', '#fff');
        $(':root').css('--menu-title', '#5f6270');
        $(':root').css('--drop-item-before', '#7c7f90');
        $(':root').css('--menu-item-gray', '#7c7f90');
        $(':root').css('--username', '#e9ecef');
        $(':root').css('--languages', '#ced4da');
        $(':root').css('--languages-bottom', '#32383e');
        $(':root').css('--view-all-color', '#299cdb');
        $(':root').css('--black', '#adb5bd');
        $(':root').css('--view-all-bg-color', 'rgba(41, 156, 219, 0.15)');
        $(':root').css('--user-color', '#abd5bd');
        $(':root').css('--message-line', '#ced4da');
        $('.hasDatepicker').css('background-color', '#262A2F');
        $('.input-group-text').css('border', '1px solid #262a2f');
        $(':root').css('--btn', '#0ab39c26');
        $(':root').css('--a', '#d9dce7');
        $(':root').css('--btn-revenue', '#3577f126');
        $('.revenue').css('border', '0');
        $('.selling-products').css('border', '1px solid #32383e');
        $('.border').css('border', '1px solid #32383e');
        $('.revenue-head').css('border', '1px solid #32383e');
        $(':root').css('--dropdown-divider', '#32383e');
        $(':root').css('--bg-light', 'rgba(206,212,218,0.04)');
        $(':root').css('--bg-danger-subtle', 'rgba(240, 101, 72, 0.15)');
        $('.btn-1').css('color', '#d9dce7');
        $(':root').css('--side-btn', '#299cdb26');
        $('thead').css('background-color', '#282b2e');
        $(':root').css('--bg-success-subtle', 'rgba(10, 179, 156, 0.15)');
        $(':root').css('--bg-warning-subtle', 'rgba(247, 184, 75, 0.15)');
        $(':root').css('--bg-light-subtle', '#25282c');
        $('.apexcharts-legend-text').css('color', '#878a99');
    });
    // JQUERY FOR LIGHT THEME
    $('.bx-sun').click(function () {
        $('.bx-moon').show();
        $('.bx-sun').hide();
        $(':root').css('--bg-color', 'white');
        $(':root').css('--main-color', '#405189');
        $(':root').css('--search-bg-color', '#f3f3f9');
        $(':root').css('--search-color', '#212529');
        $(':root').css('--menu-title', '#838fb9');
        $(':root').css('--drop-item-before', '#abb9e8');
        $(':root').css('--menu-item-gray', '#abb9e8');
        $(':root').css('--username', '#49506C');
        $(':root').css('--languages', '#292e33');
        $(':root').css('--languages-bottom', '#292e33');
        $(':root').css('--view-all-color', '#299cdb');
        $(':root').css('--black', 'black');
        $(':root').css('--view-all-bg-color', 'dff0fa');
        $(':root').css('--user-color', '#212529');
        $(':root').css('--message-line', '#495057');
        $('.hasDatepicker').css('background-color', 'white');
        $('.input-group-text').css('border', '1px solid #ced4da');
        $(':root').css('--btn', '#daf4f0');
        $(':root').css('--a', '#551a88');
        $(':root').css('--btn-revenue', '#f0f0f0');
        $('.revenue').css('border', '1px solid #e9ebec');
        $('.selling-products').css('border', '1px solid #e9ebec');
        $('.border').css('border', '1px solid #e9ebec');
        $('.revenue-head').css('border', '1px solid #e9ebec');
        $(':root').css('--dropdown-divider', '#e9ebec');
        $(':root').css('--bg-light', 'rgb(243,246,249)');
        $(':root').css('--bg-danger-subtle', '#fde8e4');
        $('.btn-1').css('color', '#405189');
        $(':root').css('--side-btn', '#f0f0f0');
        $('thead').css('background-color', '#f3f6f9');
        $(':root').css('--bg-success-subtle', '#daf4f0');
        $(':root').css('--bg-warning-subtle', '#fef4e4');
        $(':root').css('--bg-light-subtle', '#f9fbfc');
        $('.apexcharts-legend-text').css('color', 'rgb(55, 61, 63)');
    });
    // JQUERY FOR HEADER DROPDOWN
    $('.flag').click(function () {
        $('.languages').toggle();
        $('.category-dropdown').hide();
        $('.user-profile-options').hide();
    });
    $('.bx-category-alt').click(function () {
        $('.category-dropdown').toggle();
        $('.languages').hide();
        $('.user-profile-options').hide();
    });
    $('.user-profile').click(function () {
        $('.user-profile-options').toggle();
        $('.languages').hide();
        $('.category-dropdown').hide();
    });
    // JQUERY FOR DROPDOWN IN TABLE
    $('.best-sell-head').click(function () {
        $('.best-sell-head-dropdown').toggleClass('d-block');
    });
    $('.report-head').click(function () {
        $('.report-head-drop-1').toggleClass('d-block');
    });
    $('.report-head-1').click(function () {
        $('.report-head-drop-2').toggleClass('d-block');
    });
    // Calendar Jquery UI
    $("#mycalender").datepicker();
    // back to top btn
    $('.top').click(function () { 
        $('html').animate({scrollTop:0}); 
    });
    $(window).scroll(function(){
        if(scrollY>15){
            $('.top').fadeIn();
        }
        else{
            $('.top').fadeOut();
        }
    });
});