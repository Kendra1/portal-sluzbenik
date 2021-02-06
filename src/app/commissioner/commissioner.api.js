export const getRequestsAPI = () => ({
  uri: `/official/requests`,
  method: "get",
});

export const getAppealsAPI = () => ({
  uri: `/commissioner/appeals`,
  method: "get",
});

export const respondToAppealsAPI = (response) => ({
  uri: `/commissioner/response`,
  method: "post",
  data: response,
});

export const getMyResponsesAPI = () => ({
  uri: `/commissioner/responses`,
  method: "get",
});

export const notifyOfficialAPI = (notification) => ({
  uri: `/commissioner/notify`,
  method: "post",
  data: notification,
});

export const exportToXHTMLAPI = (data) => ({
  uri: "/api/obavestenje/generate/html/",
  method: "post",
});

export const exportToPDFAPI = (data) => ({
  uri: "/api/obavestenje/generate/pdf/",
  method: "post",
  data,
});

export const getDecisionPatternAPI = () => ({
  uri: "api/resenje/parse/object",
  method: "get",
});
