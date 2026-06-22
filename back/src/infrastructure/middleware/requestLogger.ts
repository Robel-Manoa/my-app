import { Request, Response, NextFunction } from 'express'

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  console.log(`[Request] ${req.method} ${req.url}`)
  next()
}
