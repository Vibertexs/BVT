function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }

  function doOperation() {
    
    doStep1(0, (result1) => { // 1st callback
        // here the result1 is 1 because we are adding 0 + 1
      doStep2(result1, (result2) => { // 2nd callback
        // then the code calls the doStep2 function and adds 1 + 2

        doStep3(result2, (result3) => { // 3rd callback
        
            console.log(`result: ${result3}`); // result: 6
        });
      });
    });
  }
  
  doOperation();