
export class UserAccount {
	id: number;
	email: string;
	name: string;

	constructor(data: UserAccount) {
		this.id = data.id;
		this.email = data.email;
		this.name = data.name;
	}
}
