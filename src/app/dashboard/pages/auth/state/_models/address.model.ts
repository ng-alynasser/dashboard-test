export class Address {
  id: string;
  address: string;
  suburb: string;
  postalCode: string;
  city: string;
  country: string;

  clear(): void {
    this.id = undefined;
    this.address = '';
    this.suburb = '';
    this.postalCode = '';
    this.city = '';
    this.country = ''
  }
}