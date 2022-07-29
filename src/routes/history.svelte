<script lang="ts">
	import type Address from '$models/address';
	import { copyListOfAddresses } from '$providers/cep';
	import { queryAddresses } from '$src/lib/utils/address-filter';
	import { addresses } from '$src/stores';
	import AddressList from '$widgets/address/AddressList.svelte';
	import SearchBar from '$widgets/shared/SearchBar.svelte';

	let searchText: string;
	$: shownAddresses = queryAddresses(getHistoryAddresses($addresses), searchText);

	function getHistoryAddresses(addresses: Record<string, Address>): Address[] {
		console.log('Getting recent addresses');
		const historyAddresses = Object.values(addresses).sort((a, b) => {
			return b.lastUsed.getTime() - a.lastUsed.getTime();
		});
		return historyAddresses;
	}

	async function copyAllHistoryAddresses() {
		await copyListOfAddresses(shownAddresses);
	}
</script>

<div class="h-full w-full bg-secondary-200 ">
	<div class="bg-white rounded-t-2xl h-full py-3 px-5 overflow-y-auto custom-scroll">
		<div class="flex flex-row justify-between items-center mb-2">
			<SearchBar bind:value={searchText}/>
			<button class="mr-2" on:click={copyAllHistoryAddresses}>
				<span class="material-icons-round text-2xl text-secondary-700">
					ios_share
				</span>
			</button>
		</div>
        {#if shownAddresses.length > 0}
            <AddressList title={'Histórico'} addressList={shownAddresses} showDate={true}/>
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