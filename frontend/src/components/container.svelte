<script>
import { loggedIn } from "$lib/auth";



import { get } from "$lib/store";



import { authData } from "../store/authData";


</script>

{#if (loggedIn())}
    <div class="container-fluid page-body-wrapper">
        <slot></slot>
    </div>
{:else if (!loggedIn())}
    <div class="container-fluid page-body-wrapper full-page-wrapper">
        <slot></slot>
    </div>
{/if}