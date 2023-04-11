function concat(a, b) {
  return a + b;
}

function capitalizeWord(a) {
  if (a.length < 2) return a.charAt(0).toUpperCase();
  return a.charAt(0).toUpperCase() + a.slice(1);
}

function secondWord(a) {
  let split = a.split(" ");
  if (split.length < 2) return "";
  return split[1];
}

export { concat, capitalizeWord, secondWord };
