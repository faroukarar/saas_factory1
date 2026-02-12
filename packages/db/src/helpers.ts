import { ServiceResult } from "./types";

export async function handleQuery<T>(
  fn: () => Promise<T>,
): Promise<ServiceResult<T>> {
  try {
    const data = await fn();
    return { ok: true, data };
  } catch (err: any) {
    console.error(err);
    return {
      ok: false,
      error: { code: "INTERNAL_ERROR", message: "Query failed" },
    };
  }
}
