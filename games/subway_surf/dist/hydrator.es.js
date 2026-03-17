const l = (o, e) => new Promise((r, n) => {
  const t = document.createElement("script");
  t.src = o, t.type = e?.type || "text/javascript", t.onload = r, t.onerror = n, document.body.appendChild(t);
}), i = async (o) => ({
  set: async (e, r) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const n = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          r?.change({ _$p: e });
        }
      }
    }, t = document.getElementById(o.f.name("root"));
    return (async (a) => {
      (() => {
        if (e.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(e.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })(), window.NOSW = !0, window.GAME_CONFIG = {
        pokiSdkDebug: !1,
        //false
        leaderboard: "mockup",
        bundlesPath: "./bundles"
      }, delete Array.prototype.group, window.sdk = {
        showBanner: () => {
          console.log("--showBanner");
        }
      }, window.enableADS = !1;
      const d = [
        //`/script/game.js`,
        {
          src: "/js/games_lib/ludiAdapter.js",
          opt: {}
        },
        {
          src: "/js/boot.js",
          opt: {
            //type:`module`
          }
        }
      ];
      for (const c of d)
        await l(`${((s) => (location.host.includes("localhost") && (s = s.replace("/src", "")), s))(o.f.path(c.src))}`, c.opt);
      r?.add({ $d: e.data.curr.data, el: a });
    })(t), n;
  }
});
export {
  i as hydrator,
  i as index
};
