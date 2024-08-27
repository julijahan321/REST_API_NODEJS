import dotenv from 'dotenv';

dotenv.config();

const dev = {
    app: {
        port: process.env.PORT || 4000
    },
    
};

export default dev;