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
      subtitle: 'La arquitectura transpersonal de la mente objetiva y sus dinámicas',
      startPage: 5,
      endPage: 9,
      iconName: 'layers'
    },
    {
      chapterId: 2,
      title: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
      subtitle: 'El lenguaje de compensación y la mecánica inconsciente',
      startPage: 10,
      endPage: 13,
      iconName: 'compass'
    },
    {
      chapterId: 3,
      title: 'Capítulo 3 — Arquetipos estructurales, de contenido e imágenes',
      subtitle: 'Sistematización formal, símbolos y distorsiones',
      startPage: 14,
      endPage: 19,
      iconName: 'grid'
    },
    {
      chapterId: 4,
      title: 'Capítulo 4 — Legado y Continuidad',
      subtitle: 'La evolución del pensamiento junguiano a través de sus discípulos',
      startPage: 20,
      endPage: 22,
      iconName: 'award'
    },
    {
      chapterId: 5,
      title: 'Capítulo 5 — Ejercicios Prácticos',
      subtitle: 'Protocolos autoadministrables de integración y acción conductual',
      startPage: 23,
      endPage: 26,
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
    pageTitle: 'El Marco de Carlitos: Un Profesor Cercano',
    subtitle: 'Bajando a tierra sin perder el rigor conceptual',
    contentType: 'introduction',
    keyTerms: ['mente objetiva', 'Diálogo interior', 'Pedagogía analítica'],
    paragraphs: [
      'Acercarse a la obra de Carl Gustav Jung suele provocar una doble reacción en sus lectores: una fascinación instintiva ante la profundidad de sus hallazgos y, al mismo tiempo, un sentimiento de vértigo e intimidación frente al misterio que rodea sus palabras. Entre referencias en latín y griego, tratados de alquimia medieval, comparaciones mitológicas complejas y palabras clínicas sumamente exigentes, la voz de Carlitos corre con frecuencia el riesgo de quedar atrapada en universidades y algún culto esotérico.',
      'El propósito central de este curso es romper esa barrera de entrada ordenando y bajando a tierra estas ideas: invito a los participantes a entablar una relación con Carlitos no como si fuera una autoridad allá lejos instalada en un pedestal, sino como si se tratara de un amigo cercano y agudo (como él lo fue para mí) que nos acompaña a mirar los rincones de nuestra propia mente.',
      'Esta aproximación no implica de ningún modo una banalización de sus ideas ni la sustitución del lenguaje técnico por frases motivacionales de autoayuda. Muy por el contrario, la cercanía de Carlitos que me transmitía nos devuelve la intuición de que la psicología analítica (la escuela que él fundó pero que apenas vamos a mencionar ya que no es el objetivo del curso) no nace como una teoría abstracta de laboratorio, sino como un mapa viviente derivado de las experiencias que Carlitos extraía de sus sesiones y de una intensa experiencia humana de autoindagación.',
      'Al abordar el estudio de la mente desde esta perspectiva, el objetivo de la indagación deja de ser la acumulación teórica de conceptos para convertirse en un proceso de autoconocimiento. Carlitos sostenía que la mente es una realidad objetiva tan genuina como el cuerpo físico, equipada con sus propias leyes de autorregulación y compensación. Entender a Carlitos es aprender a descifrar las señales con las que esta mente nos habla a diario.'
    ],
    carlitosCallout: {
      id: 'carlitos-intro-1',
      title: 'Carlitos dice:',
      text: 'No me trates como a un sabio en un pedestal de mármol. Trátame como a ese viejo amigo que se sienta contigo en la penumbra al lado del fuego y te pregunta sin rodeos: ¿qué parte de ti estás dejando morir afuera para que los demás piensen que eres una persona perfectamente adaptada?'
    }
  },
  {
    pageNumber: 2,
    chapterId: 0,
    sectionTitle: 'Introducción',
    pageTitle: 'Vigencia de Jung en el Autoconocimiento',
    subtitle: '¿Siguen siendo útiles las ideas de Carlitos hoy en día?',
    contentType: 'introduction',
    keyTerms: ['Individuación', 'Crisis del Self', 'Desconexión simbólica'],
    paragraphs: [
      'En la cultura contemporánea, caracterizada por las notificaciones del celu, la saturación informativa y la exigencia permanente de ser productivos, las personas nos encontramos expuestas a una disociación con nosotros mismos. No es raro que lo que más aparezca en consultas de coaching y en los procesos de autoconocimiento, sean la sensación de vacío existencial, la cabeza quemada (burnout), la pérdida de propósito y la ansiedad difusa. Cosas que rara vez son desórdenes puramente biológicos o funcionales.',
      'Desde la óptica de Carlitos, estos problemas constituyen señales de protesta de la mente profunda ante la actitud de identificarnos demasiado con solo una parte de nuestro interior. Cuando la persona identifica la totalidad de su ser con sus roles laborales, su reputación social o su intelecto racional, la mente reacciona mediante generando estos estados para avisarnos de que tenemos que volver al equilibrio que una vez tuvimos.',
      'Jung demostró que el ser humano posee una necesidad instintiva de sentido (algo que Albert Camus también mencionó con su teoría del Rey Sísifo, relacionada con la Mitología Perosnal) que requiere el contacto con la dimensión simbólica y numinosa de la existencia. Privar a la conciencia de este diálogo con el inconsciente es lo mismo que privar a un organismo de sus nutrientes esenciales. Por consiguiente, la vigencia de Carlitos para todo lo terapéutico y el desarrollo personal no va en ofrecer fórmulas mágicas de éxito, sino en proporcionar un método de integración.',
      'Es indispensable aclarar que la meta del camino junguiano no es la alcanzar LA "perfección" (el Carlitos siempre ponía caras raras cuando le decían eso) o una felicidad ingenua libre de conflicto, sino el desarrollo de la *completitud* (Ganzheit). Completitud significa aprender a sostener la tensión inevitable entre los opuestos que habitan en nuestra naturaleza humana, reconociendo tanto nuestra luz consciente como los contenidos ensombrecidos que luchan por ser integrados.'
    ],
    carlitosCallout: {
      id: 'carlitos-intro-2',
      title: 'Nota de Contexto Histórico:',
      variant: 'context_note',
      text: 'Aunque las prácticas actuales de autoconocimiento y coaching aparecieron mucho después de su fallecimiento, la preocupación de Jung por la crisis de sentido y el agotamiento del individuo frente al modernismo y la tecnología anticipó con precisión los males actuales.'
    },
    secondaryCallout: {
      id: 'numinoso-glossary',
      title: 'Glosario:',
      variant: 'glossary',
      text: 'Numinoso: Fuerza divina, poder sagrado que infunde temor o fascinación'
    }
  },

  // ==========================================
  // BIOGRAFÍA BREVE DE JUNG (PÁGINAS 3 Y 4)
  // ==========================================
  {
    pageNumber: 3,
    chapterId: 0,
    sectionTitle: 'Biografía Breve',
    pageTitle: 'Formación y el Encuentro con Freud (1875 - 1913)',
    subtitle: 'De la clínica psiquiátrica de Burghölzli a la pelea que marcó su camino',
    contentType: 'biography',
    keyTerms: ['Burghölzli', 'Test de asociación de palabras', 'Complejos', 'Sigmund Freud'],
    historicalNotes: [
      '1875: Nacimiento en Kesswil, Suiza.',
      '1900: Ingreso como médico asistente en la clínica psiquiátrica de Burghölzli (Zúrich).',
      '1907: Primer encuentro presencial con Sigmund Freud en Viena.',
      '1913: Ruptura formal y dimisión a la Sociedad Psicoanalítica Internacional.'
    ],
    paragraphs: [
      'Carl Gustav Jung nació el 26 de julio de 1875 en Kesswil, a orillas del lago Constanza en Suiza. Hijo de Paul Achilles Jung, un pastor protestante que atravesaba serias dudas de fe, y de Emilie Preiswerk, una mujer de personalidad compleja con momentos de marcada inestabilidad emocional pero mucha sensibilidad intuitiva, la infancia de Carlitos estuvo signada por la soledad, la observación de la naturaleza y una temprana fascinación por los misterios de la mente.',
      'Tras realizar sus estudios de medicina en la Universidad de Basilea, Jung decidió especializarse en psiquiatría, una disciplina que en aquel entonces gozaba de escaso prestigio académico pero que para él representaba el punto exacto de convergencia entre las cuestiones biológicas y las espirituales y filosóficas. En 1900 ingresó a la clínica psiquiátrica de Burghölzli en Zúrich, dirigida por el eminente médico Eugen Bleuler.',
      'Fue en Burghölzli donde Jung desarrolló sus experimentos sobre el *test de asociación de palabras*. Al medir el tiempo de respuesta y las reacciones fisiológicas de los participantes frente a una lista de estímulos verbales, demostró de manera empírica la existencia de ideas asociadas con una fuerte carga afectiva inconsciente, creando rigurosamente el concepto científico de *complejo* (*Komplex*).',
      'En 1907, atraído por las teorías sobre la histeria y el inconsciente expuestas en *La interpretación de los sueños*, Jung viajó a Viena para conocer a Sigmund Freud. El primer encuentro derivó en una conversación ininterrumpida de trece horas. Durante años, Freud consideró a Jung como su "príncipe heredero" y el líder natural del movimiento psicoanalítico internacional. Sin embargo, las diferencias de pensamiento fueron acentuándose de forma irreversible.',
      'Mientras Freud concebía la *libido* en términos predominantemente impulsivos y sexuales y el inconsciente como un mero depósito de deseos reprimidos, Jung planteaba que la libido era energía psíquica más amplia que lo sexual y que el inconsciente albergaba niveles creativos más profundos. Tras la publicación de *Símbolos de transformación* (1912), donde Jung hizo pública sus diferencias teóricas, la relación profesional y personal entre ambos se quebró definitivamente en 1913.'
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
      'La ruptura con Freud precipitó en Carlitos un periodo de profunda desorientación personal e incertidumbre profesional, que posteriormente denominó su "confrontación con el inconsciente" (1913-1919), algo que nos sucedería a todos si nos peleamos con nuestro mentor. Durante este intervalo, renunció a sus cargos universitarios para explorar las profundidades de su propia mente. Estas vivencias directas fueron escritas al detalle en su obra manuscrita *Liber Novus* (*El Libro Rojo*), y constituyeron la base experimental de donde salieron sus principales aportes teóricos.',
      'De este fructífero periodo de introspección surgieron conceptos clave como la técnica de la *imaginación activa*, la hipótesis del *inconsciente colectivo* y la estructura de los *arquetipos*. En 1921, Jung publicó una de sus obras de mayor impacto, *Tipos psicológicos*, donde habló de dos conceptos muy conocidos hoy en día: gente *extravertida* e *introvertida*, combinadas con cuatro funciones básicas de la conciencia (pensamiento, sentimiento, sensación e intuición).',
      'Durante las décadas siguientes, Carlitos emprendió extensos viajes de investigación antropo-psicológica a Nuevo México (observando la cultura de los indios Pueblo), África oriental (Kenia e Uganda) e India, buscando verificar que todas las culturas tenían los arquetipos en su mente inconsciente. En su madurez, dedicó años al estudio de la alquimia occidental y oriental, descubriendo en el lenguaje hermético medieval un elaborado sistema de proyecciones psicológicas que describía con precisión el proceso de individuación.',
      'Entre sus obras cumbre destacan *Psicología y alquimia* (1944), *Aion: contribuciones a los simbolismos del sí-mismo* (1951), *Respuesta a Job* (1952) y *Mysterium Coniunctionis* (1955-1956). Finalmente mi amigo Carlitos Jung falleció apaciblemente el 6 de junio de 1961 en su casa a orillas del lago en Küsnacht, dejando un legado monumental que redefinió para siempre la comprensión de la mente humana.'
    ],
    carlitosCallout: {
      id: 'carlitos-bio-2',
      title: 'Nota de Archivo:',
      variant: 'marginalia',
      text: 'Durante su periodo de confrontación con el inconsciente (1913-1919), Jung dedicó infinitas horas a la caligrafía y pintura minuciosa en el Libro Rojo. Descubrió que dibujar los símbolos de su mente frenaba la inundación emocional y permitía dialogar con ellos.'
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
    subtitle: 'Los órganos de la mente',
    contentType: 'text',
    keyTerms: ['Inconsciente personal', 'Inconsciente colectivo', 'mente objetiva'],
    paragraphs: [
      'Para comprender la arquitectura psíquica propuesta por nuestro amigo Carlitos, es indispensable marcar una gran diferencia entre dos dimensiones del inconsciente: el *inconsciente personal* y el *inconsciente colectivo*. Los psicólogos previos a Jung concebían el inconsciente como una biblioteca de la historia del individuo.',
      'El *inconsciente personal* contiene todas las experiencias que han sido adquiridas a lo largo de la existencia de la persona: percepciones subliminales (lo que hoy llamaríamos sesgos cognitivos o metaprogramas), imágenes olvidadas, recuerdos infantiles y, fundamentalmente, impulsos o ideas que han sido reprimidos por el Yo debido a su incompatibilidad con la moral o con la imagen consciente del individuo. Este inconsciente cambia constantemente y es estrictamente individual.',
      'Por debajo de este nivel biográfico se despliega el *inconsciente colectivo*, la verdadera piedra angular de la teoría junguiana. Carlitos descubrió que el inconsciente colectivo no es algo individual, sino una estructura que va más allá, heredada de la biología e innata. Carlitos siempre decía que si el cuerpo humano está predefinido para nacer con dos ojos, una nariz, dos brazos, etc. la mente también está predefinida para venir con ciertos órganos que no se pueden ver ni tocar',
      'Estos órganos están en todos los seres humanos sin importar su año de nacimiento, su cultura o su idioma. La mente no nace como una página en blanco a la espera de ser escrita por la experiencia exterior; nace equipada con patrones de percepción, reacción, conducta y su sistema de símbolos como idioma.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-1',
      title: 'Carlitos dice:',
      text: 'Tu mente no es un apartamento recién construido donde solo viven tus recuerdos de la infancia y tus listas de compras. Viene con cierta cantidad de habitaciones vacías a la espera de ser adornadas. Cuando sientes un temor existencial o una devoción inexplicable, no estás solo en tu biografía: estás pisando el suelo sagrado que pisaron tus antepasados hace diez mil años.'
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
      'Uno de los malentendidos más difundidos sobre la teoría de Jung consiste en confundir el *arquetipo* (*Archetypus*) con una imagen mitológica fija (Soy Hércules, Soy Atenea), una simple categoría (El guerrero, El Héroe) o una representación mental concreta. Carlitos siempre era extremadamente rígido al explicarme este concepto: el arquetipo en sí mismo es una *estructura*, un molde vacío sin contenido concreto propio.',
      'Él siempre comparaba el arquetipo con un mineral cristalino, pero es una metáfora complicada. Podemos decir que el arquetipo es como una partitura: una estructura donde pueden ir diferentes notas, pero la partitura siempre son cinco líneas que modifican el ritmo, la escala y los silencios de la canción. Las notas cambian pero el pentagrama siempre es el mismo. De igual forma, el arquetipo es un río invisible que canaliza la energía psíquica.',
      'Podemos definir el arquetipo como el equivalente mental del instinto biológico. Así como un pájaro hereda el patrón instintivo de construir su nido de determinada manera sin que nadie le haya enseñado, el ser humano hereda patrones para experimentar el mundo: la predisposición a percibir la figura materna, a confrontar la muerte, a buscar un sentido heroico o a arrodillarse ante lo sagrado.',
      'Cuando un arquetipo entra en contacto con las vivencias concretas de una persona se manifiesta en la conciencia como una *representación o imago arquetípica*. Por consiguiente, aunque los símbolos y mitos varíen entre el Egipto faraónico, la Grecia clásica o un sueño contemporáneo, el núcleo arquetípico subyacente permanece estructuralmente idéntico.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-2',
      title: 'Concepto Clave: Arquetipos',
      variant: 'alchemical',
      text: 'El arquetipo es como un molde vacío que tiene forma (como los moldes de galletitas). No importa el sabor de la masa o los ingredientes que le pongamos, la forma final del contenido será la forma del molde. El arquetipo organiza la percepción pero no tiene sustancia hasta que se activa en la vivencia del individuo.'
    }
  },
  {
    pageNumber: 7,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos e Inconsciente Colectivo',
    pageTitle: 'Activación Arquetípica en la Vida Cotidiana',
    subtitle: 'Crisis vitales, experiencias numinosas y activación',
    contentType: 'text',
    keyTerms: ['activación arquetípica', 'Numinosum', 'Crisis del ecuador de la vida', 'Inflación psíquica'],
    paragraphs: [
      'Los arquetipos son fuerzas vivas que se *constelan* (Sí. Carlitos usaba esa palabra pero nosotros a partir de ahora diremos que se *activan* para no confundir con las constelaciones familiares, estructurales, etc) en circunstancias específicas de la vida cotidiana. La activación arquetípica ocurre cuando la persona atraviesa situaciones límite, momentos de transición existencial o crisis para las cuales el Yo no está preparado, y ni hablar si además de esto la mente consciente se identificaba demasiado con el rol perdido. Las viejas soluciones no responden a los nuevos problemas',
      'Los ejemplos más visibles de activación arquetípica cotidiana se relucen en las llamadas crisis de la mediana edad, pérdida de trabajo, la pérdida de un ser querido, etc. Nuestra mente estaba acostumbrada a ser y comportarse de una manera que ya no responde al contexto. En ese momento es que un arquetipo se activa para avisar que la mente tiene que volver a su equilibrio natural o que tiene un mensaje que necesita ser escuchado',
      'Otro mecanismo de activación es la vivencia de lo *numinoso*. Se trata de esa cualidad de fascinación, misterio o temor que experimentamos ante ciertas obras de arte, encuentros afectivos intensos, paisajes naturales majestuosos o sueños que nos dejan pensando. Lo numinoso indica que la conciencia ha entrado en contacto directo con una carga arquetípica profunda.',
      'No obstante, la activación arquetípica puede traer un gran problema: la *inflación psíquica*. Cuando el Yo consciente no logra guardar distancia frente al arquetipo activado, tiende a identificarse demasiado con él. Esto se conoce como la *posesión del arquetipo*, la persona poseída por el arquetipo del Salvador, del Sabio o del Héroe pierde el pensamiento crítico de sus limitaciones humanas, cayendo en la emocionalidad sobredimensionada o en la megalomanía.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-3',
      title: 'Carlitos dice:',
      text: 'Las crisis no son lo único que activan un arquetipo. Los sueños, símbolos que se te aparecen o que te dejan fascinado, interactuar con alguien que representa una figura arquetípica (un jefe, un maestro, alguien que admiras), las sincronicidades o reacciones desproporcionadas ante algo externo son solo algunas de las formas en que los arquetipos se manifiestan'
    },
    secondaryCallout: {
      id: 'crisis-visibles-callout-p7',
      title: 'Anotación Clave',
      variant: 'left_callout',
      position: 'left',
      text: 'Las crisis no son las que activan los arquetipos, solo los hacen visibles pero están ahí todo el tiempo'
    }
  },
  {
    pageNumber: 8,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos e Inconsciente Colectivo',
    pageTitle: 'Individuación y el Principio de Enantiodromía',
    subtitle: 'La tensión de los opuestos y el desarrollo hacia la completitud',
    contentType: 'text',
    keyTerms: ['Individuación', 'Enantiodromía', 'Tensión de opuestos', 'Función trascendente'],
    paragraphs: [
      'El concepto más importante de toda la teoría de Carlitos es el *Proceso de Individuación* (*Individuationsprozess*. Una vez me ganó jugando al ahorcado con esta palabra). Jung definió la individuación como aquel proceso natural de desarrollo psicológico mediante el cual un ser humano llega a convertirse en el individuo autónomo e integrado que potencialmente es desde su nacimiento, desplegando la totalidad de su universo psíquico.',
      'El motor que impulsa este proceso es el baile entre los pares de opuestos complementarios que constituyen la mente (luz y sombra, razón e intuición, día y noche). Para comprender esta dinámica, Jung rescató de la filosofía de Heráclito el término *Enantiodromía* ("correr hacia el opuesto"). La enantiodromía establece que toda fuerza o actitud llevada a un extremo provocará inevitablemente la irrupción brusca de su polo opuesto.',
      'En la práctica de vida, la enantiodromía se manifiesta por ejemplo cuando una persona que ha reprimido sus necesidades emocionales en nombre de un hiperracionalismo frío colapsa repentinamente en un ataque de angustia incontrolable, o cuando una posición muy inflexible se desmorona dando paso a la duda destructiva. La mente no tolera la tiranía de la unilateralidad.',
      'El camino de la individuación no consiste en la victoria de un polo sobre el otro, sino en el sostenimiento consciente de la *tensión entre los opuestos*. Lo ideal es que al no reprimir o a actuar compulsivamente cualquiera de los extremos, la mente genera una fusión superior a través de lo que él denominó la *función trascendente*, uniendo lo consciente y lo inconsciente en una nueva posición simbólica.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-4',
      title: 'Glosario:',
      variant: 'glossary',
      text: 'Enantiodromía: toda actitud o fuerza psíquica llevada a un extremo genera bruscamente la irrupción de su polo opuesto.'
    },
    secondaryCallout: {
      id: 'individuation-callout-p8',
      title: 'Atención:',
      variant: 'left_callout',
      position: 'left',
      text: 'El proceso de individuación es un *proceso* y no un final, por lo que está siempre moviéndose'
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
      'Cuando aplicamos la teoría de los arquetipos e inconsciente colectivo al campo del coaching y desarrollo personal, el foco de atención cambia de manera radical. En lugar de limitarnos a analizar síntomas superficiales o establecer metas de corto plazo, el facilitador aprende a escuchar las palabras del cliente como el despliegue de una historia arquetípica.',
      'Si un cliente presenta un patrón reiterado de sabotaje en sus proyectos profesionales cada vez que está a punto de alcanzar el éxito, la pregunta no es solo qué hábitos o habilidades le faltan, sino qué activación arquetípica se está encendiendo. ¿Está actuando bajo la influencia del *Puer Aeternus* (el eterno joven que teme el compromiso con la realidad terrenal) o padece la proyección de una *Sombra* no asimilada que castiga el triunfo? Cada persona reacciona de diferentes maneras',
      'El trabajo con personas exige una extrema responsabilidad: se debe acompañar al individuo a tomar conciencia de las fuerzas arquetípicas que operan en su vida cuidando que no se vaya a los extremos. El Yo consciente debe permanecer siempre firme y servicial, dialogando con los contenidos del inconsciente sin dejarse inundar por ellos.',
      'Dominar el lenguaje arquetípico le otorga al individuo un mapa de navegación incomparable. Le permite descifrar el sentido profundo de sus crisis, transformar sus aparentes bloqueos en llamados a la evolución interior y asumir la responsabilidad de su propio proceso de individuación.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-5',
      title: 'Nota de Contexto Histórico:',
      variant: 'context_note',
      text: 'Es necesario señalar que el "coaching" como disciplina profesional contemporánea no existía en tiempos de Carlitos. La inclusión del enfoque jungiano aporta profundidad reflexiva.'
    }
  },

  // ==========================================
  // CAPÍTULO 2 — SÍMBOLOS, SUEÑOS, PROYECCIONES (PÁGINAS 10 A 14)
  // ==========================================
  {
    pageNumber: 10,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
    pageTitle: 'El símbolo como vehículo de la mente',
    subtitle: 'El puente funcional entre lo consciente y la energía no procesada',
    contentType: 'text',
    keyTerms: ['Vehículo psíquico', 'Numinosidad', 'Símbolo vivo vs. signo', 'Símbolo espontáneo', 'Mándala psíquico'],
    paragraphs: [
      'Para comprender la arquitectura del inconsciente es imprescindible comprender qué hace un símbolo antes de intentar interpretar sus formas. Un símbolo no es una metáfora poética ni un simple adorno del lenguaje; es el vehículo y puente directo mediante el cual el inconsciente nos envía mensajes que la razón consciente todavía no puede procesar ni formular de forma directa.',
      'A diferencia de un signo elegido para decorar o representar algo ya sabido, el verdadero símbolo posee una cualidad energética viva que Carlitos llamaba *numinosidad*: genera fascinación, inquietud o un profundo impacto emocional que trasciende la comprensión intelectual. Cuando un símbolo pierde esa carga viva y es completamente explicado o domesticado por la costumbre (como lamentablemente ocurre con muchos íconos religiosos convertidos en clichés comerciales), deja de actuar como símbolo y se transforma en un simple *signo*: solo significa lo que estás viendo sin ir a lo profundo.',
      'Esta diferencia se vuelve evidente al comparar una imagen elegida conscientemente con la irrupción de un *símbolo espontáneo*. Observemos el ejemplo del círculo o mándala: lejos de ser una figura abstracta, la forma circular emerge espontáneamente en los dibujos de niños pequeños cuando buscan organizar su mundo, en las visiones de personas en estados de crisis profunda que intentan restaurar su centro, y en los esquemas sagrados de culturas separadas por miles de kilómetros que nunca tuvieron contacto entre sí. Es la misma matriz psíquica intentando contener el caos antes de que la razón pueda nombrarlo.',
      'Reconocer como funcionan los símbolos no es un ejercicio teórico, sino una herramienta práctica de autoconocimiento. Nos permite detectar cuándo una imagen recurrente, un objeto que nos atrae sin explicación o una escena que nos persigue en el día a día no son curiosidades aleatorias, sino un símbolo vivo operando en nuestra mente y llamando a la puerta de la conciencia.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-0',
      title: 'Carlitos dice:',
      text: '¿Alguna vez lloraste con una canción sin saber porqué, o una obra de arte te impactó? El símbolo no es un adorno que te pones para parecer más sabio o profundo. Es un puente colgante sobre el abismo: el inconsciente lanza la primera cuerda desde el otro lado y espera a que tengas el valor de cruzar.'
    }
  },
  {
    pageNumber: 11,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
    pageTitle: 'El error del diccionario de símbolos',
    subtitle: 'Por qué la traducción fija destruye la naturaleza viva de la imagen',
    contentType: 'text',
    keyTerms: ['Diccionario de símbolos', 'Traducción fija', 'Amplificación', 'Asociación personal', 'Pregunta operativa'],
    paragraphs: [
      'Cuando alguien intenta interpretar un sueño o una imagen de su vida interior, la primera reacción suele ser buscar una tabla de equivalencias: consultar un "diccionario de sueños o símbolos" para saber qué significa soñar con serpientes, con agua o con una casa en ruinas. Existe la expectativa extendida de que el inconsciente funciona como un código cifrado donde a cada elemento visual le corresponde una definición fija y universal.',
      'Sin embargo, si decir que un símbolo es la única expresión posible de un contenido inconsciente que no puede traducirse en términos racionales fijos es correcto, la sola idea de un diccionario de símbolos se desmorona. Si un manual pudiera ofrecer una definición precisa y predeterminada de una imagen, esa imagen dejaría de ser un símbolo para convertirse en un simple signo.',
      'Un ejemplo claro de este choque se observa al analizar una misma figura en dos personas distintas. Para una persona que sufrió una experiencia traumática en la infancia, la imagen de una serpiente desencadena un estado de terror puro y amenaza biológica; para otra persona sin esa carga emotiva, la misma imagen evoca sabiduría, renovación y transformación vital. Ambas lecturas son técnicamente legítimas en la mente de cada sujeto, una multiplicidad que ningún diccionario puede sostener porque se queda corto ante la individualidad de cada persona.',
      'El procedimiento riguroso para abordar una imagen inconsciente no es la adivinación ni la búsqueda en un catálogo, sino la *amplificación*. Este método consiste en seguir un procedimiento estructurado: indagar en primer lugar qué asocia la persona de manera directa y personal con esa imagen específica, antes de filtrar la experiencia por lo que la cultura o la tradición dicen que esa figura "debería" significar.',
      'Comprender la amplificación personal nos libra de la trampa del diccionario, pero al mismo tiempo plantea una pregunta fundamental: una vez que identificamos las asociaciones personales de una imagen, ¿de qué manera concreta podemos entablar un diálogo activo y directo con ella para integrar su mensaje en el día a día?'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-1',
      title: 'Carlitos dice:',
      text: 'Comprar un diccionario de sueños para entender tu mente es como usar un catálogo de repuestos de autos para descifrar un poema de amor. Te dará nombres de piezas, pero se perderá por completo el sentido de la música.'
    }
  },
  {
    pageNumber: 12,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Símbolos, Sueños y Proyecciones',
    pageTitle: 'La Función Compensatoria del Sueño',
    subtitle: 'La mente como sistema autorregulado frente al sesgo del Yo',
    contentType: 'text',
    keyTerms: ['Función compensatoria', 'Autorregulación psíquica', 'Unilateralidad del Yo', 'Teleología del sueño'],
    paragraphs: [
      'La teoría de la interpretación de los sueños desarrollada por Carlitos difiere bastante del enfoque psicoanalítico clásico de Freud. Mientras que para Freud el sueño cumplía una función conservadora (disfrazar deseos infantiles reprimidos para que el individuo pudiera seguir durmiendo), Jung concibió el sueño como un producto natural y espontáneo cuyo significado (aunque hable en lenguaje de símbolos) era literal.',
      'La idea fundamental de Carlitos es que la mente opera como un *sistema que se autorregula*, igualito al cuerpo físico. Así como el cuerpo genera sudor para enfriarse cuando la temperatura sube, la mente genera sueños para corregir y equilibrar las actitudes rígidas o distorsionadas de la conciencia.',
      'Esta es la famosa *función compensatoria* del sueño. Si una persona cultiva durante el día una actitud de orgullo desmedido, rigidez absoluta o racionalismo frío, el inconsciente producirá por la noche imágenes de humillación, laberintos caóticos o pérdidas de control para avisar que una parte suya no está siendo escuchada, y así conseguir que el Yo haga algo al respecto.',
      'Asimismo, dice que los sueños poseen una dimensión *adivinatoria*: no en el sentido de una predicción literal del futuro, sino como un mapa de lo que puede pasar si no hacemos caso al sueño. El sueño muestra hacia dónde fluye la energía psíquica y advierte sobre los peligros inminentes si la postura de la mente consciente no se modifica a tiempo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-2',
      title: 'Cita Histórica de C. G. Jung:',
      variant: 'historical_quote',
      text: 'El sueño es la pequeña puerta escondida en el santuario más íntimo y secreto del alma, que se abre hacia esa noche cósmica que era mente mucho antes de que existiera el Yo consciente.'
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
      'La *proyección* es un mecanismo psicológico inconsciente e involuntario mediante el cual una persona le atribuye a un objeto, persona o situación del mundo exterior significados, valores o cualidades que en realidad pertenecen a su propia mente y que no han sido reconocidos ni integrados por la conciencia.',
      'Un aspecto clave sobre el que Carlitos insistía es que la proyección *nunca es un acto a propósito* del Yo. Uno no "decide" proyectar; la proyección simplemente sucede. La conciencia se limita a registrar el resultado: vemos en el otro una cualidad de manera hipertrofiada, convencidos de que dicha cualidad le pertenece realmente a esa persona.',
      '¿Cómo podemos identificar verdaderamente que estamos bajo el influjo de una proyección? El factor más revelador es la presencia de una *carga emocional desproporcionada*. Cuando nuestra reacción frente a la conducta de alguien está entre la fascinación irrazonable (idealización/enamoramiento ciego) o la irritación visceral desmesurada (odio/repulsión obsesiva), estamos invariablemente ante la huella de un contenido proyectado.',
      'Además, la proyección suele requerir un "gancho" en el mundo real: una pequeña característica real en la persona receptora que sirve como percha sobre la cual el inconsciente cuelga un traje gigantesco de fantasía arquetípica o personal. Reconocer el gancho es el primer paso para desmantelar el espejismo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-4',
      title: 'Carlitos dice:',
      text: 'Todo lo que te irrita de los demás puede llevarte a una profunda comprensión de ti mismo. Cuando apuntas a alguien con un dedo acusador lleno de rabia, observa detenidamente tu mano: hay tres dedos apuntando directamente hacia tu propio pecho.'
    }
  },

  // ==========================================
  // CAPÍTULO 3 — ARQUETIPOS ESTRUCTURALES Y DE CONTENIDO (PÁGINAS 14 A 17)
  // ==========================================
  {
    pageNumber: 14,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Arquetipos Estructurales y de Contenido',
    pageTitle: 'Arquetipos Estructurales: La Arquitectura de la Mente',
    subtitle: 'Persona, Sombra, Anima/Animus y Self — El aparato psíquico básico',
    contentType: 'text',
    keyTerms: ['Arquetipos Estructurales', 'Hardware mental', 'Funciones de los arquetipos'],
    paragraphs: [
      'Para comprender el funcionamiento profundo de la mente humana, Carlitos diferenció dos grandes dimensiones arquetípicas: los arquetipos estructurales y los arquetipos de contenido. Los *Arquetipos Estructurales* están integrados por la Persona, la Sombra, el Anima o Animus y el Self. Constituyen el aparato psíquico básico presente en todo ser humano sin excepción. Lejos de ser simples personajes o imágenes míticas, estos cuatro elementos representan la arquitectura fija de la mente, el verdadero "hardware" que guía nuestra experiencia humana con independencia de la época o la cultura.',
      'Esta estructura opera como una red de arquetipos interconectados donde ninguno de ellos existe de manera aislada. Aquellas facetas de la personalidad que la Persona rechaza para encajar en el entorno social pasan inmediatamente a poblar el territorio de la Sombra. A su vez, aquello que la Sombra no logra asimilar suele proyectarse hacia el mundo exterior a través de proyecciones para luego trabajar con el ánima o ánimus. En el centro de esta danza, el Self actúa como la fuerza coordinadora que busca integrar la totalidad del sistema, lo que significa que cualquier alteración o rigidez en uno de estos cuadrantes redistribuye inevitablemente la tensión en los otros tres.',
      'Cada arquetipo estructural posee una función adaptativa indispensable y se despliega entre dos polaridades fundamentales. La Persona nos permite adaptarnos con flexibilidad al tejido social, aunque su distorsión provoca la pérdida de la autenticidad cuando el individuo se confunde por completo con su máscara. La Sombra guarda no solo impulsos no deseados, sino también la "sombra dorada" de nuestros talentos reprimidos, volviéndose destructiva solo cuando es negada. El Anima y el Animus nos conectan con la sabiduría relacional o la asertividad interna, pero su polarización genera idealizaciones ciegas o dogmatismos inflexibles. Finalmente, el Self sostiene el sentido global de propósito y coherencia, corriendo el riesgo de caer en la posesión si el Yo comete el error de identificarse con la totalidad.',
      'Es crucial comprender que estos arquetipos nunca se manifiestan en estado puro ni de forma abstracta, sino que se comunican siempre a través de imágenes (u otros arquetipos) de contenido. La Sombra, por ejemplo, no se presenta a la conciencia como una teoría, sino encarnada en la figura de un rival, un monstruo en un sueño o un antagonista proyectado. De este modo, los arquetipos estructurales son los que determinan el panorama global de lo que está ocurriendo en la mente, mientras que los arquetipos de contenido componen la narrativa viva a través de la cual la persona experimenta su proceso.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-1',
      title: 'Aclaración:',
      variant: 'context_note',
      text: 'Los arquetipos estructurales y de contenido no son un término creado por Jung, sino una simplificación hecha para que se entiendan mejor las funciones de los arquetipos. Muchos de sus alumnos quisieron dividirlos en categorías con mayor o menor éxito. Nuestro objetivo es entender fácilmente las ideas de Carlitos.'
    }
  },
  {
    pageNumber: 15,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Arquetipos Estructurales y de Contenido',
    pageTitle: 'Arquetipos de Contenido: El Vocabulario Simbólico',
    subtitle: 'Héroe, Sabio, Trickster, Gran Madre, etc.  — Las imágenes de la manifestación',
    contentType: 'text',
    keyTerms: ['Arquetipos de Contenido', 'Vocabulario psíquico', 'Máscaras temporales', 'Patrón narrativo', 'Sombra del contenido'],
    paragraphs: [
      'Si los arquetipos estructurales representan la estructura básica del inconsciente colectivo, los *Arquetipos de Contenido* tales como el Héroe, el Sabio, la Gran Madre, el Rey, el Trickster y una infinidad de ellos constituyen las palabras concretas y cambiantes de su vocabulario. Estas figuras míticas son las imágenes y máscaras temporales a través de las cuales el mensaje que traen cobra vida en el teatro de la existencia diaria, variando su disfraz y simbolismo según el contexto cultural e histórico de cada individuo.',
      'Ninguno de estos arquetipos de contenido funciona como una entidad aislada o independiente; cada uno es una manifestación visible de los cuadrantes estructurales profundos. El Héroe, por ejemplo, expresa la energía del Yo enfrentando la prueba del mundo mientras combate a la Sombra proyectada en sus adversarios. El Sabio encarna la búsqueda de orden y trascendencia promovida por el Self a través del conocimiento. La Gran Madre canaliza tanto la nutrición afectiva del Anima como los aspectos devoradores de la Sombra, mientras que el Trickster o Embaucador es la Sombra activa irrumpiendo para desmantelar las pretensiones rígidas de la Persona.',
      'El valor práctico de estas figuras no está en memorizar una lista estática de nombres mitológicos, sino en reconocer el patrón que activan cuando aparecen en nuestra vida cotidiana. Al identificar si en determinado momento estamos actuando desde la búsqueda de comprensión del Sabio, la vulnerabilidad del Niño Divino o la confrontación del Héroe, obtenemos un mapa claro de lo que nos sucede adentro.',
      'Finalmente, la llamada "contracara negativa" de cada arquetipo surge cuando esa figura en particular es capturada por su Sombra no integrada. Cuando esto ocurre, la valentía del Héroe degenera en tiranía y sobreexigencia, la luz del Sabio se distorsiona en manipulación fría y distante; la contención de la Gran Madre se transforma en sofocación asfixiante; la inocencia del Niño Divino se congela en un victimismo paralizante; y la astucia del Trickster se convierte en puro sabotaje sin función creativa. Reconocer estos giros nos permite recuperar el equilibrio y encauzar nuevamente nuestra narrativa personal.'
    ],
    secondaryCallout: {
      id: 'contenido-structural-bridge-p16',
      title: 'Anotación Clave',
      variant: 'left_callout',
      position: 'left',
      text: 'Los estructurales determinan una dirección; los de contenido construyen la narrativa viva.'
    }
  },
  {
    pageNumber: 16,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Arquetipos Estructurales y de Contenido',
    pageTitle: 'Tabla I — Arquetipos Estructurales',
    subtitle: 'Estructura básica de los arquetipos',
    contentType: 'table',
    tableData: [
      {
        archetype: 'Persona (La Máscara Social)',
        symbols: 'Máscaras teatrales, vestuario profesional, armaduras, uniformes, escudos.',
        distortion: 'Identificación total con el rol (hipocresía), pérdida de la autenticidad, vacío psíquico cuando cae la máscara.'
      },
      {
        archetype: 'Sombra (El Aspecto No Integrado)',
        symbols: 'El doble oscuro, el monstruo del sótano, gemelos rivales, animales nocturnos, vagabundos.',
        distortion: 'Impulsos destructivos negados, posesión compulsiva, proyección de envidia y rabia moral, victimismo paralizante.'
      },
      {
        archetype: 'Anima (En el hombre) / Animus (En la mujer)',
        symbols: 'Anima: Sirena, la musa, la reina misteriosa. Animus: El sabio guerrero, el tribunal de jueces, el héroe.',
        distortion: 'Anima: Caprichos sentimentales, apatía, venenos afectivos. Animus: Dogmatismo inflexible, opiniones obstinadas.'
      },
      {
        archetype: 'Self / Sí-Mismo (Centro Organizador)',
        symbols: 'El mándala, la piedra filosofal, la flor de loto, la cuadratura del círculo, el cristal sagrado.',
        distortion: 'Inflación egoica (identificación del Yo con el Self), misticismo evasivo o mesiánico desconectado de la realidad.'
      }
    ],
    paragraphs: [
      'Esta primera tabla resume las cuatro funciones que componen la arquitectura fija de la psique humana. Cada arquetipo cumple una tarea de adaptación indispensable, y su falta de integración da lugar a polos de distorsión característicos.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-2',
      title: 'Paralelo Hermético & Alquímico:',
      variant: 'alchemical',
      text: 'La Persona es la vestimenta alquímica para tratar con el mundo exterior; la Sombra es la Nigredo (la materia no purificada); el Anima/Animus es la Syzygia o bodas sagradas; y el Self es el Lapis Philosophorum.'
    }
  },
  {
    pageNumber: 17,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Arquetipos Estructurales y de Contenido',
    pageTitle: 'Tabla II — Arquetipos de Contenido',
    subtitle: 'Imágenes vivas: Patrón Narrativo, Símbolos Comunes y Distorsiones',
    contentType: 'table',
    tableData: [
      {
        archetype: 'El Héroe (Confrontación y Prueba)',
        symbols: 'La espada, el laberinto, la lucha con el dragón, la cima de la montaña, la antorcha.',
        distortion: 'Tiranía, complejo de salvador y temeridad suicida (el Héroe capturado por la Sombra).'
      },
      {
        archetype: 'El Sabio / Anciano Sabio (Comprensión)',
        symbols: 'El libro antiguo, el faro en la tormenta, el ermitaño, el báculo, el pozo de sabiduría.',
        distortion: 'Manipulación fría, dogmatismo intelectual y desapego afectivo paralizante.'
      },
      {
        archetype: 'La Gran Madre (Contención y Cuidado)',
        symbols: 'La cueva fecunda, la tierra nutricia, la vasija sagrada, el árbol de la vida, el océano.',
        distortion: 'Sofocación y Madre Devoradora: sobreprotección asfixiante que impide la autonomía.'
      },
      {
        archetype: 'El Niño Divino (Vulnerabilidad y Potencial)',
        symbols: 'El brote dorado, la chispa de luz, el niño rey, alas de Ícaro, fuentes mágicas.',
        distortion: 'Victimismo permanente y puerilismo crónico (fobia al compromiso y a las limitaciones del mundo real).'
      },
      {
        archetype: 'El Trickster / Embaucador (Disrupción)',
        symbols: 'El coyote, el bufón de la corte, la máscara bivalente, el camaleón, el fuego fatuo.',
        distortion: 'Sabotaje puro sin función creativa, caos destructivo e irresponsabilidad absoluta.'
      }
    ],
    paragraphs: [
      'Hay tantos arquetipos como situaciones típicas de la experiencia humana. Es una lista abierta aunque los nombrados aquí sean más frecuentes'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-4',
      title: 'Carlitos dice:',
      text: 'Cuando entiendes que el Héroe, el Sabio y el Trickster habitan todos bajo tu mismo techo, dejas de proyectarlos en héroes de televisión o villanos de turno. Empiezas a dirigir tu propia historia.'
    }
  },
  {
    pageNumber: 18,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Arquetipos estructurales, de contenido e imágenes',
    pageTitle: 'El Camino de Integración Completo (Parte I)',
    subtitle: 'De la vasija inicial a las sombras proyectadas y los umbrales del inconsciente',
    contentType: 'text',
    keyTerms: ['Matriz indiferenciada', 'Persona y máscara', 'Sombra personal', 'Mecanismo de proyección', 'Anima y Animus'],
    paragraphs: [
      '**El primer arquetipo: Persona:** Al nacer, la mente humana comienza como un molde vacío: posee las tendencias heredadas de los arquetipos estructurales (Persona, Sombra, Anima, Self), pero vacía de historia personal. Al crecer en sociedad, la necesidad de adaptación exige construir la *Persona*, es decir, el rol social, profesional y familiar con el que nos presentamos ante el mundo. A medida que una persona se identifica exclusivamente con esa máscara pulcra y complaciente, surge una consecuencia inevitable: para mantener intacta su imagen social, se ve obligada a rechazar e ignorar todos aquellos impulsos, vulnerabilidades o deseos que no encajan en el molde. Cada vez que sostienes un "yo jamás haría algo así" solo para proteger tu reputación, estás financiando la construcción de tu Persona a costa de tu propia totalidad.',
      '**El Nacimiento de la Sombra:** Todo lo que la Persona desecha no desaparece; se acumula en el inconsciente dando origen a la *Sombra*. Allí conviven temores infantiles reprimidos, aspectos arcaicos, pero también la llamada "Sombra Dorada": talentos, creatividad y sensibilidad relegados por considerarlos signos de debilidad. Al ser ignorados, estos contenidos buscan salir mediante la *proyección*: comenzamos a percibir nuestra propia agresividad o inseguridad no reconocida en los demás, sintiendo hacia ellos una irritación visceral e irrazonable. La marca inconfundible de la proyección es esa desproporción emocional. Si la conducta de alguien te genera un rechazo desmedido, no estás evaluando a esa persona con objetividad: te estás tropezando con tu propio espejo no asimilado.',
      '**El Umbral del Anima/Animus:** Como la proyección no resuelve la tensión interna, la mente alcanza un punto de ruptura. Cuando la máscara social ya no puede solucionar una crisis, se activa la función autorreguladora del inconsciente: la energía acumulada se manifiesta en insomnio, síntomas corporales o sueños perturbadores. Al atender esta llamada y traspasar la Sombra, nos encontramos con el *Anima* en el hombre o el *Animus* en la mujer. Este arquetipo funciona como un puente hacia el inconsciente profundo, evolucionando desde la fascinación instintiva hasta la sabiduría relacional y espiritual. Dejar de exigirle a tu pareja o seres queridos que encarnen tu ideal interno de perfección es el primer paso para vincularte con seres humanos reales.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-5a',
      title: 'Mi amigo Carlitos dice:',
      variant: 'context_note',
      text: 'Reconocer nuestras máscaras y proyecciones no es un mero ejercicio intelectual; es el requisito indispensable para dejar de culpar al entorno y tomar las riendas de nuestra evolución psíquica.'
    }
  },
  {
    pageNumber: 19,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Arquetipos estructurales, de contenido e imágenes',
    pageTitle: 'El Camino de Integración Completo (Parte II)',
    subtitle: 'Arquetipos narrativos, el arte de la amplificación y la travesía hacia el Self',
    contentType: 'text',
    keyTerms: ['Arquetipos de contenido', 'Amplificación simbólica', 'Eje Yo-Self', 'Riesgo de inflación', 'Proceso de individuación'],
    paragraphs: [
      '**Los Arquetipos de Contenido:** Conforme la energía psíquica se moviliza, el viaje personal adopta forma física a través de los *Arquetipos de Contenido*: en momentos de lucha nos experimentamos como el Héroe en el laberinto; ante la búsqueda de guía aparece el Viejo Sabio y así. Para interpretar estos símbolos sin caer en lecturas superficiales se utiliza la *Amplificación*: Preguntarle a un sueño o emoción recurrente "¿qué acción concreta me pides hoy?" transforma la teoría en una brújula práctica de decisión.',
      '**El Centro de la Totalidad (Self):** Tras trabajar la Sombra, el Anima mediante la integración de opuestos y los conflictos no resueltos con otros arquetipos la conciencia entra en contacto con el *Self*: la totalidad de la psique y el centro regulador del ser. Aquí diferencia el Yo (el centro de la conciencia) del Self (el círculo completo). En este umbral surge el mayor peligro: la *inflación*, donde el Yo cree ser la fuente de la luz y cae en la soberbia espiritual. La individuación auténtica exige que el Yo actúe como un servidor humilde y ético de la totalidad. No es un destino final sino un camino. La verdadera individuación no te promete una vida sin tormentas, sino la madurez interna para responder a cada crisis con tu ser completo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-5b',
      title: 'Mi amigo Carlitos dice:',
      variant: 'context_note',
      text: 'El viaje desde la Persona hasta el Self no es una línea recta, sino una espiral. Caer, tropezar con la Sombra y volver a empezar es la única manera en que la conciencia aprende a sostener la luz sin quemarse.'
    }
  },

  // ==========================================
  // CAPÍTULO 4 — LEGADO: DISCÍPULOS QUE CONTINUARON LA OBRA DE JUNG (PÁGINAS 20 A 22)
  // ==========================================
  {
    pageNumber: 20,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — Legado y Continuidad',
    pageTitle: 'Marie-Louise von Franz y Erich Neumann',
    subtitle: 'Cuentos de hadas, alquimia y el desarrollo histórico de la conciencia',
    contentType: 'legacy',
    keyTerms: ['Marie-Louise von Franz', 'Cuentos de hadas', 'Erich Neumann', 'Evolución de la conciencia'],
    paragraphs: [
      'La psicología analítica no quedó petrificada como un monumento estático tras la muerte de Jung. Por el contrario, un grupo extraordinario de discípulos directos y colaboradores dedicó sus vidas a systematizar, profundizar y expandir los descubrimientos del maestro suizo.',
      '**Marie-Louise von Franz (1915 - 1998)** es considerada con justicia la heredera intelectual más cercana a Jung. Conoció a Jung a los 18 años y colaboró con él ininterrumpidamente durante más de tres décadas, especialmente en la traducción e interpretación de textos latinos y griegos de alquimia. El aporte genial y propio de Von Franz estriba en la demostración de que los *cuentos de hadas tradicionales* constituyen la manifestación más pura, directa e incólume del inconsciente colectivo, desprovista de las elaboraciones culturales complejas de las grandes mitologías. Obras suyas como *La interpretación de los cuentos de hadas* y *El Puer Aeternus* son piezas maestras de la literatura junguiana.',
      '**Erich Neumann (1905 - 1960)**, médico y psicólogo analítico alemán que emigró a Tel Aviv huyendo del nazismo, mantuvo un fructífero intercambio epistolar con Jung. Neumann realizó una contribución monumental al articular el desarrollo de la conciencia individual con la historia evolutiva de la humanidad en su obra cumbre *Las etapas iniciales de la evolución de la conciencia* (1949), para la cual Jung escribió un prólogo lleno de entusiasmo. Su estudio sobre *La Gran Madre* sigue siendo la referencia obligada para comprender la arqueología del arquetipo femenino.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-1',
      title: 'Cita Histórica (Marie-Louise von Franz):',
      variant: 'historical_quote',
      text: 'Los cuentos de hadas representan la anatomía comparada de la mente. En ellos el inconsciente colectivo se expresa sin los ropajes dogmáticos ni los sesgos de las grandes religiones organizadas.'
    }
  },
  {
    pageNumber: 21,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — Legado y Continuidad',
    pageTitle: 'Aniela Jaffé y James Hillman',
    subtitle: 'Testimonio histórico vs. la ruptura de la Psicología Arquetipal',
    contentType: 'legacy',
    keyTerms: ['Aniela Jaffé', 'Biografía oficial', 'James Hillman', 'Psicología arquetipal', 'Policentrismo psíquico'],
    paragraphs: [
      '**Aniela Jaffé (1903 - 1991)** desempeñó un rol de fundamental trascendencia como secretaria de Jung y secretaria organizadora del Instituto C. G. Jung de Zúrich. Jaffé fue la colaboradora designada por el propio Jung para registrar, coordinar y dar forma narrativa a su célebre autobiografía *Recuerdos, sueños, pensamientos* (1961). Además de su impagable labor como biógrafa e historiadora del movimiento, Jaffé realizó importantes ensayos sobre la función del símbolo en el arte moderno y la significación psicológica de las vivencias parapsicológicas.',
      '**James Hillman (1926 - 2004)** representa el desarrollo más audaz, provocador y crítico del pensamiento posjunguiano. Tras formarse en Zúrich y ejercer como director de estudios del Instituto Jung, Hillman se distanció gradualmente de la ortodoxia junguiana clásica para fundar la denominada *Psicología Arquetipal*.',
      'Hillman criticó lo que consideraba un "monoteísmo del Yo y del Self" en la teoría tradicional, proponiendo en su lugar una concepción *policéntrica y poética de la mente*. Para Hillman, el objetivo de la psicología no debe ser "curar" los síntomas integrándolos en un Self unificado, sino hacer lugar a la multiplicidad de las imágenes del alma (*soul-making*). En obras como *Re-imaginando la psicología* y *El código del alma*, cuestionó el biologicismo reduccionista y devolvió la psicología a su raíz de diálogo con el mito y el arte.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-2',
      title: 'Carlitos dice:',
      text: 'Me llena de orgullo ver que mis discípulos no se limitaron a repetir mis frases como loros amaestrados. Neumann tuvo el valor de corregirme; Von Franz llevó el método donde yo no llegué; y Hillman tuvo la audacia de desmontar mis ideas para volver a armarlas de otra manera. Un verdadero maestro no busca seguidores sumisos; busca mentes libres que continúen el fuego.'
    }
  },
  {
    pageNumber: 22,
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
  // CAPÍTULO 5 — EJERCICIOS PRÁCTICOS (PÁGINAS 23 A 26)
  // ==========================================
  {
    pageNumber: 23,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Ejercicios Prácticos',
    pageTitle: 'Ejercicio 1: Amplificación Simbólica',
    subtitle: 'Exploración del significado profundo de sueños, imágenes y objetos recurrentes',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-symbolic-amplification',
      title: 'Ejercicio 1 — Amplificación Simbólica',
      objective: 'Ampliar el significado posible de un símbolo de cualquier origen: un sueño, una imagen que te persigue, una figura que aparece recurrentemente en tu vida o un objeto que te genera fascinación inexplicable.',
      steps: [
        {
          stepNumber: 1,
          title: 'Paso 1 — Identificar el símbolo',
          instruction: 'Elegí la imagen o figura a trabajar. Lo único necesario es que tenga carga emocional reconocible (algo que te resuena más de lo que la lógica explicaría).'
        },
        {
          stepNumber: 2,
          title: 'Paso 2 — Describir el símbolo con precisión',
          instruction: 'Antes de interpretar nada, escribí una descripción detallada: forma, color, contexto en el que aparece, qué hace o qué rol cumple, qué sensación te genera al pensarlo. Cuanto más preciso el registro, mejor sostiene el resto del ejercicio.'
        },
        {
          stepNumber: 3,
          title: 'Paso 3 — Asociación personal',
          instruction: 'Preguntate: ¿qué me trae esta imagen a la mente? ¿La asocio con algún recuerdo, persona, etapa o vínculo concreto de mi vida? Anotá todo lo que surja sin filtrar ni descartar nada. Si esta asociación explica por completo la emoción que sentís, el ejercicio puede terminar acá. No todo símbolo necesita amplificación.'
        },
        {
          stepNumber: 4,
          title: 'Paso 4 — Búsqueda de paralelos culturales',
          instruction: 'Buscá esa misma imagen en al menos cinco fuentes de tradiciones distintas y no conectadas entre sí: mitología, religión, alquimia, folclore, cuentos tradicionales, arte de distintas épocas. Registrá qué significado o función cumple esa imagen en cada una. Se puede usar IA para encontrar referencias pero no se recomienda dejar que te guíe en este proceso.'
        },
        {
          stepNumber: 5,
          title: 'Paso 5 — Comparar sin traducir',
          instruction: 'Para cada paralelo encontrado, anotá qué rango de significado aporta sin decidir todavía cuál aplica a tu caso. Es una pregunta abierta: "en esta tradición esta imagen representa X — ¿tiene algo que ver con mi situación actual? ¿Cuánto del 1 al 10?"'
        },
        {
          stepNumber: 6,
          title: 'Paso 6 — Verificar resonancia',
          instruction: 'Releé cada paralelo y prestá atención a tu reacción — corporal, emocional, de reconocimiento. ¿Alguno genera un "hay algo ahí" genuino? Si ninguno resuena, no fuerces una lectura, registrá esa ausencia como resultado válido del ejercicio.'
        },
        {
          stepNumber: 7,
          title: 'Paso 7 — Retorno a lo concreto',
          instruction: 'Con el paralelo que sí resonó, preguntate en términos específicos y actuales: ¿qué aspecto mío, qué situación o decisión presente se relaciona con esto? Cerrá el ejercicio con una frase que conecte el símbolo con algo real de tu vida ahora — no con la referencia cultural en abstracto.'
        }
      ],
      applicationExample: 'Ejemplo de Amplificación: Alguien sueña repetidamente con un cuervo posado sobre una llave antigua. En sus asociaciones personales no encuentra explicación. Al investigar tradiciones, descubre que en la mitología nórdica el cuervo es mensajero de sabiduría profunda y en la alquimia representa el nigredo (la descomposición fértil). Esa resonancia de "muerte previa a la renovación" le permite comprender y destrabar un cambio vital que postergaba por temor.',
      closurePrompt: 'Registro Personal de Amplificación Simbólica:',
      inputFieldKey: 'workbook_symbolic_amplification',
      inputPlaceholder: ''
    },
    paragraphs: [
      'La amplificación simbólica es la herramienta junguiana por excelencia para desplegar el abanico de significados vivos de una imagen sin reducirla a un dogma prefabricado.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-1',
      title: 'Nota Metodológica de Integración:',
      variant: 'context_note',
      text: 'Recuerda que los símbolos no buscan entregarte explicaciones académicas sobre mitología; son llaves vivas para orientar decisiones conscientes en tu realidad cotidiana.'
    }
  },
  {
    pageNumber: 24,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Ejercicios Prácticos',
    pageTitle: 'Ejercicio 2: Imaginación Activa',
    subtitle: 'Diálogo consciente con figuras e imágenes autónomas del inconsciente',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-active-imagination',
      title: 'Ejercicio 2 — Imaginación Activa',
      objective: 'Entrar en diálogo consciente con una figura interna, dejándola desplegarse con autonomía, en un estado intermedio entre la vigilia y el trance.',
      steps: [
        {
          stepNumber: 1,
          title: 'Paso 1 — Elegir el punto de partida',
          instruction: 'Seleccioná una imagen concreta: una figura de un sueño reciente, un estado de ánimo persistente, una fantasía espontánea que vuelve. No inventes una figura nueva desde cero — Empezá por algo que ya se manifestó por su cuenta.'
        },
        {
          stepNumber: 2,
          title: 'Paso 2 — Bajar el ritmo',
          instruction: 'Sentate en silencio, cerrá los ojos, dejá que la mente se aquiete unos minutos. El objetivo es reducir el control activo del yo sobre el pensamiento, sin perder la consciencia de vigilia.'
        },
        {
          stepNumber: 3,
          title: 'Paso 3 — Convocar la imagen',
          instruction: 'Traé la figura elegida a la mente con la mayor nitidez posible. No la dirijas todavía — solo dejala aparecer y estabilizarse.'
        },
        {
          stepNumber: 4,
          title: 'Paso 4 — Dejarla actuar',
          instruction: 'Observá qué hace la figura si no la controlás. Si empieza a moverse, hablar o transformarse, seguila sin forzar la dirección. La regla central: no decidas vos lo que la figura dice o hace — dejá que emerja con su propia lógica.'
        },
        {
          stepNumber: 5,
          title: 'Paso 5 — Participar, no desaparecer',
          instruction: 'Si la figura te habla o interactúa, respondé genuinamente, como en una conversación real. Mantené tu propio punto de vista — podés preguntar, discrepar, pedir aclaración. El yo participa activamente, no se disuelve pasivamente en la fantasía.'
        },
        {
          stepNumber: 6,
          title: 'Paso 6 — Marcar el final',
          instruction: 'Cuando sientas que el diálogo llegó a un cierre natural, o cuando decidas parar, hacelo conscientemente — no lo cortes en medio de algo sin cerrar de alguna forma, aunque sea abrupta.'
        },
        {
          stepNumber: 7,
          title: 'Paso 7 — Registrar de inmediato',
          instruction: 'Escribí o dibujá todo lo que ocurrió apenas termines, con el mayor detalle posible: qué dijo o hizo la figura, qué respondiste vos, qué sentiste.'
        },
        {
          stepNumber: 8,
          title: 'Paso 8 — Revisar sin sobreinterpretar en el momento',
          instruction: 'No analices el contenido inmediatamente después del ejercicio. Dejalo reposar y volvé a leerlo al día siguiente, con distancia — ahí podés aplicar amplificación (Ejercicio 1) sobre lo que apareció, si hace falta profundizar.'
        }
      ],
      exampleLabel: 'Advertencia importante:',
      applicationExample: 'Si durante la imaginación activa aparece contenido perturbador, con carga muy intensa, o sensación de pérdida de control sobre el proceso, hay que detener el ejercicio y, si se repite, trabajarlo con acompañamiento profesional. No es un método para procesar en soledad cuando el material que surge desborda la capacidad de sostenerlo con distancia.',
      closurePrompt: '',
      inputFieldKey: 'workbook_active_imagination',
      inputPlaceholder: ''
    },
    paragraphs: [
      'La Imaginación Activa es una técnica fundamental en la psicología analítica. No es un mero ensueño pasivo ni una fantasía dirigida, sino un diálogo de igual a igual entre la conciencia y los contenidos autónomos del inconsciente.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-2',
      title: 'Nota Metodológica de Integración:',
      variant: 'context_note',
      text: 'Jung advirtió que la Imaginación Activa requiere que el Yo participe con absoluta seriedad y juicio crítico. No se trata de someterse pasivamente a la imagen ni de manipularla, sino de sostener un encuentro ético real.'
    }
  },
  {
    pageNumber: 25,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Ejercicios Prácticos',
    pageTitle: 'Ejercicio 3: Rastreo de Sombra Dorada',
    subtitle: 'Descubrimiento de talentos reprimidos vía irritación y cumplidos rechazados',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-golden-shadow',
      title: 'Ejercicio 3 — Rastreo de Sombra Dorada',
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
      closurePrompt: '',
      inputFieldKey: 'workbook_golden_shadow',
      inputPlaceholder: ''
    },
    paragraphs: [
      'No toda la Sombra es oscura ni destructiva. Con frecuencia reprimimos nuestros mejores talentos, nuestra capacidad de brillo o nuestro liderazgo por condicionamientos educacionales. La envidia es la brújula que indica dónde enterraste tu oro.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-3',
      title: 'Nota Metodológica de Integración:',
      variant: 'context_note',
      text: 'La Sombra Dorada comprende aquellas virtudes, talentos y destellos de liderazgo que reprimiste por temor al rechazo o a parecer arrogante. La envidia o fascinación es el indicador primario de ese potencial enterrado.'
    }
  },
  {
    pageNumber: 26,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Ejercicios Prácticos',
    pageTitle: 'Síntesis del Viaje e Integración en la Vida Cotidiana',
    subtitle: 'La firma del compromiso ético con el propio proceso de individuación',
    contentType: 'conclusion',
    keyTerms: ['Síntesis del proceso', 'Compromiso ético', 'Responsabilidad cotidiana', 'Cierre de la jornada'],
    paragraphs: [
      'Has recorrido 26 páginas de exploración a través de las profundidades de la psicología analítica. Has examinado las fronteras del inconsciente colectivo, desentrañado la naturaleza a priori de los arquetipos, aprendido a escuchar el lenguaje compensatorio de los sueños y comprendido la mecánica de la proyección.',
      'Asimismo, has conocido el legado de los grandes discípulos de Jung y has puesto a prueba herramientas concretas para auditar tus máscaras sociales, rescatar tu Sombra Dorada y entablar diálogos vivos con los símbolos de tu alma.',
      'Llegados a este punto, la responsabilidad vuelve enteramente a tus manos. La psicología analítica no se completa en las páginas de un libro ni en las discusiones intelectuales; se verifica cada mañana cuando te levantas a sostener la tensión de tus opuestos con valentía, cuando sostienes la mirada de tu sombra sin juzgarla y cuando eliges vivir una existencia con propósito consciente.',
      'Que el recuerdo de Carlitos no sea el de un sabio inalcanzable, sino el de ese compañero fiel que te recuerda que dentro de ti habita una luz numinosa capaz de guiar tu travesía de individuación.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-4',
      title: 'Cita Histórica de C. G. Jung:',
      variant: 'historical_quote',
      text: 'Tu visión se aclarará sólo cuando puedas mirar dentro de tu propio corazón. Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta.'
    }
  }
];
