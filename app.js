// ===================================================================
// USER CONFIGURATION REQUIRED
// Paste the Web app URL of your AUTH script here (it ends in /exec).
// ===================================================================
window.HOTEL_POS_API_URL = 'https://script.google.com/macros/s/AKfycbzdGYG9ozH7SOgM1Ymwn4Z_ZAaW22dPzoNWjzYdlC6i36h681Q2fW-oWMqIioYu9JAC/exec';

(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // web/js/store.js
  var store_exports = {};
  __export(store_exports, {
    store: () => store
  });
  function read(storage, key) {
    try {
      const raw2 = storage.getItem(key);
      if (!raw2) return null;
      const v = JSON.parse(raw2);
      if (!v || !v.token || v.expiresAt && v.expiresAt * 1e3 < Date.now()) {
        storage.removeItem(key);
        return null;
      }
      return v;
    } catch (e) {
      return null;
    }
  }
  var OWNER_KEY, ADMIN_KEY, APP_KEY, CACHE_KEY, USER_KEY, store;
  var init_store = __esm({
    "web/js/store.js"() {
      OWNER_KEY = "hotelpos.owner";
      ADMIN_KEY = "hotelpos.admin";
      APP_KEY = "hotelpos.app";
      CACHE_KEY = "hotelpos.boot";
      USER_KEY = "hotelpos.lastUsername";
      store = {
        getOwner() {
          return read(sessionStorage, OWNER_KEY) || read(localStorage, OWNER_KEY);
        },
        setOwner(session2, remember) {
          this.clearOwner();
          const target = remember ? localStorage : sessionStorage;
          try {
            target.setItem(OWNER_KEY, JSON.stringify({ token: session2.token, expiresAt: session2.expiresAt, remember: !!remember }));
          } catch (e) {
          }
        },
        replaceOwnerToken(session2) {
          const cur = this.getOwner();
          this.setOwner(session2, cur ? cur.remember : false);
        },
        clearOwner() {
          try {
            sessionStorage.removeItem(OWNER_KEY);
            localStorage.removeItem(OWNER_KEY);
          } catch (e) {
          }
        },
        /* Hotel app session: { kind:'owner'|'staff', token (hotel script token), url, expiresAt, hotelName } */
        getApp() {
          return read(sessionStorage, APP_KEY) || read(localStorage, APP_KEY);
        },
        setApp(app, remember) {
          this.clearApp();
          try {
            (remember ? localStorage : sessionStorage).setItem(APP_KEY, JSON.stringify(Object.assign({}, app, { remember: !!remember })));
          } catch (e) {
          }
        },
        clearApp() {
          try {
            sessionStorage.removeItem(APP_KEY);
            localStorage.removeItem(APP_KEY);
            localStorage.removeItem(CACHE_KEY);
          } catch (e) {
          }
        },
        /* Last known hotel data: lets the app paint instantly on reload while fresh data loads. */
        getBoot() {
          try {
            return JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
          } catch (e) {
            return null;
          }
        },
        setBoot(b) {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(b));
          } catch (e) {
          }
        },
        getAdmin() {
          return read(sessionStorage, ADMIN_KEY);
        },
        setAdmin(session2) {
          try {
            sessionStorage.setItem(ADMIN_KEY, JSON.stringify({ token: session2.token, expiresAt: session2.expiresAt }));
          } catch (e) {
          }
        },
        clearAdmin() {
          try {
            sessionStorage.removeItem(ADMIN_KEY);
          } catch (e) {
          }
        },
        getLastUsername() {
          try {
            return localStorage.getItem(USER_KEY) || "";
          } catch (e) {
            return "";
          }
        },
        setLastUsername(u) {
          try {
            localStorage.setItem(USER_KEY, u);
          } catch (e) {
          }
        }
      };
    }
  });

  // web/js/app.js
  init_store();

  // web/js/ui.js
  var uid = 0;
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === void 0 || v === false) continue;
        if (k === "class") el.className = v;
        else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2).toLowerCase(), v);
        else if (v === true) el.setAttribute(k, "");
        else el.setAttribute(k, v);
      }
    }
    kids.flat(Infinity).forEach((c) => {
      if (c === null || c === void 0 || c === false) return;
      el.append(c.nodeType ? c : document.createTextNode(String(c)));
    });
    return el;
  }
  function mount(root2, ...nodes) {
    root2.replaceChildren(...nodes.flat().filter(Boolean));
  }
  function field(opts) {
    const id = "f" + ++uid;
    const { label, name, type = "text", hint, value = "", placeholder, autocomplete, maxlength, inputmode, readonly, options } = opts;
    let input;
    if (options) {
      input = h("select", { id, name }, options.map((o) => h("option", { value: o.value }, o.label)));
      input.value = value;
    } else if (type === "textarea") {
      input = h("textarea", { id, name, maxlength, placeholder }, value);
    } else {
      input = h("input", { id, name, type, placeholder, autocomplete, maxlength, inputmode, readonly: readonly || null, spellcheck: "false" });
      input.value = value;
    }
    const err = h("div", { class: "error", id: id + "-e", role: "alert" });
    const el = h(
      "div",
      { class: "field" },
      h("label", { for: id }, label),
      input,
      hint ? h("div", { class: "hint", id: id + "-h" }, hint) : null,
      err
    );
    input.setAttribute("aria-describedby", id + "-e" + (hint ? " " + id + "-h" : ""));
    return {
      el,
      input,
      value: () => (input.value || "").trim(),
      raw: () => input.value || "",
      setError(msg) {
        err.textContent = msg;
        el.classList.add("invalid");
        input.setAttribute("aria-invalid", "true");
      },
      clear() {
        err.textContent = "";
        el.classList.remove("invalid");
        input.removeAttribute("aria-invalid");
      }
    };
  }
  function setBusy(btn, busy, busyLabel) {
    if (busy) {
      btn.dataset.label = btn.textContent;
      btn.disabled = true;
      if (busyLabel) btn.textContent = busyLabel;
    } else {
      btn.disabled = false;
      if (btn.dataset.label) btn.textContent = btn.dataset.label;
    }
  }
  function formError(msg) {
    return h("div", { class: "form-error", role: "alert" }, msg);
  }
  var toastBox;
  function toast(message, kind = "info", ms = 4200) {
    if (!toastBox) {
      toastBox = h("div", { class: "toasts", "aria-live": "polite" });
      document.body.append(toastBox);
    }
    const t = h("div", { class: "toast " + kind }, message);
    toastBox.append(t);
    setTimeout(() => t.remove(), ms);
  }
  async function copyText(text, label = "Copied") {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = h("textarea", { style: "position:fixed;opacity:0" }, text);
      document.body.append(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (e2) {
        ta.remove();
        toast("Could not copy. Select the text and copy it manually.", "error");
        return;
      }
      ta.remove();
    }
    toast(label, "ok", 1800);
  }
  function copyButton(text, label = "Copy", done = "Copied", small = true) {
    return h("button", { class: "btn" + (small ? " btn-small" : ""), type: "button", onclick: () => copyText(text, done) }, label);
  }
  function openModal({ title, content, actions, drawer = false, onClose }) {
    const previous = document.activeElement;
    const scrim = h("div", { class: "scrim" + (drawer ? "" : " center"), role: "presentation" });
    const box = h("div", { class: drawer ? "drawer" : "modal", role: "dialog", "aria-modal": "true", "aria-label": title });
    const api = {
      box,
      scrim,
      close() {
        document.removeEventListener("keydown", onKey);
        scrim.remove();
        if (previous && previous.focus) previous.focus();
        if (onClose) onClose();
      }
    };
    function onKey(e) {
      if (e.key === "Escape") api.close();
    }
    scrim.addEventListener("mousedown", (e) => {
      if (e.target === scrim) api.close();
    });
    document.addEventListener("keydown", onKey);
    if (!drawer) {
      box.append(
        h("header", null, h("h2", null, title)),
        h("div", { class: "content" }, content),
        actions ? h("footer", null, actions(api)) : null
      );
    }
    scrim.append(box);
    document.body.append(scrim);
    const first2 = box.querySelector("input:not([readonly]), select, textarea, button");
    if (first2) first2.focus();
    return api;
  }
  function confirmDialog(title, message, confirmLabel = "Confirm", danger = false) {
    return new Promise((resolve) => {
      let settled = false;
      const done = (v) => {
        if (!settled) {
          settled = true;
          resolve(v);
        }
      };
      openModal({
        title,
        content: h("p", null, message),
        onClose: () => done(false),
        actions: (m) => [
          h("button", { class: "btn", type: "button", onclick: () => {
            done(false);
            m.close();
          } }, "Cancel"),
          h("button", { class: "btn " + (danger ? "btn-danger" : "btn-primary"), type: "button", onclick: () => {
            done(true);
            m.close();
          } }, confirmLabel)
        ]
      });
    });
  }
  function stateLabel(state) {
    return { ACTIVE: "Active", PENDING: "Awaiting activation", SUSPENDED: "Suspended", EXPIRED: "Expired", NOT_SET: "No expiry set" }[state] || state;
  }
  function pill(state) {
    return h("span", { class: "pill " + state }, stateLabel(state));
  }
  function daysText(n) {
    if (n === null || n === void 0) return "";
    if (n < 0) return Math.abs(n) === 1 ? "expired 1 day ago" : "expired " + Math.abs(n) + " days ago";
    if (n === 0) return "last day";
    return n === 1 ? "1 day left" : n + " days left";
  }
  function fmtStamp(v) {
    const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}:\d{2})/.exec(v || "");
    return m ? m[3] + "/" + m[2] + "/" + m[1] + " " + m[4] : v || "";
  }
  var spinner = (cls = "") => h("span", { class: "spin " + cls, "aria-hidden": "true" });
  var tickIcon = () => h("span", { class: "tick", "aria-hidden": "true" }, "\u2713");
  var loadingBlock = (text = "Loading\u2026") => h("div", { class: "loading-block" }, spinner("big"), h("div", null, text));
  function errText(err) {
    return err && err.message ? err.message : "Something went wrong. Please try again.";
  }
  async function act(btn, fn, opts = {}) {
    const kids = Array.from(btn.childNodes);
    const wasDisabled = btn.disabled;
    btn.disabled = true;
    btn.classList.add("busy");
    btn.replaceChildren(spinner(), opts.busy ? " " + opts.busy : "");
    let res;
    try {
      const value = await fn();
      res = { ok: true, value };
      btn.classList.remove("busy");
      btn.classList.add("done");
      btn.replaceChildren(tickIcon(), " " + (opts.done || "Saved"));
      await new Promise((r) => setTimeout(r, opts.hold === void 0 ? 650 : opts.hold));
    } catch (error) {
      console.error(error);
      res = { ok: false, error };
      if (!opts.silent) toast(errText(error), "error", 6e3);
    }
    if (btn.isConnected) {
      btn.classList.remove("busy", "done");
      btn.replaceChildren(...kids);
      btn.disabled = wasDisabled;
    }
    return res;
  }
  function emptyState(title, text) {
    return h("div", { class: "empty" }, h("strong", null, title), text ? h("p", null, text) : null);
  }
  function tabs(items, active, onPick) {
    const bar2 = h("div", { class: "tabs", role: "tablist" });
    items.forEach((it) => bar2.append(h("button", { class: "tab" + (it.key === active ? " on" : ""), type: "button", role: "tab", onclick: () => onPick(it.key) }, it.label)));
    return bar2;
  }
  function download(name, text, mime = "text/csv;charset=utf-8") {
    const url = URL.createObjectURL(new Blob(["\uFEFF" + text], { type: mime }));
    const a = h("a", { href: url, download: name });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2e3);
  }
  function toCsv(rows) {
    return rows.map((r) => r.map((v) => {
      const t = String(v === null || v === void 0 ? "" : v);
      return /[",\n]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t;
    }).join(",")).join("\r\n");
  }
  function debounce(fn, ms = 250) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), ms);
    };
  }
  var todayISO = () => {
    const d = /* @__PURE__ */ new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  };
  var shiftDay = (iso, n) => {
    const d = /* @__PURE__ */ new Date(iso + "T12:00:00");
    d.setDate(d.getDate() + n);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  };
  var timeOf = (stamp2) => (/\d{2}:\d{2}/.exec(stamp2 || "") || [""])[0];
  var minutesSince = (stamp2) => {
    const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/.exec(stamp2 || "");
    return m ? Math.max(0, Math.round((Date.now() - new Date(+m[1], m[2] - 1, +m[3], +m[4], +m[5], +m[6]).getTime()) / 6e4)) : 0;
  };
  function promptDialog(title, label, { required = true, value = "", multiline = false, confirm = "OK" } = {}) {
    return new Promise((resolve) => {
      const f = field({ label, type: multiline ? "textarea" : "text", value, maxlength: 120 });
      let settled = false;
      const done = (v) => {
        if (!settled) {
          settled = true;
          resolve(v);
        }
      };
      const m = openModal({
        title,
        content: f.el,
        onClose: () => done(null),
        actions: (mm) => [
          h("button", { class: "btn", type: "button", onclick: () => {
            done(null);
            mm.close();
          } }, "Cancel"),
          h("button", { class: "btn btn-primary", type: "button", onclick: () => {
            if (required && !f.value()) {
              f.setError("Required.");
              return;
            }
            done(f.value());
            mm.close();
          } }, confirm)
        ]
      });
      f.input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !multiline) {
          e.preventDefault();
          m.box.querySelector(".btn-primary").click();
        }
      });
      return m;
    });
  }

  // web/js/config.js
  var CONFIG = {
    // USER CONFIGURATION REQUIRED
    // In the ready package this lives at the top of app.js (window.HOTEL_POS_API_URL).
    // Apps Script editor → Deploy → New deployment → Web app → copy the URL.
    API_URL: typeof window !== "undefined" && window.HOTEL_POS_API_URL || "",
    APP_NAME: "Hotel POS",
    REQUEST_TIMEOUT_MS: 3e4
  };

  // web/js/api.js
  var ApiError = class extends Error {
    constructor(code, message, details) {
      super(message);
      this.code = code;
      this.details = details || null;
    }
  };
  async function call(action, data = {}, token = "", url = CONFIG.API_URL, opts = {}) {
    if (!url) {
      throw new ApiError("NOT_CONFIGURED", "This app is not connected to its server yet. The administrator must set API_URL in js/config.js.");
    }
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      throw new ApiError("OFFLINE", "You are offline. Check your internet connection and try again.");
    }
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), opts.timeout || CONFIG.REQUEST_TIMEOUT_MS);
    let res;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action, token, data, opId: opts.opId }),
        signal: ctrl.signal,
        redirect: "follow"
      });
    } catch (e) {
      console.error("API request failed", action, e);
      if (e && e.name === "AbortError") {
        throw new ApiError("TIMEOUT", "The server took too long to respond. Please try again.");
      }
      const sameOrigin = typeof location !== "undefined" && String(url).startsWith("/");
      throw new ApiError("NETWORK", sameOrigin ? "Cannot reach the local server. The black start-local window may have been closed or stopped. Run start-local.bat again, then reload this page." : 'Cannot reach the Google script. Open the script link in a private window: if you see a Google sign-in page instead of {"ok":true...}, set Deploy > Manage deployments > Edit > Who has access = Anyone, version = New version, then Deploy. Also check the link ends with /exec.');
    } finally {
      clearTimeout(timer);
    }
    let json;
    try {
      json = await res.json();
    } catch (e) {
      throw new ApiError("BAD_RESPONSE", 'The server did not return data. Check that the web app is deployed for "Anyone" and the URL is correct.');
    }
    if (!json || typeof json.ok !== "boolean") {
      throw new ApiError("SERVER_ERROR", "The server sent an unexpected reply. Please try again.");
    }
    if (!json.ok) throw new ApiError(json.error.code, json.error.message, json.error.details);
    return json.data;
  }

  // web/js/auth.js
  init_store();

  // web/js/data.js
  init_store();

  // web/js/money.js
  var r2 = (n) => Math.round((Number(n) + 1e-9) * 100) / 100;
  function cfgFrom(s) {
    s = s || {};
    return {
      taxOn: s.TAX_ENABLED === "true",
      tax: Number(s.TAX_PERCENT) || 0,
      svcOn: s.SERVICE_ENABLED === "true",
      svc: Number(s.SERVICE_PERCENT) || 0,
      taxOnSvc: s.TAX_ON_SERVICE === "true",
      round: Number(s.ROUNDING) || 0,
      maxDiscount: s.MAX_DISCOUNT_PERCENT === void 0 || s.MAX_DISCOUNT_PERCENT === "" ? 100 : Number(s.MAX_DISCOUNT_PERCENT)
    };
  }
  function discountAmount(subtotal, type, value) {
    if (type === "PERCENT") return r2(subtotal * Math.min(Math.max(value, 0), 100) / 100);
    if (type === "FIXED") return r2(Math.min(Math.max(value, 0), subtotal));
    return 0;
  }
  function compute(subtotal, discountAmt, cfg2) {
    const net = r2(Math.max(0, subtotal - discountAmt));
    const service = cfg2.svcOn ? r2(net * cfg2.svc / 100) : 0;
    const taxBase = cfg2.taxOnSvc ? net + service : net;
    const tax = cfg2.taxOn ? r2(taxBase * cfg2.tax / 100) : 0;
    const exact = r2(net + service + tax);
    const total = cfg2.round > 0 ? Math.round(exact / cfg2.round) * cfg2.round : exact;
    return { subtotal: r2(subtotal), discount: r2(discountAmt), service, tax, roundOff: r2(total - exact), total: r2(total) };
  }
  function money(n, settings) {
    const dec = Math.min(2, Math.max(0, Number(settings && settings.DECIMALS) || 0));
    const cur = settings && settings.CURRENCY || "";
    const v = Number(n) || 0;
    return (cur ? cur + " " : "") + v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }

  // web/js/data.js
  var S = {
    ready: false,
    user: null,
    hotel: null,
    settings: {},
    categories: [],
    menu: [],
    tables: [],
    orders: [],
    rev: {},
    sync: "idle",
    pending: 0,
    queued: 0,
    offline: false,
    lastSync: 0
  };
  var subs = /* @__PURE__ */ new Set();
  var session = null;
  var pollTimer = null;
  var polling = false;
  var flushing = false;
  var authCb = null;
  var doneTimer = null;
  var QKEY = "hotelpos.queue";
  var QUEUEABLE = ["createOrder", "addItems", "sendToKitchen", "kitchenStatus", "saveExpense", "setAvailability", "updateItem", "saveCustomer", "generateBill", "payBill", "removeItem", "cancelOrder", "updateOrderInfo", "saveReservation", "setReservationStatus"];
  var NETERR = ["NETWORK", "TIMEOUT", "OFFLINE", "BAD_RESPONSE"];
  var AUTHERR = ["SESSION_INVALID", "GATE_INVALID", "ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY", "ACCOUNT_DISABLED"];
  var can = (p) => !!S.user && S.user.perms.indexOf(p) !== -1;
  var canAny = (list) => list.some(can);
  var cfg = () => cfgFrom(S.settings);
  function on(fn) {
    subs.add(fn);
    return () => subs.delete(fn);
  }
  function emit(...keys) {
    subs.forEach((f) => {
      try {
        f(keys);
      } catch (e) {
        console.error(e);
      }
    });
  }
  function onAuthLost(fn) {
    authCb = fn;
  }
  function newId(prefix) {
    const a = new Uint8Array(8);
    crypto.getRandomValues(a);
    return (prefix || "x") + "-" + Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
  }
  function setSync(state) {
    S.sync = state;
    emit("sync");
    clearTimeout(doneTimer);
    if (state === "saved") doneTimer = setTimeout(() => {
      if (S.sync === "saved") {
        S.sync = "idle";
        emit("sync");
      }
    }, 1800);
  }
  function readQ() {
    try {
      return JSON.parse(localStorage.getItem(QKEY) || "[]");
    } catch (e) {
      return [];
    }
  }
  function writeQ(q) {
    try {
      localStorage.setItem(QKEY, JSON.stringify(q));
    } catch (e) {
    }
    S.queued = q.length;
    emit("sync");
  }
  async function flush() {
    if (flushing || !session) return;
    let q = readQ();
    if (!q.length) return;
    flushing = true;
    setSync("saving");
    try {
      while (q.length) {
        const op = q[0];
        try {
          const r = await raw(op.action, op.data, { opId: op.opId });
          merge(op.action, r);
        } catch (err) {
          if (err instanceof ApiError && NETERR.includes(err.code)) {
            setSync("idle");
            return;
          }
          if (err instanceof ApiError && AUTHERR.includes(err.code)) return;
          console.error("queued change rejected", op.action, err);
          S.rejected = err && err.message || "A change made while offline was rejected.";
          emit("rejected");
        }
        q = readQ().slice(1);
        writeQ(q);
      }
      setSync("saved");
    } finally {
      flushing = false;
    }
  }
  async function raw(action, data, opts = {}) {
    if (!session) throw new ApiError("SESSION_INVALID", "Please sign in again.");
    try {
      const r = await call(action, data, session.token, session.url, opts);
      S.offline = false;
      return r;
    } catch (err) {
      if (err instanceof ApiError) {
        if (NETERR.includes(err.code)) {
          if (!S.offline) {
            S.offline = true;
            emit("sync");
          }
        } else if (err.code === "SESSION_INVALID" && session.kind === "owner" && !opts._retried && await refreshOwner()) {
          return raw(action, data, Object.assign({}, opts, { _retried: true }));
        } else if (AUTHERR.includes(err.code)) {
          authLost(err);
        }
      }
      throw err;
    }
  }
  async function refreshOwner() {
    const o = store.getOwner();
    if (!o) return false;
    try {
      const s = await call("getSession", {}, o.token);
      session.token = s.hotelToken;
      store.setApp(Object.assign({}, session), !!(store.getApp() && store.getApp().remember));
      return true;
    } catch (e) {
      return false;
    }
  }
  function authLost(err) {
    stop();
    if (authCb) authCb(err);
  }
  function read2(action, data, opts) {
    return raw(action, data || {}, opts);
  }
  var chains = {};
  function chainKey(action, data) {
    if (data && data.orderId) return "o:" + data.orderId;
    if (data && data.billId) return "b:" + data.billId;
    if (/Menu|Category|Availability/.test(action)) return "menu";
    if (/Table/.test(action)) return "tables";
    if (action === "saveSettings") return "settings";
    return "";
  }
  function save(action, data = {}, opts = {}) {
    S.pending++;
    setSync("saving");
    const k = chainKey(action, data);
    const run = () => saveNow(action, data, opts);
    let p;
    if (k) {
      p = (chains[k] || Promise.resolve()).catch(() => {
      }).then(run);
      chains[k] = p;
      p.catch(() => {
      }).then(() => {
        if (chains[k] === p) delete chains[k];
      });
    } else p = run();
    return p.finally(() => {
      S.pending--;
      if (S.pending === 0 && S.sync === "saving") setSync("saved");
    });
  }
  async function saveNow(action, data, opts) {
    const opId = opts.opId || newId("op");
    try {
      const r = await raw(action, data, { opId, timeout: opts.timeout });
      merge(action, r);
      Object.keys(memo).forEach((k) => delete memo[k]);
      return r;
    } catch (err) {
      if (err instanceof ApiError && NETERR.includes(err.code) && QUEUEABLE.includes(action) && opts.queue !== false) {
        const q = readQ();
        q.push({ opId, action, data, at: Date.now() });
        writeQ(q);
        setSync("idle");
        return { queued: true, opId };
      }
      setSync("error");
      throw err;
    }
  }
  var memo = {};
  var today = () => {
    const d = /* @__PURE__ */ new Date(), p = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  };
  var mk = (action, data) => action + ":" + JSON.stringify(data || {});
  function swr(action, data, onData, onError) {
    const key = mk(action, data);
    if (memo[key] !== void 0) onData(memo[key], true);
    return read2(action, data).then((r) => {
      memo[key] = r;
      onData(r, false);
      return r;
    }).catch((e) => {
      if (memo[key] === void 0 && onError) onError(e);
    });
  }
  async function prefetch() {
    const t = today(), mon = t.slice(0, 8) + "01";
    const jobs = [
      [can("VIEW_DASHBOARD"), "dashboard", {}],
      [can("VIEW_ORDERS"), "listOrders", { from: t, to: t }],
      [can("VIEW_CUSTOMERS"), "listCustomers", {}],
      [can("MANAGE_EXPENSES"), "listExpenses", { from: mon, to: t }],
      [can("VIEW_RESERVATIONS"), "listReservations", { from: t, to: t }],
      [can("VIEW_SALES") || can("VIEW_REPORTS"), "salesReport", { from: t, to: t }],
      [can("MANAGE_STAFF"), "listStaff", {}],
      [can("VIEW_ACTIVITY"), "activity", { limit: 200 }]
    ];
    for (const [allowed2, action, data] of jobs) {
      const key = mk(action, data);
      if (!allowed2 || !session || memo[key] !== void 0) continue;
      await new Promise((r) => setTimeout(r, 400));
      try {
        memo[key] = await read2(action, data);
      } catch (e) {
      }
    }
  }
  var OPEN = ["OPEN", "BILLED"];
  function putOrder(o) {
    if (!o || !o.id) return;
    if (o.uid) S.orders = S.orders.filter((x) => !(x.tmp && x.uid === o.uid));
    const i = S.orders.findIndex((x) => x.id === o.id);
    const open = OPEN.includes(o.status);
    if (open) {
      if (i >= 0) S.orders[i] = o;
      else S.orders.unshift(o);
    } else if (i >= 0) S.orders.splice(i, 1);
    S.tables.forEach((t) => {
      if (t.currentOrderId === o.id && (!open || t.id !== o.tableId)) {
        t.status = "FREE";
        t.currentOrderId = "";
      }
    });
    if (open && o.tableId) {
      const t = S.tables.find((x) => x.id === o.tableId);
      if (t) {
        t.status = o.status === "BILLED" ? "BILLING" : "OCCUPIED";
        t.currentOrderId = o.id;
      }
    }
    emit("orders", "tables");
  }
  function merge(action, r) {
    if (!r || typeof r !== "object") return;
    if (r.order) putOrder(r.order);
    if (r.settings && action === "saveSettings") {
      S.settings = r.settings;
      emit("settings");
    }
    if (["saveCategory", "deleteCategory", "saveMenuItem", "deleteMenuItem", "setAvailability", "uploadMenuImage", "removeMenuImage"].includes(action)) {
      refreshSoon();
    }
    if (["saveTable", "addTables", "removeTable"].includes(action)) refreshSoon();
    if (action === "setAvailability" && r.available !== void 0) {
    }
    persist();
  }
  var persistT = null;
  function persist() {
    clearTimeout(persistT);
    persistT = setTimeout(() => {
      if (!session || !S.ready) return;
      store.setBoot({ key: session.key, user: S.user, hotel: S.hotel, settings: S.settings, categories: S.categories, menu: S.menu, tables: S.tables, orders: S.orders, rev: S.rev });
    }, 800);
  }
  function apply(b, full) {
    if (b.user) S.user = b.user;
    if (b.hotel) S.hotel = b.hotel;
    if (b.settings) S.settings = b.settings;
    if (b.categories) S.categories = b.categories;
    if (b.menu) S.menu = b.menu;
    if (b.tables) S.tables = b.tables;
    if (b.orders) {
      const mine = S.orders.filter((o) => o.tmp && !b.orders.some((x) => x.uid === o.uid));
      S.orders = mine.concat(b.orders);
      if (b.tables) mine.forEach((o) => {
        const t = S.tables.find((x) => x.id === o.tableId);
        if (t && t.status === "FREE") {
          t.status = "OCCUPIED";
          t.currentOrderId = o.id;
        }
      });
    }
    if (b.rev) S.rev = b.rev;
    if (b.perms && S.user) S.user = Object.assign({}, S.user, { perms: b.perms });
    S.lastSync = Date.now();
    if (full) S.ready = true;
  }
  async function start(sess, firstBoot) {
    stop();
    session = sess;
    S.ready = false;
    S.offline = false;
    Object.keys(memo).forEach((k) => delete memo[k]);
    S.queued = readQ().length;
    let painted = false;
    if (firstBoot) {
      apply(firstBoot, true);
      emit("all");
      painted = true;
    } else {
      const c = store.getBoot();
      if (c && c.user && sess.key && c.key === sess.key) {
        apply(c, true);
        emit("all");
        painted = true;
      }
    }
    const fresh = raw("bootstrap", {}).then((b) => {
      apply(b, true);
      persist();
      emit("all");
    });
    if (painted) fresh.catch(() => {
    });
    else await fresh;
    loop();
    setTimeout(prefetch, 800);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("online", onOnline);
    flush();
  }
  var screenKey = "";
  var lastTouch = Date.now();
  ["pointerdown", "keydown"].forEach((e) => window.addEventListener(e, () => {
    lastTouch = Date.now();
  }, { passive: true }));
  function setScreen(k) {
    screenKey = k;
  }
  function delay() {
    if (Date.now() - lastTouch > 18e4) return 3e4;
    return { kitchen: 5e3, tables: 7e3, pos: 8e3, orders: 1e4 }[screenKey] || 15e3;
  }
  function loop() {
    clearTimeout(pollTimer);
    pollTimer = setTimeout(async () => {
      await poll();
      if (session) loop();
    }, delay());
  }
  function onVis() {
    if (!document.hidden) poll();
  }
  function onOnline() {
    poll();
    flush();
  }
  async function poll() {
    if (!session || polling || document.hidden || flushing) return;
    polling = true;
    try {
      const bo = JSON.stringify(S.orders), bt = JSON.stringify(S.tables);
      const r = await raw("poll", { rev: S.rev });
      apply(r, false);
      const keys = ["tick"];
      if (JSON.stringify(S.orders) !== bo) keys.push("orders");
      if (JSON.stringify(S.tables) !== bt) keys.push("tables");
      emit(...keys);
      if (r.menu) emit("menu");
      if (r.settings) emit("settings");
      if (S.queued) flush();
      persist();
    } catch (err) {
    } finally {
      polling = false;
      emit("sync");
      if (again) {
        again = false;
        setTimeout(poll, 50);
      }
    }
  }
  var again = false;
  function refreshSoon() {
    if (polling) again = true;
    else setTimeout(poll, 150);
  }
  function stop() {
    clearTimeout(pollTimer);
    pollTimer = null;
    session = null;
    document.removeEventListener("visibilitychange", onVis);
    window.removeEventListener("online", onOnline);
  }
  function signOut() {
    stop();
    store.clearApp();
    store.clearOwner();
    S.ready = false;
    S.user = null;
    S.orders = [];
    S.tables = [];
    S.menu = [];
    S.categories = [];
    Object.keys(memo).forEach((k) => delete memo[k]);
    try {
      localStorage.removeItem(QKEY);
    } catch (e) {
    }
  }
  var sessionInfo = () => session;
  var stamp = () => {
    const d = /* @__PURE__ */ new Date(), p = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
  };
  function placeOrder(payload, lines, onFail) {
    const t = compute(lines.reduce((a, l) => a + l.price * l.qty, 0), 0, cfg());
    const table = payload.tableId ? S.tables.find((x) => x.id === payload.tableId) : null;
    const tmp = {
      id: "Saving\u2026",
      tmp: true,
      uid: payload.uid,
      type: payload.type,
      tableId: payload.tableId || "",
      tableName: table ? table.name : "",
      customerId: payload.customerId || "",
      customerName: payload.customerName || "",
      guests: payload.guests || 0,
      waiterId: S.user.id,
      waiterName: S.user.name,
      status: "OPEN",
      subtotal: t.subtotal,
      discount: 0,
      tax: t.tax,
      service: t.service,
      total: t.total,
      notes: payload.notes || "",
      openedAt: stamp(),
      billId: "",
      items: lines.map((l, i) => ({ id: "tmp-" + i, menuId: l.menuId, name: l.name, qty: l.qty, price: l.price, lineTotal: r2(l.price * l.qty), notes: l.notes || "", kitchen: payload.send ? "SENT" : "NEW", sentAt: payload.send ? stamp() : "" }))
    };
    S.orders.unshift(tmp);
    if (table) {
      table.status = "OCCUPIED";
      table.currentOrderId = tmp.id;
    }
    emit("orders", "tables");
    save("createOrder", payload).then((r) => {
      if (r && r.queued) toast("No connection: the order is saved on this device and will be sent automatically.", "info", 7e3);
    }).catch((err) => {
      S.orders = S.orders.filter((o) => o !== tmp);
      if (table && table.currentOrderId === tmp.id) {
        table.status = "FREE";
        table.currentOrderId = "";
      }
      emit("orders", "tables");
      refreshSoon();
      if (onFail) onFail(err);
    });
  }
  function addToOrder(orderId, lines, send, onFail) {
    const o = S.orders.find((x) => x.id === orderId);
    if (!o) {
      save("addItems", { orderId, items: lines.map((l) => ({ menuId: l.menuId, qty: l.qty, notes: l.notes })), send }).catch(onFail);
      return;
    }
    const before = JSON.stringify(o);
    lines.forEach((l, i) => o.items.push({ id: "tmp-add-" + Date.now() + i, menuId: l.menuId, name: l.name, qty: l.qty, price: l.price, lineTotal: r2(l.price * l.qty), notes: l.notes || "", kitchen: send ? "SENT" : "NEW", sentAt: send ? stamp() : "" }));
    const t = compute(o.items.reduce((a, l) => a + l.lineTotal, 0), 0, cfg());
    Object.assign(o, { subtotal: t.subtotal, tax: t.tax, service: t.service, total: t.total });
    emit("orders");
    save("addItems", { orderId, items: lines.map((l) => ({ menuId: l.menuId, qty: l.qty, notes: l.notes })), send }).then((r) => {
      if (r && r.queued) toast("No connection: saved on this device and will be sent automatically.", "info", 7e3);
    }).catch((err) => {
      const i = S.orders.findIndex((x) => x.id === orderId);
      if (i >= 0) S.orders[i] = JSON.parse(before);
      emit("orders");
      refreshSoon();
      if (onFail) onFail(err);
    });
  }
  function instant(action, data, apply2, undo, after) {
    apply2();
    return save(action, data).then((r) => {
      if (after) after(r);
      return r;
    }).catch((e) => {
      if (undo) undo();
      toast("Not saved: " + (e && e.message ? e.message : "try again"), "error", 6e3);
    });
  }

  // web/js/shell.js
  init_store();

  // web/js/s-dashboard.js
  var s_dashboard_exports = {};
  __export(s_dashboard_exports, {
    render: () => render
  });
  var last = null;
  function render(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    const box = h("div", { class: "stack" });
    el.replaceChildren(box);
    let alive = true, loading = false;
    function stat(label, value, sub, cls) {
      return h("div", { class: "stat " + (cls || "") }, h("div", { class: "k" }, label), h("div", { class: "v" }, value), sub ? h("div", { class: "s" }, sub) : null);
    }
    const delta = (a, b) => {
      if (!b) return a ? "new today" : "";
      const p = Math.round((a - b) / b * 100);
      return (p >= 0 ? "\u25B2 " : "\u25BC ") + Math.abs(p) + "% vs yesterday";
    };
    function draw(d, err) {
      const parts = [];
      if (can("MANAGE_SETTINGS") || can("EDIT_MENU")) parts.push(checklist());
      if (err) parts.push(h("div", { class: "form-error" }, err));
      if (d) {
        const t = d.today;
        parts.push(h(
          "div",
          { class: "stats" },
          stat("Sales today", M2(t.net), delta(t.net, d.yesterday.net), "hero"),
          stat("Orders today", t.orders, d.yesterday.orders + " yesterday"),
          stat("Open orders", d.openOrders, M2(d.openValue) + " in progress"),
          stat("Tables in use", d.tablesBusy + " / " + d.tablesTotal, d.tablesTotal ? Math.round(d.tablesBusy / d.tablesTotal * 100) + "% occupied" : "No tables yet"),
          stat("Expenses today", M2(t.expenses), "Sales minus expenses: " + M2(t.net - t.expenses)),
          stat("This month", M2(d.month.net), d.month.orders + (d.month.orders === 1 ? " order" : " orders"))
        ));
        parts.push(h(
          "div",
          { class: "cols" },
          panel("Last 14 days", trend(d.series)),
          panel("Today by payment", h("div", { class: "trows" }, [["Cash", t.cash], ["Card", t.card], ["Online / bank", t.bank], ["Other", t.other], ["Discounts given", t.discount], ["Tax collected", t.tax], ["Service charge", t.service]].map(([k, v]) => h("div", { class: "trow" }, h("span", null, k), h("span", null, M2(v))))))
        ));
        parts.push(panel("Best sellers today", d.topItems.length ? h("div", { class: "toplist" }, d.topItems.map((i, n) => h("div", { class: "trow" }, h("span", null, n + 1 + ". " + i.name), h("span", null, "\xD7 " + i.qty)))) : emptyState("No sales yet today", "Items appear here as orders are sent to the kitchen.")));
      } else parts.push(loadingBlock("Loading today's numbers\u2026"));
      box.replaceChildren(...parts.filter(Boolean));
    }
    function panel(title, body) {
      return h("section", { class: "panel" }, h("header", null, h("h2", null, title)), h("div", { class: "pad" }, body));
    }
    function trend(series) {
      const max = Math.max(1, ...series.map((x) => Math.max(x.net, x.expenses)));
      return h(
        "div",
        null,
        h("div", { class: "bars" }, series.map((x) => h(
          "div",
          { class: "bar-col", title: x.date + "  sales " + M2(x.net) + "  expenses " + M2(x.expenses) },
          h("div", { class: "bar-stack" }, h("div", { class: "cbar b-sales", style: "height:" + Math.round(x.net / max * 100) + "%" }), h("div", { class: "cbar b-exp", style: "height:" + Math.round(x.expenses / max * 100) + "%" })),
          h("div", { class: "bar-l" }, x.date.slice(8))
        ))),
        h("div", { class: "legend" }, h("span", { class: "lg b-sales" }, "Sales"), h("span", { class: "lg b-exp" }, "Expenses"))
      );
    }
    function checklist() {
      const steps = [
        ["Hotel details, tax and receipt", S.settings.SETUP_COMPLETE === "true", "settings", can("MANAGE_SETTINGS")],
        ["Add menu categories and items", S.menu.length > 0, "menu", can("ADD_MENU")],
        ["Add your tables", S.tables.length > 0, "settings", can("MANAGE_TABLES")],
        ["Create staff accounts", null, "staff", can("MANAGE_STAFF")]
      ].filter((s) => s[3]);
      const todo = steps.filter((s) => s[1] === false);
      if (!todo.length || S.settings.SETUP_COMPLETE === "true" && S.menu.length && S.tables.length) return null;
      return h(
        "section",
        { class: "panel setup" },
        h("header", null, h("h2", null, "Get your hotel ready")),
        h("div", { class: "pad" }, steps.map((s) => h("a", { class: "step" + (s[1] ? " done" : ""), href: "#/app/" + s[2] }, h("span", { class: "chk" }, s[1] ? "\u2713" : "\u25CB"), s[0])))
      );
    }
    async function load() {
      if (loading || !alive || !can("VIEW_DASHBOARD")) return;
      loading = true;
      await swr("dashboard", {}, (r) => {
        last = r;
        if (alive) draw(last);
      }, (e) => {
        if (alive) draw(last, errText(e));
      });
      loading = false;
    }
    draw(last);
    load();
    const timer = setInterval(() => {
      if (!document.hidden) load();
    }, 2e4);
    const off = on((k) => {
      if (k.includes("orders") && alive) load();
    });
    return () => {
      alive = false;
      clearInterval(timer);
      off();
    };
  }

  // web/js/s-tables.js
  var s_tables_exports = {};
  __export(s_tables_exports, {
    render: () => render2
  });

  // web/js/order-ui.js
  var KITCHEN_LABEL = { NEW: "Not sent", SENT: "Sent", PREPARING: "Preparing", READY: "Ready", SERVED: "Served" };
  var M = (n) => money(n, S.settings);
  function kitchenPill(state) {
    return h("span", { class: "kp k-" + state }, KITCHEN_LABEL[state] || state);
  }
  function statusPill(status) {
    const t = { OPEN: "Open", BILLED: "Billed", PAID: "Paid", CANCELLED: "Cancelled" }[status] || status;
    return h("span", { class: "sp s-" + status }, t);
  }
  function totalsBlock(o) {
    const rows = [["Subtotal", o.subtotal]];
    if (o.discount) rows.push(["Discount", -o.discount]);
    if (o.service) rows.push(["Service charge", o.service]);
    if (o.tax) rows.push([S.settings.TAX_LABEL || "Tax", o.tax]);
    if (o.roundOff) rows.push(["Rounding", o.roundOff]);
    return h(
      "div",
      { class: "totals" },
      rows.map(([k, v]) => h("div", { class: "trow" }, h("span", null, k), h("span", null, M(v)))),
      h("div", { class: "trow grand" }, h("span", null, "Total"), h("span", null, M(o.total)))
    );
  }
  function openOrder(idOrOrder, ctx) {
    if (typeof idOrOrder !== "string" && idOrOrder && idOrOrder.tmp) {
      toast("Saving this order\u2026", "info", 1200);
      return null;
    }
    let id = typeof idOrOrder === "string" ? idOrOrder : idOrOrder.id;
    let order = typeof idOrOrder === "string" ? S.orders.find((x) => x.id === id) || null : idOrOrder;
    const body = h("div", { class: "order-dlg" });
    const modal = openModal({ title: "Order", content: body, actions: null });
    modal.box.classList.add("wide");
    const head = modal.box.querySelector("header h2");
    async function load() {
      body.replaceChildren(loadingBlock());
      try {
        order = (await read2("getOrder", { orderId: id })).order;
        draw();
      } catch (e) {
        body.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      }
    }
    function cur() {
      const live = S.orders.find((x) => x.id === id);
      if (live) order = live;
      return order;
    }
    function draw() {
      const o = cur();
      if (!o) {
        body.replaceChildren(h("div", { class: "empty" }, h("strong", null, "This order is no longer open.")));
        return;
      }
      head.replaceChildren(o.id, " ", statusPill(o.status));
      const open = o.status === "OPEN", billed = o.status === "BILLED";
      const editable = open && canAny(["CREATE_ORDERS", "EDIT_ORDERS"]);
      const hasNew = o.items.some((i) => i.kitchen === "NEW");
      const hasReady = o.items.some((i) => i.kitchen === "READY");
      const lines = h("div", { class: "lines" }, o.items.length ? o.items.map((l) => {
        const locked = l.kitchen !== "NEW";
        const ctl = [];
        if (editable && !locked) ctl.push(
          h("button", { class: "qty-btn", type: "button", "aria-label": "One less", onclick: (e) => change(e.currentTarget, l, l.qty - 1) }, "\u2212"),
          h("span", { class: "qty" }, l.qty),
          h("button", { class: "qty-btn", type: "button", "aria-label": "One more", onclick: (e) => change(e.currentTarget, l, l.qty + 1) }, "+")
        );
        else ctl.push(h("span", { class: "qty" }, "\xD7" + l.qty));
        return h(
          "div",
          { class: "line" },
          h("div", { class: "ln" }, h("strong", null, l.name), l.notes ? h("div", { class: "note" }, l.notes) : null, kitchenPill(l.kitchen)),
          h("div", { class: "lq" }, ctl),
          h("div", { class: "lt" }, M(l.lineTotal)),
          editable && (!locked || can("CANCEL_ORDERS")) ? h("button", { class: "btn btn-quiet btn-small", type: "button", title: "Remove", onclick: (e) => remove(e.currentTarget, l) }, "\u2715") : h("span")
        );
      }) : h("div", { class: "muted pad" }, "No items yet."));
      const meta = h(
        "div",
        { class: "meta" },
        o.tableName ? h("span", null, "Table: ", h("strong", null, o.tableName)) : h("span", null, "Takeaway"),
        o.guests ? h("span", null, "Guests: ", h("strong", null, o.guests)) : null,
        o.customerName ? h("span", null, "Customer: ", h("strong", null, o.customerName)) : null,
        o.waiterName ? h("span", null, "Waiter: ", h("strong", null, o.waiterName)) : null,
        h("span", null, "Opened: ", h("strong", null, fmtStamp(o.openedAt))),
        o.cancelReason ? h("span", { class: "bad" }, "Cancelled: ", o.cancelReason) : null,
        o.notes ? h("span", null, "Notes: ", o.notes) : null
      );
      const actions = h("div", { class: "dlg-actions" });
      if (editable) actions.append(h("button", { class: "btn", type: "button", onclick: () => {
        modal.close();
        ctx && ctx.nav("pos", { orderId: o.id });
      } }, "\uFF0B Add items"));
      if (open && hasNew && can("SEND_TO_KITCHEN")) actions.append(h("button", { class: "btn btn-primary", type: "button", onclick: () => sendNow(o) }, "Send to kitchen"));
      if ((open || billed) && hasReady && canAny(["UPDATE_KITCHEN_STATUS", "EDIT_ORDERS"])) actions.append(btn("Mark ready items served", "btn", async () => {
        await save("kitchenStatus", { orderId: o.id, status: "SERVED" });
        draw();
      }));
      if (editable) actions.append(h("button", { class: "btn", type: "button", onclick: () => editInfo(o) }, "Table / guests / notes"));
      if ((open || billed) && o.items.length && canAny(["GENERATE_BILLS", "PROCESS_PAYMENT", "VIEW_BILLS"])) actions.append(h("button", { class: "btn btn-primary", type: "button", onclick: () => openBill(o.id, { onChange: draw, ctx }) }, billed ? "Payment" : "Bill & payment"));
      if (!open && !billed && o.billId && canAny(["VIEW_BILLS", "PRINT_RECEIPT", "GENERATE_BILLS", "PROCESS_PAYMENT"])) actions.append(h("button", { class: "btn btn-primary", type: "button", onclick: () => openBill(o.id, { ctx }) }, "Receipt"));
      if ((open || billed) && can("CANCEL_ORDERS")) actions.append(h("button", { class: "btn btn-danger", type: "button", onclick: () => cancel(o) }, "Cancel order"));
      body.replaceChildren(meta, lines, totalsBlock(o), actions);
    }
    function btn(label, cls, fn) {
      const b = h("button", { class: cls, type: "button" }, label);
      b.addEventListener("click", () => act(b, fn));
      return b;
    }
    function sendNow(o) {
      const lines = o.items.filter((i) => i.kitchen === "NEW"), stamp2 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " ");
      lines.forEach((i) => {
        i.kitchen = "SENT";
        i.sentAt = stamp2;
      });
      emit("orders");
      draw();
      save("sendToKitchen", { orderId: o.id }).catch((e) => {
        lines.forEach((i) => {
          i.kitchen = "NEW";
          i.sentAt = "";
        });
        emit("orders");
        draw();
        toast(errText(e), "error");
      });
    }
    function change(b, l, qty) {
      if (qty < 1) return remove(b, l);
      const o = cur(), old = l.qty, oldTotals = [o.subtotal, o.tax, o.service, o.total];
      l.qty = qty;
      l.lineTotal = Math.round(l.price * qty * 100) / 100;
      const t = compute(o.items.reduce((a, x) => a + x.lineTotal, 0), 0, cfg());
      Object.assign(o, { subtotal: t.subtotal, tax: t.tax, service: t.service, total: t.total });
      emit("orders");
      draw();
      save("updateItem", { orderId: id, lineId: l.id, qty }).catch((e) => {
        l.qty = old;
        l.lineTotal = Math.round(l.price * old * 100) / 100;
        [o.subtotal, o.tax, o.service, o.total] = oldTotals;
        emit("orders");
        draw();
        toast(errText(e), "error");
      });
    }
    async function remove(b, l) {
      let reason = "";
      if (l.kitchen !== "NEW") {
        reason = await promptDialog("Remove sent item", "Reason (the kitchen has already received it)");
        if (!reason) return;
      }
      b.disabled = true;
      try {
        await save("removeItem", { orderId: id, lineId: l.id, reason });
      } catch (e) {
        toast(errText(e), "error");
      }
      draw();
    }
    async function cancel(o) {
      const reason = await promptDialog("Cancel order " + o.id, "Reason for cancelling", { confirm: "Cancel order" });
      if (!reason) return;
      toast("Order cancelled", "ok", 2e3);
      modal.close();
      save("cancelOrder", { orderId: o.id, reason }).catch((e) => toast("Cancel NOT saved: " + errText(e), "error", 5e3));
    }
    function editInfo(o) {
      const free = S.tables.filter((t) => t.active && (t.status === "FREE" || t.id === o.tableId));
      const f = {
        table: field({ label: "Table", options: [{ value: "", label: "No table (takeaway)" }].concat(free.map((t) => ({ value: t.id, label: t.name + (t.section ? " \xB7 " + t.section : "") }))), value: o.tableId }),
        guests: field({ label: "Guests", type: "number", value: String(o.guests || ""), inputmode: "numeric" }),
        customer: field({ label: "Customer name", value: o.customerName || "", maxlength: 60 }),
        notes: field({ label: "Notes", type: "textarea", value: o.notes || "", maxlength: 160 })
      };
      openModal({
        title: "Order details",
        content: h("div", { class: "stack" }, Object.values(f).map((x) => x.el)),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            const r = await act(ok, () => save("updateOrderInfo", { orderId: o.id, tableId: f.table.value(), guests: Number(f.guests.value()) || 0, customerName: f.customer.value(), notes: f.notes.value() }));
            if (r.ok) {
              m.close();
              draw();
            }
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Close"), ok];
        }
      });
    }
    if (!order || !order.items) load();
    else draw();
    return modal;
  }
  function openBill(orderId, { onChange, ctx } = {}) {
    const body = h("div", { class: "bill-dlg" });
    const modal = openModal({ title: "Bill", content: body, actions: null });
    modal.box.classList.add("wide");
    let order = S.orders.find((x) => x.id === orderId) || null, bill = null;
    const disc = { type: "NONE", value: 0, reason: "" };
    const pays = [{ method: "CASH", amount: "", reference: "" }];
    const payUid = newId("pay");
    async function load() {
      body.replaceChildren(loadingBlock());
      try {
        if (!order || !order.items) order = (await read2("getOrder", { orderId })).order;
        if (order.billId) {
          const r = await read2("getBill", { orderId });
          bill = r.bill;
          order = r.order;
          disc.type = bill.discountType;
          disc.value = bill.discountValue;
          disc.reason = bill.discountReason;
        }
        draw();
      } catch (e) {
        body.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      }
    }
    const due = () => Math.max(0, Math.round(((bill ? bill.total - bill.paid : 0) + 1e-9) * 100) / 100);
    function draw() {
      modal.box.querySelector("header h2").replaceChildren("Bill \xB7 ", order.id, " ", statusPill(order.status));
      const paidFull = bill && bill.paymentStatus === "PAID";
      const parts = [];
      parts.push(h("div", { class: "lines compact" }, order.items.map((l) => h(
        "div",
        { class: "line" },
        h("div", { class: "ln" }, l.name),
        h("div", { class: "lq" }, "\xD7" + l.qty),
        h("div", { class: "lt" }, M(l.lineTotal)),
        h("span")
      ))));
      const canBill = can("GENERATE_BILLS") && !paidFull && order.status !== "PAID" && order.status !== "CANCELLED";
      if (canBill) parts.push(discountBox());
      else if (bill) parts.push(totalsBlock({ subtotal: bill.subtotal, discount: bill.discount, service: bill.service, tax: bill.tax, roundOff: bill.roundOff, total: bill.total }));
      if (bill && bill.payments.length) parts.push(h(
        "div",
        { class: "pays-done" },
        h("h3", null, "Payments"),
        bill.payments.map((p) => h("div", { class: "trow" }, h("span", null, p.method + (p.reference ? " \xB7 " + p.reference : "") + (p.amount < 0 ? " (refund)" : "") + "  " + timeOf(p.at)), h("span", null, M(p.amount)))),
        h("div", { class: "trow grand" }, h("span", null, paidFull ? "Paid in full" : "Balance due"), h("span", null, paidFull ? M(bill.paid) : M(due())))
      ));
      const foot = h("div", { class: "dlg-actions" });
      if (canBill && !bill) foot.append(btn("Make bill", "btn btn-primary", makeBill));
      if (canBill && bill && order.status === "BILLED") foot.append(btn("Update discount", "btn", makeBill));
      if (bill && !paidFull && can("PROCESS_PAYMENT") && order.status === "BILLED") parts.push(payBox());
      if (bill && canAny(["PRINT_RECEIPT", "VIEW_BILLS", "GENERATE_BILLS", "PROCESS_PAYMENT"])) foot.append(h("button", { class: "btn", type: "button", onclick: () => printReceipt(order, bill) }, "\u{1F5A8} Print receipt"));
      if (bill && order.status === "PAID" && can("REFUND") && bill.paid > 0) foot.append(h("button", { class: "btn btn-danger", type: "button", onclick: refund }, "Refund"));
      parts.push(foot);
      body.replaceChildren(...parts);
    }
    function btn(label, cls, fn) {
      const b = h("button", { class: cls, type: "button" }, label);
      b.addEventListener("click", () => act(b, fn));
      return b;
    }
    function discountBox() {
      const c = cfg();
      const typeSel = field({ label: "Discount", options: [{ value: "NONE", label: "No discount" }, { value: "PERCENT", label: "Percent %" }, { value: "FIXED", label: "Fixed amount" }], value: disc.type });
      const val = field({ label: "Value", type: "number", value: disc.value ? String(disc.value) : "", inputmode: "decimal" });
      const why = field({ label: "Reason (required for a discount)", value: disc.reason, maxlength: 80 });
      const preview = h("div");
      const canDisc = can("APPLY_DISCOUNT");
      function sync() {
        disc.type = typeSel.value();
        disc.value = Number(val.value()) || 0;
        disc.reason = why.value();
        val.el.hidden = why.el.hidden = disc.type === "NONE";
        const d = discountAmount(order.subtotal, disc.type, disc.value);
        const t = compute(order.subtotal, d, c);
        preview.replaceChildren(
          totalsBlock(Object.assign({}, t)),
          !S.user.isOwner && disc.type === "PERCENT" && disc.value > c.maxDiscount ? h("div", { class: "form-error" }, "You may give at most " + c.maxDiscount + "% discount.") : null
        );
      }
      [typeSel.input, val.input, why.input].forEach((i) => i.addEventListener("input", sync));
      sync();
      return h("div", { class: "stack" }, canDisc ? h("div", { class: "form-grid" }, typeSel.el, val.el, h("div", { class: "span-2" }, why.el)) : null, preview);
    }
    async function makeBill() {
      if (disc.type !== "NONE" && !disc.reason) throw new Error("Please write the reason for the discount.");
      const prevBill = bill, prevOrder = order;
      const d = discountAmount(order.subtotal, disc.type, disc.value), t = compute(order.subtotal, d, cfg());
      bill = Object.assign({}, t, {
        id: prevBill ? prevBill.id : "BILL\u2026",
        orderId,
        discountType: disc.type,
        discountValue: disc.value,
        discountReason: disc.reason,
        paid: prevBill ? prevBill.paid : 0,
        paymentStatus: "UNPAID",
        status: "ACTIVE",
        payments: prevBill ? prevBill.payments : [],
        pending: true
      });
      order = Object.assign({}, order, { status: "BILLED", subtotal: t.subtotal, discount: t.discount, tax: t.tax, service: t.service, total: t.total });
      draw();
      billSaving = save("generateBill", { orderId, discountType: disc.type, discountValue: disc.value, discountReason: disc.reason });
      billSaving.then((r) => {
        if (r.queued) return;
        bill = r.bill;
        order = r.order || order;
        if (onChange) onChange();
        if (modal.box.isConnected) draw();
      }).catch((e) => {
        bill = prevBill;
        order = prevOrder;
        toast(errText(e), "error");
        if (modal.box.isConnected) draw();
      });
    }
    let billSaving = null;
    function payBox() {
      const total = due();
      const rows = h("div", { class: "pay-rows" });
      const sum = h("div", { class: "pay-sum" });
      const payBtn = h("button", { class: "btn btn-primary btn-lg", type: "button" }, "Take payment");
      function drawRows() {
        rows.replaceChildren(...pays.map((p, i) => {
          const method = h("select", { "aria-label": "Method" }, ["CASH", "CARD", "ONLINE", "OTHER"].map((m) => h("option", { value: m }, { CASH: "Cash", CARD: "Card", ONLINE: "Online / bank", OTHER: "Other" }[m])));
          method.value = p.method;
          method.addEventListener("change", () => {
            p.method = method.value;
          });
          const amt = h("input", { type: "number", inputmode: "decimal", min: "0", step: "any", placeholder: "Amount", "aria-label": "Amount" });
          amt.value = p.amount;
          amt.addEventListener("input", () => {
            p.amount = amt.value;
            calc();
          });
          const ref = h("input", { type: "text", maxlength: "40", placeholder: p.method === "CASH" ? "Reference (optional)" : "Reference / last 4 digits", "aria-label": "Reference" });
          ref.value = p.reference;
          ref.addEventListener("input", () => {
            p.reference = ref.value;
          });
          return h(
            "div",
            { class: "pay-row" },
            method,
            amt,
            ref,
            pays.length > 1 ? h("button", { class: "btn btn-quiet btn-small", type: "button", onclick: () => {
              pays.splice(i, 1);
              drawRows();
              calc();
            } }, "\u2715") : h("span")
          );
        }));
      }
      function calc() {
        const got = pays.reduce((s, p) => s + (Number(p.amount) || 0), 0);
        const left = Math.round((total - got) * 100) / 100;
        sum.replaceChildren(
          h("div", { class: "trow" }, h("span", null, "Entered"), h("span", null, M(got))),
          h("div", { class: "trow grand" }, h("span", null, left > 0 ? "Still to pay" : left < 0 ? "Too much (change)" : "Exact"), h("span", null, M(Math.abs(left))))
        );
        payBtn.disabled = got <= 0 || left < 0;
      }
      payBtn.addEventListener("click", () => act(payBtn, async () => {
        const list = pays.filter((p2) => Number(p2.amount) > 0).map((p2) => ({ method: p2.method, amount: Number(p2.amount), reference: p2.reference }));
        const sum2 = list.reduce((a, p2) => a + p2.amount, 0), prevBill = bill, prevOrder = order;
        const full = sum2 + 5e-3 >= due();
        const now = (/* @__PURE__ */ new Date()).toISOString();
        bill = Object.assign({}, bill, {
          paid: Math.round((bill.paid + Math.min(sum2, due())) * 100) / 100,
          paymentStatus: full ? "PAID" : "PARTIAL",
          payments: bill.payments.concat(list.map((p2) => ({ method: p2.method, reference: p2.reference, amount: p2.amount, at: now })))
        });
        if (full) order = Object.assign({}, order, { status: "PAID" });
        pays.splice(0, pays.length, { method: "CASH", amount: "", reference: "" });
        if (full) {
          toast("Payment complete", "ok", 2200);
          if (S.settings.AUTO_PRINT === "true") printReceipt(order, bill);
        }
        draw();
        const p = save("payBill", { orderId, uid: payUid + "-" + prevBill.payments.length, payments: list });
        p.then((r) => {
          if (r.queued) return;
          bill = r.bill;
          order = r.order || order;
          if (onChange) onChange();
          if (modal.box.isConnected) draw();
        }).catch((e) => {
          bill = prevBill;
          order = prevOrder;
          toast("Payment NOT saved: " + errText(e), "error", 6e3);
          if (modal.box.isConnected) draw();
        });
      }, { done: "Paid" }));
      drawRows();
      calc();
      return h(
        "div",
        { class: "pay-box" },
        h("h3", null, "Payment \xB7 " + M(total)),
        h(
          "div",
          { class: "quick" },
          h("button", { class: "btn btn-small", type: "button", onclick: () => {
            pays.splice(0, pays.length, { method: "CASH", amount: String(total), reference: "" });
            drawRows();
            calc();
          } }, "Full cash"),
          h("button", { class: "btn btn-small", type: "button", onclick: () => {
            pays.splice(0, pays.length, { method: "CARD", amount: String(total), reference: "" });
            drawRows();
            calc();
          } }, "Full card"),
          h("button", { class: "btn btn-small", type: "button", onclick: () => {
            pays.push({ method: "CARD", amount: "", reference: "" });
            drawRows();
          } }, "+ Split payment")
        ),
        rows,
        sum,
        payBtn
      );
    }
    async function refund() {
      const amount = await promptDialog("Refund", "Amount to refund (up to " + M(bill.paid) + ")", { value: String(bill.paid) });
      if (!amount) return;
      const reason = await promptDialog("Refund", "Reason");
      if (!reason) return;
      try {
        const r = await save("refund", { billId: bill.id, amount: Number(amount), reason, method: "CASH", uid: newId("rfd") });
        bill = r.bill;
        toast("Refund saved", "ok", 2e3);
        draw();
      } catch (e) {
        toast(errText(e), "error");
      }
    }
    load();
    return modal;
  }
  var esc = (s) => String(s === null || s === void 0 ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  function printReceipt(order, bill) {
    const st2 = S.settings, size = st2.RECEIPT_SIZE || "80mm", m = (n) => esc(money(n, st2));
    const width = size === "A4" ? "190mm" : size === "58mm" ? "52mm" : "72mm", fs = size === "A4" ? "13px" : "11px";
    const rows = (order.items || []).map((l) => `<tr><td>${esc(l.name)}${l.notes ? "<br><small>" + esc(l.notes) + "</small>" : ""}</td><td class="r">${l.qty}</td><td class="r">${m(l.price)}</td><td class="r">${m(l.lineTotal)}</td></tr>`).join("");
    const line = (k, v, b) => `<tr class="${b ? "b" : ""}"><td colspan="3">${esc(k)}</td><td class="r">${v}</td></tr>`;
    let t = line("Subtotal", m(bill.subtotal));
    if (bill.discount) t += line("Discount", "-" + m(bill.discount));
    if (bill.service) t += line("Service charge", m(bill.service));
    if (bill.tax) t += line(st2.TAX_LABEL || "Tax", m(bill.tax));
    if (bill.roundOff) t += line("Rounding", m(bill.roundOff));
    t += line("TOTAL", m(bill.total), true);
    const pay = (bill.payments || []).map((p) => line(p.method + (p.reference ? " " + p.reference : ""), m(p.amount))).join("");
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(bill.id)}</title><style>
    @page{margin:4mm} body{font:${fs}/1.35 "Courier New",monospace;width:${width};margin:0 auto;color:#000}
    h1{font-size:1.5em;margin:0;text-align:center} .c{text-align:center} hr{border:0;border-top:1px dashed #000;margin:6px 0}
    table{width:100%;border-collapse:collapse} td{padding:1px 0;vertical-align:top} .r{text-align:right;white-space:nowrap;padding-left:6px} .b td{font-weight:700;border-top:1px solid #000;padding-top:3px;font-size:1.15em} small{font-size:.85em}
    </style></head><body>
    <h1>${esc(st2.HOTEL_NAME || S.hotel && S.hotel.name || "")}</h1>
    <div class="c">${esc(st2.HOTEL_ADDRESS || "")}${st2.HOTEL_PHONE ? "<br>Tel: " + esc(st2.HOTEL_PHONE) : ""}${st2.TAX_NUMBER ? "<br>Tax no: " + esc(st2.TAX_NUMBER) : ""}</div><hr>
    <div>Bill: ${esc(bill.id)}<br>Order: ${esc(order.id)}${order.tableName ? " \xB7 " + esc(order.tableName) : " \xB7 Takeaway"}<br>Date: ${esc(fmtStamp(order.openedAt))}<br>${order.waiterName ? "Served by: " + esc(order.waiterName) + "<br>" : ""}${order.customerName ? "Customer: " + esc(order.customerName) : ""}</div><hr>
    <table><thead><tr><td>Item</td><td class="r">Qty</td><td class="r">Rate</td><td class="r">Amount</td></tr></thead><tbody>${rows}</tbody></table><hr>
    <table>${t}</table>${pay ? "<hr><table>" + pay + "</table>" : ""}<hr>
    <div class="c">${esc(st2.RECEIPT_FOOTER || "Thank you for visiting!")}</div></body></html>`;
    const frame = h("iframe", { style: "position:fixed;right:0;bottom:0;width:0;height:0;border:0", "aria-hidden": "true" });
    document.body.append(frame);
    const doc = frame.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
    setTimeout(() => {
      try {
        frame.contentWindow.focus();
        frame.contentWindow.print();
      } catch (e) {
        toast("Printing is not available in this browser.", "error");
      }
      setTimeout(() => frame.remove(), 6e4);
    }, 250);
  }

  // web/js/s-tables.js
  var filter = "ALL";
  function render2(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    const wrap = h("div", { class: "stack" });
    el.replaceChildren(wrap);
    function draw() {
      const tableList = S.tables.filter((t) => t.active);
      const byOrder = {};
      S.orders.forEach((o) => {
        byOrder[o.id] = o;
      });
      const counts = { ALL: tableList.length, FREE: 0, OCCUPIED: 0, BILLING: 0 };
      tableList.forEach((t) => {
        counts[t.status] = (counts[t.status] || 0) + 1;
      });
      const shown = tableList.filter((t) => filter === "ALL" || t.status === filter);
      const sections = {};
      shown.forEach((t) => {
        (sections[t.section || "Tables"] = sections[t.section || "Tables"] || []).push(t);
      });
      const bar2 = h(
        "div",
        { class: "toolbar" },
        tabs([{ key: "ALL", label: "All " + counts.ALL }, { key: "FREE", label: "Free " + counts.FREE }, { key: "OCCUPIED", label: "Busy " + (counts.OCCUPIED || 0) }, { key: "BILLING", label: "Billing " + (counts.BILLING || 0) }], filter, (k) => {
          filter = k;
          draw();
        }),
        h("div", { class: "spacer" }),
        can("CREATE_ORDERS") ? h("button", { class: "btn btn-primary", type: "button", onclick: () => ctx.nav("pos", { takeaway: true }) }, "\uFF0B Takeaway order") : null
      );
      const parts = [bar2];
      if (!tableList.length) parts.push(emptyState("No tables yet", can("MANAGE_TABLES") ? "Add tables in Settings \u2192 Tables." : "Ask the manager to add tables."));
      Object.keys(sections).forEach((name) => parts.push(h(
        "section",
        null,
        h("h2", { class: "sec" }, name),
        h("div", { class: "tgrid" }, sections[name].map((t) => {
          const o = byOrder[t.currentOrderId];
          return h(
            "button",
            { class: "tcard t-" + t.status, type: "button", onclick: () => pick(t, o) },
            h("div", { class: "tn" }, t.name),
            h("div", { class: "ts" }, t.capacity + " seats"),
            o ? h("div", { class: "tinfo" }, h("strong", null, M2(o.total)), h("span", null, minutesSince(o.openedAt) + " min" + (o.waiterName ? " \xB7 " + o.waiterName.split(" ")[0] : ""))) : h("div", { class: "tinfo free" }, "Free"),
            t.status === "BILLING" ? h("div", { class: "tflag" }, "Awaiting payment") : null
          );
        }))
      )));
      const take = S.orders.filter((o) => !o.tableId);
      if (take.length && filter === "ALL") parts.push(h(
        "section",
        null,
        h("h2", { class: "sec" }, "Takeaway"),
        h("div", { class: "tgrid" }, take.map((o) => h(
          "button",
          { class: "tcard t-OCCUPIED", type: "button", onclick: () => o.tmp ? toast("Saving this order\u2026", "info", 1200) : openOrder(o, ctx) },
          h("div", { class: "tn" }, o.customerName || o.id.slice(-4)),
          h("div", { class: "ts" }, "Takeaway"),
          h("div", { class: "tinfo" }, h("strong", null, M2(o.total)), h("span", null, minutesSince(o.openedAt) + " min"))
        )))
      ));
      wrap.replaceChildren(...parts);
    }
    function pick(t, o) {
      if (o && o.tmp) {
        toast("Saving this order\u2026", "info", 1200);
        return;
      }
      if (o) {
        openOrder(o, ctx);
        return;
      }
      if (t.status !== "FREE") {
        toast("This table is " + t.status.toLowerCase() + ". Refresh in a moment.", "info");
        return;
      }
      if (!can("CREATE_ORDERS")) {
        toast("You do not have permission to start orders.", "info");
        return;
      }
      ctx.nav("pos", { tableId: t.id });
    }
    draw();
    const off = on((k) => {
      if (k.includes("tables") || k.includes("orders") || k.includes("all")) draw();
    });
    const tm = setInterval(draw, 6e4);
    return () => {
      off();
      clearInterval(tm);
    };
  }

  // web/js/s-pos.js
  var s_pos_exports = {};
  __export(s_pos_exports, {
    render: () => render3
  });
  var cart = { uid: "", lines: [], type: "DINE_IN", tableId: "", guests: "", customerId: "", customerName: "", notes: "", addTo: "" };
  var reset = () => {
    Object.assign(cart, { uid: "", lines: [], type: "DINE_IN", tableId: "", guests: "", customerId: "", customerName: "", notes: "", addTo: "" });
  };
  function render3(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    const hand = S.handoff;
    S.handoff = null;
    if (hand) {
      if (hand.orderId) {
        reset();
        cart.addTo = hand.orderId;
      } else if (hand.takeaway) {
        if (cart.addTo) reset();
        cart.type = "TAKEAWAY";
        cart.tableId = "";
      } else if (hand.tableId) {
        if (cart.addTo) reset();
        cart.type = "DINE_IN";
        cart.tableId = hand.tableId;
      }
    }
    let catId = "ALL", q = "";
    const addOrder = () => S.orders.find((o) => o.id === cart.addTo) || null;
    if (cart.addTo && !addOrder()) reset();
    const grid = h("div", { class: "mgrid" });
    const chips = h("div", { class: "chips" });
    const cartEl = h("aside", { class: "cart" });
    const search = h("input", { type: "search", placeholder: "Search menu\u2026", "aria-label": "Search menu", class: "search" });
    search.addEventListener("input", debounce(() => {
      q = search.value.trim().toLowerCase();
      drawMenu();
    }, 120));
    el.replaceChildren(h("div", { class: "pos" }, h("section", { class: "pos-menu" }, h("div", { class: "pos-top" }, search, chips), grid), cartEl));
    function drawChips() {
      const cats = [{ id: "ALL", name: "All" }].concat(S.categories.filter((c) => c.status !== "INACTIVE"));
      chips.replaceChildren(...cats.map((c) => h("button", { class: "chip" + (c.id === catId ? " on" : ""), type: "button", onclick: () => {
        catId = c.id;
        drawChips();
        drawMenu();
      } }, c.name)));
    }
    function drawMenu() {
      const items = S.menu.filter((m) => (catId === "ALL" || m.categoryId === catId) && (!q || m.name.toLowerCase().includes(q)));
      if (!items.length) {
        grid.replaceChildren(emptyState(S.menu.length ? "No items match" : "The menu is empty", S.menu.length ? "" : can("ADD_MENU") ? "Add items in the Menu screen." : "Ask the manager to add menu items."));
        return;
      }
      grid.replaceChildren(...items.map((m) => h(
        "button",
        { class: "mcard" + (m.available ? "" : " off"), type: "button", disabled: !m.available, onclick: () => add(m) },
        m.thumbUrl ? h("img", { src: m.thumbUrl, alt: "", loading: "lazy", referrerpolicy: "no-referrer", onerror: (e) => e.currentTarget.remove() }) : h("div", { class: "ph" }, m.name.slice(0, 1).toUpperCase()),
        h("div", { class: "mn" }, m.name),
        h("div", { class: "mp" }, m.available ? M2(m.price) : "Sold out"),
        cart.lines.find((l) => l.menuId === m.id && !l.notes) ? h("span", { class: "badge" }, cart.lines.filter((l) => l.menuId === m.id).reduce((s, l) => s + l.qty, 0)) : null
      )));
    }
    function add(m) {
      const ex = cart.lines.find((l) => l.menuId === m.id && !l.notes);
      if (ex) ex.qty++;
      else cart.lines.push({ menuId: m.id, name: m.name, price: m.price, qty: 1, notes: "" });
      if (!cart.uid) cart.uid = newId("ord");
      drawMenu();
      drawCart();
    }
    function drawCart() {
      const base = addOrder();
      const sub = cart.lines.reduce((s, l) => s + l.price * l.qty, 0);
      const t = compute(base ? base.subtotal + sub : sub, 0, cfg());
      const free = S.tables.filter((x) => x.active && (x.status === "FREE" || x.id === cart.tableId));
      const head = base ? h(
        "div",
        { class: "cart-head" },
        h("strong", null, "Adding to " + base.id),
        h("div", { class: "muted" }, (base.tableName || "Takeaway") + " \xB7 currently " + M2(base.total)),
        h("button", { class: "btn btn-small", type: "button", onclick: () => {
          reset();
          render3(el, ctx);
        } }, "Start new order instead")
      ) : h(
        "div",
        { class: "cart-head" },
        h("div", { class: "seg" }, ["DINE_IN", "TAKEAWAY"].map((k) => h("button", { class: k === cart.type ? "on" : "", type: "button", onclick: () => {
          cart.type = k;
          if (k === "TAKEAWAY") cart.tableId = "";
          drawCart();
        } }, k === "DINE_IN" ? "Dine-in" : "Takeaway"))),
        cart.type === "DINE_IN" ? h(
          "div",
          { class: "form-grid" },
          (() => {
            const f = field({ label: "Table", options: [{ value: "", label: "Choose table\u2026" }].concat(free.map((x) => ({ value: x.id, label: x.name + (x.section ? " \xB7 " + x.section : "") }))), value: cart.tableId });
            f.input.addEventListener("change", () => {
              cart.tableId = f.value();
            });
            return f.el;
          })(),
          (() => {
            const f = field({ label: "Guests", type: "number", value: cart.guests, inputmode: "numeric" });
            f.input.addEventListener("input", () => {
              cart.guests = f.value();
            });
            return f.el;
          })()
        ) : null,
        customerBox()
      );
      const linesEl = h("div", { class: "lines" }, cart.lines.length ? cart.lines.map((l, i) => h(
        "div",
        { class: "line" },
        h("div", { class: "ln" }, h("strong", null, l.name), h("button", { class: "link-button note-btn", type: "button", onclick: () => noteFor(l) }, l.notes ? "\u270E " + l.notes : "+ note")),
        h("div", { class: "lq" }, h("button", { class: "qty-btn", type: "button", "aria-label": "One less", onclick: () => {
          l.qty--;
          if (l.qty < 1) cart.lines.splice(i, 1);
          drawMenu();
          drawCart();
        } }, "\u2212"), h("span", { class: "qty" }, l.qty), h("button", { class: "qty-btn", type: "button", "aria-label": "One more", onclick: () => {
          l.qty++;
          drawMenu();
          drawCart();
        } }, "+")),
        h("div", { class: "lt" }, M2(l.price * l.qty)),
        h("span")
      )) : h("div", { class: "muted pad" }, "Tap items on the left to add them."));
      const placeBtn = h("button", { class: "btn btn-block", type: "button", disabled: !cart.lines.length }, base ? "Add to order" : "Save order");
      const sendBtn = h("button", { class: "btn btn-primary btn-block btn-lg", type: "button", disabled: !cart.lines.length || !can("SEND_TO_KITCHEN") }, base ? "Add & send to kitchen" : "Send to kitchen");
      placeBtn.addEventListener("click", () => submit(placeBtn, false));
      sendBtn.addEventListener("click", () => submit(sendBtn, true));
      cartEl.replaceChildren(
        head,
        linesEl,
        h(
          "div",
          { class: "totals" },
          h("div", { class: "trow" }, h("span", null, "Subtotal"), h("span", null, M2(t.subtotal))),
          t.service ? h("div", { class: "trow" }, h("span", null, "Service charge"), h("span", null, M2(t.service))) : null,
          t.tax ? h("div", { class: "trow" }, h("span", null, S.settings.TAX_LABEL || "Tax"), h("span", null, M2(t.tax))) : null,
          h("div", { class: "trow grand" }, h("span", null, "Total"), h("span", null, M2(t.total)))
        ),
        h(
          "div",
          { class: "cart-actions" },
          sendBtn,
          placeBtn,
          cart.lines.length ? h("button", { class: "btn btn-quiet btn-block", type: "button", onclick: () => {
            reset();
            drawMenu();
            drawCart();
          } }, "Clear") : null
        )
      );
    }
    function customerBox() {
      const f = field({ label: "Customer (optional)", value: cart.customerName, maxlength: 60, placeholder: "Name or phone" });
      const list = h("div", { class: "suggest" });
      const find = debounce(async () => {
        const text = f.value();
        cart.customerName = text;
        cart.customerId = "";
        if (text.length < 2) {
          list.replaceChildren();
          return;
        }
        try {
          const r = await read2("searchCustomers", { q: text });
          list.replaceChildren(...r.customers.map((c) => h("button", { class: "sug", type: "button", onclick: () => {
            cart.customerId = c.id;
            cart.customerName = c.name;
            f.input.value = c.name;
            list.replaceChildren();
          } }, c.name + (c.phone ? " \xB7 " + c.phone : ""))));
        } catch (e) {
          list.replaceChildren();
        }
      }, 300);
      f.input.addEventListener("input", find);
      return h("div", { class: "cust" }, f.el, list);
    }
    async function noteFor(l) {
      const f = field({ label: "Note for the kitchen (" + l.name + ")", value: l.notes, maxlength: 80, placeholder: "e.g. no onion, extra spicy" });
      const m = openModal({ title: "Item note", content: f.el, actions: (mm) => [
        h("button", { class: "btn", type: "button", onclick: () => mm.close() }, "Cancel"),
        h("button", { class: "btn btn-primary", type: "button", onclick: () => {
          l.notes = f.value();
          mm.close();
          drawCart();
        } }, "Save")
      ] });
      f.input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          m.box.querySelector(".btn-primary").click();
        }
      });
    }
    function submit(btn, send) {
      const base = addOrder();
      if (!base && cart.type === "DINE_IN" && !cart.tableId) {
        toast("Choose a table first (or switch to Takeaway).", "error");
        return;
      }
      const lines = cart.lines.map((l) => Object.assign({}, l)), items = lines.map((l) => ({ menuId: l.menuId, qty: l.qty, notes: l.notes }));
      const snapshot = JSON.parse(JSON.stringify(cart));
      const where = base ? base.id : cart.type === "DINE_IN" ? (S.tables.find((t) => t.id === cart.tableId) || {}).name : "takeaway";
      const fail = (err) => {
        Object.assign(cart, snapshot);
        toast("The order for " + where + " was NOT saved: " + errText(err) + " Your items are back in the cart.", "error", 12e3);
      };
      if (base) addToOrder(base.id, lines, send, fail);
      else placeOrder({ uid: cart.uid || newId("ord"), type: cart.type, tableId: cart.tableId, guests: Number(cart.guests) || 0, customerId: cart.customerId, customerName: cart.customerName, notes: cart.notes, items, send }, lines, fail);
      reset();
      toast(send ? "Sent to kitchen \u2713" : "Order saved \u2713", "ok", 1400);
      if (can("VIEW_TABLES")) ctx.nav("tables");
      else {
        drawMenu();
        drawCart();
      }
    }
    drawChips();
    drawMenu();
    drawCart();
    const off = on((k) => {
      if (k.includes("menu") || k.includes("all")) {
        drawChips();
        drawMenu();
      }
      if (k.includes("tables") || k.includes("orders")) {
        if (!cartEl.contains(document.activeElement) || document.activeElement.tagName === "BODY") drawCart();
      }
    });
    return off;
  }

  // web/js/s-kitchen.js
  var s_kitchen_exports = {};
  __export(s_kitchen_exports, {
    render: () => render4
  });
  var sound = true;
  var seen = /* @__PURE__ */ new Set();
  var first = true;
  function beep() {
    if (!sound) return;
    try {
      const a = new (window.AudioContext || window.webkitAudioContext)(), o = a.createOscillator(), g = a.createGain();
      o.connect(g);
      g.connect(a.destination);
      o.frequency.value = 880;
      g.gain.value = 0.08;
      o.start();
      o.stop(a.currentTime + 0.18);
    } catch (e) {
    }
  }
  function render4(el, ctx) {
    const board = h("div", { class: "kboard" });
    const soundBtn = h("button", { class: "btn btn-small", type: "button", onclick: () => {
      sound = !sound;
      soundBtn.textContent = sound ? "\u{1F514} Sound on" : "\u{1F515} Sound off";
    } }, sound ? "\u{1F514} Sound on" : "\u{1F515} Sound off");
    el.replaceChildren(h("div", { class: "toolbar" }, h("div", { class: "muted" }, "Tap a button on a ticket to move it along."), h("div", { class: "spacer" }), soundBtn), board);
    const canMove = can("UPDATE_KITCHEN_STATUS");
    const COLS = [["SENT", "New", "PREPARING", "Start preparing"], ["PREPARING", "Preparing", "READY", "Mark ready"], ["READY", "Ready to serve", "SERVED", "Served"]];
    function stageOf(o) {
      for (const s of ["SENT", "PREPARING", "READY"]) if (o.items.some((i) => i.kitchen === s)) return s;
      return null;
    }
    async function move(o, from, to) {
      const lines = o.items.filter((i) => i.kitchen === from);
      const ids = lines.map((l) => l.id), old = lines.map((l) => l.kitchen);
      lines.forEach((l) => {
        l.kitchen = to;
      });
      emit("orders");
      draw();
      try {
        await save("kitchenStatus", { orderId: o.id, lineIds: ids, status: to });
      } catch (e) {
        lines.forEach((l, i) => {
          l.kitchen = old[i];
        });
        toast(errText(e), "error");
        poll();
        draw();
      }
    }
    function draw() {
      const live = S.orders.filter((o) => !o.tmp && o.items && stageOf(o));
      const sorted = (arr) => arr.sort((a, b) => (a.items.find((i) => i.sentAt) || {}).sentAt > (b.items.find((i) => i.sentAt) || {}).sentAt ? 1 : -1);
      board.replaceChildren(...COLS.map(([stage, title, next, nextLabel]) => {
        const list = sorted(live.filter((o) => stageOf(o) === stage));
        return h(
          "section",
          { class: "kcol k-col-" + stage },
          h("h2", null, title, h("span", { class: "count" }, list.length)),
          list.length ? list.map((o) => {
            const mins = minutesSince((o.items.find((i) => i.sentAt) || {}).sentAt || o.openedAt);
            const mine = o.items.filter((i) => i.kitchen === stage);
            return h(
              "article",
              { class: "ticket" + (mins >= 20 && stage !== "READY" ? " late" : "") },
              h("header", null, h("strong", null, o.tableName || "Takeaway"), h("span", null, o.id.slice(-4) + " \xB7 " + timeOf(o.openedAt)), h("span", { class: "age" }, mins + " min")),
              h("ul", null, o.items.filter((i) => ["SENT", "PREPARING", "READY"].includes(i.kitchen)).map((i) => h("li", { class: i.kitchen === stage ? "" : "dim" }, h("b", null, i.qty + "\xD7"), " " + i.name, i.notes ? h("div", { class: "note" }, i.notes) : null))),
              canMove || next === "SERVED" && canAny(["EDIT_ORDERS"]) ? h("button", { class: "btn btn-primary btn-block", type: "button", onclick: () => move(o, stage, next) }, nextLabel + (mine.length !== o.items.length ? " (" + mine.length + ")" : "")) : null
            );
          }) : emptyState("Nothing here")
        );
      }));
      const ids = new Set(live.filter((o) => stageOf(o) === "SENT").map((o) => o.id + ":" + o.items.filter((i) => i.kitchen === "SENT").map((i) => i.id).join()));
      if (!first) ids.forEach((k) => {
        if (!seen.has(k)) beep();
      });
      seen = ids;
      first = false;
    }
    first = true;
    draw();
    const off = on((k) => {
      if (k.includes("orders") || k.includes("all")) draw();
    });
    const tm = setInterval(draw, 3e4);
    return () => {
      off();
      clearInterval(tm);
    };
  }

  // web/js/s-orders.js
  var s_orders_exports = {};
  __export(s_orders_exports, {
    render: () => render5
  });
  var st = { from: "", to: "", status: "ALL", q: "" };
  function render5(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    if (!st.from) {
      st.from = st.to = todayISO();
    }
    let rows = [], alive = true, truncated = false;
    const list = h("div", { class: "tablewrap" });
    const from = field({ label: "From", type: "date", value: st.from }), to = field({ label: "To", type: "date", value: st.to });
    const status = field({ label: "Status", options: [["ALL", "All"], ["OPEN", "Open"], ["BILLED", "Billed"], ["PAID", "Paid"], ["CANCELLED", "Cancelled"]].map(([value, label]) => ({ value, label })), value: st.status });
    const q = field({ label: "Search", value: st.q, placeholder: "Order no., table, customer, waiter" });
    const info = h("div", { class: "muted" });
    async function load() {
      st.from = from.value();
      st.to = to.value() || st.from;
      list.replaceChildren(loadingBlock());
      swr("listOrders", { from: st.from, to: st.to }, (r) => {
        if (!alive) return;
        rows = r.orders;
        truncated = r.truncated;
        draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function visible() {
      const t = st.q.toLowerCase();
      return rows.filter((o) => (st.status === "ALL" || o.status === st.status) && (!t || [o.id, o.tableName, o.customerName, o.waiterName].some((v) => String(v || "").toLowerCase().includes(t))));
    }
    function draw() {
      const v = visible(), total = v.filter((o) => o.status !== "CANCELLED").reduce((s, o) => s + o.total, 0);
      info.textContent = v.length + " order" + (v.length === 1 ? "" : "s") + " \xB7 " + M2(total) + (truncated ? " \xB7 showing the latest 400 only, narrow the dates" : "");
      if (!v.length) {
        list.replaceChildren(emptyState("No orders found", "Try other dates or filters."));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Order", "Opened", "Table", "Customer", "Waiter", "Status", "Total"].map((x, i) => h("th", { class: i === 6 ? "r" : "" }, x)))),
        h("tbody", null, v.map((o) => h(
          "tr",
          { class: "click", tabindex: "0", onclick: () => openOrder(o.id, ctx), onkeydown: (e) => {
            if (e.key === "Enter") openOrder(o.id, ctx);
          } },
          h("td", null, o.id),
          h("td", null, fmtStamp(o.openedAt)),
          h("td", null, o.tableName || "Takeaway"),
          h("td", null, o.customerName || "\u2013"),
          h("td", null, o.waiterName || "\u2013"),
          h("td", null, statusPill(o.status)),
          h("td", { class: "r" }, M2(o.total))
        )))
      ));
    }
    const reload = debounce(load, 200);
    [from.input, to.input].forEach((i) => i.addEventListener("change", reload));
    status.input.addEventListener("change", () => {
      st.status = status.value();
      draw();
    });
    q.input.addEventListener("input", debounce(() => {
      st.q = q.value();
      draw();
    }, 150));
    el.replaceChildren(h(
      "div",
      { class: "stack" },
      h(
        "div",
        { class: "filters" },
        from.el,
        to.el,
        status.el,
        q.el,
        h(
          "div",
          { class: "btnrow" },
          h("button", { class: "btn", type: "button", onclick: () => {
            from.input.value = to.input.value = todayISO();
            load();
          } }, "Today"),
          h("button", { class: "btn", type: "button", onclick: () => {
            from.input.value = to.input.value = shiftDay(todayISO(), -1);
            load();
          } }, "Yesterday"),
          h("button", { class: "btn", type: "button", onclick: () => {
            from.input.value = shiftDay(todayISO(), -6);
            to.input.value = todayISO();
            load();
          } }, "7 days"),
          h("button", { class: "btn", type: "button", onclick: () => download("orders-" + st.from + "_" + st.to + ".csv", toCsv([["Order", "Opened", "Table", "Customer", "Waiter", "Status", "Subtotal", "Discount", "Service", "Tax", "Total"]].concat(visible().map((o) => [o.id, o.openedAt, o.tableName, o.customerName, o.waiterName, o.status, o.subtotal, o.discount, o.service, o.tax, o.total])))) }, "Export CSV")
        )
      ),
      info,
      list
    ));
    load();
    const off = on((k) => {
      if (alive && k.includes("orders") && st.to >= todayISO()) reload();
    });
    return () => {
      alive = false;
      off();
    };
  }

  // web/js/s-menu.js
  var s_menu_exports = {};
  __export(s_menu_exports, {
    render: () => render6
  });
  var catFilter = "ALL";
  function shrink(file, max = 640, limit = 16e4) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file), img = new Image();
      img.onload = () => {
        const k = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width * k);
        c.height = Math.round(img.height * k);
        const g = c.getContext("2d");
        g.fillStyle = "#fff";
        g.fillRect(0, 0, c.width, c.height);
        g.drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        let q = 0.8, out = c.toDataURL("image/jpeg", q);
        while (out.length > limit && q > 0.2) {
          q -= 0.07;
          out = c.toDataURL("image/jpeg", q);
        }
        if (out.length > 4e5) reject(new Error("That photo is too large even after shrinking. Choose another."));
        else resolve(out);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("That file is not a picture the browser can open."));
      };
      img.src = url;
    });
  }
  function render6(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    const edit = can("EDIT_MENU"), add = can("ADD_MENU");
    const wrap = h("div", { class: "stack" });
    el.replaceChildren(wrap);
    function draw() {
      const cats = S.categories;
      const items = S.menu.filter((m) => catFilter === "ALL" || m.categoryId === catFilter);
      const catName = (id) => (cats.find((c) => c.id === id) || {}).name || "\u2013";
      wrap.replaceChildren(
        h(
          "div",
          { class: "toolbar" },
          h("div", { class: "chips" }, [{ id: "ALL", name: "All" }].concat(cats).map((c) => h("button", { class: "chip" + (c.id === catFilter ? " on" : ""), type: "button", onclick: () => {
            catFilter = c.id;
            draw();
          } }, c.name))),
          h("div", { class: "spacer" }),
          add ? h("button", { class: "btn", type: "button", onclick: () => categoryDialog() }, "\uFF0B Category") : null,
          edit && catFilter !== "ALL" ? h("button", { class: "btn", type: "button", onclick: () => categoryDialog(cats.find((c) => c.id === catFilter)) }, "Rename category") : null,
          add ? h("button", { class: "btn btn-primary", type: "button", onclick: () => itemDialog(null) }, "\uFF0B Menu item") : null
        ),
        items.length ? h("div", { class: "mgrid manage" }, items.map((m) => h(
          "article",
          { class: "mcard static" + (m.available ? "" : " off") },
          m.thumbUrl ? h("img", { src: m.thumbUrl, alt: "", loading: "lazy", referrerpolicy: "no-referrer", onerror: (e) => e.currentTarget.remove() }) : h("div", { class: "ph" }, m.name.slice(0, 1).toUpperCase()),
          h("div", { class: "mn" }, m.name),
          h("div", { class: "mp" }, M2(m.price) + (m.costPrice !== void 0 && edit ? "  \xB7  cost " + M2(m.costPrice) : "")),
          h("div", { class: "muted small" }, catName(m.categoryId)),
          h(
            "div",
            { class: "btnrow" },
            can("UPDATE_KITCHEN_STATUS") || edit ? availBtn(m) : null,
            edit ? h("button", { class: "btn btn-small", type: "button", onclick: () => itemDialog(m) }, "Edit") : null
          )
        ))) : emptyState(S.menu.length ? "No items in this category" : "The menu is empty", add ? "Use \u201C\uFF0B Menu item\u201D to add your first dish." : "")
      );
    }
    function availBtn(m) {
      const b = h("button", { class: "btn btn-small", type: "button" }, m.available ? "Mark sold out" : "Back in stock");
      b.addEventListener("click", async () => {
        const prev = m.available;
        m.available = !prev;
        draw();
        try {
          await save("setAvailability", { menuId: m.id, available: m.available });
        } catch (e) {
          m.available = prev;
          draw();
          toast(errText(e), "error");
        }
      });
      return b;
    }
    function categoryDialog(cat) {
      const name = field({ label: "Category name", value: cat ? cat.name : "", maxlength: 60 });
      const sort = field({ label: "Order in lists (0 first)", type: "number", value: cat ? String(cat.sort) : String(S.categories.length + 1) });
      openModal({
        title: cat ? "Edit category" : "New category",
        content: h("div", { class: "stack" }, name.el, sort.el),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            name.clear();
            const r = await act(ok, () => save("saveCategory", { categoryId: cat ? cat.id : "", name: name.value(), sort: Number(sort.value()) || 0 }));
            if (r.ok) {
              m.close();
            }
          });
          const del = cat && can("DELETE_MENU") ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Delete category", "Delete \u201C" + cat.name + "\u201D? It must have no items.", "Delete", true)) {
              try {
                await save("deleteCategory", { categoryId: cat.id });
                catFilter = "ALL";
                m.close();
              } catch (e) {
                toast(errText(e), "error");
              }
            }
          } }, "Delete") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    function itemDialog(m) {
      if (!S.categories.length) {
        toast("Create a category first.", "error");
        return categoryDialog();
      }
      const f = {
        name: field({ label: "Name", value: m ? m.name : "", maxlength: 80 }),
        categoryId: field({ label: "Category", options: S.categories.map((c) => ({ value: c.id, label: c.name })), value: m ? m.categoryId : catFilter !== "ALL" ? catFilter : S.categories[0].id }),
        price: field({ label: "Selling price", type: "number", value: m ? String(m.price) : "", inputmode: "decimal" }),
        costPrice: field({ label: "Cost price (for profit reports)", type: "number", value: m && m.costPrice !== void 0 ? String(m.costPrice) : "", inputmode: "decimal" }),
        prepMinutes: field({ label: "Preparation time (minutes)", type: "number", value: m ? String(m.prepMinutes || "") : "", inputmode: "numeric" }),
        description: field({ label: "Description", type: "textarea", value: m ? m.description : "", maxlength: 160 })
      };
      let imageUrl = m ? m.thumbUrl : "", pendingData = "";
      const pic = h("div", { class: "pic" });
      let smallData = "";
      const fileIn = h("input", { type: "file", accept: "image/*", hidden: true });
      function drawPic(busy) {
        const shown = pendingData || imageUrl;
        pic.replaceChildren(
          busy ? h("div", { class: "ph" }, spinner("big")) : shown ? h("img", { src: shown, alt: "", referrerpolicy: "no-referrer" }) : h("div", { class: "ph" }, "No photo"),
          h(
            "div",
            { class: "btnrow" },
            h("button", { class: "btn btn-small", type: "button", onclick: () => fileIn.click() }, shown ? "Change photo" : "Add photo"),
            m && imageUrl && !pendingData ? h("button", { class: "btn btn-small btn-danger", type: "button", onclick: removePhoto }, "Remove") : null
          )
        );
      }
      async function removePhoto() {
        try {
          await save("removeMenuImage", { menuId: m.id });
          imageUrl = "";
          m.thumbUrl = "";
          m.imageUrl = "";
          drawPic();
          draw();
        } catch (e) {
          toast(errText(e), "error");
        }
      }
      fileIn.addEventListener("change", async () => {
        const file = fileIn.files[0];
        if (!file) return;
        drawPic(true);
        try {
          const data = await shrink(file);
          smallData = await shrink(file, 220, 36e3);
          if (!m) pendingData = data;
          else {
            const r = await save("uploadMenuImage", { menuId: m.id, mime: "image/jpeg", data, small: smallData }, { timeout: 9e4, queue: false });
            imageUrl = r.thumbUrl || r.imageUrl;
            m.thumbUrl = r.thumbUrl;
            m.imageUrl = r.imageUrl;
            draw();
            toast("Photo saved \u2713", "ok", 1500);
          }
        } catch (e) {
          toast(errText(e), "error", 9e3);
        }
        fileIn.value = "";
        drawPic();
      });
      drawPic();
      openModal({
        title: m ? "Edit item" : "New menu item",
        content: h("div", { class: "stack" }, pic, fileIn, h("div", { class: "form-grid" }, f.name.el, f.categoryId.el, f.price.el, f.costPrice.el, f.prepMinutes.el, h("div", { class: "span-2" }, f.description.el))),
        actions: (mm) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            Object.values(f).forEach((x) => x.clear());
            if (!f.name.value()) {
              f.name.setError("Enter the item name.");
              f.name.input.focus();
              return;
            }
            const price = Number(f.price.value());
            if (!(price >= 0) || f.price.value() === "") {
              f.price.setError("Enter the price.");
              f.price.input.focus();
              return;
            }
            const payload = { menuId: m ? m.id : "", name: f.name.value(), categoryId: f.categoryId.value(), price, costPrice: Number(f.costPrice.value()) || 0, prepMinutes: Number(f.prepMinutes.value()) || 0, description: f.description.value() };
            if (m) {
              const old = Object.assign({}, m);
              Object.assign(m, { name: payload.name, categoryId: payload.categoryId, price, costPrice: payload.costPrice, prepMinutes: payload.prepMinutes, description: payload.description });
              mm.close();
              draw();
              save("saveMenuItem", payload).catch((e) => {
                Object.assign(m, old);
                draw();
                toast("Not saved: " + errText(e), "error", 8e3);
              });
              return;
            }
            if (!pendingData) {
              const tmp = { id: "tmp-" + Date.now(), name: payload.name, categoryId: payload.categoryId, description: payload.description, price, costPrice: payload.costPrice, imageUrl: "", thumbUrl: "", available: true, featured: false, prepMinutes: payload.prepMinutes, sort: 9999 };
              S.menu.push(tmp);
              mm.close();
              draw();
              save("saveMenuItem", payload).catch((e) => {
                S.menu = S.menu.filter((x) => x !== tmp);
                draw();
                toast("Not saved: " + errText(e), "error", 8e3);
              });
              return;
            }
            const r = await act(ok, async () => {
              const x = await save("saveMenuItem", payload);
              try {
                await save("uploadMenuImage", { menuId: x.menuId, mime: "image/jpeg", data: pendingData, small: smallData }, { timeout: 9e4, queue: false });
              } catch (e) {
                toast("The item was saved but the photo was not: " + errText(e), "error", 12e3);
              }
              return x;
            });
            if (r.ok) mm.close();
          });
          const del = m && can("DELETE_MENU") ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Delete item", "Delete \u201C" + m.name + "\u201D? Old bills keep their record.", "Delete", true)) {
              try {
                await save("deleteMenuItem", { menuId: m.id });
                mm.close();
              } catch (e) {
                toast(errText(e), "error");
              }
            }
          } }, "Delete") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => mm.close() }, "Close"), ok];
        }
      });
    }
    draw();
    const off = on((k) => {
      if (k.includes("menu") || k.includes("all")) draw();
    });
    return off;
  }

  // web/js/s-people.js
  var s_people_exports = {};
  __export(s_people_exports, {
    render: () => render7
  });
  function render7(el) {
    const M2 = (n) => money(n, S.settings);
    let rows = [], q = "", alive = true;
    const list = h("div", { class: "tablewrap" });
    const search = h("input", { type: "search", class: "search", placeholder: "Search name or phone\u2026", "aria-label": "Search" });
    search.addEventListener("input", debounce(() => {
      q = search.value.trim().toLowerCase();
      draw();
    }, 120));
    el.replaceChildren(h("div", { class: "stack" }, h(
      "div",
      { class: "toolbar" },
      search,
      h("div", { class: "spacer" }),
      h("button", { class: "btn", type: "button", onclick: () => download("customers.csv", toCsv([["Name", "Phone", "Email", "Orders", "Total spend", "Last visit"]].concat(rows.map((c) => [c.name, c.phone, c.email, c.orders, c.spend, c.lastVisit])))) }, "Export CSV"),
      can("MANAGE_CUSTOMERS") ? h("button", { class: "btn btn-primary", type: "button", onclick: () => dialog(null) }, "\uFF0B Customer") : null
    ), list));
    async function load(quiet) {
      if (!quiet) list.replaceChildren(loadingBlock());
      swr("listCustomers", {}, (r) => {
        rows = r.customers;
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      const v = rows.filter((c) => !q || (c.name + " " + c.phone).toLowerCase().includes(q));
      if (!v.length) {
        list.replaceChildren(emptyState(rows.length ? "No match" : "No customers yet", "Customers are added here or while taking an order."));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Name", "Phone", "Orders", "Total spend", "Last visit", ""].map((x, i) => h("th", { class: i === 2 || i === 3 ? "r" : "" }, x)))),
        h("tbody", null, v.map((c) => h(
          "tr",
          null,
          h("td", null, c.name),
          h("td", null, c.phone || "\u2013"),
          h("td", { class: "r" }, c.orders || 0),
          h("td", { class: "r" }, M2(c.spend || 0)),
          h("td", null, c.lastVisit || "\u2013"),
          h("td", { class: "r" }, can("MANAGE_CUSTOMERS") ? h("button", { class: "btn btn-small", type: "button", onclick: () => dialog(c) }, "Edit") : null)
        )))
      ));
    }
    function dialog(c) {
      const f = {
        name: field({ label: "Name", value: c ? c.name : "", maxlength: 60 }),
        phone: field({ label: "Phone", value: c ? c.phone : "", maxlength: 24, inputmode: "tel" }),
        email: field({ label: "Email", value: c ? c.email : "", maxlength: 80 }),
        address: field({ label: "Address", value: c ? c.address : "", maxlength: 120 }),
        notes: field({ label: "Notes", type: "textarea", value: c ? c.notes : "", maxlength: 160 })
      };
      openModal({
        title: c ? "Edit customer" : "New customer",
        content: h("div", { class: "stack" }, Object.values(f).map((x) => x.el)),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", () => {
            const d = { customerId: c ? c.id : "", name: f.name.value(), phone: f.phone.value(), email: f.email.value(), address: f.address.value(), notes: f.notes.value() };
            if (!d.name.trim()) {
              toast("Enter the name.", "error");
              return;
            }
            const before = rows.slice(), row = Object.assign({ orders: 0, spend: 0, lastVisit: "" }, c || {}, d, { id: c ? c.id : "tmp" });
            m.close();
            instant("saveCustomer", d, () => {
              rows = c ? rows.map((x) => x.id === c.id ? row : x) : [row].concat(rows);
              draw();
              toast("Saved \u2713", "ok", 1200);
            }, () => {
              rows = before;
              draw();
            }, () => load(true));
          });
          const del = c ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Remove customer", "Remove " + c.name + "?", "Remove", true)) {
              const before = rows.slice();
              m.close();
              instant("removeCustomer", { customerId: c.id }, () => {
                rows = rows.filter((x) => x.id !== c.id);
                draw();
              }, () => {
                rows = before;
                draw();
              }, () => load(true));
            }
          } }, "Remove") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-reservations.js
  var s_reservations_exports = {};
  __export(s_reservations_exports, {
    render: () => render8
  });
  var LABEL = { CONFIRMED: "Confirmed", SEATED: "Seated", COMPLETED: "Completed", CANCELLED: "Cancelled", NO_SHOW: "No-show" };
  var day = "";
  function render8(el) {
    if (!day) day = todayISO();
    let rows = [], alive = true;
    const list = h("div", { class: "stack" });
    const dateIn = field({ label: "Day", type: "date", value: day });
    dateIn.input.addEventListener("change", () => {
      day = dateIn.value() || todayISO();
      load();
    });
    const manage = can("MANAGE_RESERVATIONS");
    el.replaceChildren(h("div", { class: "stack" }, h(
      "div",
      { class: "toolbar" },
      dateIn.el,
      h("button", { class: "btn", type: "button", onclick: () => {
        day = shiftDay(day, -1);
        dateIn.input.value = day;
        load();
      } }, "\u2039"),
      h("button", { class: "btn", type: "button", onclick: () => {
        day = todayISO();
        dateIn.input.value = day;
        load();
      } }, "Today"),
      h("button", { class: "btn", type: "button", onclick: () => {
        day = shiftDay(day, 1);
        dateIn.input.value = day;
        load();
      } }, "\u203A"),
      h("div", { class: "spacer" }),
      manage ? h("button", { class: "btn btn-primary", type: "button", onclick: () => dialog(null) }, "\uFF0B Reservation") : null
    ), list));
    async function load(quiet) {
      if (!quiet) list.replaceChildren(loadingBlock());
      swr("listReservations", { from: day, to: day }, (r) => {
        rows = r.reservations.filter((x) => x.date === day).sort((a, b) => a.time.localeCompare(b.time));
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      if (!rows.length) {
        list.replaceChildren(emptyState("No reservations", "Nothing booked for " + day + "."));
        return;
      }
      list.replaceChildren(...rows.map((r) => {
        const t = S.tables.find((x) => x.id === r.tableId);
        const set = (status) => () => {
          const before = rows.slice();
          instant("setReservationStatus", { reservationId: r.id, status }, () => {
            rows = rows.map((x) => x.id === r.id ? Object.assign({}, x, { status }) : x);
            draw();
          }, () => {
            rows = before;
            draw();
          }, () => load(true));
        };
        return h(
          "article",
          { class: "resv st-" + r.status },
          h("div", { class: "rt" }, r.time),
          h("div", { class: "rb" }, h("strong", null, r.customer), h("div", { class: "muted" }, r.guests + " guests" + (t ? " \xB7 " + t.name : "") + (r.phone ? " \xB7 " + r.phone : "") + (r.notes ? " \xB7 " + r.notes : ""))),
          h("span", { class: "sp" }, LABEL[r.status] || r.status),
          manage ? h(
            "div",
            { class: "btnrow" },
            r.status === "CONFIRMED" ? h("button", { class: "btn btn-small btn-primary", type: "button", onclick: set("SEATED") }, "Seat") : null,
            r.status === "SEATED" ? h("button", { class: "btn btn-small", type: "button", onclick: set("COMPLETED") }, "Complete") : null,
            r.status === "CONFIRMED" ? h("button", { class: "btn btn-small", type: "button", onclick: set("NO_SHOW") }, "No-show") : null,
            ["CONFIRMED"].includes(r.status) ? h("button", { class: "btn btn-small btn-danger", type: "button", onclick: set("CANCELLED") }, "Cancel") : null,
            h("button", { class: "btn btn-small", type: "button", onclick: () => dialog(r) }, "Edit")
          ) : null
        );
      }));
    }
    function dialog(r) {
      const f = {
        customer: field({ label: "Guest name", value: r ? r.customer : "", maxlength: 60 }),
        phone: field({ label: "Phone", value: r ? r.phone : "", maxlength: 24, inputmode: "tel" }),
        date: field({ label: "Date", type: "date", value: r ? r.date : day }),
        time: field({ label: "Time", type: "time", value: r ? r.time : "19:00" }),
        guests: field({ label: "Guests", type: "number", value: r ? String(r.guests) : "2", inputmode: "numeric" }),
        tableId: field({ label: "Table (optional)", options: [{ value: "", label: "No table yet" }].concat(S.tables.filter((t) => t.active).map((t) => ({ value: t.id, label: t.name }))), value: r ? r.tableId : "" }),
        notes: field({ label: "Notes", type: "textarea", value: r ? r.notes : "", maxlength: 160 })
      };
      openModal({
        title: r ? "Edit reservation" : "New reservation",
        content: h("div", { class: "form-grid" }, f.customer.el, f.phone.el, f.date.el, f.time.el, f.guests.el, f.tableId.el, h("div", { class: "span-2" }, f.notes.el)),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", () => {
            const d = { reservationId: r ? r.id : "", customer: f.customer.value(), phone: f.phone.value(), date: f.date.value(), time: f.time.value(), guests: Number(f.guests.value()) || 1, tableId: f.tableId.value(), notes: f.notes.value() };
            if (!d.customer.trim() || !d.date || !d.time) {
              toast("Enter the guest name, date and time.", "error");
              return;
            }
            const before = rows.slice(), row = Object.assign({ status: "CONFIRMED" }, r || {}, d, { id: r ? r.id : "tmp" });
            m.close();
            day = d.date;
            dateIn.input.value = day;
            instant("saveReservation", d, () => {
              rows = rows.filter((x) => x.id !== row.id).concat([row]).filter((x) => x.date === day).sort((a, b) => a.time.localeCompare(b.time));
              draw();
              toast("Saved \u2713", "ok", 1200);
            }, () => {
              rows = before;
              draw();
            }, () => load(true));
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-expenses.js
  var s_expenses_exports = {};
  __export(s_expenses_exports, {
    render: () => render9
  });
  var range = null;
  function render9(el) {
    const M2 = (n) => money(n, S.settings);
    const today2 = todayISO();
    if (!range) range = { from: today2.slice(0, 8) + "01", to: today2 };
    let rows = [], total = 0, alive = true;
    const list = h("div", { class: "tablewrap" }), sum = h("div", { class: "muted" });
    const from = field({ label: "From", type: "date", value: range.from }), to = field({ label: "To", type: "date", value: range.to });
    [from.input, to.input].forEach((i) => i.addEventListener("change", () => {
      range = { from: from.value(), to: to.value() || from.value() };
      load();
    }));
    el.replaceChildren(h("div", { class: "stack" }, h("div", { class: "filters" }, from.el, to.el, h(
      "div",
      { class: "btnrow" },
      h("button", { class: "btn", type: "button", onclick: () => download("expenses.csv", toCsv([["Date", "Category", "Description", "Method", "Amount", "Added by"]].concat(rows.map((e) => [e.date, e.category, e.description, e.method, e.amount, e.addedBy])))) }, "Export CSV"),
      h("button", { class: "btn btn-primary", type: "button", onclick: () => dialog(null) }, "\uFF0B Expense")
    )), sum, list));
    async function load(quiet) {
      if (!quiet) list.replaceChildren(loadingBlock());
      swr("listExpenses", range, (r) => {
        rows = r.expenses;
        total = r.total;
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      sum.textContent = rows.length + " expense" + (rows.length === 1 ? "" : "s") + " \xB7 total " + M2(total);
      if (!rows.length) {
        list.replaceChildren(emptyState("No expenses in these dates"));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Date", "Category", "Description", "Paid by", "Amount", ""].map((x, i) => h("th", { class: i === 4 ? "r" : "" }, x)))),
        h("tbody", null, rows.map((e) => h(
          "tr",
          null,
          h("td", null, e.date),
          h("td", null, e.category),
          h("td", null, e.description || "\u2013"),
          h("td", null, e.method),
          h("td", { class: "r" }, M2(e.amount)),
          h("td", { class: "r" }, h("button", { class: "btn btn-small", type: "button", onclick: () => dialog(e) }, "Edit"))
        )))
      ));
    }
    function dialog(e) {
      const cats = ["Groceries", "Gas", "Salaries", "Rent", "Electricity", "Maintenance", "Marketing", "Other"];
      const f = {
        date: field({ label: "Date", type: "date", value: e ? e.date : todayISO() }),
        category: field({ label: "Category", value: e ? e.category : "", maxlength: 40, placeholder: "e.g. " + cats.slice(0, 3).join(", ") }),
        amount: field({ label: "Amount", type: "number", value: e ? String(e.amount) : "", inputmode: "decimal" }),
        method: field({ label: "Paid by", options: ["CASH", "CARD", "ONLINE", "OTHER"].map((v) => ({ value: v, label: { CASH: "Cash", CARD: "Card", ONLINE: "Online / bank", OTHER: "Other" }[v] })), value: e ? e.method : "CASH" }),
        description: field({ label: "Description", value: e ? e.description : "", maxlength: 120 })
      };
      const uid2 = newId("exp");
      openModal({
        title: e ? "Edit expense" : "New expense",
        content: h("div", { class: "form-grid" }, f.date.el, f.category.el, f.amount.el, f.method.el, h("div", { class: "span-2" }, f.description.el)),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", () => {
            const d = { expenseId: e ? e.id : "", uid: e ? "" : uid2, date: f.date.value(), category: f.category.value(), amount: Number(f.amount.value()), method: f.method.value(), description: f.description.value() };
            if (!d.category || !(d.amount > 0)) {
              toast("Enter a category and an amount.", "error");
              return;
            }
            const before = rows.slice(), bt = total, row = { id: e ? e.id : "tmp", date: d.date, category: d.category, description: d.description, method: d.method, amount: d.amount, addedBy: e ? e.addedBy : S.user.name };
            m.close();
            instant(
              "saveExpense",
              d,
              () => {
                rows = e ? rows.map((x) => x.id === e.id ? row : x) : [row].concat(rows);
                total = rows.reduce((s, x) => s + x.amount, 0);
                draw();
                toast("Saved \u2713", "ok", 1200);
              },
              () => {
                rows = before;
                total = bt;
                draw();
              },
              () => load(true)
            );
          });
          const del = e ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Void expense", "Void this expense of " + M2(e.amount) + "?", "Void", true)) {
              const before = rows.slice();
              m.close();
              instant("voidExpense", { expenseId: e.id }, () => {
                rows = rows.filter((x) => x.id !== e.id);
                total = rows.reduce((s, x) => s + x.amount, 0);
                draw();
              }, () => {
                rows = before;
                draw();
              }, () => load(true));
            }
          } }, "Void") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-reports.js
  var s_reports_exports = {};
  __export(s_reports_exports, {
    render: () => render10
  });
  var rng = { from: "", to: "", preset: "today" };
  var PRESETS = [["today", "Today"], ["yesterday", "Yesterday"], ["week", "Last 7 days"], ["month", "This month"], ["custom", "Custom"]];
  function setPreset(p) {
    const t = todayISO();
    rng.preset = p;
    if (p === "today") {
      rng.from = rng.to = t;
    } else if (p === "yesterday") {
      rng.from = rng.to = shiftDay(t, -1);
    } else if (p === "week") {
      rng.from = shiftDay(t, -6);
      rng.to = t;
    } else if (p === "month") {
      rng.from = t.slice(0, 8) + "01";
      rng.to = t;
    }
  }
  function render10(el) {
    const M2 = (n) => money(n, S.settings);
    if (!rng.from) setPreset("today");
    let alive = true, data = null;
    const out = h("div", { class: "stack" });
    const bar2 = h("div", { class: "toolbar" });
    const from = field({ label: "From", type: "date", value: rng.from }), to = field({ label: "To", type: "date", value: rng.to });
    [from.input, to.input].forEach((i) => i.addEventListener("change", () => {
      rng.from = from.value();
      rng.to = to.value() || rng.from;
      rng.preset = "custom";
      drawBar();
      load();
    }));
    function drawBar() {
      bar2.replaceChildren(
        tabs(PRESETS.map(([key, label]) => ({ key, label })), rng.preset, (k) => {
          if (k !== "custom") {
            setPreset(k);
            from.input.value = rng.from;
            to.input.value = rng.to;
            load();
          } else rng.preset = "custom";
          drawBar();
        }),
        rng.preset === "custom" ? h("div", { class: "inline-dates" }, from.el, to.el) : null,
        h("div", { class: "spacer" }),
        h("button", { class: "btn", type: "button", onclick: exportCsv }, "Export CSV"),
        h("button", { class: "btn", type: "button", onclick: () => window.print() }, "Print")
      );
    }
    el.replaceChildren(h("div", { class: "stack" }, bar2, out));
    drawBar();
    async function load() {
      out.replaceChildren(loadingBlock("Building report\u2026"));
      swr("salesReport", { from: rng.from, to: rng.to }, (r) => {
        data = r;
        if (alive) draw();
      }, (e) => {
        if (alive) out.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    const panel = (title, body) => h("section", { class: "panel" }, h("header", null, h("h2", null, title)), h("div", { class: "pad" }, body));
    const kv = (rows) => h("div", { class: "trows" }, rows.map(([k, v, cls]) => h("div", { class: "trow " + (cls || "") }, h("span", null, k), h("span", null, v))));
    function draw() {
      const d = data, t = d.totals;
      if (!t.orders && !d.expenses) {
        out.replaceChildren(emptyState("No sales in this period", rng.from + (rng.to !== rng.from ? " to " + rng.to : "")));
        return;
      }
      const parts = [h(
        "div",
        { class: "stats" },
        h("div", { class: "stat hero" }, h("div", { class: "k" }, "Net sales"), h("div", { class: "v" }, M2(t.net)), h("div", { class: "s" }, t.orders + " orders \xB7 average " + M2(t.orders ? t.net / t.orders : 0))),
        h("div", { class: "stat" }, h("div", { class: "k" }, "Gross (before discount)"), h("div", { class: "v" }, M2(t.gross)), h("div", { class: "s" }, "Discounts " + M2(t.discount))),
        h("div", { class: "stat" }, h("div", { class: "k" }, "Tax + service"), h("div", { class: "v" }, M2(t.tax + t.service)), h("div", { class: "s" }, "Tax " + M2(t.tax) + " \xB7 service " + M2(t.service))),
        d.profit !== void 0 ? h("div", { class: "stat" }, h("div", { class: "k" }, "Profit"), h("div", { class: "v" }, M2(d.profit)), h("div", { class: "s" }, "after cost of items " + M2(d.cogs) + " and expenses " + M2(d.expenses))) : null
      )];
      const max = Math.max(1, ...d.byDay.map((x) => x.net));
      parts.push(h(
        "div",
        { class: "cols" },
        panel("Sales by day", d.byDay.length ? h("div", { class: "hbars" }, d.byDay.map((x) => h("div", { class: "hb" }, h("span", null, x.date.slice(5)), h("div", { class: "hbar" }, h("i", { style: "width:" + Math.round(x.net / max * 100) + "%" })), h("b", null, M2(x.net))))) : emptyState("No days")),
        panel("How customers paid", kv(Object.keys(d.methods).map((k) => [{ CASH: "Cash", CARD: "Card", ONLINE: "Online / bank", OTHER: "Other" }[k] || k, M2(d.methods[k])])))
      ));
      parts.push(h(
        "div",
        { class: "cols" },
        panel("By waiter", d.byWaiter.length ? kv(d.byWaiter.map((w) => [w.name + " (" + w.orders + ")", M2(w.net)])) : emptyState("\u2013")),
        panel("By order type", kv(d.byType.map((x) => [(x.type === "DINE_IN" ? "Dine-in" : x.type === "TAKEAWAY" ? "Takeaway" : x.type) + " (" + x.orders + ")", M2(x.net)])))
      ));
      if (d.items) parts.push(panel("Items sold", h("div", { class: "tablewrap" }, h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Item", "Qty", "Revenue", "Cost", "Margin"].map((x, i) => h("th", { class: i ? "r" : "" }, x)))),
        h("tbody", null, d.items.map((i) => h("tr", null, h("td", null, i.name), h("td", { class: "r" }, i.qty), h("td", { class: "r" }, M2(i.revenue)), h("td", { class: "r" }, M2(i.cost)), h("td", { class: "r" }, M2(i.revenue - i.cost)))))
      ))));
      if (d.expensesByCategory && d.expensesByCategory.length) parts.push(panel("Expenses by category", kv(d.expensesByCategory.map((x) => [x.category, M2(x.amount)]))));
      out.replaceChildren(...parts);
    }
    function exportCsv() {
      if (!data) return;
      const rows = [["Report", rng.from, rng.to], [], ["Date", "Orders", "Net sales"]].concat(data.byDay.map((x) => [x.date, x.orders, x.net]), [[], ["Order", "Date", "Type", "Waiter", "Method", "Net"]], (data.sales || []).map((s) => [s.orderId, s.date, s.type, s.waiter, s.method, s.net]));
      download("sales-" + rng.from + "_" + rng.to + ".csv", toCsv(rows));
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-staff.js
  var s_staff_exports = {};
  __export(s_staff_exports, {
    render: () => render11
  });
  var GROUPS = [
    ["Dashboard & orders", ["VIEW_DASHBOARD", "VIEW_ORDERS", "CREATE_ORDERS", "EDIT_ORDERS", "CANCEL_ORDERS", "SEND_TO_KITCHEN"]],
    ["Kitchen & tables", ["VIEW_KITCHEN", "UPDATE_KITCHEN_STATUS", "VIEW_TABLES", "MANAGE_TABLES"]],
    ["Menu", ["VIEW_MENU", "ADD_MENU", "EDIT_MENU", "DELETE_MENU"]],
    ["Billing", ["VIEW_BILLS", "GENERATE_BILLS", "PRINT_RECEIPT", "APPLY_DISCOUNT", "PROCESS_PAYMENT", "REFUND"]],
    ["Money & reports", ["VIEW_SALES", "VIEW_REPORTS", "MANAGE_EXPENSES", "EXPORT_BACKUP"]],
    ["People", ["VIEW_CUSTOMERS", "MANAGE_CUSTOMERS", "VIEW_RESERVATIONS", "MANAGE_RESERVATIONS"]],
    ["Administration", ["VIEW_ACTIVITY", "MANAGE_STAFF", "MANAGE_SETTINGS"]]
  ];
  var NICE = (p) => p.toLowerCase().split("_").map((w, i) => i ? w : w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  var ROLE = { MANAGER: "Manager", CASHIER: "Cashier", WAITER: "Waiter", KITCHEN: "Kitchen", STAFF: "Staff (view only)" };
  function render11(el) {
    let staff = [], cat = null, alive = true;
    const list = h("div", { class: "tablewrap" });
    el.replaceChildren(h("div", { class: "stack" }, h(
      "div",
      { class: "toolbar" },
      h("div", { class: "muted" }, "Staff sign in with the Hotel Code, their username and password."),
      h("div", { class: "spacer" }),
      h("button", { class: "btn btn-primary", type: "button", onclick: () => dialog(null) }, "\uFF0B Staff member")
    ), list));
    async function load() {
      list.replaceChildren(loadingBlock());
      swr("listStaff", {}, (r) => {
        staff = r.staff;
        cat = r.catalog;
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      if (!staff.length) {
        list.replaceChildren(emptyState("No staff yet", "Add a waiter, cashier or kitchen account."));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Name", "Username", "Role", "Status", "Last sign-in", ""].map((x) => h("th", null, x)))),
        h("tbody", null, staff.map((s) => h(
          "tr",
          null,
          h("td", null, s.name),
          h("td", null, s.username),
          h("td", null, ROLE[s.role] || s.role, s.add.length || s.remove.length ? h("span", { class: "muted small" }, " \xB7 custom") : null),
          h("td", null, h("span", { class: "sp s-" + (s.status === "ACTIVE" ? "PAID" : "CANCELLED") }, s.status === "ACTIVE" ? "Active" : "Off")),
          h("td", null, fmtStamp(s.lastLogin) || "never"),
          h("td", { class: "r" }, h("button", { class: "btn btn-small", type: "button", onclick: () => dialog(s) }, "Edit"))
        )))
      ));
    }
    function dialog(s) {
      const f = {
        name: field({ label: "Full name", value: s ? s.name : "", maxlength: 60 }),
        username: field({ label: "Username", value: s ? s.username : "", maxlength: 24, hint: "Letters, numbers, dot or underscore. Staff use this to sign in." }),
        password: field({ label: s ? "New password (leave empty to keep)" : "Password", type: "password", maxlength: 128, autocomplete: "new-password", hint: "At least 6 characters. Changing it signs the person out everywhere." }),
        phone: field({ label: "Phone", value: s ? s.phone : "", maxlength: 24 }),
        role: field({ label: "Role", options: cat.roles.map((r) => ({ value: r, label: ROLE[r] || r })), value: s ? s.role : "WAITER" }),
        status: field({ label: "Account", options: [{ value: "ACTIVE", label: "Active" }, { value: "INACTIVE", label: "Switched off" }], value: s ? s.status : "ACTIVE" })
      };
      let on2 = new Set(s ? s.perms : cat.defaults.WAITER);
      const grid = h("div", { class: "perm-grid" });
      function drawPerms() {
        const base = new Set(cat.defaults[f.role.value()] || []);
        grid.replaceChildren(...GROUPS.map(([title, list2]) => h("fieldset", { class: "perm-group" }, h("legend", null, title), list2.filter((p) => cat.permissions.includes(p)).map((p) => {
          const cb = h("input", { type: "checkbox" });
          cb.checked = on2.has(p);
          cb.addEventListener("change", () => {
            if (cb.checked) on2.add(p);
            else on2.delete(p);
            drawPerms();
          });
          return h("label", { class: "check" + (on2.has(p) !== base.has(p) ? " changed" : "") }, cb, NICE(p), on2.has(p) !== base.has(p) ? h("span", { class: "muted small" }, base.has(p) ? " (removed)" : " (extra)") : null);
        }))));
      }
      f.role.input.addEventListener("change", () => {
        on2 = new Set(cat.defaults[f.role.value()] || []);
        drawPerms();
      });
      drawPerms();
      openModal({
        title: s ? "Edit " + s.name : "New staff member",
        content: h(
          "div",
          { class: "stack" },
          h("div", { class: "form-grid" }, f.name.el, f.username.el, f.password.el, f.phone.el, f.role.el, f.status.el),
          h("div", null, h("h3", null, "What this person can do"), h("p", { class: "muted small" }, "Starts from the role. Switch single permissions on or off for this person."), grid)
        ),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            Object.values(f).forEach((x) => x.clear());
            const base = new Set(cat.defaults[f.role.value()] || []);
            const add = [...on2].filter((p) => !base.has(p)), remove = [...base].filter((p) => !on2.has(p));
            const r = await act(ok, () => save("saveStaff", { staffId: s ? s.staffId : "", name: f.name.value(), username: f.username.value(), password: f.password.raw(), phone: f.phone.value(), role: f.role.value(), status: f.status.value(), add, remove }));
            if (r.ok) {
              m.close();
              load();
            } else if (r.error && r.error.details && r.error.details.field && f[r.error.details.field]) f[r.error.details.field].setError(r.error.message);
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      }).box.classList.add("wide");
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-activity.js
  var s_activity_exports = {};
  __export(s_activity_exports, {
    render: () => render12
  });
  function render12(el) {
    let logs = [], q = "", alive = true, limit = 200;
    const list = h("div", { class: "tablewrap" });
    const search = h("input", { type: "search", class: "search", placeholder: "Search person, action or record\u2026", "aria-label": "Search" });
    search.addEventListener("input", debounce(() => {
      q = search.value.trim().toLowerCase();
      draw();
    }, 120));
    const more = h("button", { class: "btn", type: "button", onclick: () => {
      limit += 300;
      load();
    } }, "Load older entries");
    el.replaceChildren(h("div", { class: "stack" }, h("div", { class: "toolbar" }, search, h("div", { class: "spacer" }), h("button", { class: "btn", type: "button", onclick: load }, "Refresh")), list, h("div", null, more)));
    async function load() {
      list.replaceChildren(loadingBlock());
      swr("activity", { limit }, (r) => {
        logs = r.logs;
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      const v = logs.filter((l) => !q || [l.user, l.action, l.record, l.details].some((x) => String(x || "").toLowerCase().includes(q)));
      more.hidden = logs.length < limit;
      if (!v.length) {
        list.replaceChildren(emptyState("No entries"));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["When", "Who", "Action", "Record", "Details"].map((x) => h("th", null, x)))),
        h("tbody", null, v.map((l) => h("tr", null, h("td", null, fmtStamp(l.at)), h("td", null, l.user || "\u2013", l.role ? h("span", { class: "muted small" }, " \xB7 " + l.role.toLowerCase()) : null), h("td", null, h("code", null, l.action)), h("td", null, l.record || ""), h("td", null, l.details || ""))))
      ));
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-settings.js
  var s_settings_exports = {};
  __export(s_settings_exports, {
    render: () => render13
  });
  var tab = "";
  function render13(el, ctx) {
    const all = [
      ["hotel", "Hotel", can("MANAGE_SETTINGS")],
      ["billing", "Tax & billing", can("MANAGE_SETTINGS")],
      ["receipt", "Receipt", can("MANAGE_SETTINGS")],
      ["tables", "Tables", can("MANAGE_TABLES")],
      ["account", "My account", true],
      ["data", "Data & backup", can("EXPORT_BACKUP") || S.user.isOwner]
    ].filter((x) => x[2]);
    if (!all.some((x) => x[0] === tab)) tab = all[0][0];
    const body = h("div", { class: "stack" });
    const bar2 = h("div");
    el.replaceChildren(h("div", { class: "stack" }, bar2, body));
    function show() {
      bar2.replaceChildren(tabs(all.map((x) => ({ key: x[0], label: x[1] })), tab, (k) => {
        tab = k;
        show();
      }));
      body.replaceChildren({ hotel, billing, receipt, tables, account, data }[tab]());
    }
    const panel = (title, ...kids) => h("section", { class: "panel" }, h("header", null, h("h2", null, title)), h("div", { class: "pad" }, kids));
    const yn = (label, key) => {
      const cb = h("input", { type: "checkbox" });
      cb.checked = S.settings[key] === "true";
      return { el: h("label", { class: "check" }, cb, label), get: () => cb.checked };
    };
    function saveBtn(collect, done) {
      const b = h("button", { class: "btn btn-primary", type: "button" }, "Save changes");
      b.addEventListener("click", () => act(b, async () => {
        const values = collect(), prev = S.settings;
        S.settings = Object.assign({}, prev, Object.fromEntries(Object.entries(values).map(([k, v]) => [k, String(v)])));
        save("saveSettings", { values }).catch((e) => {
          S.settings = prev;
          toast("Settings NOT saved: " + errText(e), "error", 6e3);
        });
        if (done) done();
      }));
      return b;
    }
    function hotel() {
      const f = {
        HOTEL_NAME: field({ label: "Hotel / restaurant name", value: S.settings.HOTEL_NAME, maxlength: 80 }),
        HOTEL_ADDRESS: field({ label: "Address (printed on receipts)", value: S.settings.HOTEL_ADDRESS, maxlength: 160 }),
        HOTEL_PHONE: field({ label: "Phone", value: S.settings.HOTEL_PHONE, maxlength: 40 }),
        CURRENCY: field({ label: "Currency symbol", value: S.settings.CURRENCY, maxlength: 8, hint: "Shown before amounts, e.g. Rs. or $" }),
        DECIMALS: field({ label: "Decimal places", options: ["0", "1", "2"].map((v) => ({ value: v, label: v })), value: S.settings.DECIMALS })
      };
      return panel("Hotel details", h("div", { class: "form-grid" }, Object.values(f).map((x) => x.el)), h("div", null, saveBtn(() => {
        const v = {};
        Object.keys(f).forEach((k) => {
          v[k] = f[k].value();
        });
        v.SETUP_COMPLETE = true;
        return v;
      })));
    }
    function billing() {
      const tax = yn("Charge tax", "TAX_ENABLED"), svc = yn("Charge service", "SERVICE_ENABLED"), onSvc = yn("Tax is also charged on the service charge", "TAX_ON_SERVICE");
      const f = {
        TAX_LABEL: field({ label: "Tax name", value: S.settings.TAX_LABEL, maxlength: 20 }),
        TAX_PERCENT: field({ label: "Tax %", type: "number", value: S.settings.TAX_PERCENT, inputmode: "decimal" }),
        SERVICE_PERCENT: field({ label: "Service charge %", type: "number", value: S.settings.SERVICE_PERCENT, inputmode: "decimal" }),
        ROUNDING: field({ label: "Round the bill total to", options: [["0", "No rounding"], ["1", "Nearest 1"], ["5", "Nearest 5"], ["10", "Nearest 10"]].map(([value, label]) => ({ value, label })), value: S.settings.ROUNDING }),
        MAX_DISCOUNT_PERCENT: field({ label: "Largest discount a manager may give (%)", type: "number", value: S.settings.MAX_DISCOUNT_PERCENT, inputmode: "decimal", hint: "The owner is not limited." })
      };
      return panel(
        "Tax, service and discounts",
        h("div", { class: "form-grid" }, tax.el, svc.el, f.TAX_LABEL.el, f.TAX_PERCENT.el, f.SERVICE_PERCENT.el, onSvc.el, f.ROUNDING.el, f.MAX_DISCOUNT_PERCENT.el),
        h("div", { class: "muted small" }, "Order of calculation: items \u2212 discount, then service charge, then tax, then rounding."),
        h("div", null, saveBtn(() => {
          const v = { TAX_ENABLED: tax.get(), SERVICE_ENABLED: svc.get(), TAX_ON_SERVICE: onSvc.get() };
          Object.keys(f).forEach((k) => {
            v[k] = f[k].value();
          });
          return v;
        }))
      );
    }
    function receipt() {
      const f = {
        RECEIPT_SIZE: field({ label: "Paper size", options: [["58mm", "58 mm (small thermal)"], ["80mm", "80 mm (thermal)"], ["A4", "A4 sheet"]].map(([value, label]) => ({ value, label })), value: S.settings.RECEIPT_SIZE }),
        TAX_NUMBER: field({ label: "Tax registration no. (printed)", value: S.settings.TAX_NUMBER, maxlength: 40 }),
        RECEIPT_FOOTER: field({ label: "Footer message", value: S.settings.RECEIPT_FOOTER, maxlength: 160 })
      };
      const test = h("button", { class: "btn", type: "button", onclick: () => {
        const o = { id: "ORD-TEST-0001", tableName: "Table 1", openedAt: "2026-01-01 12:00:00", waiterName: "Sample", items: [{ name: "Sample dish", qty: 2, price: 500, lineTotal: 1e3 }, { name: "Tea", qty: 1, price: 100, lineTotal: 100 }] };
        printReceipt(o, { id: "BIL-TEST", subtotal: 1100, discount: 0, service: 0, tax: 0, roundOff: 0, total: 1100, payments: [{ method: "CASH", amount: 1100 }] });
      } }, "Print a test receipt");
      return panel(
        "Receipt",
        h("div", { class: "form-grid" }, Object.values(f).map((x) => x.el)),
        h("div", { class: "btnrow" }, saveBtn(() => {
          const v = {};
          Object.keys(f).forEach((k) => {
            v[k] = f[k].value();
          });
          return v;
        }), test),
        h("p", { class: "muted small" }, "Printing opens your browser print window. For a thermal printer, choose it there and set margins to \u201CNone\u201D.")
      );
    }
    function tables() {
      const box = h("div", { class: "stack" });
      function draw() {
        const list = S.tables;
        box.replaceChildren(
          h("div", { class: "btnrow" }, h("button", { class: "btn btn-primary", type: "button", onclick: addMany }, "\uFF0B Add several tables"), h("button", { class: "btn", type: "button", onclick: () => one(null) }, "\uFF0B Add one table")),
          list.length ? h("div", { class: "tablewrap" }, h(
            "table",
            { class: "tbl" },
            h("thead", null, h("tr", null, ["No.", "Name", "Seats", "Section", "Status", ""].map((x) => h("th", null, x)))),
            h("tbody", null, list.map((t) => h("tr", null, h("td", null, t.number), h("td", null, t.name), h("td", null, t.capacity), h("td", null, t.section || "\u2013"), h("td", null, t.active ? t.status : "Hidden"), h("td", { class: "r" }, h("button", { class: "btn btn-small", type: "button", onclick: () => one(t) }, "Edit")))))
          )) : emptyState("No tables yet", "Add your dining tables so waiters can start orders on them.")
        );
      }
      function addMany() {
        const f = { count: field({ label: "How many tables", type: "number", value: "10" }), capacity: field({ label: "Seats per table", type: "number", value: "4" }), section: field({ label: "Section (optional)", value: "", placeholder: "e.g. Hall, Terrace", maxlength: 30 }) };
        openModal({ title: "Add tables", content: h("div", { class: "stack" }, Object.values(f).map((x) => x.el)), actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Add");
          ok.addEventListener("click", async () => {
            const r = await act(ok, () => save("addTables", { count: Number(f.count.value()), capacity: Number(f.capacity.value()), section: f.section.value() }));
            if (r.ok) m.close();
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        } });
      }
      function one(t) {
        const next = S.tables.reduce((m, x) => Math.max(m, x.number), 0) + 1;
        const f = {
          number: field({ label: "Table number", type: "number", value: String(t ? t.number : next) }),
          name: field({ label: "Name", value: t ? t.name : "", maxlength: 30, placeholder: "Table " + (t ? t.number : next) }),
          capacity: field({ label: "Seats", type: "number", value: String(t ? t.capacity : 4) }),
          section: field({ label: "Section", value: t ? t.section : "", maxlength: 30 }),
          active: field({ label: "Shown to staff", options: [{ value: "true", label: "Yes" }, { value: "false", label: "Hidden" }], value: t ? String(t.active) : "true" })
        };
        openModal({ title: t ? "Edit table" : "New table", content: h("div", { class: "form-grid" }, Object.values(f).map((x) => x.el)), actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            const r = await act(ok, () => save("saveTable", { tableId: t ? t.id : "", number: Number(f.number.value()), name: f.name.value(), capacity: Number(f.capacity.value()), section: f.section.value(), active: f.active.value() === "true" }));
            if (r.ok) m.close();
          });
          const del = t ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Remove table", "Remove " + t.name + "? It must have no open order.", "Remove", true)) {
              try {
                await save("removeTable", { tableId: t.id });
                m.close();
              } catch (e) {
                toast(errText(e), "error");
              }
            }
          } }, "Remove") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        } });
      }
      draw();
      offTables = on((k) => {
        if (k.includes("tables") || k.includes("all")) draw();
      });
      return panel("Tables", box);
    }
    let offTables = null;
    function account() {
      const parts = [h("div", { class: "rows" }, [["Name", S.user.name], ["Username", S.user.username || "\u2013"], ["Role", S.user.isOwner ? "Owner" : S.user.role]].map(([k, v]) => h("div", { class: "row" }, h("dt", null, k), h("dd", null, v), h("span"))))];
      if (S.user.isOwner) parts.push(h("p", { class: "muted" }, "The owner password, subscription and Google Sheet connection are managed in the account page."), h("div", null, h("a", { class: "btn", href: "#/portal" }, "Account & connection")));
      else {
        const f = { oldPassword: field({ label: "Current password", type: "password", autocomplete: "current-password", maxlength: 128 }), newPassword: field({ label: "New password", type: "password", autocomplete: "new-password", maxlength: 128, hint: "At least 6 characters." }) };
        const b = h("button", { class: "btn btn-primary", type: "button" }, "Change password");
        b.addEventListener("click", async () => {
          Object.values(f).forEach((x) => x.clear());
          const r = await act(b, async () => {
            const x = await save("changeMyPassword", { oldPassword: f.oldPassword.raw(), newPassword: f.newPassword.raw() }, { queue: false });
            const s = sessionInfo();
            if (s && x.token) {
              s.token = x.token;
              const { store: store2 } = await Promise.resolve().then(() => (init_store(), store_exports));
              store2.setApp(Object.assign({}, s), !!(store2.getApp() && store2.getApp().remember));
            }
            f.oldPassword.input.value = f.newPassword.input.value = "";
          });
          if (!r.ok && r.error && r.error.details && r.error.details.field && f[r.error.details.field]) f[r.error.details.field].setError(r.error.message);
        });
        parts.push(h("div", { class: "form-grid" }, f.oldPassword.el, f.newPassword.el), h("div", null, b));
      }
      return panel("My account", ...parts);
    }
    function data() {
      const b = h("button", { class: "btn", type: "button" }, "Make a backup copy now");
      b.addEventListener("click", async () => {
        const r = await act(b, () => save("backup", {}, { queue: false, timeout: 9e4 }), { done: "Backup made" });
        if (r.ok) {
          const link = h("a", { href: r.value.url, target: "_blank", rel: "noopener" }, r.value.name);
          toast("Backup saved in your Google Drive: " + r.value.name, "ok", 8e3);
          b.after(h("p", { class: "muted small" }, "Last backup: ", link));
        }
      });
      return panel(
        "Your data",
        h("p", null, "All orders, staff and menu are stored in your own Google Sheet. Open it any time from Google Drive."),
        S.user.isOwner || can("EXPORT_BACKUP") ? h("div", null, b) : null,
        h("p", { class: "muted small" }, "A backup is a full copy of the Google Sheet saved in your Drive. Reports can also be exported to CSV from their screens.")
      );
    }
    show();
    return () => {
      if (offTables) offTables();
    };
  }

  // web/js/shell.js
  var SCREENS = [
    { key: "dashboard", label: "Dashboard", icon: "\u25A6", perms: ["VIEW_DASHBOARD"], mod: s_dashboard_exports },
    { key: "tables", label: "Tables", icon: "\u25EB", perms: ["VIEW_TABLES"], mod: s_tables_exports },
    { key: "pos", label: "New order", icon: "\uFF0B", perms: ["CREATE_ORDERS"], mod: s_pos_exports },
    { key: "kitchen", label: "Kitchen", icon: "\u2668", perms: ["VIEW_KITCHEN"], mod: s_kitchen_exports },
    { key: "orders", label: "Orders & bills", icon: "\u2630", perms: ["VIEW_ORDERS"], mod: s_orders_exports },
    { key: "menu", label: "Menu", icon: "\u2756", perms: ["VIEW_MENU"], mod: s_menu_exports },
    { key: "customers", label: "Customers", icon: "\u263A", perms: ["VIEW_CUSTOMERS"], mod: s_people_exports },
    { key: "reservations", label: "Reservations", icon: "\u25F7", perms: ["VIEW_RESERVATIONS"], mod: s_reservations_exports },
    { key: "expenses", label: "Expenses", icon: "\u21A7", perms: ["MANAGE_EXPENSES"], mod: s_expenses_exports },
    { key: "reports", label: "Reports", icon: "\u224B", perms: ["VIEW_SALES", "VIEW_REPORTS"], mod: s_reports_exports },
    { key: "staff", label: "Staff", icon: "\u2687", perms: ["MANAGE_STAFF"], mod: s_staff_exports },
    { key: "activity", label: "Activity log", icon: "\u270E", perms: ["VIEW_ACTIVITY"], mod: s_activity_exports },
    { key: "settings", label: "Settings", icon: "\u2699", perms: null, mod: s_settings_exports }
  ];
  var allowed = () => SCREENS.filter((s) => !s.perms || canAny(s.perms));
  var homeScreen = () => {
    const a = allowed();
    return (a.find((s) => s.key === "dashboard") || a.find((s) => s.key === "tables") || a.find((s) => s.key === "kitchen") || a[0] || SCREENS[SCREENS.length - 1]).key;
  };
  async function launch(sess, boot, remember) {
    store.setApp(sess, remember);
    try {
      localStorage.setItem("hotelpos.lasturl", sess.url);
    } catch (e) {
    }
    await start(sess, boot);
  }
  var cleanup = null;
  var offs = [];
  var current = "";
  async function appView(root2, nav2, screen) {
    const app = store.getApp();
    if (!app) {
      nav2("login");
      return;
    }
    onAuthLost((err) => {
      const blocking = ["ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY"].includes(err.code);
      signOut();
      if (blocking) nav2("blocked", err);
      else nav2("login", { notice: err.code === "ACCOUNT_DISABLED" ? err.message : "Your session ended. Please sign in again." });
    });
    if (!S.ready) {
      mount(root2, h("div", { class: "boot" }, spinner("big"), h("div", null, "Opening " + (app.hotelName || "your hotel") + "\u2026")));
      try {
        await start(app);
      } catch (err) {
        if (err && ["SESSION_INVALID", "ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED"].includes(err.code)) return;
        mount(root2, h(
          "div",
          { class: "boot" },
          h("p", null, err && err.message || "Could not open your hotel."),
          h(
            "div",
            { class: "row-actions" },
            h("button", { class: "btn btn-primary", onclick: () => nav2("app/" + (screen || "")) }, "Try again"),
            store.getOwner() ? h("button", { class: "btn", onclick: () => nav2("portal") }, "Hotel connection") : null,
            h("button", { class: "btn", onclick: () => {
              signOut();
              nav2("login");
            } }, "Sign out")
          )
        ));
        return;
      }
    }
    const list = allowed();
    let item = list.find((s) => s.key === screen);
    if (!item) {
      nav2("app/" + homeScreen());
      return;
    }
    current = item.key;
    setScreen(item.key);
    drawShell(root2, nav2, list, item);
  }
  function drawShell(root2, nav2, list, item) {
    if (cleanup) {
      try {
        cleanup();
      } catch (e) {
      }
      cleanup = null;
    }
    offs.forEach((f) => f());
    offs = [];
    const screenEl = h("div", { class: "screen", id: "screen" });
    const sync = h("div", { class: "sync", role: "status", "aria-live": "polite" });
    const side = h(
      "aside",
      { class: "side" },
      h(
        "div",
        { class: "side-top" },
        h("div", { class: "side-brand" }, "Hotel POS"),
        h("div", { class: "side-hotel" }, S.hotel && S.hotel.name || "")
      ),
      h("nav", { class: "side-nav" }, list.map((s) => h(
        "a",
        { class: "nav-item" + (s.key === item.key ? " on" : ""), href: "#/app/" + s.key, onclick: () => document.body.classList.remove("nav-open") },
        h("span", { class: "ni" }, s.icon),
        s.label
      ))),
      h(
        "div",
        { class: "side-foot" },
        h("div", { class: "who" }, h("strong", null, S.user.name), h("span", null, S.user.isOwner ? "Owner" : S.user.role.charAt(0) + S.user.role.slice(1).toLowerCase())),
        S.user.isOwner ? h("a", { class: "btn btn-small", href: "#/portal" }, "Account & connection") : null,
        h("button", { class: "btn btn-small", type: "button", onclick: async () => {
          if (S.queued && !await confirmDialog("Unsent changes", S.queued + " change(s) are still waiting to be sent. Signing out now will discard them.", "Sign out anyway", true)) return;
          signOut();
          nav2("login");
        } }, "Sign out")
      )
    );
    const bar2 = h(
      "header",
      { class: "bar" },
      h("button", { class: "burger", type: "button", "aria-label": "Menu", onclick: () => document.body.classList.toggle("nav-open") }, "\u2630"),
      h("h1", null, item.label),
      h("div", { class: "spacer" }),
      sync
    );
    const scrim = h("div", { class: "nav-scrim", onclick: () => document.body.classList.remove("nav-open") });
    mount(root2, h("div", { class: "app" }, side, scrim, h("div", { class: "main" }, bar2, screenEl)));
    function drawSync() {
      sync.className = "sync " + (S.offline ? "off" : S.sync);
      let kids;
      if (S.offline) kids = [h("span", { class: "dot" }), "Offline" + (S.queued ? " \xB7 " + S.queued + " waiting" : "")];
      else if (S.sync === "saving") kids = [spinner(), "Saving\u2026"];
      else if (S.sync === "saved") kids = [tickIcon(), "Saved"];
      else if (S.sync === "error") kids = [h("span", { class: "dot" }), "Not saved"];
      else kids = [h("span", { class: "dot" }), S.queued ? S.queued + " waiting" : "Live"];
      sync.replaceChildren(...kids);
    }
    drawSync();
    offs.push(on((keys) => {
      if (keys.includes("sync") || keys.includes("all")) drawSync();
      if (keys.includes("rejected") && S.rejected) {
        toast(S.rejected, "error", 8e3);
        S.rejected = "";
      }
    }));
    offs.push(on((keys) => {
      if (!keys.includes("tick") && !keys.includes("all") && !keys.includes("menu")) return;
      const now = allowed().map((s) => s.key).join();
      if (now !== list.map((s) => s.key).join()) {
        nav2("app/" + (allowed().some((s) => s.key === current) ? current : homeScreen()));
      }
    }));
    const ctx = { nav: (s, arg) => {
      S.handoff = arg || null;
      nav2("app/" + s);
    }, el: screenEl, setTitle: (t) => {
      bar2.querySelector("h1").textContent = t;
    } };
    try {
      cleanup = item.mod.render(screenEl, ctx) || null;
    } catch (e) {
      console.error(e);
      screenEl.append(h("div", { class: "empty" }, h("strong", null, "This screen could not open."), h("p", null, "Please reload the page.")));
    }
  }

  // web/js/auth.js
  function shell(content, { showAdminLink = true, nav: nav2 } = {}) {
    return h(
      "div",
      { class: "auth" },
      h(
        "aside",
        { class: "auth-brand" },
        h(
          "div",
          null,
          h("div", { class: "brand-mark" }, "Hotel POS"),
          h(
            "p",
            { class: "brand-line", style: "margin-top:28px" },
            "Orders, tables, billing and staff for hotels and restaurants. Every hotel keeps its records in its own private Google Sheet."
          )
        ),
        h(
          "div",
          { class: "auth-foot" },
          showAdminLink ? h("button", { class: "link-button", type: "button", onclick: () => nav2("admin") }, "Administrator sign-in") : null
        )
      ),
      h("main", { class: "auth-main" }, h("div", { class: "auth-form" }, content))
    );
  }
  function showError(err, fields, slot) {
    slot.replaceChildren();
    const target = err.details && err.details.field && fields[err.details.field];
    if (target) {
      target.setError(err.message);
      target.input.focus();
    } else slot.append(formError(err.message));
  }
  function registerView(nav2) {
    const f = {
      hotelName: field({ label: "Hotel name", name: "hotelName", autocomplete: "organization", maxlength: 80 }),
      ownerName: field({ label: "Owner name", name: "ownerName", autocomplete: "name", maxlength: 60 }),
      username: field({
        label: "Username",
        name: "username",
        autocomplete: "username",
        maxlength: 24,
        hint: "4 to 24 characters. Lowercase letters, numbers and underscore."
      }),
      phone: field({ label: "Phone", name: "phone", type: "tel", autocomplete: "tel", maxlength: 24, inputmode: "tel" }),
      email: field({ label: "Email", name: "email", type: "email", autocomplete: "email", maxlength: 120 }),
      password: field({
        label: "Password",
        name: "password",
        type: "password",
        autocomplete: "new-password",
        maxlength: 128,
        hint: "At least 8 characters, with a letter and a number."
      }),
      confirmPassword: field({ label: "Confirm password", name: "confirmPassword", type: "password", autocomplete: "new-password", maxlength: 128 })
    };
    const honeypot = h(
      "div",
      { class: "hp", "aria-hidden": "true" },
      h("label", null, "Website", h("input", { name: "website", tabindex: "-1", autocomplete: "off" }))
    );
    const slot = h("div");
    const submit = h("button", { class: "btn btn-primary btn-block", type: "submit" }, "Register hotel");
    const form = h(
      "form",
      { novalidate: true, onsubmit: async (e) => {
        e.preventDefault();
        Object.values(f).forEach((x) => x.clear());
        slot.replaceChildren();
        const data = {
          hotelName: f.hotelName.value(),
          ownerName: f.ownerName.value(),
          username: f.username.value().toLowerCase(),
          phone: f.phone.value(),
          email: f.email.value(),
          password: f.password.raw(),
          confirmPassword: f.confirmPassword.raw(),
          website: honeypot.querySelector("input").value
        };
        const missing = Object.keys(f).filter((k) => !data[k]);
        if (missing.length) {
          missing.forEach((k) => f[k].setError("This field is required."));
          f[missing[0]].input.focus();
          return;
        }
        if (data.password !== data.confirmPassword) {
          f.confirmPassword.setError("Passwords do not match.");
          f.confirmPassword.input.focus();
          return;
        }
        setBusy(submit, true, "Registering\u2026");
        try {
          const result = await call("registerHotel", data);
          nav2("registered", result);
        } catch (err) {
          if (!(err instanceof ApiError)) {
            console.error(err);
            err = new ApiError("SERVER_ERROR", "Unable to register right now. Please try again.");
          }
          showError(err, f, slot);
        } finally {
          setBusy(submit, false);
        }
      } },
      h(
        "div",
        { class: "form-grid" },
        h("div", { class: "span-2" }, f.hotelName.el),
        f.ownerName.el,
        f.phone.el,
        h("div", { class: "span-2" }, f.email.el),
        h("div", { class: "span-2" }, f.username.el),
        f.password.el,
        f.confirmPassword.el
      ),
      honeypot,
      slot,
      submit
    );
    return shell([
      h(
        "div",
        null,
        h("h1", null, "Register your hotel"),
        h("p", { class: "lead" }, "Create the owner account. You will get a Hotel ID and a Hotel Code, and the administrator will activate your subscription.")
      ),
      form,
      h("p", { class: "auth-alt" }, "Already registered? ", h("button", { class: "link-button", type: "button", onclick: () => nav2("login") }, "Sign in"))
    ], { nav: nav2 });
  }
  function registeredView(result, nav2) {
    const tag = h(
      "div",
      { class: "keytag" },
      h(
        "dl",
        null,
        h(
          "div",
          null,
          h("dt", null, "Hotel ID"),
          h("dd", null, h("span", { class: "big" }, result.hotelId), copyButton(result.hotelId, "Copy", "Hotel ID copied"))
        ),
        h(
          "div",
          null,
          h("dt", null, "Hotel Code (staff use this to sign in)"),
          h("dd", null, h("span", { class: "big" }, result.activationCode), copyButton(result.activationCode, "Copy", "Hotel Code copied"))
        )
      )
    );
    return shell([
      h(
        "div",
        null,
        h("h1", null, result.hotelName + " is registered"),
        h("p", { class: "lead" }, "Keep these two codes. Your account now waits for the administrator to activate it and set your subscription period.")
      ),
      tag,
      h("p", { class: "lead" }, "After the administrator activates your account, you create your own Google Sheet and connect it from your portal. Your orders, staff and menu are saved in that sheet."),
      h("div", null, h("button", { class: "btn btn-primary", type: "button", onclick: () => nav2("login") }, "Go to sign in"))
    ], { nav: nav2 });
  }
  var CODE_KEY = "hotelpos.staffcode";
  var remembered = () => {
    try {
      return JSON.parse(localStorage.getItem(CODE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  };
  async function openApp(nav2, sess, boot, remember, fallback) {
    try {
      await launch(sess, boot, remember);
      nav2("app/" + homeScreen());
    } catch (err) {
      if (fallback) {
        nav2("portal", fallback);
        return;
      }
      throw err;
    }
  }
  function warmUp() {
    try {
      const hotel = localStorage.getItem("hotelpos.lasturl");
      [CONFIG.API_URL, hotel].filter(Boolean).forEach((u) => fetch(u, { mode: "no-cors", cache: "no-store" }).catch(() => {
      }));
    } catch (e) {
    }
  }
  function loginView(nav2, { notice, mode } = {}) {
    warmUp();
    let who = mode === "staff" || !mode && remembered().code && !store.getLastUsername() ? "staff" : "owner";
    const slot = h("div");
    const box = h("div");
    const tabsEl = h("div", { class: "seg wide" });
    function ownerForm() {
      const f = {
        username: field({ label: "Username", name: "username", autocomplete: "username", value: store.getLastUsername(), maxlength: 40 }),
        password: field({ label: "Password", name: "password", type: "password", autocomplete: "current-password", maxlength: 128 })
      };
      const remember = h("input", { type: "checkbox", id: "remember" });
      remember.checked = true;
      const submit = h("button", { class: "btn btn-primary btn-block btn-lg", type: "submit" }, "Sign in");
      return h("form", { novalidate: true, onsubmit: async (e) => {
        e.preventDefault();
        Object.values(f).forEach((x) => x.clear());
        slot.replaceChildren();
        const username = f.username.value().toLowerCase(), password = f.password.raw();
        if (!username) {
          f.username.setError("Enter your username.");
          f.username.input.focus();
          return;
        }
        if (!password) {
          f.password.setError("Enter your password.");
          f.password.input.focus();
          return;
        }
        setBusy(submit, true, "Signing in\u2026");
        try {
          const data = await call("login", { username, password, remember: remember.checked });
          store.setLastUsername(username);
          store.setOwner({ token: data.token, expiresAt: data.tokenExpiresAt }, remember.checked);
          const p = data.profile || {};
          if (p.state === "ACTIVE" && p.appScriptUrl && p.sheetId) {
            submit.textContent = "Opening your hotel\u2026";
            await openApp(nav2, { kind: "owner", token: data.hotelToken, url: p.appScriptUrl, key: "owner:" + p.hotelId, hotelName: p.hotelName }, null, remember.checked, data);
          } else nav2("portal", data);
        } catch (err) {
          if (!(err instanceof ApiError)) {
            console.error(err);
            err = new ApiError("SERVER_ERROR", "Unable to sign in right now. Please try again.");
          }
          if (["ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY"].includes(err.code)) {
            nav2("blocked", err);
            return;
          }
          slot.append(formError(err.message));
          f.password.input.value = "";
        } finally {
          setBusy(submit, false);
        }
      } }, f.username.el, f.password.el, h("label", { class: "check", for: "remember" }, remember, "Keep me signed in on this device"), submit);
    }
    function staffForm() {
      const mem = remembered();
      const f = {
        hotelCode: field({ label: "Hotel Code", name: "hotelCode", value: mem.code || "", maxlength: 12, hint: "Given to you by your manager, like ABCD-1234.", autocomplete: "off" }),
        username: field({ label: "Username", name: "username", autocomplete: "username", value: mem.user || "", maxlength: 40 }),
        password: field({ label: "Password", name: "password", type: "password", autocomplete: "current-password", maxlength: 128 })
      };
      const submit = h("button", { class: "btn btn-primary btn-block btn-lg", type: "submit" }, "Sign in");
      return h("form", { novalidate: true, onsubmit: async (e) => {
        e.preventDefault();
        Object.values(f).forEach((x) => x.clear());
        slot.replaceChildren();
        const code = f.hotelCode.value().toUpperCase(), username = f.username.value().toLowerCase(), password = f.password.raw();
        for (const k of ["hotelCode", "username", "password"]) {
          if (!(k === "hotelCode" ? code : k === "username" ? username : password)) {
            f[k].setError("This field is required.");
            f[k].input.focus();
            return;
          }
        }
        setBusy(submit, true, "Signing in\u2026");
        try {
          const g = await call("resolveHotel", { hotelCode: code });
          const r = await call("staffLogin", { gateToken: g.gateToken, username, password }, "", g.appScriptUrl);
          try {
            localStorage.setItem(CODE_KEY, JSON.stringify({ code, user: username }));
          } catch (e2) {
          }
          await openApp(nav2, { kind: "staff", token: r.token, url: g.appScriptUrl, expiresAt: r.expiresAt, key: "staff:" + g.hotelId + ":" + username, hotelName: g.hotelName }, r.boot, true, null);
        } catch (err) {
          if (!(err instanceof ApiError)) {
            console.error(err);
            err = new ApiError("SERVER_ERROR", "Unable to sign in right now. Please try again.");
          }
          if (["ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY"].includes(err.code)) {
            nav2("blocked", err);
            return;
          }
          if (err.code === "HOTEL_NOT_FOUND" || err.code === "RATE_LIMIT") f.hotelCode.setError(err.message);
          else slot.append(formError(err.message));
          f.password.input.value = "";
        } finally {
          setBusy(submit, false);
        }
      } }, f.hotelCode.el, f.username.el, f.password.el, submit);
    }
    function draw() {
      tabsEl.replaceChildren(...[["owner", "Hotel owner"], ["staff", "Staff"]].map(([k, l]) => h("button", { class: k === who ? "on" : "", type: "button", onclick: () => {
        who = k;
        slot.replaceChildren();
        draw();
      } }, l)));
      box.replaceChildren(who === "owner" ? ownerForm() : staffForm());
    }
    draw();
    return shell([
      h("div", null, h("h1", null, "Sign in"), h("p", { class: "lead" }, "Owners sign in with their username. Staff use the Hotel Code from their manager.")),
      notice ? h("div", { class: "notice", role: "status" }, notice) : null,
      tabsEl,
      box,
      slot,
      h("p", { class: "auth-alt" }, "New hotel? ", h("button", { class: "link-button", type: "button", onclick: () => nav2("register") }, "Register your hotel"))
    ], { nav: nav2 });
  }
  function blockedView(err, nav2) {
    const d = err.details || {};
    const titles = { ACCOUNT_EXPIRED: "Account expired", ACCOUNT_SUSPENDED: "Account suspended", ACCOUNT_NOT_READY: "Account not ready" };
    const lines = [];
    if (err.code === "ACCOUNT_EXPIRED") {
      lines.push(d.expiryDate ? "Your software subscription expired on " + d.expiryDate + "." : err.message);
      lines.push("Your data is safe and nothing has been deleted. Access returns as soon as the administrator extends your subscription.");
    } else if (err.code === "ACCOUNT_SUSPENDED") {
      lines.push("This account has been suspended by the administrator. Your data is safe and nothing has been deleted.");
    } else {
      lines.push(err.message);
    }
    return shell([
      h(
        "div",
        null,
        h("h1", null, titles[err.code] || "Access blocked"),
        d.hotelName ? h("p", { class: "lead" }, d.hotelName) : null
      ),
      h(
        "div",
        { class: "band s-warn", role: "alert" },
        h("div", null, lines.map((l) => h("p", { style: "color:var(--text)" }, l)), h("p", { style: "color:var(--text);font-weight:600;margin-top:10px" }, "Please contact administrator."))
      ),
      h("div", null, h("button", { class: "btn", type: "button", onclick: () => {
        store.clearOwner();
        nav2("login");
      } }, "Back to sign in"))
    ], { nav: nav2 });
  }

  // web/js/portal.js
  init_store();
  var BLOCKING = ["ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY"];
  async function portalView(root2, nav2, initial) {
    const stored = store.getOwner();
    if (!stored) {
      nav2("login", { notice: "Please sign in to continue." });
      return;
    }
    let token = stored.token;
    let hotelToken = initial && initial.hotelToken ? initial.hotelToken : null;
    let profile = initial && initial.profile ? initial.profile : null;
    let conn = { state: "idle", info: null, message: "" };
    let setupCode = null;
    let codeVisible = false;
    let stepsOpen = null;
    let urlDraft = null;
    if (profile) draw();
    else mount(root2, h("div", { class: "loading" }, "Loading your account\u2026"));
    try {
      const fresh = await call("getSession", {}, token);
      profile = fresh.profile;
      hotelToken = fresh.hotelToken;
      draw();
      if (profile.state === "ACTIVE") checkConnection(true);
    } catch (err) {
      if (!handleAuthError(err)) mount(root2, h(
        "div",
        { class: "loading" },
        err instanceof ApiError ? err.message : "Unable to load your account.",
        h("div", { style: "margin-top:12px" }, h("button", { class: "btn", type: "button", onclick: () => nav2("portal") }, "Try again"))
      ));
    }
    function handleAuthError(err) {
      if (err instanceof ApiError && BLOCKING.includes(err.code)) {
        store.clearOwner();
        nav2("blocked", err);
        return true;
      }
      if (err instanceof ApiError && err.code === "SESSION_INVALID") {
        store.clearOwner();
        nav2("login", { notice: err.message });
        return true;
      }
      return false;
    }
    function signOut2() {
      signOut();
      nav2("login");
    }
    async function openDashboard(btn) {
      if (btn) setBusy(btn, true, "Opening\u2026");
      try {
        await launch({ kind: "owner", token: hotelToken, url: profile.appScriptUrl, key: "owner:" + profile.hotelId, hotelName: profile.hotelName }, null, !!(stored && stored.remember));
        nav2("app/" + homeScreen());
      } catch (err) {
        toast(err instanceof ApiError ? err.message : "Could not open the dashboard.", "error", 7e3);
        if (btn) setBusy(btn, false);
      }
    }
    function explain(err) {
      if (!(err instanceof ApiError)) {
        console.error(err);
        return "Unable to test the connection. Please try again.";
      }
      if (["NETWORK", "TIMEOUT", "BAD_RESPONSE", "OFFLINE"].includes(err.code)) {
        return err.code === "OFFLINE" ? err.message : 'Your hotel script did not answer. Check that the URL is the web app URL ending in /exec, and that it was deployed with "Execute as: Me" and "Who has access: Anyone".';
      }
      if (["SESSION_INVALID", "HOTEL_MISMATCH"].includes(err.code)) {
        return "The script does not accept this account. Copy the code again from this page, paste it over the old code, then deploy a New version.";
      }
      return err.message;
    }
    async function checkConnection(quiet) {
      if (!profile.appScriptUrl) {
        conn = { state: "none", info: null, message: "" };
        draw();
        return;
      }
      conn = { state: "checking", info: conn.info, message: "" };
      draw();
      if (!quiet) {
        try {
          const s = await call("getSession", {}, token);
          profile = s.profile;
          hotelToken = s.hotelToken;
        } catch (err) {
          if (handleAuthError(err)) return;
          conn = { state: "fail", info: null, message: explain(err) };
          draw();
          return;
        }
      }
      let hotelInfo = null;
      try {
        const url = profile.appScriptUrl;
        hotelInfo = await call("testConnection", {}, hotelToken, url);
        if (!hotelInfo.schemaReady) {
          await call("initSchema", {}, hotelToken, url);
          hotelInfo = await call("testConnection", {}, hotelToken, url);
          toast("Your Google Sheet is ready. All database tabs were created.", "ok");
        }
      } catch (err) {
        conn = { state: "fail", info: null, message: explain(err) };
        draw();
        return;
      }
      if (hotelInfo.spreadsheetId !== profile.sheetId) {
        try {
          const r = await call("saveSheetInfo", { sheetId: hotelInfo.spreadsheetId }, token);
          profile = r.profile;
        } catch (err) {
          if (handleAuthError(err)) return;
          console.error("saveSheetInfo failed", err);
        }
      }
      conn = { state: "ok", info: hotelInfo, message: "" };
      if (!quiet) toast("Connected to your Google Sheet.", "ok");
      draw();
    }
    async function copyCode(btn) {
      setBusy(btn, true, "Preparing\u2026");
      try {
        if (!setupCode) setupCode = await call("getSetupCode", {}, token);
        await copyText(setupCode.code, "Apps Script copied. Paste it into the Apps Script editor.");
        codeVisible = true;
        stepsOpen = true;
        draw();
      } catch (err) {
        if (handleAuthError(err)) return;
        toast(err instanceof ApiError ? err.message : "Unable to prepare the code. Please try again.", "error");
        setBusy(btn, false);
      }
    }
    function connectionPill() {
      return {
        ok: h("span", { class: "pill ACTIVE" }, "Connected"),
        checking: h("span", { class: "pill IDLE" }, "Checking\u2026"),
        fail: h("span", { class: "pill EXPIRED" }, "Connection failed"),
        none: h("span", { class: "pill NOT_SET" }, "Not connected"),
        idle: h("span", { class: "pill NOT_SET" }, profile.appScriptUrl ? "Not checked" : "Not connected")
      }[conn.state];
    }
    function row(label, value, extra, sub) {
      return h(
        "div",
        { class: "row" },
        h("dt", null, label),
        h("dd", null, value, sub ? h("span", { class: "sub" }, sub) : null),
        extra || h("span")
      );
    }
    function connectionPanel(p) {
      if (p.state !== "ACTIVE") {
        return h(
          "section",
          { class: "panel" },
          h("header", null, h("h2", null, "Google Sheet connection"), h("span", { class: "pill PENDING" }, "Waiting for activation")),
          h("div", { class: "pad" }, h("p", null, "Your Apps Script code is released as soon as the administrator activates your account. Then you create your own Google Sheet and connect it here."))
        );
      }
      const info = conn.info;
      const connected = conn.state === "ok";
      const dbText = info ? "Ready, " + (info.totalTabs ? info.totalTabs - (info.missingTabs ? info.missingTabs.length : 0) : "") + " tabs" : conn.state === "checking" ? "Checking\u2026" : "Not checked";
      const rows = h(
        "dl",
        { class: "body rows" },
        row("Hotel", p.hotelName),
        row("Hotel ID", h("span", { class: "code" }, p.hotelId), copyButton(p.hotelId, "Copy", "Hotel ID copied")),
        row("Database", connected ? "Connected" : dbText, null, connected ? info.spreadsheetName : null),
        row(
          "Google Sheet",
          p.sheetId ? connected ? "Connected" : "Saved" : "Not connected yet",
          p.sheetId ? copyButton(p.sheetId, "Copy Sheet ID", "Sheet ID copied") : null,
          connected ? info.spreadsheetName : null
        ),
        row("Last Sync", info ? fmtStamp(info.lastSync) : "Never"),
        row("Apps Script", connected ? "Connected" : p.appScriptUrl ? "Web app URL saved" : "Not set", null, connected ? "Version " + info.scriptVersion : null)
      );
      const failBox = conn.state === "fail" ? h("div", { class: "pad", style: "padding-bottom:0" }, formError(conn.message)) : null;
      const test = h("button", { class: "btn btn-primary", type: "button", disabled: conn.state === "checking" || !p.appScriptUrl }, "Test connection");
      test.addEventListener("click", () => checkConnection(false));
      const actions = h("div", { class: "pad" }, h(
        "div",
        { class: "actions" },
        test,
        p.sheetUrl ? h("a", { class: "btn", href: p.sheetUrl, target: "_blank", rel: "noopener noreferrer" }, "Open Google Sheet") : null,
        h("button", { class: "btn", type: "button", onclick: () => {
          stepsOpen = true;
          draw();
          document.getElementById("setup-steps")?.scrollIntoView({ block: "start" });
        } }, "Reconnect")
      ));
      const copyBtn = h("button", { class: "btn btn-primary", type: "button" }, "Copy Apps Script");
      copyBtn.addEventListener("click", () => copyCode(copyBtn));
      const urlField = field({
        label: "Web app URL",
        name: "appScriptUrl",
        value: urlDraft !== null ? urlDraft : p.appScriptUrl || "",
        maxlength: 300,
        inputmode: "url",
        placeholder: "https://script.google.com/macros/s/\u2026/exec"
      });
      urlField.input.addEventListener("input", () => {
        urlDraft = urlField.input.value;
      });
      const saveSlot = h("div");
      const save2 = h("button", { class: "btn btn-primary", type: "button" }, "Save and test");
      save2.addEventListener("click", async () => {
        urlField.clear();
        saveSlot.replaceChildren();
        setBusy(save2, true, "Saving\u2026");
        try {
          const r = await call("saveAppScriptUrl", { appScriptUrl: urlField.value() }, token);
          profile = r.profile;
          urlDraft = null;
          await checkConnection(false);
        } catch (err) {
          if (handleAuthError(err)) return;
          if (err.details && err.details.field === "appScriptUrl") urlField.setError(err.message);
          else saveSlot.append(formError(err instanceof ApiError ? err.message : "Unable to save. Please try again."));
          setBusy(save2, false);
        }
      });
      const codeBox = setupCode && codeVisible ? h(
        "div",
        { class: "codebox-wrap" },
        h("textarea", { class: "codebox", readonly: true, spellcheck: "false", "aria-label": "Apps Script code", rows: "10", onfocus: (e) => e.target.select() }, setupCode.code),
        h("p", { class: "hint" }, "Version " + setupCode.version + ", " + setupCode.lines + " lines. It contains your hotel's private key, so never share it.")
      ) : null;
      const open = stepsOpen !== null ? stepsOpen : !connected;
      const steps = h(
        "details",
        { class: "setup", id: "setup-steps", open: open || null },
        h("summary", { onclick: () => {
          stepsOpen = !steps.open;
        } }, connected ? "Reconnect or update the script" : "Connect your Google Sheet"),
        h(
          "ol",
          { class: "steps" },
          h(
            "li",
            null,
            h("b", null, "Create your hotel's Google Sheet."),
            h("p", null, 'Make a new, blank Google Sheet in your own Google account and name it, for example, "' + p.hotelName + ' database". Your orders, staff, menu and sales are all saved in this sheet, and only you own it.'),
            h("div", { class: "actions" }, h("a", { class: "btn", href: "https://sheets.new", target: "_blank", rel: "noopener noreferrer" }, "Create Google Sheet"))
          ),
          h(
            "li",
            null,
            h("b", null, "Open the script editor."),
            h("p", null, "In that sheet choose Extensions, then Apps Script. Select everything in the editor and delete it.")
          ),
          h(
            "li",
            null,
            h("b", null, "Copy the code from here and paste it into the editor."),
            h("p", null, "Press Save (the disk icon). You do not need to change anything in the code."),
            h(
              "div",
              { class: "actions" },
              copyBtn,
              setupCode ? h("button", { class: "btn", type: "button", onclick: () => {
                codeVisible = !codeVisible;
                stepsOpen = true;
                draw();
              } }, codeVisible ? "Hide code" : "Show code") : null
            ),
            codeBox
          ),
          h(
            "li",
            null,
            h("b", null, "Deploy it as a web app."),
            h("p", null, "Press Deploy, then New deployment. Click the gear and choose Web app. Set Execute as to Me and Who has access to Anyone. Press Deploy. When Google asks for permission, choose your account, then Advanced, then Go to project, then Allow.")
          ),
          h(
            "li",
            null,
            h("b", null, "Paste the web app URL here."),
            h("p", null, "Copy the Web app URL that Google shows (it ends in /exec) and paste it below."),
            h("div", { class: "inline-form" }, urlField.el, h("div", { style: "padding-top:26px" }, save2)),
            saveSlot
          ),
          h(
            "li",
            null,
            h("b", null, "Check the result."),
            h("p", null, "The status at the top of this panel should change to Connected. All database tabs are created in your sheet automatically the first time.")
          )
        ),
        h("p", { class: "hint" }, "Changed or re-pasted the code later? Deploy it again with Deploy, Manage deployments, Edit, New version, so the same URL keeps working.")
      );
      return h(
        "section",
        { class: "panel" },
        h("header", null, h("h2", null, "Google Sheet connection"), connectionPill()),
        rows,
        failBox,
        actions,
        h("div", { class: "pad", style: "border-top:1px solid var(--line)" }, steps)
      );
    }
    function statusBand(p) {
      if (p.state === "PENDING") {
        return h(
          "div",
          { class: "band s-pending" },
          h(
            "div",
            null,
            h("h1", null, "Waiting for activation"),
            h("p", null, "The administrator needs to activate your account and set your subscription period. After that you create your own Google Sheet and connect it from this page.")
          ),
          pill("PENDING")
        );
      }
      const soon = p.daysLeft !== null && p.daysLeft <= 14;
      return h(
        "div",
        { class: "band " + (soon ? "s-warn" : "s-ok") },
        h(
          "div",
          null,
          h("h1", null, soon ? "Your subscription ends soon" : "Subscription active"),
          h("p", null, soon ? "Contact the administrator to extend it before " + p.expiryDate + " so your staff are not locked out." : "Everything is running normally.")
        ),
        h("div", { class: "big-num" }, p.expiryDate, h("small", null, "Valid until, " + daysText(p.daysLeft)))
      );
    }
    function changePasswordModal() {
      const f = {
        currentPassword: field({ label: "Current password", name: "currentPassword", type: "password", autocomplete: "current-password", maxlength: 128 }),
        newPassword: field({ label: "New password", name: "newPassword", type: "password", autocomplete: "new-password", maxlength: 128, hint: "At least 8 characters, with a letter and a number." }),
        confirmPassword: field({ label: "Confirm new password", name: "confirmPassword", type: "password", autocomplete: "new-password", maxlength: 128 })
      };
      const slot = h("div");
      openModal({
        title: "Change password",
        content: [f.currentPassword.el, f.newPassword.el, f.confirmPassword.el, slot],
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Change password");
          ok.addEventListener("click", async () => {
            Object.values(f).forEach((x) => x.clear());
            slot.replaceChildren();
            if (f.newPassword.raw() !== f.confirmPassword.raw()) {
              f.confirmPassword.setError("Passwords do not match.");
              return;
            }
            setBusy(ok, true, "Saving\u2026");
            try {
              const r = await call("changePassword", {
                currentPassword: f.currentPassword.raw(),
                newPassword: f.newPassword.raw(),
                confirmPassword: f.confirmPassword.raw()
              }, token);
              token = r.token;
              hotelToken = r.hotelToken;
              store.replaceOwnerToken({ token: r.token, expiresAt: r.tokenExpiresAt });
              profile = r.profile;
              m.close();
              toast("Password changed", "ok");
              draw();
            } catch (err) {
              if (handleAuthError(err)) {
                m.close();
                return;
              }
              const target = err.details && err.details.field && f[err.details.field];
              if (target) target.setError(err.message);
              else slot.append(formError(err instanceof ApiError ? err.message : "Unable to change the password. Please try again."));
            } finally {
              setBusy(ok, false);
            }
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    function draw() {
      const p = profile;
      mount(
        root2,
        h("header", { class: "topbar" }, h(
          "div",
          { class: "topbar-in" },
          h("span", { class: "brand" }, "Hotel POS"),
          h("span", { class: "where" }, p.hotelName),
          h("span", { class: "spacer" }),
          h("span", { class: "who" }, p.ownerName),
          p.state === "ACTIVE" && p.appScriptUrl && p.sheetId ? (() => {
            const b = h("button", { class: "btn btn-primary", type: "button" }, "Open dashboard");
            b.addEventListener("click", () => openDashboard(b));
            return b;
          })() : null,
          h("button", { class: "btn", type: "button", onclick: signOut2 }, "Sign out")
        )),
        h(
          "main",
          { class: "page narrow" },
          statusBand(p),
          connectionPanel(p),
          h(
            "section",
            { class: "panel" },
            h("header", null, h("h2", null, "Hotel details")),
            h(
              "dl",
              { class: "body rows" },
              row(
                "Hotel Code",
                h("span", { class: "code" }, p.activationCode),
                copyButton(p.activationCode, "Copy", "Hotel Code copied"),
                "Your staff enter this code to sign in."
              ),
              row("Owner", p.ownerName),
              row("Username", p.username),
              row("Email", p.email),
              row("Phone", p.phone),
              row("Registered", p.registrationDate),
              row("Last sign-in", fmtStamp(p.lastLogin) || "This is your first sign-in")
            )
          ),
          h(
            "section",
            { class: "panel" },
            h("header", null, h("h2", null, "Account")),
            h("div", { class: "pad" }, h(
              "div",
              null,
              h("button", { class: "btn", type: "button", onclick: changePasswordModal }, "Change password")
            ))
          )
        )
      );
    }
  }

  // web/js/admin.js
  init_store();
  function adminLoginView(root2, nav2) {
    const f = {
      username: field({ label: "Administrator username", name: "username", autocomplete: "username", maxlength: 40 }),
      password: field({ label: "Password", name: "password", type: "password", autocomplete: "current-password", maxlength: 128 })
    };
    const slot = h("div");
    const submit = h("button", { class: "btn btn-primary btn-block", type: "submit" }, "Sign in");
    const form = h("form", { novalidate: true, onsubmit: async (e) => {
      e.preventDefault();
      slot.replaceChildren();
      Object.values(f).forEach((x) => x.clear());
      if (!f.username.value() || !f.password.raw()) {
        slot.append(formError("Enter the administrator username and password."));
        return;
      }
      setBusy(submit, true, "Signing in\u2026");
      try {
        const r = await call("adminLogin", { username: f.username.value(), password: f.password.raw() });
        store.setAdmin({ token: r.token, expiresAt: r.tokenExpiresAt });
        nav2("admin");
      } catch (err) {
        slot.append(formError(err instanceof ApiError ? err.message : "Unable to sign in. Please try again."));
        f.password.input.value = "";
      } finally {
        setBusy(submit, false);
      }
    } }, f.username.el, f.password.el, slot, submit);
    mount(root2, h(
      "div",
      { class: "auth" },
      h(
        "aside",
        { class: "auth-brand" },
        h(
          "div",
          null,
          h("div", { class: "brand-mark" }, "Hotel POS"),
          h("p", { class: "brand-line", style: "margin-top:28px" }, "Provider console. Manage registered hotels, subscriptions and access.")
        ),
        h("div", { class: "auth-foot" }, h("button", { class: "link-button", type: "button", onclick: () => nav2("login") }, "Hotel owner sign-in"))
      ),
      h("main", { class: "auth-main" }, h(
        "div",
        { class: "auth-form" },
        h("div", null, h("h1", null, "Administrator sign-in")),
        form
      ))
    ));
  }
  var pad = (n) => (n < 10 ? "0" : "") + n;
  var fmtUTC = (d) => pad(d.getUTCDate()) + "/" + pad(d.getUTCMonth() + 1) + "/" + d.getUTCFullYear();
  function extendedExpiry(current2, months) {
    const now = /* @__PURE__ */ new Date();
    let base = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(current2 || "");
    if (m) base = Math.max(base, Date.UTC(+m[3], +m[2] - 1, +m[1]));
    const b = new Date(base);
    const y = b.getUTCFullYear(), mo = b.getUTCMonth() + months, d = b.getUTCDate();
    const last2 = new Date(Date.UTC(y, mo + 1, 0)).getUTCDate();
    return fmtUTC(new Date(Date.UTC(y, mo, Math.min(d, last2))));
  }
  async function adminConsoleView(root2, nav2) {
    const session2 = store.getAdmin();
    if (!session2) {
      adminLoginView(root2, nav2);
      return;
    }
    const token = session2.token;
    let data = null;
    let filter2 = "ALL";
    let query = "";
    function signOut2() {
      store.clearAdmin();
      nav2("admin");
    }
    function onAuthError(err) {
      if (err instanceof ApiError && err.code === "SESSION_INVALID") {
        store.clearAdmin();
        toast(err.message, "error");
        nav2("admin");
        return true;
      }
      return false;
    }
    async function load() {
      try {
        data = await call("adminListHotels", {}, token);
        if (root2.dataset.view === "admin") draw();
      } catch (err) {
        if (onAuthError(err)) return;
        if (!(err instanceof ApiError)) console.error("Admin console failed to render", err);
        mount(root2, h(
          "div",
          { class: "loading" },
          err instanceof ApiError ? err.message : "Unable to load hotels.",
          h("div", { style: "margin-top:12px" }, h("button", { class: "btn", type: "button", onclick: load }, "Try again"))
        ));
      }
    }
    const FILTERS = [
      ["ALL", "All hotels", (h2) => true],
      ["ACTIVE", "Active", (h2) => h2.state === "ACTIVE"],
      ["PENDING", "Awaiting activation", (h2) => h2.state === "PENDING"],
      ["SOON", "Expiring soon", (h2) => h2.state === "ACTIVE" && h2.daysLeft !== null && h2.daysLeft <= data.expiringSoonDays],
      ["EXPIRED", "Expired", (h2) => h2.state === "EXPIRED"],
      ["SUSPENDED", "Suspended", (h2) => h2.state === "SUSPENDED"]
    ];
    const countFor = (key) => {
      const s = data.stats;
      return { ALL: s.total, ACTIVE: s.active, PENDING: s.pending, SOON: s.expiringSoon, EXPIRED: s.expired, SUSPENDED: s.suspended }[key];
    };
    function visible() {
      const pred = FILTERS.find((x) => x[0] === filter2)[2];
      const q = query.toLowerCase();
      return data.hotels.filter(pred).filter((x) => !q || [x.hotelName, x.ownerName, x.hotelId, x.username, x.email, x.phone, x.activationCode].some((v) => String(v).toLowerCase().includes(q)));
    }
    function draw() {
      const search = field({ label: "Search hotels", name: "q", value: query, placeholder: "Name, owner, ID, username, email or code" });
      search.input.addEventListener("input", () => {
        query = search.input.value;
        drawTable();
      });
      const tableHost = h("div");
      function drawTable() {
        const list = visible();
        count.textContent = list.length + (list.length === 1 ? " hotel" : " hotels");
        tableHost.replaceChildren(list.length ? h("div", { class: "scroll-x" }, h(
          "table",
          { class: "grid" },
          h("thead", null, h("tr", null, ["Hotel", "Owner", "Status", "Expiry", "Last sign-in"].map((t) => h("th", { scope: "col" }, t)))),
          h("tbody", null, list.map((x) => h(
            "tr",
            {
              tabindex: "0",
              role: "button",
              "aria-label": "Open " + x.hotelName,
              onclick: () => openHotel(x),
              onkeydown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openHotel(x);
                }
              }
            },
            h("td", null, h("span", { class: "name" }, x.hotelName), h("span", { class: "id" }, x.hotelId)),
            h("td", null, x.ownerName, h("span", { class: "id" }, x.username)),
            h("td", null, pill(x.state)),
            h("td", null, x.expiryDate || "Not set", x.daysLeft !== null ? h("span", { class: "id" }, daysText(x.daysLeft)) : null),
            h("td", null, fmtStamp(x.lastLogin) || "Never")
          )))
        )) : h("div", { class: "empty" }, data.hotels.length ? "No hotels match this filter." : "No hotels have registered yet."));
      }
      const count = h("span", { class: "count" });
      mount(
        root2,
        h("header", { class: "topbar" }, h(
          "div",
          { class: "topbar-in" },
          h("span", { class: "brand" }, "Hotel POS"),
          h("span", { class: "where" }, "Provider console"),
          h("span", { class: "spacer" }),
          h("button", { class: "btn", type: "button", onclick: load }, "Refresh"),
          h("button", { class: "btn", type: "button", onclick: signOut2 }, "Sign out")
        )),
        h(
          "main",
          { class: "page" },
          h(
            "div",
            { class: "summary", role: "group", "aria-label": "Filter by status" },
            FILTERS.map(([key, label]) => h(
              "button",
              { type: "button", "aria-pressed": String(filter2 === key), onclick: () => {
                filter2 = key;
                draw();
              } },
              h("b", null, countFor(key)),
              h("span", null, label)
            ))
          ),
          h("div", { class: "toolbar" }, search.el, count),
          h("section", { class: "panel" }, tableHost)
        )
      );
      drawTable();
    }
    function openHotel(x) {
      const f = {
        hotelName: field({ label: "Hotel name", name: "hotelName", value: x.hotelName, maxlength: 80 }),
        ownerName: field({ label: "Owner name", name: "ownerName", value: x.ownerName, maxlength: 60 }),
        email: field({ label: "Email", name: "email", value: x.email, maxlength: 120 }),
        phone: field({ label: "Phone", name: "phone", value: x.phone, maxlength: 24 }),
        expiryDate: field({
          label: "Expiry date",
          name: "expiryDate",
          value: x.expiryDate,
          placeholder: "DD/MM/YYYY, for example 06/10/2026",
          maxlength: 10,
          hint: "Day/Month/Year. The hotel can use the system through this date."
        }),
        status: field({ label: "Status", name: "status", value: x.status, options: [
          { value: "PENDING", label: "Pending" },
          { value: "ACTIVE", label: "Active" },
          { value: "SUSPENDED", label: "Suspended" }
        ] }),
        appScriptUrl: field({ label: "Apps Script web app URL", name: "appScriptUrl", value: x.appScriptUrl, maxlength: 300 }),
        sheetId: field({ label: "Hotel Google Sheet ID", name: "sheetId", value: x.sheetId, maxlength: 80 }),
        notes: field({ label: "Notes (private to you)", name: "notes", type: "textarea", value: x.notes, maxlength: 500 })
      };
      const slot = h("div");
      const quick = h(
        "div",
        { class: "quick" },
        [["+1 month", 1], ["+3 months", 3], ["+1 year", 12]].map(([label, n]) => h("button", { class: "btn btn-small", type: "button", onclick: () => {
          f.expiryDate.input.value = extendedExpiry(f.expiryDate.value() || x.expiryDate, n);
        } }, label))
      );
      const save2 = h("button", { class: "btn btn-primary", type: "button" }, "Save changes");
      const toggle = h("button", { class: "btn " + (x.status === "SUSPENDED" ? "" : "btn-danger"), type: "button" }, x.status === "SUSPENDED" ? "Reactivate" : "Suspend");
      const reset2 = h("button", { class: "btn", type: "button" }, "Reset password");
      const drawer = openModal({ title: x.hotelName, drawer: true });
      const close = () => drawer.close();
      async function apply2(patch, okMsg) {
        slot.replaceChildren();
        Object.values(f).forEach((i) => i.clear());
        try {
          const r = await call("adminUpdateHotel", { hotelId: x.hotelId, patch }, token);
          toast(okMsg + (r.sharedWithOwner === true ? " The hotel sheet was shared with the owner." : ""), "ok");
          close();
          await load();
          return true;
        } catch (err) {
          if (onAuthError(err)) {
            close();
            return false;
          }
          const target = err.details && err.details.field && f[err.details.field];
          if (target) {
            target.setError(err.message);
            target.input.focus();
          } else slot.append(formError(err instanceof ApiError ? err.message : "Unable to save. Please try again."));
          return false;
        }
      }
      save2.addEventListener("click", async () => {
        const patch = {};
        Object.keys(f).forEach((k) => {
          if (f[k].value() !== String(x[k] || "")) patch[k] = f[k].value();
        });
        if (!Object.keys(patch).length) {
          toast("No changes to save.");
          return;
        }
        setBusy(save2, true, "Saving\u2026");
        await apply2(patch, "Changes saved.");
        setBusy(save2, false);
      });
      toggle.addEventListener("click", async () => {
        if (x.status === "SUSPENDED") {
          setBusy(toggle, true, "Working\u2026");
          await apply2({ status: "ACTIVE" }, x.hotelName + " is active again.");
          setBusy(toggle, false);
          return;
        }
        const yes = await confirmDialog("Suspend " + x.hotelName + "?", "The owner and all staff are blocked immediately. Their data is not deleted.", "Suspend", true);
        if (yes) await apply2({ status: "SUSPENDED" }, x.hotelName + " is suspended.");
      });
      reset2.addEventListener("click", () => resetPasswordModal(x));
      const info = (label, value, extra) => h(
        "div",
        { class: "row", style: "grid-template-columns:150px 1fr auto" },
        h("dt", null, label),
        h("dd", null, value),
        extra || h("span")
      );
      drawer.box.append(
        h(
          "header",
          null,
          h("div", null, h("h2", null, x.hotelName), h("p", null, x.hotelId + " \xB7 " + stateLabel(x.state) + (x.daysLeft !== null ? ", " + daysText(x.daysLeft) : ""))),
          h("button", { class: "btn btn-quiet btn-small", type: "button", onclick: close, "aria-label": "Close" }, "Close")
        ),
        h(
          "div",
          { class: "content" },
          h(
            "dl",
            { class: "rows" },
            info("Hotel Code", h("span", { class: "code" }, x.activationCode), copyButton(x.activationCode, "Copy", "Hotel Code copied")),
            info("Username", x.username),
            info("Registered", x.registrationDate),
            info("Last sign-in", fmtStamp(x.lastLogin) || "Never"),
            info("Google Sheet", x.sheetId ? h("a", { href: x.sheetUrl, target: "_blank", rel: "noopener noreferrer" }, "Open sheet") : "Not connected yet", x.sheetId ? copyButton(x.sheetId, "Copy ID", "Sheet ID copied") : null)
          ),
          h(
            "div",
            { class: "form-grid" },
            h("div", { class: "span-2" }, f.hotelName.el),
            f.ownerName.el,
            f.phone.el,
            h("div", { class: "span-2" }, f.email.el),
            h("div", null, f.expiryDate.el, quick),
            f.status.el,
            h("div", { class: "span-2" }, f.appScriptUrl.el),
            h("div", { class: "span-2" }, f.sheetId.el),
            h("div", { class: "span-2" }, f.notes.el)
          ),
          slot
        ),
        h("footer", null, save2, toggle, reset2)
      );
      f.hotelName.input.focus();
    }
    function resetPasswordModal(x) {
      const f = field({
        label: "New password",
        name: "newPassword",
        type: "text",
        maxlength: 128,
        autocomplete: "off",
        hint: "Leave empty to generate a strong temporary password. The owner can change it after signing in."
      });
      const slot = h("div");
      openModal({
        title: "Reset password for " + x.hotelName,
        content: [f.el, slot],
        actions: (m) => {
          const go = h("button", { class: "btn btn-primary", type: "button" }, "Reset password");
          go.addEventListener("click", async () => {
            f.clear();
            slot.replaceChildren();
            setBusy(go, true, "Resetting\u2026");
            try {
              const r = await call("adminResetPassword", { hotelId: x.hotelId, newPassword: f.raw() }, token);
              m.close();
              if (r.temporaryPassword) showTemp(r.temporaryPassword);
              else toast("Password changed. The owner's old sessions were signed out.", "ok");
            } catch (err) {
              if (onAuthError(err)) {
                m.close();
                return;
              }
              if (err.details && err.details.field) f.setError(err.message);
              else slot.append(formError(err instanceof ApiError ? err.message : "Unable to reset the password. Please try again."));
            } finally {
              setBusy(go, false);
            }
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), go];
        }
      });
    }
    function showTemp(pw) {
      openModal({
        title: "Temporary password",
        content: [h("p", null, "Give this to the owner. It is shown only once, and their old sessions have been signed out."), h("div", { class: "temp-pass" }, pw)],
        actions: (m) => [copyButton(pw, "Copy password", "Password copied", false), h("button", { class: "btn btn-primary", type: "button", onclick: () => m.close() }, "Done")]
      });
    }
    mount(root2, h("div", { class: "loading" }, "Loading hotels\u2026"));
    await load();
  }

  // web/js/app.js
  var root = document.getElementById("app");
  var carried = null;
  function nav(name, arg) {
    carried = arg === void 0 ? null : arg;
    if (location.hash === "#/" + name) render14();
    else location.hash = "#/" + name;
  }
  function render14() {
    const path = location.hash.replace(/^#\//, "").split("?")[0];
    const [name, sub] = (path || (store.getApp() ? "app" : store.getOwner() ? "portal" : "login")).split("/");
    const arg = carried;
    carried = null;
    root.dataset.view = name;
    window.scrollTo(0, 0);
    switch (name) {
      case "register":
        mount(root, registerView(nav));
        break;
      case "registered":
        arg ? mount(root, registeredView(arg, nav)) : nav("login");
        break;
      case "login":
        mount(root, loginView(nav, arg || {}));
        break;
      case "blocked":
        arg ? mount(root, blockedView(arg, nav)) : nav("login");
        break;
      case "app":
        appView(root, nav, sub || "");
        break;
      case "portal":
        portalView(root, nav, arg);
        break;
      case "admin":
        store.getAdmin() ? adminConsoleView(root, nav) : adminLoginView(root, nav);
        break;
      default:
        nav(store.getApp() ? "app" : store.getOwner() ? "portal" : "register");
    }
  }
  var bar = document.createElement("div");
  bar.className = "offline-bar";
  bar.hidden = navigator.onLine !== false;
  bar.textContent = "You are offline. Orders and kitchen updates are kept on this device and sent when the connection returns.";
  function syncBar() {
    bar.hidden = navigator.onLine !== false;
  }
  window.addEventListener("online", syncBar);
  window.addEventListener("offline", syncBar);
  document.body.prepend(bar);
  window.addEventListener("hashchange", render14);
  render14();
})();
