import { ServiceResult } from "./types";
import { LogAuditParams } from "./types";

export function validateAuditParams(
  params: LogAuditParams,
): ServiceResult<null> {
  if (!params.actorType) {
    return {
      ok: false,
      error: { code: "VALIDATION_ERROR", message: "actorType required" },
    };
  }
  if (!params.action) {
    return {
      ok: false,
      error: { code: "VALIDATION_ERROR", message: "action required" },
    };
  }
  if (!params.entityType) {
    return {
      ok: false,
      error: { code: "VALIDATION_ERROR", message: "entityType required" },
    };
  }
  // مثال: entityId مطلوب لمعظم actions عدا CREATE
  if (!params.entityId && !params.action.endsWith(".create")) {
    return {
      ok: false,
      error: { code: "VALIDATION_ERROR", message: "entityId required" },
    };
  }

  return { ok: true, data: null };
}
