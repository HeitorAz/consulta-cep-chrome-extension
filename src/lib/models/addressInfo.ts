export default class AddressInfo {
	constructor(
		public cep: string = 'Desconhecido',
		public logradouro: string = 'Desconhecido',
		public complemento: string = 'Desconhecido',
		public bairro: string = 'Desconhecido',
		public cidade: string = 'Desconhecido',
		public estado: string = 'Desconhecido',
		public ddd: string = 'Desconhecido'
	) {}

	/**
	 * Creates an AddressInfo object from a JSON object received from the ViaCEP API.
	 *
	 * @param {any} json - The JSON data to be converted to an AddressInfo object.
	 * @returns {AddressInfo} The AddressInfo object generated from the JSON data.
	 */
	public static fromAPIJson(json: any): AddressInfo {
		return new AddressInfo(
			json.cep,
			json.logradouro,
			json.complemento,
			json.bairro,
			json.localidade,
			json.uf,
			json.ddd
		);
	}

	/**
	 * Creates an AddressInfo object from a JSON object received from the local storage.
	 *
	 * @param {any} json - The JSON data to be converted to an AddressInfo object.
	 * @returns {AddressInfo} The AddressInfo object generated from the JSON data.
	 */
	public static fromLocalStorageJson(json: any): AddressInfo {
		return new AddressInfo(
			json.cep,
			json.logradouro,
			json.complemento,
			json.bairro,
			json.cidade,
			json.estado,
			json.ddd
		);
	}

	/**
	 * Returns a string representation of the address information.
	 *
	 * @returns {string} The CEP of the address.
	 */
	public toString(): string {
		return `${this.logradouro}${
			this.logradouro && (this.complemento || this.bairro) ? ',' : this.logradouro ? '.' : ''
		} ${this.complemento ? this.complemento + ' - ' : ''} ${
			this.bairro ? this.bairro + '.' : ''
		} CEP: ${this.cep}. ${this.cidade}/${this.estado}`;
	}
}
