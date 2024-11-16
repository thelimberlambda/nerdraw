import * as fs from 'fs';
import yaml from 'js-yaml';

const diagram = process.argv[2]

function usage() {
    console.log("Usage: nerdraw <file>");
    process.exit(0);
}

if (process.argv.length < 3) {
    usage();
}

if (!fs.existsSync(diagram)) {
    console.error(`${diagram} not found; aborting...`);
    process.exit(1);
}

const parsed = yaml.load(fs.readFileSync(diagram, { encoding: 'utf8' }))

console.log(JSON.stringify(parsed))
