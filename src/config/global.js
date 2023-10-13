export default {
  global: {
    componenteFormativo: 'Efectos de la temperatura en la producción panelera',
    descripcionCurso:
      'La temperatura juega un papel importante en el control del proceso y afecta la calidad del producto final. La relación entre esta, la concentración y la pureza de las soluciones de azúcar, es una herramienta de control eficaz para la industria. Se sabe que a medida que aumenta la concentración de una solución, expresada en grados Brix, también aumenta el punto de ebullición.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Combustible utilizado en las hornillas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procesos de transferencia de calor en la hornilla panelera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Hornilla panelera',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Gestión ambiental y residuos en el proceso productivo de la panela',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Combustible utilizado en la hornilla',
      referencia:
        'Díaz, A. & Iglesias, C. E. (2012). Bases teóricas para la fundamentación del proceso de extracción de jugo de caña de azúcar para la producción de panela. <i>Revista Ciencias técnicas agropecuarias, 21</i>(1), p. 53-57.',
      tipo: 'Artículo',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S2071-00542012000100010&script=sci_arttext&tlng=en',
    },
    {
      tema: 'Combustible utilizado en la hornilla',
      referencia:
        'Guevara Enciso, J. I. (2014). <i>Modelo computacional de la combustión del bagazo de caña en una cámara de combustión tipo ward-cimpa de una hornilla panelera.</i>',
      tipo: 'Tesis de grado',
      link:
        'https://repositorio.uniandes.edu.co/bitstream/handle/1992/12574/u686426.pdf?sequence=1',
    },
    {
      tema: 'Combustible utilizado en la hornilla',
      referencia:
        'García Rincón, J. G., Arévalo Toscano, J.  & Guerrero Gómez, G. (2021). Análisis exergético de un horno de lecho fijo en la producción de panela. <i>Revista Colombiana De Tecnologías De Avanzada (Rcta), 1</i>(25), p. 32-39.',
      tipo: 'Artículo',
      link:
        'https://docplayer.es/72041133-Exergy-analysis-for-a-furnace-in-the-production-of-panela-analisis-exergetico-de-un-horno-de-lecho-fijo-en-la-produccion-de-panela.html',
    },
    {
      tema: 'Proceso de transferencia de calor en la hornilla panelera',
      referencia:
        'Delgado Ramírez, L. O. (2015). <i>Modelación unidimensional de la transferencia de calor en intercambiadores de una hornilla panelera</i>. Universidad de Piura, Perú.',
      tipo: 'Artículo',
      link: 'https://pirhua.udep.edu.pe/handle/11042/2265',
    },
    {
      tema: 'Proceso de transferencia de calor en la hornilla panelera.',
      referencia:
        'Cortés Sanabria, P. J. (2016). <i>Estudio computacional de la transferencia de calor por convección en hornillas con pailas aleteadas de la industria panelera</i>. Universidad de los Andes.',
      tipo: 'Tesis de grado',
      link: 'https://repositorio.uniandes.edu.co/handle/1992/13598',
    },
    {
      tema: 'Seguridad y salud en el trabajo',
      referencia:
        'Díaz Orozco A. y Victoria Carmona P. (2015). <i>Identificación de peligros en el proceso de fabricación de la panela en dos (2) trapiches ubicados </i>en la ciudad Pereira (Risaralda).',
      tipo: 'Trabajo de grado',
      link: 'https://bdigital.uniquindio.edu.co/handle/001/4187',
    },
    {
      tema:
        'Gestión ambiental y residuos en el proceso productivo de la panela',
      referencia:
        'García, H. R., Albarracín, L. C., Toscano LaTorre, A., Santana, N. & Insuasty, O. (2007).<i> Guía tecnológica para el manejo integral del sistema productivo de la caña panelera</i>.',
      tipo: 'PDF',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/13454/42610_46668.pdf?sequence=1&isAllowed=y',
    },
    {
      tema:
        'Gestión ambiental y residuos en el proceso productivo de la panela',
      referencia:
        'González Campaña, P. J., & Zúñiga Cabrera, D. C. (2022). Impactos ambientales en la producción de panela en la parroquia de Pacto del Distrito Metropolitano de Quito.<i> Esferas</i>, 3, p. 94-111.',
      tipo: 'Documento investigativo',
      link: 'https://revistas.usfq.edu.ec/index.php/esferas/article/view/2430',
    },
    {
      tema:
        'Gestión ambiental y residuos en el proceso productivo de la panela',
      referencia:
        'Pico Poma, L. P. (2018). <i>Simulación del proceso de digestión anaerobia para predecir la producción de biogás a partir de residuos de la industria panelera en la Provincia de Pastaza</i> (Bachelor&apos;s thesis, Universidad Estatal Amazónica).',
      tipo: 'Trabajo de grado',
      link: 'https://repositorio.uea.edu.ec/handle/123456789/690',
    },
    {
      tema:
        'Gestión ambiental y residuos en el proceso productivo de la panela',
      referencia:
        'Castillo Quiroga, B., García Castellanos, E. H., León Quiroga, L. & Moreno Díaz, D. M. (2020). <i>Implementación de prácticas que generen la disminución de agentes contaminantes que se liberan en el medio ambiente en los centros de producción panelera en el municipio de Santana, Boyacá</i>.',
      tipo: 'Trabajo de grado',
      link: 'https://repository.libertadores.edu.co/handle/11371/3463',
    },
  ],
  glosario: [
    {
      termino: 'Acción de mejora',
      significado:
        'medidas para optimizar el sistema de gestión de seguridad y salud en el trabajo, SGSST, para lograr mejoras en el desempeño de seguridad y salud ocupacional de la organización de acuerdo con las políticas organizacionales.',
    },
    {
      termino: 'Amenaza',
      significado:
        'un evento físico natural o accidental causado o inducido por la acción humana suficiente para causar la muerte, lesiones u otros efectos en la salud, daños y pérdidas a la propiedad, la propiedad, la infraestructura, los medios de subsistencia y los riesgos inherentes a la provisión de servicios y recursos ambientales de gran importancia.',
    },
    {
      termino: 'Auto-reporte de condiciones de trabajo y salud',
      significado:
        'es un procedimiento para que los empleados o contratistas informen por escrito a su empleador o contratista cualquier condición adversa de salud y seguridad que observen en su lugar de trabajo.',
    },
    {
      termino: 'Buenas Prácticas Agrícolas (BPA)',
      significado:
        'conjunto de prácticas destinadas a garantizar la inocuidad de los productos agrícolas, la protección del medio ambiente, la seguridad y el bienestar de los trabajadores y la sanidad agropecuaria (García, Albarracín, Toscano, Santana & Instasti, 2007)',
    },
    {
      termino: 'Buenas prácticas ambientales (BPAs)',
      significado:
        'es una serie de acciones sencillas que promueven una relación amigable con el medio ambiente y significan un cambio de actitudes y comportamientos en las actividades cotidianas (Secretaría de ambiente del municipio del distrito metropolitano Quito, 2020).',
    },
    {
      termino: 'Cachaza',
      significado:
        'es creado por residuos que se acumulan durante la clarificación del jugo de caña de azúcar durante la producción de azúcar cruda.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'un enfoque lógico, paso a paso, que permite la mejora continua al hacer un plan. Planificar: Debe planificar cómo mejorar la seguridad y la salud de los trabajadores, identificar qué está mal, qué se puede mejorar y proponer ideas para resolver esos problemas. Hacer: Implementación de las contramedidas planificadas. Verificar: Comprobar si los procedimientos y medidas adoptadas están consiguiendo los resultados deseados. Actuar: Implementación de medidas correctivas para el máximo beneficio de la seguridad y salud de los trabajadores.',
    },
    {
      termino: 'Contaminación ambiental',
      significado:
        'la presencia de uno o más contaminantes que provocan la degradación de los recursos naturales como el agua, el suelo, el aire, las plantas y los animales, y tienen efectos adversos sobre la salud humana (Sánchez & Guiza, 1989).',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'el proceso de transformación del medio natural, socioeconómico, cultural e institucional. Su objetivo es asegurar la mejora de las condiciones de vida humana, la producción de bienes y la prestación de servicios sin dañar el entorno natural ni poner en peligro la base del desarrollo. (CAR, 2019).',
    },
    {
      termino: 'Evaluación del riesgo',
      significado:
        'procedimiento para determinar el nivel de riesgo asociado con la probabilidad de que ocurra un riesgo y la gravedad de las consecuencias de esa ocurrencia.',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'gestión participativa de las condiciones ambientales locales por parte de diversos actores mediante el uso y aplicación de herramientas legales, de planificación, técnicas, económicas, financieras y de gestión para lograr mejorar el funcionamiento de los ecosistemas y la calidad de vida de la población. En el marco de la sustentabilidad (Guhl & Leyva, 2015).',
    },
    {
      termino: 'Grados Brix (° Brix)',
      significado:
        'la concentración de sólidos solubles, expresada en azúcares, presentes en la muestra.',
    },
    {
      termino: 'Identificación del peligro',
      significado:
        'el proceso de determinar si existe un peligro y definir sus características.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cambios en el entorno físico, químico, biológico, cultural y socioeconómico resultantes de las actividades humanas relacionadas con las actividades del proyecto (CAR, 2019).',
    },
    {
      termino: 'Hornilla',
      significado:
        'horno de ladrillo y barro que hierve y espesa el jugo de la caña de azúcar.',
    },
    {
      termino: 'Hornillero',
      significado:
        'operador responsable de suministrar bagazo a un quemador o cámara de combustión.',
    },
    {
      termino: 'Humedad',
      significado:
        'la determinación de humedad o volátiles se basa en la pérdida de peso que sufre el alimento al calentarlo a 100 ºC. Este valor incluye, además del agua propiamente dicha, las sustancias volátiles que acompañan al alimento.',
    },
    {
      termino: 'Jugo crudo',
      significado:
        'se obtiene directamente de la molienda de la caña de azúcar y contiene todos los sólidos en solución excepto la fibra.',
    },
    {
      termino: 'Molino',
      significado:
        'equipo que se utiliza para la extracción de los jugos de la caña o establecimiento donde se produce la panela. ',
    },
    {
      termino: 'Política de seguridad y salud en el trabajo',
      significado:
        'es el compromiso declarado formalmente de la alta dirección de la organización con la seguridad y salud en el trabajo lo que define el alcance de la organización y compromete a la organización en su conjunto.',
    },
    {
      termino: 'Residuo orgánico',
      significado:
        'se refiere a todos los residuos de origen biológico. Incluye diversos residuos que ocurren naturalmente durante el "ciclo de vida" como resultado de las funciones fisiológicas de preservación y mantenimiento, o que son productos de la explotación humana de los recursos biológicos (García, et al., 2007).',
    },
    {
      termino: 'Riesgo',
      significado:
        'una combinación de la probabilidad de que ocurran una o más exposiciones o eventos peligrosos y la gravedad del daño resultante.',
    },
  ],
  referencias: [
    {
      referencia:
        'Montoya Armenta, L. & Romero Ruíz, H. (1998). <i>Estudio hidrotérmico para la determinación de los coeficientes de transferencia de calor en tres tipos de pailas para hornillas paneleras</i>.',
      link:
        'https://www.researchgate.net/publication/306376361_ESTUDIO_HIDROTERMICO_PARA_LA_DETERMINACION_DE_LOS_COEFICIENTES_DE_TRANSFERENCIA_DE_CALOR_EN_TRES_TIPOS_DE_PAILAS_PARA_HORNILLAS_PANELERAS',
    },
    {
      referencia:
        'Beltrán Martínez, C. (2021). <i>Evaluación de técnicas para gestión de los residuos de la producción panelera (cachaza) en la vereda Nacederos municipio de Quebradanegra-Cundinamarca</i>. ',
      link: 'https://repositorio.ucundinamarca.edu.co/handle/20.500.12558/3431',
    },
    {
      referencia:
        'Durán Sánchez, E. (2019). <i>Estudio térmico, económico y de calidad en sistemas de producción de panela</i>.',
      link: 'https://repositorio.unal.edu.co/handle/unal/76063',
    },
    {
      referencia:
        'Diaz Delgado, N. Y., Sarasty Ruano, L. C. & Tobar Zambrano, D. M. (2021). <i>Diseño de un Sistema de Gestión de Seguridad y Salud en el Trabajo en la empresa “Trapiche Divino Niño” Municipio de Ancuya-Nariño–2020</i>.',
      link: 'https://hdl.handle.net/20.500.12962/803',
    },
    {
      referencia:
        'Díaz, A. & Iglesias, C. E. (2012). Bases teóricas para la fundamentación del proceso de extracción de jugo de caña de azúcar para la producción de panela. <i>Revista Ciencias técnicas agropecuarias, 21</i>(1), p. 53-57.',
      link: 'https://www.redalyc.org/comocitar.oa?id=93222722010',
    },
    {
      referencia:
        'Esquivel Barrios, L. C. & Arenas Quimbayo, J. M. (2016). Análisis externo en el sector panelero. <i>Temas y Reflexiones</i>, (5).',
      link:
        'http://repositorio.unibague.edu.co:80/jspui/handle/20.500.12313/216',
    },
    {
      referencia:
        'García, H. R., Albarracín L., Toscano A., Santana N. & Insuasty O. (2007). <i>Guía tecnológica para el manejo integral del sistema productivo de la caña panelera</i>. Mosquera: Produmedios (editorial para el sector agropecuario).',
      link: 'http://hdl.handle.net/20.500.12324/13454',
    },
    {
      referencia:
        'Gordillo, G. y García, H. R. (1992). <i>Manual para el diseño y operación de hornillas paneleras</i>. Barbosa. ICA-Holanda.',
      link:
        'https://www.researchgate.net/publication/306375186_Hornillas_para_la_produccion_de_panela',
    },
    {
      referencia:
        'Hugot, E. (1974). <i> Manual para ingenieros azucareros</i>. Editorial continental. S.A. 2da Edición. (México).',
    },
    {
      referencia:
        'Jaramillo Gómez, D. A., Sánchez López, S. A. & Meneses Suarez, E. J. (2018). <i>Criterios de implementación ISO 14001: 2015 caso de estudio sector Panelero</i>.',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/23421/dajaramillog.pdf?sequence=1',
    },
    {
      referencia:
        'La Madrid Olivares, R. (2015). <i>Modelación numérica del proceso de transferencia de calor en intercambiadores de calor abiertos utilizados en la industria panelera</i>.',
      link:
        'https://pirhua.udep.edu.pe/bitstream/handle/11042/5446/DOC_ING_AUT_001.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Marcelo, D., La Madrid, R. & Santamaría, H. (2013). Evaluación mediante indicadores productivos y energéticos de tres módulos de producción de panela granulada. <i>17 th Latin American and Caribbean conference of engineering and technology LACCEI</i>.',
      link: 'http://www.laccei.org/LACCEI2013-Cancun/RefereedPapers/RP252.pdf',
    },
    {
      referencia:
        'Medina Moreno, R. A. (2016). <i>Estudio computacional de la transferencia de calor en una paila panelera tipo semiesférica</i>.',
      link: 'https://repositorio.uniandes.edu.co/handle/1992/13708',
    },
    {
      referencia:
        'Mejía Restrepo, A. M. (2007). <i>Propuesta para la implementación del sistema de gestión ambiental en el trapiche panelero-HVC</i>.',
      link:
        'https://repositorio.utp.edu.co/items/2a289c49-1854-4bb8-9d9d-832cc77e5a69',
    },
    {
      referencia:
        ' García, J.G, Toscano, J. A. &Guerrero, G. G. (2015). Análisis exergético de un horno de lecho fijo en la producción de panela. <i>Revista Colombiana De Tecnologias De Avanzada (Rcta), 1</i>(25), p. 32-39.',
      link:
        'https://docplayer.es/72041133-Exergy-analysis-for-a-furnace-in-the-production-of-panela-analisis-exergetico-de-un-horno-de-lecho-fijo-en-la-produccion-de-panela.html',
    },
    {
      referencia:
        'Sánchez Castro, Z. & Mendieta Menjura, O. A. (2014). Ajuste de un modelo matemático para la combustión de bagazo de caña en una cámara Ward-Cimpa. <i>Ciencia y Tecnología Agropecuaria, 15</i>(2), p. 133-151.',
    },
    {
      referencia:
        'Leguízamos, S. G. I. & Yepes. G. N. V. (2014). Estudio Descriptivo Mediante Análisis Multicriterio de la Cadena Agroalimentaria de La Panela. <i>Publicaciones e Investigación, 8</i>, p. 161-183.',
      link:
        'https://hemeroteca.unad.edu.co/index.php/publicaciones-e-investigacion/article/view/1298',
    },
    {
      referencia:
        'Suárez Guevara, I. C. (2019). <i>Estrategias para la producción más limpia en el sector de cacao y caña panelera en el Valle del Cauca bajo el marco del Plan Nacional de Negocios Verdes en Colombia</i>.',
      link: 'https://red.uao.edu.co/bitstream/10614/11611/5/T08904.pdf',
    },
    {
      referencia:
        'Vallejo Carabalí, C. E., Peña Medina, H. & Mora Muñoz, L. S. (1995). <i>Evaluación de la producción y consumo de energía en hornillas paneleras</i>. Universidad Autónoma de Occidente.',
      link: 'https://red.uao.edu.co/handle/10614/2588',
    },
    {
      referencia:
        'Velásquez, H. I., Janna, F. C. & Agudelo, A. F. (2006). Diagnóstico exergético de los procesos productivos de la panela en Colombia. <i>Energética</i>, (35), p. 15-22.',
      link: 'https://www.redalyc.org/articulo.oa?id=147019422003',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
