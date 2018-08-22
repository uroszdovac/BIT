/* Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like! */

var favouriteCoffee = {
    name : 'esspreso',
    strength : 'strong',
    flavour : 'sweet',
    milk : false,
    sugar : true
}

/* Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.  */

var favouriteMovie = {
    name : 'Shawshank redemption',
    actorMain : 'Morgan Freeman',
    otherActor : 'Tim Robbins',
    genre : 'drama',
    popularity : 'undying'
}

/* Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.  */

function ComputerProgram(description, language, git, completed){

    this.description = description;
    this.language = language;
    this.git = git;
    this.completed = completed;
    this.repository = function (){
        console.log(this.git);
    }
    this.js = function (){
        if(this.language == 'JavaScript'){
            console.log('yes');
        }else{
            console.log('no');
        }
    }
    this.finished = function (){
        if(this.completed == 'completed'){
            console.log('yes');
        }else{
            console.log('no');
        }
    }


}

var facebook = new ComputerProgram('Social Network', 'JavaScript', 'uroszdovac.rs', false);
facebook.finished();

/* Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
1. Add a method that prints out all the ingredients necessary for the meal preparation. 
2. Add a method that checks if a meal can be prepared for 15 minutes. 
3. Add a method that changes the type of cuisine to the given value. 
4. Add a method that delete a given ingredient from the list of ingredients.   */

function CulinaryRecipe (name, typeOfCuisine, complexity, listOfIngredients, preparingTime, preparingInstructions){
    
    this.name = name;
    this.typeOfCuisine = typeOfCuisine;
    this.complexity = complexity;
    this.listOfIngredients = listOfIngredients;
    this.preparingTime = preparingTime;
    this.preparingInstructions =preparingInstructions;
    this.printIngredients = function(){
        console.log(this.listOfIngredients);
    }
    this.is15MinsMeal = function (){
        if(this.preparingTime < 15){
            console.log('This meal can be prepared for 15 minutes.');
        }else{
            console.log("This meal can't be prepared for 15 minutes.");
        }
    }
    this.changingCuisine = function (cuisine){
        this.typeOfCuisine = cuisine;
    }
    this.deletingIngredient = function (ingredient){
        for(var i = 0, j = 0; i < this.listOfIngredients.length; i++){
            if(listOfIngredients[i] == ingredient){
                continue
            }else{
                this.listOfIngredients[j] = this.listOfIngredients[i];
                j++;
            }
        }
    }
}


var Carbonara = new CulinaryRecipe('Spaghetti Carbonara', 'Italian', 3, ['Spaghetti', 'Bacon', 'Onion', 'Garlic', 'Olive oil'], 40, 'In a large pot of boiling salted water, cook spaghetti pasta until al dente. Drain well. Toss with 1 tablespoon of olive oil, and set aside.');

Carbonara.is15MinsMeal();
Carbonara.changingCuisine('Serbian');
Carbonara.deletingIngredient('Onion');
console.log(Carbonara);
