import { browser } from '$app/env';
import Address from '$lib/models/address';
import type { Toast } from '$lib/models/toast';
import { get, writable, type Writable } from 'svelte/store';

export const addresses = createAddressStore();
addresses.subscribe((val) => {
	if (browser) {
		console.log('Updating Local Storage');
		localStorage.setItem('addresses', JSON.stringify(val));
	}
});

export const currentAddressCep = writable<string | undefined>(undefined);

export const toast = writable<Toast | undefined>(undefined);

export function getSnapshot<T>(store: Writable<T>): T {
	return get(store);
}

function fetchLocalAddresses() {
	const localStorageAddresses = localStorage.getItem('addresses');
	if (localStorageAddresses) {
		let transformedAddresses = transformLocalStorageData(localStorageAddresses);
		return transformedAddresses;
	}
	return {};
}

function createAddressStore() {
	const store = writable<Record<string, Address>>((browser && fetchLocalAddresses()) || {});
	return store;
}

function transformLocalStorageData(json: string) {
	let addressesObject = JSON.parse(json);
	let transformedAddresses: Record<string, Address> = {};
	Object.entries(addressesObject).forEach(([cep, address]) => {
		transformedAddresses[cep] = Address.fromLocalStorageJson(address);
	});
	return transformedAddresses;
}
