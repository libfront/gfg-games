const s = (n, e) => new Promise((a, r) => {
  const t = document.createElement("script");
  t.src = n, t.type = e?.type || "text/javascript", t.onload = a, t.onerror = r, document.body.appendChild(t);
}), l = async (n) => ({
  set: async (e, a) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const r = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          a?.change({ _$p: e });
        }
      }
    }, t = document.getElementById(n.f.name("root"));
    return (async (c) => {
      (() => {
        if (e.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(e.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })();
      const i = [
        //`/script/game.js`,
        //`/gameanalytics.js`,
        {
          src: "/rowdy2_7_customPreloader.js",
          opt: {}
        }
      ];
      for (const o of i)
        await s(`${((d) => (location.host.includes("localhost") && (d = d.replace("/src", "")), d))(n.f.path(o.src))}`, o.opt);
      window.addEventListener("touchmove", function(o) {
        o.preventDefault();
      }, {
        capture: !1,
        passive: !1
      }), typeof window.devicePixelRatio < "u" && window.devicePixelRatio > 2 && document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=" + 2 / window.devicePixelRatio + ", user-scalable=no"), window.lime.embed("rowdy2_7_customPreloader", "content", 640, 360), a?.add({ $d: e.data.curr.data, el: c });
    })(t), r;
  }
});
export {
  l as hydrator,
  l as index
};
