export function formatNumber(num: number) {
  return new Intl.NumberFormat('id-ID').format(num)
}
