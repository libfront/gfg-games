function n(i, o) {
  o === void 0 && (o = {});
  var a = o.insertAt;
  if (!(!i || typeof document > "u")) {
    var t = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
    e.type = "text/css", a === "top" && t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e), e.styleSheet ? e.styleSheet.cssText = i : e.appendChild(document.createTextNode(i));
  }
}
const r = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.block{display:block}.contents{display:contents}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.resize{resize:both}.border{border-style:var(--tw-border-style);border-width:1px}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}', l = 'html,body{margin:0;padding:0;position:relative;font-family:Arial;width:100%;background-color:#000;touch-action:none;overflow:hidden}#webgl{background-color:transparent;background:transparent;position:absolute;left:0;top:0;width:100%;height:100%}#game{background-color:transparent;background:transparent;position:absolute;left:0;top:0}#ajaxbar{background:url(media/graphics/loading/ajax-loader.gif) center no-repeat}#canvas{background-color:transparent;position:absolute;left:0;top:0;width:100%;height:100%;-ms-interpolation-mode:nearest-neighbor;-webkit-transform:scale3d(1,1,1);filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="sample_600x600.png",sizingMethod="scale");background:none!important}#webglcanvas{background-color:transparent;position:absolute;left:0;top:0;width:100%;height:100%;-ms-interpolation-mode:nearest-neighbor;-webkit-transform:scale3d(1,1,1)}#orientate{position:absolute;float:left;width:100%;height:100%;top:0;left:0;z-index:10002;display:none}#orientate img{position:absolute;float:left;width:100%;height:100%}.play{position:absolute;float:left;width:100%;height:100%;z-index:1000;background-color:#fff;left:0;top:0;display:none}.play img{position:absolute;float:left;width:100%;height:100%;z-index:1000;left:0;top:0}#nohtml5{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;z-index:1002;visibility:hidden}#nohtml5 img{position:absolute;width:100%;height:100%}#nohtml5-bubble{position:absolute;bottom:20px;left:50px;width:380px;height:100px;z-index:1002;color:#000;background:#ffffffbf;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}#nohtml5-text{padding:10px}.horizontal-seperator{height:10px;width:100%}#MobileAdInGamePreroll,#MobileAdInGamePreroll2,#MobileAdInGamePreroll3{position:absolute;float:left;min-width:320px;z-index:10000;left:0;top:0;display:none;background:#000000b3;-webkit-transition:all .6s ease;-moz-transition:all .6s ease;-o-transition:all .6s ease}#MobileAdInGamePreroll-Box,#MobileAdInGamePreroll2-Box,#MobileAdInGamePreroll3-Box{z-index:10000;position:absolute;width:302px;height:250px}#MobileAdInGamePreroll-Box-Body,#MobileAdInGamePreroll2-Box-Body,#MobileAdInGamePreroll3-Box-Body{z-index:10000;position:relative;background:transparent}#MobileAdInGamePreroll-Box-Footer,#MobileAdInGamePreroll2-Box-Footer,#MobileAdInGamePreroll3-Box-Footer{z-index:10000;position:relative;font-size:11px;height:20px;color:#fff;background:transparent}#MobileAdInGamePreroll-Box-Header,#MobileAdInGamePreroll2-Box-Header,#MobileAdInGamePreroll3-Box-Header{z-index:10000;position:relative;margin-top:-2px;font-size:11px;height:20px;text-align:right;color:#fff;background:transparent}#MobileAdInGamePreroll-Box-Close,#MobileAdInGamePreroll2-Box-Close,#MobileAdInGamePreroll3-Box-Close{position:absolute;z-index:10005;background-image:url(media/graphics/generic-ad/light/close-button.png);background-repeat:no-repeat;width:22px;height:22px;top:-4px;margin-right:-1px;display:none}#MobileAdInGameHeader,#MobileAdInGameHeader2,#MobileAdInGameHeader3,#MobileAdInGameFooter,#MobileAdInGameFooter2,#MobileAdInGameFooter3{display:none;position:absolute;background:transparent}#MobileAdInGameEnd,#MobileAdInGameEnd2,#MobileAdInGameEnd3{position:absolute;float:left;min-width:320px;z-index:10000;left:0;top:0;display:none;background:#000000b3;-webkit-transition:all .6s ease;-moz-transition:all .6s ease;-o-transition:all .6s ease}#MobileAdInGameEnd-Box,#MobileAdInGameEnd2-Box,#MobileAdInGameEnd3-Box{z-index:10000;position:absolute;width:302px;height:250px}#MobileAdInGameEnd-Box-Body,#MobileAdInGameEnd2-Box-Body,#MobileAdInGameEnd3-Box-Body{z-index:10000;position:relative;background:transparent}#MobileAdInGameEnd-Box-Footer,#MobileAdInGameEnd2-Box-Footer,#MobileAdInGameEnd3-Box-Footer{z-index:10000;position:relative;font-size:11px;height:20px;color:#fff;background:transparent}#MobileAdInGameEnd-Box-Header,#MobileAdInGameEnd2-Box-Header,#MobileAdInGameEnd3-Box-Header{z-index:10000;position:relative;margin-top:-2px;font-size:11px;height:20px;text-align:right;color:#fff;background:transparent}#MobileAdInGameEnd-Box-Close,#MobileAdInGameEnd2-Box-Close,#MobileAdInGameEnd3-Box-Close{position:absolute;z-index:10005;background-image:url(media/graphics/generic-ad/light/close-button.png);background-repeat:no-repeat;width:22px;height:22px;top:-4px;margin-right:-1px;display:none}.ig_debug{position:fixed;left:0;bottom:0;width:100%;background-color:#000;border-top:2px solid #f57401;font-size:12px;color:#fff;z-index:1000;-webkit-user-select:none;display:none}.ig_debug_panel_menu{height:28px;background:#222;background:-webkit-gradient(linear,left bottom,left top,color-stop(0,#000000),color-stop(1,#333));background:-moz-linear-gradient(center bottom,#000000 0%,#333 100%);background:-o-linear-gradient(#333,#000000)}.ig_debug_panel_menu div{float:left;height:22px;padding:6px 8px 0;border-right:1px solid #333}.ig_debug_panel_menu .ig_debug_head{font-weight:700;color:#888}.ig_debug_menu_item:hover{cursor:pointer;background-color:#fff;color:#000}.ig_debug_menu_item.active,.ig_debug_menu_item.active:hover{background-color:#000;color:#fff}.ig_debug_stats{position:absolute;right:0;top:0;float:right;color:#888;border-left:1px solid #333;text-align:right}.ig_debug_stats span{width:3em;display:inline-block;color:#fff!important;margin-right:.2em;margin-left:.3em;font-family:bitstream vera sans mono,courier new;white-space:nowrap}.ig_debug_panel{height:152px;overflow:auto;position:relative}.ig_debug_panel canvas{border-bottom:1px solid #444}.ig_debug_panel .ig_debug_panel{padding:8px;height:auto;float:left;background-color:#000;border-right:2px solid #222}.ig_debug_option{padding:2px 0 2px 8px;cursor:pointer}.ig_debug_option:first-child{margin-top:8px}.ig_debug_option:hover{background-color:#111}.ig_debug_graph_mark{position:absolute;color:#888;left:4px;font-size:10px;margin-top:-12px}.ig_debug_legend{color:#ccc}.ig_debug_label_mark{display:inline-block;width:10px;height:10px;margin-right:4px;-webkit-transition:.1s linear;-moz-transition:.1s linear}.ig_debug_legend_color{display:inline-block;width:6px;height:10px;margin-right:4px;margin-left:16px}.ig_debug_legend_number{width:3em;display:inline-block;text-align:right;font-family:bitstream vera sans mono,courier new;color:#fff;margin-right:.2em}.ig_debug_map_container{position:relative;overflow:hidden;border:1px solid #888}.ig_debug_map_container canvas{position:absolute}.ig_debug_map_screen{position:absolute;border:1px solid #f0f}';
n(r);
n(l);
const d = async (i) => ({
  set: async (o, a) => (console.log(`--renderer [${o.data.curr.type}]`), console.log(i.f.path("")), {
    r: `
                <div class="${i.f.name("text")}" id="${i.f.name("root")}"  >
                  

                  

                </div>


               


                <div id="ajaxbar">
        <div id="game"><canvas id="canvas"></canvas></div>
        <div id="webgl"><canvas id="webglcanvas"></canvas></div>

        <div id="orientate"><img src="media/graphics/orientate/landscape.jpg" /></div>
        <div id="play" class="play" onclick=""></div>
        <!--<img id="scrollDown" width="220" height="277"></img>-->

        <!-- SECTION GENERATED BY CODE -->
        <div id="MobileAdInGamePreroll">
            <div id="MobileAdInGamePreroll-Box">
                <div id="MobileAdInGamePreroll-Box-Header"></div>
                <a id="MobileAdInGamePreroll-Box-Close" onclick="MobileAdInGamePreroll.Close();"></a>
                <div id="MobileAdInGamePreroll-Box-Body">
                    <center>
                        <!-- MobileAdInGamePreroll -->
                        <!-- AdTest-MobileAdInGamePreroll -->
                        <img src="https://cdn-factory.marketjs.com/generic.png">
                        <!-- EndOfAdTest-MobileAdInGamePreroll -->
                    </center>
                </div>
                <div id='MobileAdInGamePreroll-Box-Footer'></div>
            </div>
        </div>

        <!-- SECOND AD (ROTATION) -->
        <div id="MobileAdInGamePreroll2">
            <div id="MobileAdInGamePreroll2-Box">
                <div id="MobileAdInGamePreroll2-Box-Header"></div>
                <a id="MobileAdInGamePreroll2-Box-Close" onclick="MobileAdInGamePreroll.Close();"></a>
                <div id="MobileAdInGamePreroll2-Box-Body">
                    <center>
                        <!-- MobileAdInGamePreroll2 -->
                    </center>
                </div>
                <div id='MobileAdInGamePreroll2-Box-Footer'></div>
            </div>
        </div>

        <!-- THIRD AD (ROTATION) -->
        <div id="MobileAdInGamePreroll3">
            <div id="MobileAdInGamePreroll3-Box">
                <div id="MobileAdInGamePreroll3-Box-Header"></div>
                <a id="MobileAdInGamePreroll3-Box-Close" onclick="MobileAdInGamePreroll.Close();"></a>
                <div id="MobileAdInGamePreroll3-Box-Body">
                    <center>
                        <!-- MobileAdInGamePreroll3 -->
                    </center>
                </div>
                <div id='MobileAdInGamePreroll3-Box-Footer'></div>
            </div>
        </div>

        <div id="MobileAdInGameHeader">
            <!-- MobileAdInGameHeader -->
        </div>
        <div id="MobileAdInGameHeader2">
            <!-- MobileAdInGameHeader2 -->
        </div>
        <div id="MobileAdInGameHeader3">
            <!-- MobileAdInGameHeader3 -->
        </div>

        <div id="MobileAdInGameFooter">
            <!-- MobileAdInGameFooter -->
        </div>
        <div id="MobileAdInGameFooter2">
            <!-- MobileAdInGameFooter2 -->
        </div>
        <div id="MobileAdInGameFooter3">
            <!-- MobileAdInGameFooter3 -->
        </div>


        <div id="MobileAdInGameEnd">
            <div id="MobileAdInGameEnd-Box">
                <div id="MobileAdInGameEnd-Box-Header"></div>
                <a id="MobileAdInGameEnd-Box-Close" onclick="MobileAdInGameEnd.Close();"></a>
                <div id="MobileAdInGameEnd-Box-Body">
                    <center>
                        <!-- MobileAdInGameEnd -->
                    </center>
                </div>
                <div id='MobileAdInGameEnd-Box-Footer'></div>
            </div>
        </div>

        <!-- SECOND AD (ROTATION) -->
        <div id="MobileAdInGameEnd2">
            <div id="MobileAdInGameEnd2-Box">
                <div id="MobileAdInGameEnd2-Box-Header"></div>
                <a id="MobileAdInGameEnd2-Box-Close" onclick="MobileAdInGameEnd.Close();"></a>
                <div id="MobileAdInGameEnd2-Box-Body">
                    <center>
                        <!-- MobileAdInGameEnd2 -->
                    </center>
                </div>
                <div id='MobileAdInGameEnd2-Box-Footer'></div>
            </div>
        </div>

        <!-- THIRD AD (ROTATION) -->
        <div id="MobileAdInGameEnd3">
            <div id="MobileAdInGameEnd3-Box">
                <div id="MobileAdInGameEnd3-Box-Header"></div>
                <a id="MobileAdInGameEnd3-Box-Close" onclick="MobileAdInGameEnd.Close();"></a>
                <div id="MobileAdInGameEnd3-Box-Body">
                    <center>
                        <!-- MobileAdInGameEnd3 -->
                    </center>
                </div>
                <div id='MobileAdInGameEnd3-Box-Footer'></div>
            </div>
        </div>

        <!-- END OF SECTION GENERATED BY CODE -->

    </div>


                






                `,
    head: ` 

                <!--base href="https://yourdomain.com/assets/"-->
                <!--base href='${i.f.path("")}'-->



                <!--link rel="stylesheet" type="text/css" href="/src/hydrator/src/game/game.css"-->
                

              
                `,
    style: (() => {
      let e = "";
      return e = `
                .${i.f.name("text")} {
                   background: transparent;
                }
                `, e;
    })()
  })
});
export {
  d as index,
  d as renderer
};
