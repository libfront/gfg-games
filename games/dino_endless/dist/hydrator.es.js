const c = async (a) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          a.f.call("msg", {
            type: "change",
            _p: a,
            _$p: t,
            custom: {}
          });
        }
      }
    }, r = document.getElementById(a.f.name("root"));
    return (async (e) => {
      (() => {
        if (t.data.curr.data.security.allow_domain.indexOf(location.hostname) == -1 || location.hostname != "localhost" && location.href.indexOf(t.data.curr.data.security.key) == -1)
          throw new Error("not allowed!");
      })();
      const { game: o } = await import("./game-DFbS_zXR.js");
      o().run(), a.f.call("msg", {
        type: "add",
        _p: a,
        _$p: t,
        custom: {},
        //set..
        $d: t.data.curr.data,
        el: e
      });
    })(r), n;
  }
});
export {
  c as hydrator,
  c as index
};
