$('.project_wrap').hover(function(){
  $(this).find('.project_arrow').animate({width:'toggle'},350);
  $(this).find('.project_pic').animate({width:'toggle'},350);
  $(this).find('.project_title').addClass('active');
  },function(){
      $(this).find('.project_arrow').animate({width:'toggle'},350);
      $(this).find('.project_pic').animate({width:'toggle'},350);
      $(this).find('.project_title').removeClass('active');

});
  $(function () {
      var url = window.location.pathname,
      urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); 
      $('a').each(function () {
          if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
              $(this).addClass('active');
              return false;
          }
       });
});


$('.project_title').click(function(){
  var nowEQ = $(this).parent().index();
  $('.detail_wrap').eq(nowEQ-1).fadeIn();
  $('.detail_wrap').eq(nowEQ-1).animate({top:0},500); 
});


$('.closebtn').click(function(){
  $('.detail_wrap').fadeOut();
});

$('.topbtn').click(function(){
  $('.detail_wrap').animate({scrollTop:0}, 500); 
}); 