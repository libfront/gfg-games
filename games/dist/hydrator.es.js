const c = (r) => new Promise((t, n) => {
  const e = document.createElement("script");
  e.src = r, e.onload = t, e.onerror = n, document.body.appendChild(e);
}), d = async (r) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const e = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    }, o = document.getElementById(r.f.name("root"));
    return (async (a) => {
      await c("/script/game.js"), n?.add({ $d: t.data.curr.data, el: a });
    })(o), e;
  }
});
export {
  d as hydrator,
  d as index
};
