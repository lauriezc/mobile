$(document).ready(function(){
    $('#accordion').on('shown.bs.collapse',function(){
        setAngle();
    });
    
    $('#accordion').on('hidden.bs.collapse',function(){
        setAngle();
    });
    function setAngle(){
        $('.panel-title').each(function(){
            if($(this).find('a').attr('aria-expanded')=='true'){
        $(this).find('i').removeClass('fa-angle-left');
        $(this).find('i').addClass('fa-angle-down');
        }
        else{
        $(this).find('i').addClass('fa-angle-left');
        $(this).find('i').removeClass('fa-angle-down');
        }
        });
    }
});