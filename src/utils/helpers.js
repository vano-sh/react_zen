/**
 * @param {string} link 
 * @returns {string}
 */

export const getTypeLink = (link) => {
  if (link.includes('.svg') 
    || link.includes('.png') 
    || link.includes('.jpg')) {
      return 'image'
  } else if (link.search(/[a-z]*@[a-z]*\.(com|ru)/gy) !== -1) {
    return 'email'
  } else {
    return 'text'
  }
}

export const validateForm = (value, type) => {
  if (type === 'text') {
    if (value.length >= 2 
      && value.search(/[^a-z]+/gi) === -1) {
      return true     
    } else {
      return false
    }
  } 

  // 9094004000
  if (type === 'tel') {
    if (value.length >= 10
      && value.search(/[^0-9]+/gi) === -1) {
      return true    
    } else {
      return false    
    }
  }  

  // [a-z]@mail.ru || .com || .by
  // @mail, yandex, google, icloud 
  //  [a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)

  if (type === 'email') {
    if (value.length >= 9
      // eslint-disable-next-line no-useless-escape
      && value.search(/[a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)/gi) !== -1) {
      return true    
    } else {
      return false    
    }
  }  
}