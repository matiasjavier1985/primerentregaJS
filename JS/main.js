let user='1';
let password= '1';
function login(){
    let validar=false;
    for (let i = 2; i>= 0; i--){
        let nombre= prompt('BIENVENIDO a MODO PAY\n\nIngrese su Usuario:')
        let contrasena=prompt('Ingrese contraseña:')
        if (nombre== user && contrasena == password){
            validar=true;
            alert("Ingreso Correcto\n\nBienvenido a:\n\n MODO PAY (Tu billetera personal)")
            break;
        }else{
            alert("Error de Usuario y Contraseña\n\nTe quedan: ( "+i+" ) intentos")
        }
    }
    return validar;
}
let ingreso = login()
if (ingreso){  
    let credito= 10000;
    let menu=prompt("1-Consultar credito disponible.\n2-Pago de Servicios\n3-Cargar SUBE (reintegro 30%)\n4-Calculo Ahorro\n5-Ingresar de credito\n6-Presione (X) Cerrar sesión");
    while(menu != "X"){
        switch(menu){
            case '1':
                alert("Creditos Disponible:"+credito);
                break;
            case '2':
                let menupagoserv=prompt("1-LUZ.\n2-GAS\n3-AGUA\nPresione (S) para volver");
                while(menupagoserv != "S"){
                    switch(menupagoserv){
                        case '1':
                            let montoapagar= parseInt(prompt("Monto a pagar: "));
                                if(montoapagar <=credito){
                                    credito =credito-montoapagar;
                                    alert(credito +" Credito restante")
                                }else{
                                    alert("Supera el monto con tu credito")
                                } 
                            break;
                        default:
                            alert("ERROR Presione (S) para volver");
                        break;                        
                        }
                menupagoserv=prompt("1-LUZ.\n2-GAS\n3-AGUA\nPresione (S) para volver");    
                }
                break;
            case '3':
                let creditosube=parseFloat(prompt("Ingrese credito a pagar (limite $500)"))
                if (creditosube <=500){
                    creditosube = (creditosube * 30)/100
                    credito =credito-creditosube;
                    alert ("Reintegro es de: $ "+ creditosube)
                    alert(credito +" Credito restante")
                    break;
                }else{
                    alert("Supera el limite de credito para Transporte")
                    break;
                }
            case '4':
                let ahorro=parseInt(prompt("Ingrese cuanto credito quiere ahorrar"))
                if (ahorro <= credito){
                    let ahorrodias=parseInt(prompt("Ingrese la cantidad de dias (max 90 dias)"))
                    if (ahorrodias <= 90) {
                        ahorro = ahorro/ahorrodias;
                        alert("Usted deberia ahorrar: "+ahorro+" creditos por dia") 
                        break;
                    }else{
                        alert("Ingreso un valor incorrecto o cantidad de dias supera los 90 dias")
                    break;}                              
                }else{
                    alert("No tiene credito suficiente para Ahorro")
                    break;
                }
            case '5':
                let aumentocredito = parseInt(prompt("Ingrese su credito"))
                if (aumentocredito > 0 ){
                    credito= aumentocredito + credito
                    alert("Usted tiene"+credito+" de credito disponible")
                }else{"Ingreso un valor incorrecto "}
            default:
            alert("Presione (X) para volver");
            break;
        }
    menu=prompt("1-Consultar credito disponible.\n2-Pago de Servicios\n3-Cargar SUBE(reintegro 30%)\n4-Calculo Ahorro\n5-Ingresar de credito\n6-Presione (X) Cerrar sesión");
    }
}


