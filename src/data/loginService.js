// eslint-disable-next-line import/extensions
import 'regenerator-runtime/runtime.js';

const urlFetch = 'https://gethired-gajaguar.vercel.app/';

export const loginService = async (username, password) => {
    const response = await fetch(`${urlFetch}token`, {
        method: 'POST',
        body: `username=${username}&password=${password}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    const data = await response.json();
    const token = data.access_token;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return { token, payload };
};
