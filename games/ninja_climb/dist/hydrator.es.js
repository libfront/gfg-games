const c = (t) => new Promise((e, n) => {
  const a = document.createElement("script");
  a.src = t, a.onload = e, a.onerror = n, document.body.appendChild(a);
}), s = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const n = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _$p: e,
            custom: {}
          });
        }
      }
    }, a = document.getElementById(t.f.name("root"));
    return (async (o) => {
      (() => {
        if (e.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(e.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })(), await c(`${((r) => (location.host.includes("localhost") && (r = r.replace("/src", "/")), r))(t.f.path("/script/game.js"))}`), t.f.call("msg", {
        type: "add",
        _p: t,
        _$p: e,
        custom: {},
        //set..
        $d: e.data.curr.data,
        el: o
      });
    })(a), n;
  }
});
export {
  s as hydrator,
  s as index
};
