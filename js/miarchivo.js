//  OBJETO QUE SE GENERA CADA VEZ QUE EL USUARIO HACE UN PEDIDO
class Producto {
    constructor (cant, sab) {
        this.cant = cant;
        this.sab = sab
    }

    comprarE() {
        if (this.cant > 0) {
            alert("Su pedido tiene un valor de $" +  this.cant * 250 );
            return parseInt(this.cant);
        }
        else {
            alert("Usted no ha realizado ningún pedido.");
            return parseInt(this.cant = 0), parseInt(this.sab = 0);
        }
    }

    comprarB() {
        if (this.cant > 0) {
            alert("Su pedido tiene un valor de $" +  this.cant * 700 );
            return parseInt(this.cant);
        }
        else {
            alert("Usted no ha realizado ningún pedido.");
            return parseInt(this.cant = 0), parseInt(this.sab = 0);
        }
    }
}

//  FUNCION UTILIZADA PARA DETALLAR EL PEDIDO DEL USUARIO UNA VEZ QUE TERMINO CON LA COMPRA DE ALGUNO DE LOS PRODUCTOS (EMPANADAS O BUDINES)
function detalle(array1, array2, prod) {
    let imprimir;
    let listaImprimir = [];
    for (let i = 0; i < array1.length; i++ ) {
        imprimir = array1[i] + " " + prod + " de " + array2[i];
        listaImprimir.push(imprimir)

    }
    return listaImprimir.join("\n")
}

//  VARIABLES UTILIZADAS PARA SABER CUANTAS UNIDADES DE CADA PRODUCTO SE COMPRARON AL FINALIZAR
let totalEmpanadas = 0;
let totalBudines = 0;

//  LISTAS PARCIALES DE CADA PRODUCTO
let listaEmpCant = [];
let listaEmpSab = [];
let listaBudCant = [];
let listaBudSab = [];

//  VARIABLES UTILIZADAS PARA IR ACUMULANDO LAS UNIDADES QUE SE VAN COMPRANDO DE CADA PRODUCTO
let total = 0;
let total1 = 0;
let cantEmp = 0;
let cantBud = 0;

// MENSAJE DE BIENVENIDA AL INGRESAR AL SITIO
alert("Bienvenida/o a la sección de compras de `Chef Gina´")

//  ELEGIR ENTRE EMPANADAS Y BUDINES
let seleccion = prompt("-Si desea comprar EMPANADAS ingrese 1.\n-Si desea comprar BUDINES ingrese 2.")

do {
    //  VARIABLES UTILIZADAS PARA PODER MANIPULAR LOS OBJETOS. SU VALOR CAMBIA EN CADA PEDIDO
    let pedidoEmp; 
    let pedidoBud;

    //  SI ELIGE EMPANADAS
    if (seleccion == 1) {

        let variedad = prompt("El valor de cada empanada es $250 y la variedad es la siguiente:\n-Carne (c)\n-Jamón y queso (jyq)\n-Árabes (a)\n-Verdura (v)\n-Matambre (m)\n-Cebolla (ce)\n\nPara seleccionar una variedad, coloque la letra encerrada entre ( ).");
        
        //  VARIEDAD DE EMPANADAS
        while (variedad != 0) {
            switch (variedad) {
                case "c":
                    pedidoEmp = new Producto (cant = parseInt(prompt("Ingrese el número de empanadas que desea")), sab = "Carne");
                    cantEmp= pedidoEmp.comprarE();
                break;
                case "jyq": 
                    pedidoEmp = new Producto (cant = parseInt(prompt("Ingrese el número de empanadas que desea")), sab = "Jamón y queso");
                    cantEmp= pedidoEmp.comprarE();
                break;
                case "a":
                    pedidoEmp = new Producto (cant = parseInt(prompt("Ingrese el número de empanadas que desea")), sab = "Árabes");
                    cantEmp= pedidoEmp.comprarE();
                break;
                case "v":
                    pedidoEmp = new Producto (cant = parseInt(prompt("Ingrese el número de empanadas que desea")), sab = "Verdura");
                    cantEmp= pedidoEmp.comprarE();
                break;
                case "m":
                    pedidoEmp = new Producto (cant = parseInt(prompt("Ingrese el número de empanadas que desea")), sab = "Matambre");
                    cantEmp= pedidoEmp.comprarE();
                break;
                case "ce":
                    pedidoEmp = new Producto (cant = parseInt(prompt("Ingrese el número de empanadas que desea")), sab = "Cebolla");
                    cantEmp= pedidoEmp.comprarE();
                break;
                default:
                    alert("Usted ha ingresado un código incorrecto. Por favor intente nuevamente.")
                    pedidoEmp = new Producto (cant = 0, sab = 0);
                    cantEmp = 0;
                break;
            }
            //  ARRAYS QUE SE VAN GENERANDO CON LOS PRODUCTOS Y LA CANTIDAD DE LOS MISMOS QUE EL USUARIO VA SOLICITANDO
            listaEmpCant.push(pedidoEmp.cant);
            listaEmpSab.push(pedidoEmp.sab);

            //  MENSAJE QUE SALE LUEGO DE ELEGIR UNA CANTIDAD DE EMPANADAS
            variedad = prompt("Si desea seguir comprando, recuerde que la variedad es la siguiente:\n-Carne (c)\n-Jamón y queso (jyq)\n-Árabes (a)\n-Verdura (v)\n-Matambre (m)\n-Cebolla (ce)\n\nPara seleccionar una variedad, coloque la letra encerrada entre ( ).\n\nSi desea finalizar su compra, ingrese 0.")
            
            //  VARIABLE QUE ALMACENA LA CANTIDAD TOTAL DE EMPANADAS COMPRADAS
            total1 += cantEmp
        }

        //  NETEANDO LOS ARRAYS DE VALORES 0 PARA QUE NO APAREZCAN EN LA LISTA FINAL
        listaEmpCant = listaEmpCant.filter(numero => numero != 0)
        listaEmpSab = listaEmpSab.filter(numero => numero != 0)

        //  COSTO TOTAL DE EMPANADAS COMPRADAS Y DETALLE DE LA COMPRA
        totalEmpanadas = total1 * 250
        alert("Usted ha gastado $" + totalEmpanadas + " en empanadas.\nDetalle de su pedido:\n" + detalle(listaEmpCant,listaEmpSab, "empanadas"))

    }

    //  SI ELIGE BUDINES
    else if (seleccion == 2 ){

        let variedad = prompt("El valor de cada budín es $700 y la variedad es la siguiente:\n-Zanahoria (z)\n-Limón glaseado (lg)\n-Marmolado (m)\n-Chocolate y nueces (cn)\n\nPara seleccionar una variedad, coloque la letra encerrada entre ( ).")
        
        //  VARIEDAD DE BUDINES
        while (variedad != 0) {
            switch (variedad) {
                case "z":
                    pedidoBud = new Producto (cant = parseInt(prompt("Ingrese el número de budines que desea")), sab = "Zanahoria");
                    cantBud= pedidoBud.comprarB();
                break;
                case "lg":
                    pedidoBud = new Producto (cant = parseInt(prompt("Ingrese el número de budines que desea")), sab = "Limón glaseado");
                    cantBud= pedidoBud.comprarB();
                break;
                case "m":
                    pedidoBud = new Producto (cant = parseInt(prompt("Ingrese el número de budines que desea")), sab = "Marmolado");
                    cantBud= pedidoBud.comprarB();
                break;
                case "cn":
                    pedidoBud = new Producto (cant = parseInt(prompt("Ingrese el número de budines que desea")), sab = "Chocolate y nueces");
                    cantBud= pedidoBud.comprarB();
                break;
                default:
                    alert("Usted ha ingresado un código incorrecto. Por favor intente nuevamente.")
                    pedidoBud = new Producto (cant = 0, sab = 0);
                    cantBud = 0;

                break;
            }
            //  ARRAYS QUE SE VAN GENERANDO CON LOS PRODUCTOS Y LA CANTIDAD DE LOS MISMOS QUE EL USUARIO VA SOLICITANDO
            listaBudCant.push(pedidoBud.cant);
            listaBudSab.push(pedidoBud.sab);
            
            //  MENSAJE QUE SALE LUEGO DE ELEGIR UNA CANTIDAD DE EMPANADAS
            variedad = prompt("Si desea seguir comprando, recuerde que la variedad es la siguiente:\n-Zanahoria (z)\n-Limon glaseado (lg)\n-Marmolado (m)\n-Chocolate y nueces (cn)\n\nPara seleccionar una variedad, coloque la letra encerrada entre ( ).\n\nSi desea finalizar su compra, ingrese 0.")
  
            //  VARIABLE QUE ALMACENA LA CANTIDAD TOTAL DE EMPANADAS COMPRADAS
            total += cantBud
        }

    //  NETEANDO LOS ARRAYS DE VALORES 0 PARA QUE NO APAREZCAN EN LA LISTA FINAL
    listaBudCant = listaBudCant.filter(numero => numero != 0)
    listaBudSab = listaBudSab.filter(numero => numero != 0)
        
    //   COSTO TOTAL DE BUDINES COMPRADOS Y DETALLE DE LA COMPRA
    totalBudines = parseInt(total * 700)
    alert("Usted ha gastado $" + totalBudines + " en budines.\nDetalle de su pedido:\n" + detalle(listaBudCant,listaBudSab, "budines"))
    }

    //  SI LA ELECCION NO ES NI BUDINES NI EMPANADAS, ERROR
    else {
        alert("Usted ha ingresado un código incorrecto. Por favor intente nuevamente.")
    }

    //  MENSAJE QUE APARECE AL FINAL PARA DAR LA OPCION DE SEGUIR COMPRANDO
    seleccion = prompt("-Si desea comprar EMPANADAS ingrese 1.\n-Si desea comprar BUDINES ingrese 2.\n-Si ya ha realizado una compra y desea abonar el pedido, ingrese 3.")
} while (seleccion != 3)

alert("El valor de su pedido es el siguiente:\n-Empanadas $" + totalEmpanadas + ".\n-Budines $" + totalBudines + ".\n\nMONTO TOTAL $" + (totalBudines + totalEmpanadas) + ".")

alert("Por el momento, el unico medio de cobro del que disponemos es por transferencia.\nA continuación le mostraremos los datos de la cuenta.\nDisculpe las moelstias.")

alert("-Alias: cheff.gina\n-CBU: 1234567890098765432112\n-Titular: Cheff Gina\n-CUIT: 27-12345678-9")

alert("Muchas gracias por su compra!\nQue lo disfrute!")




