/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Request, Response } from 'express';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------

// --------------------------------------------------
// sign-in controller
// --------------------------------------------------
export const signinController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({
      success: true,
      status: 'success',
      message: 'Sign-in successful',
    });
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error('Unknown error');
    res.status(500).json({
      success: false,
      status: 'error',
      message: err.message,
    });
  }
};
