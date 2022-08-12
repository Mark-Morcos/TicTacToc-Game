
   let t =$('#Turn');  //ID to show the game result
   $('#Pturn').append("X");  //ID to show the player Turn
   // let Player=$('#Player');
   
    function MyMain() {  //set the Values (X or O) of the IDs to variables used to identify the result
        var b1, b2, b3, b4, b5, b6, b7, b8, b9;
        b1=$('#b1').val();
        b2=$('#b2').val();
        b3=$('#b3').val();
        b4=$('#b4').val();
        b5=$('#b5').val();
        b6=$('#b6').val();
        b7=$('#b7').val();
        b8=$('#b8').val();
        b9=$('#b9').val();

        if ((b1 == 'X') && (b2 == 'X') && ( b3 == 'X')) {
                t.append("**Player X Won**")
                $('#Pturn').empty();
                $('#Pturn').append(" ***Game Finished ***");
                $("#b4").prop('disabled', true);
                $("#b5").prop('disabled', true);
                $("#b6").prop('disabled', true);
                $("#b7").prop('disabled', true);
                $("#b8").prop('disabled', true);
                $("#b9").prop('disabled', true);

            }
            else if (( b1 == 'X') && ( b4 == 'X') && (b7 == 'X')) {
                 t.append("**Player X Won**")
                 $('#Pturn').empty();
                $('#Pturn').append(" ***Game Finished ***");
                $("#b2").prop('disabled', true);
                $("#b3").prop('disabled', true);
                $("#b5").prop('disabled', true);
                $("#b6").prop('disabled', true);
                $("#b8").prop('disabled', true);
                $("#b9").prop('disabled', true);
            }
            else if ((b7 == 'X') && (b8 == 'X') && ( b9 == 'X')) {
                t.append("**Player X Won**")
                $('#Pturn').empty();
                $('#Pturn').append(" ***Game Finished ***");
                $("#b1").prop('disabled', true);
                $("#b2").prop('disabled', true);
                $("#b3").prop('disabled', true);
                $("#b4").prop('disabled', true);
                $("#b5").prop('disabled', true);
                $("#b6").prop('disabled', true);
            }
            else if ((b3 == 'X') && (b6 == 'X') && ( b9 == 'X')) {
                t.append("**Player X Won**")
                $('#Pturn').empty();
                $('#Pturn').append(" ***Game Finished ***");
                $("#b1").prop('disabled', true);
                $("#b2").prop('disabled', true);
                $("#b4").prop('disabled', true);
                $("#b5").prop('disabled', true);
                $("#b7").prop('disabled', true);
                $("#b8").prop('disabled', true);
            }
            else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
                t.append("**Player X Won**")
                $('#Pturn').empty();
                $('#Pturn').append(" ***Game Finished ***");
                $("#b1").prop('disabled', true);
                $("#b2").prop('disabled', true);
                $("#b3").prop('disabled', true);
                $("#b4").prop('disabled', true);
                $("#b7").prop('disabled', true);
                $("#b8").prop('disabled', true);
            }
            else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
               t.append("**Player X Won**")
                $('#Pturn').empty();
                $('#Pturn').append(" ***Game Finished ***");
                $("#b1").prop('disabled', true);
                $("#b2").prop('disabled', true);
                $("#b4").prop('disabled', true);
                $("#b6").prop('disabled', true);
                $("#b8").prop('disabled', true);
                $("#b9").prop('disabled', true);
            }
            else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
                t.append("**Player X Won**")
                $('#Pturn').empty();
                $('#Pturn').append(" ***Game Finished ***");
                $("#b1").prop('disabled', true);
                $("#b3").prop('disabled', true);
                $("#b4").prop('disabled', true);
                $("#b6").prop('disabled', true);
                $("#b7").prop('disabled', true);
                $("#b9").prop('disabled', true);
            }
            else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
                t.append("**Player X Won**")
                $('#Pturn').empty();
                $('#Pturn').append(" ***Game Finished ***");
                $("#b1").prop('disabled', true);
                $("#b2").prop('disabled', true);
                $("#b3").prop('disabled', true);
                $("#b7").prop('disabled', true);
                $("#b8").prop('disabled', true);
                $("#b9").prop('disabled', true);
                //window.alert('Player X won');
            }

         else if ((b1 == 'O' ) && (b2 == 'O') && (b3 == 'O')) {
       
            t.append("**Player O Won**")
            $('#Pturn').empty();
            $('#Pturn').append(" ***Game Finished ***");
            $("#b4").prop('disabled', true);
            $("#b5").prop('disabled', true);
            $("#b6").prop('disabled', true);
            $("#b7").prop('disabled', true);
            $("#b8").prop('disabled', true);
            $("#b=9").prop('disabled', true);
            //window.alert('Player 0 won');
    }
    else if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) {
            t.append("**Player O Won**")
            $('#Pturn').empty();
            $('#Pturn').append(" ***Game Finished ***");
            $("#b2").prop('disabled', true);
            $("#b3").prop('disabled', true);
            $("#b5").prop('disabled', true);
            $("#b6").prop('disabled', true);
            $("#b8").prop('disabled', true);
            $("#b9").prop('disabled', true);

         //window.alert('Player 0 won');
    }
    else if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) {
            t.append("**Player O Won**");
            $('#Pturn').empty();
            $('#Pturn').append(" ***Game Finished ***");
            $("#b1").prop('disabled', true);
            $("#b2").prop('disabled', true);
            $("#b3").prop('disabled', true);
            $("#b4").prop('disabled', true);
            $("#b5").prop('disabled', true);
            $("#b6").prop('disabled', true);
        //window.alert('Player 0 won');
    }
    else if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) {
            t.append("**Player O Won**");
            $('#Pturn').empty();
            $('#Pturn').append(" ***Game Finished ***");
            $("#b1").prop('disabled', true);
            $("#b2").prop('disabled', true);
            $("#b4").prop('disabled', true);
            $("#b5").prop('disabled', true);
            $("#b7").prop('disabled', true);
            $("#b8").prop('disabled', true);
        //window.alert('Player 0 won');
    }
    else if ((b1 == 'O') && (b5 == 'O' ) && (b9 == 'O')) {
            t.append("**Player O Won**");
            $('#Pturn').empty();
            $('#Pturn').append(" ***Game Finished ***");
            $("#b2").prop('disabled', true);
            $("#b3").prop('disabled', true);
            $("#b4").prop('disabled', true);
            $("#b6").prop('disabled', true);
            $("#b7").prop('disabled', true);
            $("#b8").prop('disabled', true);
        //window.alert('Player 0 won');
    }
    else if ((b3 == 'O') && (b5 == 'O') && (b7 == 'O')) {
            t.append("**Player O Won**");
            $('#Pturn').empty();
            $('#Pturn').append(" ***Game Finished ***");
            $("#b1").prop('disabled', true);
            $("#b2").prop('disabled', true);
            $("#b4").prop('disabled', true);
            $("#b6").prop('disabled', true);
            $("#b8").prop('disabled', true);
            $("#b9").prop('disabled', true);
        //window.alert('Player 0 won');
    }
    else if ((b2 == 'O') && (b5 == 'O' ) && (b8 == 'O' )) {
            t.append("**Player O Won**");
            $('#Pturn').empty();
            $('#Pturn').append(" ***Game Finished ***");
            $("#b1").prop('disabled', true);
            $("#b3").prop('disabled', true);
            $("#b4").prop('disabled', true);
            $("#b6").prop('disabled', true);
            $("#b7").prop('disabled', true);
            $("#b9").prop('disabled', true);
        //window.alert('Player 0 won');
    }
    else if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) {
            t.append("**Player O Won**");
            $('#Pturn').empty();
            $('#Pturn').append(" ***Game Finished ***");
            $("#b1").prop('disabled', true);
            $("#b2").prop('disabled', true);
            $("#b3").prop('disabled', true);
            $("#b7").prop('disabled', true);
            $("#b8").prop('disabled', true);
            $("#b9").prop('disabled', true);
       //` window.alert('Player 0 won');
    }
 }


        flag = 1;
        
    function myfunc_3() {
        if (flag == 1) {
            $('#Pturn').empty();
            $("#b1").val("X");
            $("#b1").prop('disabled', true);
            $('#Pturn').append(" O");
            flag = 0;
        }
        else {
            $("#b1").val("O");
            $("#b1").prop('disabled', true);
            flag = 1;
        }
    };
    function myfunc_6() {
        if (flag == 1) {
            $('#Pturn').empty();
            $("#b4").val("X");
            $("#b1").prop('disabled', true);
            $('#Pturn').append(" O");
            flag = 0;
        }
        else {
            $('#Pturn').empty();
            $("#b4").val("O");
            $("#b4").prop('disabled', true);
            $('#Pturn').append(" X");
            flag = 1;
        }
    }
    function myfunc_9() {
        if (flag == 1) {
            $('#Pturn').empty();
            $("#b7").val("X");
            $("#b7").prop('disabled', true);
            $('#Pturn').append(" O");
            flag = 0;
        }
        else {
            $('#Pturn').empty();
            $("#b7").val("O");
            $("#b7").prop('disabled', true);
            $('#Pturn').append(" X");
            flag = 1;
        }
    }
    function myfunc_4() {
        if (flag == 1) {
            $('#Pturn').empty();
            $("#b2").val("X");
            $("#b2").prop('disabled', true);
            $('#Pturn').append(" O");
                flag = 0;
            }
        else {
            $('#Pturn').empty();
            $("#b2").val("O");
            $("#b2").prop('disabled', true);
            $('#Pturn').append(" X");
                flag = 1;
            }
     }
         
        function myfunc_5() {
            if (flag == 1) {
             $('#Pturn').empty();
            $("#b3").val("X");
            $("#b3").prop('disabled', true);
            $('#Pturn').append(" O");
                flag = 0;
            }
            else {
                $('#Pturn').empty();
            $("#b3").val("O");
            $("#b7").prop('disabled', true);
            $('#Pturn').append(" X");
                flag = 1;
            }
    }
        function myfunc_7() {
            $('#Pturn').empty();
            if (flag == 1) {
            $("#b5").val("X");
            $("#b5").prop('disabled', true);
            $('#Pturn').append(" O");
                flag = 0;
            }
            else {
                $('#Pturn').empty();
            $("#b5").val("O");
            $("#b5").prop('disabled', true);
            $('#Pturn').append(" X");
                flag = 1;
            }
     }
         
        function myfunc_8() {
            $('#Pturn').empty();
            if (flag == 1) {
            $("#b6").val("X");
            $("#b6").prop('disabled', true);
            $('#Pturn').append(" O");
                flag = 0;
            }
            else {
            $('#Pturn').empty();
            $("#b6").val("O");
            $("#b6").prop('disabled', true);
            $('#Pturn').append(" X");
                flag = 1;
            }
        }
        function myfunc_10() {
            $('#Pturn').empty();
            if (flag == 1) {
            $("#b8").val("X");
            $("#b8").prop('disabled', true);
            $('#Pturn').append(" O");
                flag = 0;
            }
            else {
            $('#Pturn').empty();
            $("#b8").val("O");
            $("#b8").prop('disabled', true);
            $('#Pturn').append(" X");
                flag = 1;
            }
        }
         
        function myfunc_11() {
            $('#Pturn').empty();
            if (flag == 1) {
            $("#b9").val("X");
            $("#b9").prop('disabled', true);
            $('#Pturn').append(" O");
                flag = 0;
            }
            else {
            $('#Pturn').empty();
            $("#b9").val("O");
            $("#b9").prop('disabled', true);
            $('#Pturn').append(" X");
                flag = 1;
            }
        }
        function reset(){
            location.reload(true);
            $("#b1").val(" ");
            $("#b2").val(" ");
            $("#b3").val(" ");
            $("#b4").val(" ");
            $("#b5").val(" ");
            $("#b6").val(" ");
            $("#b7").val(" ");
            $("#b8").val(" ");
            $("#b9").val(" ");

        }    
        
    