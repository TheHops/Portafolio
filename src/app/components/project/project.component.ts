import { Component } from '@angular/core';
import { Swiper } from 'swiper'

interface Proyecto {
  Nombre: string,
  ImagenPresentacion: string,
  Imagen: string[],
  Descripcion: string,
  Descripcion_Corta: string,
  Categoria: string,
  Clase: string
  UrlGithub: string,
  UrlDeploy: string,
  IsPrivate: boolean
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  Proyectos: Proyecto[] = [
    {
      Nombre: 'Web50: Project 3',
      ImagenPresentacion: '../../../assets/Proyectos/Django/proyecto1/01.png',
      Imagen: [
        '../../../assets/Proyectos/Django/proyecto1/01.png',
        '../../../assets/Proyectos/Django/proyecto1/02.png',
        '../../../assets/Proyectos/Django/proyecto1/03.png',
        '../../../assets/Proyectos/Django/proyecto1/04.png',
      ],

      Descripcion:
        "Sistema de gestión de ventas de alimentos de una pizzería <br/><br/> Se mostrará la página de pedidos, donde aparecen: Pizza, Ensaladas, Bebidas, Subs, Pastas, Comida completa. <br/><br/> Cada una con opciones diferentes donde se puede elegir lo que se desea comprar (Sólo uno). En la sección de pizza, además de seleccionar el tamaño y tipo de pizza, se podrán pedir los 'extras' o 'toppings' que irán incluidos en la orden. <br/>En cada sección hay un botón de 'añadir al carrito' donde se podrán añadir al carrito los platillos que quiera... <br/><br/>Luego en la sección de 'carrito' se podrán ver todos los productos que se añadieron al carrito, siempre y cuando éste se encuentre en estado 'pendiente' (su campo en las tablas se llama solicitud) Donde dentro, habrán tres opciones 'Guardar como pendiente', 'Confirmar compra', 'Cancelar orden'. <br/>Guardar como pendiente: No sucederá nada más que regresarme a la sección de pedidos Confirmar compra: Se cambia el estado de la factura de 'pendiente' a 'listo' y la cantidad de productos se actualiza Cancelar orden: Se guarda la factura pero en un estado a 'cancelado' y la cantidad de productos se mantiene",

      Descripcion_Corta:
        'Sistema de gestión de ventas de alimentos de una pizzería',

      Categoria: 'Django',
      Clase: 'animate__animated animate__zoomIn',
      UrlGithub: '',
      UrlDeploy: '',
      IsPrivate: true,
    },
    {
      Nombre: 'Web50: Project 4',
      ImagenPresentacion: '../../../assets/Proyectos/Django/proyecto2/01.png',
      Imagen: [
        '../../../assets/Proyectos/Django/proyecto2/01.png',
        '../../../assets/Proyectos/Django/proyecto2/02.png',
        '../../../assets/Proyectos/Django/proyecto2/03.png',
        '../../../assets/Proyectos/Django/proyecto2/04.png',
      ],
      Descripcion:
        "Se conoce que en algunos negocios se utiliza un método de gestión del inventario de forma no automatizada, en el cual utilizan papel y lápiz y registran los datos de cada venta, entonces se quiere minimizar ese tipo de dificultades con este sistema, con el cual se pueden realizar procesos como las ventas, agregación de datos, eliminación, etc.<br/><br/>Luego de iniciar sesión correctamente se mostrará una interfaz con las siguientes secciones: Inventario, Gestión de ventas, Clientes (Sólo cuando se es admin), Proveedores, Empleados, Historial.<br/><br/>En Inventario sólo el admin puede añadir y eliminar los productos, mientras que si se es un Empleado normal, sólamente podrá ver los productos pero no podrá interactuar con esos productos. <br/><br/>En Gestión de ventas se seleccionan los productos y se añaden al carrito, cuando ya están listos los productos que se quiere vender, entonces se le da click a 'Realizar venta' y luego se selecciona al cliente que se le va a vender, en caso de no estar, entonces se tiene que crear. <br/><br/>En Clientes se podrán ver todos los clientes (Sólo si se es admin) pero si se es un empleado normal sólo se verán los clientes a los que ese empleado atendió. <br/><br/>(Parte del administrador) En Proveedores sólo se muestran los proveedores. <br/><br/>En Empleados sólo se pueden mostrar los empleados que no son administradores, como los vendedores, seguridad, etc. Se puede crear y eliminar a esos empleados. <br/><br/>En Historial se mostrarán todas las ventas que se realizaron",
      Descripcion_Corta:
        "Sistema de gestión al inventario de una tienda de productos para mascotas 'HappyPows'",
      Categoria: 'Django',
      Clase: 'animate__animated animate__zoomIn',
      UrlGithub: '',
      UrlDeploy: '',
      IsPrivate: true,
    },
    {
      Nombre: 'Trivia',
      ImagenPresentacion: '../../../assets/Proyectos/Angular/proyecto1/01.png',
      Imagen: [
        '../../../assets/Proyectos/Angular/proyecto1/01.png',
        '../../../assets/Proyectos/Angular/proyecto1/02.png',
        '../../../assets/Proyectos/Angular/proyecto1/03.png',
        '../../../assets/Proyectos/Angular/proyecto1/04.png',
      ],
      Descripcion:
        "Haciendo prueba con consumo de API en Angular, es un proyecto que consiste en una trivia de preguntas de diferente categoría y dificultad, y tendrás que elegir la respuesta correcta.<br/><br/>Básicamente se trata de responder 10 preguntas, tal como una trivia cualquiera, consta de cualquier tipo de categoría, la dificultad puede variar (Fácil, medio, difícil) en el cual te pueden aparecer preguntas de verdadero y falso o simplemente preguntas donde tengas que seleccionar una de las 4 respuestas. Como primeras impresiones sobre el proyecto, siempre las preguntas van a variar:<br/><ol style='padding: 10px 10%; text-align: left;'><li>Si seleccionamos una de las opciones, podremos ver cuál tenemos seleccionada porque cambiará de color.</li><li>Una vez que estamos seguros de cuál es la respuesta, damos click al botón 'next' para verificar si la respuesta era correcta o no.</li><li>Una vez que damos click en 'next' nos daremos cuenta si la respuesta era correcta o no. <br/>Si seleccionamos una respuesta incorrecta se mostrará de color rojo (Además de saber cuál era la respuesta correcta), y si es correcta se mostrará de color verde.</li></ol>",
      Descripcion_Corta:
        'Trivia con 10 preguntas de cualquier categoría y dificultad',
      Categoria: 'Angular',
      Clase: 'animate__animated animate__zoomIn',
      UrlGithub: '',
      UrlDeploy: 'https://triviahops.web.app/',
      IsPrivate: false,
    },
    {
      Nombre: "Restaurante 'La Olla'",
      ImagenPresentacion: '../../../assets/Proyectos/Django/proyecto3/01.png',
      Imagen: [
        '../../../assets/Proyectos/Django/proyecto3/01.png',
        '../../../assets/Proyectos/Django/proyecto3/02.png',
        '../../../assets/Proyectos/Django/proyecto3/03.png',
        '../../../assets/Proyectos/Django/proyecto3/04.png',
        '../../../assets/Proyectos/Django/proyecto3/05.png',
        '../../../assets/Proyectos/Django/proyecto3/06.png',
        '../../../assets/Proyectos/Django/proyecto3/07.png',
        '../../../assets/Proyectos/Django/proyecto3/08.png',
        '../../../assets/Proyectos/Django/proyecto3/09.png',
        '../../../assets/Proyectos/Django/proyecto3/10.png',
        '../../../assets/Proyectos/Django/proyecto3/11.png',
        '../../../assets/Proyectos/Django/proyecto3/12.png',
        '../../../assets/Proyectos/Django/proyecto3/13.png',
        '../../../assets/Proyectos/Django/proyecto3/14.png',
        '../../../assets/Proyectos/Django/proyecto3/15.png',
        '../../../assets/Proyectos/Django/proyecto3/16.png',
        '../../../assets/Proyectos/Django/proyecto3/17.png',
        '../../../assets/Proyectos/Django/proyecto3/18.png',
        '../../../assets/Proyectos/Django/proyecto3/19.png',
        '../../../assets/Proyectos/Django/proyecto3/20.png',
        '../../../assets/Proyectos/Django/proyecto3/21.png',
        '../../../assets/Proyectos/Django/proyecto3/22.png',
        '../../../assets/Proyectos/Django/proyecto3/23.png',
        '../../../assets/Proyectos/Django/proyecto3/24.png',
        '../../../assets/Proyectos/Django/proyecto3/25.png',
        '../../../assets/Proyectos/Django/proyecto3/26.png',
        '../../../assets/Proyectos/Django/proyecto3/27.png',
        '../../../assets/Proyectos/Django/proyecto3/28.png',
        '../../../assets/Proyectos/Django/proyecto3/29.png',
        '../../../assets/Proyectos/Django/proyecto3/30.png',
      ],
      Descripcion:
        "Este es un sistema web específicamente para este restaurante, dicho restaurante que tiene más de 50 años desde su fundación, y hasta la fecha siempre han manejado su información en papel (cuadernos, formularios, etc...).<br><br>Sus funciones principales son la de <b>crear órdenes</b> y <b>registrar el pago de las ventas de las órdenes.</b> <br><br>Como vistas iniciales podemos ver lo que es el <b>Inicio de sesión</b> donde podemos ingresar o recuperar la contraseña de mi cuenta si acaso al usuario se le ha olvidado <i>(Esta funcionalidad solo está disponible únicamente para los administradores)</i>. <br>Luego veremos la pantalla de Dashboard, donde se ve un resumen de las órdenes con su pago registrado, segmentadas en subtotales <i>(Total base y descuento)</i>, en propinas, y el total de ambas, además de dos gráficos, donde el primero (Gráfico de dona) muestra la cantidad de órdenes realizadas los últimos 30 días separados por método de pago, y el segundo gráfico muestra el total pagado de todas las órdenes registradas los últimos 7 días. <br>Luego tendremos la pantalla de las tablas catálogo, donde conoceremos los <b>consumibles</b> y <b>tipos de consumibles</b>, los cuales en ambos se pueden filtrar por su estado <i>(activo o inactivo)</b>, se pueden crear, modificar y desactivar. <br>A continuación tendríamos las pantallas donde gestionamos a los <b>usuarios</b> con las mismas funciones que los catálogos, pero con una función adicional que consiste en <b>restablecer la contraseña</b> del usuario, en caso de que a este se le olvide <i>(todo esto solo lo puede hacer el administrador). <br>Luego tenemos la pantalla de <i>'Mi perfil'</i> donde se verán los datos del usuario el cual es capaz de modificar su <i>correo</i>, su <i>número de teléfono</i> y su <i>nombre de usuario</i>, además de su <b>contraseña</b>, solo que esta la modifica en un flujo independiente de los otros datos. <br>Luego la parte más importante del sistema y el corazón de esta, y es la <b>creación de la orden</b> donde se puede seleccionar el <i>área de mesa</i> sus <i>mesas correspondientes</i> y los <i>consumibles</i> para esta nueva orden. Además de que se pueden ver las órdenes que se van creando, mostrando todos sus estados (dependiendo de en cuál se encuentre) empezando con el estado <i>'Pendiente'</i> luego <i>'En preparación'</i> seguido de <i>'Preparada'</i> y luego uno de los dos estados finales <i>('Registrada' y 'Anulada')</i>. Además, es capaz de editar una orden y saber si fué editada gracias a <b>señales</b> que se muestran al momento de editarla y saber si un detalle fué agregado, editado o eliminado en esa orden. <br>Tenemos también la pantalla de <b>reportes</b> donde se pueden exportar en un archivo <b>Excel</b> o <b>PDF</b> para las órdenes <i>anuladas y registradas</i>. Además de que podemos filtrar por el área de mesa y por fecha, adicional a eso, al momento de exportar, podemos decidir si en estos archivos incluiremos o no los <i>detalles</i> de cada orden que se va a exportar. <br>Por último, se encuentra la pantalla de <b>arqueo de caja</b>, donde se define la <i>apertura de caja</i> colocando el saldo inicial en caja, y por último el <i>cierre de caja</i> donde el sistema calcula un monto esperado y lo coloca automáticamente en el campo para escribir el monto, pero si el cajero ve que la cantidad en caja es diferente, tiene la posibilidad de modificar esa cantidad y corregir a como lo tienen realmente en caja, lo que calcula el sistema es tan solo un <i>monto teórico</i> que es lo que se supone o espera que se ingrese al sistema.",
      Descripcion_Corta: 'Sistema web para la gestión de órdenes y de ventas',
      Categoria: 'Django',
      Clase: 'animate__animated animate__zoomIn',
      UrlGithub: 'https://github.com/TheHops/Restaurante-La-Olla',
      UrlDeploy: '',
      IsPrivate: false,
    },
    {
      Nombre: 'Tres en Raya (Tic-Tac-Toe)',
      ImagenPresentacion:
        '../../../assets/Proyectos/WebSocket/proyecto1/01.png',
      Imagen: [
        '../../../assets/Proyectos/WebSocket/proyecto1/01.png',
        '../../../assets/Proyectos/WebSocket/proyecto1/02.png',
        '../../../assets/Proyectos/WebSocket/proyecto1/03.png',
        '../../../assets/Proyectos/WebSocket/proyecto1/04.png',
        '../../../assets/Proyectos/WebSocket/proyecto1/05.png',
        '../../../assets/Proyectos/WebSocket/proyecto1/06.png',
        '../../../assets/Proyectos/WebSocket/proyecto1/07.png',
      ],
      Descripcion: 'Minijuego desarrollado sin ningún framework, el puro código nativo, solamente usando una librería para el uso de <b>WebSockets</b> donde controlamos las funciones de definición de símbolo para cada usuario al ingresar y cuando dichos usuarios seleccionan una casilla para pintar su símbolo asignado, donde pueden suceder tres resultados diferentes: Uno donde el usuario <b>A</b> gana, el segundo cuando el usuario <b>B</b> gana, y el tercero cuando ocurre un <b>empate</b>',
      Descripcion_Corta: 'Juego de tres en raya mediante WebSockets',
      Categoria: 'WebSocket',
      Clase: 'animate__animated animate__zoomIn',
      UrlGithub: 'https://github.com/TheHops/TicTacToe',
      UrlDeploy: '',
      IsPrivate: false,
    },
    // Agrega más proyectos aquí
  ];

  categorias: string[] = ['Todos', 'Django', 'Angular', 'WebSocket'];
  filtroCategoria: string = 'Todos';
  proyectosFiltrados: Proyecto[] = [];
  urlImagenes: string[] = [];

  constructor() {
    this.aplicarFiltro();
  }

  // ngAfterViewInit(){
  //   const element: HTMLElement | null = document.querySelector('.box-img');

  //   if (element) {
  //     element.style.setProperty('--animate-duration', '0.5s');
  //   }
  // }

  aplicarFiltro(): void {
    // Se ocultan las cajas
    this.ocultarCajas();

    // Se evalúa el filtro que se quiere hacer
    if (this.filtroCategoria === 'Todos') {
      // Después de 0.3s se aplican los filtros, en este caso se muestran todos
      setTimeout(() => {
        // Se asignan todos los proyectos que se quieren mostrar
        this.proyectosFiltrados = this.Proyectos;

        // Se muestran todas las cajas
        this.mostrarCajas();
      }, 300);
    } else // En caso de que no son todos, entonces es con un filtro específico
    {
      // Después de 0.3s se aplican los filtros, en este caso es uno de los diferentes que hay
      setTimeout(() => {
        // Se asignan los proyectos que van a ser filtrados y mostrados
        this.proyectosFiltrados = this.Proyectos.filter(
          (proyecto) => proyecto.Categoria === this.filtroCategoria,
        );

        // Se muestran las cajas filtradas
        this.mostrarCajas();
      }, 300);
    }
  }

  /*****************************************************/

  ocultarCajas(): void {
    for (let i = 0; i < this.proyectosFiltrados.length; i++) {
      this.proyectosFiltrados[i].Clase = 'animate__animated animate__flipOutX';
    }
  }

  mostrarCajas(): void {
    for (let i = 0; i < this.proyectosFiltrados.length; i++) {
      this.proyectosFiltrados[i].Clase = 'animate__animated animate__flipInX';
    }
  }

  /******************************************************/

  hoverCaja(tipo: number, nombreProyecto: string): void {
    // Se busca el proyecto donde se hace hover
    let indice = this.proyectosFiltrados.findIndex(
      (proyecto) => proyecto.Nombre === nombreProyecto,
    );

    if (tipo == 1) {
      this.proyectosFiltrados[indice].Clase =
        'animate__animated animate__pulse';

      setTimeout(() => {
        this.proyectosFiltrados[indice].Clase = '';
      }, 300);
    }
  }

  mostrarModal(proyecto: Proyecto): void {
    // Se obtiene el elemento 'modal' personalizado
    let modal = document.getElementById('modalProject');

    // Se verifica si realmente se obtuvo
    if (modal) {
      // Se vacía la lista con las url de las imágenes
      this.urlImagenes = [];

      // Se agregan las url de las nuevas imágenes a la lista
      proyecto.Imagen.forEach((url) => {
        this.urlImagenes.push(url);
      });

      // Se obtiene el elemento para el título
      let tituloModal = document.getElementById('tituloProjectModal');

      // Se obtiene el elemento para la descripcion
      let descripcionModal = document.getElementById('descripcionProjectModal');

      // Si existen esos elementos se procede a agregar el texto del título y el de la descripción
      if (tituloModal && descripcionModal) {
        tituloModal.textContent = proyecto.Nombre;
        descripcionModal.innerHTML = proyecto.Descripcion;
      }

      // Se obtiene el elemento con los dos botones de las url
      let botonesURL = document.getElementById('modalBotonesProject');

      // Se verifica el elemento con los botones url
      if (botonesURL) {
        // Si el proyecto está privado en Github entonces se ocultan los botones de las url

        // Se obtiene el elemento botón con la url de github
        let deployURL = document.getElementById('btnWorld');
        let githubURL = document.getElementById('btnGithub');

        if (proyecto.IsPrivate) {
          if (proyecto.UrlDeploy != '') {
            botonesURL.style.display = 'flex';

            // Se verifica ese elemento
            if (deployURL) {
              // Como ya verificamos que SI hay url entonces la establecemos al botón de github
              deployURL.setAttribute('href', proyecto.UrlDeploy);
              deployURL.style.opacity = '1';
            }

            if (githubURL) {
              githubURL.style.opacity = '0';
            }
          } else {
            botonesURL.style.display = 'none';
          }
        } else // En caso contrario si se mostrarán
        {
          botonesURL.style.display = 'flex';

          // Se verifica si realmente hay
          if (proyecto.UrlGithub != '') {
            // Se verifica ese elemento
            if (githubURL) {
              // Como ya verificamos que SI hay url entonces la establecemos al botón de github
              githubURL.setAttribute('href', proyecto.UrlGithub);
            }
          } else {
            if (githubURL) {
              githubURL.style.display = 'none';
            }
          }

          if (proyecto.UrlDeploy != '') {
            // Se obtiene el elemento botón con la url de github
            let deployURL = document.getElementById('btnWorld');

            // Se verifica ese elemento
            if (deployURL) {
              // Como ya verificamos que SI hay url entonces la establecemos al botón de github
              deployURL.setAttribute('href', proyecto.UrlDeploy);
            }
          } else {
            if (deployURL) {
              deployURL.style.display = 'none';
            }
          }
        }
      }

      // console.log(this.urlImagenes);

      modal.classList.add('showModal');

      // Contenedor del slider donde se van a agregar los slider
      let theSwiper = new Swiper('swiper-container');

      // {
      //   autoplay : {
      //     delay : 5000
      //   },
      //   navigation : true,
      //   scrollbar : true,
      //   loop : true,
      //   slidesPerGroup : 1,
      //   slidesPerView : 1
      // }

      // if(contenedorSlider)
      // contenedorSlider.innerHTML = contenedorSlider.innerHTML

      theSwiper.init();

      // console.log(theSwiper);
    }
  }

  ocultarModal() {
    let modal = document.getElementById('modalProject');

    if (modal) {
      modal.classList.remove('showModal');
    }
  }
}
