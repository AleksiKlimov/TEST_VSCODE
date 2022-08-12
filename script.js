let d = function foo(count) {
  if (count > 0) {
    count--;
    return foo(count);
  }
  console.log("end r func");
};
d(5);

function showDate() {
  let a = new Date();
  console.log(a);
}
showDate();
