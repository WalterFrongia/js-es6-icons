// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


let icons =
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


let contenitoreIcons = document.getElementById("my-container-icons")  //salvo in una variabile la stampa per html 

stampaHtml(icons, contenitoreIcons); //così richiamo la funzione per la stampa e do gli argomenti che a me interessano (array di oggetti "icons")
                                     // e contenitoreIcons per html.


//CREAREUN ARRAY PER TUTTI I TIPI IN MODO DINAMICO
// CREO UN ARRAY VUOTO DI TIPI 
// ARRAY FATTO SU ICONS 
// ALL'INTERNO DEL FOREACH DEVO PRENDERE IL TYPE DI ICONA E AGGIUNGERE NELL'ARRAY VUOTO SE NON E' PRESENTE.

icons.forEach((element) => {

    let arrayIcons = [];
    
});

















//FUNZIONE CHE SERVE PER LA STAMPA HTML 
function stampaHtml(array, contenitore){
    array.forEach((element) => {   //utilizzo il foEach per ciclare ogni oggetto nell'array   

                                        // questo serve per stampare codice html nel file JS, 
                                        // la sintassi dollaro e parentesi graffe serve per aggiungere variabili e oggetti con valore specifico tramite 
                                        //il punto
                                        // += (serve per aggiungere ogni elemento mantenendo gli elementi già stampati)  
        contenitore.innerHTML +=  
            `<li class="my-icon"> 
                <i class="${element.family} ${element.prefix}${element.name}"></i>
                <p>${element.name}</p>
            </li>`
    });
}