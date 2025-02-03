import { getContext } from "hono/context-storage";

export function getEnv(key: keyof Env) {
  return getContext<{ Bindings: Env }>()?.env?.[key];
}
