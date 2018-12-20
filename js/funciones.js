function encabezadopagina(){
	//Utilizar esta herramienta para convertir bloque HTML en una sola linea
	//http://www.textfixer.com/html/compress-html-compression.php
	//http://www.textfixer.com/html/uncompress-html-code.php
	//var valorhtml = '<div class="solid-row"></div><div class="container"> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#primary-nav"> <span class="sr-only"> Toggle navigation </span> <span class="icon-bar"> </span> <span class="icon-bar"> </span> <span class="icon-bar"> </span> </button><a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="" title=""></a> </div> <div class="collapse navbar-collapse navbar-right" id="primary-nav"> <ul class="nav navbar-nav"> <li class="dropdown active"><a href="index.html" class="dropdown-toggle"><i class="fa fa-home"></i>Inicio</a></li> <li class="dropdown"><a href="about-us.html" class="dropdown-toggle"><i class="fa fa-hand-o-down"></i>Nosotros</a></li> <li class="mega-menu-item dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-hand-o-down"></i>Carpintería</a> <div class="mega-menu dropdown-menu"> <img src="images/design-menu.jpg" class="img-rounded" alt="" title=""> <ul> <li><strong>Interior y Exterior</strong></li> <li><a href="melamine.html">Melamina</a></li> <li><a href="wood.html">Madera</a></li> <li><a href="mdf.html">MDF y Drywall</a></li> <li><a href="metal.html">Estructuras metálicas</a></li> </ul> <ul> <li><strong>Ventas</strong></li> <li><a href="sale.html">Melamina y materiales</a></li></ul> </div> </li> <li class="dropdown"> <a href="services.html" class="dropdown-toggle"><i class="fa fa-hand-o-down"></i>Servicios</a> </li> <li class="dropdown"><a href="gallery1.html" class="dropdown-toggle"><i class="fa fa-camera"></i>Galería</a></li> <!-- <li class="dropdown last"><a href="shop.html" class="dropdown-toggle"><i class="fa fa-shopping-cart"></i>Tienda</a></li> --> <li class="dropdown"><a href="member-detail.html" class="dropdown-toggle"><i class="fa fa-hand-o-down"></i>Clientes</a></li> <li class="dropdown last"><a href="contact-us.html" class="dropdown-toggle"><i class="fa fa-globe"></i>Contáctenos</a></li> </ul> </div> </nav></div>'
	//var valorhtml = '<div class="solid-row"> <div class="container"> <div class="row"> <div class="col-md-12"> <a class="navbar-brand" href="index.html"> <img src="images/logo.png" alt="" title=""> </a> <div class="navbar-brand pull-right upper-right clearfix"> <!--Info Box--> <div class="upper-column info-box"> <div class="icon-box"><i class="fa fa-phone"></i></div> <ul> <li>Llámanos a <br> (+51) 479-0002</li> </ul> </div> <!--Info Box--> <div class="upper-column info-box"> <div class="icon-box"><i class="fa fa-envelope"></i></div> <ul> <li>Nuestro E-mail<br> <a href="mailto:ventas@aldiseno.pe">ventas@aldiseno.pe</a></li> </ul> </div> <!--Info Box--> <div class="upper-column info-box"> <div class="icon-box"><i class="fa fa-clock-o"></i></div> <ul> <li>L - V 8:00am - 5:00 pm<br> Sábados 8:00am - 4:00pm</li> </ul> </div> </div> </div> </div> </div></div><div class="container"> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#primary-nav"> <span class="sr-only"> Toggle navigation </span> <span class="icon-bar"> </span> <span class="icon-bar"> </span> <span class="icon-bar"> </span> </button> <a class="navbar-brand logo2" href="index.html"><img src="images/logo2.png" alt="" title=""></a> </div> <div class="collapse navbar-collapse navbar-right" id="primary-nav"> <ul class="nav navbar-nav"> <li class="dropdown active"><a href="index.html" class="dropdown-toggle"><i class="fa fa-home"></i>Inicio</a></li> <li class="dropdown"><a href="about-us.html" class="dropdown-toggle"><i class="fa fa-hand-o-down"></i>Nosotros</a></li> <li class="dropdown"> <a href="services.html" class="dropdown-toggle"><i class="fa fa-hand-o-down"></i>Servicios</a> </li> <li class="dropdown"><a href="gallery1.html" class="dropdown-toggle"><i class="fa fa-camera"></i>Galería</a></li> <li class="dropdown"><a href="member-detail.html" class="dropdown-toggle"><i class="fa fa-hand-o-down"></i>Clientes</a></li> <li class="dropdown last"><a href="contact-us.html" class="dropdown-toggle"><i class="fa fa-globe"></i>Contáctenos</a></li> </ul> </div> </nav></div>'
	var valorhtml = '<div class="solid-row"> <div class="container"> <div class="row"> <div class="col-md-12"> <a class="navbar-brand" href="index.html"> <img src="images/logo.png" alt="" title=""> </a> <div class="navbar-brand pull-right upper-right clearfix"> <div class="upper-column info-box"> <div class="icon-box"> <i class="fa fa-phone"></i> </div> <ul> <li> Llámanos a <br> (+51) 479-0002 </li> </ul> </div> <div class="upper-column info-box"> <div class="icon-box"> <i class="fa fa-envelope"></i> </div> <ul> <li> Nuestro E-mail <br> <a href="mailto:ventas@aldiseno.pe">ventas@aldiseno.pe</a> </li> </ul> </div> <div class="upper-column info-box"> <div class="icon-box"> <i class="fa fa-clock-o"></i> </div> <ul> <li> L - V 8:00am - 5:00 pm <br> Sábados 8:00am - 4:00pm </li> </ul> </div> </div> </div> </div> </div></div><div class="container"> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#primary-nav"> <span class="sr-only"> Toggle navigation </span> <span class="icon-bar"> </span> <span class="icon-bar"> </span> <span class="icon-bar"> </span> </button> <a class="navbar-brand logo2" href="index.html"><img src="images/logo2.png" alt="" title=""></a> </div> <div class="collapse navbar-collapse navbar-right" id="primary-nav"> <ul class="nav navbar-nav"> <li class="dropdown active"><a href="index.html" class="dropdown-toggle"><i class="fa fa-home"></i>Inicio</a></li> <li class="dropdown"><a href="about-us.html" class="dropdown-toggle"><i class="fa fa-hand-o-down"></i>Nosotros</a></li> <li class="dropdown"> <a href="services.html" class="dropdown-toggle"><i class="fa fa-hand-o-down"></i>Servicios</a> </li> <li class="dropdown last"><a href="contact-us.html" class="dropdown-toggle"><i class="fa fa-globe"></i>Contáctenos</a></li> </ul> </div> </nav></div>'

	document.write(valorhtml);
}

function piepagina(){
	var valorhtml = '<div class="colourfull-row"></div><footer id="footer" class="light"><div class="container"><div class="row"> <div class="col-md-4"><div class="footer-widget"><h4><span>Mapa de sitio</span></h4> <ul class="footer-nav list-unstyled clearfix"> <li><a href="index.html"><i class="fa fa-long-arrow-right"></i>Inicio</a></li> <li><a href="about-us.html"><i class="fa fa-long-arrow-right"></i>Nosotros</a></li> <li><a href="sale.html"><i class="fa fa-long-arrow-right"></i>Venta melamina</a></li> <li><a href="services.html"><i class="fa fa-long-arrow-right"></i>Servicios</a></li> <li><a href="gallery1.html"><i class="fa fa-long-arrow-right"></i>Galería</a></li> <li><a href="member-detail.html"><i class="fa fa-long-arrow-right"></i>Clientes</a></li> <li><a href="contact-us.html"><i class="fa fa-long-arrow-right"></i>Contáctenos</a></li> </ul> </div> </div> <div class="col-md-4"><div class="footer-widget"><h4><span>Interior y Exterior</span></h4><div class="twitter-widget"><div class="tweet"><i class="fa fa-long-arrow-right"></i><p><a href="melamine.html">Melamine</a> trabajos en melamine como; cocinas, closets, escritorios, muebles TV y otros tipos de muebles. <a href="melamine.html"> Leer Más</a></p></div><div class="tweet"><i class="fa fa-long-arrow-right"></i><p><a href="wood.html">Madera</a> Puertas, techos, terrazas, escaleras, pasamanos, puertas levadizas, miniaturas publicitarias y acabados de todo tipo.<a href="wood.html"> Leer Más</a></p></div><div class="tweet"><i class="fa fa-long-arrow-right"></i><p><a href="mdf.html">MDF y Drywall</a> Módulos, ruteados, enchapados de acero, paredes para oficinas y otros.<a href="mdf.html"> Leer Más</a></p></div><div class="tweet"><i class="fa fa-long-arrow-right"></i><p><a href="metal.html">Estructuras metálicas</a> Puertas enrollables, pasamanos, ventanas y trabajos en general.<a href="metal.html"> Leer Más</a></p></div></div></div> </div> <div class="col-md-4"><div class="footer-widget"> <h4><span>Ubícanos</span></h4> <p>Para mayor información ubícanos. Estamos para responderle cualquier tipo de consultas o dudas.</p> <div class="contact-widget"> <i class="fa fa-home"></i><p>ALDISEÑO E.I.R.L, Ampliación las cumbres de Cieneguilla MZ. B, Lote 3, Lima - Perú</p><i class="fa fa-envelope"></i><p><a href="mailto:ventas@aldiseno.pe">ventas@aldiseno.pe</a></p> <i class="fa fa-mobile"></i><p class="phone-number">(+51) 479-0002</p> </div><ul class="social3 clearfix"><li><a href="https://www.facebook.com/alidsenoeirl/" target="_blank"><i class="fa fa-facebook"></i></a></li><li><a href="https://www.youtube.com/channel/UCT4NHCa3Nh1wt93Zphwlu_w" target="_blank"><i class="fa fa-youtube"></i></a></li><li><a href="https://twitter.com/AldisenoE" target="_blank"><i class="fa fa-twitter"></i></a></li><li><a href="https://www.instagram.com/aldisenoeirl2001/" target="_blank"><i class="fa fa-instagram"></i></a></li><li><a href="https://plus.google.com/u/0/112626853713967733789" target = "_blank"><i class="fa fa-google-plus"></i></a></li></ul> </div> </div> </div> </div> <p class="copyright text-center">Copyright &copy; 2018 Aldiseño. Todos los derechos reservados.</p> </footer><a href="#." class="back-to-top" id="back-to-top"><i class="fa fa-angle-up"></i></a>';
	document.write(valorhtml);
}

function botoncontectenos(){
	var valorhtml = '<section class="features no-bg"><div class="container"><div class="row text-center"><div class="col-md-12"><h2 class="light title-h2">Para más información <a href="contact-us.html" class="btn btn-default btn-rounded">Contáctenos</a></h2></div></div></div></section><div class="height20"></div>';
	document.write(valorhtml);
}
