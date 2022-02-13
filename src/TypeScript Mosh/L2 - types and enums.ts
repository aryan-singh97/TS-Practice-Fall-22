function log(message: any) {
  console.log(message);
}

var message = "Hello World";
log(message);

export default log;

let myvar;
myvar = "abc";
let endsWithC = myvar.endsWith("c");
let altEndsWithC = (<string>myvar).endsWith("c");
let altEndsWithC2 = (myvar as string).endsWith("c");
