export class BrandInfo {
	id: number;
	src: string;
	name: string;
	txt: string;

	constructor(data: BrandInfo) {
		this.id = data.id;
		this.src = data.src;
		this.name = data.name;
		this.txt = data.txt;
	}
}