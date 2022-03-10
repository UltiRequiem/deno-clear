export function clear(fullClear = false) {
  Deno.stdout.write(
    new TextEncoder().encode(fullClear ? "\x1b[2J" : "\x1b[0f"),
  );
}

export function delayedClear(delay: number, fullClear = false) {
  setTimeout(() => clear(fullClear), delay);
}
