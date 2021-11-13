const logger = store => next => action => {
  //   console.log('store', store);
  //   console.log('next', next);
  //   console.log('action', action);

  const [, process, type] = /(.*)_(REQUEST)/.exec(action.type);

  if (type === 'REQUEST') {
    // API CALL & Store error info in data base
    // console.log(process);
  }

  next(action);
};

export default logger;
