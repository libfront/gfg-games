const l = (t) => new Promise((e, n) => {
  const o = document.createElement("script");
  o.src = t, o.onload = e, o.onerror = n, document.body.appendChild(o);
}), d = async (t) => ({
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
    }, o = document.getElementById(t.f.name("root"));
    return (async (r) => {
      (() => {
        if (e.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(e.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })();
      const c = [
        "/script/game.js"
      ];
      for (const s of c)
        await l(`${((a) => (location.host.includes("localhost") && (a = a.replace("/src", "")), a))(t.f.path(s))}`);
      t.f.call("msg", {
        type: "add",
        _p: t,
        _$p: e,
        custom: {},
        //set..
        $d: e.data.curr.data,
        el: r
      });
    })(o), n;
  }
});
export {
  d as hydrator,
  d as index
};
