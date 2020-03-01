import { Request } from './request';

// const currentDatetime = new Date();
// const formatDate = currentDatetime.getDate() + '/' + (currentDatetime.getMonth() + 1) + '/' + currentDatetime.getFullYear();


export const REQUESTS: Request[] = [
  {
    id: 1,
    productName: 'Whole Blood',
    bloodtType: 'A+',
    volume: '450ml',
    numOfBags: 2,
    priority: 'high',
    patientId: 6,
    requestedDate: new Date(25, 3, 2017),
    requiredDate: new Date(26, 3, 2017),
    requestedBy: 'Ali'
  },
  {
    id: 2,
    productName: 'Apheresis',
    bloodtType: 'B+',
    volume: '450ml',
    numOfBags: 2,
    priority: 'low',
    patientId: 4,
    requestedDate: new Date(25, 3, 2017),
    requiredDate: new Date(28, 3, 2017),
    requestedBy: 'Ali'
  },
  {
    id: 3,
    productName: 'Apheresis',
    bloodtType: 'O',
    volume: '450ml',
    numOfBags: 3,
    priority: 'critical',
    patientId: 8,
    requestedDate: new Date(26, 3, 2017),
    requiredDate: new Date(26, 3, 2017),
    requestedBy: 'Esraa'
  },
  {
      id: 4,
      productName: 'Whole Blood',
      bloodtType: 'B',
      volume: '450ml',
      numOfBags: 1,
      priority: 'middle',
      patientId: 7,
      requestedDate: new Date(26, 3, 2017),
      requiredDate: new Date(27, 3, 2017),
      requestedBy: 'Ghada'
  }
];
