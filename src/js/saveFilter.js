const categories = document.querySelectorAll('.category')
const distanceOptions = document.querySelectorAll('.distance')
const priceOptions = document.querySelectorAll('.price')
const veggieOptions = document.querySelectorAll('.veggie')

categories.forEach((category) => {
  category.addEventListener('click', (event) => {
    event.preventDefault()
    /* category.classList.add('selected') */
    localStorage.setItem(
      'category',
      JSON.stringify(category.getAttribute('data-value'))
    )
  })
})

distanceOptions.forEach((distance) => {
  distance.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.setItem(
      'distance',
      JSON.stringify(distance.getAttribute('data-value'))
    )
  })
})

priceOptions.forEach((price) => {
  price.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.setItem(
      'price',
      JSON.stringify(price.getAttribute('data-value'))
    )
  })
})

veggieOptions.forEach((veggie) => {
  veggie.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.setItem(
      'veggie',
      JSON.stringify(veggie.getAttribute('data-value'))
    )
  })
})
