export const logger = (store) => (next) => (action) => {
    console.log(action.type);
    next(action);
}