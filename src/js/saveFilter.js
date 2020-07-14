const categories = document.querySelectorAll('.category')
const distanceOptions = document.querySelectorAll('.distance')
const priceOptions = document.querySelectorAll('.price')
const veggieOptions = document.querySelectorAll('.veggie')

saveFilter(categories)
saveFilter(distanceOptions)
saveFilter(priceOptions)
saveFilter(veggieOptions)

function removeClasslist(filters) {
  filters.forEach((filter) => {
    filter.classList.remove('selected')
  })
}

function saveToStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

function saveFilter(filters) {
  filters.forEach((filter) => {
    filter.addEventListener('click', (event) => {
      event.preventDefault()
      removeClasslist(filters)
      filter.classList.add('selected')
      saveToStorage(
        filter.className.split(' ')[0],
        filter.getAttribute('data-value')
      )
    })
  })
}
