<script >
import { authData } from "../../store/authData";

import Shell from "../../components/shell.svelte";
import { goto } from "$app/navigation";

import {store} from '$lib/store'

import { onMount } from "svelte";
import { loggedIn } from "$lib/auth";

onMount(()=>{
  loggedIn()
})

let username = ''
let password = ''

let message = ''

async function login() {
  const request = await fetch('http://127.0.0.1:4000/login', {method: 'POST',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify({"username": username, "password": password})})
  const info = await request.json()
  message = info.message
  

  if(info.ok == 1){
    authData.set({
      auth: true,
      token: info.data.info._id,
      role: info.data.role.toLowerCase(),
      username: info.data.info.username
    })
    goto(`/${info.data.info.role.toLowerCase()}/dashboard`)
  }

}

$: message

</script>

<Shell>
    <div class="row w-100 m-0">
      
        <div class="content-wrapper full-page-wrapper d-flex align-items-center auth ">
          <div class="card col-lg-4 mx-auto">
            <div class="card-body px-5 py-5">
              <div class="h4 text-center">
                WELCOME TO GHL(GLOBAL INVESTORZ HUB)
              </div>
              <h3 class="card-title text-left mb-3">Login</h3>
              <div class="text-info">{`${message == undefined ? "" : message}`}</div>
                <div class="form-group">
                  <label>Username or email *</label>
                  <input type="text" bind:value={username} class="form-control p_input">
                </div>
                <div class="form-group">
                  <label>Password *</label>
                  <input type="password" bind:value={password}  class="form-control p_input">
                </div>
                <div class="form-group d-flex align-items-center justify-content-between">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input"> Remember me </label>
                  </div>
                  <a href="#" class="forgot-pass">Forgot password</a>
                </div>
                <div class="text-center">
                  <button on:click={login} class="btn btn-primary btn-block enter-btn">Login</button>
                </div>
                
                <p class="sign-up">Don't have an Account?<a href="/auth/signup"> Sign Up</a></p>

            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
</Shell>