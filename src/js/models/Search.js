import axios from 'axios'

export default class Search {
  constructor(query) {
    this.query = query
  }

  async getResults() {
    const key = '4d34a8557025b5f1dcbb16f5d54394dd'

    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      )
      this.result = res.data.recipes
    } catch (err) {
      alert(err)
    }
  }
}
