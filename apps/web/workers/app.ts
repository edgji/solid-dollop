import { Hono } from "hono";
import { contextStorage } from "hono/context-storage";
import {
  type ReactRouterMiddlewareOptions,
  reactRouter,
} from "remix-hono/handler";

declare global {
  interface CloudflareEnvironment extends Env {}
}

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: CloudflareEnvironment;
      ctx: ExecutionContext;
    };
  }
}

const app = new Hono();

app.use(
  contextStorage(),
  reactRouter({
    mode: import.meta.env.MODE as ReactRouterMiddlewareOptions["mode"],
    // @ts-expect-error - virtual module provided by React Router at build time
    build: () => import("virtual:react-router/server-build"),
  }),
);

export default app satisfies ExportedHandler<CloudflareEnvironment>;
