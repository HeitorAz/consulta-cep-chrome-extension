<script lang="ts">
import AddressInfoItem from "./AddressInfoItem.svelte";
import AddressTopOptions from "./AddressTopOptions.svelte";
import type Address from "./models/address";

    export let address: Address;

    $: addressInfo = address.information.toObject();

</script>


{#if address}
    <div class="bg-white divide-y divide-dashed">
        <AddressTopOptions {address}/>
        <AddressInfoItem label="Endereço" value={address.information.toString()} flag=''/>
        {#each Object.entries(addressInfo) as [key, value]}
            <AddressInfoItem label={key} value={value.toString()} flag={key === 'Estado' ? value.toString() : ''} />
        {/each}
    </div>
{/if}