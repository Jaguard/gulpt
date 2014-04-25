#!/usr/bin/env node

var which = require("which"),
		spawn = require("child_process").spawn,
		args = process.argv;

// keep just params
args.splice(0, 2);
// add time-require module
args.push("--require");
args.push(require.resolve("time-require"));

// call gulp using 'which' to avoid this issue on Windows: https://github.com/joyent/node/issues/3968
which("gulp", function(err, gulpPath){
	if (err) {
		throw new Error(err);
	}
	spawn(gulpPath, args, { stdio: "inherit" });
});
