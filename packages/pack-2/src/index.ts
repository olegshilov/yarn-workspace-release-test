console.log("init");

const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

(async function () {
  console.log("log before timeout");
  await timeout(5000);
  console.log("log after timeout");
})();
