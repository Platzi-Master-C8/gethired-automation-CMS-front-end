// eslint-disable-next-line import/extensions
import 'regenerator-runtime/runtime.js';

const putUser = async (userId, data) => {
    try {
        const urlUser = `https://agile-tor-65287.herokuapp.com/users/${userId}/profile`;

        console.log('datas: ', data);

        const response = await fetch(urlUser, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw Error(`${response.status} ${response.statusText}`);
        }

        const dataJson = await response.json();
    } catch (error) {
        console.log(error);
    }
};

export default putUser;
