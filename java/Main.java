import java.util.HashMap;
import java.util.Map;

public class FirebaseErrorHandler {
    private static final Map<String, String> errorMessages = new HashMap<>();

    static {
        errorMessages.put("auth/invalid-credential", "The provided credential is invalid.");
        errorMessages.put("auth/user-not-found", "No user found with this email.");
        errorMessages.put("auth/wrong-password", "The password is incorrect.");
        errorMessages.put("auth/email-already-in-use", "The email is already associated with an account.");
        errorMessages.put("auth/operation-not-allowed", "This authentication method is not enabled.");
        errorMessages.put("auth/weak-password", "The password is too weak.");
    }

    public static String getErrorMessage(String errorCode) {
        return errorMessages.getOrDefault(errorCode, "Unknown error occurred: " + errorCode);
    }

    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: java FirebaseErrorHandler <error-code>");
            return;
        }
        System.out.println(getErrorMessage(args[0]));
    }
}
