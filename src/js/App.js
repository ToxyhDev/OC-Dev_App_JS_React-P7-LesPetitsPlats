/* eslint-disable no-undef */
/* ----------------------------------------------------------------
    Gestion de l'app
------------------------------------------------------------------- */
class App {
  constructor() {
    //  --> Envoie de l'URL avec nouvelle instance
    this.recipesApi = new RecipesApi('./src/js/data/recipes.json')

    this.$recipesContainer = document.querySelector('.section-recipes')
  }

  async main() {
    //  --> Récupération des datas
    const recipesData = await this.recipesApi.get()
    console.log(recipesData)

    //  --> Trie des données des Recipes Cards
    const recipes = new RecipesFactory(recipesData, 'recipes')
    console.log(recipes)

    //  --> Création des card recipe et ajout au DOM
    recipes.forEach((recipe) => {
      const templateCard = new RecipeCard(recipe)
      this.$recipesContainer.appendChild(templateCard.createRecipeCard())
    })
  }
}

/* ----------------------------------------------------------------
    Lance l'execution de l'app avec la méthode main()
------------------------------------------------------------------- */
const app = new App()
app.main()
