import {specs} from './docs/apidocs';
import express from 'express';
import router from './route/UserRoute';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json())
app.use(router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
const PORT = 3333;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
