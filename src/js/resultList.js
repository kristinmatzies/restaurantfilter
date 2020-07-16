import RestaurantData from '../../essensziele.json'

const resultList = document.querySelector('.results')
const randomizeButton = document.querySelector('.randomize-button')
const resetButton = document.querySelector('.reset-button')
const filters = document.querySelectorAll('div')

randomizeButton.addEventListener('click', () => showRestaurants(resultList))
resetButton.addEventListener('click', () => resetFilter(resultList))

function showRestaurants(restaurantList) {
  const selectedCategory = loadFromStorage('category')
  const selectedDistance = loadFromStorage('distance')
  const selectedPrice = loadFromStorage('price')
  const selectedVeggieOption = loadFromStorage('veggie')

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
    shuffle(filteredRestaurants)
    restaurantList.innerHTML = filteredRestaurants
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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function loadFromStorage(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (error) {
    console.log(error.message)
  }
}
