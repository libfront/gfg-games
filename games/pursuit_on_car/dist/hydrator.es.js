const l = (t) => new Promise((e, a) => {
  const o = document.createElement("script");
  o.src = t, o.onload = e, o.onerror = a, document.body.appendChild(o);
}), d = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const a = {
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
    }, o = document.getElementById(t.f.name("root"));
    return (async (n) => {
      (() => {
        if (e.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(e.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })(), location.host.includes("localhost") ? window.baseUrl = `${t.f.path("/").replace("/src", "")}` : window.baseUrl = `${t.f.path("/")}`;
      const c = [
        "/script/game.js"
      ];
      for (const s of c)
        await l(`${((r) => (location.host.includes("localhost") && (r = r.replace("/src", "")), r))(t.f.path(s))}`);
      t.f.call("msg", {
        type: "add",
        _p: t,
        _$p: e,
        custom: {},
        //set..
        $d: e.data.curr.data,
        el: n
      });
    })(o), a;
  }
});
export {
  d as hydrator,
  d as index
};
