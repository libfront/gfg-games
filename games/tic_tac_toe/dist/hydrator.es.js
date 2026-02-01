const s = (n) => new Promise((t, r) => {
  const e = document.createElement("script");
  e.src = n, e.onload = t, e.onerror = r, document.body.appendChild(e);
}), d = async (n) => ({
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
    return (async (o) => {
      await s(`${((a) => (location.host.includes("localhost") && (a = a.replace("/src", "/")), a))(n.f.path("/script/game.js"))}`), r?.add({ $d: t.data.curr.data, el: o });
    })(c), e;
  }
});
export {
  d as hydrator,
  d as index
};
