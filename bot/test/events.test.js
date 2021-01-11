const events = require('./../src/bots/events');

test("getType Wikipedia to slackInput", () => {
    let slackInput = "<userID> [Wikipedia] Batman";
    let type = events.getType(slackInput);
    expect(type).toMatch("Wikipedia");
});

test("getText return -1 to slackInput", () => {
    let slackInput = "<userID> [Wikipedia Batman";
    let text = events.getText(slackInput);
    expect(text).toEqual(-1);
});

test("getTime return 1 to slackInput", () => {
    let slackInput = "{-1} <userID> [Wikipedia Batman]";
    let text = events.getTime(slackInput);
    expect(text).toEqual(1);
});