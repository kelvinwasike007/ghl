<script>
import { goto } from "$app/navigation";

import Shell from "../../components/shell.svelte";



    let message = ' '
    let username = '', password = '', refCode = '', email = '', phone = ''

    async function signup() {
        const request = await fetch('http://localhost:4000/account', {method: "POST", body: JSON.stringify({
            username: username,
            password: password,
            refCode: refCode,
            email: email,
            phone: phone,
            role: 'Normal'
        }), headers:{
            'Content-Type': 'application/json'
        }})

        const info = await request.json()

        message = info.message

        if(info.ok == 1){
            goto("/auth/login")
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
              <h4 class="card-title text-left mb-3">Create An Account</h4>
              <div class="text-info">{`${message == undefined ? "" : message}`}</div>
                <div class="form-group">
                  <label>Username *</label>
                  <input type="text" bind:value={username} class="form-control p_input">
                </div>
                <div class="form-group">
                  <label>Password *</label>
                  <input type="password" bind:value={password}  class="form-control p_input">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" bind:value={email} class="form-control p_input">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" bind:value={phone} class="form-control p_input">
                </div>
                <div class="form-group">
                    <label>Referral Code</label>
                    <input type="text" bind:value={refCode} class="form-control p_input">
                  </div>
                <div class="text-center">
                  <button on:click={signup} class="btn btn-primary btn-block enter-btn">Sign Up</button>
                </div>
                
                <p class="sign-up">I am a member<a href="/auth/signup"> Login</a></p>

            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
</Shell>