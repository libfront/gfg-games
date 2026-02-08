const d = (n) => new Promise((t, r) => {
  const e = document.createElement("script");
  e.src = n, e.onload = t, e.onerror = r, document.body.appendChild(e);
}), s = async (n) => ({
  set: async (t, r) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const e = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          r?.change({ _$p: t });
        }
      }
    }, c = document.getElementById(n.f.name("root"));
    return (async (a) => {
      (() => {
        if (t.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(t.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })(), await d(`${((o) => (location.host.includes("localhost") && (o = o.replace("/src", "/")), o))(n.f.path("/script/game.js"))}`), r?.add({ $d: t.data.curr.data, el: a });
    })(c), e;
  }
});
export {
  s as hydrator,
  s as index
};
