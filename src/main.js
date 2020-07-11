const button = document.querySelector('.reset-button')
const category = document.querySelectorAll('.category')
const distance = document.querySelectorAll('.distance')
const price = document.querySelectorAll('.price')
const veggie = document.querySelectorAll('.veggie')
const resultList = document.querySelector('.results')
const results = []

category.addEventListener(click, saveCategoryFilter)
