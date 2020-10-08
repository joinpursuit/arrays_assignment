const {
  addFruitToEnd,
  addFruitToFront,
  removeLast,
  removeLastandReturnLast,
  arrayLength,
  removeFirst,
  removeFirstandReturnFirst,
  arrayToString,
  largerArray,
  middleElement,
  lastElementIndexing,
  firstElementIndexing,
} = require("../problems/arraysIntro");

describe("addFruitToEnd", () => {
  test("should add the fruit to the end of the array", () => {
    expect(addFruitToEnd(["banana", "pear"], "blueberry")).toEqual([
      ["banana", "pear", "blueberry"],
    ]);
    expect(addFruitToEnd(["kiwi"], "orange")).toEqual(["kiwi", "orange"]);
  });

  test("should use method push", () => {
    const funcString = addFruitToEnd.toString();
    expect(funcString.includes("push")).toBe(true);
  });
});

describe("addFruitToFront", () => {
  test("should add the fruit to the front of the array", () => {
    expect(addFruitToFront(["banana", "pear"], "blueberry")).toEqual([
      ["blueberry", "banana", "pear"],
    ]);
    expect(addFruitToFront(["kiwi"], "orange")).toEqual(["orange", "kiwi"]);
  });

  test("should use method unshift", () => {
    const funcString = addFruitToFront.toString();
    expect(funcString.includes("unshift")).toBe(true);
  });
});

describe("removeLast", () => {
  test("should return an array with the last element removed", () => {
    expect(removeLast(["blueberry", "banana", "pear"])).toEqual([
      "blueberry",
      "banana",
    ]);
    expect(removeLast(["orange", "kiwi"])).toEqual(["orange"]);
  });

  test("should use method pop", () => {
    const funcString = removeLast.toString();
    expect(funcString.includes("pop")).toBe(true);
  });
});

describe("removeLastandReturnLast", () => {
  test("should return an array with the last element removed", () => {
    expect(removeLastandReturnLast(["blueberry", "banana", "pear"])).toBe(
      "pear"
    );
    expect(removeLastandReturnLast(["orange", "kiwi"])).toBe("kiwi");
  });

  test("should use method pop", () => {
    const funcString = removeLastandReturnLast.toString();
    expect(funcString.includes("pop")).toBe(true);
  });
});

describe("arrayLength", () => {
  test("should return the length of the array", () => {
    expect(arrayLength(["blueberry", "banana", "pear"])).toBe(3);
    expect(arrayLength(["orange", "kiwi"])).toBe(2);
    expect(arrayLength([])).toBe(0);
  });
});
