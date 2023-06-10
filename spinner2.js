let time = 0;
const increase = 200;
const chars = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
];

for (const char of chars) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += increase;
}

