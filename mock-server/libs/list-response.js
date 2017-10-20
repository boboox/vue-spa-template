module.exports = ListResponseData = (rows, total, errorCode, errorMessage) => {
    errorCode = errorCode || 2000;
    errorMessage = errorMessage || "";
    return {
        result: { rows, total },
        errorCode,
        errorMessage
    }
}