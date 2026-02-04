const W = () => {
  (function() {
    function e(t, i) {
      if (e.instance_)
        return e.instance_;
      e.instance_ = this, this.outerContainerEl = document.querySelector(t), this.containerEl = null, this.snackbarEl = null, this.detailsButton = this.outerContainerEl.querySelector("#details-button"), this.config = i || e.config, this.dimensions = e.defaultDimensions, this.canvas = null, this.canvasCtx = null, this.tRex = null, this.distanceMeter = null, this.distanceRan = 0, this.highestScore = 0, this.time = 0, this.runningTime = 0, this.msPerFrame = 1e3 / y, this.currentSpeed = this.config.SPEED, this.obstacles = [], this.activated = !1, this.playing = !1, this.crashed = !1, this.paused = !1, this.inverted = !1, this.invertTimer = 0, this.resizeTimerId_ = null, this.playCount = 0, this.audioBuffer = null, this.soundFx = {}, this.audioContext = null, this.images = {}, this.imagesLoaded = 0, this.isDisabled() ? this.setupDisabledRunner() : this.loadImages();
    }
    window.Runner = e;
    var P = 600, y = 60, g = window.devicePixelRatio > 1, x = /iPad|iPhone|iPod/.test(window.navigator.platform), C = /Android/.test(window.navigator.userAgent) || x;
    e.config = {
      ACCELERATION: 1e-3,
      BG_CLOUD_SPEED: 0.2,
      BOTTOM_PAD: 10,
      CLEAR_TIME: 3e3,
      CLOUD_FREQUENCY: 0.5,
      GAMEOVER_CLEAR_TIME: 750,
      GAP_COEFFICIENT: 0.6,
      GRAVITY: 0.6,
      INITIAL_JUMP_VELOCITY: 12,
      INVERT_FADE_DURATION: 12e3,
      INVERT_DISTANCE: 700,
      MAX_BLINK_COUNT: 3,
      MAX_CLOUDS: 6,
      MAX_OBSTACLE_LENGTH: 3,
      MAX_OBSTACLE_DUPLICATION: 2,
      MAX_SPEED: 13,
      MIN_JUMP_HEIGHT: 35,
      MOBILE_SPEED_COEFFICIENT: 1.2,
      RESOURCE_TEMPLATE_ID: "audio-resources",
      SPEED: 6,
      SPEED_DROP_COEFFICIENT: 3,
      ARCADE_MODE_INITIAL_TOP_POSITION: 35,
      ARCADE_MODE_TOP_POSITION_PERCENT: 0.1
    }, e.defaultDimensions = {
      WIDTH: P,
      HEIGHT: 150
    }, e.classes = {
      ARCADE_MODE: "arcade-mode",
      CANVAS: "runner-canvas",
      CONTAINER: "runner-container",
      CRASHED: "crashed",
      ICON: "icon-offline",
      INVERTED: "inverted",
      SNACKBAR: "snackbar",
      SNACKBAR_SHOW: "snackbar-show",
      TOUCH_CONTROLLER: "controller"
    }, e.spriteDefinition = {
      LDPI: {
        CACTUS_LARGE: { x: 332, y: 2 },
        CACTUS_SMALL: { x: 228, y: 2 },
        CLOUD: { x: 86, y: 2 },
        HORIZON: { x: 2, y: 54 },
        MOON: { x: 484, y: 2 },
        PTERODACTYL: { x: 134, y: 2 },
        RESTART: { x: 2, y: 2 },
        TEXT_SPRITE: { x: 655, y: 2 },
        TREX: { x: 848, y: 2 },
        STAR: { x: 645, y: 2 }
      },
      HDPI: {
        CACTUS_LARGE: { x: 652, y: 2 },
        CACTUS_SMALL: { x: 446, y: 2 },
        CLOUD: { x: 166, y: 2 },
        HORIZON: { x: 2, y: 104 },
        MOON: { x: 954, y: 2 },
        PTERODACTYL: { x: 260, y: 2 },
        RESTART: { x: 2, y: 2 },
        TEXT_SPRITE: { x: 1294, y: 2 },
        TREX: { x: 1678, y: 2 },
        STAR: { x: 1276, y: 2 }
      }
    }, e.sounds = {
      BUTTON_PRESS: "offline-sound-press",
      HIT: "offline-sound-hit",
      SCORE: "offline-sound-reached"
    }, e.keycodes = {
      JUMP: { 38: 1, 32: 1 },
      // Up, spacebar
      DUCK: { 40: 1 },
      // Down
      RESTART: { 13: 1 }
      // Enter
    }, e.events = {
      ANIM_END: "webkitAnimationEnd",
      CLICK: "click",
      KEYDOWN: "keydown",
      KEYUP: "keyup",
      MOUSEDOWN: "mousedown",
      MOUSEUP: "mouseup",
      RESIZE: "resize",
      TOUCHEND: "touchend",
      TOUCHSTART: "touchstart",
      VISIBILITY: "visibilitychange",
      BLUR: "blur",
      FOCUS: "focus",
      LOAD: "load"
    }, e.prototype = {
      /**
       * Whether the easter egg has been disabled. CrOS enterprise enrolled devices.
       * @return {boolean}
       */
      isDisabled: function() {
        return !1;
      },
      /**
       * For disabled instances, set up a snackbar with the disabled message.
       */
      setupDisabledRunner: function() {
        this.containerEl = document.createElement("div"), this.containerEl.className = e.classes.SNACKBAR, this.containerEl.textContent = loadTimeData.getValue("disabledEasterEgg"), this.outerContainerEl.appendChild(this.containerEl), document.addEventListener(e.events.KEYDOWN, (function(t) {
          e.keycodes.JUMP[t.keyCode] && (this.containerEl.classList.add(e.classes.SNACKBAR_SHOW), document.querySelector(".icon").classList.add("icon-disabled"));
        }).bind(this));
      },
      /**
       * Setting individual settings for debugging.
       * @param {string} setting
       * @param {*} value
       */
      updateConfigSetting: function(t, i) {
        if (t in this.config && i != null)
          switch (this.config[t] = i, t) {
            case "GRAVITY":
            case "MIN_JUMP_HEIGHT":
            case "SPEED_DROP_COEFFICIENT":
              this.tRex.config[t] = i;
              break;
            case "INITIAL_JUMP_VELOCITY":
              this.tRex.setJumpVelocity(i);
              break;
            case "SPEED":
              this.setSpeed(i);
              break;
          }
      },
      /**
       * Cache the appropriate image sprite from the page and get the sprite sheet
       * definition.
       */
      loadImages: function() {
        g ? (e.imageSprite = document.getElementById("offline-resources-2x"), this.spriteDef = e.spriteDefinition.HDPI) : (e.imageSprite = document.getElementById("offline-resources-1x"), this.spriteDef = e.spriteDefinition.LDPI), e.imageSprite.complete ? this.init() : e.imageSprite.addEventListener(
          e.events.LOAD,
          this.init.bind(this)
        );
      },
      /**
       * Load and decode base 64 encoded sounds.
       */
      loadSounds: function() {
        if (!x) {
          this.audioContext = new AudioContext();
          var t = document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;
          for (var i in e.sounds) {
            var s = t.getElementById(e.sounds[i]).src;
            s = s.substr(s.indexOf(",") + 1);
            var n = M(s);
            this.audioContext.decodeAudioData(n, (function(a, h) {
              this.soundFx[a] = h;
            }).bind(this, i));
          }
        }
      },
      /**
       * Sets the game speed. Adjust the speed accordingly if on a smaller screen.
       * @param {number} opt_speed
       */
      setSpeed: function(t) {
        var i = t || this.currentSpeed;
        if (this.dimensions.WIDTH < P) {
          var s = i * this.dimensions.WIDTH / P * this.config.MOBILE_SPEED_COEFFICIENT;
          this.currentSpeed = s > i ? i : s;
        } else t && (this.currentSpeed = t);
      },
      /**
       * Game initialiser.
       */
      init: function() {
        document.querySelector("." + e.classes.ICON).style.visibility = "hidden", this.adjustDimensions(), this.setSpeed(), this.containerEl = document.createElement("div"), this.containerEl.className = e.classes.CONTAINER, this.canvas = w(
          this.containerEl,
          this.dimensions.WIDTH,
          this.dimensions.HEIGHT,
          e.classes.PLAYER
        ), this.canvasCtx = this.canvas.getContext("2d"), this.canvasCtx.fillStyle = "#f7f7f7", this.canvasCtx.fill(), e.updateCanvasScaling(this.canvas), this.horizon = new A(
          this.canvas,
          this.spriteDef,
          this.dimensions,
          this.config.GAP_COEFFICIENT
        ), this.distanceMeter = new u(
          this.canvas,
          this.spriteDef.TEXT_SPRITE,
          this.dimensions.WIDTH
        ), this.tRex = new o(this.canvas, this.spriteDef.TREX), this.outerContainerEl.appendChild(this.containerEl), C && this.createTouchController(), this.startListening(), this.update(), window.addEventListener(
          e.events.RESIZE,
          this.debounceResize.bind(this)
        );
      },
      /**
       * Create the touch controller. A div that covers whole screen.
       */
      createTouchController: function() {
        this.touchController = document.createElement("div"), this.touchController.className = e.classes.TOUCH_CONTROLLER, this.outerContainerEl.appendChild(this.touchController);
      },
      /**
       * Debounce the resize event.
       */
      debounceResize: function() {
        this.resizeTimerId_ || (this.resizeTimerId_ = setInterval(this.adjustDimensions.bind(this), 250));
      },
      /**
       * Adjust game space dimensions on resize.
       */
      adjustDimensions: function() {
        clearInterval(this.resizeTimerId_), this.resizeTimerId_ = null;
        var t = window.getComputedStyle(this.outerContainerEl), i = Number(t.paddingLeft.substr(
          0,
          t.paddingLeft.length - 2
        ));
        this.dimensions.WIDTH = this.outerContainerEl.offsetWidth - i * 2, this.dimensions.WIDTH = Math.min(P, this.dimensions.WIDTH), this.activated && this.setArcadeModeContainerScale(), this.canvas && (this.canvas.width = this.dimensions.WIDTH, this.canvas.height = this.dimensions.HEIGHT, e.updateCanvasScaling(this.canvas), this.distanceMeter.calcXPos(this.dimensions.WIDTH), this.clearCanvas(), this.horizon.update(0, 0, !0), this.tRex.update(0), this.playing || this.crashed || this.paused ? (this.containerEl.style.width = this.dimensions.WIDTH + "px", this.containerEl.style.height = this.dimensions.HEIGHT + "px", this.distanceMeter.update(0, Math.ceil(this.distanceRan)), this.stop()) : this.tRex.draw(0, 0), this.crashed && this.gameOverPanel && (this.gameOverPanel.updateDimensions(this.dimensions.WIDTH), this.gameOverPanel.draw()));
      },
      /**
       * Play the game intro.
       * Canvas container width expands out to the full width.
       */
      playIntro: function() {
        if (!this.activated && !this.crashed) {
          this.playingIntro = !0, this.tRex.playingIntro = !0;
          var t = "@-webkit-keyframes intro { from { width:" + o.config.WIDTH + "px }to { width: " + this.dimensions.WIDTH + "px }}", i = document.createElement("style");
          i.innerHTML = t, document.head.appendChild(i), this.containerEl.addEventListener(
            e.events.ANIM_END,
            this.startGame.bind(this)
          ), this.containerEl.style.webkitAnimation = "intro .4s ease-out 1 both", this.containerEl.style.width = this.dimensions.WIDTH + "px", this.playing = !0, this.activated = !0;
        } else this.crashed && this.restart();
      },
      /**
       * Update the game status to started.
       */
      startGame: function() {
        this.setArcadeMode(), this.runningTime = 0, this.playingIntro = !1, this.tRex.playingIntro = !1, this.containerEl.style.webkitAnimation = "", this.playCount++, document.addEventListener(
          e.events.VISIBILITY,
          this.onVisibilityChange.bind(this)
        ), window.addEventListener(
          e.events.BLUR,
          this.onVisibilityChange.bind(this)
        ), window.addEventListener(
          e.events.FOCUS,
          this.onVisibilityChange.bind(this)
        );
      },
      clearCanvas: function() {
        this.canvasCtx.clearRect(
          0,
          0,
          this.dimensions.WIDTH,
          this.dimensions.HEIGHT
        );
      },
      /**
       * Update the game frame and schedules the next one.
       */
      update: function() {
        this.updatePending = !1;
        var t = I(), i = t - (this.time || t);
        if (this.time = t, this.playing) {
          this.clearCanvas(), this.tRex.jumping && this.tRex.updateJump(i), this.runningTime += i;
          var s = this.runningTime > this.config.CLEAR_TIME;
          this.tRex.jumpCount == 1 && !this.playingIntro && this.playIntro(), this.playingIntro ? this.horizon.update(0, this.currentSpeed, s) : (i = this.activated ? i : 0, this.horizon.update(
            i,
            this.currentSpeed,
            s,
            this.inverted
          ));
          var n = s && U(this.horizon.obstacles[0], this.tRex);
          n ? this.gameOver() : (this.distanceRan += this.currentSpeed * i / this.msPerFrame, this.currentSpeed < this.config.MAX_SPEED && (this.currentSpeed += this.config.ACCELERATION));
          var a = this.distanceMeter.update(
            i,
            Math.ceil(this.distanceRan)
          );
          if (a && this.playSound(this.soundFx.SCORE), this.invertTimer > this.config.INVERT_FADE_DURATION)
            this.invertTimer = 0, this.invertTrigger = !1, this.invert();
          else if (this.invertTimer)
            this.invertTimer += i;
          else {
            var h = this.distanceMeter.getActualDistance(Math.ceil(this.distanceRan));
            h > 0 && (this.invertTrigger = !(h % this.config.INVERT_DISTANCE), this.invertTrigger && this.invertTimer === 0 && (this.invertTimer += i, this.invert()));
          }
        }
        (this.playing || !this.activated && this.tRex.blinkCount < e.config.MAX_BLINK_COUNT) && (this.tRex.update(i), this.scheduleNextUpdate());
      },
      /**
       * Event handler.
       */
      handleEvent: function(t) {
        return (function(i, s) {
          switch (i) {
            case s.KEYDOWN:
            case s.TOUCHSTART:
            case s.MOUSEDOWN:
              this.onKeyDown(t);
              break;
            case s.KEYUP:
            case s.TOUCHEND:
            case s.MOUSEUP:
              this.onKeyUp(t);
              break;
          }
        }).bind(this)(t.type, e.events);
      },
      /**
       * Bind relevant key / mouse / touch listeners.
       */
      startListening: function() {
        document.addEventListener(e.events.KEYDOWN, this), document.addEventListener(e.events.KEYUP, this), C ? (this.touchController.addEventListener(e.events.TOUCHSTART, this), this.touchController.addEventListener(e.events.TOUCHEND, this), this.containerEl.addEventListener(e.events.TOUCHSTART, this)) : (document.addEventListener(e.events.MOUSEDOWN, this), document.addEventListener(e.events.MOUSEUP, this));
      },
      /**
       * Remove all listeners.
       */
      stopListening: function() {
        document.removeEventListener(e.events.KEYDOWN, this), document.removeEventListener(e.events.KEYUP, this), C ? (this.touchController.removeEventListener(e.events.TOUCHSTART, this), this.touchController.removeEventListener(e.events.TOUCHEND, this), this.containerEl.removeEventListener(e.events.TOUCHSTART, this)) : (document.removeEventListener(e.events.MOUSEDOWN, this), document.removeEventListener(e.events.MOUSEUP, this));
      },
      /**
       * Process keydown.
       * @param {Event} e
       */
      onKeyDown: function(t) {
        if (C && this.playing && t.preventDefault(), t.target != this.detailsButton) {
          if (!this.crashed && (e.keycodes.JUMP[t.keyCode] || t.type == e.events.TOUCHSTART)) {
            if (!this.playing) {
              this.loadSounds(), this.playing = !0, this.update();
              var i = document.getElementById("messageBox");
              i.style.visibility = "hidden", window.errorPageController && errorPageController.trackEasterEgg();
            }
            !this.tRex.jumping && !this.tRex.ducking && (this.playSound(this.soundFx.BUTTON_PRESS), this.tRex.startJump(this.currentSpeed));
          }
          this.crashed && t.type == e.events.TOUCHSTART && t.currentTarget == this.containerEl && this.restart();
        }
        this.playing && !this.crashed && e.keycodes.DUCK[t.keyCode] && (t.preventDefault(), this.tRex.jumping ? this.tRex.setSpeedDrop() : !this.tRex.jumping && !this.tRex.ducking && this.tRex.setDuck(!0));
      },
      /**
       * Process key up.
       * @param {Event} e
       */
      onKeyUp: function(t) {
        var i = String(t.keyCode), s = e.keycodes.JUMP[i] || t.type == e.events.TOUCHEND || t.type == e.events.MOUSEDOWN;
        if (this.isRunning() && s)
          this.tRex.endJump();
        else if (e.keycodes.DUCK[i])
          this.tRex.speedDrop = !1, this.tRex.setDuck(!1);
        else if (this.crashed) {
          var n = I() - this.time;
          (e.keycodes.RESTART[i] || this.isLeftClickOnCanvas(t) || n >= this.config.GAMEOVER_CLEAR_TIME && e.keycodes.JUMP[i]) && this.restart();
        } else this.paused && s && (this.tRex.reset(), this.play());
      },
      /**
       * Returns whether the event was a left click on canvas.
       * On Windows right click is registered as a click.
       * @param {Event} e
       * @return {boolean}
       */
      isLeftClickOnCanvas: function(t) {
        return t.button != null && t.button < 2 && t.type == e.events.MOUSEUP && t.target == this.canvas;
      },
      /**
       * RequestAnimationFrame wrapper.
       */
      scheduleNextUpdate: function() {
        this.updatePending || (this.updatePending = !0, this.raqId = requestAnimationFrame(this.update.bind(this)));
      },
      /**
       * Whether the game is running.
       * @return {boolean}
       */
      isRunning: function() {
        return !!this.raqId;
      },
      /**
       * Game over state.
       */
      gameOver: function() {
        this.playSound(this.soundFx.HIT), N(200), this.stop(), this.crashed = !0, this.distanceMeter.acheivement = !1, this.tRex.update(100, o.status.CRASHED), this.gameOverPanel ? this.gameOverPanel.draw() : this.gameOverPanel = new H(
          this.canvas,
          this.spriteDef.TEXT_SPRITE,
          this.spriteDef.RESTART,
          this.dimensions
        ), this.distanceRan > this.highestScore && (this.highestScore = Math.ceil(this.distanceRan), this.distanceMeter.setHighScore(this.highestScore)), this.time = I();
      },
      stop: function() {
        this.playing = !1, this.paused = !0, cancelAnimationFrame(this.raqId), this.raqId = 0;
      },
      play: function() {
        this.crashed || (this.playing = !0, this.paused = !1, this.tRex.update(0, o.status.RUNNING), this.time = I(), this.update());
      },
      restart: function() {
        this.raqId || (this.playCount++, this.runningTime = 0, this.playing = !0, this.crashed = !1, this.distanceRan = 0, this.setSpeed(this.config.SPEED), this.time = I(), this.containerEl.classList.remove(e.classes.CRASHED), this.clearCanvas(), this.distanceMeter.reset(this.highestScore), this.horizon.reset(), this.tRex.reset(), this.playSound(this.soundFx.BUTTON_PRESS), this.invert(!0), this.update());
      },
      /**
       * Hides offline messaging for a fullscreen game only experience.
       */
      setArcadeMode() {
        document.body.classList.add(e.classes.ARCADE_MODE), this.setArcadeModeContainerScale();
      },
      /**
       * Sets the scaling for arcade mode.
       */
      setArcadeModeContainerScale() {
        const t = window.innerHeight, i = t / this.dimensions.HEIGHT, s = window.innerWidth / this.dimensions.WIDTH, n = Math.max(1, Math.min(i, s)), a = this.dimensions.HEIGHT * n, h = Math.ceil(Math.max(0, (t - a - e.config.ARCADE_MODE_INITIAL_TOP_POSITION) * e.config.ARCADE_MODE_TOP_POSITION_PERCENT)) * window.devicePixelRatio, c = n;
        this.containerEl.style.transform = "scale(" + c + ") translateY(" + h + "px)";
      },
      /**
       * Pause the game if the tab is not in focus.
       */
      onVisibilityChange: function(t) {
        document.hidden || document.webkitHidden || t.type == "blur" || document.visibilityState != "visible" ? this.stop() : this.crashed || (this.tRex.reset(), this.play());
      },
      /**
       * Play a sound.
       * @param {SoundBuffer} soundBuffer
       */
      playSound: function(t) {
        if (t) {
          var i = this.audioContext.createBufferSource();
          i.buffer = t, i.connect(this.audioContext.destination), i.start(0);
        }
      },
      /**
       * Inverts the current page / canvas colors.
       * @param {boolean} Whether to reset colors.
       */
      invert: function(t) {
        t ? (document.body.classList.toggle(e.classes.INVERTED, !1), this.invertTimer = 0, this.inverted = !1) : this.inverted = document.body.classList.toggle(
          e.classes.INVERTED,
          this.invertTrigger
        );
      }
    }, e.updateCanvasScaling = function(t, i, s) {
      var n = t.getContext("2d"), a = Math.floor(window.devicePixelRatio) || 1, h = Math.floor(n.webkitBackingStorePixelRatio) || 1, c = a / h;
      if (a !== h) {
        var T = i || t.width, m = s || t.height;
        return t.width = T * c, t.height = m * c, t.style.width = T + "px", t.style.height = m + "px", n.scale(c, c), !0;
      } else a == 1 && (t.style.width = t.width + "px", t.style.height = t.height + "px");
      return !1;
    };
    function E(t, i) {
      return Math.floor(Math.random() * (i - t + 1)) + t;
    }
    function N(t) {
      C && window.navigator.vibrate && window.navigator.vibrate(t);
    }
    function w(t, i, s, n) {
      var a = document.createElement("canvas");
      return a.className = n ? e.classes.CANVAS + " " + n : e.classes.CANVAS, a.width = i, a.height = s, t.appendChild(a), a;
    }
    function M(t) {
      for (var i = t.length / 4 * 3, s = atob(t), n = new ArrayBuffer(i), a = new Uint8Array(n), h = 0; h < i; h++)
        a[h] = s.charCodeAt(h);
      return a.buffer;
    }
    function I() {
      return x ? (/* @__PURE__ */ new Date()).getTime() : performance.now();
    }
    function H(t, i, s, n) {
      this.canvas = t, this.canvasCtx = t.getContext("2d"), this.canvasDimensions = n, this.textImgPos = i, this.restartImgPos = s, this.draw();
    }
    H.dimensions = {
      TEXT_X: 0,
      TEXT_Y: 13,
      TEXT_WIDTH: 191,
      TEXT_HEIGHT: 11,
      RESTART_WIDTH: 36,
      RESTART_HEIGHT: 32
    }, H.prototype = {
      /**
       * Update the panel dimensions.
       * @param {number} width New canvas width.
       * @param {number} opt_height Optional new canvas height.
       */
      updateDimensions: function(t, i) {
        this.canvasDimensions.WIDTH = t, i && (this.canvasDimensions.HEIGHT = i);
      },
      /**
       * Draw the panel.
       */
      draw: function() {
        var t = H.dimensions, i = this.canvasDimensions.WIDTH / 2, s = t.TEXT_X, n = t.TEXT_Y, a = t.TEXT_WIDTH, h = t.TEXT_HEIGHT, c = Math.round(i - t.TEXT_WIDTH / 2), T = Math.round((this.canvasDimensions.HEIGHT - 25) / 3), m = t.TEXT_WIDTH, S = t.TEXT_HEIGHT, v = t.RESTART_WIDTH, D = t.RESTART_HEIGHT, L = i - t.RESTART_WIDTH / 2, G = this.canvasDimensions.HEIGHT / 2;
        g && (n *= 2, s *= 2, a *= 2, h *= 2, v *= 2, D *= 2), s += this.textImgPos.x, n += this.textImgPos.y, this.canvasCtx.drawImage(
          e.imageSprite,
          s,
          n,
          a,
          h,
          c,
          T,
          m,
          S
        ), this.canvasCtx.drawImage(
          e.imageSprite,
          this.restartImgPos.x,
          this.restartImgPos.y,
          v,
          D,
          L,
          G,
          t.RESTART_WIDTH,
          t.RESTART_HEIGHT
        );
      }
    };
    function U(t, i, s) {
      e.defaultDimensions.WIDTH + t.xPos;
      var n = new d(
        i.xPos + 1,
        i.yPos + 1,
        i.config.WIDTH - 2,
        i.config.HEIGHT - 2
      ), a = new d(
        t.xPos + 1,
        t.yPos + 1,
        t.typeConfig.width * t.size - 2,
        t.typeConfig.height - 2
      );
      if (O(n, a))
        for (var h = t.collisionBoxes, c = i.ducking ? o.collisionBoxes.DUCKING : o.collisionBoxes.RUNNING, T = 0; T < c.length; T++)
          for (var m = 0; m < h.length; m++) {
            var S = R(c[T], n), v = R(h[m], a), D = O(S, v);
            if (D)
              return [S, v];
          }
      return !1;
    }
    function R(t, i) {
      return new d(
        t.x + i.x,
        t.y + i.y,
        t.width,
        t.height
      );
    }
    function O(t, i) {
      var s = !1;
      t.x, t.y;
      var n = i.x;
      return i.y, t.x < n + i.width && t.x + t.width > n && t.y < i.y + i.height && t.height + t.y > i.y && (s = !0), s;
    }
    function d(t, i, s, n) {
      this.x = t, this.y = i, this.width = s, this.height = n;
    }
    function p(t, i, s, n, a, h, c) {
      this.canvasCtx = t, this.spritePos = s, this.typeConfig = i, this.gapCoefficient = a, this.size = E(1, p.MAX_OBSTACLE_LENGTH), this.dimensions = n, this.remove = !1, this.xPos = n.WIDTH + (c || 0), this.yPos = 0, this.width = 0, this.collisionBoxes = [], this.gap = 0, this.speedOffset = 0, this.currentFrame = 0, this.timer = 0, this.init(h);
    }
    p.MAX_GAP_COEFFICIENT = 1.5, p.MAX_OBSTACLE_LENGTH = 3, p.prototype = {
      /**
       * Initialise the DOM for the obstacle.
       * @param {number} speed
       */
      init: function(t) {
        if (this.cloneCollisionBoxes(), this.size > 1 && this.typeConfig.multipleSpeed > t && (this.size = 1), this.width = this.typeConfig.width * this.size, Array.isArray(this.typeConfig.yPos)) {
          var i = C ? this.typeConfig.yPosMobile : this.typeConfig.yPos;
          this.yPos = i[E(0, i.length - 1)];
        } else
          this.yPos = this.typeConfig.yPos;
        this.draw(), this.size > 1 && (this.collisionBoxes[1].width = this.width - this.collisionBoxes[0].width - this.collisionBoxes[2].width, this.collisionBoxes[2].x = this.width - this.collisionBoxes[2].width), this.typeConfig.speedOffset && (this.speedOffset = Math.random() > 0.5 ? this.typeConfig.speedOffset : -this.typeConfig.speedOffset), this.gap = this.getGap(this.gapCoefficient, t);
      },
      /**
       * Draw and crop based on size.
       */
      draw: function() {
        var t = this.typeConfig.width, i = this.typeConfig.height;
        g && (t = t * 2, i = i * 2);
        var s = t * this.size * (0.5 * (this.size - 1)) + this.spritePos.x;
        this.currentFrame > 0 && (s += t * this.currentFrame), this.canvasCtx.drawImage(
          e.imageSprite,
          s,
          this.spritePos.y,
          t * this.size,
          i,
          this.xPos,
          this.yPos,
          this.typeConfig.width * this.size,
          this.typeConfig.height
        );
      },
      /**
       * Obstacle frame update.
       * @param {number} deltaTime
       * @param {number} speed
       */
      update: function(t, i) {
        this.remove || (this.typeConfig.speedOffset && (i += this.speedOffset), this.xPos -= Math.floor(i * y / 1e3 * t), this.typeConfig.numFrames && (this.timer += t, this.timer >= this.typeConfig.frameRate && (this.currentFrame = this.currentFrame == this.typeConfig.numFrames - 1 ? 0 : this.currentFrame + 1, this.timer = 0)), this.draw(), this.isVisible() || (this.remove = !0));
      },
      /**
       * Calculate a random gap size.
       * - Minimum gap gets wider as speed increses
       * @param {number} gapCoefficient
       * @param {number} speed
       * @return {number} The gap size.
       */
      getGap: function(t, i) {
        var s = Math.round(this.width * i + this.typeConfig.minGap * t), n = Math.round(s * p.MAX_GAP_COEFFICIENT);
        return E(s, n);
      },
      /**
       * Check if obstacle is visible.
       * @return {boolean} Whether the obstacle is in the game area.
       */
      isVisible: function() {
        return this.xPos + this.width > 0;
      },
      /**
       * Make a copy of the collision boxes, since these will change based on
       * obstacle type and size.
       */
      cloneCollisionBoxes: function() {
        for (var t = this.typeConfig.collisionBoxes, i = t.length - 1; i >= 0; i--)
          this.collisionBoxes[i] = new d(
            t[i].x,
            t[i].y,
            t[i].width,
            t[i].height
          );
      }
    }, p.types = [
      {
        type: "CACTUS_SMALL",
        width: 17,
        height: 35,
        yPos: 105,
        multipleSpeed: 4,
        minGap: 120,
        minSpeed: 0,
        collisionBoxes: [
          new d(0, 7, 5, 27),
          new d(4, 0, 6, 34),
          new d(10, 4, 7, 14)
        ]
      },
      {
        type: "CACTUS_LARGE",
        width: 25,
        height: 50,
        yPos: 90,
        multipleSpeed: 7,
        minGap: 120,
        minSpeed: 0,
        collisionBoxes: [
          new d(0, 12, 7, 38),
          new d(8, 0, 7, 49),
          new d(13, 10, 10, 38)
        ]
      },
      {
        type: "PTERODACTYL",
        width: 46,
        height: 40,
        yPos: [100, 75, 50],
        // Variable height.
        yPosMobile: [100, 50],
        // Variable height mobile.
        multipleSpeed: 999,
        minSpeed: 8.5,
        minGap: 150,
        collisionBoxes: [
          new d(15, 15, 16, 5),
          new d(18, 21, 24, 6),
          new d(2, 14, 4, 3),
          new d(6, 10, 4, 7),
          new d(10, 8, 6, 9)
        ],
        numFrames: 2,
        frameRate: 166.66666666666666,
        speedOffset: 0.8
      }
    ];
    function o(t, i) {
      this.canvas = t, this.canvasCtx = t.getContext("2d"), this.spritePos = i, this.xPos = 0, this.yPos = 0, this.groundYPos = 0, this.currentFrame = 0, this.currentAnimFrames = [], this.blinkDelay = 0, this.blinkCount = 0, this.animStartTime = 0, this.timer = 0, this.msPerFrame = 1e3 / y, this.config = o.config, this.status = o.status.WAITING, this.jumping = !1, this.ducking = !1, this.jumpVelocity = 0, this.reachedMinHeight = !1, this.speedDrop = !1, this.jumpCount = 0, this.jumpspotX = 0, this.init();
    }
    o.config = {
      DROP_VELOCITY: -5,
      GRAVITY: 0.6,
      HEIGHT: 47,
      HEIGHT_DUCK: 25,
      INIITAL_JUMP_VELOCITY: -10,
      INTRO_DURATION: 1500,
      MAX_JUMP_HEIGHT: 30,
      MIN_JUMP_HEIGHT: 30,
      SPEED_DROP_COEFFICIENT: 3,
      SPRITE_WIDTH: 262,
      START_X_POS: 50,
      WIDTH: 44,
      WIDTH_DUCK: 59
    }, o.collisionBoxes = {
      DUCKING: [
        new d(1, 18, 55, 25)
      ],
      RUNNING: [
        new d(22, 0, 17, 16),
        new d(1, 18, 30, 9),
        new d(10, 35, 14, 8),
        new d(1, 24, 29, 5),
        new d(5, 30, 21, 4),
        new d(9, 34, 15, 4)
      ]
    }, o.status = {
      CRASHED: "CRASHED",
      DUCKING: "DUCKING",
      JUMPING: "JUMPING",
      RUNNING: "RUNNING",
      WAITING: "WAITING"
    }, o.BLINK_TIMING = 7e3, o.animFrames = {
      WAITING: {
        frames: [44, 0],
        msPerFrame: 333.3333333333333
      },
      RUNNING: {
        frames: [88, 132],
        msPerFrame: 83.33333333333333
      },
      CRASHED: {
        frames: [220],
        msPerFrame: 16.666666666666668
      },
      JUMPING: {
        frames: [0],
        msPerFrame: 16.666666666666668
      },
      DUCKING: {
        frames: [264, 323],
        msPerFrame: 125
      }
    }, o.prototype = {
      /**
       * T-rex player initaliser.
       * Sets the t-rex to blink at random intervals.
       */
      init: function() {
        this.groundYPos = e.defaultDimensions.HEIGHT - this.config.HEIGHT - e.config.BOTTOM_PAD, this.yPos = this.groundYPos, this.minJumpHeight = this.groundYPos - this.config.MIN_JUMP_HEIGHT, this.draw(0, 0), this.update(0, o.status.WAITING);
      },
      /**
       * Setter for the jump velocity.
       * The approriate drop velocity is also set.
       */
      setJumpVelocity: function(t) {
        this.config.INIITAL_JUMP_VELOCITY = -t, this.config.DROP_VELOCITY = -t / 2;
      },
      /**
       * Set the animation status.
       * @param {!number} deltaTime
       * @param {Trex.status} status Optional status to switch to.
       */
      update: function(t, i) {
        this.timer += t, i && (this.status = i, this.currentFrame = 0, this.msPerFrame = o.animFrames[i].msPerFrame, this.currentAnimFrames = o.animFrames[i].frames, i == o.status.WAITING && (this.animStartTime = I(), this.setBlinkDelay())), this.playingIntro && this.xPos < this.config.START_X_POS && (this.xPos += Math.round(this.config.START_X_POS / this.config.INTRO_DURATION * t)), this.status == o.status.WAITING ? this.blink(I()) : this.draw(this.currentAnimFrames[this.currentFrame], 0), this.timer >= this.msPerFrame && (this.currentFrame = this.currentFrame == this.currentAnimFrames.length - 1 ? 0 : this.currentFrame + 1, this.timer = 0), this.speedDrop && this.yPos == this.groundYPos && (this.speedDrop = !1, this.setDuck(!0));
      },
      /**
       * Draw the t-rex to a particular position.
       * @param {number} x
       * @param {number} y
       */
      draw: function(t, i) {
        var s = t, n = i, a = this.ducking && this.status != o.status.CRASHED ? this.config.WIDTH_DUCK : this.config.WIDTH, h = this.config.HEIGHT;
        g && (s *= 2, n *= 2, a *= 2, h *= 2), s += this.spritePos.x, n += this.spritePos.y, this.ducking && this.status != o.status.CRASHED ? this.canvasCtx.drawImage(
          e.imageSprite,
          s,
          n,
          a,
          h,
          this.xPos,
          this.yPos,
          this.config.WIDTH_DUCK,
          this.config.HEIGHT
        ) : (this.ducking && this.status == o.status.CRASHED && this.xPos++, this.canvasCtx.drawImage(
          e.imageSprite,
          s,
          n,
          a,
          h,
          this.xPos,
          this.yPos,
          this.config.WIDTH,
          this.config.HEIGHT
        ));
      },
      /**
       * Sets a random time for the blink to happen.
       */
      setBlinkDelay: function() {
        this.blinkDelay = Math.ceil(Math.random() * o.BLINK_TIMING);
      },
      /**
       * Make t-rex blink at random intervals.
       * @param {number} time Current time in milliseconds.
       */
      blink: function(t) {
        var i = t - this.animStartTime;
        i >= this.blinkDelay && (this.draw(this.currentAnimFrames[this.currentFrame], 0), this.currentFrame == 1 && (this.setBlinkDelay(), this.animStartTime = t, this.blinkCount++));
      },
      /**
       * Initialise a jump.
       * @param {number} speed
       */
      startJump: function(t) {
        this.jumping || (this.update(0, o.status.JUMPING), this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - t / 10, this.jumping = !0, this.reachedMinHeight = !1, this.speedDrop = !1);
      },
      /**
       * Jump is complete, falling down.
       */
      endJump: function() {
        this.reachedMinHeight && this.jumpVelocity < this.config.DROP_VELOCITY && (this.jumpVelocity = this.config.DROP_VELOCITY);
      },
      /**
       * Update frame for a jump.
       * @param {number} deltaTime
       * @param {number} speed
       */
      updateJump: function(t, i) {
        var s = o.animFrames[this.status].msPerFrame, n = t / s;
        this.speedDrop ? this.yPos += Math.round(this.jumpVelocity * this.config.SPEED_DROP_COEFFICIENT * n) : this.yPos += Math.round(this.jumpVelocity * n), this.jumpVelocity += this.config.GRAVITY * n, (this.yPos < this.minJumpHeight || this.speedDrop) && (this.reachedMinHeight = !0), (this.yPos < this.config.MAX_JUMP_HEIGHT || this.speedDrop) && this.endJump(), this.yPos > this.groundYPos && (this.reset(), this.jumpCount++), this.update(t);
      },
      /**
       * Set the speed drop. Immediately cancels the current jump.
       */
      setSpeedDrop: function() {
        this.speedDrop = !0, this.jumpVelocity = 1;
      },
      /**
       * @param {boolean} isDucking.
       */
      setDuck: function(t) {
        t && this.status != o.status.DUCKING ? (this.update(0, o.status.DUCKING), this.ducking = !0) : this.status == o.status.DUCKING && (this.update(0, o.status.RUNNING), this.ducking = !1);
      },
      /**
       * Reset the t-rex to running at start of game.
       */
      reset: function() {
        this.yPos = this.groundYPos, this.jumpVelocity = 0, this.jumping = !1, this.ducking = !1, this.update(0, o.status.RUNNING), this.midair = !1, this.speedDrop = !1, this.jumpCount = 0;
      }
    };
    function u(t, i, s) {
      this.canvas = t, this.canvasCtx = t.getContext("2d"), this.image = e.imageSprite, this.spritePos = i, this.x = 0, this.y = 5, this.currentDistance = 0, this.maxScore = 0, this.highScore = 0, this.container = null, this.digits = [], this.acheivement = !1, this.defaultString = "", this.flashTimer = 0, this.flashIterations = 0, this.invertTrigger = !1, this.config = u.config, this.maxScoreUnits = this.config.MAX_DISTANCE_UNITS, this.init(s);
    }
    u.dimensions = {
      WIDTH: 10,
      HEIGHT: 13,
      DEST_WIDTH: 11
    }, u.yPos = [0, 13, 27, 40, 53, 67, 80, 93, 107, 120], u.config = {
      // Number of digits.
      MAX_DISTANCE_UNITS: 5,
      // Distance that causes achievement animation.
      ACHIEVEMENT_DISTANCE: 100,
      // Used for conversion from pixel distance to a scaled unit.
      COEFFICIENT: 0.025,
      // Flash duration in milliseconds.
      FLASH_DURATION: 250,
      // Flash iterations for achievement animation.
      FLASH_ITERATIONS: 3
    }, u.prototype = {
      /**
       * Initialise the distance meter to '00000'.
       * @param {number} width Canvas width in px.
       */
      init: function(t) {
        var i = "";
        this.calcXPos(t), this.maxScore = this.maxScoreUnits;
        for (var s = 0; s < this.maxScoreUnits; s++)
          this.draw(s, 0), this.defaultString += "0", i += "9";
        this.maxScore = parseInt(i);
      },
      /**
       * Calculate the xPos in the canvas.
       * @param {number} canvasWidth
       */
      calcXPos: function(t) {
        this.x = t - u.dimensions.DEST_WIDTH * (this.maxScoreUnits + 1);
      },
      /**
       * Draw a digit to canvas.
       * @param {number} digitPos Position of the digit.
       * @param {number} value Digit value 0-9.
       * @param {boolean} opt_highScore Whether drawing the high score.
       */
      draw: function(t, i, s) {
        var n = u.dimensions.WIDTH, a = u.dimensions.HEIGHT, h = u.dimensions.WIDTH * i, c = 0, T = t * u.dimensions.DEST_WIDTH, m = this.y, S = u.dimensions.WIDTH, v = u.dimensions.HEIGHT;
        if (g && (n *= 2, a *= 2, h *= 2), h += this.spritePos.x, c += this.spritePos.y, this.canvasCtx.save(), s) {
          var D = this.x - this.maxScoreUnits * 2 * u.dimensions.WIDTH;
          this.canvasCtx.translate(D, this.y);
        } else
          this.canvasCtx.translate(this.x, this.y);
        this.canvasCtx.drawImage(
          this.image,
          h,
          c,
          n,
          a,
          T,
          m,
          S,
          v
        ), this.canvasCtx.restore();
      },
      /**
       * Covert pixel distance to a 'real' distance.
       * @param {number} distance Pixel distance ran.
       * @return {number} The 'real' distance ran.
       */
      getActualDistance: function(t) {
        return t ? Math.round(t * this.config.COEFFICIENT) : 0;
      },
      /**
       * Update the distance meter.
       * @param {number} distance
       * @param {number} deltaTime
       * @return {boolean} Whether the acheivement sound fx should be played.
       */
      update: function(t, i) {
        var s = !0, n = !1;
        if (this.acheivement)
          this.flashIterations <= this.config.FLASH_ITERATIONS ? (this.flashTimer += t, this.flashTimer < this.config.FLASH_DURATION ? s = !1 : this.flashTimer > this.config.FLASH_DURATION * 2 && (this.flashTimer = 0, this.flashIterations++)) : (this.acheivement = !1, this.flashIterations = 0, this.flashTimer = 0);
        else if (i = this.getActualDistance(i), i > this.maxScore && this.maxScoreUnits == this.config.MAX_DISTANCE_UNITS ? (this.maxScoreUnits++, this.maxScore = parseInt(this.maxScore + "9")) : this.distance = 0, i > 0) {
          i % this.config.ACHIEVEMENT_DISTANCE == 0 && (this.acheivement = !0, this.flashTimer = 0, n = !0);
          var a = (this.defaultString + i).substr(-this.maxScoreUnits);
          this.digits = a.split("");
        } else
          this.digits = this.defaultString.split("");
        if (s)
          for (var h = this.digits.length - 1; h >= 0; h--)
            this.draw(h, parseInt(this.digits[h]));
        return this.drawHighScore(), n;
      },
      /**
       * Draw the high score.
       */
      drawHighScore: function() {
        this.canvasCtx.save(), this.canvasCtx.globalAlpha = 0.8;
        for (var t = this.highScore.length - 1; t >= 0; t--)
          this.draw(t, parseInt(this.highScore[t], 10), !0);
        this.canvasCtx.restore();
      },
      /**
       * Set the highscore as a array string.
       * Position of char in the sprite: H - 10, I - 11.
       * @param {number} distance Distance ran in pixels.
       */
      setHighScore: function(t) {
        t = this.getActualDistance(t);
        var i = (this.defaultString + t).substr(-this.maxScoreUnits);
        this.highScore = ["10", "11", ""].concat(i.split(""));
      },
      /**
       * Reset the distance meter back to '00000'.
       */
      reset: function() {
        this.update(0), this.acheivement = !1;
      }
    };
    function f(t, i, s) {
      this.canvas = t, this.canvasCtx = this.canvas.getContext("2d"), this.spritePos = i, this.containerWidth = s, this.xPos = s, this.yPos = 0, this.remove = !1, this.cloudGap = E(
        f.config.MIN_CLOUD_GAP,
        f.config.MAX_CLOUD_GAP
      ), this.init();
    }
    f.config = {
      HEIGHT: 14,
      MAX_CLOUD_GAP: 400,
      MAX_SKY_LEVEL: 30,
      MIN_CLOUD_GAP: 100,
      MIN_SKY_LEVEL: 71,
      WIDTH: 46
    }, f.prototype = {
      /**
       * Initialise the cloud. Sets the Cloud height.
       */
      init: function() {
        this.yPos = E(
          f.config.MAX_SKY_LEVEL,
          f.config.MIN_SKY_LEVEL
        ), this.draw();
      },
      /**
       * Draw the cloud.
       */
      draw: function() {
        this.canvasCtx.save();
        var t = f.config.WIDTH, i = f.config.HEIGHT;
        g && (t = t * 2, i = i * 2), this.canvasCtx.drawImage(
          e.imageSprite,
          this.spritePos.x,
          this.spritePos.y,
          t,
          i,
          this.xPos,
          this.yPos,
          f.config.WIDTH,
          f.config.HEIGHT
        ), this.canvasCtx.restore();
      },
      /**
       * Update the cloud position.
       * @param {number} speed
       */
      update: function(t) {
        this.remove || (this.xPos -= Math.ceil(t), this.draw(), this.isVisible() || (this.remove = !0));
      },
      /**
       * Check if the cloud is visible on the stage.
       * @return {boolean}
       */
      isVisible: function() {
        return this.xPos + f.config.WIDTH > 0;
      }
    };
    function r(t, i, s) {
      this.spritePos = i, this.canvas = t, this.canvasCtx = t.getContext("2d"), this.xPos = s - 50, this.yPos = 30, this.currentPhase = 0, this.opacity = 0, this.containerWidth = s, this.stars = [], this.drawStars = !1, this.placeStars();
    }
    r.config = {
      FADE_SPEED: 0.035,
      HEIGHT: 40,
      MOON_SPEED: 0.25,
      NUM_STARS: 2,
      STAR_SIZE: 9,
      STAR_SPEED: 0.3,
      STAR_MAX_Y: 70,
      WIDTH: 20
    }, r.phases = [140, 120, 100, 60, 40, 20, 0], r.prototype = {
      /**
       * Update moving moon, changing phases.
       * @param {boolean} activated Whether night mode is activated.
       * @param {number} delta
       */
      update: function(t, i) {
        if (t && this.opacity == 0 && (this.currentPhase++, this.currentPhase >= r.phases.length && (this.currentPhase = 0)), t && (this.opacity < 1 || this.opacity == 0) ? this.opacity += r.config.FADE_SPEED : this.opacity > 0 && (this.opacity -= r.config.FADE_SPEED), this.opacity > 0) {
          if (this.xPos = this.updateXPos(this.xPos, r.config.MOON_SPEED), this.drawStars)
            for (var s = 0; s < r.config.NUM_STARS; s++)
              this.stars[s].x = this.updateXPos(
                this.stars[s].x,
                r.config.STAR_SPEED
              );
          this.draw();
        } else
          this.opacity = 0, this.placeStars();
        this.drawStars = !0;
      },
      updateXPos: function(t, i) {
        return t < -r.config.WIDTH ? t = this.containerWidth : t -= i, t;
      },
      draw: function() {
        var t = this.currentPhase == 3 ? r.config.WIDTH * 2 : r.config.WIDTH, i = r.config.HEIGHT, s = this.spritePos.x + r.phases[this.currentPhase], n = t, a = r.config.STAR_SIZE, h = e.spriteDefinition.LDPI.STAR.x;
        if (g && (t *= 2, i *= 2, s = this.spritePos.x + r.phases[this.currentPhase] * 2, a *= 2, h = e.spriteDefinition.HDPI.STAR.x), this.canvasCtx.save(), this.canvasCtx.globalAlpha = this.opacity, this.drawStars)
          for (var c = 0; c < r.config.NUM_STARS; c++)
            this.canvasCtx.drawImage(
              e.imageSprite,
              h,
              this.stars[c].sourceY,
              a,
              a,
              Math.round(this.stars[c].x),
              this.stars[c].y,
              r.config.STAR_SIZE,
              r.config.STAR_SIZE
            );
        this.canvasCtx.drawImage(
          e.imageSprite,
          s,
          this.spritePos.y,
          t,
          i,
          Math.round(this.xPos),
          this.yPos,
          n,
          r.config.HEIGHT
        ), this.canvasCtx.globalAlpha = 1, this.canvasCtx.restore();
      },
      // Do star placement.
      placeStars: function() {
        for (var t = Math.round(this.containerWidth / r.config.NUM_STARS), i = 0; i < r.config.NUM_STARS; i++)
          this.stars[i] = {}, this.stars[i].x = E(t * i, t * (i + 1)), this.stars[i].y = E(0, r.config.STAR_MAX_Y), g ? this.stars[i].sourceY = e.spriteDefinition.HDPI.STAR.y + r.config.STAR_SIZE * 2 * i : this.stars[i].sourceY = e.spriteDefinition.LDPI.STAR.y + r.config.STAR_SIZE * i;
      },
      reset: function() {
        this.currentPhase = 0, this.opacity = 0, this.update(!1);
      }
    };
    function l(t, i) {
      this.spritePos = i, this.canvas = t, this.canvasCtx = t.getContext("2d"), this.sourceDimensions = {}, this.dimensions = l.dimensions, this.sourceXPos = [this.spritePos.x, this.spritePos.x + this.dimensions.WIDTH], this.xPos = [], this.yPos = 0, this.bumpThreshold = 0.5, this.setSourceDimensions(), this.draw();
    }
    l.dimensions = {
      WIDTH: 600,
      HEIGHT: 12,
      YPOS: 127
    }, l.prototype = {
      /**
       * Set the source dimensions of the horizon line.
       */
      setSourceDimensions: function() {
        for (var t in l.dimensions)
          g ? t != "YPOS" && (this.sourceDimensions[t] = l.dimensions[t] * 2) : this.sourceDimensions[t] = l.dimensions[t], this.dimensions[t] = l.dimensions[t];
        this.xPos = [0, l.dimensions.WIDTH], this.yPos = l.dimensions.YPOS;
      },
      /**
       * Return the crop x position of a type.
       */
      getRandomType: function() {
        return Math.random() > this.bumpThreshold ? this.dimensions.WIDTH : 0;
      },
      /**
       * Draw the horizon line.
       */
      draw: function() {
        this.canvasCtx.drawImage(
          e.imageSprite,
          this.sourceXPos[0],
          this.spritePos.y,
          this.sourceDimensions.WIDTH,
          this.sourceDimensions.HEIGHT,
          this.xPos[0],
          this.yPos,
          this.dimensions.WIDTH,
          this.dimensions.HEIGHT
        ), this.canvasCtx.drawImage(
          e.imageSprite,
          this.sourceXPos[1],
          this.spritePos.y,
          this.sourceDimensions.WIDTH,
          this.sourceDimensions.HEIGHT,
          this.xPos[1],
          this.yPos,
          this.dimensions.WIDTH,
          this.dimensions.HEIGHT
        );
      },
      /**
       * Update the x position of an indivdual piece of the line.
       * @param {number} pos Line position.
       * @param {number} increment
       */
      updateXPos: function(t, i) {
        var s = t, n = t == 0 ? 1 : 0;
        this.xPos[s] -= i, this.xPos[n] = this.xPos[s] + this.dimensions.WIDTH, this.xPos[s] <= -this.dimensions.WIDTH && (this.xPos[s] += this.dimensions.WIDTH * 2, this.xPos[n] = this.xPos[s] - this.dimensions.WIDTH, this.sourceXPos[s] = this.getRandomType() + this.spritePos.x);
      },
      /**
       * Update the horizon line.
       * @param {number} deltaTime
       * @param {number} speed
       */
      update: function(t, i) {
        var s = Math.floor(i * (y / 1e3) * t);
        this.xPos[0] <= 0 ? this.updateXPos(0, s) : this.updateXPos(1, s), this.draw();
      },
      /**
       * Reset horizon to the starting position.
       */
      reset: function() {
        this.xPos[0] = 0, this.xPos[1] = l.dimensions.WIDTH;
      }
    };
    function A(t, i, s, n) {
      this.canvas = t, this.canvasCtx = this.canvas.getContext("2d"), this.config = A.config, this.dimensions = s, this.gapCoefficient = n, this.obstacles = [], this.obstacleHistory = [], this.horizonOffsets = [0, 0], this.cloudFrequency = this.config.CLOUD_FREQUENCY, this.spritePos = i, this.nightMode = null, this.clouds = [], this.cloudSpeed = this.config.BG_CLOUD_SPEED, this.horizonLine = null, this.init();
    }
    A.config = {
      BG_CLOUD_SPEED: 0.2,
      BUMPY_THRESHOLD: 0.3,
      CLOUD_FREQUENCY: 0.5,
      HORIZON_HEIGHT: 16,
      MAX_CLOUDS: 6
    }, A.prototype = {
      /**
       * Initialise the horizon. Just add the line and a cloud. No obstacles.
       */
      init: function() {
        this.addCloud(), this.horizonLine = new l(this.canvas, this.spritePos.HORIZON), this.nightMode = new r(
          this.canvas,
          this.spritePos.MOON,
          this.dimensions.WIDTH
        );
      },
      /**
       * @param {number} deltaTime
       * @param {number} currentSpeed
       * @param {boolean} updateObstacles Used as an override to prevent
       *     the obstacles from being updated / added. This happens in the
       *     ease in section.
       * @param {boolean} showNightMode Night mode activated.
       */
      update: function(t, i, s, n) {
        this.runningTime += t, this.horizonLine.update(t, i), this.nightMode.update(n), this.updateClouds(t, i), s && this.updateObstacles(t, i);
      },
      /**
       * Update the cloud positions.
       * @param {number} deltaTime
       * @param {number} currentSpeed
       */
      updateClouds: function(t, i) {
        var s = this.cloudSpeed / 1e3 * t * i, n = this.clouds.length;
        if (n) {
          for (var a = n - 1; a >= 0; a--)
            this.clouds[a].update(s);
          var h = this.clouds[n - 1];
          n < this.config.MAX_CLOUDS && this.dimensions.WIDTH - h.xPos > h.cloudGap && this.cloudFrequency > Math.random() && this.addCloud(), this.clouds = this.clouds.filter(function(c) {
            return !c.remove;
          });
        } else
          this.addCloud();
      },
      /**
       * Update the obstacle positions.
       * @param {number} deltaTime
       * @param {number} currentSpeed
       */
      updateObstacles: function(t, i) {
        for (var s = this.obstacles.slice(0), n = 0; n < this.obstacles.length; n++) {
          var a = this.obstacles[n];
          a.update(t, i), a.remove && s.shift();
        }
        if (this.obstacles = s, this.obstacles.length > 0) {
          var h = this.obstacles[this.obstacles.length - 1];
          h && !h.followingObstacleCreated && h.isVisible() && h.xPos + h.width + h.gap < this.dimensions.WIDTH && (this.addNewObstacle(i), h.followingObstacleCreated = !0);
        } else
          this.addNewObstacle(i);
      },
      removeFirstObstacle: function() {
        this.obstacles.shift();
      },
      /**
       * Add a new obstacle.
       * @param {number} currentSpeed
       */
      addNewObstacle: function(t) {
        var i = E(0, p.types.length - 1), s = p.types[i];
        if (this.duplicateObstacleCheck(s.type) || t < s.minSpeed)
          this.addNewObstacle(t);
        else {
          var n = this.spritePos[s.type];
          this.obstacles.push(new p(
            this.canvasCtx,
            s,
            n,
            this.dimensions,
            this.gapCoefficient,
            t,
            s.width
          )), this.obstacleHistory.unshift(s.type), this.obstacleHistory.length > 1 && this.obstacleHistory.splice(e.config.MAX_OBSTACLE_DUPLICATION);
        }
      },
      /**
       * Returns whether the previous two obstacles are the same as the next one.
       * Maximum duplication is set in config value MAX_OBSTACLE_DUPLICATION.
       * @return {boolean}
       */
      duplicateObstacleCheck: function(t) {
        for (var i = 0, s = 0; s < this.obstacleHistory.length; s++)
          i = this.obstacleHistory[s] == t ? i + 1 : 0;
        return i >= e.config.MAX_OBSTACLE_DUPLICATION;
      },
      /**
       * Reset the horizon layer.
       * Remove existing obstacles and reposition the horizon line.
       */
      reset: function() {
        this.obstacles = [], this.horizonLine.reset(), this.nightMode.reset();
      },
      /**
       * Update the canvas width and scaling.
       * @param {number} width Canvas width.
       * @param {number} height Canvas height.
       */
      resize: function(t, i) {
        this.canvas.width = t, this.canvas.height = i;
      },
      /**
       * Add a new cloud to the horizon.
       */
      addCloud: function() {
        this.clouds.push(new f(
          this.canvas,
          this.spritePos.CLOUD,
          this.dimensions.WIDTH
        ));
      }
    };
  })();
  function _() {
    new Runner(".interstitial-wrapper");
  }
  return document.addEventListener("DOMContentLoaded", _), {
    run: () => {
      _();
    }
  };
};
export {
  W as game
};
