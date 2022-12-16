const Band = require("./band");

class BandList{
    constructor(){
        this.bands=[
            new Band('Metalica'),
            new Band('Daniel F'),
            new Band('Bon Jovi'),
            new Band('Eminem'),

        ]
    }
    addband(nombre){
        const newBand=new Band(nombre);
        this.bands.push(newBand);
        return this.bands;
    }
    removeBand (id){
        this.bands = this.bands.filter(band=>band.id!==id);
    }
    getBands(){
        return(this.bands);
    }
    increaseVotes(id){
        this.bands=this.bands.map(band=>{
            if(band.id===id){
                band.votes+=1;

            }
            return band;
        })
    }
    changeName(id,newName){
        this.bands=this.bands.map(band=>{
            if(band.id===id){
                band.name=newName;

            }
            return band;
        })
    }
}
module.exports=BandList;