const babel = require("@babel/core");
const replaceFooWithBar = require("./replaceFooWithBar");
const fs = require("fs");
const path = require("path");

const code = fs.readFileSync(path.resolve(__dirname, "./test.js"), "utf-8");

const output = babel.transformSync(code, {
  plugins: [replaceFooWithBar],
});

console.log(output.code);
