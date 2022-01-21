export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload:nr
    };
};
export const decrement = (nd) => {
    return {
        type: 'DECREMENT',
        payload:nd
    };
};

