import esmock from "esmock";

const logs = [];

await esmock("./index.ts", import.meta.url, {}, {
	import: {
		console: { log: (...args) => logs.push(...args) },
	},
});

console.log("logs:", ...logs);
