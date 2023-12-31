/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Class(modèle) enlever stop word
------------------------------------------------------------------- */
class RemoveStopWords {
  constructor(data) {
    this._data = this.diviseString(data)
    this._stopWords = this.stopWords()
  }

  diviseString(data) {
    const words = data.split(' ')
    return words
  }

  filterStopWord() {
    const wordFilter = this._data
      .filter((word) => !this._stopWords.includes(word.toLowerCase()))
      .join(' ')

    const removePonct = wordFilter.replace(/\p{P}/gu, '')

    return removePonct.toLowerCase()
  }

  stopWords() {
    const stopWords = [
      'a',
      'à',
      'alors',
      'au',
      'aux',
      'aucuns',
      'aussi',
      'autre',
      'ainsi',
      'avant',
      'avec',
      'avoir',
      'bon',
      'car',
      'ce',
      'cela',
      'ces',
      'ceux',
      'chaque',
      'ci',
      'comme',
      'comment',
      'dans',
      'de',
      'des',
      'du',
      'dedans',
      'dehors',
      'depuis',
      'devrait',
      'doit',
      'donc',
      'dos',
      'début',
      'elle',
      'elles',
      'en',
      'encore',
      'essai',
      'est',
      'et',
      'eu',
      'fait',
      'faites',
      'fois',
      'font',
      'hors',
      'ici',
      'il',
      'ils',
      'je',
      'juste',
      'la',
      'le',
      'les',
      'leur',
      'là',
      'ma',
      'maintenant',
      'mais',
      'mes',
      'mien',
      'moins',
      'mon',
      'mot',
      'même',
      'ni',
      'nommés',
      'notre',
      'nous',
      'ou',
      'où',
      'par',
      'parce',
      'pas',
      'peut',
      'peu',
      'plupart',
      'pour',
      'pourquoi',
      'quand',
      'que',
      'quel',
      'quelle',
      'quelles',
      'quels',
      'qui',
      'sa',
      'sans',
      'ses',
      'seulement',
      'si',
      'sien',
      'son',
      'sont',
      'sous',
      'soyez',
      'sujet',
      'sur',
      'ta',
      'tandis',
      'tellement',
      'tels',
      'tes',
      'ton',
      'tous',
      'tout',
      'trop',
      'très',
      'tu',
      'voient',
      'vont',
      'votre',
      'vous',
      'vu',
      'ça',
      'étaient',
      'état',
      'étions',
      'été',
      'être',
    ]
    return stopWords
  }
}
