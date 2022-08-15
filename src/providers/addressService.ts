import Address from '$models/address';
import { CustomError } from '$src/lib/models/customError';
import { ToastType } from '$src/lib/models/toast';
import { copyToClipboard } from '$src/lib/utils/clipboard';
import { addresses, getSnapshot } from '$src/stores';

const API_URL = 'https://viacep.com.br/ws/';
const API_RESPONSE_FORMAT = 'json';

/**
 * Fetches an address from the API or from the local storage if available.
 * @async
 * @param cep - The CEP to be searched in the API or the local storage.
 * @returns {(Promise<Address | undefined>)} The address found or undefined if not found.
 */
export async function fetchAddressInfo(cep: string): Promise<Address | undefined> {
	try {
		return fetchFromHistory(cep) || (await fetchFromApi(cep));
	} catch (err: any) {
		throw err;
	}
}

/**
 * Toggles the favorite status of an address.
 * @param {Address} address - The address object that will be toggled.
 */
export function toggleFavorite(address: Address): void {
	address.isFavorite = !address.isFavorite;
	updateStores(address);
}

/**
 * Copies a list of addresses to the clipboard as a JSON string.
 *
 * @async
 * @param {Address[]} addresses - The list of addresses to be copied.
 */
export async function copyListOfAddresses(addresses: Address[]): Promise<void> {
	//copy the list of addresses to the clipboard as JSON
	let addressesJSON = JSON.stringify(
		addresses.map((address) => address.information),
		null,
		4
	);
	await copyToClipboard(addressesJSON, 'JSON copiado!', 'Erro ao copiar JSON!');
}

/**
 * Fetches an address from the API using a CEP.
 *
 * @async
 * @param {string} cep - The CEP to be searched in the API.
 * @returns {Promise<Address>} The Address object generated using the information provided by the API.
 */
async function fetchFromApi(cep: string): Promise<Address> {
	let addressDataJSON: any = null;
	try {
		const response = await fetch(`${API_URL}${cep.replace(/\D/g, '')}/${API_RESPONSE_FORMAT}/`);
		addressDataJSON = await response.json();
	} catch (err) {
		throw new CustomError(
			'Ocorreu um erro ao buscar o CEP',
			500,
			ToastType.Danger,
			'Erro ao buscar CEP'
		);
	}
	if (addressDataJSON.erro) throw new CustomError('CEP inválido', 400, ToastType.Warning);
	let address = Address.fromAPIJson(addressDataJSON);
	updateStores(address);
	return address;
}

/**
 * Tries to fetch an address from the local storage.
 *
 * @param {string} cep - The CEP to be searched in the local storage.
 * @returns {(Address | undefined)} The Address object stored locally or undefined if not found.
 */
function fetchFromHistory(cep: string): Address | undefined {
	let addressFromHistory = getSnapshot(addresses)[cep];

	if (addressFromHistory) {
		updateLastUsed(addressFromHistory);
	}
	return addressFromHistory;
}

/**
 * Updates the stores with the new address and limits their sizes.
 * @param {Address} address - The address to be added to the stores.
 */
function updateStores(address: Address): void {
	let allAddresses = getSnapshot(addresses);
	allAddresses[address.information.cep] = address;
	addresses.update((_) => allAddresses);
}

/**
 * Updates the last used date of an address.
 * @param {Address} address - The address to be updated.
 */
function updateLastUsed(address: Address) {
	address.lastUsed = new Date();
	updateStores(address);
}
