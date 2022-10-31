
document.getElementById("form-resume").addEventListener("click", mostrarTotal);
document.getElementById("form-reset").addEventListener("click", resetearFormulario)

const ticketsForm = document.getElementById('tickets_form');
const formTotal = document.getElementById("form-total");
const precioTiket = 200;
const descuento = document.getElementById("form-select");
const cantidad = document.getElementById("form-number-tikets");


function mostrarTotal(){
    formTotal.innerHTML =  'Total a Pagar: $ ' + calcularTotal(porcentajeDescuento(descuento.selectedIndex), Number(cantidad.value));
}


function calcularTotal(desc, cant ){
    return (precioTiket - (precioTiket*desc) )*cant;
}

function porcentajeDescuento(desc){
    switch(desc){
        case 0:
            return 0.8; /* %80 */
            break;
        
        case 1:
            return 0.5; /* %80 */
            break;

        case 2:
            return 0.15; /* %80 */
            break;
    }
}

function resetearFormulario(){
    ticketsForm.reset()
}