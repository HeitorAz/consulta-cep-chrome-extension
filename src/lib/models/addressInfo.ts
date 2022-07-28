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

	public toObject() {
		return {
			CEP: this.cep,
			Logradouro: this.logradouro,
			Complemento: this.complemento,
			Bairro: this.bairro,
			Cidade: this.cidade,
			Estado: this.estado,
			DDD: this.ddd
		};
	}

	public toString = (): string => {
		return `${this.logradouro}${
			this.logradouro && (this.complemento || this.bairro) ? ',' : this.logradouro ? '.' : ''
		} ${this.complemento ? this.complemento + ' - ' : ''} ${
			this.bairro ? this.bairro + '.' : ''
		} CEP: ${this.cep}. ${this.cidade}/${this.estado}`;
	};
}
