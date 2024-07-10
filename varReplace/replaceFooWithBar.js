module.exports = function ({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === "foo") {
          path.node.name = "bar";
        }
      },
    },
  };
};