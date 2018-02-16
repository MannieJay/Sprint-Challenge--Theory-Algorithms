const string = "RegExr v3 was created by gskinner.com, and is proudly hosted by Media Temple. Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & Javascript flavors of RegEx are supported. The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns. Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English. antelope antelopes moat goat boat 2000-10-12 1999-1-20 1999-01-20 812-2-10"

const a = (/(antelope+)(s\b)?/g);
const b = (/(m|g)oat/g);
const c = (/(\d{4}-\d{2}-\d{1,2}).*/g);

const d = (/(\d{1,2};\d{1,2}f)*/g) && (/\d{1,}/g);
const e = (/\[1m/g);

const vt = "ESC[12;45f";
const vtBold = "ESC[1m";

cursor = () => {
  if (vt.match(d)) {
    let arr = vt.match(d);
    let line = arr[0], column = arr[1];
    return `Line: ${line} Column: ${column} `;
  }
}

bold = () => {
  if (vtBold.match(e)) return 1;
}


console.log(cursor());