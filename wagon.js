class Wagon{
    constructor (capacity){
    this.capacity = capacity
   this.passengers = []
    }




getAvailableSeatCount(){
    return this.capacity - this.passengers.length
}  

join(Traveler){
    if(this.getAvailableSeatCount()>= 1){
        this.passengers.push(Traveler)
    }
     
}
shouldQuarantine(){
     for(let index = 0; index < this.passengers.length; index ++ ){
         if(this.passengers[index].isHealthy === false){
            return true
         }
     }
}
totalFood(){
let total = 0
 for(let index = 0; index < this.passengers.length; index ++ ){
      total += this.passengers[index].food    
 }
    
    return total
}


}
