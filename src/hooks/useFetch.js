const useFetch = (baseURL) => {
  const getData = (endPoint) => {
    return new Promise((resolve, reject) => {
      fetch(baseURL + endPoint)
        .then(response => response.json())
        .then(data => {
          if (!data) {
            reject(data)
          }
          resolve(data)
        })
        .catch(error => reject(error))
    })
  }
  const postData = (endPoint, body) => {
    return new Promise((resolve, reject) => {
      fetch(baseURL + endPoint, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          if (!data) {
            reject(data)
          }
          resolve(data)
        })
        .catch(error => reject(error))
    })
  }

  return { getData, postData }
}

export default useFetch
