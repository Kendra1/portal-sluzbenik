export const sendDecisionAppealAPI = (appeal) => ({
  uri: `/api/zalbaProtivOdluke`,
  method: "post",
  data: appeal,
});

export const getDecisionAppealPatternAPI = () => ({
  uri: `api/zalbaProtivOdluke/parse/object`,
  method: "get",
});

export const getSilenceAppealPatternAPI = () => ({
  uri: `api/zalbaProtivCutanja/parse/object`,
  method: "get",
});

export const sendSilenceAppealAPI = (appeal) => ({
  uri: "/api/zalbaProtivCutanja",
  method: "post",
  data: appeal,
});

export const getMyDecisionAppealsAPI = () => ({
  uri: `/api/zalbaProtivOdluke/all/userId`,
  method: "get",
});

export const getMySilenceAppealsAPI = () => ({
  uri: "/api/zalbaProtivCutanja/all",
  method: "get",
});

export const getMyDecisionsAPI = () => ({
  uri: "/api/resenje/all",
  method: "get",
});

export const exportDecisionAppealToXHTMLAPI = (id) => ({
  uri: `/api/zalbaProtivOdluke/generate/html/${id}`,
  method: "get",
});

export const exportDecisionAppealToPDFAPI = (id) => ({
  uri: `/api/zalbaProtivOdluke/generate/pdf/${id}`,
  method: "get",
});

export const exportSilenceAppealToXHTMLAPI = (id) => ({
  uri: `/api/zalbaProtivCutanja/generate/html/${id}`,
  method: "get",
});

export const exportSilenceAppealToPDFAPI = (id) => ({
  uri: `/api/zalbaProtivCutanja/generate/pdf/${id}`,
  method: "get",
});

export const withdrawDecisionAppealAPI = (id) => ({
  uri: `/api/zalbaProtivOdluke/withdraw/${id}`,
  method: "get",
});

export const withdrawSilenceAppealAPI = (id) => ({
  uri: `/api/zalbaProtivCutanja/withdraw/${id}`,
  method: "get",
});
