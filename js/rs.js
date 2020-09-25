
document.querySelector('#calcular').addEventListener('click', () =>{

    const n1 = parseInt(document.querySelector('#n1').value);
    const n2 = parseInt(document.querySelector('#n2').value);
    const select = document.getElementById('select').value;

    let r = document.querySelector('#r').value;
  
    if (isNaN(n1)) {
        document.getElementById("r").innerText = "Ingrese Numero 1";
      }else if (isNaN(n2)){
        document.getElementById("r").innerText = "Ingrese Numero 2";
      }
      else{
         
        if(select == 'suma'){ 
            r = n1 + n2;
        }else if( select == 'resta'){
            r = n1 - n2;
        }else if(select == 'multi'){
            r = n1 * n2;
        }else if(select == 'dividir'){
            r = n1 / n2;  
        } 

        document.querySelector('#r').innerHTML = new Intl.NumberFormat().format(r);
      }
});