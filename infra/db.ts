import mongoose from 'mongoose';

class Database {
    private DB_URL = "mongodb://localhost:28000/db_portal";

    async createConnection() {
        try{
            await mongoose.connect(this.DB_URL);
            console.log("MongoDB conectado com sucesso");
        } catch (err){
            console.error("Erro ao conectar no MongoDB:", err);
        }
    }
}

export default Database;