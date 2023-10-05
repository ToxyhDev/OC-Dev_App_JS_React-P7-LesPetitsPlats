/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Créer les recettes en fonction de la liste fourni
------------------------------------------------------------------- */

class CreateRecipeCard {
  constructor() {
    this.$recipesContainer = document.querySelector('.section-recipes')
  }

  static recipes = []

  static invertedIndex = {}

  initRecipesArray(data) {
    CreateRecipeCard.recipes = data
  }

  initInvertedIndex(words) {
    CreateRecipeCard.invertedIndex = words
  }

  filterRecipes(boolean, tags) {
    this.$recipesContainer.innerHTML = ''
    const recipesArray = CreateRecipeCard.recipes

    const wordsArray = CreateRecipeCard.invertedIndex
    // --> Vrai affiche toute les recette
    if (boolean) {
      this.createRecipe(recipesArray)

      const idArray = recipesArray.map((recipe) => recipe.id.toString())
      new TagInFilters(idArray).runSortFilter()
    } else {
      this.searchWordIndex(wordsArray, tags)
    }
  }

  createRecipe(recipes) {
    new NumberRecipes().createResult(recipes.length)
    //  --> Création des card recipe et ajout au DOM
    recipes.forEach((recipe) => {
      const templateCard = new RecipeCard(recipe)
      this.$recipesContainer.appendChild(templateCard.createRecipeCard())
    })
  }

  createMsgNotFound() {
    const templateCard = new RecipeCard()
    this.$recipesContainer.appendChild(templateCard.createMsgError())
  }

  searchWordIndex(words, tags) {
    // --> Sépare les tags avec + de 2 mots (ex 'tarte thon' -> 'tarte' 'thon')
    tags = tags.join(' ').split(' ')

    // --> Initialise tableau pour rajouter id recette
    let addMatchRecipes = []

    for (const tag of tags) {
      const addMatchRecipe = []
      for (const word in words) {
        if (word.startsWith(tag)) {
          addMatchRecipe.push(words[word].join(' '))
        }
      }
      addMatchRecipes.push(
        Array.from(new Set(addMatchRecipe.join(' ').split(' '))).join(' ')
      )
    }

    let resultMatchRecipes = addMatchRecipes.join(' ').split(' ')

    let filteredMatchRecipes = []
    if (tags.length >= 2) {
      console.log(resultMatchRecipes)
      for (let i = 1; i < tags.length; i++) {
        console.log(i)

        for (const [key, value] of resultMatchRecipes.entries()) {
          if (resultMatchRecipes.includes(value, key + 1)) {
            filteredMatchRecipes.push(value)
          }
        }

        resultMatchRecipes = filteredMatchRecipes
        filteredMatchRecipes = []
      }
    }

    if (resultMatchRecipes.join().length > 0) {
      this.searchRecipes(resultMatchRecipes)
      new TagInFilters(resultMatchRecipes).runSortFilter()
    } else {
      this.createMsgNotFound()
      new NumberRecipes().createResult(0)
      new TagInFilters([]).runSortFilter()
    }

    // console.log(resultMatchRecipes.join().length)
    // this.searchRecipes(resultMatchRecipes)
  }

  searchRecipes(resultMatchRecipes) {
    // ==> Création du tableau des recettes en HTML
    const displayRecipe = CreateRecipeCard.recipes.filter((recipe) => {
      if (resultMatchRecipes.includes(`${recipe.id}`)) {
        return recipe
      }
    })

    this.createRecipe(displayRecipe)
    console.timeEnd('Algorithme 1')
    // console.log(displayRecipe)
  }
}
