
    $.fn.extend({
        go:function(){
            $(this).val('zzzz');
        },
        tangleLoading:function(){
            var position=$(this).css('position');
            var width=$(this).width();
            var height=$(this).height();
            var left=$(this).css('left');
            var top=$(this).css('top');
            $('#bdr').remove();
            $(this).append('<div id="bdr"><div class="bc-block"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div></div>');
            var ct=$('#bdr');
            $(ct).css('width',width);
            $(ct).css('height',height);
            $(ct).css('opacity',0.6);
            $(ct).css('position','absolute');
            $(ct).css('z-index',100);
            //$(ct).css('margin-top',0-height);
            $(ct).css('background-color','gray');
            $(ct).css('top',0);
            $(ct).css('left',0);
            
            var bc=$(ct).find('.bc-block');
            $(bc).css('line-height',height+'px');
        },
        circleLoading:function(){
            var position=$(this).css('position');
            var width=$(this).width();
            var height=$(this).height();
            var left=$(this).css('left');
            var top=$(this).css('top');
            var html='<div class="bc-circle">';
            html+='<div class="sk-circle1 sk-child"></div>';
      html+='<div class="sk-circle2 sk-child"></div>';
      html+='<div class="sk-circle3 sk-child"></div>';
      html+='<div class="sk-circle4 sk-child"></div>';
      html+='<div class="sk-circle5 sk-child"></div>';
      html+='<div class="sk-circle6 sk-child"></div>';
      html+='<div class="sk-circle7 sk-child"></div>';
      html+='<div class="sk-circle8 sk-child"></div>';
      html+='<div class="sk-circle9 sk-child"></div>';
      html+='<div class="sk-circle10 sk-child"></div>';
      html+='<div class="sk-circle11 sk-child"></div>';
      html+='<div class="sk-circle12 sk-child"></div></div>';
            $('#bdr').remove();
            $(this).append('<div id="bdr"></div>');
            var ct=$('#bdr');
            $(ct).css('width',width);
            $(ct).css('height',height);
            $(ct).css('opacity',0.6);
            $(ct).css('position','absolute');
            $(ct).css('z-index',100);
            //$(ct).css('margin-top',0-height);
            $(ct).css('background-color','gray');
            $(ct).css('line-height',height+'px');
            $(ct).css('vertical-align','middle');
            $(ct).css('top',0);
            $(ct).css('left',0);
            $(ct).append(html);
            var bc=$(ct).find('.bc-circle');
            $(bc).css('top',(height-bc.height())/2+'px');
        },
        removeLoading:function(){
            $('#bdr').remove();
        }
    });