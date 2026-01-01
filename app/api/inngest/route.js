import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserUpdation,
} from "@/config/inngest";

// ✅ REQUIRED for Inngest (fixes "cached is not defined")
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Create an API that serves Inngest functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
  ],
});
