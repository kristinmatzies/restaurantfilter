import RestaurantData from '../../essensziele.json'

const resetButton = document.querySelector('.reset-button')
const randomizeButton = document.querySelector('.reset-button')
const resultList = document.querySelector('.results')

export default function showRestaurants(restaurantList) {
  let category = JSON.parse(localStorage.getItem('category'))
  let filteredRestaurants = RestaurantData.filter(
    (restaurant) => restaurant.Kategorie === category
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
showRestaurants(resultList)
