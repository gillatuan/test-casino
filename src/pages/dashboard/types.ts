export interface IFormInvoice {
  open?: boolean
  setToggleDrawer: (open: boolean) => void
}

export type DataInvoice = {
  description: string
  itemReference: string | ''
  quantity: number | ''
}
