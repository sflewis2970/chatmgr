export const ValidateStr = (inStr) => {
    // Initialize results object
    let results = {
        status: false,
        message: "",
        amount: ""
    };

    const regex = /[a-z]/gi;
    const matchArray = inStr.match(regex);
    const matchStr = matchArray.toString();
    
    if (inStr === matchStr) {
        results.status = true;
        results.message = "Entered value matches required pattern";
        results.amount = matchStr;
    }
    else {
        results.status = false;
        results.message = "Entered value does NOT match required pattern";
    }

    return results;
};
