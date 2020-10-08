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
  test("should return the last element of the array", () => {
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

describe("removeFirst", () => {
  test("should return an array with the first element removed", () => {
    expect(removeFirst(["blueberry", "banana", "pear"])).toEqual([
      "banana",
      "pear",
    ]);
    expect(removeFirst(["orange", "kiwi"])).toEqual(["kiwi"]);
  });

  test("should use method shift", () => {
    const funcString = removeFirst.toString();
    expect(funcString.includes("shift")).toBe(true);
    expect(funcString.includes("unshift")).toBe(false);
  });
});

describe("removeFirstandReturnFirst", () => {
  test("should return the first element", () => {
    expect(removeFirstandReturnFirst(["blueberry", "banana", "pear"])).toBe(
      "blueberry"
    );
    expect(removeFirstandReturnFirst(["orange", "kiwi"])).toBe("orange");
  });

  test("should use method shift", () => {
    const funcString = removeFirstandReturnFirst.toString();
    expect(funcString.includes("shift")).toBe(true);
    expect(funcString.includes("unshift")).toBe(false);
  });
});

describe("largerArray", () => {
  test("returns the lager of two arrays", () => {
    expect(largerArray([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(largerArray([5, 3, 2, 1, 4], [1, 2, 3])).toEqual([5, 3, 2, 1, 4]);
  });

  tests(
    "returns 'They are the same size' when arrays are the same size",
    () => {
      expect(largerArray([], [])).toBe("They are the same size");
      expect(largerArray([1, 2, 3], [1, 2, 3])).toBe("They are the same size");
    }
  );
});

describe("middleElement", () => {
  tests("returns middle element with odd length arrays", () => {
    expect(middleElement([1, 2, 3, 4, 5])).toBe(3);
    expect(middleElement(["bird", "cat", "whale"])).toBe("cat");
  });
  tests("returns middle two elements with even length arrays", () => {
    expect(middleElement([1, 2, 3, 4, 5, 6])).toEqual([3, 4]);
    expect(middleElement(["bird", "cat", "whale", "snake"])).toEqual([
      "cat",
      "whale",
    ]);
  });
});

describe("lastElementIndexing", () => {
      test("returns the last element of the array", () => {
        expect(lastElementIndexing(["blueberry", "banana", "pear"])).toBe(
          "pear"
        );
        expect(lastElementIndexing(["orange", "kiwi"])).toBe("kiwi");
      });

      test("should NOT use method pop", () => {
        const funcString = lastElementIndexing.toString();
        expect(funcString.includes("pop")).toBe(false);
      });
})

describe("firstElementIndexing", () => {
      test("returns the first element of the array", () => {
        expect(firstElementIndexing(["blueberry", "banana", "pear"])).toBe(
          "blueberry"
        );
        expect(firstElementIndexing(["orange", "kiwi"])).toBe("orange");
      });

      test("should NOT use method shift", () => {
        const funcString = firstElementIndexing.toString();
        expect(funcString.includes("shift")).toBe(false);
      });
})