const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');

let validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} isnt a valid role'
}

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'First name required']
    },
    lastname: {
        type: String,
        required: [true, 'Last name required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email required']
    },
    password: {
        type: String,
        required: [true, 'Password required']
    },
    role: {
        type: String,
        required: [true, 'Role required'],
        default: 'USER_ROLE',
        enum: validRoles
    },
    enabled: {
        type: Boolean,
        default: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

userSchema.methods.encryptPassword = async(password) => {
    // return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function(password) {
    // return bcrypt.compareSync(password, this.password);
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.toJSON = function() {
    let userTemp = this;
    let userObject = userTemp.toObject();
    delete userObject.password;
    return userObject;
}

// userSchema.plugin(uniqueValidator, {
//     message: '{PATH} must be unique'
// });

module.exports = model('User', userSchema);