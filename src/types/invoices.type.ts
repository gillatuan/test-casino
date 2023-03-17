export interface Status {
  key: string
  value: boolean
}

export interface CustomField {
  key: string
  value: string
}

export interface Customer {
  id: string
  addresses: any[]
  firstName: string
  lastName: string
  name: string
}

export interface Merchant {
  id: string
}

export interface Datum {
  invoiceId: string
  invoiceNumber: string
  type: string
  currency: string
  invoiceDate: string
  createdAt: Date
  dueDate: string
  status: Status[]
  subStatus: any[]
  numberOfDocuments: number
  totalTax: number
  totalAmount: number
  balanceAmount: number
  description: string
  totalPaid: number
  invoiceSubTotal: number
  customFields: CustomField[]
  totalDiscount: number
  extensions: any[]
  version: string
  customer: Customer
  merchant: Merchant
  purchaseOrderMatched: boolean
  isRegulated: boolean
  isInsured: boolean
  referenceNo: string
  invoiceGrossTotal?: number
}

export interface Paging {
  totalRecords: number
  pageSize: number
  pageNumber: number
}

export interface Status2 {
  code: string
  message: string
}

export interface RootObject {
  data: Datum[]
  paging: Paging
  status: Status2
}
