// export const validate = (email, password) => {

//     const regEx1 = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
//     const regEx2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

//     const isEmailValid = regEx1.test(email);
//     const isPasswordValid = regEx2.test(password)

//     if (!isEmailValid) return "Please enter a valid email address.";
//     if (!isPasswordValid) return "Your password must contain between 4 and 60 characters.";

//     return null;
// }

export const validateEmail = (email) => {

    const regEx1 = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

    const isEmailValid = regEx1.test(email);

    if (!isEmailValid) return "Please enter a valid email address.";

    return null;
}

export const validatePassword = (password) => {

    const regEx2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

    const isPasswordValid = regEx2.test(password)

    if (!isPasswordValid) return "Your password must contain between 4 and 60 characters.";

    return null;
}