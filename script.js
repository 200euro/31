// const a = prompt('text 1')
// const b = prompt('text 2')
// const c = prompt('text 3')



// const h1 = document.querySelector('h1')
// const text = document.querySelector('text' )
// const box = document.querySelector('box' )


// h1.innerText = a
// text.innerText = b
// box.innerText = c

// const price = document.createElement('h3')
// price.innerText = c 

// box.append(price)

// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('#btn2')

// btn1.onclick = () => {
// alert('ho[')
// }


// btn2.onclick = () => {
// alert('dsfd')
// box.classList.add('none')
// }
 

const list = document.querySelector('.list')
const f1 = prompt('фрукт1')
const f2 = prompt('фрукт2')
const f3 = prompt('фрукт3')
const fruits = []

fruits.push(f1)
fruits.push(f2)
fruits.push(f3)

fruits.forEach(fruit => {
const p = document.createElement('p')
p.innerText = fruit
   list.append(p)

   p.onclick = () => {
      p.remove()
   }
})