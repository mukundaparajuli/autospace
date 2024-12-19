export type Role = 'admin' | 'manager' | 'user';

export type GetUserType = {
  id: string;
  roles: Role[];
};
