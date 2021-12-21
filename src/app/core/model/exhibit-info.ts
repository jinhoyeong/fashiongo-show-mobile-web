export class ExhibitInfo {
	email: string;
	name: string;
	companyName: string;
	contactNumber: string;

	constructor(data: ExhibitInfo) {
		this.email = data.email;
		this.name = data.name;
		this.companyName = data.companyName;
		this.contactNumber = data.contactNumber;
	}
}
