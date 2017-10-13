import { add } from "./math";
import { power2, exponential } from "./funcs";
export function increment(val) {
  return add(val, 1);
}

export function powers(a, b) {
  return exponential(power2(a), b);
}
