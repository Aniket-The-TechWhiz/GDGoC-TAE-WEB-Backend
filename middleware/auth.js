// This is a placeholder for real authentication logic.
// In a production environment, you would implement a more secure method,
// such as JSON Web Tokens (JWT) or sessions.

// This middleware checks for a specific header to grant admin access.
// It is intended for demonstration purposes only.
exports.isAdmin = (req, res, next) => {
    // We check for a custom header named 'x-admin-key'.
    // The value of this key is hardcoded to 'supersecretkey' for this example.
    if (req.headers['x-admin-key'] === 'supersecretkey') {
        // If the key is correct, we call `next()` to pass control to the next
        // middleware function or the route handler.
        next();
    } else {
        // If the key is missing or incorrect, we send a 403 Forbidden status
        // and a message indicating that access is denied.
        res.status(403).json({ message: 'Access denied. Admin privileges required.' });
    }
};
