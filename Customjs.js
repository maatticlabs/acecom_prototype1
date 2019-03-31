$(document).ready(function(){

/*************** Checkbox script ***************/
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "checkbox") {
var id = inputs[a].getAttribute("id");
if (id==null){
id=  "checkbox" +a;
}
inputs[a].setAttribute("id",id);
var container = document.createElement('div');
container.setAttribute("class", "ttr_checkbox");
var label = document.createElement('label');
label.setAttribute("for", id);
$(inputs[a]).wrap(container).after(label);
}
}

/*************** Radiobutton script ***************/
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "radio") {
var id = inputs[a].getAttribute("id");
if (id==null){
 id=  "radio" +a;
}
inputs[a].setAttribute("id",id);
var container = document.createElement('div');
container.setAttribute("class", "ttr_radio");
var label = document.createElement('label');
label.setAttribute("for", id);
$(inputs[a]).wrap(container).after(label);
}
}

/*************** Staticfooter script ***************/
var window_height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body_height = $(document.body).height();
$content = $("#ttr_content_and_sidebar_container");
if(body_height < window_height){
differ = (window_height - body_height);
content_height = $content.height() + differ;
$("#ttr_content_and_sidebar_container").css("min-height", content_height+"px");
}

/* Slideshow Function Call */

if(jQuery('#ttr_slideshow_inner').length){
jQuery('#ttr_slideshow_inner').TTSlider({
slideShowSpeed:40000, begintime:40000,cssPrefix: 'ttr_'
});
}

/*************** Hamburgermenu slideleft script ***************/
$('#nav-expander').on('click',function(e){
e.preventDefault();
$('body').toggleClass('nav-expanded');
});

/*************** Menu click script ***************/
$('ul.ttr_menu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 1025 && $(this).attr('href')){
window.location.href = $(this).attr('href'); 
}
else{
if($(this).parent().hasClass('open')){
location.assign($(this).attr('href'));
}
}
});

/*************** Sidebarmenu click script ***************/
$('ul.ttr_vmenu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 1025 && $(this).attr('href')){
window.location.href = $(this).attr('href'); 
}
else{
if($(this).parent().hasClass('open')){
location.assign($(this).attr('href'));
}
}
});

/*************** Tab menu click script ***************/
$('.ttr_menu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 1025){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('open');
$(this).parent().toggleClass(function() {
if ($(this).is(".open") ) {
window.location.href = $(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "open";
}
});
}
});

/*************** Tab-Sidebarmenu script ***************/
$('.ttr_vmenu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 1025){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('open');
$(this).parent().toggleClass(function() {
if ($(this).is(".open") ) {
window.location.href = $(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "open";
}
});
}
});
WebFontConfig = {
google: { families: [ 'Open+Sans:700','Open+Sans:600','Roboto+Slab','Roboto+Slab:700','Fredoka+One','Open+Sans','Fredoka+One:800','Open+Sans:800','Rosario','Fredoka+One:700'] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();
});
