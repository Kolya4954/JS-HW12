


const user = {
    mood: "",
    hobby: "football",
    premium: true
}


user.mood = "happy"
user.hobby = "skydiving"
user.premium = false

for(let key of Object.keys(user)){
    console.log("Ключ: " + user[key]);
    
}



const totalWork = {
    work1: 2,
    work2: 5,
    work3: 10
}


function countProps(obj){
  return Object.keys(obj).length

}
console.log(countProps(totalWork));






// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".




const employees = {
    Maria: 5,
    jack: 10,
    Oleg: 2,
    Natalia: 50,
}


function findBestEmployee(employees){
   let bestName = ""
   let maxTask = 0
   const entries = Object.entries(employees)

   for( let i of entries){
    if(i[1]>maxTask){
            maxTask = i[1]
            bestName = i[0]
    }
   }
   return `${bestName}: ${maxTask}`
}

console.log(findBestEmployee(employees));










// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".


const totalSalary = {
    Mike: 500,
    Marta: 100,
    Poly: 1000,
    Ajax: 21,
}

let total = 0
    


function countTotalSalary(employees){
const salary = Object.values(employees) 
    for(let b of salary){
        total += b
    }
    return total
}

console.log(countTotalSalary(totalSalary));







const products = [{
    name: "Apple",
    price: 100,
    nayavnist: 2
},
{
    name: "Banana",
    price: 1,
    nayavnist: 1
},
{
    name: "orange",
    price: 50,
    nayavnist: 5
}
]



function getAllPropValues(arr, prop) {
  const result = []

  for (let obj of arr) {
    if (prop in obj) {
      result.push(obj[prop])
    }
  }

  return result
}


console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));










// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).




const objkt = [{
   name: "notebook",
   price: 50,
skilki: 10,
},
{
   name: "pen",
   price:5,
   skilki: 1,
},
{
name: "laptop",
price: 40,
skilki: 5,
},
{
name: "key",
price:1000,
skilki: 500,
}
]


function calculateTotalPrice(allProdcuts, productName){
    let sum = 0
   for(let a of allProdcuts){
    if(a.name === productName){
       sum += a.price * a.skilki
        
    }
   }
   return sum
}

