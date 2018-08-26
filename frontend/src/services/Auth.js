  
const url = "http://localhost:3000/api"
  
export function signup(user){
    return fetch(url + '/signup', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
        credentials: 'include'
    })
    .then(res => res.json())
    .then(user => {
        localStorage.setItem("user", JSON.stringify(user));
        return user
    })
    .catch(e => console.log(e))
}
    
export function login(user){
    return fetch(url + '/login', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
        credentials: 'include'
    })
    .then(res => res.json())
    .then(user => {
        localStorage.setItem("user", JSON.stringify(user));
        return user
    })
    .catch(e => console.log(e))
}
    
export function logout(){
    return fetch(url + '/logout')
    .then(res => res.json())
    .then(res => {
        localStorage.removeItem("user");
        return res
    })
    .catch(e => console.log(e));
}