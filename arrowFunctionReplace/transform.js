const babel = require("@babel/core");
const transformArrowFunctions = require("./transformArrowFunctions");
const fs = require("fs");
const path = require("path");

const code = fs.readFileSync(path.resolve(__dirname, "./test.js"), "utf-8");

const output = babel.transformSync(code, {
  plugins: [transformArrowFunctions],
});

console.log(output.code);

console.log("------------函数执行如下-----------");

const func1 = new Function("parm1", "parm2", output.code);
func1(1, 2);
