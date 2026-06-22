export interface User {
  id: string
  name?: string
  role: 'HR_ADMIN' | 'DEPT_ADMIN' | 'Employee'
  departmentId?: string
}
