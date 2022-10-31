import Express from 'express';
import { createInventoryDetails, deleteInventory, getAllInventories, getAllRequestedStocks, getInventoryBYID, handleStockRelease, inventoryStats, requestStocks, updateInventory } from '../controllers/inventory';
import { verifyAccessToken, verifyStaffMember, veryfyInventoryManager } from '../middleware/authentication.js';
const inventoryRoute = Express.Router();

inventoryRoute.get('/requestStock', verifyAccessToken, verifyStaffMember, veryfyInventoryManager, getAllRequestedStocks);
inventoryRoute.get('/', verifyAccessToken, verifyStaffMember, getAllInventories);
inventoryRoute.get('/stats', verifyAccessToken, verifyStaffMember, veryfyInventoryManager, inventoryStats);
inventoryRoute.get('/:id', verifyAccessToken, verifyStaffMember, getInventoryBYID);
inventoryRoute.post('/', verifyAccessToken, verifyStaffMember, veryfyInventoryManager, createInventoryDetails);
inventoryRoute.post('/request/:id', verifyAccessToken, verifyStaffMember, requestStocks);
inventoryRoute.post('/approve/:id', verifyAccessToken, verifyStaffMember, veryfyInventoryManager, handleStockRelease);
inventoryRoute.patch('/:id', verifyAccessToken, verifyStaffMember, veryfyInventoryManager, updateInventory);
inventoryRoute.delete('/:id', verifyAccessToken, verifyStaffMember, veryfyInventoryManager, deleteInventory);

export default inventoryRoute;
