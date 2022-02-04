export type FlawReport = {
  status: string;
  createTime: string;
  person: string;
  infrastructureElement: string;
  damageType: string;
  gpsLocation: string;
  comment: string;
  id: number | null;
  lat: number;
  lang: number;
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
    addFlawReport(state: FlawReportsSate, flawReports: FlawReport): void;
    editStatusFlawReport(state: FlawReportsSate, { status, id }: { status: string; id: number }): void;
  };
  actions: {
    setFlawReports(context: any): Promise<void>;
    editStatusFlawReport(context: any, { status, id }: { status: string; id: number }): Promise<void>;
    addFlawReport(context: any, FlawReport: FlawReport): Promise<void>;
  };
};
