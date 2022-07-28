<script lang="ts">
import { toggleFavorite } from "$providers/cep";
import type Address from "./models/address";

    export let address: Address;
</script>

<button class="flex" on:click={() => toggleFavorite(address)}>
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