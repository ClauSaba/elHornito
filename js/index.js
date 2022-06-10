let user ;
let pass ;
let contador = 3;

function verStocks() {
    user = parseInt(prompt("ingrese usuario (9)"));
    pass = parseInt(prompt("ingrese contraseña (321)"));
    while (contador > 0) {        
        if (user != 9 || pass!=321) {    
            contador--;
            Swal.fire({
                icon: 'error',
                title: 'Acceso no permitido'
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

function reservaInfo(){
    (async()=>{
        const { value: email } = await Swal.fire({
            title: "Para mas info",
            html: `<p class="mensaje">Contactanos al <b style = "color: blue" >11 1234-5678 </b> o dejanos tu mail donde te enviaremos el detalle del servicio</p>`,
            input: 'email',
            inputLabel: 'ingresá tu mail',
            inputPlaceholder: 'Enter your email address',
            padding: '1em',
            showCloseButton: true
        })
    })();
}