import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors'

export function requireRole(...allowed: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user
    const role = user?.role?.toString().trim().toUpperCase()
    const normalizedAllowed = allowed.map(r => r.toString().trim().toUpperCase())

    if (!user || !normalizedAllowed.includes(role)) {
      return next(new AppError('Forbidden', 403))
    }
    next()
  }
}
