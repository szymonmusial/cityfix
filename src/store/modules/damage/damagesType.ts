export type Damage = {
  id: number;
  name: string;
};

export type Damages = Array<Damage>;

export type DamagesSate = {
  damages: Damage[];
};

export type DamagesStore = {
  state: DamagesSate;
  getters: {
    getDamages: (state: DamagesSate) => Damages;
  };
  mutations: {
    setDamages(state: DamagesSate, damages: Damages): void;
  };
  actions: {
    setDamages(context: any): Promise<void>;
  };
};
