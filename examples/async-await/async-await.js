"use strict";

async function fetcher () {

    const data = await mockFetch();
    console.log(data);

    await mockFetch("dummy data 1");
    console.log('statement expression');
}

function mockFetch (value) {
    return new Promise(function (resolve, reject) {
        resolve(value || 'dummy data 2');
    });
}

fetcher();
