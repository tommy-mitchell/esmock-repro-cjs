import esmock from "esmock";

const logs = [];

await esmock("./index.js", import.meta.url, {}, {
	import: {
		console: { log: (...args) => logs.push(...args) },
	},
});

console.log("logs:", ...logs);
