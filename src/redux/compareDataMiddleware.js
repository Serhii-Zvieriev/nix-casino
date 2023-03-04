const compareDataMiddleware = (store) => (next) => (action) => {
  const prevState = store.getState();
  const result = next(action);
  const nextState = store.getState();
  console.log(prevState.user.balance, nextState.user.balance);
  // сравниваем данные в сторе до и после действия
  //   if (prevState !== nextState) {
  //     console.log("Data has changed");
  //   }
  if (nextState.user.balance <= 0) {
    console.log("Вы проиграли");
  }
  if (nextState.user.balance / nextState.user.deposit >= 2) {
    console.log("Вы выиграли");
  }

  return result;
};
export default compareDataMiddleware;
