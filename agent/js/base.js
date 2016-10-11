$(document).ready(function(){
   
     
 $('#btn-menu').click(function(){
        if($('.slider-menu').hasClass('menu-active')){
            $('.slider-menu').removeClass('menu-active');
            $('.main').removeClass('main-disable');
            $('.main').unbind('touchstart');
        }
        else{
            $('.slider-menu').addClass('menu-active');
            $('.main').addClass('main-disable');
            
            
    $('.main').on('touchstart',contain_touch);
            
        }
    });
    
  
    function contain_touch(){
            $('.slider-menu').removeClass('menu-active');
            $('.main').removeClass('main-disable');
            $('.main').unbind('touchstart');
    }
}); 

    
