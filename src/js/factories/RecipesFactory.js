/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Factory permettant de créer la datas à utiliser
------------------------------------------------------------------- */

class RecipesFactory {
  constructor(data, type) {
    if (type === 'recipes') {
      const recipesCardData = data.recipes.map((data) => {
        return new RecipesModelsCard(data)
      })
      return recipesCardData
    } else if (type === 'name') {
      //*
      const recipesNameData = data.recipes.map((data) => {
        return new RecipesModelsName(data)
      })
      return recipesNameData
    } else if (type === 'desc') {
      //*
      const recipesDescData = data.recipes.map((data) => {
        return new RecipesModelsDesc(data)
      })
      return recipesDescData
    } else if (type === 'ingredients') {
      //*
      const recipesIngredientsData = data.recipes.map((data) => {
        return new RecipesModelsIngredients(data)
      })
      return recipesIngredientsData
    } else {
      throw 'Unknown type format'
    }
  }
}
