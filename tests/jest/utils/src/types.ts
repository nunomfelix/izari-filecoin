export type AddressTestCase = {
  string: string
  bytes: string
  network: string
  protocol: number
  payload: string
}

export type BigNumTestCase = {
  numString: string
  numSerialized: string
}

export type TransactionJSON = {
  To: string
  From: string
  Nonce: number
  Value: string
  GasLimit: number
  GasFeeCap: string
  GasPremium: string
  Method: number
  Params: string
}

export type TxTestCase = {
  tx: TransactionJSON
  cbor: string
  signature: {
    data: string
    type: number
  }
  privateKey: string
  publicKey: string
}
