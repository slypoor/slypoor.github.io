// JavaScript source code
window.onload = function () {
    $("#vo2Max_value").val(36.5);
};
$(document).ready(function () {
    var divHeight = $('.contain').height();
    $('.side_menu').css('height', divHeight + 'px');

    $(".v_person").fadeTo("slow", 1, function () { });

});
$(document).on('click', '#anaerobic_strength, #anaerobic_capacity, #aerobic_fitness', function () {
    $(".sub_menu").hide();
    $(this).next(".sub_menu").toggle().animate({ left: '274px', opacity: '1' });
});
$(document).on('click', '#VO2max', function () {
    $(".inner_sub_menu").slideUp();
    $(this).next(".inner_sub_menu").toggle().animate({ left: '274px', opacity: '1' });
});
$(document).on('click', '.menu_btn', function () {
    $(this).toggleClass("active");
    $(".drop_main").toggle().animate({ left: '76px', opacity: '1' });
});
$(document).on('click', '.info_icon_btn', function () {
    $(".info_block").toggle();
    $(".overlay").toggle();
});
$(document).on('click', '.close', function () {
    $(".info_block").toggle();
    $(".overlay").toggle();
});
$(document).on('click', '.print_icon_toggle_btn', function () {
    $(".print_icon_toggle").toggle();
});
$(document).on('click', '.vitual_btn', function () {
    $("#vpvirticaljumpgen").attr("action", "http://115.112.118.252/VirtualEST/index.php/Fitness/FitnessVirtualpersonGeneration");
    $("#vpvirticaljumpgen").submit();
    $(".v_person").fadeTo("slow", 1, function () { });
});
$(document).on('click', '.discart', function () {
    $(".v_person").fadeTo("slow", 0, function () { });
});
$(document).on('click', '.v_btn a', function () {
    $(this).text(function (i, v) {
        return v === 'Click To Know' ? 'Hide Detail' : 'Click To Know'
    });
    $(".v_detail").slideToggle();
});