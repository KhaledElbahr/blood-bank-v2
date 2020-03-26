export interface Request {
    id: number;
    // productName: string;
    productName: {id: number, value: string};
    // bloodtType: string;
    bloodtType: {id: number, value: string};
    volume: string;
    numOfBags: number;
    // priority: string;
    priority: {id: number, value: string};
    patientId: number;
    // patientName: string;
    requestedDate: Date;
    requiredDate: Date;
    requestedBy: string;
}
