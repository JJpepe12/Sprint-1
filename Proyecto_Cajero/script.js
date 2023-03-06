// 1. Escribir una lista de usuarios con los siguientes datos: nombre, número de documento, contraseña y tipo de usuario
// El tipo de usuario será: 1: administrador, 2: cliente. Guardarla en un array de objetos
const listaUsuarios = [
	{
		nombre: 'Administrador',
		documento: '00123',
		contrasena: 'admin123',
		tipo: 1
	},
	{
		nombre: 'Jose',
		documento: '12345',
		contrasena: 'Jose12345',
		tipo: 2
	},
	{
		nombre: 'Maria',
		documento: '67890',
		contrasena: 'Maria67890',
		tipo: 2
	}
];

// 2. Realizar un programa que al inicio solicite ingresar documento y contraseña
// si el usuario no existe debe indicar que no existe y volver a preguntar usuario y contraseña

const validarUsuario = () =>{
	let validacion = true; 
	let usuario = {}; 
	while (validacion){
		const ID = parseInt(prompt("Digite su documento: "));
		const pwd = prompt("Digite su contraseña: ");
		
		listaUsuarios.forEach(element => {
			if (element.documento == ID && element.contrasena == pwd){
				usuario = element; 
				validacion = false; 
			}
		}) 
		if (validacion == true){
			alert("El usuario no existe o la contrasña es incorrecta." );
		} 
	}
	return usuario; 
}

// si el usuario es administrador, debe permitir cargar el cajero de la siguiente manera:
// 3. Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.
// 4. Almacenar esta información en un array de objetos.

let dineroDisponible = [
	{denominacion: 100000, cantidad: 0},
	{denominacion: 50000, cantidad: 0},
	{denominacion: 20000, cantidad: 0},
	{denominacion: 10000, cantidad: 0},
	{denominacion: 5000, cantidad: 0}
];

const cajero = (dineroDisponible, usuario) => {
	if(usuario.tipo == 1){
		dineroDisponible.forEach(element => {
		element.cantidad += parseInt(prompt(" Administrador, ingrese la cantidad de billetes de " + element.denominacion + ": "));
		
// 5. Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total general.
		const totalPorDenominacion = element.cantidad * element.denominacion;
		console.log("La suma de billetes de " + element.denominacion + " es " + totalPorDenominacion + ". Cantidad de billetes: " + element.cantidad); 
		
		let sumaTotal 
		sumaTotal += totalPorDenominacion; 
		}); 
		console.log("La suma total de billetes es " + sumaTotal); 
	}
}

// 6. Una vez el cajero esté cargado, debe volver a solicitar usuario y contraseña,
// si es administrador, se repite el mismo proceso, sumar a la cantidad actual
	if (listaUsuarios.tipo === 1) {
	console.log('Cajero cargado:');
	}

// si es cliente debe proseguir de la siguiente manera:
// 7. Si el cajero no tiene dinero cargado, debe aparecer un mensaje en consola: 
//“Cajero en mantenimiento, vuelva pronto.” Y reiniciar desde el inicio
	if(listaUsuarios.tipo == 2){
		if(sumaTotal == 0){
			console.log("Cajero en mantenimiento, vuelva pronto.")};
			reiniciarSesion();  
	}

// 8. Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada a retirar
// Luego debe indicar cuánto dinero puede entregar basado en la cantidad disponible y los tipos de billetes
// Luego debe mostrar en consola cuántos billetes de cada denominación entregó.
// Priorizando siempre las denominaciones más altas y redondeando a la cifra menor
	if(listaUsuarios.tipo == 2){
		let sumaTotal = 0;
		dineroDisponible.forEach(element => {
			const totalPorDenominacion = element.cantidad * element.denominacion; 
			sumaTotal += totalPorDenominacion;
		}); 
		
		if(sumaTotal != 0){
			let cantidadRetirar = parseInt(prompt("Ingrese la cantidad a retirar: "));
			console.log("la cantidad que el cliente quiere retirar es " + cantidadRetirar); 
			if (cantidadRetirar <= sumaTotal){
				let cantidadEntregar = 0
				dineroDisponible.forEach(element => {
					const billetesNecesarios = Math.floor(cantidadRetirar/element.denominacion); 
					let disponible 
					if(billetesNecesarios <= element.cantidad){
						(cantidadRetirar >= element.denominacion * billetesNecesarios);
						cantidadRetirar -= element.denominacion * billetesNecesarios;
						element.cantidad -= billetesNecesarios;
						cantidadEntregar += element.denominacion * billetesNecesarios;
						console.log("Se entregaron " + billetesNecesarios + " de " + element.denominacion);
					} 
				else if (billetesNecesarios > element.cantidad){
					if(cantidadRetirar >= element.denominacion * element.cantidad){
						console.log("Se entregaron " + element.cantidad + " de " + element.denominacion) 
						cantidadEntregar += element.denominacion * element.cantidad;
						cantidadRetirar -= element.denominacion * element.cantidad;
						element.cantidad -= element.cantidad;
					}
				}
			})
			console.log("La cantidad que el cajero pudo entregar fue " + cantidadEntregar + " y le falto por entregar " + cantidadRetirar + ".");

// 9. Posteriormente, debe aparecer en consola, el dinero restante en el cajero, por cada denominación
                let dineroDisponible = 0;
                disponibleCajero.forEach(element => {
                    const totalPorDenominacion = element.cantidad * element.denominacion;
                    console.log("La suma de billetes de " + element.denominacion + " restante en el cajero es " + totalPorDenominacion + ". La cantidad restante de billetes: " + element.cantidad + ".");
                    dineroDisponible += totalPorDenominacion;
                });

            } else if (cantidadRetirar > sumaTotalCajero){
                console.log("El cajero no cuenta con los fondos suficientes para realizar el retiro.");
            }
        }
    }