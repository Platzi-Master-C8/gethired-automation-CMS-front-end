// eslint-disable-next-line import/extensions
import 'regenerator-runtime/runtime.js';

const getUser = async (token) => {
    const urlUser = `https://agile-tor-65287.herokuapp.com/users/query/profile`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token,
        },
    };
    const response = await fetch(urlUser, options);

    if (!response.ok) {
        const { url, status, statusText } = response;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
    }
    const userData = await response.json();

    return userData;
};

export default getUser;
