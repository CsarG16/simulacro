/**
 * ==========================================================================
 * BANCO DE CURSOS, EXÁMENES Y PREGUNTAS (preguntas.js)
 * ==========================================================================
 * Puedes agregar nuevos cursos y exámenes aquí directamente en formato JSON.
 * Estructura jerárquica:
 *   CURSO -> EXÁMENES -> PREGUNTAS
 * ==========================================================================
 */

const bancoCursos = [
  {
    "curso": "Ingeniería Administrativa",
    "examenes": [
      {
        "id": "control-2-clase",
        "nombre": "Control 2 - Teoría de Clase",
        "descripcion": "40 preguntas exclusivas del contenido y teoría dictada por el profesor en clase",
        "preguntas": [
          {
            "id": 1,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de las siguientes operaciones corresponde(n) a las seis funciones básicas de la empresa identificadas formalmente por Henri Fayol?",
            "opciones": [
              "Funciones técnicas (producción de bienes y servicios)",
              "Funciones comerciales (compra, venta e intercambio)",
              "Funciones financieras (búsqueda y gerencia de capitales)",
              "Funciones de seguridad (protección y preservación de bienes y personas)",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Fayol clasificó las actividades organizacionales en seis funciones esenciales: técnicas, comerciales, financieras, de seguridad, contables y administrativas."
          },
          {
            "id": 2,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el marco de la teoría clásica de Henri Fayol, ¿cuál(es) es(son) el(los) elemento(s) que integra(n) con exactitud la función administrativa?",
            "opciones": [
              "Prever",
              "Organizar",
              "Mandar (dirigir) y coordinar",
              "Controlar",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Para Fayol, la función administrativa consiste en articular cinco componentes operacionales: prever, organizar, dirigir (mandar), coordinar y controlar."
          },
          {
            "id": 3,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) característica(s) intrínseca(s) que define(n) la naturaleza operativa del proceso administrativo:",
            "opciones": [
              "Dinámico: siempre cambia y nunca termina",
              "Integral: exige el cumplimiento articulado de sus cuatro etapas",
              "Autorregulado: evalúa desviaciones y aplica medidas correctivas",
              "Multidisciplinar: requiere la participación de las diversas áreas de la empresa",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Las diapositivas del curso establecen explícitamente cinco rasgos definitorios del proceso administrativo: dinámico, integral, autorregulado, útil y multidisciplinar."
          },
          {
            "id": 4,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Qué etapas del proceso administrativo componen técnicamente la denominada 'fase mecánica o estructural'?",
            "opciones": [
              "Planificación",
              "Dirección",
              "Organización",
              "Control",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              2
            ],
            "explicacion": "La fase mecánica o estructural del proceso administrativo abarca la planificación ('¿qué se quiere hacer? / ¿qué se va a hacer?') y la organización ('¿cómo se va a hacer?')."
          },
          {
            "id": 5,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En la división conceptual del proceso administrativo, ¿cuál(es) etapa(s) conforma(n) de manera exclusiva la 'fase dinámica u operativa'?",
            "opciones": [
              "Planificación y Organización",
              "Organización y Dirección",
              "Dirección y Control",
              "Control y Planificación",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              2
            ],
            "explicacion": "La fase dinámica u operativa agrupa a la dirección ('verificar que se haga') y al control ('¿cómo se ha realizado?')."
          },
          {
            "id": 6,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el nivel de la empresa denominado institucional, ¿cuál(es) es(son) característica(s) primordial(es) del diseño organizacional?",
            "opciones": [
              "Diferenciación de unidades",
              "Formalización mediante reglas y procedimientos",
              "Centralización en la toma de decisiones",
              "Integración",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "En el nivel institucional, el diseño organizacional se enfoca en la superestructura y contiene cuatro propiedades clave: diferenciación, formalización, centralización e integración."
          },
          {
            "id": 7,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) considerado(s) tipo(s) de departamentalización aplicable(s) al nivel intermedio de la estructura organizativa:",
            "opciones": [
              "Departamentalización funcional",
              "Departamentalización por base territorial o geográfica",
              "Departamentalización por clientela",
              "Departamentalización por proyectos o procesos",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "La estructura departamental clasifica divisiones por función, productos/servicios, geografía/territorio, clientes, procesos y proyectos."
          },
          {
            "id": 8,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes aspectos corresponde(n) a la especificación técnica en el diseño de cargos y tareas a nivel operacional?",
            "opciones": [
              "Especificar el contenido formal de la tarea a desempeñar",
              "Especificar el método sistemático para realizarla",
              "Combinar armónicamente las tareas en un cargo determinado",
              "Dictar la política arancelaria exterior de la organización",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "El diseño de puestos a nivel operacional se orienta al contenido de las tareas, la metodología de ejecución y la integración en cargos específicos bajo enfoques clásico, humanista, situacional o sociotécnico."
          },
          {
            "id": 9,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la función y naturaleza del organigrama, ¿cuál(es) afirmación(es) es(son) correcta(s)?",
            "opciones": [
              "Representa gráficamente, de modo total o parcial, la estructura orgánica formal de una entidad",
              "Refleja el conjunto de relaciones que existen entre las unidades o sectores que la componen",
              "Es el instrumento técnico análogo al plano constructivo para estructurar materialmente una empresa",
              "Muestra detalladamente todas las relaciones informales y afectivas espontáneas del personal",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "El organigrama formaliza la arquitectura funcional y jerárquica de la entidad (comparado en clase con el plano de una edificación). Los vínculos informales no forman parte del organigrama formal."
          },
          {
            "id": 10,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) dimensión(es) integra(n) el marco analítico del macroentorno empresarial bajo la metodología PESTE?",
            "opciones": [
              "Dimensión Política y Legal",
              "Dimensión Económica",
              "Dimensión Sociocultural",
              "Dimensión Tecnológica y Ecológica",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "La herramienta PESTE evalúa el macroentorno considerando las dimensiones Política y legal, Económica, Sociocultural, Tecnológica y Ecológica."
          },
          {
            "id": 11,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) fuerza(s) competitiva(s) que forma(n) parte del modelo analítico de la industria propuesto por Michael Porter:",
            "opciones": [
              "Amenaza de nuevos entrantes",
              "Poder de negociación de los proveedores",
              "Poder de negociación de los clientes o compradores",
              "Amenaza de productos o servicios sustitutos",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El marco estructural de Porter analiza cinco fuerzas: competidores del sector (rivalidad), amenaza de entrantes, poder de proveedores, poder de clientes y amenaza de sustitutos."
          },
          {
            "id": 12,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Dentro del análisis de las fuerzas competitivas de Porter, ¿cuál(es) constituye(n) una barrera de entrada que condiciona la 'amenaza de nuevos entrantes'?",
            "opciones": [
              "Economías de escala por el lado de la oferta",
              "Altos costes de cambio para los clientes (switching costs)",
              "Requisitos significativos de capital inicial",
              "Acceso restringido o desigual a los canales de distribución",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Las diapositivas del curso enumeran como barreras directas a nuevos competidores: economías de escala de oferta, beneficios de escala de demanda, costos de cambio, requerimientos de capital, acceso a canales y políticas oficiales restrictivas."
          },
          {
            "id": 13,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿En qué circunstancia(s) específica(s) se incrementa de manera considerable el 'poder de negociación de los proveedores'?",
            "opciones": [
              "Cuando la oferta del insumo está concentrada en pocos proveedores",
              "Cuando existen productos sustitutos idénticos y ampliamente disponibles",
              "Cuando los proveedores suministran productos diferenciados con altos costes de cambio",
              "Cuando los proveedores presentan una amenaza creíble de integración vertical hacia adelante",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              2,
              3
            ],
            "explicacion": "Los proveedores ganan fuerza si están concentrados, sus insumos son diferenciados, no tienen sustitutos sustitutivos inmediatos o amenazan con integrarse hacia adelante en la cadena."
          },
          {
            "id": 14,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En la evaluación estratégica interna, ¿qué áreas funcionales clave conforman el acrónimo del diagnóstico interno AMOFHIT?",
            "opciones": [
              "Administración y Marketing",
              "Operaciones / Logística y Finanzas / Contabilidad",
              "Recursos Humanos y Sistemas de Información",
              "Investigación y Desarrollo (Tecnología)",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El diagnóstico AMOFHIT analiza internamente: Administración, Marketing, Operaciones/logística, Finanzas/contabilidad, Recursos Humanos, Sistemas de Información e Investigación y Desarrollo."
          },
          {
            "id": 15,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquel(los) elemento(s) que define(n) el propósito esencial de la 'visión' dentro del planeamiento estratégico corporativo:",
            "opciones": [
              "Responde a la pregunta fundamental: ¿cuál es nuestro negocio actual?",
              "Determina la dirección de la compañía contestando la pregunta: ¿qué queremos llegar a ser?",
              "Especifica de forma inmediata el cálculo matemático de las liquidaciones de planilla",
              "Constituye un inventario físico exhaustivo de repuestos mecánicos",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "La visión fija el horizonte rector de la organización respondiendo a la interrogante '¿qué queremos llegar a ser?', a diferencia de la misión que cuestiona '¿cuál es nuestro negocio?'."
          },
          {
            "id": 16,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "De acuerdo con el modelo de desarrollo de una 'Misión Superior', ¿cuál(es) pregunta(s) debe(n) responderse formalmente para estructurar su redacción?",
            "opciones": [
              "¿Qué bienes o servicios brindamos y cuál es su propuesta de valor?",
              "¿Quiénes son nuestros clientes y en qué ámbito o localización se encuentran?",
              "¿Contamos con algún proceso, tecnología relevante o perfil de formación de nuestro personal?",
              "¿Cómo es nuestro entorno laboral y cuál es el impacto socioambiental que perseguimos?",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "La estructura metodológica de misión superior revisada en clase consta de 7 preguntas: bienes brindados, clientes/ubicación, propuesta de valor, procesos/tecnología, perfil de personal, clima laboral/valores e impacto social/ambiental."
          },
          {
            "id": 17,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la fase de 'Planeación Operacional' abordada en la primera función del proceso administrativo, ¿cuál(es) es(son) su(s) foco(s) de concentración?",
            "opciones": [
              "Ejecución directa de tareas y operaciones cotidianas",
              "Optimización y maximización de resultados de corto alcance",
              "Definición y aplicación de procedimientos y estándares de eficiencia",
              "Formulación de la superestructura y diseño societario para el próximo decenio",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "La planeación operacional se ocupa del día a día: ejecución de tareas, procedimientos detallados y búsqueda de eficiencia operativa. Las decisiones decenales de superestructura pertenecen al nivel corporativo/institucional."
          },
          {
            "id": 18,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) cualidad(es) que distingue(n) formalmente a la 'organización matricial' dentro de las estructuras de departamentalización:",
            "opciones": [
              "La combinación simultánea de patrones de departamentalización funcional y de proyecto o producto",
              "La existencia de líneas dobles de mando y dependencia jerárquica",
              "La supresión definitiva de los departamentos funcionales técnicos",
              "Un modelo aplicable exclusivamente a negocios que operan sin recurrir al uso de tecnologías de la información",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1
            ],
            "explicacion": "La organización matricial (o de cuadrícula) superpone estructuras de proyectos/productos a departamentos funcionales preexistentes, generando flujos de autoridad compartida o doble mando."
          },
          {
            "id": 19,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Al realizar la matriz de análisis sectorial en un taller automotriz, si se determina que la adquisición masiva de neumáticos reduce costes unitarios, ¿a qué variable y calificación corresponde técnicamente según la cátedra?",
            "opciones": [
              "Economía de escala por el lado de la oferta / Amenaza de nivel bajo (Oportunidad)",
              "Poder de negociación de clientes / Amenaza de nivel alto",
              "Inexistencia de sucedáneos / Debilidad operacional severa",
              "Diferenciación de materias primas / Fortaleza interna",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0
            ],
            "explicacion": "En el caso práctico analizado en las presentaciones, la reducción de costes unitarios en venta de llantas corresponde a 'Economía de escala por el lado de la oferta' dentro de Nuevos Entrantes, tipificada como amenaza de nivel bajo (oportunidad)."
          },
          {
            "id": 20,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) premisa(s) inherente(s) al flujo y diagnóstico funcional interno de una organización:",
            "opciones": [
              "El planeamiento estratégico es un proceso interactivo que requiere coordinación efectiva interfuncional",
              "Todas las organizaciones poseen fortalezas y limitaciones distribuidas de forma asimétrica entre sus áreas de negocio",
              "El diagnóstico interno posibilita fijar con exactitud los recursos disponibles y evaluar las relaciones entre áreas",
              "Ninguna empresa es igualmente fuerte ni igualmente débil en todas sus funciones",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Las diapositivas destacan que la planeación estratégica es un sistema interactivo e integral, y que las empresas manifiestan capacidades dispares entre sus distintas áreas operativas y de soporte."
          },
          {
            "id": 21,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes elementos compone(n) el Sistema de Gestión Estratégica bajo la metodología presentada por el docente?",
            "opciones": [
              "Planeamiento Estratégico Corporativo",
              "Balanced Scorecard Corporativo",
              "Alineamiento de la Estrategia de la Organización",
              "Cultura de ejecución basada en la Gestión por Competencias",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El Sistema de Gestión Estratégica expuesto en las diapositivas integra seis componentes articulares: Planeamiento Estratégico Corporativo, Balanced Scorecard Corporativo, Alineamiento de la Estrategia, Cultura de ejecución por Competencias, Gestión por Indicadores y Financiamiento de la Estrategia."
          },
          {
            "id": 22,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En la secuencia metodológica del Balanced Scorecard (BSC), ¿cuál(es) es(son) la(s) herramienta(s) previa(s) para operativizar la cultura de ejecución?",
            "opciones": [
              "Mapa Estratégico",
              "Matriz Tablero de Comando",
              "Software de gestión",
              "Estatuto societario notarial",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "El flujo metodológico del BSC parte del Mapa Estratégico, se traslada a la Matriz Tablero de Comando y se instrumentaliza mediante Software para desplegar la cultura de ejecución basada en competencias."
          },
          {
            "id": 23,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) considerado(s) nivel(es) o anillo(s) concéntrico(s) de influencia del entorno sobre la organización en el análisis del contexto empresarial:",
            "opciones": [
              "Macrotendencias",
              "Entorno Indirecto (Macroentorno)",
              "Entorno Directo (Microentorno)",
              "Organización",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El esquema de capas del entorno propuesto en el curso ubica a la Organización en el núcleo central, rodeada sucesivamente por el Entorno Directo, el Entorno Indirecto y, en la capa exterior directriz global, las Macrotendencias."
          },
          {
            "id": 24,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cómo se define conceptualmente a las 'Macrotendencias' en el análisis estratégico del contexto de la empresa?",
            "opciones": [
              "Manuales operativos de contingencia inmediata para talleres",
              "Fuerzas directrices a nivel global que afectarán significativamente a la empresa con el paso del tiempo",
              "Presupuestos semestrales de compras operativas",
              "Contratos colectivos de trabajo a nivel de planta",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "Las diapositivas definen a las Macrotendencias textualmente como 'fuerzas directrices a nivel global, las cuales nos afectarán significativamente con el paso del tiempo'."
          },
          {
            "id": 25,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Al analizar la fuerza de 'Nuevos Entrantes' según el modelo industrial, ¿cuál(es) factor(es) actúa(n) como barrera(s) o limitante(s) de acceso?",
            "opciones": [
              "Beneficio de escala por el lado de la demanda (efecto red)",
              "Coste de cambio para los clientes (switching costs)",
              "Ventajas de las empresas establecidas independientemente de su tamaño",
              "Reacción esperada de los competidores existentes",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Todos los elementos listados forman parte de la relación de barreras de entrada analizadas en las diapositivas de la fuerza Nuevos Entrantes de Michael Porter."
          },
          {
            "id": 26,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Bajo qué condición(es) específica(s) se debilita o disminuye el poder de negociación de los proveedores en un sector industrial?",
            "opciones": [
              "Cuando los insumos provistos carecen por completo de productos sustitutos o sucedáneos",
              "Cuando los proveedores dependen fuertemente del sector industrial para sus ventas totales",
              "Cuando cambiar de un proveedor a otro no genera costes significativos para la empresa compradora",
              "Cuando la oferta se encuentra concentrada en un monopolio internacional",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1,
              2
            ],
            "explicacion": "El poder de los proveedores se reduce cuando dependen de los ingresos del sector para sobrevivir y cuando los clientes enfrentan costes de cambio casi nulos. La concentración y la inexistencia de sucedáneos maximizan el poder del proveedor."
          },
          {
            "id": 27,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) matriz(ces) o herramienta(s) analítica(s) que integra(n) el circuito metodológico del análisis estratégico avanzado del curso:",
            "opciones": [
              "Matriz FLOR (Fortalezas, Limitaciones, Oportunidades, Retos)",
              "Matriz MIE (Matriz del Interés Estratégico / Matriz Interna-Externa)",
              "Matriz MPC (Matriz del Perfil Competitivo)",
              "Matriz PEYEA y Matriz BCG",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El diagrama de matrices del curso integra formalmente en circuito continuo a: MGE, FLOR, MIE, MPC, PEYEA y BCG."
          },
          {
            "id": 28,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el caso aplicativo de la 'Empresa de Servicios Logísticos GUIGA', ¿cuál(es) de los siguientes factores fue(ron) evaluado(s) para su posicionamiento?",
            "opciones": [
              "Experiencia administrativa y técnica al brindar el servicio",
              "Ventajas tecnológicas y competitividad de los precios",
              "Calidad del servicio y cobertura nacional",
              "Flexibilidad en los procesos de servicio y publicidad",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "La presentación del caso GUIGA lista explícitamente ocho variables competitivas: experiencia administrativa, técnica de servicio, ventajas tecnológicas, competitividad de precios, calidad, publicidad, cobertura nacional y flexibilidad de procesos."
          },
          {
            "id": 29,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) el(los) elemento(s) que describe(n) formalmente a la 'Intención Estratégica' en el marco del planeamiento corporativo:",
            "opciones": [
              "El compromiso irrevocable de ganar en el ambiente competitivo",
              "Una descripción detallada de los métodos contables de amortización",
              "La liquidación forzosa de pasivos corrientes en menos de noventa días",
              "El organigrama nominal de puestos subalternos de mantenimiento",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0
            ],
            "explicacion": "El texto teórico del curso define a la intención estratégica textualmente como el 'compromiso de ganar en el ambiente competitivo'."
          },
          {
            "id": 30,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de las siguientes interrogantes orienta(n) de manera específica la delimitación conceptual de la Misión de una empresa?",
            "opciones": [
              "¿Para qué existe esta organización en el contexto social en que se encuentra?",
              "¿Cuál es nuestro negocio?",
              "¿En qué negocio estoy?",
              "¿Qué queremos llegar a ser en el futuro?",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "La misión contesta para qué existe la empresa en la sociedad y '¿cuál es nuestro negocio? / ¿en qué negocio estoy?'. La pregunta '¿qué queremos llegar a ser?' concierne con exclusividad a la Visión corporativa."
          },
          {
            "id": 31,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) el(los) efecto(s) psicológico(s) e institucional(es) que persigue la formulación efectiva de una Misión organizacional:",
            "opciones": [
              "Despertar sentimientos y emociones positivas en relación con la empresa",
              "Generar la convicción de que la organización es exitosa y sabe con claridad a dónde se dirige",
              "Transmitir la percepción de que la empresa es merecedora de apoyo, tiempo e inversión",
              "Fomentar la subordinación irrestricta mediante medidas punitivas de personal",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "La clase subraya que una misión efectiva despierta sentimientos y emociones, generando la impresión de que la organización sabe a dónde va y merece respaldo, tiempo e inversión de sus audiencias."
          },
          {
            "id": 32,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el marco del diagnóstico interno F-L (Fortalezas - Limitaciones), ¿qué representa el reconocimiento de los recursos organizacionales?",
            "opciones": [
              "Identificar el inventario de activos, capacidades y talento disponibles para formular estrategias",
              "Asumir que todas las áreas funcionales de la empresa son homogéneamente fuertes",
              "Ignorar las fallas operacionales para no comprometer el clima laboral",
              "Eliminar la necesidad de coordinar entre las diferentes áreas funcionales",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0
            ],
            "explicacion": "El diagnóstico interno busca identificar los recursos de los cuales la organización dispone para evaluar sus fortalezas y limitaciones, entendiendo que ninguna empresa es igualmente fuerte ni débil en todas sus áreas."
          },
          {
            "id": 33,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de las siguientes áreas representa(n) la letra 'H' y la letra 'I' en la matriz diagnóstica AMOFHIT?",
            "opciones": [
              "Hacienda pública e Infraestructura industrial",
              "Higiene ocupacional e Inversión de cartera",
              "Recursos Humanos y Sistemas de Información",
              "Habilidades gerenciales e Importaciones",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              2
            ],
            "explicacion": "En el modelo funcional AMOFHIT de las clases, la letra H simboliza 'Recursos Humanos' (Human Resources) y la letra I simboliza 'Sistemas de Información'."
          },
          {
            "id": 34,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la formulación estratégica, ¿por qué se sostiene en cátedra que el planeamiento no debe operar como un flujo rígido de una sola vía descendente?",
            "opciones": [
              "Porque los niveles directivos carecen de potestad formal sobre las funciones operativas",
              "Porque es un proceso interactivo que requiere una coordinación efectiva entre todas las áreas funcionales",
              "Porque la empresa debe operar sin fijar metas ni presupuestos formales",
              "Porque las regulaciones gubernamentales invalidan los planes institucionales",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "Las diapositivas remarcan que aunque tradicionalmente se visualiza como un flujo descendente de estrategias y políticas, el planeamiento es esencialmente un 'proceso interactivo que requiere la coordinación efectiva entre todas las áreas funcionales'."
          },
          {
            "id": 35,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) variable(s) que compone(n) el análisis del entorno externo en el modelo O-R introducido en las clases:",
            "opciones": [
              "Oportunidades",
              "Retos (o Riesgos)",
              "Rendimientos marginales",
              "Obligaciones societarias",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1
            ],
            "explicacion": "En las presentaciones del profesor, el análisis externo se sintetiza bajo la nomenclatura O-R, correspondiente a Oportunidades y Retos (o Riesgos), emparejado con el análisis interno F-L (Fortalezas y Limitaciones)."
          },
          {
            "id": 36,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "De acuerdo con el enfoque del profesor Michael Porter, ¿qué función estratégica cumple el análisis de la estructura de una industria?",
            "opciones": [
              "Calcular de manera automática el devengado impositivo mensual",
              "Evaluar el atractivo intrínseco del sector y determinar la posición de la compañía dentro de él",
              "Sustituir por completo la toma de decisiones por algoritmos determinísticos cerrados",
              "Garantizar la desaparición de rivales comerciales sin necesidad de inversión",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "Porter establece que la formulación estratégica requiere analizar el atractivo del sector industrial y la posición competitiva que la empresa ocupa o busca ocupar dentro de él."
          },
          {
            "id": 37,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) el(los) componente(s) transversal(es) que establece(n) el clima organizacional y orienta(n) los límites conductuales de la estrategia corporativa:",
            "opciones": [
              "Orientación y valores",
              "Gráficas de ruta crítica PERT",
              "Asiento de ajuste contable",
              "Balance general semestral",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0
            ],
            "explicacion": "La teoría revisada en el Capítulo 5 y las clases señala expresamente que la orientación y los valores institucionales establecen el clima organizacional y definen la dirección ética y estratégica de la compañía."
          },
          {
            "id": 38,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Dentro de la arquitectura estratégica de la empresa, ¿cuál(es) etapa(s) se desarrolla(n) una vez concluido el análisis interno F-L y externo O-R?",
            "opciones": [
              "Formulación, validación y selección de objetivos estratégicos",
              "Alineamiento y presentación final de objetivos estratégicos",
              "Diseño e implantación del Balanced Scorecard",
              "Liquidación voluntaria de activos fijos",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "El diagrama metodológico sitúa inmediatamente después de los diagnósticos F-L y O-R a la formulación/selección de objetivos, su posterior alineamiento y su ejecución mediante el BSC."
          },
          {
            "id": 39,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el análisis de las cinco fuerzas competitivas, ¿cuál(es) es(son) factor(es) que intensifica(n) de manera directa la 'Rivalidad entre los competidores existentes'?",
            "opciones": [
              "Gran número de competidores de igual tamaño o poder de mercado",
              "Crecimiento lento o estancamiento de la demanda en el sector industrial",
              "Falta de diferenciación en los productos comercializados",
              "Elevadas barreras de salida que retienen a empresas no rentables",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "La rivalidad competitiva en el centro del modelo de Porter se exacerba cuando existen muchos competidores equilibrados, escaso crecimiento de mercado, productos comoditizados y altas barreras para abandonar la industria."
          },
          {
            "id": 40,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) considerado(s) un propósito central de implementar la 'Gestión por Competencias' dentro del modelo estratégico de la organización:",
            "opciones": [
              "Alinear las conductas y habilidades individuales del personal con la ejecución efectiva de la estrategia",
              "Uniformizar artificialmente los salarios con independencia del rendimiento obtenido",
              "Sustituir el análisis de las fuerzas macroambientales del PESTE",
              "Eliminar formalmente todos los puestos de nivel de supervisión",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0
            ],
            "explicacion": "En el esquema del Sistema de Gestión Estratégica, la cultura de ejecución sustentada en competencias busca que el capital humano desarrolle las destrezas requeridas para materializar los objetivos estratégicos."
          }
        ]
      },
      {
        "id": "simulacro-general-koontz",
        "nombre": "Simulacro General (Libro Koontz)",
        "descripcion": "60 preguntas completas sobre fundamentos y escuelas de administración",
        "preguntas": [
          {
            "id": 1,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes enunciados describe(n) el concepto formal de 'organización' según Harold Koontz y Heinz Weihrich?",
            "opciones": [
              "Un grupo de personas que trabajan en conjunto para crear valor agregado",
              "Una entidad orientada exclusivamente a la obtención de lucro financiero",
              "Una estructura intencional y formal de funciones o puestos",
              "Cualquier agrupación de individuos sin metas predeterminadas",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              2
            ],
            "explicacion": "Koontz y Weihrich definen organización como un grupo de personas que colaboran para generar valor agregado, y en términos operativos, como una estructura intencional y formalizada de puestos o funciones. No se restringe únicamente al lucro mercantil ni a grupos sin objetivos."
          },
          {
            "id": 2,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes autores clásicos es(son) considerado(s) el principal precursor de la psicología industrial aplicada a la selección de personal y la fatiga laboral?",
            "opciones": [
              "Henri Fayol",
              "Max Weber",
              "Hugo Münsterberg",
              "Chester Barnard",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              2
            ],
            "explicacion": "Hugo Münsterberg es reconocido en la historia del pensamiento administrativo como el padre y pionero indiscutible de la aplicación de la psicología en la industria y la administración."
          },
          {
            "id": 3,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) habilidad(es) descrita(s) por Robert Katz que representa(n) la capacidad de contemplar la organización como un todo integral y reconocer las interrelaciones entre sus partes:",
            "opciones": [
              "Habilidad técnica",
              "Habilidad humana",
              "Habilidad conceptual",
              "Habilidad de mando operativo",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              2
            ],
            "explicacion": "La habilidad conceptual consiste en coordinar e integrar todos los intereses y las actividades de la organización con una perspectiva global, cobrando su mayor peso en la alta gerencia."
          },
          {
            "id": 4,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el modelo sistémico del proceso administrativo, ¿cuál(es) de los siguientes elementos representa(n) productos o resultados (outputs) generados hacia el ambiente externo?",
            "opciones": [
              "Bienes y servicios",
              "Ganancias o utilidades financieras",
              "Satisfacción de los empleados y clientes",
              "Reglamentos y políticas gubernamentales",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "En el modelo de sistemas abiertos, las salidas o productos del proceso administrativo de transformación corresponden a bienes, servicios, utilidades, satisfacción laboral e integración de metas. Las regulaciones gubernamentales constituyen limitaciones o insumos externos del entorno."
          },
          {
            "id": 5,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) el(los) principio(s) que sostiene(n) que la práctica administrativa eficaz debe amoldarse y adecuarse a las contingencias del contexto interno y externo, negando la existencia de recetas de gestión absolutas y universales:",
            "opciones": [
              "Enfoque del comportamiento interpersonal",
              "Enfoque de la teoría de sistemas cerrados",
              "Enfoque de contingencias o situacional",
              "Enfoque operacional normativo",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              2
            ],
            "explicacion": "El enfoque de contingencias (o enfoque situacional) sostiene que la acción gerencial depende rigurosamente del conjunto de circunstancias o parámetros propios de cada situación."
          },
          {
            "id": 6,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes roles corresponde(n) a la categoría de roles interpersonales en la taxonomía directiva planteada por Henry Mintzberg?",
            "opciones": [
              "Rol de figura central (o cabeza visible)",
              "Rol de enlace",
              "Rol de difusor",
              "Rol de líder",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              3
            ],
            "explicacion": "Mintzberg clasifica los roles interpersonales en: cabeza visible (figura ceremonial), líder y enlace. El rol de difusor pertenece formalmente al grupo de roles informativos."
          },
          {
            "id": 7,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) considerada(s) una de las 14 reglas o principios universales de la administración postulados por Henri Fayol:",
            "opciones": [
              "Remuneración equitativa del personal",
              "Jerarquía (línea de autoridad o cadena escalar)",
              "Orden social y material",
              "Estabilidad en la permanencia del personal",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Los cuatro conceptos señalados forman parte integral de la lista de los catorce principios clásicos enunciados por Henri Fayol para asegurar el buen funcionamiento del cuerpo administrativo."
          },
          {
            "id": 8,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes factores integra(n) el ambiente tecnológico externo al que se enfrenta la gerencia moderna?",
            "opciones": [
              "El estado general del conocimiento científico y técnico",
              "Las aplicaciones prácticas de la robótica y la inteligencia artificial",
              "Las innovaciones de software, comercio móvil y plataformas de comunicación en red",
              "La política tributaria sobre el impuesto a la renta",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "El entorno tecnológico agrupa la ciencia organizada, el desarrollo técnico, la automatización y los medios computacionales y móviles. El régimen tributario pertenece exclusivamente al ambiente político-legal y económico."
          },
          {
            "id": 9,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) teoría(s) moral(es) que afirma(n) que los deberes morales se fundamentan primordialmente en garantizar los derechos civiles y libertades inalienables de las personas:",
            "opciones": [
              "Teoría utilitaria del bienestar social",
              "Teoría basada en los derechos",
              "Teoría de la contingencia ética",
              "Teoría de la justicia procesal",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "La teoría basada en los derechos sostiene que todos los individuos poseen facultades básicas (como el derecho a la vida, a la privacidad y a la verdad) que deben ser protegidas al tomar cualquier decisión."
          },
          {
            "id": 10,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la figura institucional del 'ombudsman' en las organizaciones contemporáneas, ¿cuál(es) es(son) su(s) función(es) principal(es)?",
            "opciones": [
              "Investigar de manera imparcial quejas y preocupaciones de los empleados sobre injusticias o dilemas éticos",
              "Elaborar los estados contables obligatorios y balances financieros del ejercicio",
              "Proveer un canal confidencial y neutral para resolver conflictos internos",
              "Imponer sanciones disciplinarias ejecutivas y despidos directos de personal",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              2
            ],
            "explicacion": "El ombudsman actúa como un mediador confidencial e investigador neutral de inquietudes o desviaciones éticas en la firma. No reemplaza a la gerencia en la aplicación de sanciones punitivas ni asume funciones contables."
          },
          {
            "id": 11,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes argumentos respalda(n) a favor la asunción de una postura proactiva de Responsabilidad Social Empresarial (RSE)?",
            "opciones": [
              "Las expectativas del público y la comunidad demandan una mayor participación de las empresas",
              "La creación de una mejor imagen corporativa ante clientes e inversores",
              "Prevenir o desincentivar la creación de regulaciones gubernamentales excesivas y restrictivas",
              "Asegurar a corto plazo la total desgravación de los impuestos empresariales",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "Los argumentos teóricos que favorecen la RSE incluyen la respuesta a las expectativas de la opinión pública, la mejora reputacional y la reducción de futuras presiones normativas o fiscalizadoras del Estado. No elimina las obligaciones fiscales de la empresa."
          },
          {
            "id": 12,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) orientación(es) gerencial(es) en la cual la administración de las subsidiarias extranjeras replica fielmente las prácticas, métodos y personal directivo exclusivo de la casa matriz:",
            "opciones": [
              "Orientación policéntrica",
              "Orientación geocéntrica",
              "Orientación regiocéntrica",
              "Orientación integradora multinacional",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              4
            ],
            "explicacion": "La definición corresponde con rigor al enfoque u 'Orientación etnocéntrica'. Dado que dicha opción no se encuentra explicitada en las alternativas A, B, C ni D, la respuesta correcta es 'Ninguna de las anteriores'."
          },
          {
            "id": 13,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el marco de la investigación cultural de Geert Hofstede, ¿qué mide formalmente el índice de 'distanciamiento del poder'?",
            "opciones": [
              "El grado de formalidad burocrática en la comunicación interdepartamental",
              "El grado en que los miembros menos poderosos de una sociedad aceptan y esperan que el poder se distribuya de manera desigual",
              "La preferencia de una sociedad por el trabajo en equipo cooperativo frente al individual",
              "La velocidad técnica con que una organización implementa nuevas tecnologías",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "El distanciamiento del poder (power distance) mide el nivel de conformidad y tolerancia cultural que exhiben los miembros ante las asimetrías jerárquicas y la concentración de la autoridad formal."
          },
          {
            "id": 14,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de las siguientes constituye(n) una modalidad formal de interacción y penetración de mercados extranjeros para una empresa internacional?",
            "opciones": [
              "Exportación e importación de bienes o insumos",
              "Contratos de administración para gestionar firmas en el país anfitrión",
              "Contratos de licencia o franquicias de producción y comercialización",
              "Sociedades en participación o empresas conjuntas (joint ventures)",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El Capítulo 3 describe exhaustivamente estos métodos de entrada internacional: el comercio exterior tradicional, los contratos gerenciales, las licencias y la inversión asociada mediante coinversiones (joint ventures) o subsidiarias propias."
          },
          {
            "id": 15,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquel(los) bloque(s) o tratado(s) comercial(es) de integración económica formalizado(s) entre países del continente asiático:",
            "opciones": [
              "TLCAN",
              "Mercosur",
              "Unión Europea (UE)",
              "Comunidad Andina",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              4
            ],
            "explicacion": "El principal bloque asiático abordado en este apartado es la ASEAN (Asociación de Naciones del Sudeste Asiático). Al no constar en las alternativas presentadas, la respuesta es 'Ninguna de las anteriores'."
          },
          {
            "id": 16,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la filosofía de la calidad planteada por W. Edwards Deming, ¿cuál(es) premisa(s) es(son) conceptualmente válida(s)?",
            "opciones": [
              "Se debe mejorar de forma continua e incesante el sistema de producción y de servicio",
              "La inspección masiva al final de la línea es la única garantía indiscutible de excelencia",
              "Se debe eliminar el miedo en el clima laboral para que los empleados colaboren con eficacia",
              "Derribar las barreras departamentales para fomentar el trabajo en equipo",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              2,
              3
            ],
            "explicacion": "Dentro de sus 14 puntos célebres, Deming promueve la mejora continua de procesos, desterrar el miedo del personal y articular el trabajo interdepartamental. Señaló expresamente que debe abandonarse la dependencia de la inspección masiva para lograr calidad, trasladando el control a la prevención."
          },
          {
            "id": 17,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el modelo de la ventaja competitiva de las naciones expuesto por Michael Porter, ¿a qué refiere el determinante de 'sectores afines y de apoyo'?",
            "opciones": [
              "A la subvención económica y rescate financiero permanente otorgado por el Estado nacional",
              "A la presencia en el país de industrias proveedoras e industrias correlacionadas internacionalmente competitivas",
              "Al control sindical de las ramas productivas clave del país",
              "A la paridad cambiaria de la divisa respecto a monedas de reserva global",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "Los sectores afines y de apoyo corresponden a las redes locales o nacionales de proveedores eficientes y sectores complementarios que facilitan insumos, innovación compartida y economías de aglomeración competitiva (clusters)."
          },
          {
            "id": 18,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de las siguientes características corresponde(n) al modelo gerencial japonés y la Teoría Z analizados en la administración comparada?",
            "opciones": [
              "Empleo a largo plazo y estabilidad en la contratación laboral",
              "Toma de decisiones individualista y autocrática",
              "Preocupación holística integral por el individuo y su entorno familiar",
              "Proceso de toma de decisiones consensuado y participativo",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              2,
              3
            ],
            "explicacion": "La administración japonesa y la Teoría Z (Ouchi) se distinguen por el vínculo a largo plazo, la toma consensuada de decisiones mediante consulta grupal y el enfoque humano integral hacia el colaborador. La toma de decisiones autocrática e individualizada es típica del modelo tradicional occidental o burocrático."
          },
          {
            "id": 19,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquel(los) enfoque(s) de la administración de la calidad reconocido(s) internacionalmente para auditar y certificar sistemas de gestión estandarizados en organizaciones:",
            "opciones": [
              "Normas ISO 9000",
              "Premio Nacional de Calidad Malcolm Baldrige",
              "Modelo del Premio Europeo de la Calidad (EFQM)",
              "Índice de Precios al Consumidor (IPC)",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "El Capítulo 3 subraya como herramientas globales de calidad y excelencia operativa a la familia de estándares ISO 9000, el galardón Malcolm Baldrige estadounidense y el modelo de excelencia europeo EFQM. El IPC es un indicador macroeconómico ajeno a la calidad."
          },
          {
            "id": 20,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la noción de 'sensibilidad social' en contraposición con la 'responsabilidad social', ¿cuál(es) proposición(es) es(son) correcta(s)?",
            "opciones": [
              "La sensibilidad social enfatiza los deberes morales teóricos a largo plazo exclusivamente",
              "La sensibilidad social se centra en la capacidad práctica de responder operativamente a las presiones del entorno",
              "La sensibilidad social presupone una actitud directiva más reactiva y de acción inmediata frente a demandas comunitarias",
              "La sensibilidad social anula cualquier necesidad de apegarse a las regulaciones de la ley",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1,
              2
            ],
            "explicacion": "La sensibilidad social (social responsiveness) acentúa la capacidad práctica, operativa y de respuesta pronta de la corporación para relacionarse con su entorno dinámico frente a reclamos concretos, a diferencia de la conceptualización ética más abstracta de la responsabilidad social formal."
          },
          {
            "id": 21,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Según Robert L. Katz, ¿cuál(es) tipo(s) de habilidad(es) deben poseer los administradores para ser efectivos?",
            "opciones": [
              "Habilidades técnicas",
              "Habilidades humanas",
              "Habilidades conceptuales",
              "Habilidad de diseño",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Robert L. Katz identificó originalmente tres habilidades básicas (técnicas, humanas y conceptuales), a las cuales los autores añaden la habilidad de diseño (capacidad de resolver problemas para el beneficio de la empresa)."
          },
          {
            "id": 22,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿En qué nivel(es) de la jerarquía organizacional resultan ser de máxima importancia las habilidades técnicas?",
            "opciones": [
              "Alta dirección",
              "Mandos medios",
              "Nivel corporativo global",
              "Supervisores de primera línea",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              3
            ],
            "explicacion": "De acuerdo con el modelo de Katz y Koontz, las habilidades técnicas son más decisivas e indispensables en el nivel de supervisión operativa y van perdiendo relevancia relativa a medida que se asciende a la alta dirección."
          },
          {
            "id": 23,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes enunciados define(n) el propósito primordial y común de todos los gerentes, tanto en organizaciones lucrativas como no lucrativas?",
            "opciones": [
              "Crear valor agregado o un excedente",
              "Maximizar exclusivamente la riqueza monetaria inmediata de los accionistas",
              "Diseñar y mantener un ambiente propicio para que los individuos cumplan metas de manera eficaz",
              "Eliminar por completo el conflicto interpersonal en los equipos de trabajo",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              2
            ],
            "explicacion": "La meta básica de todo administrador es establecer y conservar un ambiente óptimo para cumplir objetivos y generar valor agregado o superávit (excedente). En organizaciones no lucrativas, dicho excedente se traduce en la satisfacción de necesidades sociales."
          },
          {
            "id": 24,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) considerado(s) innovador(es) pionero(s) de la administración científica por desarrollar los estudios de tiempos y movimientos, la gráfica de flujo y la psicología aplicada al obrero:",
            "opciones": [
              "Frank y Lillian Gilbreth",
              "Hugo Münsterberg",
              "Max Weber",
              "Chester Barnard",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0
            ],
            "explicacion": "Frank Gilbreth (junto con su esposa Lillian) perfeccionó los estudios de tiempos y movimientos. Münsterberg fue precursor de la psicología industrial, Weber de la teoría de la burocracia y Barnard de los sistemas cooperativos."
          },
          {
            "id": 25,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes elementos forma(n) parte formal del enfoque de 'sistemas cooperativos sociales' planteado por Chester Barnard?",
            "opciones": [
              "La organización vista como un sistema de actividades conscientemente coordinadas de dos o más personas",
              "La necesidad indispensable de disposición para cooperar entre los miembros",
              "La presencia irrestricta de un propósito común u objetivo compartido",
              "El desinterés total por los sistemas de comunicación interpersonal",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "Barnard conceptualizó a la empresa como un sistema social cooperativo cuyos componentes vitales son: la disposición a cooperar, el propósito común y la comunicación interna. Desestimar la comunicación contradice su teoría."
          },
          {
            "id": 26,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) el(los) enfoque(s) de análisis administrativo que se concentra(n) en el rediseño radical de los procesos del negocio para conseguir mejoras espectaculares en costos, calidad, servicio y rapidez:",
            "opciones": [
              "Enfoque de la teoría de decisiones",
              "Enfoque de reingeniería",
              "Enfoque sociotécnico",
              "Enfoque matemático u operacional cuantitativo",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "El enfoque de reingeniería (popularizado por Hammer y Champy) se centra expresamente en el replanteamiento fundamental y el rediseño radical de procesos clave."
          },
          {
            "id": 27,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "De acuerdo con el modelo de análisis del enfoque operacional (del proceso administrativo), ¿cuál(es) es(son) su(s) característica(s) fundamental(es)?",
            "opciones": [
              "Reconoce un núcleo central de conocimientos exclusivo de la labor gerencial",
              "Absorbe e integra conceptos pertinentes de disciplinas como la psicología, sociología y matemáticas",
              "Se estructura en torno a las funciones universales de planear, organizar, integrar personal, dirigir y controlar",
              "Rechaza por completo el empleo de aportes de la teoría de sistemas",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "El enfoque operacional posee un núcleo propio integrado por las funciones gerenciales y actúa como un marco integrador y ecléctico que asimila conocimientos útiles de otras ciencias."
          },
          {
            "id": 28,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) variable(s) que integra(n) el proceso de transformación en el modelo de sistemas abiertos del proceso administrativo:",
            "opciones": [
              "La función de planear",
              "La función de integrar personal",
              "La función de dirigir y controlar",
              "Los insumos y materias primas del entorno",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "En el modelo sistémico de Koontz, el proceso de transformación está conformado por la ejecución integrada de las funciones administrativas gerenciales (planear, organizar, integrar personal, dirigir y controlar). Los insumos son las entradas previas a dicho proceso."
          },
          {
            "id": 29,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes grupos representa(n) 'solicitantes' o reclamantes legítimos cuyos requerimientos ingresan como insumos a la organización?",
            "opciones": [
              "Empleados",
              "Consumidores",
              "Accionistas",
              "Gobiernos y comunidad",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El modelo sistémico abierto considera como grupos solicitantes (stakeholders) a empleados, consumidores, accionistas, proveedores, comunidad y entidades gubernamentales, cuyas demandas deben conciliarse."
          },
          {
            "id": 30,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) teoría(s) ética(s) normativa(s) que sostiene(n) que las decisiones morales deben juzgarse exclusivamente por sus consecuencias prácticas, procurando el mayor bien para el mayor número de personas:",
            "opciones": [
              "Teoría de los derechos",
              "Teoría de la justicia distributiva",
              "Teoría utilitaria",
              "Teoría de la virtud aristotélica",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              2
            ],
            "explicacion": "La teoría utilitaria fundamenta la moralidad del acto en sus consecuencias, priorizando el bienestar o beneficio de la mayoría. La teoría de los derechos prioriza libertades fundamentales y la de la justicia busca equidad e imparcialidad."
          },
          {
            "id": 31,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Bajo la teoría de la justicia en la ética administrativa, ¿cuál(es) postulado(s) debe(n) respetarse?",
            "opciones": [
              "Las reglas deben administrarse con equidad, justicia e imparcialidad",
              "Debe haber una distribución equitativa de beneficios y cargas según criterios justos",
              "Los individuos deben recibir una indemnización si sufren un daño injusto por culpa ajena",
              "La moralidad depende única y exclusivamente de la maximización de la utilidad neta",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "La teoría de la justicia exige equidad procesal, justicia distributiva y justicia compensatoria. Vincular la justicia meramente a la maximización de beneficios económicos es propio del enfoque utilitario."
          },
          {
            "id": 32,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquel(los) argumento(s) habitualmente esgrimido(s) en contra de que las empresas asuman una responsabilidad social directa más allá del negocio:",
            "opciones": [
              "Viola la búsqueda primordial de la maximización de ganancias para los accionistas",
              "Los costos derivados de la acción social se trasladan finalmente al consumidor en precios más altos",
              "Los administradores de empresas carecen frecuentemente de competencias para resolver problemas sociales",
              "Reduce el poder social global que la empresa ejerce sobre la sociedad civil",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "Entre los argumentos en contra citados por Milton Friedman y otros teóricos destacan la dilución del propósito de lucro, el sobrecosto a clientes y la falta de habilidades directivas en políticas sociales. El argumento sobre el poder indica que intervenir aumentaría (no reduciría) el poder corporativo de forma riesgosa."
          },
          {
            "id": 33,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la ética en la administración, ¿cuál(es) factor(es) promueve(n) el fomento y consolidación de normas éticas en las empresas contemporáneas?",
            "opciones": [
              "La formulación y difusión de un código formal de ética corporativo",
              "La creación explícita de comités de ética",
              "La impartición regular de programas de capacitación ética a directivos y empleados",
              "El respaldo activo, ejemplo visible y compromiso del liderazgo superior",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Institucionalizar la conducta ética requiere de políticas claras (códigos), mecanismos de supervisión (comités), entrenamiento continuo y, de forma indispensable, el ejemplo conductual de la alta dirección."
          },
          {
            "id": 34,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) forma(s) en que las organizaciones pueden internacionalizarse y extender sus actividades hacia los mercados exteriores:",
            "opciones": [
              "Exportación e importación de bienes",
              "Contratos de concesión de licencias y franquicias",
              "Alianzas estratégicas y empresas conjuntas (joint ventures)",
              "Inversión extranjera directa mediante subsidiarias",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El texto documenta la escala de internacionalización: inicia comúnmente con comercio exterior (exportación/importación), avanza hacia licencias o franquicias, joint ventures y finaliza en inversión directa en el extranjero."
          },
          {
            "id": 35,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a las diferencias entre las prácticas gerenciales de Japón y Estados Unidos según la teoría administrativa, ¿cuál(es) proposición(es) es(son) correcta(s)?",
            "opciones": [
              "El empleo tradicional en las grandes empresas japonesas tendía a ser de por vida",
              "La toma de decisiones en Japón utiliza frecuentemente la técnica por consenso (Ringisho)",
              "La toma de decisiones en Estados Unidos tiende a ser predominantemente individual",
              "La evaluación del desempeño en Estados Unidos se orienta con frecuencia al corto plazo",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El modelo administrativo japonés histórico se distingue por el empleo a largo plazo y decisión colectiva consensuada, en contraposición con el enfoque estadounidense de movilidad laboral, responsabilidad individual y resultados a corto plazo."
          },
          {
            "id": 36,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) considerado(s) uno de los catorce principios generales de la administración formulados por Henri Fayol:",
            "opciones": [
              "Unidad de mando",
              "Unidad de dirección",
              "Subordinación del interés individual al general",
              "Espíritu de equipo (esprit de corps)",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "Fayol estableció 14 principios universales de la administración, dentro de los cuales figuran explícitamente la unidad de mando, unidad de dirección, subordinación del interés particular y espíritu de cuerpo, entre otros."
          },
          {
            "id": 37,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el enfoque de contingencias o situacional del pensamiento administrativo, ¿cuál(es) es(son) su(s) postulado(s) central(es)?",
            "opciones": [
              "Existe un principio universal único y absoluto que garantiza el éxito gerencial idéntico en cualquier circunstancia",
              "La práctica gerencial óptima depende directamente de las circunstancias peculiares de cada situación",
              "Toma en cuenta la estrecha interrelación entre la estructura organizacional y las condiciones del ambiente externo",
              "Desestima por completo cualquier uso previo de modelos teóricos de planeación",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1,
              2
            ],
            "explicacion": "La teoría situacional o de contingencias subraya que no existe un método perfecto y absoluto para todas las organizaciones; la técnica administrativa aplicable depende de las variables contextuales y ambientales internas y externas."
          },
          {
            "id": 38,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) la(s) razón(es) por la(s) cual(es) la comunicación abierta ejerce una función integradora indispensable dentro del sistema administrativo:",
            "opciones": [
              "Enlaza a la empresa abierta con su entorno y los diversos grupos de interés",
              "Permite articular y coordinar secuencialmente las funciones administrativas entre sí",
              "Facilita la modificación o adaptación del comportamiento organizacional ante cambios del mercado",
              "Garantiza de forma automática y matemática la rentabilidad financiera del ejercicio",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "La comunicación es el medio integrador en el modelo de sistemas: relaciona las funciones gerenciales, conecta a la organización con su entorno y facilita el flujo de información para la toma de decisiones. No puede garantizar por sí sola el rendimiento financiero."
          },
          {
            "id": 39,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la evolución de las innovaciones gerenciales, ¿a quién se le atribuye la formulación teórica de las burocracias basadas en la autoridad racional-legal?",
            "opciones": [
              "Henri Fayol",
              "Frederick Winslow Taylor",
              "Max Weber",
              "Elton Mayo",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              2
            ],
            "explicacion": "Max Weber formuló la teoría estructural de las organizaciones sustentada en la burocracia y la autoridad legal-racional caracterizada por jerarquía, reglas y división clara del trabajo."
          },
          {
            "id": 40,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de las siguientes constituye(n) una aportación conceptual de Peter F. Drucker a la disciplina administrativa moderna?",
            "opciones": [
              "La popularización y difusión de la Administración por Objetivos (APO)",
              "El concepto del 'trabajador del conocimiento'",
              "El principio de que la rentabilidad no es el propósito final, sino una necesidad de supervivencia empresarial",
              "La formulación original de la gráfica de Gantt para el control de la producción",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "Drucker popularizó la APO en 1954, introdujo la noción de los trabajadores del conocimiento y definió el propósito empresarial en términos del cliente. La gráfica de cronogramas fue desarrollada por Henry L. Gantt."
          },
          {
            "id": 41,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) el(los) autor(es) clásico(s) del pensamiento gerencial que introdujo(eron) la distinción formal entre los 14 principios universales y las operaciones técnicas de la empresa:",
            "opciones": [
              "Frederick Winslow Taylor",
              "Frank Gilbreth",
              "Henri Fayol",
              "Hugo Münsterberg",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              2
            ],
            "explicacion": "Henri Fayol estructuró las funciones organizacionales en técnicas, comerciales, financieras, de seguridad, contables y administrativas, estableciendo además los 14 principios generales."
          },
          {
            "id": 42,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el marco de la responsabilidad ecológica contemporánea, ¿cuál(es) medida(s) o enfoque(s) debe(n) incorporar los administradores en sus operaciones?",
            "opciones": [
              "Cumplimiento riguroso de la legislación y reglamentación sobre emisiones y vertidos",
              "Incorporación de prácticas de prevención y control de la contaminación en el diseño productivo",
              "Gestión adecuada de los residuos sólidos y uso eficiente de recursos no renovables",
              "Ignorar el impacto del ciclo de vida del producto una vez colocado en manos del consumidor final",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "La administración ecológica impone a los gerentes respetar las normativas ambientales, reducir contaminantes y diseñar procesos sustentables. Desentenderse del impacto posterior del producto contradice la sustentabilidad moderna."
          },
          {
            "id": 43,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) variable(s) que interviene(n) en el modelo de insumo-producto para volver a dotar de energía ('reenergizar') el sistema administrativo:",
            "opciones": [
              "La satisfacción de los empleados",
              "Las utilidades retenidas e invertidas nuevamente en capital de trabajo",
              "El conocimiento y experiencia acumulados durante el ciclo operacional",
              "La obsolescencia acelerada de activos fijos",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "En los sistemas abiertos, los resultados (satisfacción, ganancias, retroalimentación del mercado) vuelven a alimentar e impulsar el sistema con nuevos recursos y motivación para reiniciar las funciones gerenciales."
          },
          {
            "id": 44,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la ética individual y su aplicación corporativa, ¿cuál(es) enunciado(s) es(son) verdadero(s)?",
            "opciones": [
              "La ética individual se fundamenta en los valores personales forjados por la crianza, cultura y creencias",
              "Un ambiente organizacional ético depende fuertemente de que las conductas incorrectas sean sancionadas equitativamente",
              "Las conductas no éticas suelen agravarse cuando las metas corporativas son excesivamente irreales o inalcanzables",
              "El comportamiento ético está garantizado de forma absoluta si la corporación cuenta con utilidades elevadas",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "Los estándares éticos personales provienen de la formación individual, pero se modulan por el clima organizacional y la presión desmedida por metas irreales. Una rentabilidad financiera alta no previene ni garantiza comportamientos éticos."
          },
          {
            "id": 45,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquel(los) elemento(s) característico(s) del marco de las '7 S' de McKinsey incluido(s) en la jungla de teorías administrativas:",
            "opciones": [
              "Estrategia (Strategy) y Estructura (Structure)",
              "Sistemas (Systems) y Estilo (Style)",
              "Personal (Staff) y Habilidades (Skills)",
              "Valores compartidos (Shared values)",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2,
              3
            ],
            "explicacion": "El marco formulado por McKinsey & Company agrupa 7 elementos interdependientes: strategy, structure, systems, style, staff, skills y shared values, analizado dentro de los enfoques administrativos contemporáneos."
          },
          {
            "id": 46,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto al concepto de 'sociedad plural', ¿cuál(es) de las siguientes afirmaciones es(son) correcta(s)?",
            "opciones": [
              "Implica que el poder está descentralizado y distribuido entre diversos grupos de la sociedad",
              "Fomenta que los intereses de negocio de una organización coexistan con intereses públicos y comunitarios",
              "Elimina cualquier necesidad de cabildeo o negociación con el sector público",
              "Facilita la existencia de un sistema de frenos y contrapesos entre organizaciones sociales",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              3
            ],
            "explicacion": "La pluralidad social implica contrapesos mutuos y negociación constante entre sectores independientes. No elimina la necesidad de relacionamiento con el Estado, sino que la vuelve más compleja y necesaria."
          },
          {
            "id": 47,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) la(s) dimensión(es) cultural(es) descrita(s) por Geert Hofstede que evalúa(n) el grado en que los miembros de una sociedad se sienten amenazados por situaciones ambiguas:",
            "opciones": [
              "Distanciamiento del poder",
              "Evasión de la incertidumbre",
              "Individualismo vs. colectivismo",
              "Masculinidad vs. feminidad",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "La evasión o tolerancia de la incertidumbre mide cómo la sociedad procura neutralizar situaciones ambiguas e inciertas mediante normas rígidas y protocolos institucionales."
          },
          {
            "id": 48,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En el contexto de la administración comparada internacional, ¿qué caracteriza al término cultural e interpersonal 'Guanxi' en China?",
            "opciones": [
              "Un sistema formal y cerrado de toma de decisiones jerárquicas individuales",
              "Una red compleja de conexiones, relaciones personales de confianza y reciprocidad mutua",
              "El sindicato único de trabajadores de la industria siderúrgica",
              "El consejo directivo con representación obligatoria de los trabajadores",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1
            ],
            "explicacion": "El Guanxi en los negocios y administración china denota la red de relaciones interpersonales basada en confianza mutua, reciprocidad y lealtad informal."
          },
          {
            "id": 49,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquel(los) autor(es) clásico(s) del enfoque sociotécnico que investigó(aron) la interacción entre la tecnología de extracción mecanizada y las pautas grupales en las minas de carbón británicas:",
            "opciones": [
              "Eric Trist y sus asociados del Instituto Tavistock",
              "Frederick Taylor",
              "Henri Fayol",
              "Robert Owen",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0
            ],
            "explicacion": "El enfoque sociotécnico fue desarrollado por Eric Trist y el Instituto Tavistock al observar cómo las innovaciones técnicas mecánicas desestructuraban las relaciones sociales del trabajo grupal tradicional en la minería."
          },
          {
            "id": 50,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de los siguientes elementos representa(n) una de las principales limitaciones o críticas señaladas hacia la teoría de la calidad total?",
            "opciones": [
              "La ausencia de un consenso absoluto y unificado entre sus proponentes sobre su definición operativa",
              "El riesgo de burocratización por exceso de documentación y procedimientos formales",
              "Descuido del papel central del cliente en la propuesta de valor",
              "El desinterés por el costo monetario en que se incurre para alcanzar cero defectos",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1
            ],
            "explicacion": "Las críticas teóricas hacia la TQM/calidad total radican en la falta de consenso teórico único y el peligro de un excesivo control procedural burocrático. La TQM pone foco absoluto en el cliente y la reducción de costos por desperdicio."
          },
          {
            "id": 51,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) la(s) característica(s) de las corporaciones transnacionales que difiere(n) sustancialmente de las empresas globales tradicionales:",
            "opciones": [
              "Mantienen una sede central que controla de forma rígida y unilateral toda la producción mundial",
              "Operan sin una base o centro geográfico único, reconociendo competencias distribuidas internacionalmente",
              "Aprovechan las capacidades de las subsidiarias locales para alimentar e innovar el sistema global",
              "Operan exclusivamente mediante intermediarios de comercio exterior sin presencia física",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1,
              2
            ],
            "explicacion": "La empresa transnacional se estructura como una red integrada y sin fronteras nacionales fijas, donde las sucursales locales actúan como centros generadores de ventajas que se transfieren a escala internacional."
          },
          {
            "id": 52,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "¿Cuál(es) de las siguientes variables constituye(n) un factor económico clave dentro del ambiente externo indirecto de una empresa?",
            "opciones": [
              "Las tasas de interés y la política monetaria",
              "Los niveles de inflación y la estabilidad del tipo de cambio",
              "El poder adquisitivo disponible de los consumidores",
              "El organigrama departamental de la firma competidora",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "El ambiente económico exterior engloba la inflación, tipo de cambio, tasas de interés, política fiscal y demanda agregada disponible. El organigrama ajeno es un dato específico de competencia, no una variable macroeconómica de entorno."
          },
          {
            "id": 53,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) aportación(es) conceptual(es) relevante(s) atribuida(s) a Lillian Gilbreth en el desarrollo temprano del pensamiento gerencial:",
            "opciones": [
              "La aplicación de principios psicológicos y de bienestar humano al estudio de puestos",
              "La introducción de la gráfica de barras cronológica para planeación de operaciones",
              "El análisis del impacto de la fatiga laboral en el rendimiento de los trabajadores",
              "La redacción de los 14 principios universales de la administración",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              2
            ],
            "explicacion": "Lillian Gilbreth integró la psicología al estudio del trabajo industrial y se concentró en la mitigación de la fatiga obrera y el bienestar humano. Gantt concibió la gráfica homónima y Fayol los 14 principios."
          },
          {
            "id": 54,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a la noción de 'efectividad' en la teoría de la productividad gerencial, ¿cuál(es) es(son) su(s) premisa(s) técnica(s)?",
            "opciones": [
              "Mide prioritariamente el menor uso posible de horas hombre consumidas",
              "Mide la capacidad de alcanzar los fines u objetivos planificados de la organización",
              "Es sinónimo directo e indistinto del concepto de eficiencia económica pura",
              "Implica cumplir con las especificaciones y propósitos establecidos",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              1,
              3
            ],
            "explicacion": "La efectividad se refiere formalmente a 'hacer las cosas correctas', es decir, al logro pleno de los objetivos trazados. La eficiencia mide el rendimiento de los insumos ('hacer bien las cosas con el mínimo recurso')."
          },
          {
            "id": 55,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) el(los) pionero(s) de la administración científica que introdujo(eron) un sistema de incentivo salarial mediante bonificaciones por tarea cumplida antes del estándar:",
            "opciones": [
              "Henry L. Gantt",
              "Hugo Münsterberg",
              "Max Weber",
              "Chester Barnard",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0
            ],
            "explicacion": "Henry L. Gantt ideó el sistema de salarios con bonificaciones cuando el trabajador superaba la cuota estándar diaria asignada, además de incentivar financieramente al supervisor del turno."
          },
          {
            "id": 56,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a las alianzas entre países y bloques económicos globales, ¿cuál(es) es(son) característica(s) de la Unión Europea (UE)?",
            "opciones": [
              "Estableció una moneda común (el euro) para la mayoría de sus Estados miembros",
              "Permite la libre circulación de bienes, servicios, personas y capitales",
              "Prohíbe a sus países miembros mantener relaciones comerciales con países del continente asiático",
              "Promueve la convergencia y armonización de normas técnicas y estándares industriales",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              3
            ],
            "explicacion": "La UE consagra las cuatro libertades de circulación (personas, capitales, bienes, servicios), armonización legal y el euro en su unión monetaria. No impone embargos al comercio asiático."
          },
          {
            "id": 57,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) dimensión(es) que evalúa(n) el marco de las condiciones de los factores en la ventaja competitiva de las naciones (Porter):",
            "opciones": [
              "La disponibilidad de mano de obra cualificada y especializada",
              "La infraestructura física, digital y logística del país",
              "La base de conocimientos científicos y tecnológicos institucionales",
              "La concentración demográfica absoluta sin capacitación",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "Los factores avanzados de producción en el modelo de Michael Porter comprenden el talento calificado, la infraestructura tecnológica y las capacidades de investigación del entorno nacional. La masa demográfica pasiva sin capacitación no otorga ventaja competitiva sustentable."
          },
          {
            "id": 58,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Respecto a los denunciantes corporativos de irregularidades (Whistleblowers), ¿cuál(es) afirmación(es) es(son) correcta(s)?",
            "opciones": [
              "Son empleados o colaboradores que revelan ilegalidades o prácticas contrarias a la ética a entidades internas o externas",
              "Suelen enfrentar represalias laborales si no existen políticas explícitas de protección y reserva",
              "La legislación moderna (como la Ley Sarbanes-Oxley) prevé marcos protectores para ellos",
              "Su denuncia exime a la alta gerencia de realizar auditorías contables",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "Los denunciantes (whistleblowers) informan faltas éticas o legales y requieren amparo formal debido al riesgo de despidos o acoso. No reemplazan los procedimientos obligatorios de auditoría."
          },
          {
            "id": 59,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "Es(son) aquella(s) corriente(s) o escuela(s) que concibe(n) a la administración como una entidad analítica puramente formal basada en modelos y expresiones simbólicas:",
            "opciones": [
              "Enfoque matemático o de 'ciencia de la administración'",
              "Enfoque de la teoría de la contingencia",
              "Enfoque de roles gerenciales de Mintzberg",
              "Enfoque sociotécnico de Tavistock",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0
            ],
            "explicacion": "El enfoque cuantitativo/matemático concibe la gestión gerencial a través de la investigación de operaciones, fórmulas y algoritmos estructurados de decisión."
          },
          {
            "id": 60,
            "categoria": "Ingeniería Administrativa",
            "pregunta": "En relación con los desafíos gerenciales del siglo XXI analizados por Koontz, ¿cuál(es) constituye(n) un factor determinante de impacto global?",
            "opciones": [
              "La evolución y avance vertiginoso de la tecnología de la información",
              "La aceleración de los procesos de globalización e interdependencia de mercados",
              "La creciente demanda social por prácticas empresariales éticas y sustentables",
              "La reversión definitiva y desaparición total de las corporaciones multinacionales",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "Los autores identifican tres ejes del siglo XXI: las tecnologías de información emergentes, la globalización y la creciente exigencia social y ética corporativa. Las empresas multinacionales se expanden continuamente, no han desaparecido."
          }
        ]
      }
    ]
  },
  {
    "curso": "Sistemas Operativos",
    "examenes": [
      {
        "id": "so-control-1",
        "nombre": "Control 1 - Procesos e Hilos",
        "descripcion": "Preguntas sobre estados de procesos, planificación de CPU y sincronización",
        "preguntas": [
          {
            "id": 1,
            "pregunta": "¿Cuál(es) de los siguientes estados forma(n) parte del modelo básico de ciclo de vida de un proceso?",
            "opciones": [
              "Listo (Ready)",
              "Ejecutando (Running)",
              "Bloqueado / En espera (Waiting)",
              "Ninguna de las anteriores"
            ],
            "respuestasCorrectas": [
              0,
              1,
              2
            ],
            "explicacion": "El modelo clásico de estados de un proceso en sistemas operativos incluye Listo, Ejecutando, Bloqueado/Espera, además de Nuevo y Terminado."
          }
        ]
      }
    ]
  }
];

// Compatibilidad global
const bancoPreguntas = bancoCursos;
if (typeof window !== 'undefined') {
  window.bancoCursos = bancoCursos;
  window.bancoPreguntas = bancoPreguntas;
}
