<script lang="ts">
import AddressListItem from "./AddressListItem.svelte";
import type Address from "./models/address";

    export let title: string;
    export let addressList: Address[] = [];
    export let showDate: boolean = false;
</script>

<h1 class="font-bold text-secondary-400">{title}</h1>
<div class="divide-y">
    {#each addressList as address}
        <AddressListItem address={address} {showDate}/>
    {/each}
</div>