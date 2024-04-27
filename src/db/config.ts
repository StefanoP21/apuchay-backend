import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const dbCnn = process.env.DB_CNN;
    const dbName = process.env.DB_NAME;

    if (!dbCnn || !dbName) {
      throw new Error('Missing environment variables for database connection');
    }

    await mongoose.connect(dbCnn, { dbName });

    console.log('Database online');
  } catch (error) {
    console.log(error);
    throw new Error('Error to connect to the database');
  }
};
