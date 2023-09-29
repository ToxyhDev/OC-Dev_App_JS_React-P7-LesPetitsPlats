/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// --> Contructor Patterns
/* ----------------------------------------------------------------
    Class(modèle) des ingrédients à trier
------------------------------------------------------------------- */

class RecipesModelsIngredients {
  constructor(data) {
    this._id = data.id
    this._ingredients = data.ingredients
  }

  get id() {
    return this._id
  }

  get ingredients() {
    const listIngredients = this._ingredients.map((element) => {
      const removeStopWord = new RemoveStopWords(element.ingredient)
      const nameFiltered = removeStopWord.filterStopWord()
      return nameFiltered.toLowerCase()
    })
    return listIngredients
  }
}
