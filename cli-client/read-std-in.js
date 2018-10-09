#!/usr/bin/env node
const stdin = process.stdin;

module.exports = function () {
  let ret = '';

  return new Promise(resolve => {
    if (stdin.isTTY) {
      resolve(ret);
      return;
    }

    stdin.setEncoding('utf8');

    stdin.on('readable', () => {
      let chunk;

      while ((chunk = stdin.read())) {
        ret += chunk;
      }
    });

    stdin.on('end', () => {
      resolve(ret);
    });
  });
};