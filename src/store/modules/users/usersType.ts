export type User = {
  id: number;
  firstName: string;
  surName: string;
  role: string;
  name: string;
};

export type Users = Array<User>;

export type UsersSate = {
  users: User[];
};

export type UsersStore = {
  state: UsersSate;
  getters: {
    getUsers: (state: UsersSate) => Users;
  };
  mutations: {
    setUsers(state: UsersSate, users: Users): void;
  };
  actions: {
    setUsers(context: any): Promise<void>;
  };
};
