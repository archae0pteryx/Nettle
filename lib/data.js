

export const transformInfoToJSON = (str) => str
  .split("\n")
  .filter(line => line.includes(":"))
  .map(line => line.split(": "))
  .reduce((acc, [key, value]) => {
    const newKey = key.toLowerCase().replace(/ /g, "_").replace(/-/g, "")
    acc[newKey] = value;
    return acc;
  }, {});
