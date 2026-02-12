export * from "./types";
export * from "./utils";
export * from "./permissions";
import { logAudit } from "./service";
import { LogAuditParams } from "./types";

export function createAudit(deps: {
    db: any
}) {
  return {
    logAudit: (params: LogAuditParams) => logAudit(params, deps.db),
  };
}