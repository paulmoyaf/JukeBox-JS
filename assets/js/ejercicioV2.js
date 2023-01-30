const button = document.querySelector('button');

button.onclick = function() {
    console.clear();

    const canciones = ['Cancion 1', 'Cancion 2', 'Cancion 3', 'Cancion 4', 'Cancion 5'];
    const pathFile = ["audio/1audio.wav","audio/2audio.wav","audio/3audio.wav","audio/4audio.wav","audio/5audio.wav","audio/6audio.wav","audio/7audio.wav","audio/8audio.wav","audio/9audio.wav"];

    for ( const j of canciones.keys()){
        console.log(j+1,canciones[j]);
    }

    consultaNew = window.confirm('Quieres habilitar una cancion?');

    if (consultaNew == true){
        canciones.push(prompt(`INGRESE NOMBRE DE LA CANCION NUEVA\n Esta cancion se ingresara en la posicion ${canciones.length+1}\n Se pueden ingresar ${pathFile.length} canciones `))
        console.clear();
        for ( const j of canciones.keys()){
            console.log(j+1,canciones[j]);
        }
    }
    
    let opc = prompt('Ingrese opcion para reproducir: ');

    if (opc>=1 && opc<=(canciones.length)){ 
    
        //const audio1 = new Audio("audio/1audio.wav");
        const audio = new Audio(pathFile[opc]);

            const musica =  (opc-1) == 0 ? `Reproduciendo # ${opc} - ${canciones[opc-1]} ${audio.play()}`:
                            (opc-1) == 1 ? `Reproduciendo # ${opc} - ${canciones[opc-1]} ${audio.play()}`:
                            (opc-1) == 2 ? `Reproduciendo # ${opc} - ${canciones[opc-1]} ${audio.play()}`:
                            (opc-1) == 3 ? `Reproduciendo # ${opc} - ${canciones[opc-1]} ${audio.play()}`:
                            (opc-1) == 4 ? `Reproduciendo # ${opc} - ${canciones[opc-1]} ${audio.play()}`:
                            (opc-1) == 5 ? `Reproduciendo # ${opc} - ${canciones[opc-1]} ${audio.play()}`:'No existe la cancion'; //caso contratrio =>F
        
                            console.log(musica) 
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
    alert('♫ INgresa una cancion valida, para disfrutar del reproductor');
    }
}






