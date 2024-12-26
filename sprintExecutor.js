// change all variable names
const getUserCode = () => {
  const code = prompt("Please paste your code here: 👉").trim();
  return code.length === 0 ? getUserCode() : code;
};

const convertIntoArray = (code) => code.split(" ");

const removeEmpty = (array) => array.filter((element) => element !== "");

const stringToNumber = (array) => array.map((element) => Number(element));

const oraganizeToObject = (obj, number, index) => ({
  ...obj,
  [index + 1]: number,
});
const listToObject = (numbers) => numbers.reduce(oraganizeToObject, {});

const sprintExecuter = (sprintCode) => {
  let cellNumber = 1;

  while (sprintCode[cellNumber] !== 9) {}
  return sprintCode;
};

const main = () => {
  const userInput = getUserCode();
  const codeIntoArray = convertIntoArray(userInput);
  const cleanedArray = removeEmpty(codeIntoArray);
  const numberArray = stringToNumber(cleanedArray);
  const organizedData = listToObject(numberArray);

  return sprintExecuter(organizedData);
};

main();
