let getUser = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { // getUser
            resolve({ id: value, name: 'username'+value })
        }, 2000);
    })
};

let getComments = function(userId){
  return new Promise(function(resolve, reject){
      setTimeout(function () { // getUser
          resolve({ userId: userId, comments: 'Un comment de userId: ' + userId })
      }, 2000);
  })
};

/*getUser(10)
    .then(function (result) {
        console.log(result);
        result.algo = 'le agrego algo mas';
        return result
    })
    .then(function(result2){
        console.log(result2);
    });

getComments(10)
    .then(function (result) {
        console.log(result)
    });*/


/*let userProm = getUser(10);
let commentProm = getComments(10);

Promise.all([userProm, commentProm])
    .then(function([user, comments]){
        console.log(user);
        console.log(comments);
    });*/


/*setTimeout(function (result) { // getUser
    console.log('resultado');
    setTimeout(function (result2) { // getComments
        console.log('resultado 2');
    }, 500);
}, 500);//*/



getUser(10)
    .then(function (result) {
        console.log(result);
        result.algo = 'le agrego algo mas';
        return getComments(result.id)
    })
    .then(function(result2){
        console.log(result2);
    });

