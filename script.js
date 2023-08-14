let arrname = ["saravanan", "arun", "prince"];
for (let index = 0; index < arrname.length; index++) {
  console.log(arrname[index]);
}

let i = 0;

while (i < arrname.length) {
  console.log(arrname[i]);
  i++;
}

do {
  console.log(arrname[i]);
  i++;
} while (i < arrname.length);

for (const i in arrname) {
  console.log(arrname[i]);
}

for (const newValue of arrname) {
  console.log(newValue);
}
