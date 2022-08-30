function promiseFunction(boolean) {
    const x = boolean;
    return new Promise((resolve, reject) => {
      if (!x) {
        reject(new Error("Error Promise"));
      }
      resolve("Success promise");
    });
   }
   
   function showResult(textResult) {
    console.log(textResult);
   }
   
   promiseFunction(true)
    .then((text) => showResult(text))
