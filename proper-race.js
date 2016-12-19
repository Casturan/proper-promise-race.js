Promise.properRace = function(promises, count = 1, results = []) {
  promises = Array.from(promises);
  if (promises.length < count) {
    return Promise.reject('Race is not finishable');
  }
   
  let indexPromises = promises.map((p, index) => p.then(() => index, () => {throw index;}));
   
  return Promise.race(indexPromises).then(index => {
    let p = promises.splice(index, 1)[0];
    p.then(e => results.push(e));
    if (count === 1) {
      return results;
    }
    return Promise.properRace(promises, count-1, results);
  }, index => {
    promises.splice(index, 1);
    return Promise.properRace(promises, count, results);
  });
};
