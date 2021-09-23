export function reverseFind<T>(arr: T[], compare: (T) => boolean) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (compare(arr[i])) {
      return arr[i];
    }
  }
}

export function pageBottomHeight() {
  return Math.ceil(window.innerHeight + window.scrollY);
}

export function getTopY(element: Element): number {
  return Math.round(
    Math.abs(document.documentElement.getBoundingClientRect().top - element.getBoundingClientRect().top)
  );
}
