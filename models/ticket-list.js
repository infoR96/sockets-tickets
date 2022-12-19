const Ticket = require('./ticket');

class ticketList {

    constructor(){
        this.ultimonumero=0;
        this.pendientes=[];
        this.asignados=[];
    }
    get siguienteNumero(){
        this.ultimonumero ++;
        return this.ultimonumero;
    }
    // 3 TICKETS DE TARJETAS Y 10 PARA EL HISTORIAL 
    get ultimos3(){
        return this.asignados.slice(0.13);
    }
    crearTicket (){
        const nuevoTicket = new Ticket(this.siguienteNumero)
        this.pendientes.push(nuevoTicket);
        return nuevoTicket;
    }
    asignarTicket (agente,escritorio){
        if(this.pendientes.length === 0){
            return null
        }
      const siguienteTicket = this.pendientes.shift();
      siguienteTicket.agente=agente;
      siguienteTicket.escritorio=escritorio;
      this.asignados.unshift(siguienteTicket);
      return siguienteTicket;
    }
}
module.exports=ticketList;