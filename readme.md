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

## 查看 AST 语法树

在相应的目录下，可以找到 `ast.json` 文件，用以查看转换后的 AST 语法树。此外，AST 语法树也可以通过以下在线工具查看：[在线查看 AST 语法树](https://astexplorer.net/)
