// create Authentication.js file in src folder and add the following code:
// // create authentication for login page
export const authenticate = (callback) => {
    localStorage.setItem('isAuthenticated', true)
    console.log('authenticated')
    // callback()
}
// what is callback in above code? and
export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('isAuthenticated')) {
        return localStorage.getItem('isAuthenticated')
    } else {
        return false
    }
}

export const logout = (callback) => {
    localStorage.setItem('isAuthenticated', false)
}
//
