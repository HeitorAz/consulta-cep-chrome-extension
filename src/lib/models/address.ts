import AddressInfo from '$models/addressInfo';

export default class Address {
	constructor(
		public information: AddressInfo = new AddressInfo(),
		public lastUsed: Date = new Date(),
		public isFavorite: boolean = false
	) {}

	public static fromAPIJson(json: any): Address {
		return new Address(AddressInfo.fromAPIJson(json), new Date(), false);
	}

	public static fromLocalStorageJson(json: any): Address {
		return new Address(
			AddressInfo.fromLocalStorageJson(json.information),
			new Date(json.lastUsed),
			json.isFavorite
		);
	}

	public isValid = (): boolean => {
		return this.information.cep !== 'Desconhecido';
	};

	public toggleFavorite(): void {
		this.isFavorite = !this.isFavorite;
	}

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
}
