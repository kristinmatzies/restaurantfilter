const categories = document.querySelectorAll('.category')
const distanceOptions = document.querySelectorAll('.distance')
const priceOptions = document.querySelectorAll('.price')
const veggieOptions = document.querySelectorAll('.veggie')

saveFilter(categories)
saveFilter(distanceOptions)
saveFilter(priceOptions)
saveFilter(veggieOptions)

function saveFilter(filters) {
  filters.forEach((filter) => {
    filter.addEventListener('click', (event) => {
      event.preventDefault()
      removeClassList(filters)
      addClassList(filter)
      saveToStorage(
        filter.className.split(' ')[0],
        filter.getAttribute('data-value')
      )
    })
  })
}

function removeClassList(filters) {
  filters.forEach((filter) => {
    filter.classList.remove('selected')
  })
}

function addClassList(filter) {
  filter.classList.add('selected')
}

function saveToStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}
