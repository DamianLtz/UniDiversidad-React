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
        info1: "El Ministerio de Salud de la Naci??n confirm?? que en las ??ltimas 24 horas el n??mero total de contagios desde el comienzo de la pandemia ascendi?? a 7.694.506, en tanto que los fallecimientos se ubican en 118.969.",
        info2: "El reporte del Ministerio de Salud confirm?? 118.171 nuevos contagios en las ??ltimas 24 horas.",
        info3: "Con estos registros, suman 7.694.506 casos desde que comenz?? la pandemia. Adem??s, se registraron 161 nuevas muertes de pacientes con coronavirus lo que eleva la cifra de v??ctimas mortales en el pa??s a 118.969.",
        info4: "En cuanto al AMBA, en la provincia de Buenos Aires se detectaron 47567 contagios y en la Ciudad de Buenos Aires, 15539 casos positivos. En el d??a fueron realizados 172952 tests y desde el inicio del brote se practicaron 31452459 pruebas diagn??sticas para esta enfermedad. Hay por el momento 2511 personas internadas en Unidades de Terapia Intensiva: las camas de UTI est??n ocupadas en un 47.8 por ciento a nivel nacional y en un 46.9 por ciento en el ??rea Metropolitana de Buenos Aires.",
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
        titulo: "Lady Gaga confes?? que grab?? una escena ??ntima con Salma Hayek en ???House of Gucci???",
        info1: "House of Gucci, fue una de las cintas m??s esperadas en 2021, parte del elenco principal lo integran dos de las artistas m??s medi??ticas de los ??ltimos a??os, Lady Gaga y Salma Hayek, las cuales han mostrado su gran amistad fuera de la pantalla.",
        info2: "Gracias a esta confianza, la int??rprete estadunidense cont?? que ambas artistas escenificaron una puesta ??ntima durante la cinta dirigida por Ridley Scott. Fue durante su participaci??n en los ???Q&A??? en Europa, que la int??rprete de Shallow en A Star is Born, detall?? que protagoniz?? una escena especial junto a la actriz mexicana, la cual no llego al corte final por decisi??n de la producci??n.",
        info3: "Actualmente, el elenco de House of Gucci, se encuentra de gira promocionando la cinta con la esperanza de que sea considerada dentro de la siguiente entrega de los Premios ??scar.",
        info4: "En el video recuperado por el portal de espect??culos, Pop Crave, se puede escuchar a Lady Gaga decir que existe una escena subida de tono entre Patrizia (Lady Gaga) y Pina (El personaje de Salma Hayek), que sucede despu??s del asesinato de Maurizio Gucci (Adam Driver).",
        subtitulo: "La cantante estadunidense se??al?? que el fragmento fue aceptado con total libertad por parte del director, Ridley Scott",
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
        titulo: "Macri y Rodr??guez Larreta se reunir??n a solas en el Sur: sobre qu?? temas hablar??n y qu?? les preocupa",
        info1: "Mauricio Macri y Horacio Rodr??guez Larreta tendr??n su reuni??n cumbre el s??bado pr??ximo, lejos de las c??maras y los periodistas. Y, adem??s, muy lejos de la Ciudad de Buenos Aires: ambos est??n de vacaciones en el exclusivo country Cumel??n, ubicado en Villa La Angostura, Neuqu??n.",
        info2: "El ex presidente est?? instalado all?? con su familia desde el 15 de diciembre, mientras que el jefe de Gobierno lleg?? este martes con su hija menor para pasar seis d??as de vacaciones en la casa de su amigo Luis ???Toto??? Caputo, ex ministro de Finanzas y titular del Banco Central del gobierno de Cambiemos (Macri conoci?? ese paradis??aco lugar en 2011 y se aloj?? en el mismo lugar que Larreta ahora). A orillas del Nahuel Huapi, no habr?? testigos indiscretos para una charla que se deb??an. Ese tipo de encuentros, a solas, suelen realizarse antes de instancias importantes para el PRO o para Juntos por el Cambio.",
        info3: " As?? sucedi?? el 25 de junio pasado, en la casa de Macri en Acassuso, cuando el ex mandatario y Rodr??guez Larreta discrepaban sobre las candidaturas porte??a y bonaerense. Finalmente, el ex jefe del Estado viaj?? al d??a siguiente a Europa, donde se qued?? 43 d??as, y el alcalde porte??o logr?? que las listas fueran encabezadas por sus postulantes, Mar??a Eugenia Vidal y Diego Santilli. Este tambi??n es un momento definitorio.",
        info4: "Larreta lanz?? esta semana una Mesa Nacional para apuntalar su candidatura presidencial, en donde est??n Diego Santilli, Jorge Macri y Cristian Ritondo (y podr??a sumarse Emilio Monz??). Macri dio se??ales concretas de que no se presentar?? como candidato (???No me anoto en ninguna carrera para ser presidente en 2023???, dijo hace un mes), aunque est?? en duda su neutralidad: ???Sostengamos a Patricia (Bulllrich). Es muy importante que llegue con posibilidades a 2023???, les pidi?? en privado a dirigentes del PRO.",
        subtitulo: "Ambos est??n de vacaciones en Cumel??n, un country de Villa La Angostura, y acordaron encontrarse el s??bado. En la agenda, la carrera para 2023, cambios en JxC, econom??a, FMI y relaci??n con el Gobierno. ",
        autor: "Ricardo Carpena",
        fuente: "Fuente: Infobae",
        fecha: "21 de Enero de 2021",
        comentario: "Mauricio Macri y Horacio Rodr??guez Larreta, a solas en el Sur"
    },
    {
        id: 4,
        categoria: "Actualidad",
        image: actImg1,
        titulo: "La Patagonia, en alerta por la liberaci??n de Jones Huala: temen que regrese al pa??s y cumpla sus promesas violentas",
        info1: "El l??der mapuche Facundo Jones Huala, quien lidera la violenta agrupaci??n Resistencia Ancestral Mapuche (RAM), tramita su regreso a la Argentina luego de que la Justicia chilena le otorgara la libertad condicional durante el cumplimiento de una condena de seis a??os de prisi??n por el incendio de un fundo y la portaci??n ilegal de armas. Desde su entorno celebraron la medida.",
        info2: "???Por fin se hizo Justicia, aunque desde el a??o pasado deber??a haber estado libre??? dijeron. Adem??s anticiparon que desde su liberaci??n, este viernes a la tarde, iniciar?? los tr??mites correspondientes para regresar a la Argentina. El anuncio no pas?? desapercibido en la Patagonia Argentina. Es que en una de sus ??ltimas apariciones a trav??s de comunicados que escribi?? desde la prisi??n, Jones Huala llam?? a ???vengar la muerte de El??as Garay???, el integrante de la comunidad mapuche Lof Quemquentreu que fue asesinado de un disparo en noviembre pasado en el paraje Cuesta del Ternero, entre El Bols??n y Bariloche.",
        info3: "Por ese caso hay dos detenidos. En todos los escritos que elabor?? el l??der mapuche desde la c??rcel, incita a la violencia para reivindicar la causa mapuche y ???recuperar tierras que les fueron despejadas a los pueblos originarios???. ???La sangre ser?? vengada???, public?? en noviembre pasado, tras el homicidio de Garay, un llamado que en ese momento gener?? preocupaci??n en la zona y que este viernes se acrecent??. ???Que hablen las acciones, el weichan limpiar?? la senda de oportunistas y malintencionados, que la rabia y la tristeza no nos ciegue, y sin confundir al enemigo, golpeemos certeramente donde m??s le duele al poder???, dec??a el ??ltimo de los textos que difundi?? Jones Huala. ???Que su muerte ni ninguna sea en vano, que la sangre sea vengada y la tierra recuperada sean mas que consignas, que las balas se van a devolver, sea mas que un cantito???, apunt??. Los principales opositores a la causa mapuche, anticiparon su descontento con la medida.",
        info4: "???Jones Huala dej?? en claro que piensa volver a la Argentina a sembrar m??s violencia, es inentendible c??mo la justicia chilena, teniendo en cuenta esas amenazas, lo deja en libertad??? dijeron desde el sector. Desde la oposici??n, Patricia Bullrich(presidenta del PRO) tambi??n manifest?? su inquietud al conocer la noticia: ???Me preocupa mucho que Jones Huala quede en libertad. ??Por qu??? Es evidente que algunos desean que cumpla con todo lo que escribi?? en sus cartas y contin??e la violencia???. En la misma l??nea se expres?? el diputado nacional Gerardo Milman: ???Con el respeto a las decisiones aut??nomas e independientes de la justicia chilena, la libertad condicional de Jones Huala, debe poner en alerta a las autoridades argentinas frente a los actos de violencia que se puedan generar en nuestra comarca andina???. ???, escribi?? Bullirch, quien adem??s le pidi?? al presidente Alberto Fern??ndez que ???arbitre los medios necesarios para que el terrorista no vuelva a generar muerte y destrucci??n???.",
        info5: "La liberaci??n del lonko fue resuelta por la C??mara de Apelaciones de Temuco a partir de un recurso de amparo que present?? la defensa del condenado el 11 de enero, representada por las abogadas Karina Riquelme y Patricia Cuevas Su??rez. La medida, firmada por los jueces Carlos Guti??rrez Zavala y Luz M??nica Arancivia Mena, contempla los informes de conducta y psicosocial, como as?? tambi??n la opini??n de distintos profesionales aunque esos mismos antecedentes trabajaron su libertad condicional a fines de 2021. En su apelaci??n, la defensa mencion?? que el cumplimiento de la pena comenz?? a fines de 2018, siendo el plazo m??nimo para el beneficio de libertad condicional un a??o m??s tarde, es decir diciembre de 2019.",
        subtitulo: "En uno de sus ??ltimos escritos elaborados desde la c??rcel, el Ionko llam?? a vengar la muerte de un mapuche asesinado de un disparo",
        autor: "Francisco Poppe",
        fuente: "Fuente: Infobae",
        fecha: "21 de Enero de 2022",
        comentario: "Facundo Jones Huala."
    },
    {
        id: 5,
        categoria: "Actualidad",
        image: actImg2,
        titulo: "Milei y Espert, los ??nicos dos pol??ticos ???aprobados??? por los argentinos en redes",
        info1: "Un an??lisis de redes sociales realizado durante el mes de diciembre por la consultora You Are Public y que incluy?? un barrido por casi medio mill??n de menciones a los diez principales pol??ticos de la Argentina dej?? a los diputados liberales Javier Milei y Jos?? Luis Espert como los ??nicos con imagen negativa menor al 50%.",
        info2: "Los ??nicos ???aprobados??? resultaron ser Espert y Milei, aunque fueron los dos pol??ticos analizados que menor cantidad de menciones recibieron en el mes de diciembre en redes sociales.",
        info3: "La consultora pol??tica analiz?? a Alberto Fern??ndez, Mauricio Macri, Cristina Fern??ndez de Kirchner, Horacio Rodr??guez Larreta, Axel Kicillof, Mar??a Eugenia Vidal, Sergio Massa, Patricia Bullrich, Jos?? Luis Espert y Javier Milei.",
        info4: "De esos nombres, Vidal fue la pol??tica con mayor cantidad de menciones y, al mismo tiempo, la que peor imagen p??blica tuvo entre los mensajes analizados. ???La imagen en redes sociales de los pol??ticos responde a un contexto particular; por ejemplo, en el caso de Vidal, se dio que hubo una explosi??n de comentarios negativos en su contra por el caso denominado 'Gestapo' sindical???, explicaron desde You Are Public a NEXOFIN.",
        info5: "En el r??nking de mayor cantidad de menciones, a Vidal la sigui?? el Presidente, y el podio lo complet?? la actual vicepresidenta. En 4?? lugar qued?? Mauricio Macri, a quien siguieron Rodr??guez Larreta, Massa, Kicillof, Bullrich, Milei y Espert.",
        subtitulo: "Un informe de la consultora You Are Public analiz?? todas las menciones que tuvieron los 10 principales pol??ticos argentinos en redes sociales y los resultados llamaron la atenci??n: todos tuvieron m??s del 50% de imagen negativa a excepci??n de los diputados liberales",
        autor: "Juan Perez",
        fuente: "Fuente: Nexofin",
        fecha: "18 de Enero de 2022",
        comentario: "Todos tuvieron m??s del 50% de imagen negativa a excepci??n de los diputados liberales"
    },
    {
        id: 6,
        categoria: "Actualidad",
        image: actImg3,
        titulo: "Sesiones extraordinarias: la oposici??n reclama m??s di??logo y crece el malestar por la incertidumbre del temario",
        info1: "El gobierno nacional anunci?? que el pr??ximo martes convocar?? formalmente a las sesiones extraordinarias del Congreso. Sin embargo, la incertidumbre en relaci??n al temario sigue generando malestar en las filas de la oposici??n.",
        info2: "Seg??n informaron fuentes oficiales, el Congreso retomar?? su actividad a partir del 1 de febrero y la Casa Rosada mantendr?? bajo an??lisis la lista de proyectos hasta ??ltimo momento. Entre las iniciativas que trascendieron se destacan la reforma del Consejo de la Magistratura, el Consenso Fiscal 2022 y un paquete econ??mico que incluye la Ley de Hidrocarburos, Producci??n de Cannabis, Desarrollo Agroindustrial, Electromovilidad e Industria Automotriz.",
        info3: "Pero simplemente por una cuesti??n de ???tiempos parlamentarios???, desde Juntos por el Cambio descartan que la mayor??a de estos temas no ser??n tratados durante febrero. De hecho, la demora del temario tambi??n impide la conformaci??n de las comisiones a las que deben ser girados los proyectos. Este punto genera expectativa en la oposici??n, dado que la nueva paridad de fuerzas les permitir?? negociar con m??s fuerza la conformaci??n de las mismas, algo clave a la hora de elaborar los dict??menes.",
        info4: "Incluso -reconocen- aspiran a pedir la presidencia de alguna comisi??n que no sea central para la ???gobernabilidad???, como Agricultura. De hecho, Juntos por el Cambio ya defini?? c??mo se repartir??n las comisiones entre los integrantes de la coalici??n, y se mantiene alerta por la negociaci??n con el Frente de Todos.",
        subtitulo: "El Gobierno har?? la convocatoria formal este martes y la actividad comenzar?? el 1 de febrero. Desde Juntos por el Cambio aseguran que hasta el momento no se entabl?? ninguna negociaci??n sobre los proyectos",
        autor: "Federico Millenaar",
        fuente: "Fuente: Infobae",
        fecha: "22 de Enero de 2022",
        comentario: "Bloque de Juntos por el Cambio en la C??mara de Diputados"
    },
    {
        id: 7,
        categoria: "Actualidad",
        image: actImg4,
        titulo: "Ana Rosenfeld explic?? por qu?? Stefi Roitman y Ricky Montaner no se habr??an casado en la Argentina: 'Probablemente quieran hacer un contrato prenupcial'",
        info1: "Luego de las repercusiones que gener?? la inc??gnita que plante?? Adri??n Pallares en Intrusos al indagar sobre la uni??n civil de Stefi Roitman y Ricky Montaner y cuestionar la existencia de la liberta roja, Ana Rosenfeld explic?? los motivos que habr??an llevado a los j??venes a no casarse en la Argentina.",
        info2: "Si la se??ora Roitman y el se??or Montaner no se casaron civilmente ac?? es porque lo que ellos probablemente quieran hacer no sea un convenio de separaci??n de bienes sino lo que conocemos como mundialmente como contrato prenupcial???, comenz?? diciendo la letrada en di??logo con LN+",
        info3: "Un contrato prenupcial es cuando se establece que por ser infiel se va a pagar una indemnizaci??n por cada a??o de matrimonio y por hijo. Es decir, se realizan determinadas previsiones. La separaci??n de bienes es muy puntual: qu?? tenemos, que no y qu?? vamos a administrar libremente. Si nos vamos a hacer donaciones reciprocas y si tenemos deudas que quede explicitado c??mo se van a pagar???, agreg??.",
        info4: "Esto no solo se realiza cuando una de las partes tiene m??s dinero que la otra, sino que puede pasar que sea que tenga mucho dinero antes de contraer las nupcias. Tambi??n porque pasaron por un tr??mite de divorcio y no quieren pasar nuevamente por eso???, cerr?? Rosenfeld, de manera general.",
        subtitulo: "La abogada dio a conocer los motivos que habr??a llevado a la pareja a no unirse civilmente en el pa??s oriundo de la actriz.",
        autor: "Maria Benitez",
        fuente: "Fuente: Magazine",
        fecha: "22 de Enero de 2022",
        comentario: "Ana Rosenfeld explic?? por qu?? Stefi Roitman y Ricky Montaner no se casaron en la Argentina."
    },
    {
        id: 8,
        categoria: "Mojo",
        image: mojoImg1,
        titulo: "Dua Lipa en Argentina 2022: habilitaron la venta de entradas para el segundo show, precios y c??mo comprarlas",
        info1: "Dua Lipa, la multifac??tica artista brit??nica, recientemente ganadora de dos Grammy a Mejor ??lbum Pop y ??lbum del A??o, vuelve a la Argentina, y tras agotar las entradas de su show del 14 de septiembre en menos de una hora, agregan una nueva fecha.",
        info2: "Los tickets para el segundo recital de Dua Lipa en Argentina del 13 de septiembre de 2022, saldr??n a la venta este viernes, a partir de las 10 de la ma??ana a trav??s de All Acces.",
        info3: "Los precios son: Campo delantero: $ 12.000 (preventa) / $ 14.500 (precio final). y Campo general: $ 8000 (preventa) / $ 9500 (precio final).",
        info4: "??Estoy tan emocionada de volver a hacer una gira y ver a mis ??ngeles en persona! Qu?? incre??ble que todos podamos bailar y celebrar juntos una vez m??s. Cuando escrib??a Future Nostalgia, imaginaba las canciones que se tocaban en clubes en las noches con tus amigos. Estoy tan emocionado de que esta fantas??a finalmente se haga realidad. ??No puedo esperar para experimentar estas canciones juntos en vivo!. Esas fueron las palabras de Dua Lipa, al confirmar su gira latinoamericana 'Future Nostalgia Tour', que la traer?? nuevamente a nuestro pa??s.",
        info5: "'Future Nostalgia', el trabajo discogr??fico m??s reproducido de 2020 en Spotify y uno de los 'Best Of' de fin de a??o gener?? m??ltiples hits en todo el mundo como los #1 'Break My Heart', 'Levitating' y. 'Don't Start Now'. Dua Lipa es actualmente es la cuarta artista m??s grande del mundo con m??s de 65 millones de oyentes mensuales.",
        subtitulo: "La artista brit??nica, creadora de Be the one y Break my heart, anunci?? conciertos en toda la regi??n como parte de su gira latinoamericana 'Future Nostalgia Tour'. Estar?? en el pa??s en septiembre de 2022.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam - Clarin",
        fecha: "22 de Enero de 2022",
        comentario: "Como parte de su gira latinoamericana 'Future Nostalgia Tour', estar?? en Buenos Aires actuando el pr??ximo 4 de septiembre de 2022, en el Hip??dromo de Palermo."
    },
    {
        id: 9,
        categoria: "Mojo",
        image: mojoImg2,
        titulo: "El Lollapalooza 2022 se podr?? ver en toda la Argentina a trav??s de Flow",
        info1: "Producido por Perry Farrell, William Morris Endeavor (WME), C3 Presents y DF Entertainment, Lollapalooza Argentina es el festival m??s importante del pa??s, en el que la m??sica junto con diferentes expresiones art??sticas - dise??o, la gastronom??a y las nuevas tendencias art??sticas- convoca a unas 300.000 personas de todas las edades",
        info2: "La programaci??n comienza el viernes 18 con Miley Cyrus, A$AP Rocky, Aless, Duki, Bizarrap, C. Tangana, Wos, Marina, A Day To Remember, Turnstile, Deorro, Louta, Emilia, FMS, Alok Boombox Cartel, Seven Kayne, Dillom, 070 Shake, Natalie P??rez, Tai Verdes Sael, Chita, Axel Fiks, Bruses, La Joaqui, Ainda, Rosario Ortega, Falke 912 Zenon Pereyra y Bianca Lif y Limon.",
        info3: "El s??bado 19 contin??a con las actuaciones de The Strokes, Doja Cat, Machine Gun Kelly, Jack Harlow, Alan Walker, Khea, Kehlani, Nicki Nicole, Justin Quiles, LP, Litto Nebbia, ??l Mat?? a un Polic??a Motorizado, Chris Lake, King Gizzard & the Lizard Wizard, Ashnikko, Dani Ribba JXDN, FMS, Natanael Cano, Pabblo Vittar, Marc Segu??. Derby Motoreta's Burrito Kachimba | Taichu, Kiddo Toto, Clara Cava, Girl Ultra, Ghetto Kids, Molok0, Chiara Parravicini, wiranda johansen, Lucia Tacchetti y D3FA.",
        info4: "El domingo 20 tocar??n Foo Fighters, Martin Garrix, Babas??nicos, Jane's Addiction, Jhay Cortez, Tiago PZK, L-Gante, Kaytranada, Phoebe Bridgers, Alessia Cara, Idles Remi Wolf, Channel Tres, Emmanuel Horvilleur, ACRU, FMS, Kaleb Di Masi Alan Gomez, DJ TAO, The Wombats, Goldfish, Luck Ra, Sen Senra, Paula Cendejas, Saramalacara, Malena Villa, Las Ligas Menores, Celli, BB ASUL, Six Sex, Simona y Ronpe 99'.",
        subtitulo: "La s??ptima edici??n del festival se podr?? ver en vivo a trav??s de cuatro canales de la plataforma, que transmitir?? los shows completos de los diferentes de bandas y solistas como Foo Fighters, The Strokes, Miley Cyrus y A$AP Rocky.",
        autor: "Juana Martinez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "La s??ptima edici??n del festival Lollapalooza Argentina, que se realizar?? el viernes 18, s??bado 19 y domingo 20 de marzo en el Hip??dromo de San Isidro, se podr?? ver en vivo a trav??s de cuatro canales de Flow, que transmitir?? los shows completos de los diferentes de bandas y solistas como Foo Fighters, The Strokes, Miley Cyrus y A$AP Rocky, entre m??s de 100 propuestas internacionales e nacionales."
    },
    {
        id: 10,
        categoria: "Sociedad",
        image: sociedadImg1,
        type: "Principal",
        titulo: "Argentina lidera acceso a internet en la regi??n, pero el servicio es deficiente",
        info1: "La Argentina es el pa??s de la regi??n con mayor penetraci??n de internet, pero al mismo tiempo existen deficiencias en la calidad del servicio; seg??n un informe del Centro Internacional para la Promoci??n de los Derechos Humanos (Cipdh) de la Organizaci??n de las Naciones Unidas para la Educaci??n, la Ciencia y la Cultura (Unesco).",
        info2: "El trabajo subraya que el 80,2% de la poblaci??n en la Argentina tiene acceso a internet, al considerar tanto los accesos fijos como los m??viles. A su vez, detall?? que existen 'serias dificultades en la calidad de los servicios prestados por las operadoras y tambi??n preocupa el atraso de la regi??n en materia de competitividad digital'.",
        info3: "En l??neas generales todxs usan internet y se quejan del servicio, dijo a T??lam la directora ejecutiva del Cipdh, Fernanda Gil Lozano. Al considerar a internet un 'derecho humano', para Gil Lozano en la Argentina 'tenemos que seguir insistiendo en que todes tengamos internet y los entes reguladores tienen que fijarse en el tema de las inversiones'. Indic?? que 'siempre fue un tema con los prestadores privados de servicios p??blicos, pasa lo mismo con la electricidad: las empresas si no se las controla, no van a hacer inversi??n'.",
        info4: "Se??al?? que 'est?? muy bien el plan Conectar que entrega tablets a los chicos, pero se van a conectar a un mal servicio' Indic?? tambi??n que en el relevamiento detectaron que 'tenemos el primer lugar en la regi??n por tener m??s personas conectadas, pero cuando vamos a las industrias no tienen un buen acceso con la tecnolog??a'",
        info5: "El Cipdh inform?? que la Argentina ocupa el primer lugar de la n??mina de usuarios con acceso a internet per c??pita de habitantes, resultando que el 80,2% de la poblaci??n se conecta a la red de redes; seguido por Brasil con 75,2% y M??xico cierra el podio con 71,8% de personas conectadas.",
        subtitulo: "As?? lo detalla un informe de Unesco. El 80,2% de la poblaci??n accede a la red. Problemas en la calidad del servicio y atraso en materia de competitividad.",
        autor: "Mario Perez",
        fuente: "Fuente: Unidiversidad",
        fecha: "20 de Enero",
        comentario: "Para el 86% de personas consultadas, el acceso a internet fue clave para trabajar o estudiar desde que se inici?? la pandemia."
    },
    {
        id: 11,
        categoria: "Sociedad",
        image: sociedadImg2,
        titulo: "Con mayor??a de mujeres y j??venes, Gabriel Boric anunci?? su gabinete para los nuevos aires de Chile",
        info1: "El presidente electo de Chile, Gabriel Boric, confirm?? este viernes al extitular del Banco Central Mario Marcel como ministro de Hacienda, mientras que la nieta del exmandatario Salvador Allende, la diputada Maya Fern??ndez Allende, estar?? al frente de la cartera de Defensa, en lo que ser?? un gabinete con mayor??a de mujeres, un promedio de edad bajo e integrado en un tercio por independientes.",
        info2: "A 33 d??as de ganar el balotaje, el pr??ximo mandatario anunci?? lo que ser?? a partir del 11 de marzo su gabinete que constar?? de 24 nombres, 14 mujeres y 10 hombres, un promedio de edad de 49 a??os, y con varios dirigentes que no pertenecen a la coalici??n Apruebo Dignidad (Frente Amplio y el Partido Comunista) con la que triunf?? en las elecciones.",
        info3: "Uno de los nombres m??s esperados era el de Hacienda y, sin sorpresas, Boric escogi?? al extitular del Banco Central Marcio Marcel, que el jueves renunci?? a ese cargo. Antes, ocup?? diversas funciones en los gobiernos de centro izquierda, entre 1990 y 2008, y era el preferido para los mercados, que ve en su nombramiento un gesto de moderaci??n en las reformas econ??micas que busca implantar el pr??ximo presidente.",
        info4: "Izkia Siches, en tanto, ser?? la futura ministra del Interior, transform??ndose en la primera mujer en la historia en encabezar esta cartera. Tiene 35 a??os, es m??dico cirujana de la Universidad de Chile y en 2017 se convirti?? en la primera mujer en alcanzar la presidencia del Colegio M??dico. Desde ese lugar tuvo una activa participaci??n en la lucha contra la pandemia de Covid-19.",
        info5: "Se trata de dos exl??deres estudiantiles y diputados que, junto a Boric, encabezaron las protestas de 2011 en busca de 'educaci??n p??blica, gratuita y de calidad'. En el listado tambi??n figura la legisladora socialista (centroizquierda) y nieta del expresidente Salvador Allende (1970-1973), Maya Fern??ndez, que ser?? ministra de Defensa a partir de marzo. M??s all?? del peso hist??rico, su inclusi??n es una de las tantas de dirigentes de partidos de la antigua Concertaci??n, como el Partido Socialista (PS), el Partido por la Democracia (PPD), el Partido Liberal y el Partido Radical (PR), que no respaldaron a Boric en la primera vuelta.",
        subtitulo: "A 33 d??as de ganar el balotaje, el pr??ximo mandatario trasandino anunci?? lo que ser?? a partir del 11 de marzo su gabinete que constar?? de 24 nombres: 14 mujeres y 10 hombres. 'Todos esperan que seamos capaces de hacer de Chile un lugar m??s amable y humano para vivir, donde la dignidad se haga costumbre', dijo.",
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
        info1: "La sudoraci??n es el principal mecanismo de defensa que el cuerpo pone en funcionamiento contra la elevada temperatura corporal. Su manifestaci??n m??s evidente es la p??rdida de agua. Sin embargo, en este proceso se pierden adem??s sales y minerales como sodio, potasio y magnesio, fundamentales para un funcionamiento corporal equilibrado.",
        info2: "Las infusiones y las bebidas alcoh??licas y cafeinadas no son la mejor opci??n para lograr una buena hidrataci??n porque su efecto diur??tico aumenta la p??rdida de agua por orina. Por eso, al hidratarse hay que elegir bebidas sin alcohol y sin az??car, como el agua o jugos naturales de frutas.",
        info3: "Para tener en cuenta: La sed se presenta cuando existe cierto grado de deshidrataci??n, por lo que es indispensable anticiparse a esa sensaci??n. Esto se fundamenta en varios motivos: Con la edad, la sensaci??n de sed se va perdiendo, por lo que es necesario obligarse a beber l??quidos a lo largo del d??a. La mayor incorporaci??n de calor??as eleva la temperatura corporal aumentando la sudoraci??n, por lo que embarazadas, personas con sobrepeso y obesidad tienden a transpirar m??s, por lo cual es esencial mantener una buena hidrataci??n.",
        info4: "Mantenerse hidratado es esencial. Un consumo razonable de l??quidos es de 1,5 a 3 litros diarios, dependiendo de la masa corporal. Como regla general, por cada kilo de peso corporal se requieren 31,5 ml de agua, aumentando levemente su consumo con el aumento de las temperaturas (?? litro diario m??s ser??a suficiente).",
        info5: "Las posibilidades de combinaci??n de las verduras para elaborar ensaladas son ilimitadas y se convierten en la mejor opci??n para un almuerzo r??pido, fresco, nutritivo y liviano. Se pueden combinar con trozos de pollo, carnes y pescados, huevo o queso fresco, que aportan prote??nas y no tantas calor??as, adem??s de semillas, legumbres y cereales integrales. Adem??s, es indispensable recordar que en el verano hay que prestar m??s atenci??n a la conservaci??n de los alimentos. Principalmente los l??cteos, carnes, pollo y el pescado deben conservar la cadena de fr??o para evitar su deterioro. Ingerirlos luego de una interrupci??n de la cadena de fr??o puede ser riesgoso y traer consecuencias para la salud.",
        subtitulo: "En el verano es fundamental acompa??ar la adaptaci??n del organismo a las altas temperaturas con una alimentaci??n e hidrataci??n correctas. Este proceso no solo se reduce a tomar mucha agua y comer liviano sino que se debe hacerlo correctamente.",
        autor: "Carla Perez",
        fuente: "Fuente: Unidiversidad",
        fecha: "19 de Enero",
        comentario: "Para reequilibrar el cuerpo, la hidrataci??n con agua se debe acompa??ar con el consumo de frutas y verduras que aporten el requerimiento adicional de sales minerales. Por ejemplo, el potasio presente en la banana y el tomate y los c??tricos son una excelente fuente de magnesio."
    },
    {
        id: 13,
        categoria: "Sociedad",
        image: sociedadImg4,
        titulo: "Estafas online: advierten sobre el peligro de pactar transacciones por redes sociales",
        info1: "El jefe de la Divisi??n de Delitos Econ??micos, Osvaldo Araujo, recomend??  no pagar se??as on-line y chequear en sitios de internet oficiales de empresas, inmobiliarias y agrupaciones creadas para ese fin. Tampoco hay que dar datos de entidades bancarias, como CBU o clave Token, que es el elemento de seguridad que sirve para confirmar tu identidad cuando se realiza una operaci??n a trav??s de banca electr??nica (home banking).",
        info2: "En los ??ltimos d??as se instal?? en la Mendoza una nueva metodolog??a de estafa utilizando los alquileres de caba??as. En estos casos, los estafadores crean perfiles falsos de propiedades en internet y as?? enga??an a las personas para sustraerles dinero.",
        info3: "Hay que recordar que el Ministerio de Seguridad cuenta con la l??nea ???No compres robado???, la cual es an??nima y est?? disponible las 24 horas para desalentar la compra de objetos robados. Se trata del 0800 222 6111, que permite realizar denuncias y aportar informaci??n sobre sitios de venta ilegal.",
        info4: "Asimismo, se recomienda no comprar objetos en comercios no autorizados y menos a??n si el precio de venta est?? por debajo de su valor de mercado, y exigir siempre la factura o ticket al realizar una compra.",
        subtitulo: "Ante el aumento de estafas, el Ministerio de Seguridad estableci?? una serie de recomendaciones para evitar este tipo de delitos. Asimismo, dieron a conocer una nueva metodolog??a delictiva que ya afect?? a gran cantidad de mendocinos.",
        autor: "Juan Perez",
        fuente: "Fuente: Unidiversidad",
        fecha: "16 de Enero",
        comentario: "Las estafas por pactar transacciones a trav??s de redes sociales son cada vez m??s frecuentes. Es por este motivo que el Ministerio de Seguridad de la Mendoza advierte los peligros y brinda recomendaciones para evitar este tipo de delito."
    },
    {
        id: 14,
        categoria: "Sociedad",
        image: sociedadImg5,
        titulo: "El Garrahan pide a los pediatras prescribir la vacuna contra el Covid",
        info1: "Directivos y profesionales del Hospital Garrahan convocaron a pediatras y equipos de Salud a indicar y continuar concientizando a las familias sobre la necesidad de la vacunaci??n contra el coronavirus, inform?? este viernes el mayor centro sanitario pedi??trico del pa??s, a menos de un mes y medio del comienzo del ciclo lectivo.",
        info2: "'En el contexto actual de la pandemia por Covid-19 en la Argentina, convocamos a nuestros colegas pediatras a indicar la vacunaci??n y a los equipos de salud a continuar concientizando a las familias sobre la necesidad de tener las dosis recomendadas contra la enfermedad', apunt?? hoy el Garrahan en un comunicado oficial. Si bien los ni??os cursan la enfermedad, en la mayor??a de los casos, en forma leve y con menos complicaciones, 'hoy la internaci??n aument?? exponencialmente y la poblaci??n pedi??trica contribuye a la alta circulaci??n viral', manifestaron desde el hospital.",
        info3: "El Hospital Garrahan rese???? que la Sociedad Argentina de Pediatr??a (SAP) recomend?? la vacunaci??n a partir de los 3 a??os, pero 'a??n hay un alto porcentaje de ni??as y ni??os sin vacunarse', afirm??. 'Las vacunas demostraron ser seguras y eficaces. No demorar la vacunaci??n en ni??as y ni??os depende, en gran medida, de la indicaci??n de las y los pediatras y de la promoci??n por el equipo de salud', manifestaron los profesionales del Garrahan. Por su parte, el m??dico pediatra y miembro del Consejo de Administraci??n del Hospital Garrahan, Oscar Trotta, celebr?? la aprobaci??n de la vacuna del laboratorio Pfizer para ni??os de entre 5 y 11 a??os y destac?? que permitir?? ampliar la cobertura en chicos que 'tienen alguna patolog??a de base'.",
        info4: "La ministra de Salud, Carla Vizzotti, anunci?? el jueves que la Administraci??n Nacional de Medicamentos, Alimentos y Tecnolog??a M??dica (Anmat) aprob?? el inmunizante de para esa franja etaria y dijo que el Gobierno compr?? cinco millones de dosis de esa vacuna, de las cuales un mill??n y medio llegar?? al pa??s entre febrero y marzo, y las 3,5 millones de dosis restantes lo har??n entre abril y junio. Al respecto, Trotta destac?? que 'hay una poblaci??n de chicos que tienen alguna patolog??a de base relacionada con su inmunidad que requieren Pfizer', por lo que destac?? la compra del inmunizante en di??logo con Radio AM 530. El especialista sostuvo que 'ni bien llegue la vacuna' comenzar?? su aplicaci??n a la poblaci??n pedi??trica y dijo que las dosis 'a diferencia de la vacuna de Pfizer para adultos, tienen una formulaci??n espec??fica'.Respecto a los avances del programa de vacunaci??n en ni??as y ni??os, el profesional sostuvo que en el Hospital Garrahan vacunaron 'al 100% de nuestra poblaci??n objetivo; con la de Sinopharm de 3 a 11 a??os y con la de Moderna y algunas dosis de Pfizer a los de 12 a 17 a??os y no hemos tenido ning??n efecto adverso secundario importante'.",
        info5: "Trotta precis?? que en el Hospital Garrahan hay unos 90 ni??as y ni??os internados, de los cuales 'el 70 % son chicos que no han recibido la vacuna o tienen un esquema incompleto'.",
        subtitulo: "Desde el mayor centro sanitario pedi??trico del pa??s se??alaron que 'la internaci??n aument?? exponencialmente y la poblaci??n pedi??trica contribuye a la alta circulaci??n viral', a menos de un mes y medio del comienzo del ciclo lectivo.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "Foto: T??lam"
    },
    {
        id: 15,
        categoria: "Medio Ambiente",
        image: ambienteImg1,
        titulo: "El Beagle y sus dos naciones???: un documental que refleja la incidencia del cambio clim??tico en el fin del mundo",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El trabajo se basa en una expedici??n de un grupo cient??fico argentino-chileno. Se estrena el s??bado 22 de enero por la TV P??blica.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "20 de Enero de 2022",
        comentario: "El documental se estrenar?? el s??bado 22 a las 15.30 por la TV P??blica: Foto: Prensa Conicet"
    },
    {
        id: 16,
        categoria: "Medio Ambiente",
        image: ambienteImg2,
        titulo: "Advierten impacto del derretimiento de un iceberg en el Atl??ntico Sur",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El cuerpo de hielo se desprendi?? de la Ant??rtida en 2017 y liber?? millones de tonelada de agua dulce. Alteraci??n del ecosistema.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "20 de Enero de 2022",
        comentario: "La investigaci??n detalla que el volumen de agua desprendido por el iceberg podr??a haber afectado las propiedades del agua y del plancton. Foto: AFP/T??lam"
    },
    {
        id: 17,
        categoria: "Medio Ambiente",
        image: ambienteImg3,
        titulo: "Los estudios en la Ant??rtida argentina sobre contaminaci??n atmosf??rica ganan reconocimiento mundial",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El estudio, dirigido por doctora en F??sica y jefa a cargo del departamento de Ciencias de la Atm??sfera del IAA, Adriana Gulisano, se concentr?? no solo en el monitoreo de la capa de ozono, sino tambi??n en su composici??n atmosf??rica y los gases nocivos producidos por aerosoles dom??sticos.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "20 de Enero de 2022",
        comentario: "Foto: Publicada por T??lam"
    },
    {
        id: 18,
        categoria: "Ciencia y Tecnologia",
        image: tecImg1,
        type: "Principal",
        titulo: "Sectores de la ciencia y la tecnolog??a generaron 20 mil puestos de trabajo desde 2019",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El Centro de Estudios para la Producci??n del Ministerio de Desarrollo Productivo inform?? que este sector encabeza la estructura productiva del pa??s.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "10 de Enero de 2022",
        comentario: "Foto: Publicada por T??lam"
    },
    {
        id: 19,
        categoria: "Ciencia y Tecnologia",
        image: tecImg2,
        titulo: "El Ministerio de Ciencia lanz?? una convocatoria de proyectos para la transici??n energ??tica",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El Cl??ster Renovable Nacional, iniciativa p??blico-privada, cuenta con representaci??n de cinco jurisdicciones, entre ellas Mendoza, y busca favorecer la producci??n de bienes, tecnolog??as y servicios asociados a la generaci??n el??ctrica de fuentes renovables.",
        autor: "Maximiliano Benitez",
        fuente: "Fuente: Telam - Clarin",
        fecha: "15 de Enero de 2022",
        comentario: "Foto: Infocampo"
    },
    {
        id: 20,
        categoria: "Ciencia y Tecnologia",
        image: tecImg3,
        titulo: "Una investigadora del Conicet es la primera mujer premiada por una asociaci??n cient??fica",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El reconocimiento es otorgado desde hace m??s de 20 a??os por la Sociedad Argentina de Cat??lisis. M??nica Casella fue distinguida por su vasta trayectoria en la disciplina sobre petroqu??micas y descontaminaci??n del agua.",
        autor: "Sandra Veloso",
        fuente: "Fuente: Clarin",
        fecha: "21 de Enero de 2022",
        comentario: "Foto: Conicet"
    },
    {
        id: 21,
        categoria: "Sala de Escape",
        image: salaImg1,
        titulo: "El escritor y periodista Cristian Alarc??n gan?? el Premio Alfaguara de Novela",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El jurado de la XXV edici??n seleccion?? a ???El Tercer Para??so??? entre 899 trabajos. Destac?? su vigor narrativo y estructura dual.",
        autor: "Sandra Veloso",
        fuente: "Fuente: Telam - Clarin",
        fecha: "21 de Enero de 2022",
        comentario: "Alarc??n explic?? que la obra fue enteramente escrita en pandemia, en un retiro obligado intentando sobrevivir a una de las cepas m??s temibles de la Covid. Foto: T??lam"
    },
    {
        id: 22,
        categoria: "Sala de Escape",
        image: salaImg2,
        titulo: "Estrenaron una serie de cuentos infantiles en la plataforma p??blica y gratuita Contar",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "???Foquito??? busca fomentar la lectura infantil e incentivar la imaginaci??n. Fue producida por la Sociedad Argentina de Gesti??n de Actores Int??rpretes (Sagai).",
        autor: "Juan Perez",
        fuente: "Fuente: Telam - Clarin",
        fecha: "22 de Enero de 2022",
        comentario: "Actores y actrices, como Violeta Urtizberea se semaron a la propuesta que est?? disponible en la plataforma Contra. Foto: T??lam"
    },
    {
        id: 23,
        categoria: "Sala de Escape",
        image: salaImg3,
        titulo: "El Incaa abre tres nuevas escuelas de cine especializadas en animaci??n y nuevas tecnolog??as",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "Se trata de tres nuevas sedes de la Escuela Nacional de Realizaci??n y Experimentaci??n Cinematogr??fica (Enerc), presente en cada una de las regiones en que se divide el pa??s, y de car??cter libre y gratuito. Funcionar??n en Mar del Plata, Rosario y Comodoro Rivadavia.",
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
        subtitulo: "Con el deporte en segundo plano estas son las ofertas que presenta la Universidad Nacional de Cuyo. Hablamos con Gabriel Rey, coordinador encargado del ??rea.",
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
        subtitulo: "Tras 14 a??os se logr?? destacar a los y las deportistas de Mendoza por parte del C??rculo de Periodistas. La UNCuyo estuvo representada a trav??s de Marina Meneses, jugadora de la U y ganadora de la terna del Roller Hockey.",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        autor: "Juan Perez",
        fuente: "Fuente: Unidiversidad",
        fecha: "22 de Enero de 2022",
        comentario: "Marina Meneses representa a la UNCuyo y tambi??n a la selecci??n argentina. Foto: gentileza."
    },
    {
        id: 26,
        categoria: "Deportes",
        image: depImg3,
        titulo: "Balance positivo en la Direcci??n de Deportes y metas renovadas",
        subtitulo: "Las actividades y disciplinas de la U comienzan a cerrar el tel??n hasta el pr??ximo a??o y Fernando Mart??n, Director del Deporte Federado, pas?? por el aire de El Suplementario contando sobre el 2021.",
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
        tituloCuadroDos: "A 20 a??os de la crisis de 2001: de la defensa de la democracia al cambio en las estructuras partidarias",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        image: artImg1,
        type: "Principal",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        subtitulo: "Cuatro profesionales de la Facultad de Ciencias Pol??ticas y Sociales de la UNCUYO compartieron con Unidiversidad su visi??n sobre las consecuencias de la crisis de 2001.",
        autor: "Veronica Gordillo",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "La crisis de 2001 marc?? el fin del gobierno de la Alianza, cuyos candidatos se impusieron en las elecciones de 1999. Foto: T??lam"
    },
    {
        id: 28,
        categoria: "Sociedad",
        image: CardImg1,
        type: "Card",
        titulo: "Iglesias y Jaliff cuentan c??mo fue pilotear la crisis en Mendoza",
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
        titulo: "Corralito, default, devaluaci??n y pesificaci??n, las escenas finales del modelo que colaps??",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "El 'corralito' marc?? el inicio del fin del gobierno de De la R??a. Si bien se dise???? para intentar salvar el modelo de la Convertibilidad (basado en la paridad 1 a 1 del peso con el d??lar), frenar la ca??da de las reservas y evitar un 'default', sus efectos ocasionaron todo lo contrario.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "Foto: T??lam"
    },
    {
        id: 30,
        image: CardImg3,
        categoria: "Sociedad",
        type: "Card",
        titulo: "El d??a a d??a de la crisis en las tapas de los diarios",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "Diciembre de 2001 marc?? una profunda crisis pol??tica, econ??mica y social. El corralito bancario decretado el 1.?? de diciembre marc?? el inicio del mes m??s dram??tico de la historia argentina reciente.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "Foto: Diario La Rep??blica"
    },
    {
        id: 31,
        image: CardImg3,
        categoria: "Otras Miradas",
        widthCard: "noticia__col__1 noticia__col__3",
        titulo: "La UNCUYO est?? muy bien comunicada",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "La Universidad m??s importante del oeste argentino cuenta con un envidiable sistema comunicacional tanto en lo institucional como en lo medi??tico",
        autor: "Horacio Meil??n",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "UNCUYO REC, un programa con alta aceptaci??n en la Universidad. Foto gentileza Prensa UNCUYO"
    },
    {
        id: 32,
        image: CardImg3,
        categoria: "Otras Miradas",
        widthCard: "noticia__col__1 noticia__col__3",
        titulo: "Chile hoy, Argentina en 2001: ca??das neoliberales",
        info1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic.",
        info2: "Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab. Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info3: "Adipisci totam quae sapiente accusantium omnis architecto quibusdam soluta, libero sit beatae. Magni dolore consequuntur maiores quae minima ea error cupiditate nam qui, possimus iure atque eos tempore doloremque ullam, esse magnam hic. Nesciunt ipsa placeat architecto quaerat aliquid eius facere eum quis in reprehenderit aperiam, molestiae beatae velit alias vero labore blanditiis, et consequatur ullam consectetur odio praesentium ab.",
        info4: "Explicabo sit amet, maxime expedita reprehenderit incidunt ducimus, nostrum aperiam nesciunt laborum labore quos atque molestias quae, ab itaque eveniet architecto! Quam consequuntur, porro ipsa autem ipsum facere perspiciatis sit tenetur atque!",
        subtitulo: "Por Roberto Follari, epistem??logo, docente y doctor en Psicolog??a.",
        autor: "Juan Perez",
        fuente: "Fuente: Telam",
        fecha: "22 de Enero de 2022",
        comentario: "Foto ilustrativa publicada en El Comercio de Peru"
    },
]

export default listaNoticias