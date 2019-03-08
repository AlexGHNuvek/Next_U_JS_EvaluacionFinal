var calculadora = {
    
    init: function() {

    // definición de variables
        var resutlado =document.getElementById('display');
        var onC = document.getElementById('on');
        var signo = document.getElementById('sign');
        var raizC = document.getElementById('raiz');
        var division = document.getElementById('dividido');
        var multiplicacion = document.getElementById('por');
        var resta = document.getElementById('menos');
        var suma = document.getElementById('mas');
        var igual = document.getElementById('igual');
        var punto = document.getElementById('punto');

        var uno = document.getElementById('1');
        var dos = document.getElementById('2');
        var tres = document.getElementById('3');
        var cuatro = document.getElementById('4');
        var cinco = document.getElementById('5');
        var seis = document.getElementById('6');
        var siete = document.getElementById('7');
        var ocho = document.getElementById('8');
        var nueve = document.getElementById('9');
        var cero = document.getElementById('0');
    
        var repetir = false; // para oprimir = de forma repetida

    
        // liseners para oprimir teclas
        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style","transform:scale(0.95,0.95)")
            })
        cero.addEventListener("mouseout", function(){
            cero.setAttribute("style","transform:scale(1,1)")
            })

        uno.addEventListener("mousedown", function(){
            uno.setAttribute("style","transform:scale(0.95,0.95)")
            })
        uno.addEventListener("mouseout", function(){
            uno.setAttribute("style","transform:scale(1,1)")
            })

        dos.addEventListener("mousedown", function(){
            dos.setAttribute("style","transform:scale(0.95,0.95)")
            })
        dos.addEventListener("mouseout", function(){
            dos.setAttribute("style","transform:scale(1,1)")
            })

        tres.addEventListener("mousedown", function(){
            tres.setAttribute("style","transform:scale(0.95,0.95)")
            })
        tres.addEventListener("mouseout", function(){
            tres.setAttribute("style","transform:scale(1,1)")
            })

        cuatro.addEventListener("mousedown", function(){
            cuatro.setAttribute("style","transform:scale(0.95,0.95)")
            })
        cuatro.addEventListener("mouseout", function(){
            cuatro.setAttribute("style","transform:scale(1,1)")
            })

        cinco.addEventListener("mousedown", function(){
            cinco.setAttribute("style","transform:scale(0.95,0.95)")
            })
        cinco.addEventListener("mouseout", function(){
            cinco.setAttribute("style","transform:scale(1,1)")
            })

        seis.addEventListener("mousedown", function(){
            seis.setAttribute("style","transform:scale(0.95,0.95)")
            })
        seis.addEventListener("mouseout", function(){
            seis.setAttribute("style","transform:scale(1,1)")
            })

        siete.addEventListener("mousedown", function(){
            siete.setAttribute("style","transform:scale(0.95,0.95)")
            })
        siete.addEventListener("mouseout", function(){
            siete.setAttribute("style","transform:scale(1,1)")
            })

        ocho.addEventListener("mousedown", function(){
            ocho.setAttribute("style","transform:scale(0.95,0.95)")
            })
        ocho.addEventListener("mouseout", function(){
            ocho.setAttribute("style","transform:scale(1,1)")
            })

        nueve.addEventListener("mousedown", function(){
            nueve.setAttribute("style","transform:scale(0.95,0.95)")
            })
        nueve.addEventListener("mouseout", function(){
            nueve.setAttribute("style","transform:scale(1,1)")
            })

        onC.addEventListener("mousedown", function(){
            onC.setAttribute("style","transform:scale(0.95,0.95)")
            })
        onC.addEventListener("mouseout", function(){
            onC.setAttribute("style","transform:scale(1,1)")
            })
        
        signo.addEventListener("mousedown", function(){
            signo.setAttribute("style","transform:scale(0.95,0.95)")
            })
        signo.addEventListener("mouseout", function(){
            signo.setAttribute("style","transform:scale(1,1)")
            })
        
        raizC.addEventListener("mousedown", function(){
            raizC.setAttribute("style","transform:scale(0.95,0.95)")
            })
        raizC.addEventListener("mouseout", function(){
            raizC.setAttribute("style","transform:scale(1,1)")
            })

        division.addEventListener("mousedown", function(){
            division.setAttribute("style","transform:scale(0.95,0.95)")
            })
        division.addEventListener("mouseout", function(){
            division.setAttribute("style","transform:scale(1,1)")
            })

        multiplicacion.addEventListener("mousedown", function(){
            multiplicacion.setAttribute("style","transform:scale(0.95,0.95)")
            })
        multiplicacion.addEventListener("mouseout", function(){
            multiplicacion.setAttribute("style","transform:scale(1,1)")
            })

        resta.addEventListener("mousedown", function(){
            resta.setAttribute("style","transform:scale(0.95,0.95)")
            })
        resta.addEventListener("mouseout", function(){
            resta.setAttribute("style","transform:scale(1,1)")
            })

        suma.addEventListener("mousedown", function(){
            suma.setAttribute("style","transform:scale(0.95,0.95)")
            })
        suma.addEventListener("mouseout", function(){
            suma.setAttribute("style","transform:scale(1,1)")
            })

        igual.addEventListener("mousedown", function(){
            igual.setAttribute("style","transform:scale(0.95,0.95)")
            })
        igual.addEventListener("mouseout", function(){
            igual.setAttribute("style","transform:scale(1,1)")
            })

        punto.addEventListener("mousedown", function(){
            punto.setAttribute("style","transform:scale(0.95,0.95)")
            })
        punto.addEventListener("mouseout", function(){
            punto.setAttribute("style","transform:scale(1,1)")
            })

        // funciones
        
        function limpiar(){
          display.textContent = "";
        }

        function resetear(){
          display.textContent = "";
          operandoa = 0;
          operandob = 0;
          operacion = "";
          operacion2 = "";
          repetir = false;
        }
        
        
        function resolver(){
              var res = 0;
              switch(operacion){
                case "+":
                  res = parseFloat(operandoa) + parseFloat(operandob);
                  break;
                case "-":
                    res = parseFloat(operandoa) - parseFloat(operandob);
                    break;
                case "*":
                  res = parseFloat(operandoa) * parseFloat(operandob);
                  break;
                case "/":
                  res = parseFloat(operandoa) / parseFloat(operandob);
                  break;
              }
          return res;
          }        

        // operacion en cadena
        
        operacionCadena= function(operador2){
              operandob = display.textContent;
              display.textContent = resolver();
              display.textContent = display.textContent.slice(0,8);
                /*
                console.log("A: " + operandoa);
                console.log("B: " + operandob);
                console.log("R: " + display.textContent);
                console.log("Sig.Op.: " + operador2);
                */
              operandoa = display.textContent;
              operacion = operador2
              limpiar();
        }

        // definición de eventos

        uno.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "1";
                }
            }else{
                display.textContent = "1";
            }
        }
        dos.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "2";
                }
            }else{
                display.textContent = "2";
            }
        }
        tres.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "3";
                }
            }else{
                display.textContent = "3";
            }
        }
        cuatro.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "4";
                }
            }else{
                display.textContent = "4";
            }
        }
        cinco.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "5";
                }
            }else{
                display.textContent = "5";
            }
        }
        seis.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "6";
                }
            }else{
                display.textContent = "6";
            }
        }
        siete.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "7";
                }
            }else{
                display.textContent = "7";
            }
        }
        ocho.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "8";
                }
            }else{
                display.textContent = "8";
            }
        }
        nueve.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "9";
                }
            }else{
                display.textContent = "9";
            }
        }
        cero.onclick = function(e){
            if (display.textContent !== "0"){
                if (display.textContent.length < 8){
                    display.textContent = display.textContent  + "0";
                }
            }
        }
        onC.onclick = function(e){
          resetear();
          display.textContent = "0";
        }
        punto.onclick = function(e){
            if(display.textContent.indexOf('.') == -1){
                display.textContent = display.textContent  + ".";
            }
        }
        signo.onclick = function(e){
            if (display.textContent !== "0"){
                if(display.textContent.indexOf('-') == -1){
                    display.textContent = "-" + display.textContent;
                }else{
                    var n = display.textContent.length;
                    display.textContent = display.textContent.slice(1,n);
                }
            }
        }

        // operaciones
        suma.onclick = function(e){
            if (typeof operacion == 'undefined'){
                operandoa = display.textContent;
                operacion = "+";
                limpiar();
            } else if (operacion == ""){
                    operandoa = display.textContent;
                    operacion = "+";
                    limpiar();
                    } else {
                        operacion2 = "+";
                        console.log("Operando: " + operacion);
                        operacionCadena(operacion2)
                    }
        }
        
         resta.onclick = function(e){
            if (typeof operacion == 'undefined'){
                operandoa = display.textContent;
                operacion = "-";
                limpiar();
            } else if (operacion == ""){
                    operandoa = display.textContent;
                    operacion = "-";
                    limpiar();
                    } else {
                        operacion2 = "-";
                        operacionCadena(operacion2)
                    }
          }
         
          multiplicacion.onclick = function(e){
            if (typeof operacion == 'undefined'){
                operandoa = display.textContent;
                operacion = "*";
                limpiar();
            } else if (operacion == ""){
                    operandoa = display.textContent;
                    operacion = "*";
                    limpiar();
                    } else {
                        operacion2 = "*";
                        operacionCadena(operacion2)
                    }
          }

          division.onclick = function(e){
            if (typeof operacion == 'undefined'){
                operandoa = display.textContent;
                operacion = "/";
                limpiar();
            } else if (operacion == ""){
                    operandoa = display.textContent;
                    operacion = "/";
                    limpiar();
                    } else {
                        operacion2 = "/";
                        operacionCadena(operacion2)
                    }
          }
          
          igual.onclick = function(e){
              if (!repetir){ 
                  operandob = display.textContent;
                  display.textContent = resolver();
                  display.textContent = display.textContent.slice(0,8);
                  repetir = true;
              } else {
                  operandoa = display.textContent;
                  display.textContent = resolver();
                  display.textContent = display.textContent.slice(0,8);
              }
          }
    }  
}

calculadora.init()












