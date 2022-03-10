console.log('Hellow world');

// Global variables
var x = 5; let y = 10
console.log('Före blocket: ', x, y);

if( true ) {
	// Block scope
    var x = 500   // overwrites global x
    let y = 1000  // local variable
	console.log('Inuti if-blocket: ', x, y);
}
console.log('Utanför blocket: ', x, y)