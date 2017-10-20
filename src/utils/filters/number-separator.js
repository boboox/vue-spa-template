/**
 * 千位分隔符
 * */
export const number = (value) => {
    if (!value) {
        return '0.00';
    }
    return value.toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g, '$1,');
};
