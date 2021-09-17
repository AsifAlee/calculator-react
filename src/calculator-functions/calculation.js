function calculate(result) {

    /**
     * here we parse the above string 
     * to find out the operation
     */
    if (result.includes('+')) {
        const resultArray = result.split('+');
        console.log(resultArray);
        const a = parseInt(resultArray[0]);
        const b = parseInt(resultArray[1]);
        return a + b;
    }
    else if (result.includes('-')) {
        const resultArray = result.split('-');
        console.log(resultArray);
        const a = parseInt(resultArray[0]);
        const b = parseInt(resultArray[1]);
        return a - b;
    }
    else if (result.includes('*')) {
        const resultArray = result.split('*');
        console.log(resultArray);
        const a = parseInt(resultArray[0]);
        const b = parseInt(resultArray[1]);
        return a * b;
    }

    else if (result.includes('/')) {
        const resultArray = result.split('/');
        console.log(resultArray);
        const a = parseInt(resultArray[0]);
        const b = parseInt(resultArray[1]);
        return a / b;
    }


}
export default calculate;