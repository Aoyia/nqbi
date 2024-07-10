module.exports = function ({ types: t }) {
  return {
    visitor: {
      ArrowFunctionExpression(path) {
        const { params, body, async } = path.node;

        // 如果主体不是 BlockStatement，则将其转换为 BlockStatement
        const functionBody = t.isBlockStatement(body)
          ? body
          : t.blockStatement([t.returnStatement(body)]);

        const functionExpression = t.functionExpression(
          null, // 函数名称，箭头函数是匿名的
          params, // 函数参数
          functionBody, // 函数体
          false, // generator
          async // 是否为异步函数
        );

        // 替换箭头函数为普通函数
        path.replaceWith(functionExpression);
      },
    },
  };
};
