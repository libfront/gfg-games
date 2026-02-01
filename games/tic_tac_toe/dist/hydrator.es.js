const c = (n) => new Promise((t, r) => {
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
    }, o = document.getElementById(n.f.name("root"));
    return (async (a) => {
      await c(`${n.f.path("/script/game.js")}`), r?.add({ $d: t.data.curr.data, el: a });
    })(o), e;
  }
});
export {
  d as hydrator,
  d as index
};
