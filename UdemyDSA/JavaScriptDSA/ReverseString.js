// Write a function that accepts a string input and returns a reversed copy.

// Solution 1:

function reverse1(s) {
  let o = "";
  for (let i = s.length - 1; i >= 0; i--) o += s[i];
  return o;
}

// Solution 2:

function reverse2(s) {
  let o = [];
  for (let i = s.length - 1, j = 0; i >= 0; i--, j++) o[j] = s[i];
  return o.join("");
}

// Solution 3:
function reverse3(s) {
  let o = [];
  for (let i = 0, len = s.length; i <= len; i++) o.push(s.charAt(len - i));
  return o.join("");
}

// Solution 4:
function reverse4(s) {
  return s.split("").reverse().join("");
}

// Solution 5:
function reverse5(s) {
  let i = s.length,
    o = "";
  while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }
  return o;
}

// Solution 6:
function reverse6(s) {
  for (let i = s.length - 1, o = ""; i >= 0; o += s[i--]) {}
  return o;
}

// Solution 7:
function reverse7(s) {
  return s === "" ? "" : reverse7(s.substr(1)) + s.charAt(0);
}

// Solution 8:
function reverse8(s) {
  function rev(s, len, o) {
    return len === 0 ? o : rev(s, --len, (o += s[len]));
  }
  return rev(s, s.length, "");
}

// Solution 9:
function reverse9(s) {
  s = s.split("");
  let len = s.length,
    halfIndex = Math.floor(len / 2) - 1,
    tmp;

  for (let i = 0; i <= halfIndex; i++) {
    tmp = s[len - i - 1];
    s[len - i - 1] = s[i];
    s[i] = tmp;
  }
  return s.join("");
}

// Solution 10:
function reverse10(s) {
  if (s.length < 2) return s;
  let halfIndex = Math.ceil(s.length / 2);
  return reverse10(s.substr(halfIndex)) + reverse10(s.substr(0, halfIndex));
}

// Solution 11:
let reverser = function (str) {
  let string = str.split("");
  for (i = 0; i < string.length; i++) {
    string.splice(i, 0, string.pop());
  }
  console.log(string.join(""));
};
reverser("abcdef");
