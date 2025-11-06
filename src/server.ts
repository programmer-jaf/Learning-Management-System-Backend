/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Server } from 'http';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import app from './app'; // your existing app.ts
import { ENV } from '@config/env.config';
import {
  connectDB,
  disconnectDB,
  handleDBShutdownSignals,
} from '@config/db.config';

// --------------------------------------------------
// Server instance
// --------------------------------------------------
let server: Server;

// --------------------------------------------------
// Graceful Shutdown
// --------------------------------------------------
const shutdown = async (signal: string) => {
  console.log(`\n⚙️ Received ${signal}. Shutting down server...`);
  try {
    if (server) {
      server.close(() => {
        console.log('🛑 Express server closed');
      });
    }
    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error during shutdown (${signal}):`, error);
    process.exit(1);
  }
};

// Listen to termination signals
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

// --------------------------------------------------
// Start Server & Connect to DB
// --------------------------------------------------
const startServer = async () => {
  try {
    await connectDB();
    handleDBShutdownSignals(); // Optional: handles extra DB signals if used
    server = app.listen(ENV.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${ENV.PORT}`);
    });

    server.on('error', (err: Error) => {
      console.error('❌ Server error:', err);
      process.exit(1);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// --------------------------------------------------
// Launch Server
// --------------------------------------------------
startServer();
