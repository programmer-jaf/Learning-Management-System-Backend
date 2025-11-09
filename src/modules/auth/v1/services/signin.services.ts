/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------

// --------------------------------------------------
// Custom Interface

// --------------------------------------------------

// --------------------------------------------------
// sign-in services
// --------------------------------------------------
export const signinServices = async () => {
  try {
    /*
    Logic: sign-in
    1. validate payload
    2. check if user exists & not banned
    3. check password match with hashed password
    4. generate access & refresh token
    5. store refresh token in DB
    6. send success response with userInfo
    */

    return {
      success: true,
      status: 'success',
      message: 'Sign-in successful',
    };
  } catch (error) {
    const err = error instanceof Error;
    throw err;
  }
};
