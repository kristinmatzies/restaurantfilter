import RestaurantData from '../../essensziele.json'

const resultList = document.querySelector('.results')
const randomizeButton = document.querySelector('.randomize-button')

randomizeButton.addEventListener('click', () => showRestaurants(resultList))

function showRestaurants(restaurantList) {
  let selectedCategory = JSON.parse(localStorage.getItem('category'))
  let selectedDistance = JSON.parse(localStorage.getItem('distance'))
  console.log(selectedDistance)
  let filteredRestaurants = RestaurantData.filter(
    (restaurant) => restaurant.Kategorie === selectedCategory
  )
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
}
