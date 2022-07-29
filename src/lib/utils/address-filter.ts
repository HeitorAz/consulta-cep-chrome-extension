import type Address from '$models/address';

export function queryAddresses(addresses: Address[], query: string): Address[] {
	const filteredAddresses = Object.values(addresses).filter((address) => {
		return address.filter(query || '');
	});
	return filteredAddresses;
}
