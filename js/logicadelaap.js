let nombre;
let vamos;
nombre=prompt("Hola como te llamas");


alert("un placer " + nombre);


vamos=prompt("vamos a las preguntas");

if(vamos == "si"){
    alert("ok vamos");
    Preguntas()
}else{
    alert("igual te vamos a preguntar te guste i no =)");
    Preguntas()
}


    function Preguntas(){
        let Pregunta1;
        let Pregunta2;
        let Pregunta3;
        let Pregunta4;
        let Pregunta5;
        Pregunta1=prompt("El cierto que una persona capacitada para algun desastre, tiene mas pisibilidades de afrontar el problema con mejor eficacia que una que no esta instruida en  el tema");
        Pregunta2=prompt("Prestar servicios de Alarma es a su vez, una Accion de Proteccion civil y administracion de Desastres?");
        Pregunta3=prompt("El 21 de Diciembre  de 1985 se crea la division de Socorro y Defensa Civil?");
        Pregunta4=prompt("Es cierto que la formacion de planes, protocolos y estrategias dan destrezas para el manejo de cualquier situacion?");
        Pregunta5=prompt("El cuerpo de Bomberos es de administracion de Desastre?");
        
        /* Primera Pregunta*/
        if( Pregunta1 == "si"){
           
           alert("acertaste la 1 pregunta tienes 2 puntos" );
        }else{
               alert("te has equivocado en la 1 preguntas, asi que no tienes nada =)");
        }
        
        /*Pregunta 2 */
        if( Pregunta2 == "si"){
           
           alert("acertaste la 2 pregunta, tienes 2 puntos");
         }else{
                alert("te has equivocado en la 2 pregunta, asi que no tienes nada =)");
         }
         /*Pregunta 3 */

         if( Pregunta3 == "no"){
           
          alert("acertaste la 3 pregunta, tienes 2 puntos");
         }else{
                alert("te has equivocado en la 3 pregunta, asi que no tienes nada =)");
         }
         
         /*Pregunta 4 */
         if( Pregunta4 == "si"){
           
           alert("acertaste  la 4 pregunta, tienes 2 puntos");
         }else{
                alert("te has equivocadoen la 4 pregunta asi que no tienes nada =)");
         }
         /*pregunta 5 */
         if( Pregunta5 == "si"){
           
           alert("acertaste la 5 pregunta, tienes 2 puntos");
         }else{
                alert("te has equivocado en la 5 pregunta asi que no tienes nada =)");
         }
        

        /* Aplicacion en honor a C.A.U.S.A.S Republic y para que no 
        se me olvide codigo de la logica de las preguntas. haora tengo que estudiar para sacar
        las preguntas del tema y las respuestas =)....*/
    
         
    }





