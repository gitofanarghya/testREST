var express = require("express");
var cors = require('cors');
var app = express();
app.use(cors())

app.listen(8888, () => {
 console.log("Server running on port 8888");
});

app.get("/getReportTypes", (req, res, next) => {
    res.json(["Unit Analytics","Motion Activity","Event Summary"]);
});

app.get("/getReports", (req, res, next) => {
    res.json(
        {
            community: {
                '598bknkw8dgmyrgmnj69wz8rkv5yk': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}]
            },
            unit: {
                '5eegqow8paggnoax88m8n5zr5kke9o': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}],
                '6bpor7j5dpxnzdyknaq9en7q8dxq9': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}],
                '6dzprygb7r6gkqzz798b8w98k5vrzn': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}],
                '895ok6ar7bqrorg6yxpgwpejy5mgd6': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}],
                'g8era8bkrjxjywpozw7xd7drqdyn6': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}],
                'mdwrgzppowqpan5bpxdagwejvb75x': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}],
                'mo7y9koge67qbpwmq7g5mkzzn7rrpk': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}],
                'nepmp6empoaqvpqkw59aaz5jwqwwzw': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}],
                'zr87dx9xjnd6kopakene87bnxryr8o': [{name: "report1"}, {name: "report2"}, {name: "report3"}, {name: "report4"}, {name: "report5"}],
            }
        }
    )
});