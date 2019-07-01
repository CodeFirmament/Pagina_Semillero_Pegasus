function Cambiar_Apariencia(direccion){

	var link = document.createElement('link');
	 link.rel = "stylesheet";
	 link.type = 'text/css';
	 link.href = ''+direccion;

	var Elemento_adaptacion = document.getElementsByTagName('HEAD')[0].getElementsByTagName('link')[4];
	var Elemento = document.getElementsByTagName('HEAD')[0];

	if (typeof(Elemento_adaptacion) != 'undefined' && Elemento_adaptacion != null) {

		Elemento.removeChild(Elemento_adaptacion);
		 		
	}else{
		Elemento.appendChild(link);
	}

}