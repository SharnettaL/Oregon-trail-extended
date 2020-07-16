class Wagon{
    constructor (capacity){
    this.capacity = capacity
   this.passengers = []
    }




getAvailableSeatCount(){
    return this.capacity - this.passengers.length
}  

join(traveler){
    if(this.getAvailableSeatCount()>= 1){
        this.passengers.push(traveler)
    }
     
}
shouldQuarantine(){
     for(let index = 0; index < this.passengers.length; index += 1){
         if(this.passengers[index].isHealty === false){
            return true
         }
     }
}
totalFood(){
let total = 0
 for(let index = 0; index > this.passengers.length; index += 1){
      total += this.passengers[index].food
    }
    return total
        
    
}


}
