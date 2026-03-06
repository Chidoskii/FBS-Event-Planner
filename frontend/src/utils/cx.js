import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display-xs",
        "display-sm",
        "display-md",
        "display-lg",
        "display-xl",
        "display-2xl",
      ],
    },
  },
});

/**
 * Wrapper around twMerge.
 * Use it to merge Tailwind classes inside style objects.
 */
export const cx = twMerge;

/**
 * This function does nothing except help with class sorting
 * inside style objects.
 */
export function sortCx(classes) {
  return classes;
}
