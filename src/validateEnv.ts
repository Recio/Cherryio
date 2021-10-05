export const validateEnv = () => {
    if (!process.env.AUTH_TOKEN) {
        console.warn("Missing Discord bot token.");
        return false;
    }

    if(!process.env.MONGODB_URI){
        console.warn("Missing MongoDB connection Uri");
        return false;
    }

    return true;
};
  