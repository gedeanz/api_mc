// program.ts
import { app, db } from "./startUp";

async function main() {
    await db.createConnection();
    let port = "5000";
    app.listen(port, () => {
        console.log(`Servidor rodando na porta: ${port}`);
    });
}

main();
