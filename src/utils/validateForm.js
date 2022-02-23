export const firstName = (name) => {
    // validation for first name
    const regex = /^([a-zA-Z]{2,}\s)?[a-zA-Z]{2,}$/;

    return !regex.test(name);
};

export const lastName = (last) => {
    // validation for last name
    const regex = /^([a-zA-Z]{2,}\s)?[a-zA-Z]{2,}$/;

    return !regex.test(last);
};

export const birthDate = (date) => {
    // validation for birth date
    const birth = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();

    return !(age >= 18 && age <= 122);
};

export const phoneNumber = (number) => {
    // validation for phone number
    const regex = /^(\+?\d-?(\d{1,6})?)?[0-9]{5,15}$/;

    return !regex.test(number);
};

export const email = (mail) => {
    // validation for email
    const regex = /^[\w]{1,64}@[\w]{1,253}.[\w]{1,}$/;

    return !regex.test(mail);
};

export const username = (uname) => {
    // validation for username
    const regex = /^[a-zA-Z0-9]{6,10}$/;

    return !regex.test(uname);
};

export const linkedin = (link) => {
    // validation for linkedin
    const regex = /^(https:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9]{1,}$/;

    return !regex.test(link);
};

export const github = (link) => {
    // validation for github
    const regex = /^(https:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9]{1,}$/;

    return !regex.test(link);
};

export const twitter = (link) => {
    // validation for twitter
    const regex = /^(https:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9]{1,}$/;

    return !regex.test(link);
};
