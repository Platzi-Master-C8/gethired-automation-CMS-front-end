/* eslint-disable no-underscore-dangle */
const getTemplates = async () => {
    const urlTemplates = `https://get-hired-api.herokuapp.com/templates/`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(urlTemplates, options);

    if (!response.ok) {
        const { url, status, statusText } = response;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
    }
    const templatesData = await response.json();

    return templatesData;
};

export default getTemplates;
