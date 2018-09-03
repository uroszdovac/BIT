(function(){
    'use strict'

    /*    PERSON    */

    function Person(name, surname){
        this.name = name;
        this.surname = surname;
        this.getData = function(){
            return this.name + ' ' + this.surname;
        }
    }

    /*    SEAT    */

    function Seat(number, category){
        if(category === undefined){
            category = 'e';
        }else if(category != 'b' && category != 'e'){
            category = 'e';
        }

        if(typeof number != 'number'){
            number = parseInt((100 - 10) * Math.random() + 10);
        }
        this.category = category;
        this.number = number;
        this.getData = function(){
            return this.number + ', ' + this.category.toUpperCase();
        }

    }

    /*   PASSENGER   */

    function Passenger(person, seat){
        this.person = person;
        this.seat = seat;
        this.getData = function(){
            var categ = ''
            if(this.seat.category == 'b'){
                categ = 'business';
            }else if(this.seat.category == 'e'){
                categ = 'economy';
            }
            return this.seat.number + ' ' + categ + ', ' + this.person.getData();
        }
    }

    /*    FLIGHT   */

    function Flight(relation, date){
        this.relation  = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.numberOfPassingers = 0;
        this.totalNumberOfBusinessPAssenger = function(){
            var total = 0;
            for(var r = 0; r < this.listOfPassengers.length; r++){
                if(this.listOfPassengers[r].seat.category == 'b'){
                    total++;
                }
            }
            return 'Total number of passengers in business class on flight ' + this.relation + ' is ' + total;
        }
        this.addPassenger = function(passenger){
            for(var e = 0; e < this.listOfPassengers.length; e++){
                if(this.listOfPassengers[e].seat.number == passenger.seat.number || this.listOfPassengers[e].getData() == passenger.getData()){
                    console.log('Passangers have same name or seat number!')
                }
            }
            if(this.numberOfPassingers >= 100){
                console.log('There is no more place in airplane!')
            }else{
                this.listOfPassengers.push(passenger);
                this.numberOfPassingers ++;
            }
        }
        this.getData = function(){
            var flightDate = this.date.getDate() + '.' + (this.date.getMonth() + 1) + '.' + this.date.getFullYear();
            var passengerList = '';
            for(var i = 0; i < this.listOfPassengers.length; i++){
                passengerList += '\t' + this.listOfPassengers[i].getData() + '\n';
            }
            var splited = this.relation.split('-');
            var add = [];
            for(var t = 0; t < splited.length ; t++){ 
                for(var a = splited[t].length - 1; a > 0; a--){
                    if(splited[t][a] != 'a' && splited[t][a] != 'e' && splited[t][a] != 'i' && splited[t][a] != 'o' && splited[t][a] != 'u'){
                        add.push(splited[t].charAt(0) + splited[t][a].toUpperCase());
                        break;
                    }
                }    
            }
        
            
            return flightDate + ', ' + add.join('-') + '\n' + passengerList;
        }
    }

    /*   AIRPORT   */

    function Airport(name){
        this.name = name;
        this.listOfFlights = [];
        this.totalNumberOfPassingers = 0;
        this.addFlight = function(flight){
            this.listOfFlights.push(flight);
            this.totalNumberOfPassingers += flight.numberOfPassingers;
        }        
        this.getData = function(){
            var flightsPrint = '';
            for(var o = 0; o < this.listOfFlights.length; o++){
                flightsPrint += this.listOfFlights[o].getData();
            }
            return 'Airport: ' + this.name + ', ' + 'total passengers: ' + this.totalNumberOfPassingers + '\n' + flightsPrint;
        } 
    }

    /*  CREATE FLIGHT   */

    function createFlight(relation, date){
        return new Flight(relation, date)
    }

    /*  CREATE PASSENGER  */

    function createPassenger(firstName, lastName, seatNumber, category){
        var person = new Person(firstName, lastName);
        var seat = new Seat(seatNumber, category);
        return new Passenger(person, seat);
    }

    var pera = new Person('Petar' , 'Ivosevic');
    var straja = new Person('Strahinja', 'Skoko');
    var jela = new Person('Jelena', 'Ristic');
    

    var seat32 = new Seat(32, 'g');
    var seat35 = new Seat(35, 'b');
    var seat56 = new Seat(56, 'b');
    var seat59 = new Seat(59, 'b');

    var perA = new Passenger(pera, seat32);
    var strajA = new Passenger(straja, seat35);
    var jelA = new Passenger(jela, seat56);
    var jelA1 = new Passenger(jela, seat56);
    
    var majA = createPassenger('Marija', 'Bodrozic', 74, 'e');
    var anA = createPassenger('Ana', 'Skoko', 12, 'b');
    var nikolA = createPassenger('Nikola', 'Ristic', 42, 'w');
    var pedjA = createPassenger('Predrag', 'Josic', 62, 'w');
    
    var beoPar = new Flight('Belgrade-Paris', '10/10/2018');
    var beoIst = new Flight('Belgrade-Istanbul', '10/11/2018');
    var beoBud = createFlight('Belgrade-Budapest', '10/12/2018');
    
    beoPar.addPassenger(perA);
    beoPar.addPassenger(strajA);
    beoPar.addPassenger(jelA);
    beoPar.addPassenger(pedjA);
    beoPar.addPassenger(jelA1);
    beoPar.addPassenger(anA);

    beoBud.addPassenger(majA);
    beoBud.addPassenger(anA);
    beoBud.addPassenger(nikolA);

    var nikTes = new Airport('Nikola tesla');

    nikTes.addFlight(beoPar);
    nikTes.addFlight(beoBud);
    console.log(beoBud.getData());
    console.log(beoPar.getData());
    console.log(beoPar.totalNumberOfBusinessPAssenger());
    
    


})()