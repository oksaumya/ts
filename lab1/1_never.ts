function neverReturn(): never {
    while(true) {
        console.log(1)
    }
}

neverReturn();


function throwError(msg: string): never {
  throw new Error(msg);
}
