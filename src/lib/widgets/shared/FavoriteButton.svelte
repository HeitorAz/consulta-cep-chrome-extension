<script lang="ts">
import type Address from "$models/address";
import { toggleFavorite } from "$src/providers/addressService";

    export let address: Address;
    let clazz: string = '';
    export { clazz as class }
</script>

<button class="flex {clazz || ''}" on:click={() => toggleFavorite(address)}>
    {#if address.isFavorite}
        <span class="material-icons-round text-2xl text-secondary-700">
            bookmark
        </span>
    {:else}
        <span class="material-icons-round text-2xl text-secondary-700">
            bookmark_border
        </span>
    {/if}
</button>