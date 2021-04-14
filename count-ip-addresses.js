/*
5 kyu
Count IP Addresses

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
ipsBetween("10.0.0.0", "10.0.0.50")  ===   50
ipsBetween("10.0.0.0", "10.0.1.0")   ===  256
ipsBetween("20.0.0.10", "20.0.1.0")  ===  246
*/

const ipsBetween = (start, end) => {
  const calc = (n, m = 1) => (end.split`.`[n] - start.split`.`[n]) * m;

  return calc(0, 256 * 256 * 256) + calc(1, 256 * 256) + calc(2, 256) + calc(3);
};
