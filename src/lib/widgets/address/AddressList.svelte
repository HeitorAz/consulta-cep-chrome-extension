<script lang="ts">
    import type Address from "$models/address";
    import AddressListItem from "$src/lib/widgets/address/AddressListItem.svelte";

    export let title: string;
    export let addresses: Address[] = [];
    export let showDate: boolean = false;
</script>

<h1 class="font-bold text-secondary-400">{title}</h1>
<div class="divide-y">
    {#each addresses as address}
        <AddressListItem address={address} {showDate}/>
    {/each}
</div>