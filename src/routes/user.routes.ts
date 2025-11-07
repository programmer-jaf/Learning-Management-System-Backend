/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { Router } from 'express';

// --------------------------------------------------
// Initialize Router
// --------------------------------------------------
const router = Router();

// --------------------------------------------------
// User Routes
// --------------------------------------------------
router.get('/me');
router.put('/update');
router.put('/change-password');
router.post('/update-photo');

// --------------------------------------------------
// Export Router
// --------------------------------------------------
export default router;
