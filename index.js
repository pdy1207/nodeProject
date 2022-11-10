let express = require("express");
let axios = require("axios");

let app = express();
let port = process.env.PORT || 80;

app.use(express.static("public_html"));
app.listen(port, function () {
  console.log("HTML 서버 시작됨");
});

app.get("/pharmach_list", (req, res) => {
  let api = async () => {
    let response = null;
    try {
      response = await axios.get(
        "http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire",
        {
          params: {
            serviceKey:
              "oAAaTAQ4PE6YQyHb2FYKecAyDAo03wZKRcyJIcbBp3x3rsjIs0QNP+ni2YCjP38u2EhST+Ii40hTwhzY/Zs6wA==",
            Q0: req.query.Q0,
            Q1: req.query.Q1,
            QT: req.query.QT,
            QN: req.query.QN,
            ORD: req.query.ORD,
            pageNo: req.query.pageNo,
            numOfRows: req.query.numOfRows,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    return response;
  };
  api().then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(response.data.response.body);
  });
});
