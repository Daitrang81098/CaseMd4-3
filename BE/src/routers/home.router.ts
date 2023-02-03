import {Router} from "express";
import homeController from "../controllers/homeController";
import {auth} from "../middleware/auth"
import {checkAdmin} from "../middleware/checkAdmin";
export const HomeRouter = Router();


HomeRouter.use(auth);
HomeRouter.get('/',homeController.getAll);
// HomeRouter.post('/',checkAdmin,homeController.create);
// HomeRouter.put('/:id',checkAdmin,homeController.update);
// HomeRouter.delete('/:id',checkAdmin,homeController.remove);
// HomeRouter.get('/:id',homeController.findById);
//


