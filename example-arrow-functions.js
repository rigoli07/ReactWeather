var names = ['Andrew', 'Julie', 'Jen'];
             
//names.forEach(function (name) {
//    console.log('forEach', name);
//});

//names.forEach((name) => {
//    console.log('arrowFunc', name);
//});

//names.forEach((name) => console.log(name));

//var returnMe = (name) => name + '!';
//console.log(returnMe('Carmelo'));

//var person = {
//    name: 'Carmelo',
//    greet: function () {
//        names.forEach((name) => {
//            console.log(this.name + ' says hi to ' + name)        
//        });
//    }
//};
//
//person.greet();

function add (a, b) {
    return a + b;
}

//add statement
var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(4, 7));

//add expression
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));

//console.log(add(1, 3));
//console.log(add(9, 0));