export class User {
    companyName: string;
    companyAddress: string;
    companyNumber: string;
    phoneNumber: string;

    constructor(companyName, companyAddress, companyNumber, phoneNumber: string) {
        this.companyName = companyName;
        this.companyAddress = companyAddress;
        this.companyNumber = companyNumber;
        this.phoneNumber = phoneNumber;
    }
}
