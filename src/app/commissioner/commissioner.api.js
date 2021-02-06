export const getRequestsAPI = () => ({
  uri: `/official/requests`,
  method: "get",
});

export const getDecisionAppealsAPI = () => ({
  uri: `/api/zalbaProtivOdluke/all`,
  method: "get",
});

export const getSilenceAppealsAPI = () => ({
  uri: `/api/zalbaProtivCutanja/all`,
  method: "get",
});

export const respondToAppealsAPI = (response) => ({
  uri: `/api/resenje`,
  method: "post",
  data: response,
});

export const sendResponseAPI = (payload) => ({
  uri: `api/resenje/sendResenje`,
  method: "post",
  data: payload,
});

export const getMyResponsesAPI = () => ({
  uri: `/api/resenje/all/`,
  method: "get",
});

export const notifyOfficialDecisionAPI = (id) => ({
  uri: `/api/zalbaProtivOdluke/sendZalba/${id}`,
  method: "post",
});

export const notifyOfficialSilenceAPI = (id) => ({
  uri: `/api/zalbaProtivCutanja/sendZalba/${id}`,
  method: "post",
});

export const exportToXHTMLAPI = (id) => ({
  uri: `/api/resenje/generate/html/${id}`,
  method: "get",
});

export const exportToPDFAPI = (id) => ({
  uri: `/api/resenje/generate/pdf/${id}`,
  method: "get",
});

export const getDecisionPatternAPI = () => ({
  uri: "api/resenje/parse/object",
  method: "get",
});
