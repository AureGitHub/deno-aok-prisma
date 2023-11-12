import prisma from "../db.ts"



const ususFromAcces = [
{ id:0, nombre:'Jose Aurelio de Sande Villarroel', usu:'jdesande',  activo:1, correoExterno: 'aure.desande@gmail.com'} ,
{ id:1, nombre:'Alberto Alonso Alonso', usu:'aalonso ',  activo:1, correoExterno: ''} ,
{ id:2, nombre:'Alberto Aranzueque González', usu:'aaranzue ',  activo:0, correoExterno: ''} ,
{ id:3, nombre:'Alberto Encinas Escobar', usu:'aencinas ',  activo:1, correoExterno: ''} ,
{ id:4, nombre:'Alberto Zani Fernández', usu:'azani ',  activo:1, correoExterno: ''} ,
{ id:5, nombre:'Alejandro Olazabal Bourdet', usu:'aolazaba ',  activo:0, correoExterno: ''} ,
{ id:6, nombre:'Alfred Ernest Rinaldi', usu:'aernest ',  activo:1, correoExterno: ''} ,
{ id:7, nombre:'Alvaro Robles Fernández', usu:'arobles ',  activo:1, correoExterno: ''} ,
{ id:8, nombre:'Ana Belén Jiménez González', usu:'ajimene1 ',  activo:1, correoExterno: ''} ,
{ id:9, nombre:'Ana Mª Arevalo De La Cruz', usu:'aarevalo ',  activo:0, correoExterno: ''} ,
{ id:10, nombre:'Cayetana Cermeño Barona', usu:'ccermeno ',  activo:0, correoExterno: ''} ,
{ id:11, nombre:'Carlos Navarrete', usu:'Cnavarre',  activo:0, correoExterno: 'carlosnavec@gmail.com'} ,
{ id:12, nombre:'Cristina Retuerta León', usu:'cretuert ',  activo:1, correoExterno: ''} ,
{ id:13, nombre:'Cristina Rodrigo Serrano', usu:'crodrig1 ',  activo:1, correoExterno: ''} ,
{ id:14, nombre:'David Cepedal Fernández', usu:'dcepedal ',  activo:0, correoExterno: ''} ,
{ id:15, nombre:'David Sainz Mera', usu:'dsainz ',  activo:1, correoExterno: ''} ,
{ id:16, nombre:'Diego Morano Lobo', usu:'DiegoMorano',  activo:0, correoExterno: 'diegomorano@auna.com'} ,
{ id:17, nombre:'Elena Pacheco González', usu:'epacheco ',  activo:1, correoExterno: ''} ,
{ id:18, nombre:'Elena Sánchez Arribas', usu:'esanche2 ',  activo:1, correoExterno: ''} ,
{ id:19, nombre:'Eusebio Cruz García', usu:'ecruz ',  activo:1, correoExterno: ''} ,
{ id:20, nombre:'Fernando Blanco Oroz', usu:'fblanco1 ',  activo:0, correoExterno: 'byterider2006@gmail.com'} ,
{ id:21, nombre:'Fernando Javier Merelo Rueda', usu:'fmerelo ',  activo:1, correoExterno: ''} ,
{ id:22, nombre:'Francisco José Sánchez Amador', usu:'fsanche1 ',  activo:0, correoExterno: 'horconboy@gmail.com'} ,
{ id:23, nombre:'Gabriel Pérez Sánchez', usu:'gperez3 ',  activo:1, correoExterno: ''} ,
{ id:24, nombre:'Gonzalo de Luis Martínez', usu:'gdeluis ',  activo:1, correoExterno: ''} ,
{ id:25, nombre:'Guillermo Cenjor Rodríguez', usu:'gcenjor ',  activo:0, correoExterno: ''} ,
{ id:26, nombre:'Ismael Hernandez', usu:'IsmaelHern',  activo:1, correoExterno: 'ismael.hernandez.fernandez@madrid.org'} ,
{ id:27, nombre:'Javier Castrillón Bodas', usu:'jcastril ',  activo:1, correoExterno: ''} ,
{ id:28, nombre:'Jesús Manuel Montero Gullón', usu:'jmonter2 ',  activo:1, correoExterno: ''} ,
{ id:29, nombre:'Jesus Ros Selgas', usu:'jros ',  activo:0, correoExterno: ''} ,
{ id:30, nombre:'Jesus Gonzalez', usu:'JesusGonzalez',  activo:1, correoExterno: 'jesus.gonzalez@cultura.gob.es'} ,
{ id:31, nombre:'Jose Carlos Juara Palomino', usu:'jjuara ',  activo:1, correoExterno: ''} ,
{ id:32, nombre:'José Francisco Gómez Martín', usu:'jgomez4 ',  activo:1, correoExterno: 'jfran.gomez@gmail.com'} ,
{ id:33, nombre:'José Ignacio Paños Fernandez', usu:'jpanos ',  activo:1, correoExterno: ''} ,
{ id:34, nombre:'José Manuel Romero Ibañez', usu:'jromero4',  activo:0, correoExterno: ''} ,
{ id:35, nombre:'José Miguel Garrido Ballesteros', usu:'jgarrid1 ',  activo:1, correoExterno: ''} ,
{ id:36, nombre:'Juan Mª Blanco Llorente', usu:'jblanco3 ',  activo:1, correoExterno: 'jblancollorente@gmail.com'} ,
{ id:37, nombre:'Julio Fajardo Lazo', usu:'jfajardo ',  activo:0, correoExterno: 'fajardoju@hotmail.com'} ,
{ id:38, nombre:'Karina Zetel', usu:'kzetel ',  activo:1, correoExterno: ''} ,
{ id:39, nombre:'Laura Vega', usu:'Laura Vega',  activo:0, correoExterno: 'voyasalirenagrosfera@hotmail.com'} ,
{ id:40, nombre:'Lidia Solís Conde', usu:'lsolis ',  activo:1, correoExterno: ''} ,
{ id:41, nombre:'Lorenzo Retuerta León', usu:'lretuert ',  activo:1, correoExterno: ''} ,
{ id:42, nombre:'Luis Martín Romero', usu:'lmartin4 ',  activo:0, correoExterno: ''} ,
{ id:43, nombre:'Mª  Victoria García Martín', usu:'mgarci10 ',  activo:1, correoExterno: ''} ,
{ id:44, nombre:'Mª Jesús González de la Rosa', usu:'mgonza17 ',  activo:1, correoExterno: ''} ,
{ id:45, nombre:'Mª José Zamarreño Bueno', usu:'mzamarre ',  activo:1, correoExterno: ''} ,
{ id:46, nombre:'Mª Luisa Pérez Ayuso', usu:'mperez2 ',  activo:0, correoExterno: 'mperezayuso@gmail.com'} ,
{ id:47, nombre:'Mª Soledad Martínez Cerezo', usu:'mmarti14 ',  activo:1, correoExterno: ''} ,
{ id:48, nombre:'Manuel Francisco Cuadra García', usu:'mcuadra ',  activo:1, correoExterno: ''} ,
{ id:49, nombre:'Manuel Martínez Miralles', usu:'mmarti13 ',  activo:0, correoExterno: 'manumm11@hotmail.com'} ,
{ id:50, nombre:'María Francia Hernández', usu:'mfrancia ',  activo:1, correoExterno: ''} ,
{ id:51, nombre:'Mercedes Vacas Merino', usu:'mvacas ',  activo:1, correoExterno: 'mercedesvacas@gmail.com'} ,
{ id:52, nombre:'Miguel Angel Poveda Mañosa', usu:'mpoveda ',  activo:0, correoExterno: ''} ,
{ id:53, nombre:'Miguel Morales García', usu:'mmorale1 ',  activo:0, correoExterno: ''} ,
{ id:54, nombre:'Nekane Zabaleta Erostarbe', usu:'nzabalet',  activo:1, correoExterno: 'nekane.zabaleta@gmail.com'} ,
{ id:55, nombre:'Nuria Serra Ramiro', usu:'nserra ',  activo:1, correoExterno: ''} ,
{ id:56, nombre:'Oscar Serna Serna', usu:'oserna ',  activo:0, correoExterno: ''} ,
{ id:57, nombre:'Pelayo Rey Rodríguez', usu:'prey ',  activo:1, correoExterno: ''} ,
{ id:58, nombre:'Pilar Pato Garrudo', usu:'ppato ',  activo:1, correoExterno: ''} ,
{ id:59, nombre:'Roberto Colomo Romero', usu:'rcolomo ',  activo:0, correoExterno: ''} ,
{ id:60, nombre:'Rocío Molina Utrera', usu:'rmolina ',  activo:1, correoExterno: ''} ,
{ id:61, nombre:'Ruben Acero Herreros', usu:'racero ',  activo:0, correoExterno: ''} ,
{ id:62, nombre:'Sara Recio García', usu:'srecio ',  activo:1, correoExterno: ''} ,
{ id:63, nombre:'Silvia Rodríguez Solano', usu:'srodrig1 ',  activo:1, correoExterno: ''} ,
{ id:64, nombre:'Susana Fernandez', usu:'Susana Fernandez',  activo:0, correoExterno: 'sufers.es@gmail.com'} ,
{ id:65, nombre:'Vanesa Ormeño Elvar', usu:'vormeno ',  activo:0, correoExterno: ''} ,
{ id:66, nombre:'Vanessa Rodríguez de la Rosa', usu:'vrodrig3 ',  activo:1, correoExterno: ''} ,
{ id:67, nombre:'Víctor Gómez Gálvez', usu:'vgomez1 ',  activo:1, correoExterno: ''} ,
{ id:68, nombre:'Vanessa Baeza', usu:'Vanessa Baeza',  activo:1, correoExterno: 'ismael1.hernandez.fernandez@madrid.org'} ,
{ id:69, nombre:'Belen Muñoz', usu:'bmunoz1',  activo:0, correoExterno: ''} ,
{ id:70, nombre:'Eva Serrano', usu:'eserrano',  activo:1, correoExterno: ''} ,
{ id:71, nombre:'Jose Javier Martín Carnes', usu:'jmartin6',  activo:0, correoExterno: ''} ,
{ id:72, nombre:'Mª Angeles Gómez Leira', usu:'mgomez3',  activo:0, correoExterno: ''} ,
{ id:73, nombre:'Carlos Alvarez Beringola', usu:'calvare5',  activo:0, correoExterno: ''} ,
{ id:74, nombre:'Mª Carmen Martín Soria', usu:'mmarti11',  activo:1, correoExterno: ''} ,
{ id:75, nombre:'Juan Pablo González Mier', usu:'jgonza34',  activo:0, correoExterno: ''} ,
{ id:76, nombre:'Jose Luis Moreno Barriga', usu:'jmoreno4',  activo:0, correoExterno: ''} ,
{ id:77, nombre:'Miguel Ángel Fernández López', usu:'mferna27',  activo:0, correoExterno: 'miguelangel.mfernandez@gmail.com'} ,
{ id:78, nombre:'Salvador Manuel Ronda Gomez', usu:'sronda',  activo:1, correoExterno: ''} ,
{ id:79, nombre:'Francisco Borja Carmona Castaño', usu:'fcarmona',  activo:0, correoExterno: ''} ,
{ id:80, nombre:'Rubén Martínez García', usu:'rmarti17',  activo:0, correoExterno: ''} ,
{ id:81, nombre:'Beatriz López López', usu:'blopez5',  activo:0, correoExterno: 'beitaninfa@hotmail.com'} ,
{ id:82, nombre:'Javier Martín Roncero', usu:'jmarti39',  activo:0, correoExterno: 'jmarti135@gmail.com'} ,
{ id:83, nombre:'Susana Laso', usu:'slaso',  activo:1, correoExterno: ''} ,
{ id:84, nombre:'Mª José Fernández Sanjuán', usu:'mferna10',  activo:1, correoExterno: ''} ,
{ id:85, nombre:'Alejandro García Perez', usu:'agarci42',  activo:0, correoExterno: ''} ,
{ id:86, nombre:'Ignacio Valdivia Herrero', usu:'ivaldivi',  activo:1, correoExterno: ''} ,
{ id:87, nombre:'Ruben Rubio Iniesta', usu:'rrubio4',  activo:1, correoExterno: ''} ,
{ id:88, nombre:'Mª Soledad Pérez Pérez', usu:'mperez39',  activo:0, correoExterno: ''} ,
{ id:89, nombre:'Victor Astorga Acevedo', usu:'vastorga.ext',  activo:0, correoExterno: 'victorastace@hotmail.com'} ,
{ id:90, nombre:'Angel Alvarez Cabrera', usu:'aalvare9',  activo:1, correoExterno: 'angealv@gmail.com'} ,
{ id:91, nombre:'Alvaro Sobrino Molina', usu:'asobrin1.ext',  activo:0, correoExterno: 'alvaro.sobrinom@gmail.com'} ,
{ id:92, nombre:'Raul De Frutos', usu:'rdefruto',  activo:0, correoExterno: ''} ,
{ id:93, nombre:'Sonia Rebollo Andrés', usu:'srebollo',  activo:0, correoExterno: ''} ,
{ id:94, nombre:'Rosa María Villalba Conde', usu:'rvillalb',  activo:0, correoExterno: ''} ,
{ id:95, nombre:'Mª Milagros Redondo González', usu:'mredondo',  activo:1, correoExterno: ''} ,
{ id:96, nombre:'Abraham de la Iglesia Cotillo', usu:'aiglesia',  activo:1, correoExterno: ''} ,
{ id:97, nombre:'Carlos García Rodríguez', usu:'cgarcia2',  activo:1, correoExterno: ''} ,
{ id:98, nombre:'Alfredo García Calero', usu:'agarci37',  activo:0, correoExterno: ''} ,
{ id:99, nombre:'Manuel Vizcaíno Serrano', usu:'mvizcain',  activo:0, correoExterno: ''} ,
{ id:100, nombre:'Rafael Gómez Del Prado', usu:'rgomez6',  activo:1, correoExterno: ''} ,
{ id:101, nombre:'Pedro Villacañas Landrove', usu:'pvillaca',  activo:0, correoExterno: ''} ,
{ id:102, nombre:'Raul Gomez Gonzalez', usu:'rgomez8',  activo:0, correoExterno: 'rguacamayo@yahoo.es'} ,
{ id:103, nombre:'Sergio Crespo Granjo', usu:'scrg',  activo:0, correoExterno: ''} ,
{ id:104, nombre:'Agustín Pérez Vicente', usu:'aperez11',  activo:0, correoExterno: 'agus_perez2002@yahoo.es'} ,
{ id:105, nombre:'Marta Lopez De Zuazo Sanchez', usu:'mlopez16',  activo:1, correoExterno: ''} ,
{ id:106, nombre:'Esther Escudero Bayle', usu:'eescude1',  activo:1, correoExterno: ''} ,
{ id:107, nombre:'Gerardo Castañer Villaluenga', usu:'gcastane',  activo:1, correoExterno: ''} ,
{ id:108, nombre:'Isabela Almansa De Lara', usu:'ialmansa',  activo:1, correoExterno: ''} ,
{ id:109, nombre:'Yolanda Fernandez Sanmames', usu:'yfs',  activo:1, correoExterno: ''} ,
{ id:110, nombre:'Eduardo Murillo Peñacoba', usu:'emurillo',  activo:1, correoExterno: ''} ,
{ id:111, nombre:'Rafael Zamora Salido', usu:'rzamora2',  activo:1, correoExterno: ''} ,
{ id:112, nombre:'Beatriz Domenech Collado', usu:'bdc',  activo:1, correoExterno: ''} ,
{ id:113, nombre:'Cristina Delgado Carrasco', usu:'cdc',  activo:1, correoExterno: ''} ,
{ id:114, nombre:'Maria Del Mar Ruiz Granados', usu:'mruiz10',  activo:1, correoExterno: ''} ,
{ id:115, nombre:'Montserrat Diaz Molina', usu:'mdiaz6',  activo:1, correoExterno: ''} ,
{ id:116, nombre:'Raul Redondo Moriano', usu:'rrem',  activo:1, correoExterno: ''} ,
{ id:117, nombre:'Esteban Martinez Blazquez', usu:'emartine',  activo:1, correoExterno: ''} ,
{ id:118, nombre:'Milagros Vicente Tomas', usu:'mvicent1',  activo:1, correoExterno: ''} ,
{ id:119, nombre:'Rocio Benavente Rubio', usu:'rbenaven',  activo:1, correoExterno: ''} ,
{ id:120, nombre:'Seises Lopez, Juan Carlos', usu:'jcsl',  activo:1, correoExterno: ''} ,
{ id:122, nombre:'Claudia Amoros Martinez', usu:'camoros',  activo:1, correoExterno: ''} ,
{ id:123, nombre:'Jose Luis Nieto Martin', usu:'jlnm',  activo:1, correoExterno: ''} ,
{ id:124, nombre:'Alberto Garcia Rico', usu:'agarc113',  activo:1, correoExterno: ''} ,
{ id:125, nombre:'Bernardo Jara De Pedraza', usu:'bjara',  activo:1, correoExterno: ''} ,
{ id:126, nombre:'Maria Angela Garcia Roque', usu:'magr',  activo:1, correoExterno: ''} ,
{ id:127, nombre:'Carlos Garcia Giner', usu:'cgarci90',  activo:1, correoExterno: ''} ,
{ id:128, nombre:'Mikel Cañamares Edo', usu:'mcanamar',  activo:1, correoExterno: ''} ,
{ id:129, nombre:'Petra Plaza Ruiz Peinado', usu:'pplaza',  activo:1, correoExterno: ''} ,
{ id:130, nombre:'German Garcia-Carpintero Nuñez De Arenas', usu:'ggarciac',  activo:1, correoExterno: ''} ,
{ id:131, nombre:'Jose Esteban Lopez', usu:'jesteban',  activo:1, correoExterno: ''} ,
{ id:132, nombre:'Ignacio Lopez Garcia', usu:'ilopez23',  activo:1, correoExterno: ''} ,
{ id:133, nombre:'Isabel Galan Gomez', usu:'igalan',  activo:1, correoExterno: ''} ,
]


await prisma.user.deleteMany();

ususFromAcces.forEach(async usu => {
  try{
   
    await prisma.user.create({
      data:
      {
      id: usu.id,
      name : usu.nombre,
      email : usu.correoExterno ? usu.correoExterno : usu.usu + '@tragsa.es',
      password:'',
      estado : usu.activo == 1 ? 'BLOCK' : 'UNSUBSCRIBED'
     }
    })
  }
  catch(ex){
    console.log(usu);
  }
  
})


// await prisma.user.createMany({
//   data : [
//     {id: 1, name : 'Aure', email:'a@a.es', password:''}
//   ]
// });

await prisma.$disconnect();




