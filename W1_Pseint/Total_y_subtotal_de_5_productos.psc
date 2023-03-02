Algoritmo Total_y_subtotal_de_5_productos
	// 5 producto igual a 5 variables
	producto1 <- precio1
	producto2 <- precio2
	producto3 <- precio3
	producto4 <- precio4
	producto5 <- precio5
	
	Escribir "Por favor digite los precios ($) de los 5 productos"
	Leer precio1, precio2, precio3, precio4, precio5
	
	// Suma de productos
	Subtotal <- precio1 + precio2 + precio3 + precio4 + precio5
	Escribir "El subtotal es $", Subtotal
	
	// IVA del subtotal
	IVA <- (Subtotal * 19) / 100
	Escribir "El IVA (19%) es $", IVA
	
	// Total Neto	
	Total <- IVA + Subtotal
	Escribir "El precio total de los productos con IVA es $", Total
FinAlgoritmo
