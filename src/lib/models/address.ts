import AddressInfo from '$models/addressInfo';

export default class Address {
	constructor(
		public information: AddressInfo = new AddressInfo(),
		public lastUsed: Date = new Date(),
		public isFavorite: boolean = false
	) {}

	/**
	 * Creates an Address object from a JSON object received from the ViaCEP API.
	 *
	 * @param {any} json - The JSON data to be converted to an Address object.
	 * @returns {Address} The Address object generated from the JSON data.
	 */
	public static fromAPIJson(json: any): Address {
		return new Address(AddressInfo.fromAPIJson(json), new Date(), false);
	}

	/**
	 * Creates an Address object from a JSON object received from the local storage.
	 *
	 * @param {any} json - The JSON data to be converted to an Address object.
	 * @returns {Address} The Address object generated from the JSON data.
	 */
	public static fromLocalStorageJson(json: any): Address {
		return new Address(
			AddressInfo.fromLocalStorageJson(json.information),
			new Date(json.lastUsed),
			json.isFavorite
		);
	}

	/**
	 * Verifies if the address is valid by checking if it has a CEP.
	 *
	 * @returns {boolean} True if the address is valid, false otherwise.
	 */
	public isValid(): boolean {
		return this.information.cep !== 'Desconhecido';
	}

	/**
	 * Toggles the favorite status of an address.
	 */
	public toggleFavorite(): void {
		this.isFavorite = !this.isFavorite;
	}

	/**
	 * Verifies if the address matches the given query.
	 *
	 * @param query - The query used to check if the address is a match.
	 * @returns {boolean} True if the address matches the query, false otherwise.
	 */
	public filter(query: string): boolean {
		query = query.toLowerCase();
		return (
			this.information.cep.replace(/\D/g, '').includes(query) ||
			this.information.cep.includes(query) ||
			this.information.logradouro.toLowerCase().includes(query) ||
			this.information.bairro.toLowerCase().includes(query) ||
			this.information.cidade.toLowerCase().includes(query) ||
			this.information.estado.toLowerCase().includes(query)
		);
	}

	/**
	 * Returns all the basic information of the address.
	 */
	public get addressInfo(): {
		CEP: string;
		Logradouro: string;
		Complemento: string;
		Bairro: string;
		Cidade: string;
		Estado: string;
		DDD: string;
	} {
		return {
			CEP: this.information.cep,
			Logradouro: this.information.logradouro,
			Complemento: this.information.complemento,
			Bairro: this.information.bairro,
			Cidade: this.information.cidade,
			Estado: this.information.estado,
			DDD: this.information.ddd
		};
	}
}
