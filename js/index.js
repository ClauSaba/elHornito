let user 
let pass
let contador = 3;

function verStocks() {
    user = parseInt(prompt("ingrese usuario (9)"));
    pass = parseInt(prompt("ingrese contraseña (321)"));
    while (contador > 0) {        
        if (user != 9 || pass!=321) {    
            contador--;
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido a Stocks',
                showCloseButton: true
                })
            alert(`${contador} intentos restantes`)
            if (contador > 0) {
                user = parseInt(prompt("ingrese usuario (9)"));
                pass = parseInt(prompt("ingrese contraseña (321)"));
            }
        }else{
            Swal.fire({
            icon: 'success',
            title: 'Bienvenido a Stocks',
            confirmButtonText: '<a href="./pages/usoInterno.html">Entrar</a>',
            })
            break;
        }
    } 
}

