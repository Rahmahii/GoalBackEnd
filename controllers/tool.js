const bcrypt = require('bcrypt');



async function hashing(password) {
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    return await bcrypt.hash(password, salt);
}
function PhoneFormat(str) {
    return "966" + str.substring(str.length - 9)
}
function sign(user) {
    return {
        phone: user.phone,
        username: user.username,

    }
}
module.exports = {
    sign,
    hashing,
    PhoneFormat,
}