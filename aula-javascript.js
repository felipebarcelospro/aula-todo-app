// Variaveis
var firstName = "Felipe"
var lastName = "Barcelos"
var age = 25
var bag = ["Caderno", "Celular", "Calça", 10]
var user = {
  firstName: "Felipe",
  lastName: "Barcelos",
  age: 25
}
var cart = [
  {
    id: "1",
    name: "Carderno",
    price: 49.70
  },
  {
    id: "1",
    name: "Carderno",
    price: 29.70
  },
  {
    id: "1",
    name: "Carderno",
    price: 19.70
  }
]

// operacoes
firstName = "Cindy"
user.firstName = "William"
age = age - 5
var fullName = firstName + " " + lastName

// Funcões
function getFullName(nome, sobrenome) {
  return nome + " " + sobrenome
}

function getCart() {
  return cart
}

function getTotalCart() {
  var total = 0
  cart.forEach(function(item) {
    total += item.price
  })
  return total
}

console.log(getTotalCart())

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(bag)
// console.log(user)
// console.log(user.firstName)
// console.log(cart)
// console.log(fullName)