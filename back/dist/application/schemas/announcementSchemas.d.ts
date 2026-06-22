import { z } from 'zod';
export declare const createAnnouncementSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    departmentId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    departmentId?: string | undefined;
}, {
    title: string;
    content: string;
    departmentId?: string | undefined;
}>;
export type CreateAnnouncementInput = z.infer<typeof createAnnouncementSchema>;
//# sourceMappingURL=announcementSchemas.d.ts.map