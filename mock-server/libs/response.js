module.exports = ListResponseData = (result, errorCode, errorMessage) => {
    errorCode = errorCode || 2000;
    errorMessage = errorMessage || "";
    return {
        result,
        errorCode,
        errorMessage
    }
}