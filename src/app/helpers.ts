export function reverseFind<T>(arr: T[], compare: (T) => boolean) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (compare(arr[i])) {
      return arr[i];
    }
  }
}
