import { Request, Response, NextFunction } from "express";
export declare const AnnouncementController: {
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    publish(req: Request, res: Response, next: NextFunction): Promise<void>;
    getById(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    list(req: Request, res: Response, next: NextFunction): Promise<void>;
};
//# sourceMappingURL=announcementController.d.ts.map