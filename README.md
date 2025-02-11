
---

```md
# FireError

A simple utility to decode Firebase authentication error codes into human-readable messages.
Supports multiple languages: JavaScript, Python, and Java.

## Features
- Converts Firebase error codes into clear error messages.
- Available in JavaScript, Python, and Java.
- Can be run without downloading using `curl` or `wget`.

## Usage

### JavaScript (Node.js)
```sh
node main.js auth/invalid-credential
```

#### Run without downloading:
```sh
curl -s https://raw.githubusercontent.com/mgregchi/fireerror/main/main.js | node - auth/invalid-credential
```

---

### Python
```sh
python main.py auth/invalid-credential
```

#### Run without downloading:
```sh
curl -s https://raw.githubusercontent.com/mgregchi/fireerror/main/main.py | python - auth/invalid-credential
```

---

### Java
```sh
javac FirebaseErrorHandler.java
java FirebaseErrorHandler auth/invalid-credential
```

#### Run without downloading:
```sh
curl -s https://raw.githubusercontent.com/mgregchi/fireerror/main/Main.java -o FirebaseErrorHandler.java && javac FirebaseErrorHandler.java && java FirebaseErrorHandler auth/invalid-credential
```

---

## Supported Error Codes
- `auth/invalid-credential` → The provided credential is invalid.
- `auth/user-not-found` → No user found with this email.
- `auth/wrong-password` → The password is incorrect.
- `auth/email-already-in-use` → The email is already associated with an account.
- `auth/operation-not-allowed` → This authentication method is not enabled.
- `auth/weak-password` → The password is too weak.

---

## Contributing
Feel free to contribute by adding more languages or improving error messages.
Pull requests are welcome!

## License
[MIT License](LICENSE)
```

---
