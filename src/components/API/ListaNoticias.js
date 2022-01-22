//Img Noticias Principales:

import NoticiaCovidImg from "../../img/imgNoticias/noticia1.jpeg"
import LadyGaGa from "../../img/imgNoticias/noticia2.webp";
import PoliticaImg1 from "../../img/imgNoticias/noticia3.webp"

//Img Actualidad:

import actImg1 from "../../img/imgNoticias/actImg1.webp";
import actImg2 from "../../img/imgNoticias/actImg2.jpg"
import actImg3 from "../../img/imgNoticias/actImg3.webp"
import actImg4 from "../../img/imgNoticias/actImg4.jpg"

//Img Mojo:

import mojoImg1 from "../../img/imgNoticias/mojoImg1.jpeg"
import mojoImg2 from "../../img/imgNoticias/mojoImg3.jpg"

//Img Sociedad:

import sociedadImg1 from "../../img/imgNoticias/sociedadImg1.webp";
import sociedadImg2 from "../../img/imgNoticias/sociedadImg2.jpg"
import sociedadImg3 from "../../img/imgNoticias/sociedadImg3.jpg";
import sociedadImg4 from "../../img/imgNoticias/sociedadImg4.jpg";
import sociedadImg5 from "../../img/imgNoticias/sociedadImg5.jpg";

//Img Medio Ambiente.

import ambienteImg1 from "../../img/imgNoticias/mAmbImg1.jpg"
import ambienteImg2 from "../../img/imgNoticias/mAmbImg2.jpg"
import ambienteImg3 from "../../img/imgNoticias/mAmbImg3.jpg"

// Img Ciencia y Tecnologia.

import tecImg1 from "../../img/imgNoticias/tecImg1.jpg"
import tecImg2 from "../../img/imgNoticias/tecImg2.jpg"
import tecImg3 from "../../img/imgNoticias/tecImg3.jpg"

// Img Sala de Escape.

import salaImg1 from "../../img/imgNoticias/salaImg1.jpg"
import salaImg2 from "../../img/imgNoticias/salaImg2.jpg"
import salaImg3 from "../../img/imgNoticias/salaImg3.jpg"

// Img Articulos Noticias.

import artImg1 from "../../img/imgNoticias/artImg1.jpg"

//Img Cards:

import CardImg1 from "../../img/imgNoticias/cardImg1.jpg"
import CardImg2 from "../../img/imgNoticias/cardImg2.jpg"
import CardImg3 from "../../img/imgNoticias/cardImg3.jpg"

//Img Deportes:

import depImg1 from "../../img/imgNoticias/depImg1.jpg"
import depImg2 from "../../img/imgNoticias/depImg2.jpg"
import depImg3 from "../../img/imgNoticias/depImg3.jpg"


//info

/* info1: "",
info2: "",
info3: "",
info4: "",
info5: "", */

const listaNoticias = [
    {
        id: 1,
        categoria: "Sociedad",
        type: "Destacada",
        color: "tag-pink",
        image: NoticiaCovidImg,
        titulo: "Coronavirus en Argentina: se registraron 118.171 casos y 161 muertes",
        info1: "El Ministerio de Salud de la Nación confirmó que en las últimas 24 horas el número total de contagios desde el comienzo de la pandemia ascendió a 7.694.506, en tanto que los fallecimientos se ubican en 118.969.",
        info2: "El reporte del Ministerio de Salud confirmó 118.171 nuevos contagios en las últimas 24 horas.",
        info3: "Con estos registros, suman 7.694.506 casos desde que comenzó la pandemia. Además, se registraron 161 nuevas muertes de pacientes con coronavirus lo que eleva la cifra de víctimas mortales en el país a 118.969.",
        info4: "En cuanto al AMBA, en la provincia de Buenos Aires se detectaron 47567 contagios y en la Ciudad de Buenos Aires, 15539 casos positivos. En el día fueron realizados 172952 tests y desde el inicio del brote se practicaron 31452459 pruebas diagnósticas para esta enfermedad. Hay por el momento 2511 personas internadas en Unidades de Terapia Intensiva: las camas de UTI están ocupadas en un 47.8 por ciento a nivel nacional y en un 46.9 por ciento en el Área Metropolitana de Buenos Aires.",
        subtitulo: "Coronavirus en Argentina: se registraron 118.171 casos y 161 muertes",
        autor: "Silvana Suarez",
        fuente: "Fuente: Infobae",
        fecha: "22 de Enero de 2022",
        comentario: "Imagen: Guadalupe Lombardo"
    },
    {
        id: 2,
        type: "DestacadaAlt",
        color: "tag-yellow",
        categoria: "Entretenimiento",
        image: LadyGaGa,
        titulo: "Lady Gaga confesó que grabó una escena íntima con Salma Hayek en “House of Gucci”",
        info1: "House of Gucci, fue una de las cintas más esperadas en 2021, parte del elenco principal lo integran dos de las artistas más mediáticas de los últimos años, Lady Gaga y Salma Hayek, las cuales han mostrado su gran amistad fuera de la pantalla.",
        info2: "Gracias a esta confianza, la intérprete estadunidense contó que ambas artistas escenificaron una puesta íntima durante la cinta dirigida por Ridley Scott. Fue durante su participación en los “Q&A” en Europa, que la intérprete de Shallow en A Star is Born, detalló que protagonizó una escena especial junto a la actriz mexicana, la cual no llego al corte final por decisión de la producción.",
        info3: "Actualmente, el elenco de House of Gucci, se encuentra de gira promocionando la cinta con la esperanza de que sea considerada dentro de la siguiente entrega de los Premios Óscar.",
        info4: "En el video recuperado por el portal de espectáculos, Pop Crave, se puede escuchar a Lady Gaga decir que existe una escena subida de tono entre Patrizia (Lady Gaga) y Pina (El personaje de Salma Hayek), que sucede después del asesinato de Maurizio Gucci (Adam Driver).",
        subtitulo: "La cantante estadunidense señaló que el fragmento fue aceptado con total libertad por parte del director, Ridley Scott",
        autor: "Juan Perez",
        fuente: "Fuente: Infobae",
        fecha: "21 de Enero de 2021",
        comentario: "Salma Hayek y Lady Gaga en la alfombra roja de 'House of Gucci'"
    },
    {
        id: 3,
        categoria: "Politica",
        type: "DestacadaAlt",
        color: "tag-teal",
        image: PoliticaImg1,
        titulo: "Macri y Rodríguez Larreta se reunirán a solas en el Sur: sobre qué temas hablarán y qué les preocupa",
        info1: "Mauricio Macri y Horacio Rodríguez Larreta tendrán su reunión cumbre el sábado próximo, lejos de las cámaras y los periodistas. Y, además, muy lejos de la Ciudad de Buenos Aires: ambos están de vacaciones en el exclusivo country Cumelén, ubicado en Villa La Angostura, Neuquén.",
        info2: "El ex presidente está instalado allí con su familia desde el 15 de diciembre, mientras que el jefe de Gobierno llegó este martes con su hija menor para pasar seis días de vacaciones en la casa de su amigo Luis “Toto” Caputo, ex ministro de Finanzas y titular del Banco Central del gobierno de Cambiemos (Macri conoció ese paradisíaco lugar en 2011 y se alojó en el mismo lugar que Larreta ahora). A orillas del Nahuel Huapi, no habrá testigos indiscretos para una charla que se debían. Ese tipo de encuentros, a solas, suelen realizarse antes de instancias importantes para el PRO o para Juntos por el Cambio.",
        info3: " Así sucedió el 25 de junio pasado, en la casa de Macri en Acassuso, cuando el ex mandatario y Rodríguez Larreta discrepaban sobre las candidaturas porteña y bonaerense. Finalmente, el ex jefe del Estado viajó al día siguiente a Europa, donde se quedó 43 días, y el alcalde porteño logró que las listas fueran encabezadas por sus postulantes, María Eugenia Vidal y Diego Santilli. Este también es un momento definitorio.",
        info4: "Larreta lanzó esta semana una Mesa Nacional para apuntalar su candidatura presidencial, en donde están Diego Santilli, Jorge Macri y Cristian Ritondo (y podría sumarse Emilio Monzó). Macri dio señales concretas de que no se presentará como candidato (“No me anoto en ninguna carrera para ser presidente en 2023”, dijo hace un mes), aunque está en duda su neutralidad: “Sostengamos a Patricia (Bulllrich). Es muy importante que llegue con posibilidades a 2023″, les pidió en privado a dirigentes del PRO.",
        subtitulo: "Ambos están de vacaciones en Cumelén, un country de Villa La Angostura, y acordaron encontrarse el sábado. En la agenda, la carrera para 2023, cambios en JxC, economía, FMI y relación con el Gobierno. ",
        autor: "Ricardo Carpena",
        fuente: "Fuente: Infobae",
        fecha: "21 de Enero de 2021",
        comentario: "Mauricio Macri y Horacio Rodríguez Larreta, a solas en el Sur"
    },
    {
        id: 4,
        categoria: "Actualidad",
        image: actImg1,
        titulo: "La Patagonia, en alerta por la liberación de Jones Huala: temen que regrese al país y cumpla sus promesas violentas",
        info1: "El líder mapuche Facundo Jones Huala, quien lidera la violenta agrupación Resistencia Ancestral Mapuche (RAM), tramita su regreso a la Argentina luego de que la Justicia chilena le otorgara la libertad condicional durante el cumplimiento de una condena de seis años de prisión por el incendio de un fundo y la portación ilegal de armas. Desde su entorno celebraron la medida.",
        info2: "“Por fin se hizo Justicia, aunque desde el año pasado debería haber estado libre” dijeron. Además anticiparon que desde su liberación, este viernes a la tarde, iniciará los trámites correspondientes para regresar a la Argentina. El anuncio no pasó desapercibido en la Patagonia Argentina. Es que en una de sus últimas apariciones a través de comunicados que escribió desde la prisión, Jones Huala llamó a “vengar la muerte de Elías Garay”, el integrante de la comunidad mapuche Lof Quemquentreu que fue asesinado de un disparo en noviembre pasado en el paraje Cuesta del Ternero, entre El Bolsón y Bariloche.",
        info3: "Por ese caso hay dos detenidos. En todos los escritos que elaboró el líder mapuche desde la cárcel, incita a la violencia para reivindicar la causa mapuche y “recuperar tierras que les fueron despejadas a los pueblos originarios”. “La sangre será vengada”, publicó en noviembre pasado, tras el homicidio de Garay, un llamado que en ese momento generó preocupación en la zona y que este viernes se acrecentó. “Que hablen las acciones, el weichan limpiará la senda de oportunistas y malintencionados, que la rabia y la tristeza no nos ciegue, y sin confundir al enemigo, golpeemos certeramente donde más le duele al poder”, decía el último de los textos que difundió Jones Huala. “Que su muerte ni ninguna sea en vano, que la sangre sea vengada y la tierra recuperada sean mas que consignas, que las balas se van a devolver, sea mas que un cantito”, apuntó. Los principales opositores a la causa mapuche, anticiparon su descontento con la medida.",
        info4: "“Jones Huala dejó en claro que piensa volver a la Argentina a sembrar más violencia, es inentendible cómo la justicia chilena, teniendo en cuenta esas amenazas, lo deja en libertad” dijeron desde el sector. Desde la oposición, Patricia Bullrich(presidenta del PRO) también manifestó su inquietud al conocer la noticia: “Me preocupa mucho que Jones Huala quede en libertad. ¿Por qué? Es evidente que algunos desean que cumpla con todo lo que escribió en sus cartas y continúe la violencia”. En la misma línea se expresó el diputado nacional Gerardo Milman: “Con el respeto a las decisiones autónomas e independientes de la justicia chilena, la libertad condicional de Jones Huala, debe poner en alerta a las autoridades argentinas frente a los actos de violencia que se puedan generar en nuestra comarca andina”. “, escribió Bullirch, quien además le pidió al presidente Alberto Fernández que “arbitre los medios necesarios para que el terrorista no vuelva a generar muerte y destrucción”.",
        info5: "La liberación del lonko fue resuelta por la Cámara de Apelaciones de Temuco a partir de un recurso de amparo que presentó la defensa del condenado el 11 de enero, representada por las abogadas Karina Riquelme y Patricia Cuevas Suárez. La medida, firmada por los jueces Carlos Gutiérrez Zavala y Luz Mónica Arancivia Mena, contempla los informes de conducta y psicosocial, como así también la opinión de distintos profesionales aunque esos mismos antecedentes trabajaron su libertad condicional a fines de 2021. En su apelación, la defensa mencionó que el cumplimiento de la pena comenzó a fines de 2018, siendo el plazo mínimo para el beneficio de libertad condicional un año más tarde, es decir diciembre de 2019.",
        subtitulo: "En uno de sus últimos escritos elaborados desde la cárcel, el Ionko llamó a vengar la muerte de un mapuche asesinado de un disparo",
        autor: "Francisco Poppe",
        fuente: "Fuente: Infobae",
        fecha: "21 de Enero de 2022",
        comentario: "Facundo Jones Huala."
    },
    {
        id: 5,
        categoria: "Actualidad",
        image: actImg2,
        titulo: "Milei y Espert, los únicos dos políticos “aprobados” por los argentinos en redes",
        info1: "Un análisis de redes sociales realizado durante el mes de diciembre por la consultora You Are Public y que incluyó un barrido por casi medio millón de menciones a los diez principales políticos de la Argentina dejó a los diputados liberales Javier Milei y José Luis Espert como los únicos con imagen negativa menor al 50%.",
        info2: "Los únicos “aprobados” resultaron ser Espert y Milei, aunque fueron los dos políticos analizados que menor cantidad de menciones recibieron en el mes de diciembre en redes sociales.",
        info3: "La consultora política analizó a Alberto Fernández, Mauricio Macri, Cristina Fernández de Kirchner, Horacio Rodríguez Larreta, Axel Kicillof, María Eugenia Vidal, Sergio Massa, Patricia Bullrich, José Luis Espert y Javier Milei.",
        info4: "De esos nombres, Vidal fue la política con mayor cantidad de menciones y, al mismo tiempo, la que peor imagen pública tuvo entre los mensajes analizados. “La imagen en redes sociales de los políticos responde a un contexto particular; por ejemplo, en el caso de Vidal, se dio que hubo una explosión de comentarios negativos en su contra por el caso denominado 'Gestapo' sindical”, explicaron desde You Are Public a NEXOFIN.",
        info5: "En el ránking de mayor cantidad de menciones, a Vidal la siguió el Presidente, y el podio lo completó la actual vicepresidenta. En 4° lugar quedó Mauricio Macri, a quien siguieron Rodríguez Larreta, Massa, Kicillof, Bullrich, Milei y Espert.",
        subtitulo: "Un informe de la consultora You Are Public analizó todas las menciones que tuvieron los 10 principales políticos argentinos en redes sociales y los resultados llamaron la atención: todos tuvieron más del 50% de imagen negativa a excepción de los diputados liberales",
        autor: "Juan Perez",
        fuente: "Fuente: Nexofin",
        fecha: "18 de Enero de 2022",
        comentario: "Todos tuvieron más del 50% de imagen negativa a excepción de los diputados liberales"
    },
    {
        id: 6,
        categoria: "Actualidad",
        image: actImg3,
        titulo: "Sesiones extraordinarias: la oposición reclama más diálogo y crece el malestar por la incertidumbre del temario",
        info1: "El gobierno nacional anunció que el próximo martes convocará formalmente a las sesiones extraordinarias del Congreso. Sin embargo, la incertidumbre en relación al temario sigue generando malestar en las filas de la oposición.",
        info2: "Según informaron fuentes oficiales, el Congreso retomará su actividad a partir del 1 de febrero y la Casa Rosada mantendrá bajo análisis la lista de proyectos hasta último momento. Entre las iniciativas que trascendieron se destacan la reforma del Consejo de la Magistratura, el Consenso Fiscal 2022 y un paquete económico que incluye la Ley de Hidrocarburos, Producción de Cannabis, Desarrollo Agroindustrial, Electromovilidad e Industria Automotriz.",
        info3: "Pero simplemente por una cuestión de “tiempos parlamentarios”, desde Juntos por el Cambio descartan que la mayoría de estos temas no serán tratados durante febrero. De hecho, la demora del temario también impide la conformación de las comisiones a las que deben ser girados los proyectos. Este punto genera expectativa en la oposición, dado que la nueva paridad de fuerzas les permitirá negociar con más fuerza la conformación de las mismas, algo clave a la hora de elaborar los dictámenes.",
        info4: "Incluso -reconocen- aspiran a pedir la presidencia de alguna comisión que no sea central para la “gobernabilidad”, como Agricultura. De hecho, Juntos por el Cambio ya definió cómo se repartirán las comisiones entre los integrantes de la coalición, y se mantiene alerta por la negociación con el Frente de Todos.",
        subtitulo: "El Gobierno hará la convocatoria formal este martes y la actividad comenzará el 1 de febrero. Desde Juntos por el Cambio aseguran que hasta el momento no se entabló ninguna negociación sobre los proyectos",
        autor: "Federico Millenaar",
        fuente: "Fuente: Infobae",
        fecha: "22 de Enero de 2022",
        comentario: "Bloque de Juntos por el Cambio en la Cámara de Diputados"
    },
    {
        id: 7,
        categoria: "Actualidad",
        image: actImg4,
        titulo: "Ana Rosenfeld explicó por qué Stefi Roitman y Ricky Montaner no se habrían casado en la Argentina: 'Probablemente quieran hacer un contrato prenupcial'",
        info1: "Luego de las repercusiones que generó la incógnita que planteó Adrián Pallares en Intrusos al indagar sobre la unión civil de Stefi Roitman y Ricky Montaner y cuestionar la existencia de la liberta roja, Ana Rosenfeld explicó los motivos que habrían llevado a los jóvenes a no casarse en la Argentina.",
        info2: "Si la señora Roitman y el señor Montaner no se casaron civilmente acá es porque lo que ellos probablemente quieran hacer no sea un convenio de separación de bienes sino lo que conocemos como mundialmente como contrato prenupcial”, comenzó diciendo la letrada en diálogo con LN+",
        info3: "Un contrato prenupcial es cuando se establece que por ser infiel se va a pagar una indemnización por cada año de matrimonio y por hijo. Es decir, se realizan determinadas previsiones. La separación de bienes es muy puntual: qué tenemos, que no y qué vamos a administrar libremente. Si nos vamos a hacer donaciones reciprocas y si tenemos deudas que quede explicitado cómo se van a pagar”, agregó.",
        info4: "Esto no solo se realiza cuando una de las partes tiene más dinero que la otra, sino que puede pasar que sea que tenga mucho dinero antes de contraer las nupcias. También porque pasaron por un trámite de divorcio y no quieren pasar nuevamente por eso”, cerró Rosenfeld, de manera general.",
        subtitulo: "La abogada dio a conocer los motivos que habría llevado a la pareja a no unirse civilmente en el país oriundo de la actriz.",
        autor: "Maria Benitez",
        fuente: "Fuente: Magazine",
        fecha: "22 de Enero de 2022",
        comentario: "Ana Rosenfeld explicó por qué Stefi Roitman y Ricky Montaner no se casaron en la Argentina."
    },
    {
        id: 8,
        categoria: "Mojo",
        image: mojoImg1,
        titulo: "Dua Lipa en Argentina 2022: habilitaron la venta de entradas para el segundo show, precios y cómo comprarlas",
        info1: "Dua Lipa, la multifacética artista británica, recientemente ganadora de dos Grammy a Mejor Álbum Pop y Álbum del Año, vuelve a la Argentina, y tras agotar las entradas de su show del 14 de septiembre en menos de una hora, agregan una nueva fecha.",
        info2: "Los tickets para el segundo recital de Dua Lipa en Argentina del 13 de septiembre de 2022, saldrán a la venta este viernes, a partir de las 10 de la mañana a través de All Acces.",
        info3: "Los precios son: Campo delantero: $ 12.000 (preventa) / $ 14.500 (precio final). y Campo general: $ 8000 (preventa) / $ 9500 (precio final).",
        info4: "¡Estoy tan emocionada de volver a hacer una gira y ver a mis ángeles en persona! Qué increíble que todos podamos bailar y celebrar juntos una vez más. Cuando escribía Future Nostalgia, imaginaba las canciones que se tocaban en clubes en las noches con tus amigos. Estoy tan emocionado de que esta fantasía finalmente se haga realidad. ¡No puedo esperar para experimentar estas canciones juntos en vivo!. Esas fueron las palabras de Dua Lipa, al confirmar su gira latinoamericana 'Future Nostalgia Tour', que la traerá nuevamente a nuestro país.",
        info5: "'Future Nostalgia', el trabajo discográfico más reproducido de 2020 en Spotify y uno de los 'Best Of' de fin de año generó múltiples hits en todo el mundo como los #1 'Break My Heart', 'Levitating' y. 'Don't Start Now'. Dua Lipa es actualmente es la cuarta artista más grande del mundo con más de 65 millones de oyentes mensuales.",
        subtitulo: "La artista británica, creadora de Be the one y Break my heart, anunció conciertos en toda la región como parte de su gira latinoamericana 'Future Nostalgia Tour'. Estará en el país en septiembre de 2022.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam - Clarin",
        fecha: "22 de Enero de 2022",
        comentario: "Como parte de su gira latinoamericana 'Future Nostalgia Tour', estará en Buenos Aires actuando el próximo 4 de septiembre de 2022, en el Hipódromo de Palermo."
    },
    {
        id: 9,
        categoria: "Mojo",
        image: mojoImg2,
        titulo: "El Lollapalooza 2022 se podrá ver en toda la Argentina a través de Flow",
        info1: "Producido por Perry Farrell, William Morris Endeavor (WME), C3 Presents y DF Entertainment, Lollapalooza Argentina es el festival más importante del país, en el que la música junto con diferentes expresiones artísticas - diseño, la gastronomía y las nuevas tendencias artísticas- convoca a unas 300.000 personas de todas las edades",
        info2: "La programación comienza el viernes 18 con Miley Cyrus, A$AP Rocky, Aless, Duki, Bizarrap, C. Tangana, Wos, Marina, A Day To Remember, Turnstile, Deorro, Louta, Emilia, FMS, Alok Boombox Cartel, Seven Kayne, Dillom, 070 Shake, Natalie Pérez, Tai Verdes Sael, Chita, Axel Fiks, Bruses, La Joaqui, Ainda, Rosario Ortega, Falke 912 Zenon Pereyra y Bianca Lif y Limon.",
        info3: "El sábado 19 continúa con las actuaciones de The Strokes, Doja Cat, Machine Gun Kelly, Jack Harlow, Alan Walker, Khea, Kehlani, Nicki Nicole, Justin Quiles, LP, Litto Nebbia, Él Mató a un Policía Motorizado, Chris Lake, King Gizzard & the Lizard Wizard, Ashnikko, Dani Ribba JXDN, FMS, Natanael Cano, Pabblo Vittar, Marc Seguí. Derby Motoreta's Burrito Kachimba | Taichu, Kiddo Toto, Clara Cava, Girl Ultra, Ghetto Kids, Molok0, Chiara Parravicini, wiranda johansen, Lucia Tacchetti y D3FA.",
        info4: "El domingo 20 tocarán Foo Fighters, Martin Garrix, Babasónicos, Jane's Addiction, Jhay Cortez, Tiago PZK, L-Gante, Kaytranada, Phoebe Bridgers, Alessia Cara, Idles Remi Wolf, Channel Tres, Emmanuel Horvilleur, ACRU, FMS, Kaleb Di Masi Alan Gomez, DJ TAO, The Wombats, Goldfish, Luck Ra, Sen Senra, Paula Cendejas, Saramalacara, Malena Villa, Las Ligas Menores, Celli, BB ASUL, Six Sex, Simona y Ronpe 99'.",
        subtitulo: "La séptima edición del festival se podrá ver en vivo a través de cuatro canales de la plataforma, que transmitirá los shows completos de los diferentes de bandas y solistas como Foo Fighters, The Strokes, Miley Cyrus y A$AP Rocky.",
        autor: "Juana Martinez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "La séptima edición del festival Lollapalooza Argentina, que se realizará el viernes 18, sábado 19 y domingo 20 de marzo en el Hipódromo de San Isidro, se podrá ver en vivo a través de cuatro canales de Flow, que transmitirá los shows completos de los diferentes de bandas y solistas como Foo Fighters, The Strokes, Miley Cyrus y A$AP Rocky, entre más de 100 propuestas internacionales e nacionales."
    },
    {
        id: 10,
        categoria: "Sociedad",
        image: sociedadImg1,
        type: "Principal",
        titulo: "Argentina lidera acceso a internet en la región, pero el servicio es deficiente",
        info1: "La Argentina es el país de la región con mayor penetración de internet, pero al mismo tiempo existen deficiencias en la calidad del servicio; según un informe del Centro Internacional para la Promoción de los Derechos Humanos (Cipdh) de la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco).",
        info2: "El trabajo subraya que el 80,2% de la población en la Argentina tiene acceso a internet, al considerar tanto los accesos fijos como los móviles. A su vez, detalló que existen 'serias dificultades en la calidad de los servicios prestados por las operadoras y también preocupa el atraso de la región en materia de competitividad digital'.",
        info3: "En líneas generales todxs usan internet y se quejan del servicio, dijo a Télam la directora ejecutiva del Cipdh, Fernanda Gil Lozano. Al considerar a internet un 'derecho humano', para Gil Lozano en la Argentina 'tenemos que seguir insistiendo en que todes tengamos internet y los entes reguladores tienen que fijarse en el tema de las inversiones'. Indicó que 'siempre fue un tema con los prestadores privados de servicios públicos, pasa lo mismo con la electricidad: las empresas si no se las controla, no van a hacer inversión'.",
        info4: "Señaló que 'está muy bien el plan Conectar que entrega tablets a los chicos, pero se van a conectar a un mal servicio' Indicó también que en el relevamiento detectaron que 'tenemos el primer lugar en la región por tener más personas conectadas, pero cuando vamos a las industrias no tienen un buen acceso con la tecnología'",
        info5: "El Cipdh informó que la Argentina ocupa el primer lugar de la nómina de usuarios con acceso a internet per cápita de habitantes, resultando que el 80,2% de la población se conecta a la red de redes; seguido por Brasil con 75,2% y México cierra el podio con 71,8% de personas conectadas.",
        subtitulo: "Así lo detalla un informe de Unesco. El 80,2% de la población accede a la red. Problemas en la calidad del servicio y atraso en materia de competitividad.",
        autor: "Mario Perez",
        fuente: "Fuente: Unidiversidad",
        fecha: "20 de Enero",
        comentario: "Para el 86% de personas consultadas, el acceso a internet fue clave para trabajar o estudiar desde que se inició la pandemia."
    },
    {
        id: 11,
        categoria: "Sociedad",
        image: sociedadImg2,
        titulo: "Con mayoría de mujeres y jóvenes, Gabriel Boric anunció su gabinete para los nuevos aires de Chile",
        info1: "El presidente electo de Chile, Gabriel Boric, confirmó este viernes al extitular del Banco Central Mario Marcel como ministro de Hacienda, mientras que la nieta del exmandatario Salvador Allende, la diputada Maya Fernández Allende, estará al frente de la cartera de Defensa, en lo que será un gabinete con mayoría de mujeres, un promedio de edad bajo e integrado en un tercio por independientes.",
        info2: "A 33 días de ganar el balotaje, el próximo mandatario anunció lo que será a partir del 11 de marzo su gabinete que constará de 24 nombres, 14 mujeres y 10 hombres, un promedio de edad de 49 años, y con varios dirigentes que no pertenecen a la coalición Apruebo Dignidad (Frente Amplio y el Partido Comunista) con la que triunfó en las elecciones.",
        info3: "Uno de los nombres más esperados era el de Hacienda y, sin sorpresas, Boric escogió al extitular del Banco Central Marcio Marcel, que el jueves renunció a ese cargo. Antes, ocupó diversas funciones en los gobiernos de centro izquierda, entre 1990 y 2008, y era el preferido para los mercados, que ve en su nombramiento un gesto de moderación en las reformas económicas que busca implantar el próximo presidente.",
        info4: "Izkia Siches, en tanto, será la futura ministra del Interior, transformándose en la primera mujer en la historia en encabezar esta cartera. Tiene 35 años, es médico cirujana de la Universidad de Chile y en 2017 se convirtió en la primera mujer en alcanzar la presidencia del Colegio Médico. Desde ese lugar tuvo una activa participación en la lucha contra la pandemia de Covid-19.",
        info5: "Se trata de dos exlíderes estudiantiles y diputados que, junto a Boric, encabezaron las protestas de 2011 en busca de 'educación pública, gratuita y de calidad'. En el listado también figura la legisladora socialista (centroizquierda) y nieta del expresidente Salvador Allende (1970-1973), Maya Fernández, que será ministra de Defensa a partir de marzo. Más allá del peso histórico, su inclusión es una de las tantas de dirigentes de partidos de la antigua Concertación, como el Partido Socialista (PS), el Partido por la Democracia (PPD), el Partido Liberal y el Partido Radical (PR), que no respaldaron a Boric en la primera vuelta.",
        subtitulo: "A 33 días de ganar el balotaje, el próximo mandatario trasandino anunció lo que será a partir del 11 de marzo su gabinete que constará de 24 nombres: 14 mujeres y 10 hombres. 'Todos esperan que seamos capaces de hacer de Chile un lugar más amable y humano para vivir, donde la dignidad se haga costumbre', dijo.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam - Clarin",
        fecha: "22 de Enero de 2022",
        comentario: "lorem ipsum libero sit Magni dolor beatae."
    },
    {
        id: 12,
        categoria: "Sociedad",
        image: sociedadImg3,
        titulo: "Verano y calor: la importancia de estar bien hidratados",
        info1: "La sudoración es el principal mecanismo de defensa que el cuerpo pone en funcionamiento contra la elevada temperatura corporal. Su manifestación más evidente es la pérdida de agua. Sin embargo, en este proceso se pierden además sales y minerales como sodio, potasio y magnesio, fundamentales para un funcionamiento corporal equilibrado.",
        info2: "Las infusiones y las bebidas alcohólicas y cafeinadas no son la mejor opción para lograr una buena hidratación porque su efecto diurético aumenta la pérdida de agua por orina. Por eso, al hidratarse hay que elegir bebidas sin alcohol y sin azúcar, como el agua o jugos naturales de frutas.",
        info3: "Para tener en cuenta: La sed se presenta cuando existe cierto grado de deshidratación, por lo que es indispensable anticiparse a esa sensación. Esto se fundamenta en varios motivos: Con la edad, la sensación de sed se va perdiendo, por lo que es necesario obligarse a beber líquidos a lo largo del día. La mayor incorporación de calorías eleva la temperatura corporal aumentando la sudoración, por lo que embarazadas, personas con sobrepeso y obesidad tienden a transpirar más, por lo cual es esencial mantener una buena hidratación.",
        info4: "Mantenerse hidratado es esencial. Un consumo razonable de líquidos es de 1,5 a 3 litros diarios, dependiendo de la masa corporal. Como regla general, por cada kilo de peso corporal se requieren 31,5 ml de agua, aumentando levemente su consumo con el aumento de las temperaturas (½ litro diario más sería suficiente).",
        info5: "Las posibilidades de combinación de las verduras para elaborar ensaladas son ilimitadas y se convierten en la mejor opción para un almuerzo rápido, fresco, nutritivo y liviano. Se pueden combinar con trozos de pollo, carnes y pescados, huevo o queso fresco, que aportan proteínas y no tantas calorías, además de semillas, legumbres y cereales integrales. Además, es indispensable recordar que en el verano hay que prestar más atención a la conservación de los alimentos. Principalmente los lácteos, carnes, pollo y el pescado deben conservar la cadena de frío para evitar su deterioro. Ingerirlos luego de una interrupción de la cadena de frío puede ser riesgoso y traer consecuencias para la salud.",
        subtitulo: "En el verano es fundamental acompañar la adaptación del organismo a las altas temperaturas con una alimentación e hidratación correctas. Este proceso no solo se reduce a tomar mucha agua y comer liviano sino que se debe hacerlo correctamente.",
        autor: "Carla Perez",
        fuente: "Fuente: Unidiversidad",
        fecha: "19 de Enero",
        comentario: "Para reequilibrar el cuerpo, la hidratación con agua se debe acompañar con el consumo de frutas y verduras que aporten el requerimiento adicional de sales minerales. Por ejemplo, el potasio presente en la banana y el tomate y los cítricos son una excelente fuente de magnesio."
    },
    {
        id: 13,
        categoria: "Sociedad",
        image: sociedadImg4,
        titulo: "Estafas online: advierten sobre el peligro de pactar transacciones por redes sociales",
        info1: "El jefe de la División de Delitos Económicos, Osvaldo Araujo, recomendó  no pagar señas on-line y chequear en sitios de internet oficiales de empresas, inmobiliarias y agrupaciones creadas para ese fin. Tampoco hay que dar datos de entidades bancarias, como CBU o clave Token, que es el elemento de seguridad que sirve para confirmar tu identidad cuando se realiza una operación a través de banca electrónica (home banking).",
        info2: "En los últimos días se instaló en la Mendoza una nueva metodología de estafa utilizando los alquileres de cabañas. En estos casos, los estafadores crean perfiles falsos de propiedades en internet y así engañan a las personas para sustraerles dinero.",
        info3: "Hay que recordar que el Ministerio de Seguridad cuenta con la línea “No compres robado”, la cual es anónima y está disponible las 24 horas para desalentar la compra de objetos robados. Se trata del 0800 222 6111, que permite realizar denuncias y aportar información sobre sitios de venta ilegal.",
        info4: "Asimismo, se recomienda no comprar objetos en comercios no autorizados y menos aún si el precio de venta está por debajo de su valor de mercado, y exigir siempre la factura o ticket al realizar una compra.",
        subtitulo: "Ante el aumento de estafas, el Ministerio de Seguridad estableció una serie de recomendaciones para evitar este tipo de delitos. Asimismo, dieron a conocer una nueva metodología delictiva que ya afectó a gran cantidad de mendocinos.",
        autor: "Juan Perez",
        fuente: "Fuente: Unidiversidad",
        fecha: "16 de Enero",
        comentario: "Las estafas por pactar transacciones a través de redes sociales son cada vez más frecuentes. Es por este motivo que el Ministerio de Seguridad de la Mendoza advierte los peligros y brinda recomendaciones para evitar este tipo de delito."
    },
    {
        id: 14,
        categoria: "Sociedad",
        image: sociedadImg5,
        titulo: "El Garrahan pide a los pediatras prescribir la vacuna contra el Covid",
        info1: "Directivos y profesionales del Hospital Garrahan convocaron a pediatras y equipos de Salud a indicar y continuar concientizando a las familias sobre la necesidad de la vacunación contra el coronavirus, informó este viernes el mayor centro sanitario pediátrico del país, a menos de un mes y medio del comienzo del ciclo lectivo.",
        info2: "'En el contexto actual de la pandemia por Covid-19 en la Argentina, convocamos a nuestros colegas pediatras a indicar la vacunación y a los equipos de salud a continuar concientizando a las familias sobre la necesidad de tener las dosis recomendadas contra la enfermedad', apuntó hoy el Garrahan en un comunicado oficial. Si bien los niños cursan la enfermedad, en la mayoría de los casos, en forma leve y con menos complicaciones, 'hoy la internación aumentó exponencialmente y la población pediátrica contribuye a la alta circulación viral', manifestaron desde el hospital.",
        info3: "El Hospital Garrahan reseñó que la Sociedad Argentina de Pediatría (SAP) recomendó la vacunación a partir de los 3 años, pero 'aún hay un alto porcentaje de niñas y niños sin vacunarse', afirmó. 'Las vacunas demostraron ser seguras y eficaces. No demorar la vacunación en niñas y niños depende, en gran medida, de la indicación de las y los pediatras y de la promoción por el equipo de salud', manifestaron los profesionales del Garrahan. Por su parte, el médico pediatra y miembro del Consejo de Administración del Hospital Garrahan, Oscar Trotta, celebró la aprobación de la vacuna del laboratorio Pfizer para niños de entre 5 y 11 años y destacó que permitirá ampliar la cobertura en chicos que 'tienen alguna patología de base'.",
        info4: "La ministra de Salud, Carla Vizzotti, anunció el jueves que la Administración Nacional de Medicamentos, Alimentos y Tecnología Médica (Anmat) aprobó el inmunizante de para esa franja etaria y dijo que el Gobierno compró cinco millones de dosis de esa vacuna, de las cuales un millón y medio llegará al país entre febrero y marzo, y las 3,5 millones de dosis restantes lo harán entre abril y junio. Al respecto, Trotta destacó que 'hay una población de chicos que tienen alguna patología de base relacionada con su inmunidad que requieren Pfizer', por lo que destacó la compra del inmunizante en diálogo con Radio AM 530. El especialista sostuvo que 'ni bien llegue la vacuna' comenzará su aplicación a la población pediátrica y dijo que las dosis 'a diferencia de la vacuna de Pfizer para adultos, tienen una formulación específica'.Respecto a los avances del programa de vacunación en niñas y niños, el profesional sostuvo que en el Hospital Garrahan vacunaron 'al 100% de nuestra población objetivo; con la de Sinopharm de 3 a 11 años y con la de Moderna y algunas dosis de Pfizer a los de 12 a 17 años y no hemos tenido ningún efecto adverso secundario importante'.",
        info5: "Trotta precisó que en el Hospital Garrahan hay unos 90 niñas y niños internados, de los cuales 'el 70 % son chicos que no han recibido la vacuna o tienen un esquema incompleto'.",
        subtitulo: "Desde el mayor centro sanitario pediátrico del país señalaron que 'la internación aumentó exponencialmente y la población pediátrica contribuye a la alta circulación viral', a menos de un mes y medio del comienzo del ciclo lectivo.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "Foto: Télam"
    },
    {
        id: 15,
        categoria: "Medio Ambiente",
        image: ambienteImg1,
        titulo: "El Beagle y sus dos naciones”: un documental que refleja la incidencia del cambio climático en el fin del mundo",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El trabajo se basa en una expedición de un grupo científico argentino-chileno. Se estrena el sábado 22 de enero por la TV Pública.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "20 de Enero de 2022",
        comentario: "El documental se estrenará el sábado 22 a las 15.30 por la TV Pública: Foto: Prensa Conicet"
    },
    {
        id: 16,
        categoria: "Medio Ambiente",
        image: ambienteImg2,
        titulo: "Advierten impacto del derretimiento de un iceberg en el Atlántico Sur",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El cuerpo de hielo se desprendió de la Antártida en 2017 y liberó millones de tonelada de agua dulce. Alteración del ecosistema.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "20 de Enero de 2022",
        comentario: "La investigación detalla que el volumen de agua desprendido por el iceberg podría haber afectado las propiedades del agua y del plancton. Foto: AFP/Télam"
    },
    {
        id: 17,
        categoria: "Medio Ambiente",
        image: ambienteImg3,
        titulo: "Los estudios en la Antártida argentina sobre contaminación atmosférica ganan reconocimiento mundial",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El estudio, dirigido por doctora en Física y jefa a cargo del departamento de Ciencias de la Atmósfera del IAA, Adriana Gulisano, se concentró no solo en el monitoreo de la capa de ozono, sino también en su composición atmosférica y los gases nocivos producidos por aerosoles domésticos.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "20 de Enero de 2022",
        comentario: "Foto: Publicada por Télam"
    },
    {
        id: 18,
        categoria: "Ciencia y Tecnologia",
        image: tecImg1,
        type: "Principal",
        titulo: "Sectores de la ciencia y la tecnología generaron 20 mil puestos de trabajo desde 2019",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El Centro de Estudios para la Producción del Ministerio de Desarrollo Productivo informó que este sector encabeza la estructura productiva del país.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "10 de Enero de 2022",
        comentario: "Foto: Publicada por Télam"
    },
    {
        id: 19,
        categoria: "Ciencia y Tecnologia",
        image: tecImg2,
        titulo: "El Ministerio de Ciencia lanzó una convocatoria de proyectos para la transición energética",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El Clúster Renovable Nacional, iniciativa público-privada, cuenta con representación de cinco jurisdicciones, entre ellas Mendoza, y busca favorecer la producción de bienes, tecnologías y servicios asociados a la generación eléctrica de fuentes renovables.",
        autor: "Maximiliano Benitez",
        fuente: "Fuente: Telam - Clarin",
        fecha: "15 de Enero de 2022",
        comentario: "Foto: Infocampo"
    },
    {
        id: 20,
        categoria: "Ciencia y Tecnologia",
        image: tecImg3,
        titulo: "Una investigadora del Conicet es la primera mujer premiada por una asociación científica",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El reconocimiento es otorgado desde hace más de 20 años por la Sociedad Argentina de Catálisis. Mónica Casella fue distinguida por su vasta trayectoria en la disciplina sobre petroquímicas y descontaminación del agua.",
        autor: "Sandra Veloso",
        fuente: "Fuente: Clarin",
        fecha: "21 de Enero de 2022",
        comentario: "Foto: Conicet"
    },
    {
        id: 21,
        categoria: "Sala de Escape",
        image: salaImg1,
        titulo: "El escritor y periodista Cristian Alarcón ganó el Premio Alfaguara de Novela",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El jurado de la XXV edición seleccionó a “El Tercer Paraíso” entre 899 trabajos. Destacó su vigor narrativo y estructura dual.",
        autor: "Sandra Veloso",
        fuente: "Fuente: Telam - Clarin",
        fecha: "21 de Enero de 2022",
        comentario: "Alarcón explicó que la obra fue enteramente escrita en pandemia, en un retiro obligado intentando sobrevivir a una de las cepas más temibles de la Covid. Foto: Télam"
    },
    {
        id: 22,
        categoria: "Sala de Escape",
        image: salaImg2,
        titulo: "Estrenaron una serie de cuentos infantiles en la plataforma pública y gratuita Contar",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "“Foquito” busca fomentar la lectura infantil e incentivar la imaginación. Fue producida por la Sociedad Argentina de Gestión de Actores Intérpretes (Sagai).",
        autor: "Juan Perez",
        fuente: "Fuente: Telam - Clarin",
        fecha: "22 de Enero de 2022",
        comentario: "Actores y actrices, como Violeta Urtizberea se semaron a la propuesta que està disponible en la plataforma Contra. Foto: Télam"
    },
    {
        id: 23,
        categoria: "Sala de Escape",
        image: salaImg3,
        titulo: "El Incaa abre tres nuevas escuelas de cine especializadas en animación y nuevas tecnologías",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "Se trata de tres nuevas sedes de la Escuela Nacional de Realización y Experimentación Cinematográfica (Enerc), presente en cada una de las regiones en que se divide el país, y de carácter libre y gratuito. Funcionarán en Mar del Plata, Rosario y Comodoro Rivadavia.",
        autor: "Mara Cardozo",
        fuente: "Fuente: Clarin",
        fecha: "22 de Enero de 2022",
        comentario: "Foto: Twitter de Primer Plano."
    },
    {
        id: 24,
        categoria: "Deportes",
        image: depImg1,
        titulo: "El turismo de la UNCuyo en vacaciones",
        subtitulo: "Con el deporte en segundo plano estas son las ofertas que presenta la Universidad Nacional de Cuyo. Hablamos con Gabriel Rey, coordinador encargado del área.",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        autor: "Juan Perez",
        fuente: "Fuente: Telam - Clarin",
        fecha: "22 de Enero de 2022",
        comentario: "La pileta es una de las atracciones de la U en el verano. Foto: gentilza Prensa Club UNCuyo."
    },
    {
        id: 25,
        categoria: "Deportes",
        image: depImg2,
        titulo: "La UNCuyo dijo presente en los Premios Huarpe",
        subtitulo: "Tras 14 años se logró destacar a los y las deportistas de Mendoza por parte del Círculo de Periodistas. La UNCuyo estuvo representada a través de Marina Meneses, jugadora de la U y ganadora de la terna del Roller Hockey.",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        autor: "Juan Perez",
        fuente: "Fuente: Unidiversidad",
        fecha: "22 de Enero de 2022",
        comentario: "Marina Meneses representa a la UNCuyo y también a la selección argentina. Foto: gentileza."
    },
    {
        id: 26,
        categoria: "Deportes",
        image: depImg3,
        titulo: "Balance positivo en la Dirección de Deportes y metas renovadas",
        subtitulo: "Las actividades y disciplinas de la U comienzan a cerrar el telón hasta el próximo año y Fernando Martín, Director del Deporte Federado, pasó por el aire de El Suplementario contando sobre el 2021.",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        autor: "Juan Perez",
        fuente: "Fuente: Telam - Clarin",
        fecha: "22 de Enero de 2022",
        comentario: "Las chicas del roller hockey fueron de los equipos destacados de la UNCuyo. Foto: gentileza Club UNCuyo."
    },
    {
        id: 27,
        categoria: "Sociedad",
        tituloCuadroUno: "Informe especial",
        tituloCuadroDos: "A 20 años de la crisis de 2001: de la defensa de la democracia al cambio en las estructuras partidarias",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        image: artImg1,
        type: "Principal",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        subtitulo: "Cuatro profesionales de la Facultad de Ciencias Políticas y Sociales de la UNCUYO compartieron con Unidiversidad su visión sobre las consecuencias de la crisis de 2001.",
        autor: "Veronica Gordillo",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "La crisis de 2001 marcó el fin del gobierno de la Alianza, cuyos candidatos se impusieron en las elecciones de 1999. Foto: Télam"
    },
    {
        id: 28,
        categoria: "Sociedad",
        image: CardImg1,
        type: "Card",
        titulo: "Iglesias y Jaliff cuentan cómo fue pilotear la crisis en Mendoza",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "lorem ipsum libero sit Magni dolor beatae."
    },
    {
        id: 29,
        image: CardImg2,
        categoria: "Sociedad",
        type: "Card",
        titulo: "Corralito, default, devaluación y pesificación, las escenas finales del modelo que colapsó",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El 'corralito' marcó el inicio del fin del gobierno de De la Rúa. Si bien se diseñó para intentar salvar el modelo de la Convertibilidad (basado en la paridad 1 a 1 del peso con el dólar), frenar la caída de las reservas y evitar un 'default', sus efectos ocasionaron todo lo contrario.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "Foto: Télam"
    },
    {
        id: 30,
        image: CardImg3,
        categoria: "Sociedad",
        type: "Card",
        titulo: "El día a día de la crisis en las tapas de los diarios",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "Diciembre de 2001 marcó una profunda crisis política, económica y social. El corralito bancario decretado el 1.º de diciembre marcó el inicio del mes más dramático de la historia argentina reciente.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "Foto: Diario La República"
    },
    {
        id: 31,
        image: CardImg3,
        categoria: "Otras Miradas",
        widthCard: "noticia__col__1 noticia__col__3",
        titulo: "La UNCUYO está muy bien comunicada",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "La Universidad más importante del oeste argentino cuenta con un envidiable sistema comunicacional tanto en lo institucional como en lo mediático",
        autor: "Horacio Meilán",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "UNCUYO REC, un programa con alta aceptación en la Universidad. Foto gentileza Prensa UNCUYO"
    },
    {
        id: 32,
        image: CardImg3,
        categoria: "Otras Miradas",
        widthCard: "noticia__col__1 noticia__col__3",
        titulo: "Chile hoy, Argentina en 2001: caídas neoliberales",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "Por Roberto Follari, epistemólogo, docente y doctor en Psicología.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "Foto ilustrativa publicada en El Comercio de Peru"
    },
]

export default listaNoticias