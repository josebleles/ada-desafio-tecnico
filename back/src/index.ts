import 'reflect-metadata';
import * as http from 'http';
import application from './application';

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(application);

httpServer.listen(PORT, () => {
    console.log(`Server is listening on :${PORT}`);
});