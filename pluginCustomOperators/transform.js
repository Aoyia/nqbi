const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const { visitor } = require("./pluginCustomOperators");
const fs = require("fs");
const path = require("path");

function readFileSyncSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("读取文件失败", error);
    throw error;
  }
}

function main() {
  const codePath = path.resolve(__dirname, "./test.js");
  const code = readFileSyncSafe(codePath);
  // 解析代码为 AST
  const ast = parser.parse(code);
  // 遍历并替换 AST
  traverse(ast, visitor());
  // 生成新代码
  const newCode = generate(ast).code;
  console.log("---------函数体----------");
  console.log(newCode);

  const businessLogicPath = path.resolve(__dirname, "./businessLogic.js");
  const businessLogic = readFileSyncSafe(businessLogicPath);

  const func = new Function(`
    ${businessLogic}
    ${newCode}
  `);
  console.log("---------执行函数----------");
  func();
}

main();
