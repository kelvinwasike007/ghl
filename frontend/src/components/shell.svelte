<script>
import {  loggedIn } from "$lib/auth";


import Container from "./container.svelte";

import Sidebar from "./sidebar.svelte";

import Topbar from "./topbar.svelte";

</script>

<Sidebar />
<Container>
    <Topbar />

    {#if loggedIn()}
    <div class="main-panel">
        <div class="content-wrapper">
            <slot></slot>
        </div>
    </div>
    {:else}
        <slot />
    {/if}
   
    
</Container>