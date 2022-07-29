import type Address from '$models/address';

/**
 * Returns a list of addresses filtered by the given search term.
 *
 * @param addresses - The list of addresses to be filtered.
 * @param query - The search term to be used to filter the addresses.
 * @returns {Address[]} The list of addresses filtered by the given search term.
 */
export function queryAddresses(addresses: Address[], query: string): Address[] {
	const filteredAddresses = Object.values(addresses).filter((address) => {
		return address.filter(query || '');
	});
	return filteredAddresses;
}
