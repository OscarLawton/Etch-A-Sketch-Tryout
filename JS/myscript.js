/*$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $(".list").append('<div class="item">' + toAdd + '</div>');
         $('input[name=checkListItem]').val('');
        //$("form")[0].reset();
        });
        $(document).on('click','.item', function(){
            $(this).remove();
            });
    });*/



function createDiv(x_pos,y_pos,z, pSize){

    var div = document.createElement("div");
    div.setAttribute("class", "divs");
    div.style.position = "absolute";
    div.style.width = pSize+"px";
    div.style.height = pSize+"px";
    div.style.background = "white";
    div.style.color = "white";
    div.style.left = x_pos+'px';
    div.style.top = y_pos+'px';
    //div.innerHTML = z;
    var mouse = false;
    var over = false;
  

    div.onmouseover = function(){
        console.log("mouse over");
        if(red){

             div.style.background = "red";
             
        }
        else if(blue){

            div.style.background = "blue";
           
        }else if(yellow){
            
            div.style.background = "yellow";
        }
        else if(white){

            div.style.background = "white";

        }
        else {

            div.style.background = "black";

        }

    }
 

        document.getElementById("box").appendChild(div);
    
    
       



}
var x = 50;
var y = 50;
var z = 1;
var value;
function createDivs(){
    
    for(i=0;i<30;i++){
        for(j=0;j<30;j++){
            createDiv(x,y,z,20)
            z+=1;
            x+=20;
        }
        y+=20;
        x=50;
    }

}

function createDivs2(gVaule){

    var x = 50;
    var y = 50;
    var pixelSize = 600/gVaule;
    console.log(pixelSize)
    console.log(gVaule)
    for(i=0;i<gVaule;i++){
        for(j=0;j<gVaule;j++){
            createDiv(x,y,z,pixelSize)
            z+=1;
            x+=pixelSize;
        }
        y+=pixelSize;
        x=50;
    }

}

var black = true;
var red = false;
var blue = false;
var yellow = false;
var white = false;
var clear = false;

$(document).ready(function(){

   
    var gridValue = 20;
    $("#clear-button").click(function(){
        console.log("clear button pressed");
      $(".divs").css( "background-color", "white" );
    });
    $("#pixel-button").click(function(){
       
       do{
        gridValue = prompt("Enter a new length for the grid (no larger than 200):");
    
        
        
        }while(gridValue > 200)
        createDivs2(gridValue)
    });
    $("ul li:nth-child(1)").click(function(){
        $(this).css( "background-color", "pink" );
        $("ul li:nth-child(2)").css( "background-color", "white" );
        $("ul li:nth-child(3)").css( "background-color", "white" );
        $("ul li:nth-child(4)").css( "background-color", "white" );
        $("ul li:nth-child(5)").css( "background-color", "white" );
        black = true;
        blue = false;
        yellow = false;
        red = false;
        white = false;
    });

    $("ul li:nth-child(2)").click(function(){
        $(this).css( "background-color", "pink" );
       $("ul li:nth-child(1)").css( "background-color", "white" );
        $("ul li:nth-child(3)").css( "background-color", "white" );
        $("ul li:nth-child(4)").css( "background-color", "white" );
        $("ul li:nth-child(5)").css( "background-color", "white" );

        black = false;
        blue = false;
        yellow = false;
        red = true;
        white = false;
    });
    $("ul li:nth-child(3)").click(function(){
        $(this).css( "background-color", "pink" );
       $("ul li:nth-child(1)").css( "background-color", "white" );
        $("ul li:nth-child(2)").css( "background-color", "white" );
        $("ul li:nth-child(4)").css( "background-color", "white" );
        $("ul li:nth-child(5)").css( "background-color", "white" );


        black = false;
        blue = true;
        yellow = false;
        red = false;
        white = false;
    });
    $("ul li:nth-child(4)").click(function(){
        $(this).css( "background-color", "pink" );
        $("ul li:nth-child(1)").css( "background-color", "white" );
        $("ul li:nth-child(2)").css( "background-color", "white" );
        $("ul li:nth-child(3)").css( "background-color", "white" );
        $("ul li:nth-child(5)").css( "background-color", "white" );

        black = false;
        blue = false;
        yellow = true;
        red = false;
        white = false;
    });
    $("ul li:nth-child(5)").click(function(){
        $(this).css( "background-color", "pink" );
         $("ul li:nth-child(1)").css( "background-color", "white" );
        $("ul li:nth-child(2)").css( "background-color", "white" );
        $("ul li:nth-child(3)").css( "background-color", "white" );
        $("ul li:nth-child(4)").css( "background-color", "white" );
        black = false;
        blue = false;
        yellow = false;
        red = false;
        white = true;
    });


});

 
