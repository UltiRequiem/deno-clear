# Clear

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/fibonacci-deno?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/fibonacci-deno/workflows/CodeQL/badge.svg)

> Port of [node-clear](https://github.com/bahamas10/node-clear) with some extras

Clear the terminal if possible.

You can get this package by [nest.land](https://nest.land/package/clear) or [deno.land](https://deno.land/x/clear).

## Usage

This package exposes two Functions,
[clear](https://github.com/UltiRequiem/deno-clear/blob/main/mod.ts#L1) (as default)
and
[delayedClear](https://github.com/UltiRequiem/deno-clear/blob/main/mod.ts#L7).

```typescript
import clear, { delayedClear } from "https://deno.land/x/clear/mod.ts";

console.log("Some Text...");

clear();

const delay = 5;

console.log("I will be erased in %d seconds.", delay);

delayedClear(delay);
```

Check the [cli tool](#cli-tool) for more examples.

### CLI Tool

This project contains a cli tool, it is made to give an example of use mainly.

#### Install it

```bash
deno install -n declear https://deno.land/x/clear/cli.ts
```

For more info check [this](https://deno.land/manual/tools/script_installer).

#### Usage

- If you just run the command, it will clear your console:

```bash
$ declear
```

- Full Clear:

```bash
$ declear --full
```

- Delayed Clear:

```bash
$ declear --delay 3
```

- You can combine the two flags:

```bash
declear --delay 4 --full
```

-- If you need help:

```bash
declear --help
Options:
  --full    Full Clean
  --delay   Delay the Console Cli
  --help    Print this
For more help check https://github.com/UltiRequiem/deno-clear
```

### License

[This package](https://deno.land/x/fibonacci) is licensed under the
[MIT License](./LICENSE.md).
