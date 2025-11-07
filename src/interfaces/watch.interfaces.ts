/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

import { Document, Types } from 'mongoose';

export interface IWatchItem extends Document {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
  lectureId?: Types.ObjectId;
  progress: number; // e.g., percentage 0-100
  completed: boolean;
  lastWatchedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
