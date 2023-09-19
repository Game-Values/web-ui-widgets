export function formatNumbers(int: number): string {
  // Because US uses comma to separate big numbers
  return int.toLocaleString("en-US").replaceAll(",", " ")
}
