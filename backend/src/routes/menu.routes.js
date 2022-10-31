import Express from 'express';
import { getAllMenuItems, updateMenuItem, deleteMenuItem, getMenuItemById, createMenuItem } from '../controllers/menu';

const menuRoute = Express.Router();

menuRoute.get('/', getAllMenuItems);
menuRoute.get('/:id', getMenuItemById);
menuRoute.post('/', createMenuItem);
menuRoute.patch('/:id', updateMenuItem);
menuRoute.delete('/:id', deleteMenuItem);

export default menuRoute;
