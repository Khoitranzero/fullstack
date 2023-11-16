import express from "express";
//import homeController from '../controller/homeController';
import apiController from '../controller/apiController';

const router = express.Router();

/**
 * 
 * @param {*} app express app
 * 
 */
const initApiRoutes = (app) => {
 


//rest api
router.get("/test-api", apiController.testApi);

    return app.use("/api/v1/", router);
}
export default initApiRoutes;