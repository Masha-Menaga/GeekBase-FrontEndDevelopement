let num = 23869;
for (let i = 0; num > 0; i++) {
  let rem = num % 10;
  console.log(rem);
  num = Math.floor(num / 10);
}

//in this
// i=>0    23869>1     1
// 23869%10 = 9 (reminder)
// i=>1        2386>0      2   6
// i=>2        238>0       3   8
// i=>3        23>0        4   3
// i=>4        2>0         5   2
// i=>5        0>0      False
