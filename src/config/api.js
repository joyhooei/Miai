const apiRoot = "http://192.168.2.17:8888/";

export default {
  apiRoot,
  getSession3rd: apiRoot + "?s=Core.GetSession3rd",
  saveWeixin: apiRoot + "?s=Core.SaveWeixinInfo&XDEBUG_SESSION_START=16217",
  getArea: apiRoot + "?s=Dictionary.GetArea"
};