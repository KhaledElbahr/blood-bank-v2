import { Request } from './request';

// const currentDatetime = new Date();
// const formatDate = currentDatetime.getDate() + '/' + (currentDatetime.getMonth() + 1) + '/' + currentDatetime.getFullYear();


export const REQUESTS: Request[] = [
  {
    id: 1,
    productName: {id: 1, value: 'Whole Blood'},
    bloodtType: {id: 1, value: 'A+'},
    volume: '450ml',
    numOfBags: 2,
    priority: {id: 1, value: 'high'},
    patientId: 6,
    requestedDate: new Date(25, 3, 2017),
    requiredDate: new Date(26, 3, 2017),
    requestedBy: 'Ali'
  },
  {
    id: 2,
    productName: {id: 2, value: 'Apheresis'},
    bloodtType: {id: 2, value: 'B+'},
    volume: '450ml',
    numOfBags: 2,
    priority: {id: 2, value: 'low'},
    patientId: 4,
    requestedDate: new Date(25, 3, 2017),
    requiredDate: new Date(28, 3, 2017),
    requestedBy: 'Ali'
  },
  {
    id: 3,
    productName: {id: 2, value: 'Apheresis'},
    bloodtType: {id: 3, value: 'O'},
    volume: '450ml',
    numOfBags: 3,
    priority: {id: 3, value: 'low'},
    patientId: 8,
    requestedDate: new Date(26, 3, 2017),
    requiredDate: new Date(26, 3, 2017),
    requestedBy: 'Esraa'
  },
  {
      id: 4,
      productName: {id: 1, value: 'Whole Blood'},
      bloodtType: {id: 4, value: 'B'},
      volume: '450ml',
      numOfBags: 1,
      priority: {id: 3, value: 'middle'},
      patientId: 7,
      requestedDate: new Date(26, 3, 2017),
      requiredDate: new Date(27, 3, 2017),
      requestedBy: 'Ghada'
  }
];
