function neverReturn(): never {
    while(true) {
        console.log(1)
    }
}

neverReturn();


function throwError(msg: string): never {
  throw new Error(msg);
}
// never type is used for functions that never return a value, either because they throw an error or have an infinite loop.
