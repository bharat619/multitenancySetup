function generateName() {
  const fname = ["Alex", "John", "Dan", "Alan", "Buttler"];
  const lname = ["Lad", "Sitter", "Krewd", "Dumpkinson", "Aniston"];
  return [
    fname[Math.round(Math.random() * 10) % 5],
    lname[Math.round(Math.random() * 10) % 5]
  ];
  //   return [fname[Math.random() % 5], lname[Math.random() % 5]];
}

module.exports = generateName;
