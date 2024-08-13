const t = require("@babel/types");

function visitor() {
  return {
    BinaryExpression(path) {
      const { node } = path;
      const operatorMap = {
        "+": "add",
        "-": "sub",
        "*": "mul",
        "/": "div",
      };

      const functionName = operatorMap[node.operator];
      if (functionName) {
        const customFunctionCall = t.callExpression(
          t.memberExpression(t.identifier("_p"), t.identifier(functionName)),
          [node.left, node.right]
        );
        path.replaceWith(customFunctionCall);
      }
    },
  };
}

module.exports = {
  visitor,
};
