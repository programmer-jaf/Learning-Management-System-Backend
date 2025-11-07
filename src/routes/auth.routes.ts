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
// Auth Routes
// --------------------------------------------------
router.post('/signup');
router.post('/signin');
router.post('/signout');
router.post('/forgot-password');
router.post('/reset-password');
router.post('/refresh-token');

// --------------------------------------------------
// Export Router
// --------------------------------------------------
export default router;
