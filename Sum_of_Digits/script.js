let num = 23896;
sum = 0;
for (i = 0; num > 0; i++) {
  let rem = num % 10;
  sum += rem;

  num = Math.floor(num / 10);
}
console.log(sum);

// i=>0    23896>0      1
// rem=6
// sum=0+6=6
// i=>1    2389>0       2
// rem=9
// sum=6+9=15
// i=>2     238>0       3
// rem=8
// sum=15+8=23
// i=>3     23>0        4
// rem=3
// sum=23+3=26
// i=>4     2>0         5
// rem=2
// sum=26+2=28
