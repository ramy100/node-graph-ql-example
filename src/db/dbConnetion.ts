import mongoose from 'mongoose';

export class mongoDb {
  constructor() {}

  static async connect(dbHost: string, dbName: string) {
    try {
      await mongoose.connect(`mongodb://${dbHost}:27017/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log('connected to db');
    } catch (error) {
      console.log(error);
    }
  }
}
