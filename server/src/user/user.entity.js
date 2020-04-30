export default function buildMakeUser ({ Id, validation, sanitize, }) {
  return function makeUser ({
    id = Id.makeId(),
    firstName,
    lastName,
    email,
    password,
    phone = 1010101010,
    role = 5,
    isActive = false,
    createdOn = Date.now(),
  } = {}) {
    const { isValidEmail, isValidPhone, } = validation;
    if (!Id.isValidId(id)) {
      throw new Error('Comment must have a valid id.');
    }
    if (!firstName) {
      throw new Error('First Name is required');
    }
    if (!lastName) {
      throw new Error('Last Name is required');
    }
    if (!email) {
      throw new Error('Email is required');
    }
    if (!phone) {
      throw new Error('Phone is required');
    }
    if (!isValidEmail(email)) {
      throw new Error('Email is invalid.');
    }
    if (!isValidPhone(phone)) {
      throw new Error('Phone is invalid.');
    }
    if (role < 0 && role > 10) {
      throw new Error('Role is invalid.');
    }

    const sanitizedFirstName = sanitize(firstName).trim();
    const sanitizedLastName = sanitize(lastName).trim();
    const sanitizedEmail = sanitize(email).trim();
    if (sanitizedFirstName.length < 1 && sanitizedLastName.length < 1 && sanitizedEmail.length < 1) {
      throw new Error('Name or email contains no usable value.');
    }

    return Object.freeze({
      getId: () => id,
      getFirstName: () => sanitizedFirstName,
      getLastName: () => sanitizedLastName,
      getCreatedOn: () => createdOn,
      getEmail: () => sanitizedEmail,
      getPhone: () => phone,
      isActive: () => isActive,
      getPassword: () => password,
    });
  };
}
