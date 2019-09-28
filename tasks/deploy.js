const s3 = require("s3");
const s3Options = require("../s3-options.json");
const { dest } = require("./paths");
const client = s3.createClient({ s3Options });
module.exports = done => {
    const uploader = client.uploadDir({
        localDir: dest,
        s3Params: {
            Bucket: "keesey-comics.com",
            Prefix: "",
        },
    });
    uploader.on("progress", () => console.log(`[UPLOAD] ${uploader.progressAmount}/${uploader.progressTotal}`));
    uploader.on("error", error => done(error || new Error()));
    uploader.on("end", () => done());
};
