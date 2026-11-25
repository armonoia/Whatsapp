
const CHATS = [
  // ---------- Chat del jefe: arranca solo apenas se abre la página ----------
  {
    id: "jefe",
    nombre: "Jefe",
    avatar: "👔",
    foto: "foto-jefe.png", // opcional: si no está el archivo, se ve el emoji
    previewInicial: "Escribiendo...",
    horaInicial: "ahora",
    guion: [
      { de: "jefe", texto: "Buen día Lukas", hora: "09:00" },
      { de: "jefe", texto: "Pegale una limpieza a la vidriera porfa", hora: "09:00" },
      { de: "jefe", texto: "es una mugre, así no va a entrar nadie. Estamos?", hora: "09:01" },

      {
        opciones: [
          {
            boton: "Uhhh, ¿recién llego y ya me mandás a limpiar? ¿Me estás jodiendo?",
            envia: "Sí jefe, tranqui, todo bien 👍",
          },
          {
            boton: "Si no entra nadie igual...",
            envia: "Dale, no hay problema, la limpio ahora",
          },
          {
            boton: "Jaja ni en pedo, vení limpiala vos",
            envia: "Sí, quedate tranquilo, yo me encargo",
          },
        ],
      },

      { de: "jefe", texto: "Genial, gracias!", hora: "09:03" },
      { de: "jefe", texto: "Cuando termines avisame si necesitas que te pase otra tarea, pero acordate de limpiar el taller y las ruedas que también hay un lío bárbaro ahí", hora: "09:03" },

      {
        opciones: [
          {
            boton: "pero trabajo acá hace rato ya para que me digas como trabajar..",
            envia: "Sí obvio, ya lo venía pensando",
          },
          {
            boton: "Uhh como hinchas, tantas cosas para hacer y jodes con esto encima",
            envia: "Obvio, tranqui que lo tengo pendiente.",
          },
          {
            boton: "Que tipo denso este por dios",
            envia: "Tranquii, estoy con eso, te aviso cualquier coasa",
          },
        ],
      },

      { de: "jefe", texto: "Perfecto. Más tarde hablamos", hora: "09:05" },
      { de: "jefe", texto: "Aaaah no te avise pero Pedro no va, podes creer? iba a ir yo pero tengo otras cosas para hacer. Quedas solo.", hora: "09:05" },

      {
        opciones: [
          {
            boton: "Sos un copado por suerte, gracias",
            envia: "Sí tranqui, cualquier cosa te aviso",
          },
          {
            boton: "Me pagas por laburar doble o como es el tema?",
            envia: "Dale! Que tengas buen día 🙂",
          },
          {
            boton: "Peeeero la pu....",
            envia: "Sí, todo bien, quedate tranquilo ya me había avisado.",
          },
        ],
      },

      { de: "jefe", texto: "👍", hora: "09:06" },

      // ---- CORTE: acá frena la fase de las 9am. Lo que sigue (20hs) aparece en la fase final ----
      { corte: true },

      // ---- Nuevo: cierre de caja ----
      { de: "jefe", texto: "Lukas por la hora ya debes estar cerrando, hacete el cierre de caja antes de irte. Nos vemos mañana", hora: "20:01" },

      {
        opciones: [
          {
            boton: "si mañana tampoco venis gordo...",
            envia: "si obvio",
          },
          {
            boton: "pero todo el dia jodiendo voooos, ya se que hacerrrrr",
            envia: "ok dale",
          },
          {
            boton: "ya quiero terminar por favor",
            envia: "buenisimo, descansa",
          },
        ],
      },
    ],
  },

  // ---------- Chat de Pedro: un solo mensaje, ya está ahí desde el principio ----------
  {
    id: "pedro",
    nombre: "Pedro",
    avatar: "🧑",
    foto: "foto-pedro.png",
    estatico: true,
    sinLeerInicial: 1,
    guion: [
      { de: "pedro", texto: "amigo hoy no voy, estoy roto de ayer", hora: "08:47" },
    ],
  },

  // ---------- Chat de Fede: aparece cuando termina la charla con el jefe ----------
  // Pone la captura de las entradas en el archivo captura-entradas.png
  // (en esta misma carpeta). Si todavía no está, se ve un recuadro en su lugar.
  {
    id: "fede",
    nombre: "Fede",
    avatar: "😎",
    foto: "foto-fede.png",
    oculto: true,
    horaInicial: "15:09",
    guion: [
      // Primero hablás vos: el botón y el mensaje enviado dicen exactamente lo mismo
      {
        hora: "15:09", // hora a la que sale tu mensaje
        opciones: [
          {
            boton: "amigo conseguiste entrada?",
            envia: "amigo conseguiste entrada?",
          },
        ],
      },

      { de: "fede", texto: "siii amigo", hora: "15:10" },

      {
        de: "fede",
        imagen: "captura-entradas.png",
        texto: "re voy, venis no? o te conseguimos entradas? conozco un tipo que revende, no va a salir unos mangos pero vamoooo",
        hora: "15:10",
      },

      {
        opciones: [
          {
            boton: "si amigoooo olvidate ya fue",
            envia: "no amigo, trabajo ese día asi que pinchó mal, me lo llego a pedir y me matan",
          },
          {
            boton: "re falto al laburo no me importa nada",
            envia: "no tranqui amigo no consegui y aparte laburo ese dia, ya falte una banda imposible pedirme otro día más",
          },
          {
            boton: "gordo no me hagas estoooo",
            envia: "no amigo ando full laburo ese día, asi que ya fue. Me llego a pedir el dia y me rajan ni pinta",
          },
        ],
      },

      { de: "fede", texto: "daa amigooo, pero posta te lo vas a perder? es tu banda", hora: "15:12" },
      { de: "fede", texto: "ya fuee cerra todo y vamo si total siempre te dejan en banda a vos ahí, todo bien que te guste el laburo pero es limp bizkit boludo", hora: "15:12" },

      {
        opciones: [
          {
            boton: "sabes que si tenes razon gordo, olvidateee yendo",
            envia: "no amigo posta no puedo, hay que laburar es así",
          },
          {
            boton: "uh lpm pero si quiero irrr",
            envia: "no amigo tranka otro vez será ya fuee, prefiero bancarmela esta vez",
          },
          {
            boton: "QUE SIII QUIERO IRRRR",
            envia: "amigoo, laburo olvidate, gracias igual pero no puedo faltar de nuevo",
          },
        ],
      },

      { de: "fede", texto: "👍", hora: "15:14" },
      { de: "fede", texto: "bueno amigo olvidate tranqui, ya se nos dará", hora: "15:15" },
    ],
  },
];

// Cuánto tarda en aparecer la charla con Fede después de tocar "Hablar con Fede (15hs)" (en milisegundos)
const ESPERA_FEDE = 2500;

// Sonido que suena cuando llega un mensaje (poné el archivo en esta misma carpeta)
const SONIDO_MENSAJE = "sonido-mensaje.mp3";

// Sonido que suena cuando tocás una respuesta y se envía tu mensaje
const SONIDO_ENVIADO = "sonido-enviado.mp3";

// true: antes de empezar hay que tocar la pantalla (así el navegador deja que suene el sonido)
// false: arranca solo, pero el sonido recién anda después del primer toque
const PEDIR_TOQUE_INICIAL = true;

// Cartel que aparece cuando termina una fase
const MENSAJE_TAREAS = "Volvé a tus tareas en Unreal";

// Cartel que aparece al final de todo, después del último chat con el jefe
const MENSAJE_FINAL = "Volvé a tus tareas en Unreal";

// Cuánto tarda en aparecer el botón de la fase siguiente (en milisegundos)
const ESPERA_BOTON = 10000;

// En la fase de las 15hs, abre solo el chat de Fede (así en el celular no te lo perdés)
const ABRIR_FEDE_DIRECTO = true;

// ---------- Elementos ----------
const app = document.getElementById("app");
const listaEl = document.getElementById("listaChats");
const panelesEl = document.getElementById("paneles");
const opcionesCont = document.getElementById("opcionesCont");
const estadoEl = document.getElementById("estado");
const headerAvatar = document.getElementById("headerAvatar");
const headerTitulo = document.getElementById("headerTitulo");
const cajaEl = document.getElementById("caja");
const volverBtn = document.getElementById("volver");
const inicioEl = document.getElementById("inicio");
const inicioBtn = document.getElementById("inicioBtn");
const inicioMensajeEl = document.getElementById("inicioMensaje");
const inicioMensajeTexto = document.getElementById("inicioMensajeTexto");

let activo = null; // chat que se está viendo

// ---------- Utilidades ----------
const esperar = (ms) => new Promise((res) => setTimeout(res, ms));

function el(etiqueta, clase) {
  const nodo = document.createElement(etiqueta);
  if (clase) nodo.className = clase;
  return nodo;
}

function horaActual() {
  return new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
}

// "09:05" + 1 minuto -> "09:06"
function sumarMinutos(hora, minutos) {
  const [h, m] = hora.split(":").map(Number);
  const total = (h * 60 + m + minutos) % (24 * 60);
  return String(Math.floor(total / 60)).padStart(2, "0") + ":" + String(total % 60).padStart(2, "0");
}

// ---------- Sonidos ----------
const audioMensaje = new Audio(SONIDO_MENSAJE);
const audioEnviado = new Audio(SONIDO_ENVIADO);
audioMensaje.preload = "auto";
audioEnviado.preload = "auto";

function reproducir(audio) {
  try {
    audio.currentTime = 0;
    const p = audio.play();
    if (p && p.catch) p.catch(() => {}); // si el navegador lo bloquea o falta el archivo, sigue sin sonido
  } catch (e) {}
}

const sonar = () => reproducir(audioMensaje); // llega un mensaje
const sonarEnviado = () => reproducir(audioEnviado); // se envía tu mensaje

// Los navegadores solo dejan sonar después de un toque: se "preparan" en silencio
function prepararAudio(audio) {
  try {
    audio.muted = true;
    const listo = () => {
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
    };
    const p = audio.play();
    if (p && p.then) p.then(listo).catch(() => (audio.muted = false));
    else listo();
  } catch (e) {}
}

function desbloquearSonido() {
  prepararAudio(audioMensaje);
  prepararAudio(audioEnviado);
}

function bajarScroll(chat, suave = true) {
  chat.panel.scrollTo({ top: chat.panel.scrollHeight, behavior: suave ? "smooth" : "auto" });
}

// Foto del contacto: si existe el archivo se ve la foto, si no, el emoji
function ponerAvatar(nodo, chat) {
  nodo.textContent = chat.avatar;
  if (!chat.foto) return;
  const img = new Image();
  img.alt = chat.nombre;
  img.onload = () => {
    nodo.textContent = "";
    nodo.appendChild(img);
  };
  img.src = chat.foto;
}

function resumen(paso) {
  return (paso.imagen ? "📷 " : "") + (paso.texto || "Foto");
}

// ---------- Lista de chats ----------
function actualizarBadge(chat) {
  chat.badgeEl.textContent = chat.sinLeer;
  chat.badgeEl.style.display = chat.sinLeer > 0 ? "flex" : "none";
  chat.horaEl.classList.toggle("nuevo", chat.sinLeer > 0);

  const total = CHATS.reduce((suma, c) => suma + c.sinLeer, 0);
  document.title = (total > 0 ? "(" + total + ") " : "") + "Chat | Mensajes";
}

function actualizarLista(chat, texto, hora) {
  chat.previewEl.textContent = texto;
  chat.horaEl.textContent = hora || horaActual();
}

function crearChat(chat) {
  chat.sinLeer = 0;
  chat.iniciado = false;
  chat.escribiendo = false;
  chat.siguiente = 0;

  // Conversación (se ve solo cuando el chat está abierto)
  chat.panel = el("section", "mensajes");
  const dia = el("div", "dia");
  dia.textContent = "Hoy";
  chat.panel.appendChild(dia);
  panelesEl.appendChild(chat.panel);

  // Zona donde van las respuestas de este chat
  chat.opcionesEl = el("div", "opciones");
  opcionesCont.appendChild(chat.opcionesEl);

  // Fila en la lista de chats
  chat.item = el("div", "chat-item");
  chat.item.tabIndex = 0;
  chat.item.setAttribute("role", "button");
  chat.item.innerHTML =
    '<div class="avatar"></div>' +
    '<div class="info">' +
    '<div class="fila"><span class="nombre"></span><span class="hora"></span></div>' +
    '<div class="fila"><span class="preview"></span><span class="badge-nuevo"></span></div>' +
    "</div>";
  ponerAvatar(chat.item.querySelector(".avatar"), chat);
  chat.item.querySelector(".nombre").textContent = chat.nombre;
  chat.horaEl = chat.item.querySelector(".hora");
  chat.previewEl = chat.item.querySelector(".preview");
  chat.badgeEl = chat.item.querySelector(".badge-nuevo");
  chat.item.hidden = !!chat.oculto;
  chat.item.addEventListener("click", () => abrirChat(chat));
  chat.item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrirChat(chat);
    }
  });
  listaEl.appendChild(chat.item);

  actualizarLista(chat, chat.previewInicial || "", chat.horaInicial || "");
  actualizarBadge(chat);

  // Los chats "estáticos" ya tienen sus mensajes puestos desde el principio
  if (chat.estatico) {
    chat.iniciado = true;
    chat.guion.forEach((paso) => {
      agregarMensaje(chat, paso, "entrante");
      actualizarLista(chat, resumen(paso), paso.hora);
      if (paso.hora) chat.ultimaHora = paso.hora;
    });
    chat.sinLeer = chat.sinLeerInicial || 0;
    actualizarBadge(chat);
  }
}

// ---------- Abrir un chat ----------
function refrescarEstado() {
  const escribiendo = activo && activo.escribiendo;
  estadoEl.textContent = escribiendo ? "escribiendo..." : "en línea";
  estadoEl.classList.toggle("escribiendo", !!escribiendo);
}

function abrirChat(chat) {
  activo = chat;
  app.classList.remove("en-lista"); // en el celular, pasa de la lista a la conversación

  CHATS.forEach((c) => {
    c.panel.classList.toggle("activo", c === chat);
    c.opcionesEl.classList.toggle("activo", c === chat);
    c.item.classList.toggle("activo", c === chat);
  });

  chat.item.classList.remove("nuevo-chat");
  chat.sinLeer = 0;
  actualizarBadge(chat);

  ponerAvatar(headerAvatar, chat);
  headerTitulo.textContent = chat.nombre;
  cajaEl.textContent = chat.estatico ? "Escribí un mensaje" : "Elegí una respuesta rápida";
  refrescarEstado();
  bajarScroll(chat, false);
}

// ---------- Mensajes ----------
function agregarMensaje(chat, paso, tipo) {
  const burbuja = el("div", "burbuja " + tipo);

  if (paso.imagen) {
    burbuja.classList.add("con-foto");
    const foto = el("div", "foto");
    const img = new Image();
    img.alt = "Captura de pantalla";
    img.addEventListener("load", () => bajarScroll(chat));
    img.addEventListener("error", () => {
      // Si todavía no está el archivo, se muestra un recuadro en su lugar
      foto.classList.add("falta");
      foto.textContent = "📷 Acá va la captura (" + paso.imagen + ")";
    });
    img.src = paso.imagen;
    foto.appendChild(img);
    burbuja.appendChild(foto);
  }

  if (paso.texto) {
    const texto = el("span", "texto");
    texto.textContent = paso.texto;
    burbuja.appendChild(texto);
  }

  const meta = el("span", "meta");
  meta.textContent = paso.hora || horaActual();

  let tilde = null;
  if (tipo === "saliente") {
    tilde = el("span", "tilde");
    tilde.textContent = "✓✓";
    meta.appendChild(tilde);
  }

  burbuja.appendChild(meta);
  chat.panel.appendChild(burbuja);
  bajarScroll(chat);
  return tilde;
}

function mostrarEscribiendo(chat) {
  const indicador = el("div", "escribiendo-burbuja");
  indicador.innerHTML = "<span></span><span></span><span></span>";
  chat.panel.appendChild(indicador);
  chat.escribiendo = true;
  refrescarEstado();
  bajarScroll(chat);
  return indicador;
}

function ocultarEscribiendo(chat, indicador) {
  indicador.remove();
  chat.escribiendo = false;
  refrescarEstado();
}


function recibir(chat, paso) {
  agregarMensaje(chat, paso, "entrante");
  // "Mirando" = ese chat está abierto y no estás en la lista (en el celular)
  const mirando = chat === activo && !app.classList.contains("en-lista");
  if (!mirando) chat.sinLeer++;
  actualizarBadge(chat);
  actualizarLista(chat, resumen(paso), paso.hora);
  if (paso.hora) chat.ultimaHora = paso.hora;
  sonar();
}

async function mensajeEntrante(chat, paso) {
  const indicador = mostrarEscribiendo(chat);
  // Cuanto más largo el mensaje, más tarda en "escribirlo"
  await esperar(900 + Math.min((paso.texto || "").length * 25, 1800));
  ocultarEscribiendo(chat, indicador);
  recibir(chat, paso);
  await esperar(500);
}

// ---------- Texto con temblor ----------
// Separa el texto en palabras y letras, y a cada letra le da una velocidad
// y un desfase al azar, así tiemblan cada una a su manera.
// Cómo tiemblan las notas de pensamiento:
//   "letras"   -> cada letra por separado (el más lindo, pero el más pesado)
//   "palabras" -> tiembla cada palabra entera (mucho más liviano)
//   "no"       -> sin temblor
const TEMBLOR = "palabras";

function llenarConTemblor(elemento, texto) {
  if (TEMBLOR === "no") {
    elemento.textContent = texto;
    return;
  }

  const palabras = texto.split(" ");
  palabras.forEach((palabra, i) => {
    const contenedorPalabra = document.createElement("span");
    contenedorPalabra.className = "palabra";

    if (TEMBLOR === "palabras") {
      contenedorPalabra.classList.add("letra");
      contenedorPalabra.textContent = palabra;
      contenedorPalabra.style.animationDuration = (0.18 + Math.random() * 0.25).toFixed(2) + "s";
      contenedorPalabra.style.animationDelay = (-Math.random() * 0.5).toFixed(2) + "s";
      elemento.appendChild(contenedorPalabra);
      if (i < palabras.length - 1) elemento.appendChild(document.createTextNode(" "));
      return;
    }

    for (const letra of palabra) {
      const span = document.createElement("span");
      span.className = "letra";
      span.textContent = letra;
      span.style.animationDuration = (0.18 + Math.random() * 0.25).toFixed(2) + "s";
      span.style.animationDelay = (-Math.random() * 0.5).toFixed(2) + "s";
      contenedorPalabra.appendChild(span);
    }

    elemento.appendChild(contenedorPalabra);
    if (i < palabras.length - 1) elemento.appendChild(document.createTextNode(" "));
  });
}

// ---------- Respuestas del usuario ----------
function elegirRespuesta(chat, opciones) {
  return new Promise((resolver) => {
    chat.opcionesEl.innerHTML = "";
    opciones.forEach((opcion) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "opcion";
      // El botón muestra lo que pensás de verdad...
      llenarConTemblor(btn, opcion.boton);
      btn.addEventListener("click", () => {
        chat.opcionesEl.innerHTML = "";
        // ...pero al chat sale la versión educada
        resolver(opcion.envia);
      });
      chat.opcionesEl.appendChild(btn);
    });
    bajarScroll(chat);
  });
}

async function respuestaUsuario(chat, opciones, horaFija) {
  const texto = await elegirRespuesta(chat, opciones);
  // Sale a la hora fija del guion, o un minuto después del último mensaje que llegó
  const hora = horaFija || (chat.ultimaHora ? sumarMinutos(chat.ultimaHora, 1) : horaActual());
  const tilde = agregarMensaje(chat, { texto, hora }, "saliente");
  chat.ultimaHora = hora;
  sonarEnviado();
  actualizarLista(chat, "Vos: " + texto, hora);
  // Los tildes se ponen verdes cuando "leen" el mensaje
  await esperar(900);
  tilde.classList.add("leido");
  await esperar(600);
}

// ---------- Motor ----------
async function correrGuion(chat, desde = 0) {
  for (let i = desde; i < chat.guion.length; i++) {
    const paso = chat.guion[i];
    if (paso.corte) {
      chat.siguiente = i + 1; // recuerda dónde seguir
      return;
    }
    if (paso.opciones) {
      await respuestaUsuario(chat, paso.opciones, paso.hora);
    } else {
      await mensajeEntrante(chat, paso);
    }
    chat.siguiente = i + 1;
  }
}

function llegadaDeFede(chat) {
  chat.item.hidden = false;
  listaEl.prepend(chat.item);

  // Si no estás mirando su chat, te avisa con el latido y el contador
  if (chat !== activo) {
    chat.sinLeer = 1;
    actualizarBadge(chat);
    chat.item.classList.add("nuevo-chat");
  }

  // La charla arranca sola desde el primer paso (tu mensaje)
  chat.iniciado = true;
  correrGuion(chat, 0).then(() => {
    if (chat.alTerminar) chat.alTerminar();
  });
}

// Pantalla que bloquea todo hasta tocar el botón (sirve para cada cambio de fase).
//  - mensaje: cartel opcional que se ve arriba del botón
//  - espera: milisegundos hasta que el botón aparece (con fundido). 0 = aparece ya.
function pedirToque(texto, mensaje = "", espera = 0) {
  return new Promise((resolver) => {
    inicioMensajeTexto.textContent = mensaje;
    inicioMensajeEl.hidden = !mensaje;
    inicioEl.classList.toggle("con-mensaje", !!mensaje);
    inicioBtn.textContent = texto;
    inicioBtn.classList.remove("aparece");
    inicioBtn.hidden = espera > 0;
    inicioEl.hidden = false;

    const timer =
      espera > 0
        ? setTimeout(() => {
            inicioBtn.hidden = false;
            inicioBtn.classList.add("aparece");
          }, espera)
        : null;

    inicioBtn.addEventListener(
      "click",
      () => {
        clearTimeout(timer);
        inicioEl.hidden = true;
        inicioMensajeEl.hidden = true;
        desbloquearSonido();
        resolver();
      },
      { once: true }
    );
  });
}

// Cartel final: queda en pantalla, sin botón (es el cierre de la experiencia)
function mostrarCartelFinal(mensaje) {
  inicioMensajeTexto.textContent = mensaje;
  inicioMensajeEl.hidden = false;
  inicioEl.classList.add("con-mensaje");
  inicioBtn.hidden = true;
  inicioEl.hidden = false;
}

async function iniciar() {
  const jefe = CHATS.find((c) => c.id === "jefe");
  const fede = CHATS.find((c) => c.id === "fede");

  // ---------- FASE 1: las 9am (chat del jefe + Pedro) ----------
  await esperar(1500);
  jefe.iniciado = true;
  await correrGuion(jefe); // frena en el { corte: true }
  await esperar(1200);

  // ---------- FASE 2: las 15hs (llega Fede con las entradas) ----------
  await pedirToque("Hablar con Fede (15hs)", MENSAJE_TAREAS, ESPERA_BOTON);
  if (ABRIR_FEDE_DIRECTO) abrirChat(fede); // te deja parada en el chat de Fede esperando
  await esperar(ESPERA_FEDE);
  llegadaDeFede(fede);
  // Espera a que termine toda la charla con Fede (cuando abrís su chat)
  await new Promise((resolver) => {
    fede.alTerminar = resolver;
  });
  await esperar(1500);

  // ---------- FASE FINAL: las 20hs (vuelve el jefe) ----------
  await pedirToque("Hablar con el jefe (20hs)", MENSAJE_TAREAS, ESPERA_BOTON);
  abrirChat(jefe);
  await esperar(1500);
  await correrGuion(jefe, jefe.siguiente);

  // ---------- FINAL: cartel para volver a Unreal ----------
  await esperar(1500);
  mostrarCartelFinal(MENSAJE_FINAL);
}

// ---------- Patrón de fondo con tus imágenes ----------
// Pone las imágenes chiquitas, en posiciones y giros al azar, repartidas
// por todo el fondo del chat (con un poco de opacidad).
const IMAGENES_PATRON = ["estrella.png", "espiral.png", "flor.png"];
const COLOR_FONDO_CHAT = "#2b1a3c"; // violeta de la paleta

// Se dibuja todo UNA sola vez en un canvas (una sola imagen fija), así el
// navegador no tiene que recalcular nada mientras usás el chat.
let imagenesPatron = null; // se cargan una sola vez

function cargarImagenesPatron() {
  if (!imagenesPatron) {
    imagenesPatron = Promise.all(
      IMAGENES_PATRON.map(
        (src) =>
          new Promise((resolver) => {
            const img = new Image();
            img.onload = () => resolver(img);
            img.onerror = () => resolver(null); // si falta una, se ignora
            img.src = src;
          })
      )
    ).then((lista) => lista.filter(Boolean));
  }
  return imagenesPatron;
}

// ajustes: celda (cuanto más chica, más imágenes), tamaño y opacidad
async function generarPatron(patron, ajustes) {
  const { celda, tamMin, tamMax, alfaMin, alfaMax, fondo } = ajustes;
  const ancho = patron.clientWidth;
  const alto = patron.clientHeight;
  if (!ancho || !alto) return;

  let canvas = patron.querySelector("canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    patron.appendChild(canvas);
  }

  const escala = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = ancho * escala;
  canvas.height = alto * escala;
  canvas.style.width = ancho + "px";
  canvas.style.height = alto + "px";

  const ctx = canvas.getContext("2d");
  ctx.scale(escala, escala);

  // Fondo liso (cambiá el color arriba si querés otro)
  ctx.fillStyle = fondo;
  ctx.fillRect(0, 0, ancho, alto);

  const imagenes = await cargarImagenesPatron();
  if (imagenes.length === 0) return;

  // Si el navegador no soporta filtros en canvas (ej. Safari), se usa
  // otro modo de mezcla para que no queden cuadrados blancos.
  const soportaFiltro = "filter" in ctx;

  const columnas = Math.ceil(ancho / celda);
  const filas = Math.ceil(alto / celda);

  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < columnas; c++) {
      if (Math.random() < 0.2) continue; // deja algunos huecos

      const img = imagenes[Math.floor(Math.random() * imagenes.length)];
      const tam = tamMin + Math.random() * (tamMax - tamMin);
      const cx = c * celda + celda / 2 + (Math.random() - 0.5) * (celda - tam);
      const cy = f * celda + celda / 2 + (Math.random() - 0.5) * (celda - tam);

      // Recorte cuadrado desde el centro de la imagen
      const lado = Math.min(img.width, img.height);
      const sx = (img.width - lado) / 2;
      const sy = (img.height - lado) / 2;

      ctx.save();
      ctx.globalAlpha = alfaMin + Math.random() * (alfaMax - alfaMin);
      if (soportaFiltro) {
        ctx.globalCompositeOperation = "screen";
        ctx.filter = "invert(1) hue-rotate(180deg)";
      } else {
        ctx.globalCompositeOperation = "multiply";
      }
      ctx.translate(cx, cy);
      ctx.rotate((Math.random() * 360 * Math.PI) / 180);
      ctx.drawImage(img, sx, sy, lado, lado, -tam / 2, -tam / 2, tam, tam);
      ctx.restore();
    }
  }
}

// Tamaño, cantidad y opacidad de las imágenes del patrón
const AJUSTES_CHAT = { celda: 90, tamMin: 32, tamMax: 52, alfaMin: 0.1, alfaMax: 0.2, fondo: COLOR_FONDO_CHAT };

function dibujarPatrones() {
  generarPatron(document.getElementById("patron"), AJUSTES_CHAT);
}

// Si cambia el tamaño de la ventana, se vuelve a armar el patrón
let timerPatron;
window.addEventListener("resize", () => {
  clearTimeout(timerPatron);
  timerPatron = setTimeout(dibujarPatrones, 250);
});

// ---------- Arranque ----------
volverBtn.addEventListener("click", () => app.classList.add("en-lista"));

CHATS.forEach(crearChat);
abrirChat(CHATS[0]); // empieza viendo el chat del jefe
dibujarPatrones();

if (PEDIR_TOQUE_INICIAL) {
  pedirToque("Tocá para abrir el chat").then(iniciar);
} else {
  document.addEventListener("pointerdown", desbloquearSonido, { once: true });
  iniciar();
}
