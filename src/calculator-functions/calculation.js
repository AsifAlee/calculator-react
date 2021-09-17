function calculate(result){
    console.log(result.split(''));
    //const resultArray = result.split('');
  //  const a = parseInt(resultArray[0]);

  if(result.includes('+')){
    const resultArray = result.split('+');
    console.log(resultArray);
    const a = parseInt(resultArray[0]);
    const b = parseInt(resultArray[1]);
    return a+b;
  }
  else if(result.includes('-')){
    const resultArray = result.split('-');
    console.log(resultArray);
    const a = parseInt(resultArray[0]);
    const b = parseInt(resultArray[1]);
    return a-b;
  }
  else if(result.includes('*')){
    const resultArray = result.split('*');
    console.log(resultArray);
    const a = parseInt(resultArray[0]);
    const b = parseInt(resultArray[1]);
    return a*b;
  }

  else if(result.includes('/')){
    const resultArray = result.split('/');
    console.log(resultArray);
    const a = parseInt(resultArray[0]);
    const b = parseInt(resultArray[1]);
    return a/b;
  }

   
}
export default calculate;