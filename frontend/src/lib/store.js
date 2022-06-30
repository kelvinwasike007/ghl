export function store(key, val){
    localStorage.setItem(key, val)
}

export function get(key){
    return localStorage.getItem(key)
}