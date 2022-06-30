<script>


import Shell from "../components/shell.svelte";

import { onMount } from "svelte";
import { goto } from "$app/navigation";


onMount(async()=>{
    goto("/auth/login")
})

</script>

<Shell>
    
</Shell>

