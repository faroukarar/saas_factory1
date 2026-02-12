import { AuditSelect } from "./types";

export function canViewAudit(
  userId: string,
  isAdmin: boolean,
  log: AuditSelect,
) {
  if (isAdmin) return true;
  return log.actorId === userId || log.targetId === userId;
}
