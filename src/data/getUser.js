// eslint-disable-next-line import/extensions
import 'regenerator-runtime/runtime.js';

const getUser = async (userId) => {
    const urlUser = `https://agile-tor-65287.herokuapp.com/users/${userId}/profile`;
    const response = await fetch(urlUser);

    if (!response.ok) {
        const { url, status, statusText } = response;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
    }
    const userData = await response.json();

    return userData;
};

export default getUser;
