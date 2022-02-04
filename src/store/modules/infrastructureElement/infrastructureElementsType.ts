export type InfrastructureElement = {
  id: number;
  name: string;
};

export type InfrastructureElements = Array<InfrastructureElement>;

export type InfrastructureElementsSate = {
  infrastructureElements: InfrastructureElement[];
};

export type InfrastructureElementsStore = {
  state: InfrastructureElementsSate;
  getters: {
    getInfrastructureElements: (state: InfrastructureElementsSate) => InfrastructureElements;
  };
  mutations: {
    setInfrastructureElements(state: InfrastructureElementsSate, infrastructureElements: InfrastructureElements): void;
  };
  actions: {
    setInfrastructureElements(context: any): Promise<void>;
  };
};
