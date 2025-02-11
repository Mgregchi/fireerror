const firebaseErrorMessages = {

    // Email & Password Errors
    "auth/email-already-in-use": "This email is already in use. Try logging in instead.",
    "auth/invalid-email": "Invalid email format. Please enter a valid email address.",
    "auth/user-disabled": "This user account has been disabled.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/user-not-found": "No user found with this email.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/invalid-credential": "Invalid login credentials.",
    "auth/network-request-failed": "Network error. Please check your connection.",

    // Google, Facebook, and Third-Party Auth Errors
    "auth/account-exists-with-different-credential": "An account already exists with this email. Try signing in with a different method.",
    "auth/credential-already-in-use": "This credential is already linked to another account.",
    "auth/operation-not-allowed": "This authentication method is not enabled. Contact support.",
    "auth/popup-blocked": "Popup was blocked. Please enable popups in your browser.",
    "auth/popup-closed-by-user": "You closed the popup before signing in. Try again.",
    "auth/unauthorized-domain": "This domain is not authorized for authentication. Contact support.",

    // Password Reset & Email Verification Errors
    "auth/invalid-action-code": "The password reset or verification link is invalid or expired.",
    "auth/expired-action-code": "This link has expired. Please request a new one.",

    // Token & Session Errors
    "auth/id-token-expired": "Your session has expired. Please log in again.",
    "auth/id-token-revoked": "Your session was revoked. Log in again.",
    "auth/session-cookie-expired": "Session has expired. Please refresh or log in again.",
    "auth/session-cookie-revoked": "Session has been revoked. Please log in again.",

    // Phone Authentication Errors
    "auth/captcha-check-failed": "Captcha verification failed. Try again.",
    "auth/invalid-phone-number": "Invalid phone number format. Check and try again.",
    "auth/quota-exceeded": "Too many requests. Please try again later.",

    // Multi-Factor Authentication (MFA) Errors
    "auth/multi-factor-auth-required": "Multi-factor authentication is required. Check your email or device.",
    "auth/mfa-info-not-found": "No multi-factor authentication info found for this user.",

    // Miscellaneous Errors
    "auth/network-request-failed": "Network error. Please check your internet connection.",
    "auth/too-many-requests": "Too many attempts. Please wait and try again later.",
    "auth/internal-error": "An internal error occurred. Try again later.",
};

function getFirebaseErrorMessage(errorCode) {
  return firebaseErrorMessages[errorCode] || "An unknown error occurred.";
}

// Example usage
if (require.main === module) {
  const errorCode = process.argv[2]; // Get error code from command line args
  console.log(getFirebaseErrorMessage(errorCode));
}

module.exports = getFirebaseErrorMessage;
