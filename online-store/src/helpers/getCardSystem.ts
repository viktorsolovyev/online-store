export default function cardHelper(num: string): string {
  switch(num) {
    case '4': return 'visa';
    case '5': return 'mastercard';
    case '6': return 'maestro';
    default: return 'none';
  }
}