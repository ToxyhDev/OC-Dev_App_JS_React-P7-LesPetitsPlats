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
    } else {
      throw 'Unknown type format'
    }
  }
}
