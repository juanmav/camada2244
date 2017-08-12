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

async function miLogica() {
    let user = await getUser(10);
    let comments = await getComments(user.id);
    return comments.userId + user.name;
}

miLogica().then(function (result) {
    console.log(result);
});