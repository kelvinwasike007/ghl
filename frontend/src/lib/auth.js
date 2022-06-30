import { goto } from "$app/navigation";
import { authData } from "../store/authData";


export function loggedIn(){
    let auth, role

    authData.subscribe(v=>{
        auth = v.auth
        role = v.role
    })

    if(!auth){
        
        return false
    }

    
    return true
    
}

export function privateRoute(){
    let auth, role

    authData.subscribe(v=>{
        auth = v.auth
        role = v.role
    })

    if(!auth){
        //goto("/")
    }else{
        goto(`/${role}/dashboard`)
    }


}