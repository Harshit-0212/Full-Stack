let a = 10;

b = 30;

console.log(a + b);

var d = 90;

// e = 20;

var e;

console.log(d + e);

// Scope  Chain

let i = 10;
{
  let i = 12;
  {
    let i = 14;
    {
      let i = 16;
      console.log(i);
    }
    console.log(i);
  }
  console.log(i);
}
console.log(i);
