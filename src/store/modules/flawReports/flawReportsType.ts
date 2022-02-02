export type FlawReport = {
  status: string;
  createTime: string;
  person: string;
  infrastructureElement: string;
  damageType: string;
  gpsLocation: string;
  comment: string;
  id: number | null;
};

export type FlawReports = Array<FlawReport>;

export type FlawReportsSate = {
  flawReports: FlawReport[];
};

export type FlawReportsStore = {
  state: FlawReportsSate;
  getters: {
    getFlawReports: (state: FlawReportsSate) => FlawReports;
  };
  mutations: {
    setFlawReports(state: FlawReportsSate, flawReports: FlawReports): void;
  };
  actions: {
    setFlawReports(context: any): Promise<void>;
  };
};
