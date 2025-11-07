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
//  Manage Courses Routes
// --------------------------------------------------
router.get('/courses');
router.put('/courses/:courseId/approve');
router.delete('/courses/:courseId');

// --------------------------------------------------
//  Manage Users Routes
// --------------------------------------------------
router.get('/users');
router.put('/courses/:studentId/ban');
router.put('/courses/:studentId/unban');

// --------------------------------------------------
//  Manage Instructor Routes
// --------------------------------------------------
router.get('/instructors');
router.put('/instructor/:instructorId/approve');

// TODO: Add Blog Routes in Future
// --------------------------------------------------
// Export Router
// --------------------------------------------------
export default router;
