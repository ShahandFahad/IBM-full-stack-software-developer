module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    return new Date(aestTime);
}
