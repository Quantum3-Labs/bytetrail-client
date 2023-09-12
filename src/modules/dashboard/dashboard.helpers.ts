export function isValidEthereumTxHash(txHash: string): boolean {
  const ethereumTxHashRegex = /^0x[a-fA-F0-9]{64}$/;
  return ethereumTxHashRegex.test(txHash);
}
