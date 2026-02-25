import express from 'express';
import { router, router2 } from './routes/users.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', router);
app.use('/users2', router2);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
