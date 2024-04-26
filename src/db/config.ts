import mongoose from 'mongoose';

const dbCnn = process.env.DB_CNN;
const dbName = process.env.DB_NAME;

const connectDB = async () => {
  try {
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

module.exports = { connectDB };
