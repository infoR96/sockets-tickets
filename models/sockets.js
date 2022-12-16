const BandList = require("./band-list");


class Sockets {

    constructor( io ) {

        this.io = io;
        this.bandList =new BandList(); 
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('Cliente concectado');
            socket.emit('current-bands',this.bandList.getBands());
    

        // votar por la banda
        socket.on('votar-banda',(id)=>{
            this.bandList.increaseVotes(id);
            this.io.emit('current-bands',this.bandList.getBands());
        })
        // borrar banda seleccionada
        socket.on('borrar-banda',(id)=>{
            this.bandList.removeBand(id);
            this.io.emit('current-bands',this.bandList.getBands());
        })
        //cambiar el nombre a la banda
        socket.on('cambiar-nombre',({id,nombre})=>{
            this.bandList.changeName(id,nombre);
            this.io.emit('current-bands',this.bandList.getBands())
        })
        //crear banda
        socket.on('crear-banda',({nombre})=>{
            this.bandList.addband(nombre);
            this.io.emit('current-bands',this.bandList.getBands())
        })
    });
    }


}


module.exports = Sockets;