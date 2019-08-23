import hyExt from "hyext-rn-sdk";
let dev = false;
const host = dev ? "" : "https://extapp.gdutnw.site";
const port = dev ? 17050 : 80;

const request = (method = "GET", path, param = {}) => {
  return new Promise((resolve, reject) => {
    console.log("request ebs start");
    console.log(param);
    hyExt
      .request({
        header: {},
        host: host,
        port: port,
        path: path,
        httpMethod: method,
        param: param,
        cookies: {}
      })
      .then(({ res, msg, ebsResponse: { entity, statusCode, header } }) => {
        console.log("=====request ebs= response====");
        console.log(res);
        if (res == 0) {
          try {
            const result = JSON.parse(entity);
            resolve(result);
          } catch (e) {
            reject(e);
          }
        }
      })
      .catch(err => {
        console.log("=====request ebs= err====");
        console.log(err);
        reject(err);
      });
  });
};

const takePartIn = () => {
  //
  return request("GET", "/chance/takeParkIn"); //获取结果接口
};

export default {
  takePartIn, // 是否参加游戏
};
