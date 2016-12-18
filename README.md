# Promise.properRace

An implementation of Promise.race as explained by this post: https://www.jcore.com/2016/12/18/promise-me-you-wont-use-promise-race/

Usage:

    let car1 = new Promise((r, reject) => setTimeout(reject, 2000, 'Car 1.'));
    let car2 = new Promise(resolve => setTimeout(resolve, 4000, 'Car 2.'));
    let car3 = new Promise(resolve => setTimeout(resolve, 3000, 'Car 3.'));
    let car4 = new Promise(resolve => setTimeout(resolve, 6000, 'Car 4.'));
    
    Promise.properRace([car1, car2, car3, car4], 3).then(winners => {
      console.log('Race ended');
      winners[0].then(car => console.log('Gold medal:', car));
      winners[1].then(car => console.log('Silver medal:', car));
      winners[2].then(car => console.log('Bronze medal:', car));
    });
