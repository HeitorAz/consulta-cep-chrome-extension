<script lang="ts">
import AddressList from '$lib/AddressList.svelte';

import type Address from '$lib/models/address';

import { addresses } from '../stores';

let allAddresses: Record<string, Address> = {};

addresses.subscribe((val) => {
	allAddresses = val;
});

$: historyAddresses = getHistoryAddresses(allAddresses);

function getHistoryAddresses(addresses: Record<string, Address>): Address[] {
	console.log('Getting recent addresses');
	const historyAddresses = Object.values(addresses).sort((a, b) => {
		return b.lastUsed.getTime() - a.lastUsed.getTime();
	});
	return historyAddresses;
}
</script>

<div class="h-full w-full bg-secondary-200 ">
	<div class="bg-white rounded-t-2xl h-full py-3 px-5 overflow-y-auto custom-scroll">
        {#if historyAddresses.length > 0}
            <AddressList title={'Histórico'} addressList={historyAddresses} showDate={true}/>
        {:else}
        <div class="w-full h-full flex flex-col justify-center items-center text-center ">
			<span class="material-icons-round text-7xl text-secondary-200">
				history
			</span>
			<p class="font-semibold text-secondary-700 text-xl">Seu histórico aparecerá aqui!</p>
		</div>
        {/if}
	</div>
</div>