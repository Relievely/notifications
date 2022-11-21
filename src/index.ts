import {app} from './app';

const port = process.env.PORT;

app.listen(port, () => console.log(`Notifications service listening on port: ${port}`))