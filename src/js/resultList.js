import RestaurantData from '../../essensziele.json'

const resultList = document.querySelector('.results')
const randomizeButton = document.querySelector('.randomize-button')

randomizeButton.addEventListener('click', () => showRestaurants(resultList))

function showRestaurants(restaurantList) {
  let selectedCategory = JSON.parse(localStorage.getItem('category'))
  let selectedDistance = JSON.parse(localStorage.getItem('distance'))
  let selectedPrice = JSON.parse(localStorage.getItem('price'))
  let selectedVeggieOption = JSON.parse(localStorage.getItem('veggie'))

  let filteredByCategory = RestaurantData.filter((restaurant) => {
    return (
      restaurant.Kategorie === selectedCategory &&
      restaurant.Entfernung === selectedDistance &&
      restaurant.Preis === selectedPrice &&
      restaurant.Veggie === selectedVeggieOption
    )
  })

  console.log(filteredByCategory)

  restaurantList.innerHTML = filteredByCategory
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
