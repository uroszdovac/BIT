
(function (){
    'use strict'
    
    /*  GENRE   */

    function Genre(name){
        this.name = name;
        this.getData = function(){
            return this.name[0] + this.name[this.name.length - 1].toUpperCase();
        }
    }

    /*  MOVIE   */

    function Movie(title, genre, length){
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function(){
            return this.title + ' , ' + this.length + 'min, ' + this.genre.getData();
        }
    }

    /*   PROGRAM  */

    function Program(date){
        this.date = new Date(date);
        this.listOfMOvies = [];
        this.numberOfMovies = 0;
        this.dateString = this.date.getDate() + '.' + (this.date.getMonth() + 1) + '.' + this.date.getFullYear(); 
        this.addMovie = function(movie){
            this.listOfMOvies.push(movie);
            this.numberOfMovies++;
        }
        this.getData = function(){
            var totalLength = 0;
            for(var i = 0; i < this.listOfMOvies.length; i++){
                totalLength += this.listOfMOvies[i].length;
            }
            var printOfMovies = '';
            for(var l = 0; l < this.listOfMOvies.length; l++){
                printOfMovies += '\t' + this.listOfMOvies[l].getData() + '\n';
            }
            return this.dateString + ', ' + totalLength + ' min' + '\n' + printOfMovies; 
        }
    }

    /*  FESTIVAL  */

    function Festival(name){
        this.name = name;
        this.listofPrograms = [];
        this.totalNumOfMovies = 0;
        this.addProgram = function(program){
            this.listofPrograms.push(program);
            this.totalNumOfMovies += program.numberOfMovies;
        }
        this.getData = function(){
            var printOfPrograms = '';
            for(var t = 0; t < this.listofPrograms.length; t++){
                printOfPrograms += this.listofPrograms[t].getData() ;
            }
            return this.name + ' has ' + this.totalNumOfMovies + ' movie titles' + '\n' + printOfPrograms;
        }
    }

    function createMovie(movieTitle, movieLength, movieGenre){
        var genre = new Genre(movieGenre);
        var movie = new Movie(movieTitle, genre, movieLength);
        return movie;
    }

    function createProgram(date){
        var program = new Program(date);
        return program;
    }

   

    var drama = new Genre('Drama');
    var action = new Genre('Action');
    var comedy = new Genre('Comedy');
    var western = new Genre('Western');

    var peva = createMovie('Ko to tamo peva', 159, comedy);
    

    var shawshank = new Movie('The Shawshank Redemption', action, 130);
    var planetApes = new Movie('War for the Planet of the Apes', drama, 140);
    var deadpool = new Movie('Deadpool', comedy, 108);
    var darkTower = new Movie('The dark Tower', western, 95);
    var speed = new Movie('Speed', action, 124);
    var english = new Movie('English', drama, 156);
    var goodBadUgly = new Movie('Good Bad Ugly', western, 98);
    
    var firstDay = new Program('10/10/2019');
    var secondDay = new Program('10/11/2019');
    var thirdDay = createProgram('10/12/2019');
    console.log(thirdDay);
    
    firstDay.addMovie(shawshank);
    firstDay.addMovie(planetApes);
    firstDay.addMovie(deadpool);
    firstDay.addMovie(darkTower);

    secondDay.addMovie(speed);
    secondDay.addMovie(english);
    secondDay.addMovie(goodBadUgly);

    var caen = new Festival('Caen festival');
    caen.addProgram(firstDay);
    caen.addProgram(secondDay);
    

   
    

})()