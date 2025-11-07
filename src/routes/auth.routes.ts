import { Router } from 'express';

const router = Router();

router.post('/signup');
router.post('/signin');
router.post('/signout');
router.post('/forgot-password');
router.post('/reset-password');
router.post('/refresh-token');

export default router;
