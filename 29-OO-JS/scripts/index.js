//Classes with Cake
 let obj = {
     thing:'stuff'
 }

 class Cake {
     static frosting = true;

     constructor(flavor, occasion){
        this.flavor = flavor
        this.occasion = occasion
     }


     greeting = () => {
         console.log(`Happy ${this.occasion} here is a ${this.flavor} cake to show we care!`)
     }
     static about(){
         console.log(`ruby on cake, a cake making company`)
     }
 }

 let fishCake = new Cake('fish','birthday')

 class Baker extends Cake{
    constructor(name){
        super()
        this.name
        this.flavor = 'vanilla'
        this.occasion = 'the great british baking show'
    }
 }

 let btn = document.querySelector('button')

 let paul = new Baker('vanilla','the great british baking show')

btn.addEventListener('click', function(){
    console.log('this in callback:', this)
})

 //extends with paul and the great british baking show
//EventListener and lost context

//prototypes shopper buy and tom
//Object.setPrototypeOf && Obj.Prototype.foo = blah



// let shopper = {
//     buy:buy
// }

// let store = {
//     foo:'bleh'
// }

// let tom = {
//     list:['eggs','milk']
// }

// Object.setPrototypeOf(tom,shopper)
// Object.setPrototypeOf(tom, store)

    

function Shopper(name){
    this.name = name
    this.list = ['apples']
}

Shopper.prototype.buy = function buy(){
    console.log(`go buy ${this.list}`)
}

let tom = new Shopper('tom')