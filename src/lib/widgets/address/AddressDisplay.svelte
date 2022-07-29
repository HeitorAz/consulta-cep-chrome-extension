<script lang="ts">
import type Address from "$models/address";
import AddressInfoItem from "$src/lib/widgets/address/AddressInfoItem.svelte";
import AddressTopOptions from "$src/lib/widgets/address/AddressTopOptions.svelte";

    export let address: Address;

    $: addressInfo = address.addressInfo;

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