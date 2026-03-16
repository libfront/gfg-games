const i = (e) => new Promise((t, n) => {
  const r = document.createElement("script");
  r.src = e, r.onload = t, r.onerror = n, document.body.appendChild(r);
}), l = async (e) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    }, c = document.getElementById(e.f.name("root"));
    return (async (o) => {
      (() => {
        if (t.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(t.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })();
      const s = [
        //`/script/game.js`,
        //`/gameanalytics.js`,
        "/scripts/supportcheck.js",
        "/scripts/offlineclient.js",
        "/scripts/main.js",
        "/scripts/register-sw.js"
      ];
      for (const d of s)
        await i(`${((a) => (location.host.includes("localhost") && (a = a.replace("/src", "")), a))(e.f.path(d))}`);
      n?.add({ $d: t.data.curr.data, el: o });
    })(c), r;
  }
});
export {
  l as hydrator,
  l as index
};
