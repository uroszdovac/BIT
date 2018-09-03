(function (){
    'use strict'

    /*    GENRE      */

    function Genre(name){
        this.name = name;
    }

    /*     MOVIE    */

    function Movie(title, genre, length){
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    /*   PROGRAM   */

    function Program(date){
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numberOfMovies = 
    }
})()