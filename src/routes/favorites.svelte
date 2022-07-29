<script lang="ts">
import type Address from '$models/address';
import { queryAddresses } from '$src/lib/utils/address-filter';
import AddressList from '$src/lib/widgets/address/AddressList.svelte';
import SearchBar from '$src/lib/widgets/shared/SearchBar.svelte';
import { copyListOfAddresses } from '$src/providers/addressService';
import { addresses } from '$src/stores';

let searchText: string;
$: shownAddresses = queryAddresses(getFavoriteAddresses($addresses), searchText);

function getFavoriteAddresses(addresses: Record<string, Address>): Address[] {
	const favoriteAddresses = Object.values(addresses).filter((address) => {
		return address.isFavorite;
	});
	return favoriteAddresses;
}

async function copyAllFavoriteAddresses() {
	await copyListOfAddresses(shownAddresses);
}
</script>

<div class="h-full w-full bg-secondary-200 ">
	<div class="bg-white rounded-t-2xl h-full py-3 px-5 overflow-y-auto custom-scroll">
		{#if shownAddresses.length > 0 || searchText}
			<div class="flex flex-row justify-between items-center mb-2">
				<SearchBar bind:value={searchText}/>
				<button class="mr-2" on:click={copyAllFavoriteAddresses}>
					<span class="material-icons-round text-2xl text-secondary-700">
						ios_share
					</span>
				</button>
			</div>
			<AddressList title={'Favoritos'} addressList={shownAddresses}/>
		{:else}
		<div class="w-full h-full flex flex-col justify-center items-center text-center ">
			<span class="material-icons-round text-7xl text-secondary-200">
				bookmark_border
			</span>
			<p class="font-semibold text-secondary-700 text-xl">Seus endereços favoritos aparecerão aqui!</p>
		</div>
		{/if}
	</div>
</div>
