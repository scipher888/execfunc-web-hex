const { readFileSync, writeFileSync } = require("fs");
const { execSync } = require("child_process");
const hex = ["h1","h2","h3","h4","h5","h6"].map((f) => readFileSync(f + ".txt", "utf8").replace(/\s+/g, "")).join("");
const buf = Buffer.from(hex, "hex");
if (buf.length !== 19166) throw new Error("bad tgz length " + buf.length);
writeFileSync("slice.tgz", buf);
execSync("tar -xzf slice.tgz");
