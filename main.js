function eliminarPEDIDO(arregloCARRITO,i) {
    
    
    for(let c=0;c<i;c++){
       alert("Pedido" + "(" + (c+1) +")" + "\n" +"Prenda: " + arregloCARRITO[c].prenda + "\n"
            +"Color: " +arregloCARRITO[c].color +  "\n"
            +"Talle: " +arregloCARRITO[c].talle); 

    }
    
    let opcion=prompt("Si desea eliminar uno de los anteriores, presione el numero al cual corresponde el pedido...si no desea eliminar nada entonces, precione cualquier otra tecla.");
     
    switch (opcion) {
      
        case 1:
            arregloCARRITO.slice(0);
            console.log(arregloCARRITO[0]);
            alert("Gracias por su pasciencia, vuelva pronto!!!!!!");
            break;
        case 2:
            arregloCARRITO.slice(1);
                console.log(arregloCARRITO[1]);
                alert("Gracias por su pasciencia, vuelva pronto!!!!!!");
            break;
        case 3:
            arregloCARRITO.slice(2);
                console.log(arregloCARRITO[2]);
                alert("Gracias por su pasciencia, vuelva pronto!!!!!!");
            break;
        case 4:
            arregloCARRITO.slice(3);
                console.log(arregloCARRITO[3]);
                alert("Gracias por su pasciencia, vuelva pronto!!!!!!");
            break;
                            
        default:
            alert("Gracias por su pasciencia, vuelva pronto!!!!!!");
            break;
            
    }

    
}


function pedido (prenda,color,talle) {
    this.prenda=prenda;
    this.color=color;
    this.talle= talle;
}
function usuario  (nombreUsuario,contraseña,edad) {
    this.nombreUsuario=nombreUsuario  ;
    this.contraseña=contraseña ;
    this.edad= edad;
}
const pedidos=[];

let nombreUsuario = prompt("Nombre de Usuario");
let contraseña = prompt("Ingrese su contraseña");
let edad = prompt("Ingrese su Edad");

const usuarios = new usuario (nombreUsuario,contraseña,edad);
console.log(usuarios);




let opcion1=prompt("Desea hacer un pedido ? (si/no)");
let opcion2;
let i=0;
if(opcion1==="si"){
    do{
        let prendaElejida = prompt("Que tipo de prenda desea comprar?\n-BUZO\n-REMERA\n-ZAPATILLAS\n-GORRAS");
        let colorElejido = prompt("De que color lo desea ? \n-Azul\n-Rojo\n-Amarillo\n-Negro\n-Verde\n-Violeta\n-Naranja");
        let talleElejido = prompt("De que talle lo prefiere ? \n S(Small)\n M(Medium) \n L(Large) \n Xl(Extra Large) ");

        pedidos [i] = new pedido (prendaElejida,colorElejido,talleElejido);
        console.log(pedidos[i]);
        i++;
        
        
        opcion2=prompt("Desea hacer otro pedido ?");

    }while(opcion2==="si");    

    
}

alert("Confirme si las sieguientes compras estan bien....si no lo estan, precione el numero a la que corresponda");

eliminarPEDIDO(pedidos,i);



