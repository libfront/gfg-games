const d = (r) => new Promise((t, n) => {
  const e = document.createElement("script");
  e.src = r, e.onload = t, e.onerror = n, document.body.appendChild(e);
}), l = async (r) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const e = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    }, s = document.getElementById(r.f.name("root"));
    return (async (o) => {
      (() => {
        if (t.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(t.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })();
      const c = [
        //`/script/game.js`,
        "/gameanalytics.js",
        "/scripts/supportcheck.js",
        "/scripts/offlineclient.js",
        "/scripts/main.js",
        "/scripts/register-sw.js"
      ];
      for (const i of c)
        await d(`${((a) => (location.host.includes("localhost") && (a = a.replace("/src", "")), a))(r.f.path(i))}`);
      n?.add({ $d: t.data.curr.data, el: o });
    })(s), e;
  }
});
export {
  l as hydrator,
  l as index
};
