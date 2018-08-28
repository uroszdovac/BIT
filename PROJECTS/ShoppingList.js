

(function(){
    "use strict"
    
    /*       PRODUCT      */

    function Product(name, price,expDate){

        this.id = parseInt((100000 - 10000) * Math.random() + 10000);
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expDate = new Date(expDate);

        this.getInfo = function(){
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(name.length -1).toUpperCase();
            return firstLetter + lastLetter + this.id + ', ' + this.name + ', ' + this.price;
        }
    }

    /*     SHOPPING LIST     */

    function ShoppingBag(){

        this.listOfProducts = [];

        this.addProduct = function(product){
            var today = new Date();
            if(product.expDate > today){
                this.listOfProducts.push(product);
            }else{
                console.log('Product has expired!')
            }
        }

        this.averagePrice = function(){
            var averPrice = 0;
            for(var i = 0; i < this.listOfProducts.length; i++){
                averPrice += (this.listOfProducts[i].price / this.listOfProducts.length);
            }
            return averPrice.toFixed(3);
        }

        this.getMostExpensive = function(){
            var mostExpen = this.listOfProducts[0].price;
            var mostExpenProduct = this.listOfProducts[0];
            for(var j = 0; j < this.listOfProducts.length; j++){
                if(mostExpen < this.listOfProducts[j].price){
                    mostExpen = this.listOfProducts[j].price;
                    mostExpenProduct = this.listOfProducts[j];
                }
            }
            return mostExpenProduct.getInfo();
        }

        this.calculateTotalPrice = function(){
            var totalPrice = 0;
            for(var k = 0; k < this.listOfProducts.length; k++){
                totalPrice += this.listOfProducts[k].price;
            }
            return parseFloat(totalPrice.toFixed(2));
        }
        
        
    }

    /*    PAYMENT CARD    */

    function PaymentCard(balance, validUntil){
        this.balance = parseFloat(balance.toFixed(2));
        this.expDate = new Date(validUntil);
        this.isActive = function (){
            return this.expDate.getTime() > Date.now();
        }
    }

    /*  CHECK OUT AND BUY  */

    function checkOutAndBuy(shoppingBag, paymentCard){
        var haveEnoughMoney = paymentCard.balance > shoppingBag.calculateTotalPrice();
        if(paymentCard.isActive() && haveEnoughMoney){
            paymentCard.balance -= shoppingBag.calculateTotalPrice();
            console.log('Success Buy!');
            console.log('Total cost ' + shoppingBag.calculateTotalPrice());
            console.log('Remaining balance: ' + (paymentCard.balance).toFixed(2));
        }else{
            var missing = (shoppingBag.calculateTotalPrice() - paymentCard.balance).toFixed(2);
            console.log('Unable to finish shopping.Yo need ' + missing + ' more dollars');
        } 
    }


    var banana = new Product ('Banana', 204.896, '10/10/2019');
    var apple = new Product ('Apple', 45.369, '12/8/2019');
    var pineapple = new Product ('Pineapple', 520.698, '7/9/2020');
    var mango = new Product ('Mango', 850.365, '2/10/2019');

    var myBag = new ShoppingBag();

    var visa = new PaymentCard(1700, '10/10/2020', );

    

    myBag.addProduct(banana);
    myBag.addProduct(apple);
    myBag.addProduct(pineapple);
    myBag.addProduct(mango);

    myBag.averagePrice();
    myBag.getMostExpensive();
    myBag.calculateTotalPrice();


    checkOutAndBuy(myBag, visa);
})();