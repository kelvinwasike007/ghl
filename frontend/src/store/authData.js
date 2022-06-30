import { writable } from "svelte/store";

export const  authData = writable({auth: false, token: null, role: null, username: null})