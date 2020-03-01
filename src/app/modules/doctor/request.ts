export interface Request {
    id: number;
    productName: string;
    bloodtType: string;
    volume: string;
    numOfBags: number;
    priority: string;
    patientId: number;
    requestedDate: Date;
    requiredDate: Date;
    requestedBy: string;
}
