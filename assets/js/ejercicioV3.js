
const pathFile  = ["audio/1audio.wav","audio/2audio.wav","audio/3audio.wav","audio/4audio.wav","audio/5audio.wav","audio/6audio.wav","audio/7audio.wav","audio/8audio.wav","audio/9audio.wav"];
const canciones = ['Cancion 1', 'Cancion 2', 'Cancion 3', 'Cancion 4', 'Cancion 5'];


const button        = document.querySelector('button');
const btnHabilitar  = document.querySelector('#btnHabilitar');

const divCancionero = document.querySelector('p');




// LISTA DE CANCIONES EN DOM
const crearPlaylist = () => {
    const listado = document.createElement('ol');
    listado.setAttribute('id', 'listadoMusica');
    for( const i of songList.keys()){
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songList[i]));
        item.setAttribute('id', songList.indexOf(songList[i]));
        listado.appendChild(item);
    }
    return listado;
}
listaHTML.appendChild(crearPlaylist());
///


const listaCanciones = (canciones) => {
    for ( const j of canciones.keys()){
        console.log(j+1,canciones[j]);
    }
}
// Esta linea tambien muestra el menu
// canciones.forEach((song,i) => console.log(`${i+1} ${song}`));

listaCanciones(canciones);

const reproductor = () => {

    console.clear();
    
    listaCanciones(canciones);

    let opc = prompt('Ingrese opcion para reproducir: ');

    if (opc>=1 && opc<=(canciones.length)){ 
    
        const audio = new Audio(pathFile[opc-1]);
        const musica = (`Reproduciendo # ${opc} - ${canciones[opc-1]}\n` + audio.play());
        console.log(musica);
        
        audio.addEventListener("play", () => {
            console.log("Musica para tus oidos, disfruta!");
            button.disabled = true 
        });
        
        audio.addEventListener("pause", () => {
            console.log("Se ha terminado la reproducción");
            button.disabled = false  
        });
        alert('♫ Reproduciendo cancion: ' + (opc) + ', disfruta! ♫');
    }
    else{
    alert('♫ Ingresa una cancion valida, para disfrutar del reproductor');
    }

}


button.onclick = () => {
reproductor();  
}

btnHabilitar.addEventListener('click', () => {
    console.clear();
    listaCanciones(canciones);

    consultaNew = window.confirm('Quieres habilitar una cancion?');

    if (consultaNew == true){
        canciones.push(prompt(`INGRESE NOMBRE DE LA CANCION NUEVA\n Esta cancion se ingresara en la posicion ${canciones.length+1}\n Se pueden ingresar ${pathFile.length} canciones `))
        console.clear();
        listaCanciones(canciones);
    }

});







