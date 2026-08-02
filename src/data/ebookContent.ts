import { EbookPageData, ChapterMeta } from '../types/ebook';

export class ChaptersMetaData {
  static chapters: ChapterMeta[] = [
    {
      chapterId: 0,
      title: 'Introducción & Marco Biográfico',
      subtitle: 'El interlocutor cercano y las raíces históricas de la psicología analítica',
      startPage: 1,
      endPage: 4,
      iconName: 'book-open'
    },
    {
      chapterId: 1,
      title: 'Capítulo 1 — Arquetipos e Inconsciente Colectivo',
      subtitle: 'La arquitectura transpersonal de la psique objetiva y sus dinámicas',
      startPage: 5,
      endPage: 9,
      iconName: 'layers'
    },
    {
      chapterId: 2,
      title: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
      subtitle: 'El lenguaje de compensación y la mecánica inconsciente',
      startPage: 10,
      endPage: 14,
      iconName: 'compass'
    },
    {
      chapterId: 3,
      title: 'Capítulo 3 — Tabla de Arquetipos Principales',
      subtitle: 'Sistematización formal, símbolos y distorsiones',
      startPage: 15,
      endPage: 18,
      iconName: 'grid'
    },
    {
      chapterId: 4,
      title: 'Capítulo 4 — Legado y Continuidad',
      subtitle: 'La evolución del pensamiento junguiano a través de sus discípulos',
      startPage: 19,
      endPage: 21,
      iconName: 'award'
    },
    {
      chapterId: 5,
      title: 'Capítulo 5 — Ejercicios Prácticos',
      subtitle: 'Protocolos autoadministrables de integración y acción conductual',
      startPage: 22,
      endPage: 25,
      iconName: 'edit-3'
    }
  ];
}

export const EBOOK_PAGES: EbookPageData[] = [
  // ==========================================
  // INTRODUCCIÓN (PÁGINAS 1 Y 2)
  // ==========================================
  {
    pageNumber: 1,
    chapterId: 0,
    sectionTitle: 'Introducción',
    pageTitle: 'El Marco de "Carlitos": Un Interlocutor Cercano',
    subtitle: 'Desmitificando la autoridad académica sin perder el rigor conceptual',
    contentType: 'introduction',
    keyTerms: ['Psique objetiva', 'Diálogo interior', 'Pedagogía analítica'],
    paragraphs: [
      'Acercarse a la obra de Carl Gustav Jung suele provocar una doble reacción en el lector contemporáneo: una fascinación instintiva ante la profundidad de sus hallazgos y, al mismo tiempo, un sentimiento de vértigo e intimidación frente a la densidad de su aparato erudito. Entre referencias en latín y griego, tratados de alquimia medieval, comparaciones mitológicas complejas y una terminología clínica sumamente exigente, la voz de Jung corre con frecuencia el riesgo de quedar confinada a los recintos académicos o al culto esotérico.',
      'El propósito central de esta obra es disolver esa barrera de entrada mediante un dispositivo narrativo deliberado: invitar al lector a entablar una relación con Jung no como si fuera una autoridad distante instalada en un pedestal doctrinal, sino como si se tratara de un interlocutor cercano y agudo —a quien llamaremos de forma afectuosa "Carlitos"— que nos acompaña a escudriñar los rincones de nuestra propia psique.',
      'Esta aproximación no implica de ningún modo una banalización de sus ideas ni la sustitución del lenguaje técnico por frases motivacionales de autoayuda. Muy por el contrario, la cercanía de "Carlitos" opera en los márgenes y apartes del texto para devolverle al lector la intuición de que la psicología analítica no nació como una teoría abstracta de laboratorio, sino como un mapa viviente derivado de la observación clínica directa y de una intensa experiencia humana de autoindagación.',
      'Al abordar el estudio de la psique desde esta perspectiva, el objetivo de la indagación deja de ser la acumulación teórica de conceptos para convertirse en un proceso operativo de autoconocimiento. Jung sostenía que la psique es una realidad objetiva tan genuina como el cuerpo físico, equipada con sus propias leyes de autorregulación y compensación. Entender a "Carlitos" es aprender a descifrar las señales con las que esta psique nos habla a diario.'
    ],
    carlitosCallout: {
      id: 'carlitos-intro-1',
      title: 'Carlitos te diría:',
      text: 'No me trates como a un sabio en un pedestal de mármol. Trátame como a ese viejo amigo que se sienta contigo en la penumbra al lado del fuego y te pregunta sin rodeos: ¿qué parte de ti estás dejando morir afuera para que los demás piensen que eres una persona perfectamente adaptada?'
    }
  },
  {
    pageNumber: 2,
    chapterId: 0,
    sectionTitle: 'Introducción',
    pageTitle: 'Vigencia Operativa de Jung en el Autoconocimiento',
    subtitle: 'Por qué la psicología analítica responde a las crisis de sentido del presente',
    contentType: 'introduction',
    keyTerms: ['Individuación', 'Crisis del Self', 'Desconexión simbólica'],
    paragraphs: [
      'En la cultura contemporánea, signada por la inmediatez tecnológica, la saturación informativa y la exigencia permanente de rendimiento exterior, el individuo se encuentra expuesto a un fenómeno de fragmentación psíquica sin precedentes. Los síntomas más habituales en la consulta de coaching y en los procesos de autoconocimiento —tales como la sensación de vacío existencial, el agotamiento crónico (burnout), la pérdida de propósito y la ansiedad difusa— rara vez son desórdenes puramente mecánicos o funcionales.',
      'Desde la óptica de la psicología analítica, estas manifestaciones constituyen señales de protesta de la psique profunda ante una actitud consciente excesivamente unilateral. Cuando el sujeto identifica la totalidad de su ser con sus roles laborales, su reputación social o su intelecto racional, la psique reacciona mediante estados de apatía o sintomatología neurótica para forzar una redistribución de la energía psíquica (libido).',
      'Jung demostró que el ser humano posee una necesidad instintiva de sentido que requiere el contacto con la dimensión simbólica y numinosa de la existencia. Privar a la conciencia de este diálogo con el inconsciente equivale a privar a un organismo de sus nutrientes esenciales. Por consiguiente, la vigencia de Jung para el coaching y el desarrollo personal no estriba en ofrecer fórmulas mágicas de éxito, sino en proporcionar un método de integración.',
      'Es indispensable aclarar que la meta del camino junguiano no es la alcanzar un ideal estático de "perfección" o una felicidad ingenua libre de conflicto, sino el desarrollo de la *completitud* (Ganzheit). Completitud significa aprender a sostener la tensión inevitable entre los opuestos que habitan en nuestra naturaleza humana, reconociendo tanto nuestra luz consciente como los contenidos ensombrecidos que pugnan por ser integrados.'
    ],
    carlitosCallout: {
      id: 'carlitos-intro-2',
      title: 'Nota de Contexto Histórico:',
      variant: 'context_note',
      text: 'Aunque las prácticas actuales de autoconocimiento y coaching son disciplinas del siglo XXI, la preocupación de Jung por la crisis de sentido y el agotamiento del individuo frente al colectivismo anticipó con precisión las búsquedas de la cultura contemporánea.'
    }
  },

  // ==========================================
  // BIOGRAFÍA BREVE DE JUNG (PÁGINAS 3 Y 4)
  // ==========================================
  {
    pageNumber: 3,
    chapterId: 0,
    sectionTitle: 'Biografía Breve',
    pageTitle: 'Formación Clínica y el Encuentro con Freud (1875 - 1913)',
    subtitle: 'De la clínica psiquiátrica de Burghölzli a las divergencias teóricas fundamentales',
    contentType: 'biography',
    keyTerms: ['Burghölzli', 'Test de asociación de palabras', 'Complejos', 'Sigmund Freud'],
    historicalNotes: [
      '1875: Nacimiento en Kesswil, Suiza.',
      '1900: Ingreso como médico asistente en la clínica psiquiátrica de Burghölzli (Zúrich).',
      '1907: Primer encuentro presencial con Sigmund Freud en Viena.',
      '1913: Ruptura formal y dimisión a la Sociedad Psicoanalítica Internacional.'
    ],
    paragraphs: [
      'Carl Gustav Jung nació el 26 de julio de 1875 en Kesswil, a orillas del lago Constanza en Suiza. Hijo de Paul Achilles Jung, un pastor protestante que atravesaba serias dudas de fe, y de Emilie Preiswerk, una mujer de personalidad compleja con episodios de marcada inestabilidad emocional y sensibilidad intuitiva, la infancia de Carl estuvo signada por la soledad, la observación atenta de la naturaleza y una temprana fascinación por los misterios de la mente.',
      'Tras realizar sus estudios de medicina en la Universidad de Basilea, Jung decidió especializarse en psiquiatría, una disciplina que en aquel entonces gozaba de escaso prestigio académico pero que para él representaba el punto exacto de convergencia entre los hechos biológicos y las cuestiones espirituales y filosóficas. En 1900 ingresó a la célebre clínica psiquiátrica de Burghölzli en Zúrich, dirigida por el eminente médico Eugen Bleuler.',
      'Fue en Burghölzli donde Jung desarrolló sus célebres experimentos sobre el *test de asociación de palabras*. Al medir el tiempo de respuesta y las reacciones fisiológicas de los sujetos frente a una lista de estímulos verbales, demostró de manera empírica la existencia de agrupaciones de ideas con una fuerte carga afectiva inconsciente, acuñando rigurosamente el concepto científico de *complejo* (*Komplex*).',
      'En 1907, atraído por las innovadoras teorías sobre la histeria y el inconsciente expuestas en *La interpretación de los sueños*, Jung viajó a Viena para conocer a Sigmund Freud. El primer encuentro derivó en una conversación ininterrumpida de trece horas. Durante años, Freud consideró a Jung como su "príncipe heredero" y el líder natural del movimiento psicoanalítico internacional. Sin embargo, las discrepancias conceptuales fueron acentuándose de forma irreversible.',
      'Mientras Freud concebía la *libido* en términos predominantemente impulsivos y sexuales y el inconsciente como un mero depósito de deseos reprimidos, Jung planteaba que la libido era energía psíquica general no reducible al factor sexual y que el inconsciente albergaba estratos creativo-estructurales más profundos. Tras la publicación de *Símbolos de transformación* (1912), donde Jung hizo pública su discrepancia teórica, la relación profesional y personal entre ambos se quebró definitivamente en 1913.'
    ],
    carlitosCallout: {
      id: 'carlitos-bio-1',
      title: 'Cita Histórica de C. G. Jung (1907):',
      variant: 'historical_quote',
      text: 'Lo que no hacemos consciente se nos presenta en la vida como destino. El test de asociación de palabras demostró empíricamente que nuestros complejos inconscientes poseen una autonomía insospechada que la voluntad racional no puede acallar por la fuerza.'
    }
  },
  {
    pageNumber: 4,
    chapterId: 0,
    sectionTitle: 'Biografía Breve',
    pageTitle: 'El Libro Rojo y la Madurez Teórica (1913 - 1961)',
    subtitle: 'La confrontación con el inconsciente, obras principales y su fallecimiento en Küsnacht',
    contentType: 'biography',
    keyTerms: ['Liber Novus', 'Imaginación activa', 'Tipos psicológicos', 'Mysterium Coniunctionis'],
    historicalNotes: [
      '1913-1919: Confrontación con el inconsciente y redacción del Liber Novus (El Libro Rojo).',
      '1921: Publicación de Tipos psicológicos.',
      '1944: Publicación de Psicología y alquimia.',
      '1961: Fallecimiento el 6 de junio en su residencia de Küsnacht.'
    ],
    paragraphs: [
      'La ruptura con Freud precipitó en Jung un periodo de profunda desorientación personal e incertidumbre profesional, que posteriormente denominó su "confrontación con el inconsciente" (1913-1919). Durante este intervalo, renunció a sus cargos universitarios e indujo deliberadamente estados de fantasía consciente para explorar las profundidades de su propia psique. Estas vivencias directas, plasmadas con minuciosidad e ilustraciones caligráficas en su obra manuscrita *Liber Novus* (*El Libro Rojo*), constituyeron la matriz experimental de donde derivaron sus principales aportes teóricos.',
      'De este fructífero periodo de introspección surgieron conceptos clave como la técnica de la *imaginación activa*, la hipótesis del *inconsciente colectivo* y la estructura de los *arquetipos*. En 1921, Jung publicó una de sus obras de mayor impacto empírico, *Tipos psicológicos*, donde sistematizó la distinción entre las actitudes de *extraversión* e *introversión*, combinadas con cuatro funciones fundamentales de la conciencia (pensamiento, sentimiento, sensación e intuición).',
      'Durante las décadas siguientes, Jung emprendió extensos viajes de investigación antropo-psicológica a Nuevo México (observando la cultura de los indios Pueblo), África oriental (Kenia e Uganda) e India, buscando verificar la universalidad de las estructuras simbólicas. En su madurez, dedicó años al estudio de la alquimia occidental y oriental, descubriendo en el lenguaje hermético medieval un elaborado sistema de proyecciones psicológicas que describía con asombrosa precisión el proceso de individuación.',
      'Entre sus obras cumbre de madurez destacan *Psicología y alquimia* (1944), *Aion: contribuciones a los simbolismos del sí-mismo* (1951), *Respuesta a Job* (1952) y *Mysterium Coniunctionis* (1955-1956). Carl Gustav Jung falleció apaciblemente el 6 de junio de 1961 en su casa a orillas del lago en Küsnacht, dejando un legado monumental que redefinió para siempre la comprensión de la psique humana.'
    ],
    carlitosCallout: {
      id: 'carlitos-bio-2',
      title: 'Nota Marginal de Archivo:',
      variant: 'marginalia',
      text: 'Durante su periodo de confrontación con el inconsciente (1913-1919), Jung dedicó infinitas horas a la caligrafía y pintura minuciosa en el Liber Novus. Descubrió que plasmar plásticamente los símbolos frenaba la inundación emocional y permitía dialogar con ellos.'
    }
  },

  // ==========================================
  // CAPÍTULO 1 — ARQUETIPOS E INCONSCIENTE COLECTIVO (PÁGINAS 5 A 9)
  // ==========================================
  {
    pageNumber: 5,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos e Inconsciente Colectivo',
    pageTitle: 'Inconsciente Personal vs. Inconsciente Colectivo',
    subtitle: 'Los cimientos transpersonales de la psique objetiva',
    contentType: 'text',
    keyTerms: ['Inconsciente personal', 'Inconsciente colectivo', 'Psique objetiva', 'Transpersonal'],
    paragraphs: [
      'Para comprender la arquitectura psíquica propuesta por la psicología analítica, es indispensable trazar una distinción tajante entre dos estratos o dimensiones del inconsciente: el *inconsciente personal* y el *inconsciente colectivo*. La psicología profunda previa a Jung concebía el inconsciente de forma exclusiva como una vasta cámara de resonancia de la historia biográfica del individuo.',
      'El *inconsciente personal* comprende todos aquellos contenidos psicológicos que han sido adquiridos a lo largo de la existencia del sujeto: percepciones subliminales, impresiones olvidadas, recuerdos infantiles y, fundamentalmente, impulsos o ideas que han sido reprimidos deliberadamente por el Yo debido a su incompatibilidad con el sistema moral o con la imagen consciente del individuo. Este plano es dinámico, fluido y estrictamente individual.',
      'Por debajo de este estrato biográfico se despliega el *inconsciente colectivo*, la verdadera piedra angular de la teoría junguiana. Jung descubrió que el inconsciente colectivo no es una adquisición individual, sino una estructura transpersonal, heredada e innata. Constituye la matriz psíquica objetiva de la especie humana, un sustrato común presente en la organización cerebral y psíquica de todos los seres humanos independientemente de su época histórica o contexto cultural.',
      'Así como el cuerpo humano posee una anatomía comparada común —con órganos, huesos y sistemas fisiológicos idénticos en su diseño fundamental—, la psique posee una estructura básica compartida. La psique no nace como una *tabla rasa* en blanco a la espera de ser escrita por la experiencia exterior; nace equipada con patrones predisposicionales de percepción, reacción y organización simbólica.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-1',
      title: 'Carlitos te diría:',
      text: 'Tu mente no es un apartamento recién construido donde solo viven tus recuerdos de la infancia y tus listas de compras. Es una catedral gótica erigida sobre cimientos romanos y grutas prehistóricas. Cuando sientes un pavor atávico o una devoción inexplicable, no estás solo en tu biografía: estás pisando el suelo sagrado que pisaron tus antepasados hace diez mil años.'
    }
  },
  {
    pageNumber: 6,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos e Inconsciente Colectivo',
    pageTitle: 'La Naturaleza Estructural del Arquetipo',
    subtitle: 'Patrones a priori, forma sin contenido e imago arquetípica',
    contentType: 'text',
    keyTerms: ['Arquetipo', 'Matriz a priori', 'Imago arquetípica', 'Instinto psíquico'],
    paragraphs: [
      'Uno de los malentendidos más difundidos sobre la teoría de Jung consiste en confundir el *arquetipo* (*Archetypus*) con una imagen mitológica fija, un dogma heredado o una representación mental heredada de forma directa. Jung fue extremadamente categórico al precisar este concepto: el arquetipo en sí mismo es una *matriz estructural a priori*, una forma sin contenido concreto propio.',
      'Para ilustrar esta distinción, Jung recurría con frecuencia a una analogía tomada de la mineralogía: el arquetipo es comparable al sistema cristalino de una red molecular sumergida en una solución madre. El sistema cristalino determina la forma matemática en que el mineral habrá de cristalizar, pero el cristal en sí no posee sustancia física hasta que los átomos de la solución precipitan en él. Del mismo modo, el arquetipo es un cauce invisible que canaliza la energía psíquica.',
      'Podemos definir el arquetipo como el correlato psíquico del instinto biológico. Así como un ave migratoria hereda el patrón conductual instintivo de construir su nido de determinada manera sin necesidad de aprendizaje formal previas, el ser humano hereda patrones predisposicionales para experimentar el mundo: la predisposición a percibir la figura materna, a confrontar la muerte, a buscar un sentido heroico o a sobrecogerse ante lo sagrado.',
      'Cuando un arquetipo entra en contacto con las vivencias concretas de la historia personal de un sujeto, adquiere ropaje perceptual y se manifiesta en la conciencia como una *representación o imago arquetípica*. Por consiguiente, aunque los símbolos y mitos varíen formalmente entre el Egipto faraónico, la Grecia clásica o un sueño contemporáneo, el núcleo arquetípico subyacente permanece estructuralmente idéntico.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-2',
      title: 'Paralelo Hermético & Cristalografía:',
      variant: 'alchemical',
      text: 'El arquetipo es como el sistema cristalino de una solución saturada: prefija la geometría del cristal antes de que este exista físicamente. El arquetipo organiza la percepción pero carece de sustancia hasta que precipita en la vivencia del individuo.'
    }
  },
  {
    pageNumber: 7,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos e Inconsciente Colectivo',
    pageTitle: 'Activación Arquetípica en la Vida Cotidiana',
    subtitle: 'Crisis vitales, experiencias numinosas y constelación de complejos',
    contentType: 'text',
    keyTerms: ['Constelación arquetípica', 'Numinosum', 'Crisis del ecuador de la vida', 'Inflación psíquica'],
    paragraphs: [
      'Los arquetipos no son piezas de museo ni abstracciones teóricas; son fuerzas vivas que se *constelan* (se activan energéticamente) en circunstancias específicas de la vida cotidiana. La activación arquetípica ocurre de manera preponderante cuando la persona atraviesa situaciones límite, momentos de transición existencial o crisis para las cuales el repertorio adaptativo habitual de su Yo resulta insuficiente.',
      'El ejemplo más conspicuo de activación arquetípica cotidiana se verifica en la llamada *crisis de la mitad de la vida* (o del ecuador vital). Alrededor de los 35 a 45 años, muchas personas que han alcanzado una adaptación profesional y social exitosa experimentan una inesperada irrupción de insatisfacción o desorientación. En ese instante se constela el arquetipo de la transformación o del *Self*, exigiendo un giro del enfoque adaptativo exterior hacia la integración interior.',
      'Otro mecanismo de activación es la vivencia de lo *numinoso* (*numinosum*, concepto acuñado por Rudolf Otto y adoptado por Jung). Se trata de esa cualidad de fascinación, misterio y sobrecogimiento inefable que experimentamos ante ciertas obras de arte, encuentros afectivos arrolladores, paisajes naturales majestuosos o sueños de un dinamismo extraordinario. Lo numinoso indica que la conciencia ha entrado en contacto directo con una carga arquetípica profunda.',
      'No obstante, la activación arquetípica entraña un riesgo clínico considerable: la *inflación psíquica*. Cuando el Yo consciente no logra guardar distancia crítica frente al arquetipo activado, tiende a identificarse ingenuamente con él. La persona poseída por el arquetipo del Salvador, del Sabio o del Héroe pierde la dimensión realista de sus limitaciones humanas, cayendo en la desproporción egoica o en la megalomanía.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-3',
      title: 'Carlitos te diría:',
      text: 'Cuando te enamoras locamente a primera vista o cuando un odio visceral te ciega la razón, no te engañes pensando que estás reaccionando ante la persona real que tienes enfrente. Ha caído el telón y en el escenario de tu vida ha entrado un arquetipo milenario. El secreto no es huir del teatro, sino saber quién es el actor y quién es el espectador.'
    }
  },
  {
    pageNumber: 8,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos e Inconsciente Colectivo',
    pageTitle: 'Individuación y el Principio de Enantiodromía',
    subtitle: 'La tensión dialectica de los opuestos y el desarrollo hacia la completitud',
    contentType: 'text',
    keyTerms: ['Individuación', 'Enantiodromía', 'Tensión de opuestos', 'Función trascendente'],
    paragraphs: [
      'El concepto rector de toda la psicología analítica es el *Proceso de Individuación* (*Individuationsprozess*). Jung definió la individuación como aquel proceso natural de diferenciación y desarrollo psicológico mediante el cual un ser humano llega a convertirse en el individuo autónomo e integrado que potencialmente es desde su nacimiento, desplegando la totalidad de su matriz psíquica.',
      'El motor fundamental que impulsa la individuación es la dinámica entre los pares de opuestos que constituyen la psique (luz y sombra, razón e intuición, máscara y autenticidad). Para comprender esta dinámica, Jung rescató de la filosofía presocrática de Heráclito el término *Enantiodromía* ("correr hacia el opuesto"). La enantiodromía establece que toda fuerza o actitud psíquica llevada a un extremo unilateral e insostenible provocará inevitablemente la irrupción brusca de su polo opuesto.',
      'En la práctica de vida, la enantiodromía se manifiesta cuando una persona que ha reprimido sus necesidades emocionales en nombre de un hiperracionalismo frío colapsa repentinamente en un ataque de angustia incontrolable, o cuando una posición dogmática inflexible se desmorona dando paso a la duda destructiva. La psique no tolera la tiranía de la unilateralidad.',
      'El camino de la individuación no consiste en la victoria de un polo sobre el otro, sino en el sostenimiento consciente de la *tensión entre los opuestos*. Al rehusarse a reprimir o a actuar compulsivamente cualquiera de los extremos, la psique genera una síntesis superior a través de lo que Jung denominó la *función trascendente*, uniendo lo consciente y lo inconsciente en una nueva posición simbólica.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-4',
      title: 'Glosario Térmico Analítico:',
      variant: 'glossary',
      text: 'Enantiodromía (del griego enantios: opuesto, dromos: carrera). Principio heredado de Heráclito según el cual toda actitud o fuerza psíquica llevada a un extremo insostenible genera bruscamente la irrupción de su polo opuesto.'
    }
  },
  {
    pageNumber: 9,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos e Inconsciente Colectivo',
    pageTitle: 'Implicaciones para el Coaching y el Autoconocimiento',
    subtitle: 'Herramientas operativas para detectar patrones y evitar la posesión',
    contentType: 'text',
    keyTerms: ['Diagnóstico arquetípico', 'Estrategia de coaching', 'Límites del Yo', 'Integración funcional'],
    paragraphs: [
      'Cuando aplicamos la teoría de los arquetipos e inconsciente colectivo al campo del coaching y del desarrollo personal, el foco de atención cambia de manera radical. En lugar de limitarnos a analizar síntomas superficiales o establecer metas puramente conductuales de corto plazo, el facilitador o el practicante aprende a escuchar la narrativa del cliente como el despliegue de una trama arquetípica subyacente.',
      'Si un cliente presenta un patrón reiterado de sabotaje en sus proyectos profesionales cada vez que está a punto de alcanzar el éxito, la pregunta operativa no es solo qué hábitos técnicos le faltan, sino qué constelación arquetípica se está activando. ¿Está actuando bajo la influencia del *Puer Aeternus* (el eterno joven que teme el compromiso con la realidad terrenal) o padece la proyección de una *Sombra* no asimilada que castiga el triunfo?',
      'El trabajo de coaching de inspiración junguiana exige una extrema responsabilidad metodológica: se debe acompañar al individuo a tomar conciencia de las fuerzas arquetípicas que operan en su vida sin propiciar nunca la descompensación ni la inflación psíquica. El Yo consciente debe permanecer siempre firme, servicial pero soberano, dialogando con los contenidos del inconsciente sin dejarse inundar por ellos.',
      'Dominar el lenguaje arquetípico le otorga al individuo un mapa de navegación incomparable. Le permite descifrar el sentido profundo de sus crisis, transformar sus aparentes bloqueos en llamados a la evolución interior y asumir la responsabilidad de su propio proceso de individuación.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-5',
      title: 'Nota de Contexto Histórico:',
      variant: 'context_note',
      text: 'Es necesario señalar que el "coaching" como disciplina profesional contemporánea no existía en tiempos de C. G. Jung. La inclusión del enfoque analítico en consultoría actual es un desarrollo reciente que no sustituye la clínica médica, sino que aporta profundidad reflexiva.'
    }
  },

  // ==========================================
  // CAPÍTULO 2 — SÍMBOLOS, SUEÑOS, PROYECCIONES (PÁGINAS 10 A 14)
  // ==========================================
  {
    pageNumber: 10,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
    pageTitle: 'La Distinción Fundamental entre Signo y Símbolo',
    subtitle: 'Semiótica estricta vs. la revelación de lo numinoso',
    contentType: 'text',
    keyTerms: ['Signo', 'Símbolo', 'Semiótica junguiana', 'Revelación no traducible'],
    paragraphs: [
      'En el lenguaje cotidiano es habitual utilizar las palabras "signo" y "símbolo" como si fueran sinónimos intercambiables. Sin embargo, en la psicología analítica, el restablecimiento de la frontera conceptual entre ambos términos resulta decisivo para comprender cómo se comunica el inconsciente.',
      'Un *signo* es una representación semiótica convencional que sustituye o designa una cosa ya conocida o un significado prefijado. Por ejemplo, una señal de tránsito con un octágono rojo que dice "PARE" o las siglas "UNESCO" son signos: su significado es cerrado, inequívoco, producto de un acuerdo social y perfectamente traducible en palabras concretas sin pérdida de información.',
      'Un *símbolo*, por el contrario, es según la definición rigurosa de Jung "la mejor expresión posible de un hecho o contenido relativamente desconocido, complejo y numinoso que no se puede formular de manera más precisa ni directa en el lenguaje racional disponible". El símbolo no disfraza algo que ya sabemos; alumbra algo que apenas estamos atisbando a nivel intuitivo.',
      'Cuando un símbolo surge espontáneamente en un sueño, una obra artística o una vivencia meditativa —por ejemplo, la imagen de una serpiente que se muerde la cola (Uróboros) o un mándala de geometría perfecta—, no se lo debe tratar como un acertijo matemático con una sola respuesta "correcta". Intentar reducir un símbolo a una mera definición abstracta es disolver su dinamismo transformador. El símbolo requiere ser habitado, explorado y amplificado.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-1',
      title: 'Carlitos te diría:',
      text: 'No trates a tus símbolos como si fueran mensajes cifrados de la policía de tránsito. Un signo te dice por dónde doblar a la derecha; un símbolo te agarra de las solapas de la chaqueta, te mira a los ojos y te muestra el universo infinito que llevas escondido dentro del pecho.'
    }
  },
  {
    pageNumber: 11,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
    pageTitle: 'La Función Compensatoria del Sueño',
    subtitle: 'La psique como sistema autorregulado frente al sesgo del Yo',
    contentType: 'text',
    keyTerms: ['Función compensatoria', 'Autorregulación psíquica', 'Unilateralidad del Yo', 'Teleología del sueño'],
    paragraphs: [
      'La teoría de la interpretación de los sueños desarrollada por Jung difiere de forma sustancial del enfoque psicoanalítico clásico de Freud. Mientras que para Freud el sueño era fundamentalmente una realización disfrazada de deseos infantiles represivos cuya función principal era velar el reposo nocturno, Jung concibió el sueño como un producto natural, espontáneo y no disfrazado de la psique autónoma.',
      'La premisa fundamental de Jung es que la psique opera como un *sistema autorregulado*, análogo a la autorregulación homeostática del cuerpo físico. Así como el cuerpo genera sudor para enfriarse cuando la temperatura sube o eleva sus glóbulos blancos ante una infección, la psique genera sueños para corregir y equilibrar las actitudes unilaterales o distorsionadas de la conciencia.',
      'Esta es la famosa *función compensatoria* del sueño. Si una persona cultiva durante el día una actitud de orgullo desmedido, rigidez absoluta o racionalismo frío, el inconsciente producirá por la noche imágenes de humillación, laberintos caóticos o pérdidas de control para restaurar el equilibrio del sistema completo.',
      'Asimismo, los sueños poseen una dimensión *prospectiva* o teleológica: no en el sentido de una predicción vidente del futuro, sino como un mapa de las tendencias de desarrollo inconsciente. El sueño muestra hacia dónde fluye la energía psíquica y advierte sobre los peligros inminentes si la postura del Yo consciente no se modifica a tiempo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-2',
      title: 'Cita Histórica de C. G. Jung:',
      variant: 'historical_quote',
      text: 'El sueño es la pequeña puerta escondida en el santuario más íntimo y secreto del alma, que se abre hacia esa noche cósmica que era psique mucho antes de que existiera el Yo consciente.'
    }
  },
  {
    pageNumber: 12,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
    pageTitle: 'Estructura Dramática del Sueño y Amplificación',
    subtitle: 'Fases del relato onírico y el método hermenéutico de indagación',
    contentType: 'text',
    keyTerms: ['Estructura dramática', 'Amplificación', 'Hermeneútica junguiana', 'Contexto del soñante'],
    paragraphs: [
      'Para abordar el análisis de un sueño sin caer en especulaciones arbitrarias ni en "diccionarios de sueños" simplistas, Jung propuso estudiar el relato onírico utilizando el modelo de la *estructura dramática* del teatro clásico. Todo sueño completo consta de cuatro momentos fundamentales:',
      '1. **Introducción / Lugar y Personajes**: Establecimiento del escenario psíquico, el tiempo y los actores del drama onírico. 2. **Desarrollo de la Trama**: La situación se complica; aparece un conflicto o una tensión inesperada. 3. **Clímax o Peripecias**: El momento de máxima intensidad emocional donde ocurre un cambio de rumbo crucial. 4. **Lisis / Resultado**: La resolución o desenlace del sueño, que muestra la actitud final del inconsciente frente al problema planteado.',
      'A la hora de interpretar el contenido, Jung descartó la técnica de la *asociación libre* impulsada por Freud —que tendía a alejarse progresivamente del sueño para derivar en los complejos personales habituales del paciente— y creó en su lugar el método de la *Amplificación*.',
      'La Amplificación consiste en mantener la atención firmemente anclada en la imagen onírica concreta, rodeándola de un círculo de asociaciones relacionadas: tanto del contexto personal e histórico del soñante como de paralelos mitológicos, folclóricos, artísticos y religiosos de la humanidad. La amplificación le devuelve a la imagen su riqueza simbólica completa.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-3',
      title: 'Nota Marginal de Archivo:',
      variant: 'marginalia',
      text: 'El método de amplificación diferencia a la psicología analítica del libre asociacionismo. La amplificación circunvala la imagen del sueño relacionándola con mitos y símbolos universales para preservar su riqueza original.'
    }
  },
  {
    pageNumber: 13,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
    pageTitle: 'La Mecánica Involuntaria de la Proyección',
    subtitle: 'Transferencia no consciente y percepción distorsionada del objeto',
    contentType: 'text',
    keyTerms: ['Proyección', 'Mecanismo involuntario', 'Fascinación y aversión', 'Ganchos de proyección'],
    paragraphs: [
      'La *proyección* es un mecanismo psicológico de carácter estrictamente inconsciente e involuntario mediante el cual un sujeto atribuye a un objeto, persona o situación del mundo exterior contenidos, contenidos, valores o cualidades que en realidad pertenecen a su propia psique y que no han sido reconocidos ni integrados por la conciencia.',
      'Un aspecto clave sobre el que Jung insistió es que la proyección *nunca es un acto deliberado* del Yo. Uno no "decide" proyectar; la proyección simplemente sucede. La conciencia se limita a registrar el resultado: vemos en el otro una cualidad de manera hipertrofiada, convencidos de que dicha cualidad le pertenece objetivamente a esa persona.',
      '¿Cómo podemos identificar de forma inequívoca que estamos bajo el influjo de una proyección? El síntoma revelador es la presencia de una *carga emocional desproporcionada*. Cuando nuestra reacción frente a la conducta de alguien oscila entre la fascinación irrazonable (idealización/enamoramiento ciego) o la irritación visceral desmesurada (odio/repulsión obsesiva), estamos invariablemente ante la huella de un contenido proyectado.',
      'Además, la proyección suele requerir un "gancho" en el mundo real: una pequeña característica real en la persona receptora que sirve como percha sobre la cual el inconsciente cuelga un traje gigantesco de fantasía arquetípica o personal. Reconocer el gancho es el primer paso para desmantelar el espejismo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-4',
      title: 'Carlitos te diría:',
      text: 'Todo lo que te irrita de los demás puede llevarte a una profunda comprensión de ti mismo. Cuando apuntas a alguien con un dedo acusador lleno de rabia moral, observa detenidamente tu mano: hay tres dedos apuntando directamente hacia tu propio pecho.'
    }
  },
  {
    pageNumber: 14,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
    pageTitle: 'Retiro de Proyecciones como Puente al Trabajo Práctico',
    subtitle: 'Reclamar la sombra y el ánima/ánimus para la responsabilidad personal',
    contentType: 'text',
    keyTerms: ['Withdrawing projections', 'Retiro de proyecciones', 'Responsabilidad psíquica', 'Autonomía'],
    paragraphs: [
      'El proceso de individuación resulta impracticable mientras el sujeto continúe viviendo sus contenidos psicológicos en el escenario exterior. El retiro consciente de las proyecciones (*withdrawing projections*) constituye una de las tareas éticas y psicológicas más exigentes que puede emprender un ser humano.',
      'Retirar una proyección implica realizar un movimiento de honestidad radical: admitir que la arrogancia insoportable que tanto me indigna en mi compañero de trabajo, o la creatividad luminosa que idolatro en mi mentor de forma casi religiosa, son facetas de mi propia psique que no he tenido el valor de reconocer, cultivar o asumir.',
      'Cuando el sujeto retira sus proyecciones de la Sombra, deja de chivo expiatorio al entorno y asume la responsabilidad de sus impulsos destructivos o envidias no asimiladas. Cuando retira las proyecciones de la Persona o del Anima/Animus, libera a sus parejas y amigos de la carga aplastante de tener que encarnar sus fantasías arquetípicas insostenibles.',
      'Este trabajo de desmantelamiento de proyecciones, lectura compensatoria de los sueños y escucha de los símbolos constituye el puente directo hacia los ejercicios prácticos del Capítulo 5. A través de ellos, la teoría se transforma en una práctica concreta de autoconocimiento y acción conductual.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-5',
      title: 'Glosario Térmico Analítico:',
      variant: 'glossary',
      text: 'Retiro de Proyecciones (Withdrawing Projections): Acto ético y reflexivo mediante el cual el sujeto reconoce que las virtudes luminosas o defectos intolerables percibidos en el entorno pertenecen a su propia psique no asimilada.'
    }
  },

  // ==========================================
  // CAPÍTULO 3 — TABLA DE ARQUETIPOS PRINCIPALES (PÁGINAS 15 A 18)
  // ==========================================
  {
    pageNumber: 15,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Tabla de Arquetipos Principales',
    pageTitle: 'Nota Epistemológica Sobre la Taxonomía Junguiana',
    subtitle: 'Estructuras explícitas de Jung vs. desarrollos posteriores de la tradición',
    contentType: 'text',
    keyTerms: ['Taxonomía junguiana', 'Estructuras intrapsíquicas', 'Tradición posterior', 'Precisión hermenéutica'],
    paragraphs: [
      'Antes de examinar la tabla sintética de arquetipos que compone este capítulo, es indispensable formular una precisión epistemológica fundamental para evitar reduccionismos y distorsiones históricas.',
      'Carl Gustav Jung nunca pretendió elaborar un catálogo cerrado, estático o exhaustivo de "los doce o dieciséis arquetipos", como suele presentarse con frecuencia en divulgaciones comerciales simplificadas. Para Jung, puesto que los arquetipos son matrices de la psique objetiva, su número es teóricamente ilimitado, tanto como las situaciones fundamentales de la vida humana.',
      'Sin embargo, Jung sistematizó de forma explícita y rigurosa cuatro *estructuras intrapsíquicas de la personalidad*: la **Persona** (la interfaz con el mundo social), la **Sombra** (los aspectos no integrados de la psique), el **Anima / Animus** (el contra-componente de género y puente con el inconsciente) y el **Self o Sí-Mismo** (el centro ordenador y la totalidad de la psique).',
      'Otros arquetipos altamente célebres que se incluyen en la siguiente tabla —tales como el *Héroe*, el *Sabio*, la *Gran Madre*, el *Niño Divino* o el *Trickster*— son patrones dinámicos amplificados tanto por Jung en sus análisis comparados como por continuadores ilustres de su tradición (Joseph Campbell, Erich Neumann, Marie-Louise von Franz, entre otros). En la tabla se especifica claramente el origen formal de cada uno.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-1',
      title: 'Cita Histórica de C. G. Jung:',
      variant: 'historical_quote',
      text: 'No existen sólo doce o catorce arquetipos fijos. Hay tantos arquetipos como situaciones típicas en la vida humana. Las infinitas repeticiones han grabado estos patrones en nuestra constitución psíquica.'
    }
  },
  {
    pageNumber: 16,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Tabla de Arquetipos Principales',
    pageTitle: 'Estructuras Intrapsíquicas Fundamentales',
    subtitle: 'Persona, Sombra, Anima/Animus y Self (Estructuras formalizadas por Jung)',
    contentType: 'table',
    tableData: [
      {
        archetype: 'Persona (La Máscara Social)',
        symbols: 'Máscaras teatrales, vestuario profesional, armaduras, uniformes, escudos.',
        distortion: 'Identificación rígida con el rol (hipocresía), pérdida de la autenticidad, vacío psíquico cuando cae la máscara.',
        origin: 'Jung explícito'
      },
      {
        archetype: 'Sombra (El Aspecto No Integrado)',
        symbols: 'El doble oscuro, el monstruo del sótano, gemelos rivales, animales nocturnos, vagabundos.',
        distortion: 'Posesión compulsiva destructiva, proyección de envidia y rabia moral, victimismo paralizante.',
        origin: 'Jung explícito'
      },
      {
        archetype: 'Anima (En el hombre) / Animus (En la mujer)',
        symbols: 'Anima: Sirena, la musa, la reina misteriosa. Animus: El sabio guerrero, el tribunal de jueces, el héroe.',
        distortion: 'Anima: Caprichos sentimentales, apatía, venenos afectivos. Animus: Dogmatismo inflexible, opiniones obstinadas.',
        origin: 'Jung explícito'
      },
      {
        archetype: 'Self / Sí-Mismo (Centro de Totality)',
        symbols: 'El mándala, la piedra filosofal, la flor de loto, la cuadratura del círculo, el cristal sagrado.',
        distortion: 'Inflación egoica (creerse Dios/iluminado), misticismo evasivo desconectado de la realidad cotidiana.',
        origin: 'Jung explícito'
      }
    ],
    paragraphs: [
      'Esta primera sección de la tabla condensa las cuatro columnas vertebrales de la topografía psíquica junguiana. Observará el lector que cada arquetipo posee tanto una manifestación estructurante indispensable para la vida (por ejemplo, la Persona nos permite adaptarnos a la sociedad sin colapsar) como una contracara destructiva cuando se polariza en exceso.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-2',
      title: 'Paralelo Hermético & Topografía:',
      variant: 'alchemical',
      text: 'La Persona es la vestimenta alquímica para tratar con el mundo exterior; la Sombra es la Nigredo (la materia no purificada); el Anima/Animus es la Syzygia o bodas sagradas; y el Self es el Lapis Philosophorum.'
    }
  },
  {
    pageNumber: 17,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Tabla de Arquetipos Principales',
    pageTitle: 'Patrones Míticos y Arquetipos Dinámicos',
    subtitle: 'El Héroe, El Sabio y La Gran Madre',
    contentType: 'table',
    tableData: [
      {
        archetype: 'El Héroe (Travesía y Conquista)',
        symbols: 'La espada, el laberinto, la lucha con el dragón, la cima de la montaña, la antorcha.',
        distortion: 'Complejo de salvador, temeridad suicida, incapacidad para rendirse o aceptar límites humanos.',
        origin: 'Tradición junguiana / Ampliado'
      },
      {
        archetype: 'El Sabio / Anciano Sabio',
        symbols: 'El libro antiguo, el faro en la tormenta, el ermitaño, el báculo, el pozo de sabiduría.',
        distortion: 'Dogmatismo frío, soberbia intelectual, pedantería paralizante que rechaza la experiencia emocional viva.',
        origin: 'Tradición junguiana / Ampliado'
      },
      {
        archetype: 'La Gran Madre (Nutrición y Materia)',
        symbols: 'La cueva fecunda, la tierra nutricia, la vasija sagrada, el árbol de la vida, el océano.',
        distortion: 'La Madre Devoradora: sobreprotección asfixiante que impide la autonomía de los hijos o proyectos.',
        origin: 'Tradición junguiana / Ampliado'
      }
    ],
    paragraphs: [
      'Los patrones dinámicos ilustran cómo el viaje de la vida exige encarnar distintas fuerzas. El Héroe impulsa la emancipación del Yo; el Sabio ofrece perspectiva y la Gran Madre proporciona contención y origen.'
    ]
  },
  {
    pageNumber: 18,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Tabla de Arquetipos Principales',
    pageTitle: 'Arquetipos de Renovación y Dualidad',
    subtitle: 'El Niño Divino y El Trickster (El Embaucador)',
    contentType: 'table',
    tableData: [
      {
        archetype: 'El Niño Divino (Puer Aeternus)',
        symbols: 'El brote dorado, la chispa de luz, el niño rey, alas de Ícaro, fuentes mágicas.',
        distortion: 'Puerilismo crónico, fobia radical al compromiso y a las limitaciones del mundo real, fantasía sin acción.',
        origin: 'Tradición junguiana / Ampliado'
      },
      {
        archetype: 'El Trickster / El Embaucador',
        symbols: 'El coyote, el bufón de la corte, la máscara bivalente, el camaleón, el fuego fatuo.',
        distortion: 'Caos destructivo sin propósito, sabotaje cínico de toda estructura, irresponsabilidad absoluta.',
        origin: 'Tradición junguiana / Ampliado'
      }
    ],
    paragraphs: [
      'El Niño Divino representa la renovación constante de las posibilidades de la vida, la frescura y el potencial del nuevo comienzo. Su riesgo es el estancamiento en la adolescencia perpetua. Por su parte, el Trickster rompe la rigidez de los dogmas mediante la ironía y el tropiezo; es el catalizador que nos fuerza a recuperar la humildad cuando el Yo se vuelve demasiado solemne.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-4',
      title: 'Carlitos te diría:',
      text: 'Cuando la vida te parece ridículamente pesada y trágica, dale las gracias al Trickster si metes la pata en público. Es el único arquetipo capaz de hacer reír a los dioses a costa de nuestra ridícula importancia personal.'
    }
  },

  // ==========================================
  // CAPÍTULO 4 — LEGADO: DISCÍPULOS QUE CONTINUARON LA OBRA DE JUNG (PÁGINAS 19 A 21)
  // ==========================================
  {
    pageNumber: 19,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — Legado y Continuidad',
    pageTitle: 'Marie-Louise von Franz y Erich Neumann',
    subtitle: 'Cuentos de hadas, alquimia y el desarrollo histórico de la conciencia',
    contentType: 'legacy',
    keyTerms: ['Marie-Louise von Franz', 'Cuentos de hadas', 'Erich Neumann', 'Evolución de la conciencia'],
    paragraphs: [
      'La psicología analítica no quedó petrificada como un monumento estático tras la muerte de Jung. Por el contrario, un grupo extraordinario de discípulos directos y colaboradores dedicó sus vidas a sistematizar, profundizar y expandir los descubrimientos del maestro suizo.',
      '**Marie-Louise von Franz (1915 - 1998)** es considerada con justicia la heredera intelectual más cercana a Jung. Conoció a Jung a los 18 años y colaboró con él ininterrumpidamente durante más de tres décadas, especialmente en la traducción e interpretación de textos latinos y griegos de alquimia. El aporte genial y propio de Von Franz estriba en la demostración de que los *cuentos de hadas tradicionales* constituyen la manifestación más pura, directa e incólume del inconsciente colectivo, desprovista de las elaboraciones culturales complejas de las grandes mitologías. Obras suyas como *La interpretación de los cuentos de hadas* y *El Puer Aeternus* son piezas maestras de la literatura junguiana.',
      '**Erich Neumann (1905 - 1960)**, médico y psicólogo analítico alemán que emigró a Tel Aviv huyendo del nazismo, mantuvo un fructífero intercambio epistolar con Jung. Neumann realizó una contribución monumental al articular el desarrollo de la conciencia individual con la historia evolutiva de la humanidad en su obra cumbre *Las etapas iniciales de la evolución de la conciencia* (1949), para la cual Jung escribió un prólogo lleno de entusiasmo. Su estudio sobre *La Gran Madre* sigue siendo la referencia obligada para comprender la arqueología del arquetipo femenino.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-1',
      title: 'Cita Histórica (Marie-Louise von Franz):',
      variant: 'historical_quote',
      text: 'Los cuentos de hadas representan la anatomía comparada de la psique. En ellos el inconsciente colectivo se expresa sin los ropajes dogmáticos ni los sesgos de las grandes religiones organizadas.'
    }
  },
  {
    pageNumber: 20,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — Legado y Continuidad',
    pageTitle: 'Aniela Jaffé y James Hillman',
    subtitle: 'Testimonio histórico vs. la ruptura de la Psicología Arquetipal',
    contentType: 'legacy',
    keyTerms: ['Aniela Jaffé', 'Biografía oficial', 'James Hillman', 'Psicología arquetipal', 'Policentrismo psíquico'],
    paragraphs: [
      '**Aniela Jaffé (1903 - 1991)** desempeñó un rol de fundamental trascendencia como secretaria de Jung y secretaria organizadora del Instituto C. G. Jung de Zúrich. Jaffé fue la colaboradora designada por el propio Jung para registrar, coordinar y dar forma narrativa a su célebre autobiografía *Recuerdos, sueños, pensamientos* (1961). Además de su impagable labor como biógrafa e historiadora del movimiento, Jaffé realizó importantes ensayos sobre la función del símbolo en el arte moderno y la significación psicológica de las vivencias parapsicológicas.',
      '**James Hillman (1926 - 2004)** representa el desarrollo más audaz, provocador y crítico del pensamiento posjunguiano. Tras formarse en Zúrich y ejercer como director de estudios del Instituto Jung, Hillman se distanció gradualmente de la ortodoxia junguiana clásica para fundar la denominada *Psicología Arquetipal*.',
      'Hillman criticó lo que consideraba un "monoteísmo del Yo y del Self" en la teoría tradicional, proponiendo en su lugar una concepción *policéntrica y poética de la psique*. Para Hillman, el objetivo de la psicología no debe ser "curar" los síntomas integrándolos en un Self unificado, sino hacer lugar a la multiplicidad de las imágenes del alma (*soul-making*). En obras como *Re-imaginando la psicología* y *El código del alma*, cuestionó el biologicismo reduccionista y devolvió la psicología a su raíz de diálogo con el mito y el arte.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-2',
      title: 'Carlitos te diría:',
      text: 'Me llena de orgullo ver que mis discípulos no se limitaron a repetir mis frases como loros amaestrados. Neumann tuvo el valor de corregirme; Von Franz llevó el método donde yo no llegué; y Hillman tuvo la audacia de desmontar mis ideas para volver a armarlas de otra manera. Un verdadero maestro no busca seguidores sumisos; busca mentes libres que continúen el fuego.'
    }
  },
  {
    pageNumber: 21,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — Legado y Continuidad',
    pageTitle: 'El Mapa del Legado en la Práctica Contemporánea',
    subtitle: 'Cómo la segunda y tercera generación enriquecieron la clínica y el coaching',
    contentType: 'legacy',
    keyTerms: ['Aportes metodológicos', 'Estudios narrativos', 'Desarrollo de liderazgo', 'Síntesis de legado'],
    paragraphs: [
      'Gracias a los aportes diferenciados de Von Franz, Neumann, Jaffé y Hillman, la psicología analítica contemporánea dispone de un arsenal hermenéutico y práctico de incalculable valor para la labor de coaching y autoconocimiento.',
      'Hoy comprendemos que cuando trabajamos con el relato autobiográfico de un cliente, podemos acudir a Von Franz para identificar los patrones narrativos de los cuentos de hadas que estructuran sus bloqueos infantiles; a Neumann para ubicar el estadio de desarrollo de su conciencia respecto de la Gran Madre o del Dragón de la dependencia; y a Hillman para honrar la riqueza poética y la singularidad inolvidable de su síntoma sin prisa por "normalizarlo".',
      'El legado junguiano ha demostrado una vitalidad asombrosa para adaptarse a las demandas del siglo XXI, influyendo decisivamente en la mitología comparada (Joseph Campbell), la psicología profunda, la consultoría organizacional de liderazgo consciente y las técnicas de diseño de vida centradas en el propósito genuino.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-3',
      title: 'Glosario Térmico Analítico:',
      variant: 'glossary',
      text: 'Psicología Arquetipal: Corriente posjunguiana desarrollada por James Hillman que enfatiza la multiplicidad poética de las imágenes del alma ("soul-making") frente al impulso de síntesis unificadora del Yo.'
    }
  },

  // ==========================================
  // CAPÍTULO 5 — EJERCICIOS PRÁCTICOS (PÁGINAS 22 A 25)
  // ==========================================
  {
    pageNumber: 22,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Ejercicios Prácticos',
    pageTitle: 'Ejercicio 1: Alineación de Personas por Contexto Vital',
    subtitle: 'Diagnóstico de la máscara social y corrección de la fuga energética',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-persona-alignment',
      title: 'Ejercicio 1 — Alineación de Personas',
      objective: 'Identificar el grado de rigidez, incongruencia o agotamiento energético en las máscaras sociales operativas (Persona laboral, familiar, digital) para recuperar la autenticidad del Yo.',
      steps: [
        {
          stepNumber: 1,
          title: 'Inventario de Contextos Clave',
          instruction: 'Selecciona los tres escenarios de tu vida donde más energía inviertes: Ej. 1) Trabajo/Empresa, 2) Familia/Pareja, 3) Redes sociales/Entorno público.'
        },
        {
          stepNumber: 2,
          title: 'Descripción del Atuendo de la Máscara',
          instruction: 'Escribe de manera objetiva qué características exige tu "Persona" en cada contexto (ej: "En el trabajo debo mostrarme infalible y analítico; en familia debo ser complaciente").'
        },
        {
          stepNumber: 3,
          title: 'Evaluación de Costo Psíquico',
          instruction: 'Puntúa de 1 a 10 el nivel de agotamiento o tensión física que sientes al sostener esa máscara. ¿Hay alguna que esté a punto de resquebrajarse?'
        },
        {
          stepNumber: 4,
          title: 'Acción Conductual de Ajuste de Límites',
          instruction: 'Define una pequeña flexibilización concreta que aplicarás esta semana para permitir que tu Yo genuino respire sin la protección rígida de la máscara.'
        }
      ],
      applicationExample: 'Caso Real: Carlos, ejecutivo de finanzas, descubrió que su máscara de "perfeccionista invulnerable" en la oficina le provocaba migrañas crónicas. Su acción de cierre fue delegar una tarea crítica semanal y admitir abiertamente ante su equipo cuando no tenía la respuesta inmediata a un problema.',
      closurePrompt: 'Registro Personal de Alineación de Máscaras:',
      inputFieldKey: 'workbook_persona_alignment',
      inputPlaceholder: ''
    },
    paragraphs: [
      'La Persona es indispensable para la vida en sociedad; nos evita ir "en carne viva" por el mundo. El problema surge cuando nos identificamos tanto con la máscara que olvidamos la cara real que hay detrás. Este ejercicio te permitirá auditoriar tus máscaras.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-1',
      title: 'Nota Metodológica de Integración:',
      variant: 'context_note',
      text: 'Las máscaras sociales (Personas) no son intrínsecamente malas; nos resguardan del colapso social. La finalidad de esta auditoría es flexibilizar las máscaras rígidas para evitar que consuman toda tu energía psíquica.'
    }
  },
  {
    pageNumber: 23,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Ejercicios Prácticos',
    pageTitle: 'Ejercicio 2: Rastreo de Sombra Dorada',
    subtitle: 'Descubrimiento de talentos reprimidos vía irritación y cumplidos rechazados',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-golden-shadow',
      title: 'Ejercicio 2 — Rastreo de Sombra Dorada',
      objective: 'Recuperar las cualidades valiosas, creativas o de poder personal no desarrolladas (Sombra Dorada) que han sido ocultadas detrás de la envidia, la irritación o la dificultad para aceptar elogios.',
      steps: [
        {
          stepNumber: 1,
          title: 'Registro de la Irritación / Envidia Visceral',
          instruction: 'Identifica a una persona de tu entorno cercano o público cuya visibilidad, soltura o éxito te provoque una molestia, envidia o juicio moral desproporcionado.'
        },
        {
          stepNumber: 2,
          title: 'Inversión Especular',
          instruction: 'Pregúntate con honestidad brutal: ¿Qué cualidad positiva tiene esa persona que yo me he prohibido a mí mismo ejercitar por miedo a parecer arrogante o inadecuado?'
        },
        {
          stepNumber: 3,
          title: 'Auditoría del Cumplido Rechazado',
          instruction: 'Recuerda un elogio sincero que te hayan hecho recientemente y que hayas descartado rápidamente ("No fue para tanto", "Tuve suerte"). Ahí hay un tesoro escondido.'
        },
        {
          stepNumber: 4,
          title: 'Reclamación de la Sombra Dorada',
          instruction: 'Escribe un compromiso concreto para poner en práctica esa cualidad reprimida en tu propio beneficio durante los próximos tres días.'
        }
      ],
      applicationExample: 'Caso Real: Elena sentía una irritación feroz hacia una colega que exponía sus ideas con pasión e improvisación en las reuniones. Al hacer el ejercicio, Elena comprendió que su envidia escondía su propia creatividad latente ("Sombra Dorada") que mantenía encerrada por temor al juicio ajeno.',
      closurePrompt: 'Registro Personal de tu Sombra Dorada:',
      inputFieldKey: 'workbook_golden_shadow',
      inputPlaceholder: ''
    },
    paragraphs: [
      'No toda la Sombra es oscura ni destructiva. Con frecuencia reprimimos nuestros mejores talentos, nuestra capacidad de brillo o nuestro liderazgo por condicionamientos educacionales. La envidia es la brújula que indica dónde enterraste tu oro.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-2',
      title: 'Nota Metodológica de Integración:',
      variant: 'context_note',
      text: 'La Sombra Dorada comprende aquellas virtudes, talentos y destellos de liderazgo que reprimiste por temor al rechazo o a parecer arrogante. La envidia o fascinación es el indicador primario de ese potencial enterrado.'
    }
  },
  {
    pageNumber: 24,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Ejercicios Prácticos',
    pageTitle: 'Ejercicio 3: Diálogo Escrito de Imaginación Activa',
    subtitle: 'Interacción directa con símbolos recurrentes del inconsciente',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-active-imagination',
      title: 'Ejercicio 3 — Diálogo Escrito de Imaginación Activa',
      objective: 'Utilizar la técnica junguiana de Imaginación Activa por escrito para dialogar de manera consciente con un símbolo, personaje o figura recurrente de tus sueños o fantasías.',
      steps: [
        {
          stepNumber: 1,
          title: 'Inducción de Tranquilidad e Invocación',
          instruction: 'Siéntate en un lugar silencioso, respira pausadamente y trae a tu mente la imagen fija del personaje o símbolo recurrente (ej: el animal nocturno de un sueño, la figura sabia, el muro infranqueable).'
        },
        {
          stepNumber: 2,
          title: 'Apertura del Diálogo por Escrito',
          instruction: 'Escribe en tu cuaderno una pregunta directa dirigida a la figura: "—¿Quién eres y qué vienes a enseñarme en este momento de mi vida?"'
        },
        {
          stepNumber: 3,
          title: 'Transcripción Fluidizada sin Censura',
          instruction: 'Permite que la figura responda. Escribe inmediatamente la respuesta que surja en tu mente sin juzgarla, corregirla ni racionalizarla. Deja que el diálogo fluya alternando intervenciones.'
        },
        {
          stepNumber: 4,
          title: 'Acuerdo Recíproco de Cierre',
          instruction: 'Finaliza el diálogo preguntando qué gesto concreto de respeto o comprensión exige la figura en tu vida cotidiana para dar por integrada la lección.'
        }
      ],
      applicationExample: 'Caso Real: Marcos entabló un diálogo de imaginación activa con un anciano severo que aparecía en sus pesadillas al tomar decisiones de carrera. El anciano le reveló que representaba su propio sentido de la disciplina que Marcos intentaba esquivar. Acordaron dedicar 30 minutos diarios de lectura enfocado.',
      closurePrompt: 'Transcripción de tu Diálogo de Imaginación Activa:',
      inputFieldKey: 'workbook_active_imagination',
      inputPlaceholder: ''
    },
    paragraphs: [
      'La Imaginación Activa no es una simple fantasía pasiva. Es un diálogo consciente entre el Yo y las imágenes del inconsciente. Exige valentía, objetividad y respeto absoluto por la autonomía de las figuras psíquicas.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-3',
      title: 'Nota de Investigación de Archivo:',
      variant: 'marginalia',
      text: 'Jung advirtió que la Imaginación Activa requiere que el Yo participe con absoluta seriedad y juicio crítico. No se trata de una fantasía pasiva, sino de un diálogo de igual a igual con las figuras del inconsciente.'
    }
  },
  {
    pageNumber: 25,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Ejercicios Prácticos',
    pageTitle: 'Síntesis del Viaje e Integración en la Vida Cotidiana',
    subtitle: 'La firma del compromiso ético con el propio proceso de individuación',
    contentType: 'conclusion',
    keyTerms: ['Síntesis del proceso', 'Compromiso ético', 'Responsabilidad cotidiana', 'Cierre de la jornada'],
    paragraphs: [
      'Has recorrido 25 páginas de exploración a través de las profundidades de la psicología analítica. Has examinado las fronteras del inconsciente colectivo, desentrañado la naturaleza a priori de los arquetipos, aprendido a escuchar el lenguaje compensatorio de los sueños y comprendido la mecánica de la proyección.',
      'Asimismo, has conocido el legado de los grandes discípulos de Jung y has puesto a prueba herramientas concretas para auditar tus máscaras sociales, rescatar tu Sombra Dorada y entablar diálogos vivos con los símbolos de tu alma.',
      'Llegados a este punto, la responsabilidad vuelve enteramente a tus manos. La psicología analítica no se completa en las páginas de un libro ni en las discusiones intelectuales; se verifica cada mañana cuando te levantas a sostener la tensión de tus opuestos con valentía, cuando sostienes la mirada de tu sombra sin juzgarla y cuando eliges vivir una existencia con propósito consciente.',
      'Que el recuerdo de "Carlitos" no sea el de un sabio inalcanzable, sino el de ese compañero fiel que te recuerda que dentro de ti habita una luz numinosa capaz de guiar tu travesía de individuación.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-4',
      title: 'Cita Histórica de C. G. Jung:',
      variant: 'historical_quote',
      text: 'Tu visión se aclarará sólo cuando puedas mirar dentro de tu propio corazón. Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta.'
    }
  }
];
