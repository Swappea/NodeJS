console.log('Before');
// callback hell example
// getUser(1, (user) => {
//     console.log('User:', user);
//     getRepositories(user, (repos) => {
//         console.log(`Repo's: ${repos}`);
//         getCommits(repos[1], (commits) => {
//             console.log('Commits', commits);
//         });
//     });
// });

/*
// named fns example
getUser(1, displayUser);

console.log('After');

function displayUser(user) {
    console.log('User:', user);
    getRepositories(user, displayRepositories);
}

function displayRepositories(repos) {
    console.log(`Repo's: ${repos}`);
    getCommits(repos[1], displayCommits);
}

function displayCommits(commits) {
    console.log('Commits', commits);
}
*/

// Promises Example

// getUser(1)
//         .then((user) => getRepositories(user.gitHubUsername))
//         .then((repos) => getCommits(repos[0]))
//         .then((commits) => console.log('Commits', commits))
//         .catch((error) => console.log('Error', error.message));




// Async and Await

async function displayCommits() {

    try {
        console.log('Async and Await');
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (error) {
        console.log('Error', error.message);
    }

}

displayCommits();

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user from db...');
            resolve({ id: id, gitHubUsername: 'swap' });
        }, 2000);
    });
}

function getRepositories(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repo from db for user ', user);
            //resolve(['name1', 'name2', 'name3']);
            reject(new Error('could not get the error'));
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting commits from db for repo ', repo);
            resolve(['namec1', 'namec2', 'namec3']);
        }, 2000);
    });
}