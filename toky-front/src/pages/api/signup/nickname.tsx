import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const invalidNickname = "안녕";
    if (req.method === "POST") {
        req.body = JSON.parse(req.body);

        if (req.body.nickname === invalidNickname) {
            res.status(400).send("error");
        } else {
            res.status(200).send("ok");
        }
    }
}
