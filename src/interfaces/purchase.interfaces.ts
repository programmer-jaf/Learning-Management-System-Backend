/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

import { Document, Types } from 'mongoose';

export interface IPurchaseItem extends Document {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
  paymentId?: string; // reference from payment gateway
  amount: number;
  currency: string;
  purchasedAt: Date;
  completed: boolean;
}

