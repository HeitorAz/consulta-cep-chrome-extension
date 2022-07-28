<script lang="ts">
import AddressList from '$lib/AddressList.svelte';
import type Address from '$lib/models/address';
import { addresses } from '../stores';

let allAddresses: Record<string, Address> = {};

addresses.subscribe((val) => {
	allAddresses = val;
});

$: favoriteAddresses = getFavoriteAddresses(allAddresses);

function getFavoriteAddresses(addresses: Record<string, Address>): Address[] {
	const favoriteAddresses = Object.values(addresses).filter((a) => {
		return a.isFavorite;
	});
	return favoriteAddresses;
}
</script>

<div class="h-full w-full bg-secondary-200 ">
	<div class="bg-white rounded-t-2xl h-full py-3 px-5 overflow-y-auto custom-scroll">
		{#if favoriteAddresses.length > 0}
			<AddressList title={'Favoritos'} addressList={favoriteAddresses}/>
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
