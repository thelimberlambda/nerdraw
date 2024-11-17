import * as fs from 'fs';
import yaml from 'js-yaml';

function usage() {
    console.log("Usage: nerdraw <file>");
    process.exit(0);
}

const shape_map = {
    circle: {
        element: "circle",
        cx: [ "cx", 0 ],
        cy: [ "cy", 0 ],
        r: [ "r", 0 ]
    }
}

if (process.argv.length < 3) {
    usage();
}

const nd_input = process.argv[2]

if (!fs.existsSync(nd_input)) {
    console.error(`${nd_input} not found; aborting...`);
    process.exit(1);
}

const nd_tree = yaml.load(fs.readFileSync(nd_input, { encoding: 'utf8' }))

console.log(JSON.stringify(nd_tree))
