# Babel 插件处理 AST, 转换箭头函数和变量

## 简介

本项目包含两个主要的代码转换工具：`arrowFunctionReplace` 和 `varReplace`。其中 `arrowFunctionReplace` 负责将 JavaScript 文件中的箭头函数转换为传统的函数表达式，而 `varReplace` 负责将变量 `foo` 替换为 `bar`。

## 安装

确保系统已安装 Node.js 和 pnpm。安装项目依赖，请运行以下命令：

```sh
pnpm install
```

## 使用方法

### 转换箭头函数

要转换箭头函数，请在命令行中运行：

```bash
node arrowFunctionReplace/transform.js
```

### 替换变量

要替换变量 `foo` 为 `bar`，请运行：

```bash
node varReplace/transform.js
```

### 自定义加减乘除运算

```bash
node pluginCustomOperators/transform.js
```

实现了一个自定义的 JavaScript 代码转换和执行系统，主要功能是通过 Babel 插件将自定义的运算符逻辑应用到 JavaScript 代码中，并动态加载和执行转换后的代码。以下是各个文件的作用和内容：

1. **test.js**:
   - 包含一些示例代码，展示了加法、乘法和复合运算的使用
   - 代码中有对数组和数字的运算

2. **businessLogic.js**:
   - 定义了一些自定义运算符函数，如加法、减法、乘法、除法，这些函数可以处理数字和数组的运算
   - 提供了一个 `_p` 对象，包含这些自定义运算符函数

3. **plugin-custom-operators.js**:
   - 定义了一个 Babel 插件，用于将 JavaScript 代码中的二元运算符（加、减、乘、除）替换为自定义的运算符函数调用
   - 通过 AST（抽象语法树）转换，将 `+`、`-`、`*`、`/` 运算符替换为 `_p.add`、`_p.sub`、`_p.mul`、`_p.div` 函数调用

4. **customOperators.js**:
   - 定义了一些自定义运算符函数，如加法、减法、乘法、除法，这些函数可以处理数字和数组的运算
   - 这些函数与 `businessLogic.js` 中的函数类似，但在不同的文件中定义

5. **transform.js**:
   - 读取 `test.js` 和 `businessLogic.js` 文件的内容
   - 使用 Babel 和自定义插件 `plugin-custom-operators` 转换 `test.js` 中的代码
   - 动态创建一个函数，将 `businessLogic.js` 和转换后的代码合并在一起，并执行该函数

## 查看 AST 语法树

在相应的目录下，可以找到 `ast.json` 文件，用以查看转换后的 AST 语法树。此外，AST 语法树也可以通过以下在线工具查看：[在线查看 AST 语法树](https://astexplorer.net/)
