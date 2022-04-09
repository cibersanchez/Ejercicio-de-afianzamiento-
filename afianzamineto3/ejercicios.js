const botonactivida1_1 = document.getElementById('suma');
const botonactivida1_2 = document.getElementById('area_rectangulo');
const botonactivida1_3 = document.getElementById('definitiva');
const botonactivida1_4 = document.getElementById('area_circunferencia');
const botonactivida1_5 = document.getElementById('el_area');
const botonactivida1_6 = document.getElementById('figura');
const botonactivida1_7 = document.getElementById('pagar');
const botonactivida1_8 = document.getElementById('plano');
const botonactivida1_9 = document.getElementById('modista');
const botonactivida1_10 = document.getElementById('agua');
const botonactivida2_1 = document.getElementById('edad_mayor');
const botonactivida2_2 = document.getElementById('menor_edad');
const botonactivida2_3 = document.getElementById('sexo');
const botonactivida2_4 = document.getElementById('estado');
const botonactivida2_5 = document.getElementById('absoluto');
const botonactivida2_6 = document.getElementById('positivo');
const botonactivida2_7 = document.getElementById('positivo_2');
const botonactivida2_8 = document.getElementById('positivo_3');
const botonactivida2_9 = document.getElementById('suma_2');
const botonactivida2_10 = document.getElementById('suma_3');
const botonactivida2_11 = document.getElementById('salario');
const botonactivida2_12 = document.getElementById('calcular');
const botonactivida2_13 = document.getElementById('empleado');
const botonactivida2_14 = document.getElementById('salario_2');
const botonactivida2_15 = document.getElementById('por_horas');
const botonactivida3_1 = document.getElementById('valor_mayor');
const botonactivida3_2 = document.getElementById('valor_neutro');
const botonactivida3_3 = document.getElementById('lapiz');
const botonactivida3_4 = document.getElementById('descuento');
const botonactivida3_5 = document.getElementById('descendente');
const botonactivida3_6 = document.getElementById('parrillada');
const botonactivida3_7 = document.getElementById('Ginecólogo');
const botonactivida3_8 = document.getElementById('total_estudiantes');
const botonactivida3_9 = document.getElementById('nota_final_estudiantes');
const botonactivida3_10 = document.getElementById('Algoritmo');
const botonactivida3_11 = document.getElementById('Nota_general_grupo');
const botonactivida3_12 = document.getElementById('electrificadora');
document.addEventListener('click', (e) => {
    if (e.target === botonactivida1_1) 
    {
        let n1 = parseInt(prompt('Ingresa el primer numero '));
        let n2 = parseInt(prompt('Ingresa el segundo numero '));

        let suma = n1 + n2;
    
        alert(n1+" + " + n2 +" = "+ suma); 
    }
    if (e.target === botonactivida1_2) 
    {
        let n1 = parseInt(prompt('Ingresa la base '));
        let n2 = parseInt(prompt('Ingresa la altura '));

        let area = (n1 * n2)/2;
    
        alert( area);
        
    }
    if (e.target === botonactivida1_3)
    { 
        let n1 = parseInt(prompt('Ingresa Nota de primer corte '));
        let n2 = parseInt(prompt('Ingresa Nota de segundo  corte '));
        let n3 = parseInt(prompt('Ingresa Nota de tercer corte '));

        let final =(n1*0.3)+(n2*0.3)+(n3*0.4);
    
        alert(final);
        
    }
    if (e.target === botonactivida1_4) 
    {
        let n1 = parseInt(prompt('Ingresa el valor de radio del circulo '));
        pi = 3.1416
        let area =  pi * (n1*n1);
       
        alert("el radio del circulo"+area); 
    }
    if (e.target === botonactivida1_5) 
    {
        let n1 = parseInt(prompt('Ingresa el valor a '));
        let n2 = parseInt(prompt('Ingresa el valor b '));
        let n3 = parseInt(prompt('Ingresa el valor c '));

        n1 = n1 - n3;
        let area = (n2*n1)/2;
        let area2 = n2*n3;
        let areafinal = area+area2;
        alert("el area del terrono a vender es "+ areafinal); 
    }
   
    if (e.target === botonactivida1_6) 
    {
        let n1 = parseInt(prompt('Ingresa el valor h'));
        let n2 = parseInt(prompt('Ingresa el valor r '));
    
        pi = 3.1416
        let area =  pi * (n2*n2);
        let area1 = (n1 * n1)/2;
        let area2 = (area)/2;
        let area3 = (area1)/2
        let final = area3+area2
        
        alert(final);
    }
    if (e.target === botonactivida1_7) 
    {
        let n2 = parseFloat(prompt('Ingresa el valor de la leche '));
        let n1 = parseInt(prompt('ingrese los litros de leche '));
    
        let galon = n1 / 3.785;
        let pagar = n2*galon;
    
        alert("el total a resibir por "+n1+"litros de leche es"+pagar);
    }
    if (e.target === botonactivida1_8) 
    {
        let x2 = parseInt(prompt('Ingresa el punto 1'));
        let y2 = parseInt(prompt('Ingresa el punto 1'));
        let x1 = parseInt(prompt('ingrese el punto 2'));
        let y1 = parseInt(prompt('ingrese el punto 2'));
    
        let d = rc((x2-x1)^2 + (y2-y1)^2)
      
        alert("la distancia entre los dos punto es"+d);
    }
    if (e.target === botonactivida1_9) 
    {

        let n1 = parseInt(prompt('ingrese los metros '));
        let pulgadas = n1 * 39.3701;
    
        alert("los metros convertidos en pulgadas son "+pulgadas+"pulgas");
    }
    if (e.target === botonactivida1_10) 
    {
        let h = parseInt(prompt('Ingresa la altura de la alberca '));
        let l = parseInt(prompt('Ingresa el largo de la alberca'));
        let a = parseInt(prompt('Ingresa el ancho de la alberca '));
        let precio = parseInt(prompt('Ingresa el precio de metro cubico del agua '));

       
        let volumen = (h*l*a);
        let pago = volumen*precio;
        
        alert("el pago por"+volumen+"litros de agua es"+pago); 
    }
    if (e.target === botonactivida3_1)
    {
        let firstNumberValue = parseInt(prompt('primer numero '));
        let secondNumberValue = parseInt(prompt('segundo numero '));
        if (!firstNumberValue || !secondNumberValue) {
            alert(`❌ ¡Completa los respectivos campos! ❌`)
          } else {
            let numeroMayor = 0;
            let numeroMenor = 0;
        
            if (firstNumberValue > secondNumberValue) {
              numeroMayor = firstNumberValue;
              numeroMenor = secondNumberValue;
            } else if (firstNumberValue < secondNumberValue) {
              numeroMayor = secondNumberValue;
              numeroMenor = firstNumberValue;
            } else {
              alert(`✔ ¡El número ${firstNumberValue} y el número ${secondNumberValue} son IGUALES! ✔`);
              return;
            }
        
            alert(`✔ ¡El número MAYOR es ${numeroMayor} y el número MENOR es ${numeroMenor}! ✔`);
          }
    }
    if (e.target === botonactivida3_2) 
    {
        let numberValue = parseInt(prompt('ingrese un numero '));
        if (!numberValue && numberValue !== 0) {
            alert(`❌ ¡Completa el respectivo campo! ❌`)
          } else {
            let numeroSigno = '';
        
            if (numberValue > 0) numeroSigno = 'POSITIVO';
            else if (numberValue < 0) numeroSigno = 'NEGATIVO';
            else if (numberValue === 0) numeroSigno = 'NEUTRO';
        
            alert(`✔ ¡El número ${numberValue} es un número ${numeroSigno}! ✔`);
          }
    }
    if (e.target === botonactivida3_3) 
    {

        let cantidadLapicesValue = parseInt(prompt('ingrese las cantidad de lapiz '));

        if (!cantidadLapicesValue && cantidadLapicesValue !== 0) {
            alert(`❌ ¡Completa el respectivo campo! ❌`)
          } else 
          {
            let precioXLapiz = 0;
            if (cantidadLapicesValue >= 1000) precioXLapiz = 1100;
            else if (cantidadLapicesValue < 1000 && cantidadLapicesValue > 0) precioXLapiz = 1300;
            else {
              alert(`⚠ ¡Digita una cantidad válida! ⚠`);
              return;
            }
            let precioTotal = cantidadLapicesValue * precioXLapiz;
        
            alert(`✔ ¡La cantidad que se debe pagar por los ${cantidadLapicesValue} lápices es $ ${precioTotal}! ✔`);
          }
    }
    if (e.target === botonactivida3_4) 
    {
        let precioTrajeValue = parseInt(prompt('ingrese el valor del traje '));
        if (!precioTrajeValue && precioTrajeValue !== 0) {
            alert(`❌ ¡Completa el respectivo campo! ❌`)
          } else {
            let porcentajeDes = 0;
        
            if (precioTrajeValue > 25000) porcentajeDes = 17;
            else if (precioTrajeValue <= 25000 && precioTrajeValue > 0) porcentajeDes = 5;
            else {
              alert(`⚠ ¡Digita un precio válido! ⚠`);
              return;
            }
            let descuento = precioTrajeValue * (porcentajeDes / 100);
            let precioFinal = precioTrajeValue - descuento;
        
            alert(`✔ ¡El precio final del traje es de $ ${precioFinal} con un descuento del ${porcentajeDes}%! ✔`);
          }     
    }
    if (e.target === botonactivida3_5) 
    {

        let firstAmountValue = parseInt(prompt('ingrese la primera cantidad '));
        let secondAmountValue = parseInt(prompt('ingrese la segunda cantidad '));
        let thirdAmountValue = parseInt(prompt('ingrese la tercera cantidad '));
        if (!firstAmountValue || !secondAmountValue || !thirdAmountValue) {
            alert(`❌ ¡Completa los respectivos campos! ❌`)
          } else {
            const amounts = [firstAmountValue, secondAmountValue, thirdAmountValue];
            const setAmounts = new Set(amounts);
            const arrSetAmount = Array.from(setAmounts);
        
            if (amounts.length !== arrSetAmount.length) {
              alert(`⚠ ¡Digite cantidades que no sean iguales! ⚠`);
              return;
            }
            
            let cantidadMayor = Math.max(...amounts);
            let cantidadMenor = Math.min(...amounts);
            
            let cantidadMediana = amounts.filter((number) => number !== cantidadMayor && number !== cantidadMenor);
        
            alert(`✔ ¡El orden de las cantidades en forma descendente es ${cantidadMayor}, ${cantidadMediana} y ${cantidadMenor}! ✔`);
          }
    }
    if (e.target === botonactivida3_6) 
    {
    let cantidadPersonasValue = parseInt(prompt('ingrese la cantidad de personas '));
        if (!cantidadPersonasValue || cantidadPersonasValue <= 0) {
            alert(`❌ ¡Completa los respectivos campos! ❌`)
          } else 
          {
            let costoPlato = 0;
        
            if (cantidadPersonasValue > 90 && cantidadPersonasValue <= 150) costoPlato = 8500;
            else if (cantidadPersonasValue > 150) costoPlato = 7500;
            else costoPlato = 10000;
        
            let precioFinal = cantidadPersonasValue * costoPlato;
        
            alert(`✔ ¡El cliente deberá pagar en total $${precioFinal}! ✔`);
          }
    }
    if (e.target === botonactivida3_7) 
    {

        let numeroDeCitaValue = parseInt(prompt('ingrese numeros de citas '));
        if (!numeroDeCitaValue || numeroDeCitaValue <= 0) {
            alert(`❌ ¡Completa los respectivos campos! ❌`)
          } else {
            let precioCita = 0;
            let pagoAcumulado = 0;
        
            if (numeroDeCitaValue <= 3) precioCita = 100000;
            else if (numeroDeCitaValue >= 4 && numeroDeCitaValue <= 5) precioCita = 80000;
            else if (numeroDeCitaValue >= 6 && numeroDeCitaValue <= 8) precioCita = 70000;
            else if (numeroDeCitaValue >= 9) precioCita = 50000;
        
            for (let i = 1; i <= numeroDeCitaValue; i++) {
              if (i <= 3) pagoAcumulado += 100000;
              else if (i >= 4 && i <= 5) pagoAcumulado += 80000;
              else if (i >= 6 && i <= 8) pagoAcumulado += 70000;
              else if (i >= 9) pagoAcumulado += 50000;
            }
        
            alert(`✔ ¡El paciente deberá pagar por la cita $${precioCita} y lo que ha pagado hasta ahora por el tratamiento contando con la cita actual son $${pagoAcumulado}! ✔`);
          }
        
    }
    if (e.target === botonactivida3_8) 
    {

        let numeroDeEstudiantes = parseInt(prompt(`¿Cuántos estudiantes son en total?`));
        let notasAcumuladas = 0;
        for (let i = 1; i <= numeroDeEstudiantes; i++) {
            let notaEstudiante = parseFloat(prompt(`Digite la nota del estudiante n°${i}`));
            notasAcumuladas += notaEstudiante;
          }
          let promedioEstudiantes = notasAcumuladas / numeroDeEstudiantes;
        
          alert(`✔ ¡El promedio de los estudiantes es ${promedioEstudiantes}! ✔`);
    }
    if (e.target === botonactivida3_9) 
    {
        let numeroDeEstudiantes = parseInt(prompt(`¿Cuántos estudiantes son en total?`));
        let notasAcumuladas = 0;
        let estudiantesAprob = 0;
        let estudiantesReprob = 0;
        for (let i = 1; i <= numeroDeEstudiantes; i++) {
            let notaEstudiante = parseFloat(prompt(`Digite la nota del estudiante n°${i}`));
            notasAcumuladas += notaEstudiante;
        
            if (notaEstudiante >= 3) estudiantesAprob++;
            else estudiantesReprob++;
          }
          let promedioEstudiantes = notasAcumuladas / numeroDeEstudiantes;
        
          alert(`✔ ¡El promedio de los estudiantes es ${promedioEstudiantes}, donde los estudiantes aprobados fueron ${estudiantesAprob} y los reprobados fueron ${estudiantesReprob}! ✔`);
    }
    if (e.target === botonactivida3_10) 
    {
        let cantidadNumeros = parseInt(prompt(`¿Cuántos números en total va a digitar?`));
        let numerosMayoresA150 = 0;
        let numerosNegativosEncontrados = 0;
        let numerosPositivosEncontrados = 0;
        let cantNumsPositivos = 0;
        const arrNumeros = [];
      
        for (let i = 1; i <= cantidadNumeros; i++) {
          let numeroDigitado = parseFloat(prompt(`Digite el número ${i}:`));
      
          arrNumeros.push(numeroDigitado);
      
          if (numeroDigitado > 150) numerosMayoresA150++;
          if (numeroDigitado < 0) numerosNegativosEncontrados++;
          if (numeroDigitado > 0) {
            numerosPositivosEncontrados += numeroDigitado;
            cantNumsPositivos++;
          };
        }
        let numeroMenorEncontrado = Math.min(...arrNumeros);
        let numeroMayorEncontrado = Math.max(...arrNumeros);
      
        let promedioNumsPositivos = numerosPositivosEncontrados / cantNumsPositivos; 
      
        alert(`✔ ➡ El número mayor encontrado es: ${numeroMayorEncontrado}, y el número menor encontrado es: ${numeroMenorEncontrado}.
        ➡ La cantidad de números mayores a 150 es: ${numerosMayoresA150}.
        ➡ La cantidad de números negativos encontrados es: ${numerosNegativosEncontrados}.
        ➡ El promedio de los números positivos encontrados es: ${promedioNumsPositivos}. ✔`);       
    }
    if (e.target === botonactivida3_11) 
    {
        let cantidadEstudiantes = parseInt(prompt(`¿Cuántos estudiantes son en total?`));
        let sumPromedios = 0;
        
        for (let i = 1; i <= cantidadEstudiantes; i++) {
          let nombreEstudiante = prompt(`¿Cuál es el nombre del estudiante n°${i}?`);
          let sumaNotas = 0;
      
          for (let j = 1; j <= 4; j++) {
            let notaDigitada = parseFloat(prompt(`Digite la nota n°${j} de ${nombreEstudiante}:`));
            sumaNotas += notaDigitada
          }
          let promedioMateria = sumaNotas / 4;
          alert(`✔ ¡El promedio de ${nombreEstudiante} es ${promedioMateria}! ✔`);
      
          sumPromedios += promedioMateria;
        }
        let promedioGeneral = sumPromedios / cantidadEstudiantes;
      
        alert(`✔ ¡El promedio general del grupo es ${promedioGeneral}! ✔`)   
    }
    if (e.target === botonactivida3_12) 
    {
        let cantidadClientes = parseInt(prompt(`¿Cuántos clientes son en total?`));
        let valorDelVoltio = parseFloat(prompt(`¿Cuánto es el valor del voltio?`));
        let sumaConsumoClientes = 0;
        
        for (let i = 1; i <= cantidadClientes; i++) {
          let lecturaAnterior = parseFloat(prompt(`¿Cuál fue la lectura anterior del cliente n°${i}?`));
          let lecturaActual = parseFloat(prompt(`¿Cuál fue la lectura actual del cliente n°${i}?`));
      
          let consumoMes = Math.abs(lecturaAnterior - lecturaActual);
          let valorAPagar = consumoMes * valorDelVoltio;
          sumaConsumoClientes += consumoMes;
      
          alert(`✔ ¡El consumo del cliente n°${i} es de ${consumoMes} y el total a pagar es de $${valorAPagar}! ✔`);
        }
        let promedioConsumo = sumaConsumoClientes / cantidadClientes;
      
        alert(`✔ ¡Y el promedio del consumo del total de clientes es de ${promedioConsumo}! ✔`)   
    }
    if (e.target === botonactivida2_1)
    {
        let nombre = prompt('ingrese su nombre');
        let edad = parseFloat(prompt('ingrese la edad'));
        if (edad >= 18) {
            alert("su nombre es"+nombre);
        }else{
            alert("no podemos decir su nombre");
        }
    }
    if (e.target === botonactivida2_2){
        let nombre = prompt('ingrese su nombre');
        let edad = parseFloat(prompt('ingrese la edad'));
        if (edad >= 18) {
            alert("su nombre es"+nombre);
        }else{
          alert("gracias por utilizar el programa ");
        }
    }
    if (e.target === botonactivida2_3) {
      alert("este programa muestra el nombre de la persona si es myaor de edad  ");
        let a = prompt("Ingrese el nombre ");
        let e = parseInt(prompt("Ingrese la edad "));
        let c = parseInt(
          prompt("ingrese el estado civil 1 soltero 2 es casado  3 otro")
        );
        let s = parseInt(prompt("ingrese el sexo 1 hombre 2 para mujer"));
        if (e < 18 || (c = 1)) {
          alert("el nombre de la persona " + a);
        }
        alert("gracias por utilizar el programa ");
      }
    
      if (e.target === botonactivida2_4) {
        alert(
          "este programa muestra el nombre de la persona si es mayor de edad  y no es soltero"
        );
        let a = prompt("Ingrese el nombre ");
        let e = parseInt(prompt("Ingrese la edad "));
        let c = parseInt(
          prompt("ingrese el estado civil 1 soltero 2 es casado  3 otro")
        );
        let s = parseInt(prompt("ingrese el sexo 1 hombre 2 para mujer"));
        if (e > 18 || (c = 1)) {
          alert("el nombre " + a);
        } else {
          alert("usted a un no es independiente ");
        }
        alert("gracias por utilizar el programa ");
      }
      if (e.target === botonactivida2_5) {
        alert("este programa muestra el valor absoluto");
    
        let e = parseInt(prompt("Ingrese el numero"));
        let c = Math.abs(e);
        alert("el valor absoluto es " + c);
        alert("gracias por utilizar el programa ");
      }
      if (e.target === botonactivida2_6) {
        alert("este programa muestra solo los positivos");
    
        let n1 = parseInt(prompt("Ingrese el numero"));
    
        let n2 = parseInt(prompt("Ingrese el segundo numero"));
        let c = Math.abs(e);
        if (n1 < 0 && n2 < 0) {
        } else if (n2 > 0 && n1 < 0) {
          alert("los positivos son" + n2);
        } else if (n2 < 0 && n1 > 0) {
          alert("los positivos son" + n1);
        } else if (n1 > 0 && n2 > 0) {
          alert("los positivos son " + n1 + "y " + n2);
        }
        alert("gracias por utilizar el programa ");
      }
      if (e.target === botonactivida2_7) {
        alert("este programa muestra solo si ampos numeros  positivos");
    
        let n1 = parseInt(prompt("Ingrese el numero"));
    
        let n2 = parseInt(prompt("Ingrese el segundo numero"));
        let c = Math.abs(e);
        if (n1 > 0 && n2 > 0) {
          alert("los positivos son " + n1 + " y " + n2);
        }
        alert("gracias por utilizar el programa ");
      }
      if (e.target === botonactivida2_8) {
        alert("este programa muestra solo si ampos numeros  positivos");
    
        let n1 = parseInt(prompt("Ingrese el numero"));
    
        let n2 = parseInt(prompt("Ingrese el segundo numero"));
    
        if (n1 < 0 && n2 > 0) {
          alert("los numeros son distintos de signos " + n1 + " y " + n2);
        } else if (n1 > 0 && n2 < 0) {
          alert("los numeros son distintos de signos " + n1 + " y " + n2);
        }
        alert("gracias por utilizar el programa ");
      }
    
      if (e.target === botonactivida2_9) {
        alert("este programa muestra la suma de los numeros");
    
        let n1 = parseInt(prompt("Ingrese el numero"));
    
        let n2 = parseInt(prompt("Ingrese el segundo numero"));
        let c = n1 + n2;
        alert("la suma de los dos numeros es " + c);
        alert("gracias por utilizar el programa ");
      }
    
      if (e.target === botonactivida2_10) {
        alert("este programa muestra solo si la suma da negativa");
    
        let n1 = parseInt(prompt("Ingrese el numero"));
    
        let n2 = parseInt(prompt("Ingrese el segundo numero"));
        let c = n1 + n2;
        if (c < 0) {
          alert("la suma de los dos numeros es " + c);
        }
        alert("gracias por utilizar el programa ");
      }
      if (e.target === botonactivida2_11) {
        alert("este programa muestra el salario mensual de un empleado");
    
        let n1 = prompt("Ingrese el nombre");
    
        let n2 = parseInt(prompt("Ingrese su salario basico por hora"));
        let n3 = parseInt(prompt("Ingrese el numero de horas trabajadas"));
        let c = n2 * n3;
        alert("el nombre del empleado es " + n1 + " su salario mensual es " + c);
        alert("gracias por utilizar el programa ");
      }
      if (e.target === botonactivida2_12) {
        alert("este programa muestra el numero por el 5%");
    
        let n3 = parseInt(prompt("Ingrese el numero "));
        let c = n3 * 0.05;
        alert("el numero escrito es " + n3 + " su porcentaje del 5% es" + c);
        alert("gracias por utilizar el programa ");
      }
      if (e.target === botonactivida2_13) {
        alert(
          "este programa muestra el salario bruto,el valor de la retencion y su salario neto"
        );
    
        let A = prompt("Ingrese el nombre");
    
        let S = parseInt(prompt("Ingrese su salario basico por hora"));
        let HT = parseInt(
          prompt("Ingrese el numero de horas trabajadas en el periodo")
        );
        let P = parseInt(prompt("Ingrese su salario retencion"));
        let SB = S * HT;
        let RE = (P * SB) / 100;
        let SN = SB - RE;
        alert(
          "el nombre del empleado es " +
            A +
            " su salario bruto es " +
            SB +
            " su salario neto es " +
            SN +
            " su retencion " +
            RE
        );
        alert("gracias por utilizar el programa ");
      }
    
      if (e.target === botonactivida2_14) {
        alert(
          "este programa muestra el nombre del emplead0 del empleado el salario basico y su retenciony total a pagar"
        );
        let RET;
        let A = prompt("Ingrese el nombre");
    
        let SB = parseInt(prompt("Ingrese su salario basico "));
        if (SB < 2000000) {
          RET = 0;
        } else if (SB > 3000000) {
          RET = (8 / 100) * SB;
        } else {
          RET = (5 / 100) * SB;
        }
        let TP = SB - RET;
        alert(
          "el nombre del empleado es " +
            A +
            " su salario basico  es " +
            SB +
            " valor de la retencion " +
            RET +
            " su valor total a pagar " +
            TP
        );
        alert("gracias por utilizar el programa ");
      }
    
      if (e.target === botonactivida2_15) {
        alert("este programa muestra el nombre y el salario");
        let S;
        let A = prompt("Ingrese el nombre");
    
        let SB = parseInt(prompt("Ingrese su salario basico "));
        let HT = parseInt(prompt("Ingrese sus horas trabajadas "));
        if (HT > 48) {
          let HE = HT - 48;
          let SE = SB + SB * 0.35;
          S = 48 * SB + HE * SE;
        } else {
          S = SB * HT;
        }
        alert("el nombre del empleado es " + A + " su salario   es " + S);
        alert("gracias por utilizar el programa ");
      }
})