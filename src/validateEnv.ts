export const validateEnv = () => {
    if (!process.env.AUTH_TOKEN) {
        console.warn("Missing Discord bot token.");
        return false;
    }
    return true;
};
  