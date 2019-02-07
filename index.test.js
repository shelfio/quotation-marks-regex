const regex = require('./index');

it('should return true if quotation marks are present', () => {
  expect(regex.test(`"Hello there"`)).toBe(true);
});

it('should strip all quotation marks from string', () => {
  const input = `"hello" 'hello' ,hello‘ «hello» ”hello” “hello“ ’hello’ ‚hello‛ „hello„ ‹hello› 〈hello〉 《hello》 「hello」 『hello』 ﹁hello﹂ ﹃hello﹄`;

  expect(input.replace(new RegExp(regex, 'g'), '')).toBe(
    `hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello`
  );
});
