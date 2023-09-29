/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Gestion des tags
------------------------------------------------------------------- */
class ListTags {
  constructor() {
    this.$filterSection = document.querySelector('.section-filterSelected')
  }
  static tagArray = []

  addToListTag(value) {
    ListTags.tagArray.push(value)
    console.log(ListTags.tagArray)

    this.createCard(value)
  }

  createCard(value) {
    const createTagLabel = new TagLabel(value)
    this.$filterSection.appendChild(createTagLabel.createTag())
  }
}
