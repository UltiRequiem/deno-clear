export default function clear(fullClear?: boolean) {
  console.log(fullClear ? "\x1b[2J" : "\x1b[0f");
}
