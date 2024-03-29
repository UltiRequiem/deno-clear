import { parse } from "https://deno.land/std/flags/mod.ts";
import { clear, delayedClear } from "./mod.ts";

function main() {
  const { full, delay, help } = parse(Deno.args);

  if (!full && !delay && !help) {
    clear();
    return;
  }

  const parsedDelay = delay * 1000;

  if (full && delay) {
    delayedClear(parsedDelay, full);
    return;
  }

  if (full) {
    clear(full);
    return;
  }

  if (delay) {
    delayedClear(parsedDelay, full);
    return;
  }

  if (help) {
    const helpMessage = `Options:
  --full    Full Clean
  --delay   Delay the Console Cli
  --help    Print this
For more help check https://github.com/UltiRequiem/deno-clear`;

    console.log(helpMessage);
  }
}

main();
