import logo from './logo.svg';
import './App.css';
import PerfilB from './componentes/PerfilB';
import PerfilD from './componentes/PerfilD';
import PerfilL from './componentes/PerfilL';

function App() {
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <PerfilB
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Informático freelance emprendedor y amante de la tecnología. Desde 2010, ha trabajado en grandes empresas del sector como Inditex, Indra o Altia. Ocupando sus 3 últimos años, antes de establecerse como freelance, como Arquitecto de Software del área de Logística-Comercial de Inditex. En 2014 decide crear su propia empresa de desarrollo de software, MoureDev, dado por su profundo interés por las nuevas tendencias del sector. Finalmente, en 2015, dejo su empleo y paso a dedicarse por completo a MoureDev, orientando su carrera al desarrollo de aplicaciones móviles. Actualmente dirije MoureDev, es co-fundador de Pilbeo y asesora y desarrolla para empresas y startups de diferentes partes del mundo.'
        linkedin='https://www.linkedin.com/in/braismoure/'
        youtube='https://www.linkedin.com/in/braismoure/'
        twitter='https://www.linkedin.com/in/braismoure/'
      />
      <PerfilD
        nombre='Dennis MacAlistair Ritchie'
        pais='Estados Unidos'
        imagen='dennis'
        cargo='Ingeniero de Software'
        empresa='Bell Labs'
        perfil='Graduado de Física y Matemáticas aplicadas de Harvard, fue un científico de la computación estadounidense. Colaboró en el diseño y desarrollo de los sistemas operativos Multics y Unix, así como el desarrollo de varios lenguajes de programación como el C, tema sobre el cual escribió un célebre clásico de las ciencias de la computación junto a Brian Wilson Kernighan: El lenguaje de programación C. Recibió el Premio Turing de 1983 por su desarrollo de la teoría de sistemas operativos genéricos y su implementación en la forma del sistema Unix. En 1998 le fue concedida la Medalla Nacional de Tecnología de los Estados Unidos de América. Se jubiló en 2007, siendo todavía entonces el jefe del departamento de investigación en software de sistemas de Alcatel-Lucent.'
        wikipedia='https://es.wikipedia.org/wiki/Dennis_Ritchie'
        youtube='https://www.youtube.com/watch?v=-BcbYia299A&pp=ygUaZGVubmlzIG1hY2FsaXN0YWlyIHJpdGNoaWU%3D'
        web='https://www.bell-labs.com/'
      />
      <PerfilL
        nombre='Linus Torvalds'
        pais='Finlandia - Estados Unidos'
        imagen='linus'
        cargo='Ingeniero de Software'
        empresa='Linux - Git'
        perfil='Ingeniero de software finlandés-estadounidense, conocido por iniciar y mantener el desarrollo del kernel (en español, núcleo) Linux, basándose en el sistema operativo libre Minix creado por Andrew S. Tanenbaum y en algunas herramientas, varias utilidades y los compiladores desarrollados por el proyecto GNU. Actualmente es responsable de la coordinación del proyecto. También ha desarrollado el software de control de versiones Git.'
        linkedin='https://www.linkedin.com/in/linustorvalds'
        youtube='https://www.youtube.com/c/linustorvalds'
        twitter='https://twitter.com/Linus__Torvalds'
      />
     </div>
    </div>
  );
}

export default App;