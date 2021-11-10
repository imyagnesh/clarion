// Promises

// Most used mechanism to fetch data from server

// Pending
// Resolved
// Reject

const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        accessToken: "token",
      });
      // reject("Login rejected")
    }, 3000);
  });
};

const users = (token) => {
  return new Promise((resolve, reject) => {
    if (!token) reject("Not Authorised");
    setTimeout(() => {
      resolve({
        users: [],
      });
    }, 3000);
  });
};

const leftSide = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("left side data")
      reject("left side fail");
    }, 1000);
  });
};

const rightSide = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("right side fail");
      // resolve("right side data")
    }, 3000);
  });
};

const main = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("main data")
      reject("main fail");
    }, 2000);
  });
};

// C#
const fetchData = async () => {
  try {
    console.time("prom");
    const res = await Promise.any([leftSide(), main(), rightSide()]);

    console.log(res);
    // await leftSide()
    // await main()
    // await rightSide()
    console.timeEnd("prom");
  } catch (error) {
    console.log(error);
  }
};

fetchData();

// All
// AllSettled
// race
// any

// Old Javascript
login()
  .then((val) => {
    console.log(val);
    users(val)
      .then((val1) => {
        console.log(val1);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {});

// declare Promise
// Pending Promise
// const p1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("P1 Resolved")
//             reject("p1 rejectected")
//         }, 3000)

//         // Api call
//         // resolve("P1 Resolved")
//         // reject("p1 rejectected")
//     })
// }

// Execute
// p1()
// .then((val) => {
//     console.log(val);
// })
// .catch((err) => {
//     console.log(err);
// })
