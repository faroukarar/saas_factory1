// packages/audit/audit.utils.ts

import { AuditSelect } from "./types";


export function maskIp(ip: string | null): string | null {
  if (!ip) return null;
  return ip.split(".").slice(0, 3).join(".") + ".xxx";
}

export function formatAuditLog(log: AuditSelect) {
  return {
    ...log,
    ip: maskIp(log.ip),
    createdAt: log.createdAt.toISOString(),
  };
}
