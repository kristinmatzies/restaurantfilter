import RestaurantData from '../../essensziele.json'

const resetButton = document.querySelector('.reset-button')
const randomizeButton = document.querySelector('.reset-button')
const resultList = document.querySelector('.results')

function showRestaurants(restaurantList) {
  let category = localStorage.getItem('category')
  restaurantList.innerHTML = RestaurantData.map((restaurant) => {
    return `
   <section>
   <li>${restaurant.Name} |</li>
   <li>🏎️${restaurant.Entfernung} |</li>
   <li>💰${restaurant.Preis} |</li>
   <li>🥑${restaurant.Veggie} |</li>
   <li>${restaurant.Adresse}</li>
   </section>`
  }).join('')
  document.body.appendChild(restaurantList)
}
showRestaurants(resultList)
