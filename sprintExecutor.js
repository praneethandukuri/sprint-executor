const getUserCode = () => {
  const code = prompt("Please paste your code here: 👉").trim();
  return code.length === 0 ? getUserCode() : code;
};

const convertIntoArray = (code) => code.split(" ");

const removeEmpty = (array) => array.filter((element) => element !== "");

const stringToNumber = (array) => array.map((element) => Number(element));

const addition = (operand1, operand2) => operand1 + operand2;
const subtract = (operand1, operand2) => operand1 - operand2;
const multiplation = (operand1, operand2) => operand1 * operand2;
const isLessThan = (a, b) => a < b;
const isEqual = (a, b) => a === b;

const operateArthmetic = (
  lhsCell,
  rhsCell,
  resultCell,
  code,
  cellLocation,
  mapper
) => {
  code[resultCell] = mapper(code[lhsCell], code[rhsCell]);

  return addition(cellLocation, 4);
};

const put = (value, targetCell, code, cellNumber) => {
  code[targetCell] = value;

  return addition(cellNumber, 3);
};

const add = (lhsCell, rhsCell, resultCell, code, cellLocation) =>
  operateArthmetic(lhsCell, rhsCell, resultCell, code, cellLocation, addition);

const sub = (lhsCell, rhsCell, resultCell, code, cellLocation) =>
  operateArthmetic(lhsCell, rhsCell, resultCell, code, cellLocation, subtract);

const jump = (tatgetCell) => tatgetCell;

const jumpIf = (lhsCell, rhsCell, resultCell, code, cellLocation, predicate) =>
  predicate(code[lhsCell], code[rhsCell]) ? resultCell : cellLocation + 4;

const jumpIfEqual = (lhsCell, rhsCell, resultCell, code, cellLocation) =>
  jumpIf(lhsCell, rhsCell, resultCell, code, cellLocation, isEqual);

const jumpIfLessThan = (lhsCell, rhsCell, resultCell, code, cellLocation) =>
  jumpIf(lhsCell, rhsCell, resultCell, code, cellLocation, isLessThan);

const copy = (lhsCell, rhsCell, code, cellLocation) =>
  put(code[lhsCell], rhsCell, code, cellLocation);

const multiply = (lhsCell, rhsCell, resultCell, code, cellLocation) => {
  operateArthmetic(
    lhsCell,
    rhsCell,
    resultCell,
    code,
    cellLocation,
    multiplation
  );
};

const getInstruction = (instructions, currentInstruction) =>
  instructions.find(({ instruction }) => instruction === currentInstruction);

const HALT = 9;

const executeCode = (instructions, sprintCode, cellLocation) => {
  const currentInstruction = sprintCode[cellLocation];

  if (currentInstruction === HALT) {
    return sprintCode;
  }

  const { noOfArgs, fn: instructionToExecute } = getInstruction(
    instructions,
    currentInstruction
  );

  const args = sprintCode.slice(cellLocation + 1, cellLocation + noOfArgs + 1);

  return executeCode(
    instructions,
    sprintCode,
    instructionToExecute(...args, sprintCode, cellLocation)
  );
};

const sprintExecuter = (sprintCode) => {
  const instructions = [
    { instruction: 0, fn: put, noOfArgs: 2 },
    { instruction: 1, fn: add, noOfArgs: 3 },
    { instruction: 2, fn: sub, noOfArgs: 3 },
    { instruction: 3, fn: jump, noOfArgs: 1 },
    { instruction: 4, fn: jumpIfEqual, noOfArgs: 3 },
    { instruction: 5, fn: jumpIfLessThan, noOfArgs: 3 },
    // { instruction: 6, fn: read, noOfArgs: 1 },
    { instruction: 7, fn: copy, noOfArgs: 2 },
    { instruction: 8, fn: multiply, noOfArgs: 3 },
  ];

  return executeCode(instructions, sprintCode, 1);
};

const main = () => {
  const userInput = getUserCode();
  const codeInString = removeEmpty(convertIntoArray(userInput));
  const code = stringToNumber(codeInString);
  // console.log(code);
  const executedCode = removeEmpty(sprintExecuter([, ...code]));
  executedCode.unshift("After executing");

  return [executedCode];
};

console.table(main());
