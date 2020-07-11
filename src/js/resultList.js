import RestaurantData from '../../essensziele.json'

const resultList = document.querySelector('.results')
const randomizeButton = document.querySelector('.randomize-button')
const resetButton = document.querySelector('.reset-button')
const filters = document.querySelectorAll('div')

randomizeButton.addEventListener('click', () => showRestaurants(resultList))
resetButton.addEventListener('click', () => resetFilter(resultList))

function showRestaurants(restaurantList) {
  let selectedCategory = JSON.parse(localStorage.getItem('category'))
  let selectedDistance = JSON.parse(localStorage.getItem('distance'))
  let selectedPrice = JSON.parse(localStorage.getItem('price'))
  let selectedVeggieOption = JSON.parse(localStorage.getItem('veggie'))
  let filteredRestaurants = RestaurantData.filter((restaurant) => {
    return selectedCategory &&
      selectedDistance &&
      selectedPrice &&
      selectedVeggieOption
      ? restaurant.Kategorie === selectedCategory &&
          restaurant.Entfernung === selectedDistance &&
          restaurant.Preis === selectedPrice &&
          restaurant.Veggie === selectedVeggieOption
      : restaurant.Kategorie === selectedCategory ||
          restaurant.Entfernung === selectedDistance ||
          restaurant.Preis === selectedPrice ||
          restaurant.Veggie === selectedVeggieOption
  })

  if (filteredRestaurants != '') {
    restaurantList.innerHTML = filteredRestaurants
      .slice()
      .sort(() => randomize(filteredRestaurants))
      .map((restaurant) => {
        return `
   <section>
   <li>${restaurant.Name} |</li>
   <li>🏎️${restaurant.Entfernung} |</li>
   <li>💰${restaurant.Preis} |</li>
   <li>🥑${restaurant.Veggie} |</li>
   <li>${restaurant.Adresse}</li>
   </section>`
      })
      .join('')
  } else {
    restaurantList.innerHTML = `<section><li>Sorry, für deine Auswahl gibt es keine Restaurants.</li>
   </section>`
  }
}

function resetFilter(restaurantList) {
  filters.forEach((filter) => filter.classList.remove('selected'))
  localStorage.clear()
  restaurantList.innerHTML = ''
}

function randomize(filteredRestaurants) {
  const maxIndex = filteredRestaurants.length - 1
  return Math.round(Math.random() * maxIndex)
}
