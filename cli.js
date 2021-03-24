#!/usr/bin/env node
import meow from 'meow';
import { grecursive } from './src/index.js';

const cli = meow(`
	Usage
	  $ unicorn-fun [input]

	Options
	  --postfix  Lorem ipsum  [Default: rainbows]

	Examples
	  $ cli-name
	  unicorns & rainbows
	  $ cli-name ponies
	  ponies & rainbows
`, {
	flags: {
		verbose: {
			type: 'boolean',
			default: false,
		},
	},
});

console.log(grecursive(cli.input[0], cli.flags));
