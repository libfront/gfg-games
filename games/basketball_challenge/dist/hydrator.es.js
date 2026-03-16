const l = (r, t) => new Promise((o, n) => {
  const e = document.createElement("script");
  e.src = r, e.type = t?.type || "text/javascript", e.onload = o, e.onerror = n, document.body.appendChild(e);
}), i = async (r) => ({
  set: async (t, o) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          o?.change({ _$p: t });
        }
      }
    }, e = document.getElementById(r.f.name("root"));
    return (async (c) => {
      (() => {
        if (t.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(t.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })();
      const d = [
        //`/script/game.js`,
        //`/gameanalytics.js`,
        {
          src: "/scripts/supportcheck.js",
          opt: {}
        },
        {
          src: "/scripts/offlineclient.js",
          opt: {
            type: "module"
          }
        },
        {
          src: "/scripts/main.js",
          opt: {
            type: "module"
          }
        },
        {
          src: "/scripts/register-sw.js",
          opt: {
            type: "module"
          }
        }
      ];
      for (const a of d)
        await l(`${((s) => (location.host.includes("localhost") && (s = s.replace("/src", "")), s))(r.f.path(a.src))}`, a.opt);
      o?.add({ $d: t.data.curr.data, el: c });
    })(e), n;
  }
});
export {
  i as hydrator,
  i as index
};
