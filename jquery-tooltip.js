$(document).ready(function(){
    var tooltipId="#jquery-tooltip";
    
    $('.jquery-tooltip-parent').mouseover(function() {
        $(".jquery-tooltip").remove(); 
        
        tooltipId=tooltipId+"_"+$(this).attr('id');
        //alert(tooltipId);
        
        // Retrieve the text to display in tooltip
        var text=$(this).attr("title");
        
        $(this).attr( "tooltip_text", text );
        
        // Remove the value from the attribute title
        $(this).attr("title", "");
        
        // Create the html of the tooltip
        var tooltipHtml='<div class="jquery-tooltip" id="'+tooltipId.replace("#", "")+'" style="display:none">'+text+'</div>';
        
        // Append the tooltip
        $('body').append(tooltipHtml);
        
        // Set the tooltip position
        var elementTop=$(this).position().top;
        var elementHeight=$(this).height();
        var elementPaddingTop=parseInt( $(this).css("paddingTop").replace(/px/, "") );
        var elementPaddingBottom=parseInt( $(this).css("paddingBottom").replace(/px/, "") );
        var elementMarginTop=parseInt( $(this).css("marginTop").replace(/px/, "") );
        var elementMarginBottom=parseInt( $(this).css("marginBottom").replace(/px/, "") );
        var elementBorderTop=parseInt( $(this).css("borderTop").replace(/px/, "") );
        var elementBorderBottom=parseInt( $(this).css("borderBottom").replace(/px/, "") );
        
        // Set top position of tooltip in relation with margin, padding, parent top position and parent height
        var top=elementTop+elementHeight+elementMarginTop+elementMarginBottom+elementPaddingTop+elementPaddingBottom+elementBorderTop+elementBorderBottom;
        
        var elementWidth=$(this).width();
        var elementLeft=$(this).position().left;
        var tooltipWidth=$(tooltipId).width();
        var windowWidth=$('body').width();
        var left=elementLeft+(elementWidth/2)-(tooltipWidth/2);
        var tooltipPaddingRight=parseInt( $(tooltipId).css('paddingRight').replace(/px/, "") );
        var tooltipMarginRight=parseInt( $(tooltipId).css('marginRight').replace(/px/, "") );
        var tooltipPaddingLeft=parseInt( $(tooltipId).css('paddingLeft').replace(/px/, "") );
        var tooltipMarginLeft=parseInt( $(tooltipId).css('marginLeft').replace(/px/, "") );
        
        // If tooltip is out of the right edge of window
        if( left+tooltipWidth > windowWidth )
        {
            left=windowWidth-tooltipWidth-tooltipPaddingRight-tooltipMarginRight-tooltipPaddingLeft-tooltipMarginLeft;
        }
        
        // If tooltip is out of the left edge of window
        if( left< 0 )
        {
            left=0;
        }
        
        $(tooltipId).css("left", left);
        $(tooltipId).css("top", top);
        
        $(tooltipId).fadeIn("slow");
        
    }).mouseout(function() {
        var text=$(this).attr( "tooltip_text" );
        
        // Set the title attribute to old value
        $(this).attr("title", text);
        
        $(tooltipId).fadeOut("slow", function(){
            // Remove tooltip
            $(this).remove(); 
        });
    });
});


