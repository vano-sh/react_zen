class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  async get() {
    try {
      const res = await fetch(`${this.baseURL}.json`)
      return await res.json()
    } catch (err) {
      return console.error(err)
    }
  }

  async post(data) {
    try {
      const res = await fetch(`${this.baseURL}/orders.json`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return await res.json()
    } catch (err) {
      return console.error(err)
    }
  }
}

export default FetchWrapper