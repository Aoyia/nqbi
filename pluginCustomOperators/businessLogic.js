const _p = {
  add: (left, right) => {
    if (isNumber(left) && isNumber(right)) {
      return left + right;
    }
    if (Array.isArray(left) && Array.isArray(right)) {
      const len = Math.max(left.length, right.length);
      const result = [];
      for (let i = 0; i < len; i++) {
        const leftValue = left[i] !== undefined ? left[i] : 0;
        const rightValue = right[i] !== undefined ? right[i] : 0;
        result.push(leftValue + rightValue);
      }
      return result;
    }
    throw new Error("无效输入：两个参数必须都是数字或数字数组");
  },
  sub: (left, right) => left - right,
  mul: (left, right) => {
    if (isNumber(left) && isNumber(right)) {
      return left * right;
    }
    if (Array.isArray(left) && isNumber(right)) {
      return left.map((item) => item * right);
    }
    if (Array.isArray(right) && isNumber(left)) {
      return right.map((item) => item * left);
    }
    if (Array.isArray(left) && Array.isArray(right)) {
      const len = Math.max(left.length, right.length);
      const result = [];

      for (let i = 0; i < len; i++) {
        const leftValue = left[i] !== undefined ? left[i] : 1;
        const rightValue = right[i] !== undefined ? right[i] : 1;
        result.push(leftValue * rightValue);
      }

      return result;
    }
    throw new Error("无效输入：参数必须是数字或数字数组");
  },
  div: (left, right) => left / right,
};

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}
