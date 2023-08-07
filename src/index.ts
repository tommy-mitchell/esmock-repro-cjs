#!/usr/bin/env ts-node-esm
import meow from "meow";

const cli = meow("foo", { importMeta: import.meta });

console.log(cli.help);
