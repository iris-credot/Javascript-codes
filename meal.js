const menu = {
   '_meal': 'chips',
    '_price' : 500,
    set  meal (mealToCheck){
           if(typeof mealToCheck === 'string'){
   return this._meal = mealToCheck;
           }
    },
    set  price (priceToCheck){
        if(typeof priceToCheck === 'number'){
return this._meal = mealToCheck;
        }
 },
    get todaysSpecial (){
        if(this._meal && this._price){
console.log(`Today's special is ${this._meal} for ${this._price}.`)
        }
        else{
            console.log('Meal or price was not set correctly!');
        }
    }

};
menu.meal= 3;
menu.price = 'price';
console.log(menu.todaysSpecial); 