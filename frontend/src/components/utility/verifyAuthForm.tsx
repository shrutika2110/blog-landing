/* eslint-disable consistent-return */
export function required(value: any) {
  return value ? undefined : '*Required';
}

function validateEmail(email: string, dbCheck?: boolean): string | undefined {
  if (!dbCheck) {
    if (!email) {
      return '*Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) &&
      email
    ) {
      return 'Invalid email address';
    }
  }
}

function passwordRegexValidator(password: string): boolean {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*~_]).{8,}$/;
  return passwordRegex.test(password);
}
function validatePassword(password: string): string | undefined {
  if (!password) {
    return '*Required';
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  } else if (!passwordRegexValidator(password)) {
    return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
  }
  return undefined;
}

function validateConfirmPassword(
  confirmPassword: string,
  password: string,
): string | undefined {
  if (!confirmPassword) {
    return '*Required';
  } else if (password !== confirmPassword) {
    return 'Password must be matched with above password';
  }
}

export const validateForm = {
  email: validateEmail,
  password: validatePassword,
  confirmPassword: validateConfirmPassword,
  required: required,
};
