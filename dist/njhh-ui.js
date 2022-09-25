import { openBlock as hi, createElementBlock as ui, defineComponent as Ln, ref as Tn, onMounted as bn } from "vue";
const li = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [n, o] of e)
    i[n] = o;
  return i;
}, Mn = {};
function zn(t, e) {
  return hi(), ui("div", null, "11");
}
const ns = /* @__PURE__ */ li(Mn, [["render", zn], ["__file", "C:/Users/chen-pc/WebstormProjects/njhh-ui/lib/demo-ui.vue"]]);
/* @preserve
 * Leaflet 1.9.1, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var Sn = "1.9.1";
function w(t) {
  var e, i, n, o;
  for (i = 1, n = arguments.length; i < n; i++) {
    o = arguments[i];
    for (e in o)
      t[e] = o[e];
  }
  return t;
}
var jt = Object.create || function() {
  function t() {
  }
  return function(e) {
    return t.prototype = e, new t();
  };
}();
function M(t, e) {
  var i = Array.prototype.slice;
  if (t.bind)
    return t.bind.apply(t, i.call(arguments, 1));
  var n = i.call(arguments, 2);
  return function() {
    return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
  };
}
var ci = 0;
function x(t) {
  return "_leaflet_id" in t || (t._leaflet_id = ++ci), t._leaflet_id;
}
function fi(t, e, i) {
  var n, o, s, r;
  return r = function() {
    n = !1, o && (s.apply(i, o), o = !1);
  }, s = function() {
    n ? o = arguments : (t.apply(i, arguments), setTimeout(r, e), n = !0);
  }, s;
}
function Et(t, e, i) {
  var n = e[1], o = e[0], s = n - o;
  return t === n && i ? t : ((t - o) % s + s) % s + o;
}
function Z() {
  return !1;
}
function Y(t, e) {
  if (e === !1)
    return t;
  var i = Math.pow(10, e === void 0 ? 6 : e);
  return Math.round(t * i) / i;
}
function Pe(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function ct(t) {
  return Pe(t).split(/\s+/);
}
function z(t, e) {
  Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? jt(t.options) : {});
  for (var i in e)
    t.options[i] = e[i];
  return t.options;
}
function di(t, e, i) {
  var n = [];
  for (var o in t)
    n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
  return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
}
var Cn = /\{ *([\w_ -]+) *\}/g;
function _i(t, e) {
  return t.replace(Cn, function(i, n) {
    var o = e[n];
    if (o === void 0)
      throw new Error("No value provided for variable " + i);
    return typeof o == "function" && (o = o(e)), o;
  });
}
var j = Array.isArray || function(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
};
function Le(t, e) {
  for (var i = 0; i < t.length; i++)
    if (t[i] === e)
      return i;
  return -1;
}
var Ut = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
function fe(t) {
  return window["webkit" + t] || window["moz" + t] || window["ms" + t];
}
var Je = 0;
function mi(t) {
  var e = +new Date(), i = Math.max(0, 16 - (e - Je));
  return Je = e + i, window.setTimeout(t, i);
}
var de = window.requestAnimationFrame || fe("RequestAnimationFrame") || mi, pi = window.cancelAnimationFrame || fe("CancelAnimationFrame") || fe("CancelRequestAnimationFrame") || function(t) {
  window.clearTimeout(t);
};
function R(t, e, i) {
  if (i && de === mi)
    t.call(e);
  else
    return de.call(window, M(t, e));
}
function G(t) {
  t && pi.call(window, t);
}
var kn = {
  __proto__: null,
  extend: w,
  create: jt,
  bind: M,
  get lastId() {
    return ci;
  },
  stamp: x,
  throttle: fi,
  wrapNum: Et,
  falseFn: Z,
  formatNum: Y,
  trim: Pe,
  splitWords: ct,
  setOptions: z,
  getParamString: di,
  template: _i,
  isArray: j,
  indexOf: Le,
  emptyImageUrl: Ut,
  requestFn: de,
  cancelFn: pi,
  requestAnimFrame: R,
  cancelAnimFrame: G
};
function nt() {
}
nt.extend = function(t) {
  var e = function() {
    z(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
  }, i = e.__super__ = this.prototype, n = jt(i);
  n.constructor = e, e.prototype = n;
  for (var o in this)
    Object.prototype.hasOwnProperty.call(this, o) && o !== "prototype" && o !== "__super__" && (e[o] = this[o]);
  return t.statics && w(e, t.statics), t.includes && (En(t.includes), w.apply(null, [n].concat(t.includes))), w(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? jt(i.options) : {}, w(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
    if (!this._initHooksCalled) {
      i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
      for (var s = 0, r = n._initHooks.length; s < r; s++)
        n._initHooks[s].call(this);
    }
  }, e;
};
nt.include = function(t) {
  var e = this.prototype.options;
  return w(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
};
nt.mergeOptions = function(t) {
  return w(this.prototype.options, t), this;
};
nt.addInitHook = function(t) {
  var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
    this[t].apply(this, e);
  };
  return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
};
function En(t) {
  if (!(typeof L > "u" || !L || !L.Mixin)) {
    t = j(t) ? t : [t];
    for (var e = 0; e < t.length; e++)
      t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
  }
}
var F = {
  on: function(t, e, i) {
    if (typeof t == "object")
      for (var n in t)
        this._on(n, t[n], e);
    else {
      t = ct(t);
      for (var o = 0, s = t.length; o < s; o++)
        this._on(t[o], e, i);
    }
    return this;
  },
  off: function(t, e, i) {
    if (!arguments.length)
      delete this._events;
    else if (typeof t == "object")
      for (var n in t)
        this._off(n, t[n], e);
    else {
      t = ct(t);
      for (var o = arguments.length === 1, s = 0, r = t.length; s < r; s++)
        o ? this._off(t[s]) : this._off(t[s], e, i);
    }
    return this;
  },
  _on: function(t, e, i, n) {
    if (typeof e != "function") {
      console.warn("wrong listener type: " + typeof e);
      return;
    }
    if (this._listens(t, e, i) === !1) {
      i === this && (i = void 0);
      var o = { fn: e, ctx: i };
      n && (o.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(o);
    }
  },
  _off: function(t, e, i) {
    var n, o, s;
    if (!!this._events && (n = this._events[t], !!n)) {
      if (arguments.length === 1) {
        if (this._firingCount)
          for (o = 0, s = n.length; o < s; o++)
            n[o].fn = Z;
        delete this._events[t];
        return;
      }
      if (typeof e != "function") {
        console.warn("wrong listener type: " + typeof e);
        return;
      }
      var r = this._listens(t, e, i);
      if (r !== !1) {
        var a = n[r];
        this._firingCount && (a.fn = Z, this._events[t] = n = n.slice()), n.splice(r, 1);
      }
    }
  },
  fire: function(t, e, i) {
    if (!this.listens(t, i))
      return this;
    var n = w({}, e, {
      type: t,
      target: this,
      sourceTarget: e && e.sourceTarget || this
    });
    if (this._events) {
      var o = this._events[t];
      if (o) {
        this._firingCount = this._firingCount + 1 || 1;
        for (var s = 0, r = o.length; s < r; s++) {
          var a = o[s], h = a.fn;
          a.once && this.off(t, h, a.ctx), h.call(a.ctx || this, n);
        }
        this._firingCount--;
      }
    }
    return i && this._propagateEvent(n), this;
  },
  listens: function(t, e, i, n) {
    typeof t != "string" && console.warn('"string" type argument expected');
    var o = e;
    typeof e != "function" && (n = !!e, o = void 0, i = void 0);
    var s = this._events && this._events[t];
    if (s && s.length && this._listens(t, o, i) !== !1)
      return !0;
    if (n) {
      for (var r in this._eventParents)
        if (this._eventParents[r].listens(t, e, i, n))
          return !0;
    }
    return !1;
  },
  _listens: function(t, e, i) {
    if (!this._events)
      return !1;
    var n = this._events[t] || [];
    if (!e)
      return !!n.length;
    i === this && (i = void 0);
    for (var o = 0, s = n.length; o < s; o++)
      if (n[o].fn === e && n[o].ctx === i)
        return o;
    return !1;
  },
  once: function(t, e, i) {
    if (typeof t == "object")
      for (var n in t)
        this._on(n, t[n], e, !0);
    else {
      t = ct(t);
      for (var o = 0, s = t.length; o < s; o++)
        this._on(t[o], e, i, !0);
    }
    return this;
  },
  addEventParent: function(t) {
    return this._eventParents = this._eventParents || {}, this._eventParents[x(t)] = t, this;
  },
  removeEventParent: function(t) {
    return this._eventParents && delete this._eventParents[x(t)], this;
  },
  _propagateEvent: function(t) {
    for (var e in this._eventParents)
      this._eventParents[e].fire(t.type, w({
        layer: t.target,
        propagatedFrom: t.target
      }, t), !0);
  }
};
F.addEventListener = F.on;
F.removeEventListener = F.clearAllEventListeners = F.off;
F.addOneTimeEventListener = F.once;
F.fireEvent = F.fire;
F.hasEventListeners = F.listens;
var It = nt.extend(F);
function p(t, e, i) {
  this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
}
var $e = Math.trunc || function(t) {
  return t > 0 ? Math.floor(t) : Math.ceil(t);
};
p.prototype = {
  clone: function() {
    return new p(this.x, this.y);
  },
  add: function(t) {
    return this.clone()._add(_(t));
  },
  _add: function(t) {
    return this.x += t.x, this.y += t.y, this;
  },
  subtract: function(t) {
    return this.clone()._subtract(_(t));
  },
  _subtract: function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  },
  divideBy: function(t) {
    return this.clone()._divideBy(t);
  },
  _divideBy: function(t) {
    return this.x /= t, this.y /= t, this;
  },
  multiplyBy: function(t) {
    return this.clone()._multiplyBy(t);
  },
  _multiplyBy: function(t) {
    return this.x *= t, this.y *= t, this;
  },
  scaleBy: function(t) {
    return new p(this.x * t.x, this.y * t.y);
  },
  unscaleBy: function(t) {
    return new p(this.x / t.x, this.y / t.y);
  },
  round: function() {
    return this.clone()._round();
  },
  _round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  },
  floor: function() {
    return this.clone()._floor();
  },
  _floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  },
  ceil: function() {
    return this.clone()._ceil();
  },
  _ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  },
  trunc: function() {
    return this.clone()._trunc();
  },
  _trunc: function() {
    return this.x = $e(this.x), this.y = $e(this.y), this;
  },
  distanceTo: function(t) {
    t = _(t);
    var e = t.x - this.x, i = t.y - this.y;
    return Math.sqrt(e * e + i * i);
  },
  equals: function(t) {
    return t = _(t), t.x === this.x && t.y === this.y;
  },
  contains: function(t) {
    return t = _(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
  },
  toString: function() {
    return "Point(" + Y(this.x) + ", " + Y(this.y) + ")";
  }
};
function _(t, e, i) {
  return t instanceof p ? t : j(t) ? new p(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new p(t.x, t.y) : new p(t, e, i);
}
function C(t, e) {
  if (!!t)
    for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
      this.extend(i[n]);
}
C.prototype = {
  extend: function(t) {
    var e, i;
    if (!t)
      return this;
    if (t instanceof p || typeof t[0] == "number" || "x" in t)
      e = i = _(t);
    else if (t = D(t), e = t.min, i = t.max, !e || !i)
      return this;
    return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
  },
  getCenter: function(t) {
    return _(
      (this.min.x + this.max.x) / 2,
      (this.min.y + this.max.y) / 2,
      t
    );
  },
  getBottomLeft: function() {
    return _(this.min.x, this.max.y);
  },
  getTopRight: function() {
    return _(this.max.x, this.min.y);
  },
  getTopLeft: function() {
    return this.min;
  },
  getBottomRight: function() {
    return this.max;
  },
  getSize: function() {
    return this.max.subtract(this.min);
  },
  contains: function(t) {
    var e, i;
    return typeof t[0] == "number" || t instanceof p ? t = _(t) : t = D(t), t instanceof C ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
  },
  intersects: function(t) {
    t = D(t);
    var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x >= e.x && n.x <= i.x, r = o.y >= e.y && n.y <= i.y;
    return s && r;
  },
  overlaps: function(t) {
    t = D(t);
    var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x > e.x && n.x < i.x, r = o.y > e.y && n.y < i.y;
    return s && r;
  },
  isValid: function() {
    return !!(this.min && this.max);
  },
  pad: function(t) {
    var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t, o = Math.abs(e.y - i.y) * t;
    return D(
      _(e.x - n, e.y - o),
      _(i.x + n, i.y + o)
    );
  },
  equals: function(t) {
    return t ? (t = D(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
  }
};
function D(t, e) {
  return !t || t instanceof C ? t : new C(t, e);
}
function H(t, e) {
  if (!!t)
    for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
      this.extend(i[n]);
}
H.prototype = {
  extend: function(t) {
    var e = this._southWest, i = this._northEast, n, o;
    if (t instanceof P)
      n = t, o = t;
    else if (t instanceof H) {
      if (n = t._southWest, o = t._northEast, !n || !o)
        return this;
    } else
      return t ? this.extend(T(t) || A(t)) : this;
    return !e && !i ? (this._southWest = new P(n.lat, n.lng), this._northEast = new P(o.lat, o.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(o.lat, i.lat), i.lng = Math.max(o.lng, i.lng)), this;
  },
  pad: function(t) {
    var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, o = Math.abs(e.lng - i.lng) * t;
    return new H(
      new P(e.lat - n, e.lng - o),
      new P(i.lat + n, i.lng + o)
    );
  },
  getCenter: function() {
    return new P(
      (this._southWest.lat + this._northEast.lat) / 2,
      (this._southWest.lng + this._northEast.lng) / 2
    );
  },
  getSouthWest: function() {
    return this._southWest;
  },
  getNorthEast: function() {
    return this._northEast;
  },
  getNorthWest: function() {
    return new P(this.getNorth(), this.getWest());
  },
  getSouthEast: function() {
    return new P(this.getSouth(), this.getEast());
  },
  getWest: function() {
    return this._southWest.lng;
  },
  getSouth: function() {
    return this._southWest.lat;
  },
  getEast: function() {
    return this._northEast.lng;
  },
  getNorth: function() {
    return this._northEast.lat;
  },
  contains: function(t) {
    typeof t[0] == "number" || t instanceof P || "lat" in t ? t = T(t) : t = A(t);
    var e = this._southWest, i = this._northEast, n, o;
    return t instanceof H ? (n = t.getSouthWest(), o = t.getNorthEast()) : n = o = t, n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng;
  },
  intersects: function(t) {
    t = A(t);
    var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat >= e.lat && n.lat <= i.lat, r = o.lng >= e.lng && n.lng <= i.lng;
    return s && r;
  },
  overlaps: function(t) {
    t = A(t);
    var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat > e.lat && n.lat < i.lat, r = o.lng > e.lng && n.lng < i.lng;
    return s && r;
  },
  toBBoxString: function() {
    return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
  },
  equals: function(t, e) {
    return t ? (t = A(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
  },
  isValid: function() {
    return !!(this._southWest && this._northEast);
  }
};
function A(t, e) {
  return t instanceof H ? t : new H(t, e);
}
function P(t, e, i) {
  if (isNaN(t) || isNaN(e))
    throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
  this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
}
P.prototype = {
  equals: function(t, e) {
    if (!t)
      return !1;
    t = T(t);
    var i = Math.max(
      Math.abs(this.lat - t.lat),
      Math.abs(this.lng - t.lng)
    );
    return i <= (e === void 0 ? 1e-9 : e);
  },
  toString: function(t) {
    return "LatLng(" + Y(this.lat, t) + ", " + Y(this.lng, t) + ")";
  },
  distanceTo: function(t) {
    return at.distance(this, T(t));
  },
  wrap: function() {
    return at.wrapLatLng(this);
  },
  toBounds: function(t) {
    var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
    return A(
      [this.lat - e, this.lng - i],
      [this.lat + e, this.lng + i]
    );
  },
  clone: function() {
    return new P(this.lat, this.lng, this.alt);
  }
};
function T(t, e, i) {
  return t instanceof P ? t : j(t) && typeof t[0] != "object" ? t.length === 3 ? new P(t[0], t[1], t[2]) : t.length === 2 ? new P(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new P(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new P(t, e, i);
}
var ot = {
  latLngToPoint: function(t, e) {
    var i = this.projection.project(t), n = this.scale(e);
    return this.transformation._transform(i, n);
  },
  pointToLatLng: function(t, e) {
    var i = this.scale(e), n = this.transformation.untransform(t, i);
    return this.projection.unproject(n);
  },
  project: function(t) {
    return this.projection.project(t);
  },
  unproject: function(t) {
    return this.projection.unproject(t);
  },
  scale: function(t) {
    return 256 * Math.pow(2, t);
  },
  zoom: function(t) {
    return Math.log(t / 256) / Math.LN2;
  },
  getProjectedBounds: function(t) {
    if (this.infinite)
      return null;
    var e = this.projection.bounds, i = this.scale(t), n = this.transformation.transform(e.min, i), o = this.transformation.transform(e.max, i);
    return new C(n, o);
  },
  infinite: !1,
  wrapLatLng: function(t) {
    var e = this.wrapLng ? Et(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? Et(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
    return new P(i, e, n);
  },
  wrapLatLngBounds: function(t) {
    var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, o = e.lng - i.lng;
    if (n === 0 && o === 0)
      return t;
    var s = t.getSouthWest(), r = t.getNorthEast(), a = new P(s.lat - n, s.lng - o), h = new P(r.lat - n, r.lng - o);
    return new H(a, h);
  }
}, at = w({}, ot, {
  wrapLng: [-180, 180],
  R: 6371e3,
  distance: function(t, e) {
    var i = Math.PI / 180, n = t.lat * i, o = e.lat * i, s = Math.sin((e.lat - t.lat) * i / 2), r = Math.sin((e.lng - t.lng) * i / 2), a = s * s + Math.cos(n) * Math.cos(o) * r * r, h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return this.R * h;
  }
}), Qe = 6378137, _e = {
  R: Qe,
  MAX_LATITUDE: 85.0511287798,
  project: function(t) {
    var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), o = Math.sin(n * e);
    return new p(
      this.R * t.lng * e,
      this.R * Math.log((1 + o) / (1 - o)) / 2
    );
  },
  unproject: function(t) {
    var e = 180 / Math.PI;
    return new P(
      (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
      t.x * e / this.R
    );
  },
  bounds: function() {
    var t = Qe * Math.PI;
    return new C([-t, -t], [t, t]);
  }()
};
function Te(t, e, i, n) {
  if (j(t)) {
    this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
    return;
  }
  this._a = t, this._b = e, this._c = i, this._d = n;
}
Te.prototype = {
  transform: function(t, e) {
    return this._transform(t.clone(), e);
  },
  _transform: function(t, e) {
    return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
  },
  untransform: function(t, e) {
    return e = e || 1, new p(
      (t.x / e - this._b) / this._a,
      (t.y / e - this._d) / this._c
    );
  }
};
function Bt(t, e, i, n) {
  return new Te(t, e, i, n);
}
var be = w({}, at, {
  code: "EPSG:3857",
  projection: _e,
  transformation: function() {
    var t = 0.5 / (Math.PI * _e.R);
    return Bt(t, 0.5, -t, 0.5);
  }()
}), Zn = w({}, be, {
  code: "EPSG:900913"
});
function vi(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function gi(t, e) {
  var i = "", n, o, s, r, a, h;
  for (n = 0, s = t.length; n < s; n++) {
    for (a = t[n], o = 0, r = a.length; o < r; o++)
      h = a[o], i += (o ? "L" : "M") + h.x + " " + h.y;
    i += e ? c.svg ? "z" : "x" : "";
  }
  return i || "M0 0";
}
var Me = document.documentElement.style, Qt = "ActiveXObject" in window, On = Qt && !document.addEventListener, yi = "msLaunchUri" in navigator && !("documentMode" in document), ze = $("webkit"), xi = $("android"), wi = $("android 2") || $("android 3"), An = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), In = xi && $("Google") && An < 537 && !("AudioNode" in window), Se = !!window.opera, Pi = !yi && $("chrome"), Li = $("gecko") && !ze && !Se && !Qt, Bn = !Pi && $("safari"), Ti = $("phantom"), bi = "OTransition" in Me, Nn = navigator.platform.indexOf("Win") === 0, Mi = Qt && "transition" in Me, Ce = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !wi, zi = "MozPerspective" in Me, Dn = !window.L_DISABLE_3D && (Mi || Ce || zi) && !bi && !Ti, Nt = typeof orientation < "u" || $("mobile"), Rn = Nt && ze, Hn = Nt && Ce, Si = !window.PointerEvent && window.MSPointerEvent, Ci = !!(window.PointerEvent || Si), ki = "ontouchstart" in window || !!window.TouchEvent, Fn = !window.L_NO_TOUCH && (ki || Ci), Wn = Nt && Se, Un = Nt && Li, Gn = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, qn = function() {
  var t = !1;
  try {
    var e = Object.defineProperty({}, "passive", {
      get: function() {
        t = !0;
      }
    });
    window.addEventListener("testPassiveEventSupport", Z, e), window.removeEventListener("testPassiveEventSupport", Z, e);
  } catch {
  }
  return t;
}(), Vn = function() {
  return !!document.createElement("canvas").getContext;
}(), ke = !!(document.createElementNS && vi("svg").createSVGRect), jn = !!ke && function() {
  var t = document.createElement("div");
  return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
}(), Kn = !ke && function() {
  try {
    var t = document.createElement("div");
    t.innerHTML = '<v:shape adj="1"/>';
    var e = t.firstChild;
    return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
  } catch {
    return !1;
  }
}(), Yn = navigator.platform.indexOf("Mac") === 0, Xn = navigator.platform.indexOf("Linux") === 0;
function $(t) {
  return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
}
var c = {
  ie: Qt,
  ielt9: On,
  edge: yi,
  webkit: ze,
  android: xi,
  android23: wi,
  androidStock: In,
  opera: Se,
  chrome: Pi,
  gecko: Li,
  safari: Bn,
  phantom: Ti,
  opera12: bi,
  win: Nn,
  ie3d: Mi,
  webkit3d: Ce,
  gecko3d: zi,
  any3d: Dn,
  mobile: Nt,
  mobileWebkit: Rn,
  mobileWebkit3d: Hn,
  msPointer: Si,
  pointer: Ci,
  touch: Fn,
  touchNative: ki,
  mobileOpera: Wn,
  mobileGecko: Un,
  retina: Gn,
  passiveEvents: qn,
  canvas: Vn,
  svg: ke,
  vml: Kn,
  inlineSvg: jn,
  mac: Yn,
  linux: Xn
}, Ei = c.msPointer ? "MSPointerDown" : "pointerdown", Zi = c.msPointer ? "MSPointerMove" : "pointermove", Oi = c.msPointer ? "MSPointerUp" : "pointerup", Ai = c.msPointer ? "MSPointerCancel" : "pointercancel", me = {
  touchstart: Ei,
  touchmove: Zi,
  touchend: Oi,
  touchcancel: Ai
}, ti = {
  touchstart: io,
  touchmove: Gt,
  touchend: Gt,
  touchcancel: Gt
}, xt = {}, ei = !1;
function Jn(t, e, i) {
  return e === "touchstart" && eo(), ti[e] ? (i = ti[e].bind(this, i), t.addEventListener(me[e], i, !1), i) : (console.warn("wrong event specified:", e), L.Util.falseFn);
}
function $n(t, e, i) {
  if (!me[e]) {
    console.warn("wrong event specified:", e);
    return;
  }
  t.removeEventListener(me[e], i, !1);
}
function Qn(t) {
  xt[t.pointerId] = t;
}
function to(t) {
  xt[t.pointerId] && (xt[t.pointerId] = t);
}
function ii(t) {
  delete xt[t.pointerId];
}
function eo() {
  ei || (document.addEventListener(Ei, Qn, !0), document.addEventListener(Zi, to, !0), document.addEventListener(Oi, ii, !0), document.addEventListener(Ai, ii, !0), ei = !0);
}
function Gt(t, e) {
  if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
    e.touches = [];
    for (var i in xt)
      e.touches.push(xt[i]);
    e.changedTouches = [e], t(e);
  }
}
function io(t, e) {
  e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && I(e), Gt(t, e);
}
function no(t) {
  var e = {}, i, n;
  for (n in t)
    i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
  return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
}
var oo = 200;
function so(t, e) {
  t.addEventListener("dblclick", e);
  var i = 0, n;
  function o(s) {
    if (s.detail !== 1) {
      n = s.detail;
      return;
    }
    if (!(s.pointerType === "mouse" || s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents)) {
      var r = Di(s);
      if (!(r.some(function(h) {
        return h instanceof HTMLLabelElement && h.attributes.for;
      }) && !r.some(function(h) {
        return h instanceof HTMLInputElement || h instanceof HTMLSelectElement;
      }))) {
        var a = Date.now();
        a - i <= oo ? (n++, n === 2 && e(no(s))) : n = 1, i = a;
      }
    }
  }
  return t.addEventListener("click", o), {
    dblclick: e,
    simDblclick: o
  };
}
function ro(t, e) {
  t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
}
var Ee = ee(
  ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
), St = ee(
  ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
), Ii = St === "webkitTransition" || St === "OTransition" ? St + "End" : "transitionend";
function Bi(t) {
  return typeof t == "string" ? document.getElementById(t) : t;
}
function Zt(t, e) {
  var i = t.style[e] || t.currentStyle && t.currentStyle[e];
  if ((!i || i === "auto") && document.defaultView) {
    var n = document.defaultView.getComputedStyle(t, null);
    i = n ? n[e] : null;
  }
  return i === "auto" ? null : i;
}
function y(t, e, i) {
  var n = document.createElement(t);
  return n.className = e || "", i && i.appendChild(n), n;
}
function S(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Kt(t) {
  for (; t.firstChild; )
    t.removeChild(t.firstChild);
}
function Tt(t) {
  var e = t.parentNode;
  e && e.lastChild !== t && e.appendChild(t);
}
function bt(t) {
  var e = t.parentNode;
  e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
}
function Ze(t, e) {
  if (t.classList !== void 0)
    return t.classList.contains(e);
  var i = te(t);
  return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
}
function v(t, e) {
  if (t.classList !== void 0)
    for (var i = ct(e), n = 0, o = i.length; n < o; n++)
      t.classList.add(i[n]);
  else if (!Ze(t, e)) {
    var s = te(t);
    Oe(t, (s ? s + " " : "") + e);
  }
}
function k(t, e) {
  t.classList !== void 0 ? t.classList.remove(e) : Oe(t, Pe((" " + te(t) + " ").replace(" " + e + " ", " ")));
}
function Oe(t, e) {
  t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
}
function te(t) {
  return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
}
function U(t, e) {
  "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && ao(t, e);
}
function ao(t, e) {
  var i = !1, n = "DXImageTransform.Microsoft.Alpha";
  try {
    i = t.filters.item(n);
  } catch {
    if (e === 1)
      return;
  }
  e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
}
function ee(t) {
  for (var e = document.documentElement.style, i = 0; i < t.length; i++)
    if (t[i] in e)
      return t[i];
  return !1;
}
function mt(t, e, i) {
  var n = e || new p(0, 0);
  t.style[Ee] = (c.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
}
function O(t, e) {
  t._leaflet_pos = e, c.any3d ? mt(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
}
function pt(t) {
  return t._leaflet_pos || new p(0, 0);
}
var Ot, At, ce;
if ("onselectstart" in document)
  Ot = function() {
    m(window, "selectstart", I);
  }, At = function() {
    b(window, "selectstart", I);
  };
else {
  var Mt = ee(
    ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
  );
  Ot = function() {
    if (Mt) {
      var t = document.documentElement.style;
      ce = t[Mt], t[Mt] = "none";
    }
  }, At = function() {
    Mt && (document.documentElement.style[Mt] = ce, ce = void 0);
  };
}
function Ae() {
  m(window, "dragstart", I);
}
function Ie() {
  b(window, "dragstart", I);
}
var qt, pe;
function Be(t) {
  for (; t.tabIndex === -1; )
    t = t.parentNode;
  !t.style || (Yt(), qt = t, pe = t.style.outline, t.style.outline = "none", m(window, "keydown", Yt));
}
function Yt() {
  !qt || (qt.style.outline = pe, qt = void 0, pe = void 0, b(window, "keydown", Yt));
}
function Ni(t) {
  do
    t = t.parentNode;
  while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
  return t;
}
function Ne(t) {
  var e = t.getBoundingClientRect();
  return {
    x: e.width / t.offsetWidth || 1,
    y: e.height / t.offsetHeight || 1,
    boundingClientRect: e
  };
}
var ho = {
  __proto__: null,
  TRANSFORM: Ee,
  TRANSITION: St,
  TRANSITION_END: Ii,
  get: Bi,
  getStyle: Zt,
  create: y,
  remove: S,
  empty: Kt,
  toFront: Tt,
  toBack: bt,
  hasClass: Ze,
  addClass: v,
  removeClass: k,
  setClass: Oe,
  getClass: te,
  setOpacity: U,
  testProp: ee,
  setTransform: mt,
  setPosition: O,
  getPosition: pt,
  get disableTextSelection() {
    return Ot;
  },
  get enableTextSelection() {
    return At;
  },
  disableImageDrag: Ae,
  enableImageDrag: Ie,
  preventOutline: Be,
  restoreOutline: Yt,
  getSizedParentNode: Ni,
  getScale: Ne
};
function m(t, e, i, n) {
  if (e && typeof e == "object")
    for (var o in e)
      ge(t, o, e[o], i);
  else {
    e = ct(e);
    for (var s = 0, r = e.length; s < r; s++)
      ge(t, e[s], i, n);
  }
  return this;
}
var X = "_leaflet_events";
function b(t, e, i, n) {
  if (arguments.length === 1)
    ni(t), delete t[X];
  else if (e && typeof e == "object")
    for (var o in e)
      ye(t, o, e[o], i);
  else if (e = ct(e), arguments.length === 2)
    ni(t, function(a) {
      return Le(e, a) !== -1;
    });
  else
    for (var s = 0, r = e.length; s < r; s++)
      ye(t, e[s], i, n);
  return this;
}
function ni(t, e) {
  for (var i in t[X]) {
    var n = i.split(/\d/)[0];
    (!e || e(n)) && ye(t, n, null, null, i);
  }
}
var ve = {
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  wheel: !("onwheel" in window) && "mousewheel"
};
function ge(t, e, i, n) {
  var o = e + x(i) + (n ? "_" + x(n) : "");
  if (t[X] && t[X][o])
    return this;
  var s = function(a) {
    return i.call(n || t, a || window.event);
  }, r = s;
  !c.touchNative && c.pointer && e.indexOf("touch") === 0 ? s = Jn(t, e, s) : c.touch && e === "dblclick" ? s = so(t, s) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(ve[e] || e, s, c.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (s = function(a) {
    a = a || window.event, Re(t, a) && r(a);
  }, t.addEventListener(ve[e], s, !1)) : t.addEventListener(e, r, !1) : t.attachEvent("on" + e, s), t[X] = t[X] || {}, t[X][o] = s;
}
function ye(t, e, i, n, o) {
  o = o || e + x(i) + (n ? "_" + x(n) : "");
  var s = t[X] && t[X][o];
  if (!s)
    return this;
  !c.touchNative && c.pointer && e.indexOf("touch") === 0 ? $n(t, e, s) : c.touch && e === "dblclick" ? ro(t, s) : "removeEventListener" in t ? t.removeEventListener(ve[e] || e, s, !1) : t.detachEvent("on" + e, s), t[X][o] = null;
}
function ft(t) {
  return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
}
function De(t) {
  return ge(t, "wheel", ft), this;
}
function Dt(t) {
  return m(t, "mousedown touchstart dblclick contextmenu", ft), t._leaflet_disable_click = !0, this;
}
function I(t) {
  return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
}
function vt(t) {
  return I(t), ft(t), this;
}
function Di(t) {
  if (t.composedPath)
    return t.composedPath();
  for (var e = [], i = t.target; i; )
    e.push(i), i = i.parentNode;
  return e;
}
function Ri(t, e) {
  if (!e)
    return new p(t.clientX, t.clientY);
  var i = Ne(e), n = i.boundingClientRect;
  return new p(
    (t.clientX - n.left) / i.x - e.clientLeft,
    (t.clientY - n.top) / i.y - e.clientTop
  );
}
var uo = c.linux && c.chrome ? window.devicePixelRatio : c.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
function Hi(t) {
  return c.edge ? t.wheelDeltaY / 2 : t.deltaY && t.deltaMode === 0 ? -t.deltaY / uo : t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : t.detail ? t.detail / -32765 * 60 : 0;
}
function Re(t, e) {
  var i = e.relatedTarget;
  if (!i)
    return !0;
  try {
    for (; i && i !== t; )
      i = i.parentNode;
  } catch {
    return !1;
  }
  return i !== t;
}
var lo = {
  __proto__: null,
  on: m,
  off: b,
  stopPropagation: ft,
  disableScrollPropagation: De,
  disableClickPropagation: Dt,
  preventDefault: I,
  stop: vt,
  getPropagationPath: Di,
  getMousePosition: Ri,
  getWheelDelta: Hi,
  isExternalTarget: Re,
  addListener: m,
  removeListener: b
}, Fi = It.extend({
  run: function(t, e, i, n) {
    this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = pt(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
  },
  stop: function() {
    !this._inProgress || (this._step(!0), this._complete());
  },
  _animate: function() {
    this._animId = R(this._animate, this), this._step();
  },
  _step: function(t) {
    var e = +new Date() - this._startTime, i = this._duration * 1e3;
    e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
  },
  _runFrame: function(t, e) {
    var i = this._startPos.add(this._offset.multiplyBy(t));
    e && i._round(), O(this._el, i), this.fire("step");
  },
  _complete: function() {
    G(this._animId), this._inProgress = !1, this.fire("end");
  },
  _easeOut: function(t) {
    return 1 - Math.pow(1 - t, this._easeOutPower);
  }
}), g = It.extend({
  options: {
    crs: be,
    center: void 0,
    zoom: void 0,
    minZoom: void 0,
    maxZoom: void 0,
    layers: [],
    maxBounds: void 0,
    renderer: void 0,
    zoomAnimation: !0,
    zoomAnimationThreshold: 4,
    fadeAnimation: !0,
    markerZoomAnimation: !0,
    transform3DLimit: 8388608,
    zoomSnap: 1,
    zoomDelta: 1,
    trackResize: !0
  },
  initialize: function(t, e) {
    e = z(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = M(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(T(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = St && c.any3d && !c.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), m(this._proxy, Ii, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
  },
  setView: function(t, e, i) {
    if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(T(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
      i.animate !== void 0 && (i.zoom = w({ animate: i.animate }, i.zoom), i.pan = w({ animate: i.animate, duration: i.duration }, i.pan));
      var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
      if (n)
        return clearTimeout(this._sizeTimer), this;
    }
    return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
  },
  setZoom: function(t, e) {
    return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
  },
  zoomIn: function(t, e) {
    return t = t || (c.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
  },
  zoomOut: function(t, e) {
    return t = t || (c.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
  },
  setZoomAround: function(t, e, i) {
    var n = this.getZoomScale(e), o = this.getSize().divideBy(2), s = t instanceof p ? t : this.latLngToContainerPoint(t), r = s.subtract(o).multiplyBy(1 - 1 / n), a = this.containerPointToLatLng(o.add(r));
    return this.setView(a, e, { zoom: i });
  },
  _getBoundsCenterZoom: function(t, e) {
    e = e || {}, t = t.getBounds ? t.getBounds() : A(t);
    var i = _(e.paddingTopLeft || e.padding || [0, 0]), n = _(e.paddingBottomRight || e.padding || [0, 0]), o = this.getBoundsZoom(t, !1, i.add(n));
    if (o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o, o === 1 / 0)
      return {
        center: t.getCenter(),
        zoom: o
      };
    var s = n.subtract(i).divideBy(2), r = this.project(t.getSouthWest(), o), a = this.project(t.getNorthEast(), o), h = this.unproject(r.add(a).divideBy(2).add(s), o);
    return {
      center: h,
      zoom: o
    };
  },
  fitBounds: function(t, e) {
    if (t = A(t), !t.isValid())
      throw new Error("Bounds are not valid.");
    var i = this._getBoundsCenterZoom(t, e);
    return this.setView(i.center, i.zoom, e);
  },
  fitWorld: function(t) {
    return this.fitBounds([[-90, -180], [90, 180]], t);
  },
  panTo: function(t, e) {
    return this.setView(t, this._zoom, { pan: e });
  },
  panBy: function(t, e) {
    if (t = _(t).round(), e = e || {}, !t.x && !t.y)
      return this.fire("moveend");
    if (e.animate !== !0 && !this.getSize().contains(t))
      return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
    if (this._panAnim || (this._panAnim = new Fi(), this._panAnim.on({
      step: this._onPanTransitionStep,
      end: this._onPanTransitionEnd
    }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
      v(this._mapPane, "leaflet-pan-anim");
      var i = this._getMapPanePos().subtract(t).round();
      this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
    } else
      this._rawPanBy(t), this.fire("move").fire("moveend");
    return this;
  },
  flyTo: function(t, e, i) {
    if (i = i || {}, i.animate === !1 || !c.any3d)
      return this.setView(t, e, i);
    this._stop();
    var n = this.project(this.getCenter()), o = this.project(t), s = this.getSize(), r = this._zoom;
    t = T(t), e = e === void 0 ? r : e;
    var a = Math.max(s.x, s.y), h = a * this.getZoomScale(r, e), u = o.distanceTo(n) || 1, l = 1.42, f = l * l;
    function d(E) {
      var Wt = E ? -1 : 1, yn = E ? h : a, xn = h * h - a * a + Wt * f * f * u * u, wn = 2 * yn * f * u, le = xn / wn, Xe = Math.sqrt(le * le + 1) - le, Pn = Xe < 1e-9 ? -18 : Math.log(Xe);
      return Pn;
    }
    function B(E) {
      return (Math.exp(E) - Math.exp(-E)) / 2;
    }
    function tt(E) {
      return (Math.exp(E) + Math.exp(-E)) / 2;
    }
    function W(E) {
      return B(E) / tt(E);
    }
    var N = d(0);
    function ut(E) {
      return a * (tt(N) / tt(N + l * E));
    }
    function ue(E) {
      return a * (tt(N) * W(N + l * E) - B(N)) / f;
    }
    function pn(E) {
      return 1 - Math.pow(1 - E, 1.5);
    }
    var vn = Date.now(), Ke = (d(1) - N) / l, gn = i.duration ? 1e3 * i.duration : 1e3 * Ke * 0.8;
    function Ye() {
      var E = (Date.now() - vn) / gn, Wt = pn(E) * Ke;
      E <= 1 ? (this._flyToFrame = R(Ye, this), this._move(
        this.unproject(n.add(o.subtract(n).multiplyBy(ue(Wt) / u)), r),
        this.getScaleZoom(a / ut(Wt), r),
        { flyTo: !0 }
      )) : this._move(t, e)._moveEnd(!0);
    }
    return this._moveStart(!0, i.noMoveStart), Ye.call(this), this;
  },
  flyToBounds: function(t, e) {
    var i = this._getBoundsCenterZoom(t, e);
    return this.flyTo(i.center, i.zoom, e);
  },
  setMaxBounds: function(t) {
    return t = A(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
  },
  setMinZoom: function(t) {
    var e = this.options.minZoom;
    return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
  },
  setMaxZoom: function(t) {
    var e = this.options.maxZoom;
    return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
  },
  panInsideBounds: function(t, e) {
    this._enforcingBounds = !0;
    var i = this.getCenter(), n = this._limitCenter(i, this._zoom, A(t));
    return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
  },
  panInside: function(t, e) {
    e = e || {};
    var i = _(e.paddingTopLeft || e.padding || [0, 0]), n = _(e.paddingBottomRight || e.padding || [0, 0]), o = this.project(this.getCenter()), s = this.project(t), r = this.getPixelBounds(), a = D([r.min.add(i), r.max.subtract(n)]), h = a.getSize();
    if (!a.contains(s)) {
      this._enforcingBounds = !0;
      var u = s.subtract(a.getCenter()), l = a.extend(s).getSize().subtract(h);
      o.x += u.x < 0 ? -l.x : l.x, o.y += u.y < 0 ? -l.y : l.y, this.panTo(this.unproject(o), e), this._enforcingBounds = !1;
    }
    return this;
  },
  invalidateSize: function(t) {
    if (!this._loaded)
      return this;
    t = w({
      animate: !1,
      pan: !0
    }, t === !0 ? { animate: !0 } : t);
    var e = this.getSize();
    this._sizeChanged = !0, this._lastCenter = null;
    var i = this.getSize(), n = e.divideBy(2).round(), o = i.divideBy(2).round(), s = n.subtract(o);
    return !s.x && !s.y ? this : (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(M(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
      oldSize: e,
      newSize: i
    }));
  },
  stop: function() {
    return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
  },
  locate: function(t) {
    if (t = this._locateOptions = w({
      timeout: 1e4,
      watch: !1
    }, t), !("geolocation" in navigator))
      return this._handleGeolocationError({
        code: 0,
        message: "Geolocation not supported."
      }), this;
    var e = M(this._handleGeolocationResponse, this), i = M(this._handleGeolocationError, this);
    return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
  },
  stopLocate: function() {
    return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
  },
  _handleGeolocationError: function(t) {
    if (!!this._container._leaflet_id) {
      var e = t.code, i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
      this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
        code: e,
        message: "Geolocation error: " + i + "."
      });
    }
  },
  _handleGeolocationResponse: function(t) {
    if (!!this._container._leaflet_id) {
      var e = t.coords.latitude, i = t.coords.longitude, n = new P(e, i), o = n.toBounds(t.coords.accuracy * 2), s = this._locateOptions;
      if (s.setView) {
        var r = this.getBoundsZoom(o);
        this.setView(n, s.maxZoom ? Math.min(r, s.maxZoom) : r);
      }
      var a = {
        latlng: n,
        bounds: o,
        timestamp: t.timestamp
      };
      for (var h in t.coords)
        typeof t.coords[h] == "number" && (a[h] = t.coords[h]);
      this.fire("locationfound", a);
    }
  },
  addHandler: function(t, e) {
    if (!e)
      return this;
    var i = this[t] = new e(this);
    return this._handlers.push(i), this.options[t] && i.enable(), this;
  },
  remove: function() {
    if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
      throw new Error("Map container is being reused by another instance");
    try {
      delete this._container._leaflet_id, delete this._containerId;
    } catch {
      this._container._leaflet_id = void 0, this._containerId = void 0;
    }
    this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), S(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (G(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
    var t;
    for (t in this._layers)
      this._layers[t].remove();
    for (t in this._panes)
      S(this._panes[t]);
    return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
  },
  createPane: function(t, e) {
    var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = y("div", i, e || this._mapPane);
    return t && (this._panes[t] = n), n;
  },
  getCenter: function() {
    return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
  },
  getZoom: function() {
    return this._zoom;
  },
  getBounds: function() {
    var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
    return new H(e, i);
  },
  getMinZoom: function() {
    return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
  },
  getMaxZoom: function() {
    return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
  },
  getBoundsZoom: function(t, e, i) {
    t = A(t), i = _(i || [0, 0]);
    var n = this.getZoom() || 0, o = this.getMinZoom(), s = this.getMaxZoom(), r = t.getNorthWest(), a = t.getSouthEast(), h = this.getSize().subtract(i), u = D(this.project(a, n), this.project(r, n)).getSize(), l = c.any3d ? this.options.zoomSnap : 1, f = h.x / u.x, d = h.y / u.y, B = e ? Math.max(f, d) : Math.min(f, d);
    return n = this.getScaleZoom(B, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = e ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n));
  },
  getSize: function() {
    return (!this._size || this._sizeChanged) && (this._size = new p(
      this._container.clientWidth || 0,
      this._container.clientHeight || 0
    ), this._sizeChanged = !1), this._size.clone();
  },
  getPixelBounds: function(t, e) {
    var i = this._getTopLeftPoint(t, e);
    return new C(i, i.add(this.getSize()));
  },
  getPixelOrigin: function() {
    return this._checkIfLoaded(), this._pixelOrigin;
  },
  getPixelWorldBounds: function(t) {
    return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
  },
  getPane: function(t) {
    return typeof t == "string" ? this._panes[t] : t;
  },
  getPanes: function() {
    return this._panes;
  },
  getContainer: function() {
    return this._container;
  },
  getZoomScale: function(t, e) {
    var i = this.options.crs;
    return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
  },
  getScaleZoom: function(t, e) {
    var i = this.options.crs;
    e = e === void 0 ? this._zoom : e;
    var n = i.zoom(t * i.scale(e));
    return isNaN(n) ? 1 / 0 : n;
  },
  project: function(t, e) {
    return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(T(t), e);
  },
  unproject: function(t, e) {
    return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(_(t), e);
  },
  layerPointToLatLng: function(t) {
    var e = _(t).add(this.getPixelOrigin());
    return this.unproject(e);
  },
  latLngToLayerPoint: function(t) {
    var e = this.project(T(t))._round();
    return e._subtract(this.getPixelOrigin());
  },
  wrapLatLng: function(t) {
    return this.options.crs.wrapLatLng(T(t));
  },
  wrapLatLngBounds: function(t) {
    return this.options.crs.wrapLatLngBounds(A(t));
  },
  distance: function(t, e) {
    return this.options.crs.distance(T(t), T(e));
  },
  containerPointToLayerPoint: function(t) {
    return _(t).subtract(this._getMapPanePos());
  },
  layerPointToContainerPoint: function(t) {
    return _(t).add(this._getMapPanePos());
  },
  containerPointToLatLng: function(t) {
    var e = this.containerPointToLayerPoint(_(t));
    return this.layerPointToLatLng(e);
  },
  latLngToContainerPoint: function(t) {
    return this.layerPointToContainerPoint(this.latLngToLayerPoint(T(t)));
  },
  mouseEventToContainerPoint: function(t) {
    return Ri(t, this._container);
  },
  mouseEventToLayerPoint: function(t) {
    return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
  },
  mouseEventToLatLng: function(t) {
    return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
  },
  _initContainer: function(t) {
    var e = this._container = Bi(t);
    if (e) {
      if (e._leaflet_id)
        throw new Error("Map container is already initialized.");
    } else
      throw new Error("Map container not found.");
    m(e, "scroll", this._onScroll, this), this._containerId = x(e);
  },
  _initLayout: function() {
    var t = this._container;
    this._fadeAnimated = this.options.fadeAnimation && c.any3d, v(t, "leaflet-container" + (c.touch ? " leaflet-touch" : "") + (c.retina ? " leaflet-retina" : "") + (c.ielt9 ? " leaflet-oldie" : "") + (c.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
    var e = Zt(t, "position");
    e !== "absolute" && e !== "relative" && e !== "fixed" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
  },
  _initPanes: function() {
    var t = this._panes = {};
    this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), O(this._mapPane, new p(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (v(t.markerPane, "leaflet-zoom-hide"), v(t.shadowPane, "leaflet-zoom-hide"));
  },
  _resetView: function(t, e, i) {
    O(this._mapPane, new p(0, 0));
    var n = !this._loaded;
    this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
    var o = this._zoom !== e;
    this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
  },
  _moveStart: function(t, e) {
    return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
  },
  _move: function(t, e, i, n) {
    e === void 0 && (e = this._zoom);
    var o = this._zoom !== e;
    return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
  },
  _moveEnd: function(t) {
    return t && this.fire("zoomend"), this.fire("moveend");
  },
  _stop: function() {
    return G(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
  },
  _rawPanBy: function(t) {
    O(this._mapPane, this._getMapPanePos().subtract(t));
  },
  _getZoomSpan: function() {
    return this.getMaxZoom() - this.getMinZoom();
  },
  _panInsideMaxBounds: function() {
    this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
  },
  _checkIfLoaded: function() {
    if (!this._loaded)
      throw new Error("Set map center and zoom first.");
  },
  _initEvents: function(t) {
    this._targets = {}, this._targets[x(this._container)] = this;
    var e = t ? b : m;
    e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), c.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
  },
  _onResize: function() {
    G(this._resizeRequest), this._resizeRequest = R(
      function() {
        this.invalidateSize({ debounceMoveend: !0 });
      },
      this
    );
  },
  _onScroll: function() {
    this._container.scrollTop = 0, this._container.scrollLeft = 0;
  },
  _onMoveEnd: function() {
    var t = this._getMapPanePos();
    Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
  },
  _findEventTargets: function(t, e) {
    for (var i = [], n, o = e === "mouseout" || e === "mouseover", s = t.target || t.srcElement, r = !1; s; ) {
      if (n = this._targets[x(s)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
        r = !0;
        break;
      }
      if (n && n.listens(e, !0) && (o && !Re(s, t) || (i.push(n), o)) || s === this._container)
        break;
      s = s.parentNode;
    }
    return !i.length && !r && !o && this.listens(e, !0) && (i = [this]), i;
  },
  _isClickDisabled: function(t) {
    for (; t && t !== this._container; ) {
      if (t._leaflet_disable_click)
        return !0;
      t = t.parentNode;
    }
  },
  _handleDOMEvent: function(t) {
    var e = t.target || t.srcElement;
    if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
      var i = t.type;
      i === "mousedown" && Be(e), this._fireDOMEvent(t, i);
    }
  },
  _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
  _fireDOMEvent: function(t, e, i) {
    if (t.type === "click") {
      var n = w({}, t);
      n.type = "preclick", this._fireDOMEvent(n, n.type, i);
    }
    var o = this._findEventTargets(t, e);
    if (i) {
      for (var s = [], r = 0; r < i.length; r++)
        i[r].listens(e, !0) && s.push(i[r]);
      o = s.concat(o);
    }
    if (!!o.length) {
      e === "contextmenu" && I(t);
      var a = o[0], h = {
        originalEvent: t
      };
      if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
        var u = a.getLatLng && (!a._radius || a._radius <= 10);
        h.containerPoint = u ? this.latLngToContainerPoint(a.getLatLng()) : this.mouseEventToContainerPoint(t), h.layerPoint = this.containerPointToLayerPoint(h.containerPoint), h.latlng = u ? a.getLatLng() : this.layerPointToLatLng(h.layerPoint);
      }
      for (r = 0; r < o.length; r++)
        if (o[r].fire(e, h, !0), h.originalEvent._stopped || o[r].options.bubblingMouseEvents === !1 && Le(this._mouseEvents, e) !== -1)
          return;
    }
  },
  _draggableMoved: function(t) {
    return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
  },
  _clearHandlers: function() {
    for (var t = 0, e = this._handlers.length; t < e; t++)
      this._handlers[t].disable();
  },
  whenReady: function(t, e) {
    return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
  },
  _getMapPanePos: function() {
    return pt(this._mapPane) || new p(0, 0);
  },
  _moved: function() {
    var t = this._getMapPanePos();
    return t && !t.equals([0, 0]);
  },
  _getTopLeftPoint: function(t, e) {
    var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
    return i.subtract(this._getMapPanePos());
  },
  _getNewPixelOrigin: function(t, e) {
    var i = this.getSize()._divideBy(2);
    return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
  },
  _latLngToNewLayerPoint: function(t, e, i) {
    var n = this._getNewPixelOrigin(i, e);
    return this.project(t, e)._subtract(n);
  },
  _latLngBoundsToNewLayerBounds: function(t, e, i) {
    var n = this._getNewPixelOrigin(i, e);
    return D([
      this.project(t.getSouthWest(), e)._subtract(n),
      this.project(t.getNorthWest(), e)._subtract(n),
      this.project(t.getSouthEast(), e)._subtract(n),
      this.project(t.getNorthEast(), e)._subtract(n)
    ]);
  },
  _getCenterLayerPoint: function() {
    return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
  },
  _getCenterOffset: function(t) {
    return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
  },
  _limitCenter: function(t, e, i) {
    if (!i)
      return t;
    var n = this.project(t, e), o = this.getSize().divideBy(2), s = new C(n.subtract(o), n.add(o)), r = this._getBoundsOffset(s, i, e);
    return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), e);
  },
  _limitOffset: function(t, e) {
    if (!e)
      return t;
    var i = this.getPixelBounds(), n = new C(i.min.add(t), i.max.add(t));
    return t.add(this._getBoundsOffset(n, e));
  },
  _getBoundsOffset: function(t, e, i) {
    var n = D(
      this.project(e.getNorthEast(), i),
      this.project(e.getSouthWest(), i)
    ), o = n.min.subtract(t.min), s = n.max.subtract(t.max), r = this._rebound(o.x, -s.x), a = this._rebound(o.y, -s.y);
    return new p(r, a);
  },
  _rebound: function(t, e) {
    return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
  },
  _limitZoom: function(t) {
    var e = this.getMinZoom(), i = this.getMaxZoom(), n = c.any3d ? this.options.zoomSnap : 1;
    return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
  },
  _onPanTransitionStep: function() {
    this.fire("move");
  },
  _onPanTransitionEnd: function() {
    k(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
  },
  _tryAnimatedPan: function(t, e) {
    var i = this._getCenterOffset(t)._trunc();
    return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
  },
  _createAnimProxy: function() {
    var t = this._proxy = y("div", "leaflet-proxy leaflet-zoom-animated");
    this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
      var i = Ee, n = this._proxy.style[i];
      mt(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
    }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
  },
  _destroyAnimProxy: function() {
    S(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
  },
  _animMoveEnd: function() {
    var t = this.getCenter(), e = this.getZoom();
    mt(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
  },
  _catchTransitionEnd: function(t) {
    this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
  },
  _nothingToAnimate: function() {
    return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
  },
  _tryAnimatedZoom: function(t, e, i) {
    if (this._animatingZoom)
      return !0;
    if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
      return !1;
    var n = this.getZoomScale(e), o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
    return i.animate !== !0 && !this.getSize().contains(o) ? !1 : (R(function() {
      this._moveStart(!0, !1)._animateZoom(t, e, !0);
    }, this), !0);
  },
  _animateZoom: function(t, e, i, n) {
    !this._mapPane || (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, v(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
      center: t,
      zoom: e,
      noUpdate: n
    }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(M(this._onZoomTransitionEnd, this), 250));
  },
  _onZoomTransitionEnd: function() {
    !this._animatingZoom || (this._mapPane && k(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
  }
});
function co(t, e) {
  return new g(t, e);
}
var V = nt.extend({
  options: {
    position: "topright"
  },
  initialize: function(t) {
    z(this, t);
  },
  getPosition: function() {
    return this.options.position;
  },
  setPosition: function(t) {
    var e = this._map;
    return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
  },
  getContainer: function() {
    return this._container;
  },
  addTo: function(t) {
    this.remove(), this._map = t;
    var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
    return v(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
  },
  remove: function() {
    return this._map ? (S(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
  },
  _refocusOnMap: function(t) {
    this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
  }
}), Rt = function(t) {
  return new V(t);
};
g.include({
  addControl: function(t) {
    return t.addTo(this), this;
  },
  removeControl: function(t) {
    return t.remove(), this;
  },
  _initControlPos: function() {
    var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = y("div", e + "control-container", this._container);
    function n(o, s) {
      var r = e + o + " " + e + s;
      t[o + s] = y("div", r, i);
    }
    n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
  },
  _clearControlPos: function() {
    for (var t in this._controlCorners)
      S(this._controlCorners[t]);
    S(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
  }
});
var Wi = V.extend({
  options: {
    collapsed: !0,
    position: "topright",
    autoZIndex: !0,
    hideSingleBase: !1,
    sortLayers: !1,
    sortFunction: function(t, e, i, n) {
      return i < n ? -1 : n < i ? 1 : 0;
    }
  },
  initialize: function(t, e, i) {
    z(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
    for (var n in t)
      this._addLayer(t[n], n);
    for (n in e)
      this._addLayer(e[n], n, !0);
  },
  onAdd: function(t) {
    this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
    for (var e = 0; e < this._layers.length; e++)
      this._layers[e].layer.on("add remove", this._onLayerChange, this);
    return this._container;
  },
  addTo: function(t) {
    return V.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
  },
  onRemove: function() {
    this._map.off("zoomend", this._checkDisabledLayers, this);
    for (var t = 0; t < this._layers.length; t++)
      this._layers[t].layer.off("add remove", this._onLayerChange, this);
  },
  addBaseLayer: function(t, e) {
    return this._addLayer(t, e), this._map ? this._update() : this;
  },
  addOverlay: function(t, e) {
    return this._addLayer(t, e, !0), this._map ? this._update() : this;
  },
  removeLayer: function(t) {
    t.off("add remove", this._onLayerChange, this);
    var e = this._getLayer(x(t));
    return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
  },
  expand: function() {
    v(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
    var t = this._map.getSize().y - (this._container.offsetTop + 50);
    return t < this._section.clientHeight ? (v(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : k(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
  },
  collapse: function() {
    return k(this._container, "leaflet-control-layers-expanded"), this;
  },
  _initLayout: function() {
    var t = "leaflet-control-layers", e = this._container = y("div", t), i = this.options.collapsed;
    e.setAttribute("aria-haspopup", !0), Dt(e), De(e);
    var n = this._section = y("section", t + "-list");
    i && (this._map.on("click", this.collapse, this), m(e, {
      mouseenter: function() {
        m(n, "click", I), this.expand(), setTimeout(function() {
          b(n, "click", I);
        });
      },
      mouseleave: this.collapse
    }, this));
    var o = this._layersLink = y("a", t + "-toggle", e);
    o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), m(o, "click", I), m(o, "focus", this.expand, this), i || this.expand(), this._baseLayersList = y("div", t + "-base", n), this._separator = y("div", t + "-separator", n), this._overlaysList = y("div", t + "-overlays", n), e.appendChild(n);
  },
  _getLayer: function(t) {
    for (var e = 0; e < this._layers.length; e++)
      if (this._layers[e] && x(this._layers[e].layer) === t)
        return this._layers[e];
  },
  _addLayer: function(t, e, i) {
    this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
      layer: t,
      name: e,
      overlay: i
    }), this.options.sortLayers && this._layers.sort(M(function(n, o) {
      return this.options.sortFunction(n.layer, o.layer, n.name, o.name);
    }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
  },
  _update: function() {
    if (!this._container)
      return this;
    Kt(this._baseLayersList), Kt(this._overlaysList), this._layerControlInputs = [];
    var t, e, i, n, o = 0;
    for (i = 0; i < this._layers.length; i++)
      n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
    return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
  },
  _onLayerChange: function(t) {
    this._handlingClick || this._update();
    var e = this._getLayer(x(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
    i && this._map.fire(i, e);
  },
  _createRadioElement: function(t, e) {
    var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
    return n.innerHTML = i, n.firstChild;
  },
  _addItem: function(t) {
    var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
    t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + x(this), i), this._layerControlInputs.push(n), n.layerId = x(t.layer), m(n, "click", this._onInputClick, this);
    var o = document.createElement("span");
    o.innerHTML = " " + t.name;
    var s = document.createElement("span");
    e.appendChild(s), s.appendChild(n), s.appendChild(o);
    var r = t.overlay ? this._overlaysList : this._baseLayersList;
    return r.appendChild(e), this._checkDisabledLayers(), e;
  },
  _onInputClick: function() {
    var t = this._layerControlInputs, e, i, n = [], o = [];
    this._handlingClick = !0;
    for (var s = t.length - 1; s >= 0; s--)
      e = t[s], i = this._getLayer(e.layerId).layer, e.checked ? n.push(i) : e.checked || o.push(i);
    for (s = 0; s < o.length; s++)
      this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
    for (s = 0; s < n.length; s++)
      this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
    this._handlingClick = !1, this._refocusOnMap();
  },
  _checkDisabledLayers: function() {
    for (var t = this._layerControlInputs, e, i, n = this._map.getZoom(), o = t.length - 1; o >= 0; o--)
      e = t[o], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && n < i.options.minZoom || i.options.maxZoom !== void 0 && n > i.options.maxZoom;
  },
  _expandIfNotCollapsed: function() {
    return this._map && !this.options.collapsed && this.expand(), this;
  }
}), fo = function(t, e, i) {
  return new Wi(t, e, i);
}, He = V.extend({
  options: {
    position: "topleft",
    zoomInText: '<span aria-hidden="true">+</span>',
    zoomInTitle: "Zoom in",
    zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
    zoomOutTitle: "Zoom out"
  },
  onAdd: function(t) {
    var e = "leaflet-control-zoom", i = y("div", e + " leaflet-bar"), n = this.options;
    return this._zoomInButton = this._createButton(
      n.zoomInText,
      n.zoomInTitle,
      e + "-in",
      i,
      this._zoomIn
    ), this._zoomOutButton = this._createButton(
      n.zoomOutText,
      n.zoomOutTitle,
      e + "-out",
      i,
      this._zoomOut
    ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
  },
  onRemove: function(t) {
    t.off("zoomend zoomlevelschange", this._updateDisabled, this);
  },
  disable: function() {
    return this._disabled = !0, this._updateDisabled(), this;
  },
  enable: function() {
    return this._disabled = !1, this._updateDisabled(), this;
  },
  _zoomIn: function(t) {
    !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
  },
  _zoomOut: function(t) {
    !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
  },
  _createButton: function(t, e, i, n, o) {
    var s = y("a", i, n);
    return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), Dt(s), m(s, "click", vt), m(s, "click", o, this), m(s, "click", this._refocusOnMap, this), s;
  },
  _updateDisabled: function() {
    var t = this._map, e = "leaflet-disabled";
    k(this._zoomInButton, e), k(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (v(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (v(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
  }
});
g.mergeOptions({
  zoomControl: !0
});
g.addInitHook(function() {
  this.options.zoomControl && (this.zoomControl = new He(), this.addControl(this.zoomControl));
});
var _o = function(t) {
  return new He(t);
}, Ui = V.extend({
  options: {
    position: "bottomleft",
    maxWidth: 100,
    metric: !0,
    imperial: !0
  },
  onAdd: function(t) {
    var e = "leaflet-control-scale", i = y("div", e), n = this.options;
    return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
  },
  onRemove: function(t) {
    t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
  },
  _addScales: function(t, e, i) {
    t.metric && (this._mScale = y("div", e, i)), t.imperial && (this._iScale = y("div", e, i));
  },
  _update: function() {
    var t = this._map, e = t.getSize().y / 2, i = t.distance(
      t.containerPointToLatLng([0, e]),
      t.containerPointToLatLng([this.options.maxWidth, e])
    );
    this._updateScales(i);
  },
  _updateScales: function(t) {
    this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
  },
  _updateMetric: function(t) {
    var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
    this._updateScale(this._mScale, i, e / t);
  },
  _updateImperial: function(t) {
    var e = t * 3.2808399, i, n, o;
    e > 5280 ? (i = e / 5280, n = this._getRoundNum(i), this._updateScale(this._iScale, n + " mi", n / i)) : (o = this._getRoundNum(e), this._updateScale(this._iScale, o + " ft", o / e));
  },
  _updateScale: function(t, e, i) {
    t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
  },
  _getRoundNum: function(t) {
    var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
    return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
  }
}), mo = function(t) {
  return new Ui(t);
}, po = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Fe = V.extend({
  options: {
    position: "bottomright",
    prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (c.inlineSvg ? po + " " : "") + "Leaflet</a>"
  },
  initialize: function(t) {
    z(this, t), this._attributions = {};
  },
  onAdd: function(t) {
    t.attributionControl = this, this._container = y("div", "leaflet-control-attribution"), Dt(this._container);
    for (var e in t._layers)
      t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
    return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
  },
  onRemove: function(t) {
    t.off("layeradd", this._addAttribution, this);
  },
  _addAttribution: function(t) {
    t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
      this.removeAttribution(t.layer.getAttribution());
    }, this));
  },
  setPrefix: function(t) {
    return this.options.prefix = t, this._update(), this;
  },
  addAttribution: function(t) {
    return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
  },
  removeAttribution: function(t) {
    return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
  },
  _update: function() {
    if (!!this._map) {
      var t = [];
      for (var e in this._attributions)
        this._attributions[e] && t.push(e);
      var i = [];
      this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
    }
  }
});
g.mergeOptions({
  attributionControl: !0
});
g.addInitHook(function() {
  this.options.attributionControl && new Fe().addTo(this);
});
var vo = function(t) {
  return new Fe(t);
};
V.Layers = Wi;
V.Zoom = He;
V.Scale = Ui;
V.Attribution = Fe;
Rt.layers = fo;
Rt.zoom = _o;
Rt.scale = mo;
Rt.attribution = vo;
var Q = nt.extend({
  initialize: function(t) {
    this._map = t;
  },
  enable: function() {
    return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
  },
  disable: function() {
    return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
  },
  enabled: function() {
    return !!this._enabled;
  }
});
Q.addTo = function(t, e) {
  return t.addHandler(e, this), this;
};
var go = { Events: F }, oi = c.touch ? "touchstart mousedown" : "mousedown", rt = It.extend({
  options: {
    clickTolerance: 3
  },
  initialize: function(t, e, i, n) {
    z(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
  },
  enable: function() {
    this._enabled || (m(this._dragStartTarget, oi, this._onDown, this), this._enabled = !0);
  },
  disable: function() {
    !this._enabled || (rt._dragging === this && this.finishDrag(!0), b(this._dragStartTarget, oi, this._onDown, this), this._enabled = !1, this._moved = !1);
  },
  _onDown: function(t) {
    if (!!this._enabled && (this._moved = !1, !Ze(this._element, "leaflet-zoom-anim"))) {
      if (t.touches && t.touches.length !== 1) {
        rt._dragging === this && this.finishDrag();
        return;
      }
      if (!(rt._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (rt._dragging = this, this._preventOutline && Be(this._element), Ae(), Ot(), !this._moving)) {
        this.fire("down");
        var e = t.touches ? t.touches[0] : t, i = Ni(this._element);
        this._startPoint = new p(e.clientX, e.clientY), this._startPos = pt(this._element), this._parentScale = Ne(i);
        var n = t.type === "mousedown";
        m(document, n ? "mousemove" : "touchmove", this._onMove, this), m(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
      }
    }
  },
  _onMove: function(t) {
    if (!!this._enabled) {
      if (t.touches && t.touches.length > 1) {
        this._moved = !0;
        return;
      }
      var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new p(e.clientX, e.clientY)._subtract(this._startPoint);
      !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, I(t), this._moved || (this.fire("dragstart"), this._moved = !0, v(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), v(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
    }
  },
  _updatePosition: function() {
    var t = { originalEvent: this._lastEvent };
    this.fire("predrag", t), O(this._element, this._newPos), this.fire("drag", t);
  },
  _onUp: function() {
    !this._enabled || this.finishDrag();
  },
  finishDrag: function(t) {
    k(document.body, "leaflet-dragging"), this._lastTarget && (k(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), b(document, "mousemove touchmove", this._onMove, this), b(document, "mouseup touchend touchcancel", this._onUp, this), Ie(), At(), this._moved && this._moving && this.fire("dragend", {
      noInertia: t,
      distance: this._newPos.distanceTo(this._startPos)
    }), this._moving = !1, rt._dragging = !1;
  }
});
function Gi(t, e) {
  if (!e || !t.length)
    return t.slice();
  var i = e * e;
  return t = wo(t, i), t = xo(t, i), t;
}
function qi(t, e, i) {
  return Math.sqrt(Ht(t, e, i, !0));
}
function yo(t, e, i) {
  return Ht(t, e, i);
}
function xo(t, e) {
  var i = t.length, n = typeof Uint8Array != void 0 + "" ? Uint8Array : Array, o = new n(i);
  o[0] = o[i - 1] = 1, xe(t, o, e, 0, i - 1);
  var s, r = [];
  for (s = 0; s < i; s++)
    o[s] && r.push(t[s]);
  return r;
}
function xe(t, e, i, n, o) {
  var s = 0, r, a, h;
  for (a = n + 1; a <= o - 1; a++)
    h = Ht(t[a], t[n], t[o], !0), h > s && (r = a, s = h);
  s > i && (e[r] = 1, xe(t, e, i, n, r), xe(t, e, i, r, o));
}
function wo(t, e) {
  for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
    Po(t[n], t[o]) > e && (i.push(t[n]), o = n);
  return o < s - 1 && i.push(t[s - 1]), i;
}
var si;
function Vi(t, e, i, n, o) {
  var s = n ? si : dt(t, i), r = dt(e, i), a, h, u;
  for (si = r; ; ) {
    if (!(s | r))
      return [t, e];
    if (s & r)
      return !1;
    a = s || r, h = Xt(t, e, a, i, o), u = dt(h, i), a === s ? (t = h, s = u) : (e = h, r = u);
  }
}
function Xt(t, e, i, n, o) {
  var s = e.x - t.x, r = e.y - t.y, a = n.min, h = n.max, u, l;
  return i & 8 ? (u = t.x + s * (h.y - t.y) / r, l = h.y) : i & 4 ? (u = t.x + s * (a.y - t.y) / r, l = a.y) : i & 2 ? (u = h.x, l = t.y + r * (h.x - t.x) / s) : i & 1 && (u = a.x, l = t.y + r * (a.x - t.x) / s), new p(u, l, o);
}
function dt(t, e) {
  var i = 0;
  return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
}
function Po(t, e) {
  var i = e.x - t.x, n = e.y - t.y;
  return i * i + n * n;
}
function Ht(t, e, i, n) {
  var o = e.x, s = e.y, r = i.x - o, a = i.y - s, h = r * r + a * a, u;
  return h > 0 && (u = ((t.x - o) * r + (t.y - s) * a) / h, u > 1 ? (o = i.x, s = i.y) : u > 0 && (o += r * u, s += a * u)), r = t.x - o, a = t.y - s, n ? r * r + a * a : new p(o, s);
}
function q(t) {
  return !j(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
}
function ji(t) {
  return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), q(t);
}
function Ki(t, e) {
  var i, n, o, s, r, a, h, u;
  if (!t || t.length === 0)
    throw new Error("latlngs not passed");
  q(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
  var l = [];
  for (var f in t)
    l.push(e.project(T(t[f])));
  var d = l.length;
  for (i = 0, n = 0; i < d - 1; i++)
    n += l[i].distanceTo(l[i + 1]) / 2;
  if (n === 0)
    u = l[0];
  else
    for (i = 0, s = 0; i < d - 1; i++)
      if (r = l[i], a = l[i + 1], o = r.distanceTo(a), s += o, s > n) {
        h = (s - n) / o, u = [
          a.x - h * (a.x - r.x),
          a.y - h * (a.y - r.y)
        ];
        break;
      }
  return e.unproject(_(u));
}
var Lo = {
  __proto__: null,
  simplify: Gi,
  pointToSegmentDistance: qi,
  closestPointOnSegment: yo,
  clipSegment: Vi,
  _getEdgeIntersection: Xt,
  _getBitCode: dt,
  _sqClosestPointOnSegment: Ht,
  isFlat: q,
  _flat: ji,
  polylineCenter: Ki
};
function Yi(t, e, i) {
  var n, o = [1, 4, 2, 8], s, r, a, h, u, l, f, d;
  for (s = 0, l = t.length; s < l; s++)
    t[s]._code = dt(t[s], e);
  for (a = 0; a < 4; a++) {
    for (f = o[a], n = [], s = 0, l = t.length, r = l - 1; s < l; r = s++)
      h = t[s], u = t[r], h._code & f ? u._code & f || (d = Xt(u, h, f, e, i), d._code = dt(d, e), n.push(d)) : (u._code & f && (d = Xt(u, h, f, e, i), d._code = dt(d, e), n.push(d)), n.push(h));
    t = n;
  }
  return t;
}
function Xi(t, e) {
  var i, n, o, s, r, a, h, u, l;
  if (!t || t.length === 0)
    throw new Error("latlngs not passed");
  q(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
  var f = [];
  for (var d in t)
    f.push(e.project(T(t[d])));
  var B = f.length;
  for (a = h = u = 0, i = 0, n = B - 1; i < B; n = i++)
    o = f[i], s = f[n], r = o.y * s.x - s.y * o.x, h += (o.x + s.x) * r, u += (o.y + s.y) * r, a += r * 3;
  return a === 0 ? l = f[0] : l = [h / a, u / a], e.unproject(_(l));
}
var To = {
  __proto__: null,
  clipPolygon: Yi,
  polygonCenter: Xi
}, We = {
  project: function(t) {
    return new p(t.lng, t.lat);
  },
  unproject: function(t) {
    return new P(t.y, t.x);
  },
  bounds: new C([-180, -90], [180, 90])
}, we = {
  R: 6378137,
  R_MINOR: 6356752314245179e-9,
  bounds: new C([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
  project: function(t) {
    var e = Math.PI / 180, i = this.R, n = t.lat * e, o = this.R_MINOR / i, s = Math.sqrt(1 - o * o), r = s * Math.sin(n), a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
    return n = -i * Math.log(Math.max(a, 1e-10)), new p(t.lng * e * i, n);
  },
  unproject: function(t) {
    for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, o = Math.sqrt(1 - n * n), s = Math.exp(-t.y / i), r = Math.PI / 2 - 2 * Math.atan(s), a = 0, h = 0.1, u; a < 15 && Math.abs(h) > 1e-7; a++)
      u = o * Math.sin(r), u = Math.pow((1 - u) / (1 + u), o / 2), h = Math.PI / 2 - 2 * Math.atan(s * u) - r, r += h;
    return new P(r * e, t.x * e / i);
  }
}, bo = {
  __proto__: null,
  LonLat: We,
  Mercator: we,
  SphericalMercator: _e
}, Mo = w({}, at, {
  code: "EPSG:3395",
  projection: we,
  transformation: function() {
    var t = 0.5 / (Math.PI * we.R);
    return Bt(t, 0.5, -t, 0.5);
  }()
}), Ji = w({}, at, {
  code: "EPSG:4326",
  projection: We,
  transformation: Bt(1 / 180, 1, -1 / 180, 0.5)
}), zo = w({}, ot, {
  projection: We,
  transformation: Bt(1, 0, -1, 0),
  scale: function(t) {
    return Math.pow(2, t);
  },
  zoom: function(t) {
    return Math.log(t) / Math.LN2;
  },
  distance: function(t, e) {
    var i = e.lng - t.lng, n = e.lat - t.lat;
    return Math.sqrt(i * i + n * n);
  },
  infinite: !0
});
ot.Earth = at;
ot.EPSG3395 = Mo;
ot.EPSG3857 = be;
ot.EPSG900913 = Zn;
ot.EPSG4326 = Ji;
ot.Simple = zo;
var K = It.extend({
  options: {
    pane: "overlayPane",
    attribution: null,
    bubblingMouseEvents: !0
  },
  addTo: function(t) {
    return t.addLayer(this), this;
  },
  remove: function() {
    return this.removeFrom(this._map || this._mapToAdd);
  },
  removeFrom: function(t) {
    return t && t.removeLayer(this), this;
  },
  getPane: function(t) {
    return this._map.getPane(t ? this.options[t] || t : this.options.pane);
  },
  addInteractiveTarget: function(t) {
    return this._map._targets[x(t)] = this, this;
  },
  removeInteractiveTarget: function(t) {
    return delete this._map._targets[x(t)], this;
  },
  getAttribution: function() {
    return this.options.attribution;
  },
  _layerAdd: function(t) {
    var e = t.target;
    if (!!e.hasLayer(this)) {
      if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
        var i = this.getEvents();
        e.on(i, this), this.once("remove", function() {
          e.off(i, this);
        }, this);
      }
      this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
    }
  }
});
g.include({
  addLayer: function(t) {
    if (!t._layerAdd)
      throw new Error("The provided object is not a Layer.");
    var e = x(t);
    return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
  },
  removeLayer: function(t) {
    var e = x(t);
    return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
  },
  hasLayer: function(t) {
    return x(t) in this._layers;
  },
  eachLayer: function(t, e) {
    for (var i in this._layers)
      t.call(e, this._layers[i]);
    return this;
  },
  _addLayers: function(t) {
    t = t ? j(t) ? t : [t] : [];
    for (var e = 0, i = t.length; e < i; e++)
      this.addLayer(t[e]);
  },
  _addZoomLimit: function(t) {
    (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[x(t)] = t, this._updateZoomLevels());
  },
  _removeZoomLimit: function(t) {
    var e = x(t);
    this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
  },
  _updateZoomLevels: function() {
    var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
    for (var n in this._zoomBoundLayers) {
      var o = this._zoomBoundLayers[n].options;
      t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom), e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom);
    }
    this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
  }
});
var gt = K.extend({
  initialize: function(t, e) {
    z(this, e), this._layers = {};
    var i, n;
    if (t)
      for (i = 0, n = t.length; i < n; i++)
        this.addLayer(t[i]);
  },
  addLayer: function(t) {
    var e = this.getLayerId(t);
    return this._layers[e] = t, this._map && this._map.addLayer(t), this;
  },
  removeLayer: function(t) {
    var e = t in this._layers ? t : this.getLayerId(t);
    return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
  },
  hasLayer: function(t) {
    var e = typeof t == "number" ? t : this.getLayerId(t);
    return e in this._layers;
  },
  clearLayers: function() {
    return this.eachLayer(this.removeLayer, this);
  },
  invoke: function(t) {
    var e = Array.prototype.slice.call(arguments, 1), i, n;
    for (i in this._layers)
      n = this._layers[i], n[t] && n[t].apply(n, e);
    return this;
  },
  onAdd: function(t) {
    this.eachLayer(t.addLayer, t);
  },
  onRemove: function(t) {
    this.eachLayer(t.removeLayer, t);
  },
  eachLayer: function(t, e) {
    for (var i in this._layers)
      t.call(e, this._layers[i]);
    return this;
  },
  getLayer: function(t) {
    return this._layers[t];
  },
  getLayers: function() {
    var t = [];
    return this.eachLayer(t.push, t), t;
  },
  setZIndex: function(t) {
    return this.invoke("setZIndex", t);
  },
  getLayerId: function(t) {
    return x(t);
  }
}), So = function(t, e) {
  return new gt(t, e);
}, _t = gt.extend({
  addLayer: function(t) {
    return this.hasLayer(t) ? this : (t.addEventParent(this), gt.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
  },
  removeLayer: function(t) {
    return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), gt.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
  },
  setStyle: function(t) {
    return this.invoke("setStyle", t);
  },
  bringToFront: function() {
    return this.invoke("bringToFront");
  },
  bringToBack: function() {
    return this.invoke("bringToBack");
  },
  getBounds: function() {
    var t = new H();
    for (var e in this._layers) {
      var i = this._layers[e];
      t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
    }
    return t;
  }
}), Co = function(t, e) {
  return new _t(t, e);
}, wt = nt.extend({
  options: {
    popupAnchor: [0, 0],
    tooltipAnchor: [0, 0],
    crossOrigin: !1
  },
  initialize: function(t) {
    z(this, t);
  },
  createIcon: function(t) {
    return this._createIcon("icon", t);
  },
  createShadow: function(t) {
    return this._createIcon("shadow", t);
  },
  _createIcon: function(t, e) {
    var i = this._getIconUrl(t);
    if (!i) {
      if (t === "icon")
        throw new Error("iconUrl not set in Icon options (see the docs).");
      return null;
    }
    var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
    return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n;
  },
  _setIconStyles: function(t, e) {
    var i = this.options, n = i[e + "Size"];
    typeof n == "number" && (n = [n, n]);
    var o = _(n), s = _(e === "shadow" && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
    t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
  },
  _createImg: function(t, e) {
    return e = e || document.createElement("img"), e.src = t, e;
  },
  _getIconUrl: function(t) {
    return c.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
  }
});
function ko(t) {
  return new wt(t);
}
var Ct = wt.extend({
  options: {
    iconUrl: "marker-icon.png",
    iconRetinaUrl: "marker-icon-2x.png",
    shadowUrl: "marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  },
  _getIconUrl: function(t) {
    return typeof Ct.imagePath != "string" && (Ct.imagePath = this._detectIconPath()), (this.options.imagePath || Ct.imagePath) + wt.prototype._getIconUrl.call(this, t);
  },
  _stripUrl: function(t) {
    var e = function(i, n, o) {
      var s = n.exec(i);
      return s && s[o];
    };
    return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
  },
  _detectIconPath: function() {
    var t = y("div", "leaflet-default-icon-path", document.body), e = Zt(t, "background-image") || Zt(t, "backgroundImage");
    if (document.body.removeChild(t), e = this._stripUrl(e), e)
      return e;
    var i = document.querySelector('link[href$="leaflet.css"]');
    return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
  }
}), ri = Q.extend({
  initialize: function(t) {
    this._marker = t;
  },
  addHooks: function() {
    var t = this._marker._icon;
    this._draggable || (this._draggable = new rt(t, t, !0)), this._draggable.on({
      dragstart: this._onDragStart,
      predrag: this._onPreDrag,
      drag: this._onDrag,
      dragend: this._onDragEnd
    }, this).enable(), v(t, "leaflet-marker-draggable");
  },
  removeHooks: function() {
    this._draggable.off({
      dragstart: this._onDragStart,
      predrag: this._onPreDrag,
      drag: this._onDrag,
      dragend: this._onDragEnd
    }, this).disable(), this._marker._icon && k(this._marker._icon, "leaflet-marker-draggable");
  },
  moved: function() {
    return this._draggable && this._draggable._moved;
  },
  _adjustPan: function(t) {
    var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, s = pt(e._icon), r = i.getPixelBounds(), a = i.getPixelOrigin(), h = D(
      r.min._subtract(a).add(o),
      r.max._subtract(a).subtract(o)
    );
    if (!h.contains(s)) {
      var u = _(
        (Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x),
        (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)
      ).multiplyBy(n);
      i.panBy(u, { animate: !1 }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), O(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = R(this._adjustPan.bind(this, t));
    }
  },
  _onDragStart: function() {
    this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
  },
  _onPreDrag: function(t) {
    this._marker.options.autoPan && (G(this._panRequest), this._panRequest = R(this._adjustPan.bind(this, t)));
  },
  _onDrag: function(t) {
    var e = this._marker, i = e._shadow, n = pt(e._icon), o = e._map.layerPointToLatLng(n);
    i && O(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
  },
  _onDragEnd: function(t) {
    G(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
  }
}), ie = K.extend({
  options: {
    icon: new Ct(),
    interactive: !0,
    keyboard: !0,
    title: "",
    alt: "Marker",
    zIndexOffset: 0,
    opacity: 1,
    riseOnHover: !1,
    riseOffset: 250,
    pane: "markerPane",
    shadowPane: "shadowPane",
    bubblingMouseEvents: !1,
    autoPanOnFocus: !0,
    draggable: !1,
    autoPan: !1,
    autoPanPadding: [50, 50],
    autoPanSpeed: 10
  },
  initialize: function(t, e) {
    z(this, e), this._latlng = T(t);
  },
  onAdd: function(t) {
    this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
  },
  onRemove: function(t) {
    this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
  },
  getEvents: function() {
    return {
      zoom: this.update,
      viewreset: this.update
    };
  },
  getLatLng: function() {
    return this._latlng;
  },
  setLatLng: function(t) {
    var e = this._latlng;
    return this._latlng = T(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
  },
  setZIndexOffset: function(t) {
    return this.options.zIndexOffset = t, this.update();
  },
  getIcon: function() {
    return this.options.icon;
  },
  setIcon: function(t) {
    return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
  },
  getElement: function() {
    return this._icon;
  },
  update: function() {
    if (this._icon && this._map) {
      var t = this._map.latLngToLayerPoint(this._latlng).round();
      this._setPos(t);
    }
    return this;
  },
  _initIcon: function() {
    var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = !1;
    i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), v(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
      mouseover: this._bringToFront,
      mouseout: this._resetZIndex
    }), this.options.autoPanOnFocus && m(i, "focus", this._panOnFocus, this);
    var o = t.icon.createShadow(this._shadow), s = !1;
    o !== this._shadow && (this._removeShadow(), s = !0), o && (v(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
  },
  _removeIcon: function() {
    this.options.riseOnHover && this.off({
      mouseover: this._bringToFront,
      mouseout: this._resetZIndex
    }), this.options.autoPanOnFocus && b(this._icon, "focus", this._panOnFocus, this), S(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
  },
  _removeShadow: function() {
    this._shadow && S(this._shadow), this._shadow = null;
  },
  _setPos: function(t) {
    this._icon && O(this._icon, t), this._shadow && O(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
  },
  _updateZIndex: function(t) {
    this._icon && (this._icon.style.zIndex = this._zIndex + t);
  },
  _animateZoom: function(t) {
    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
    this._setPos(e);
  },
  _initInteraction: function() {
    if (!!this.options.interactive && (v(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), ri)) {
      var t = this.options.draggable;
      this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new ri(this), t && this.dragging.enable();
    }
  },
  setOpacity: function(t) {
    return this.options.opacity = t, this._map && this._updateOpacity(), this;
  },
  _updateOpacity: function() {
    var t = this.options.opacity;
    this._icon && U(this._icon, t), this._shadow && U(this._shadow, t);
  },
  _bringToFront: function() {
    this._updateZIndex(this.options.riseOffset);
  },
  _resetZIndex: function() {
    this._updateZIndex(0);
  },
  _panOnFocus: function() {
    var t = this._map;
    if (!!t) {
      var e = this.options.icon.options, i = e.iconSize ? _(e.iconSize) : _(0, 0), n = e.iconAnchor ? _(e.iconAnchor) : _(0, 0);
      t.panInside(this._latlng, {
        paddingTopLeft: n,
        paddingBottomRight: i.subtract(n)
      });
    }
  },
  _getPopupAnchor: function() {
    return this.options.icon.options.popupAnchor;
  },
  _getTooltipAnchor: function() {
    return this.options.icon.options.tooltipAnchor;
  }
});
function Eo(t, e) {
  return new ie(t, e);
}
var ht = K.extend({
  options: {
    stroke: !0,
    color: "#3388ff",
    weight: 3,
    opacity: 1,
    lineCap: "round",
    lineJoin: "round",
    dashArray: null,
    dashOffset: null,
    fill: !1,
    fillColor: null,
    fillOpacity: 0.2,
    fillRule: "evenodd",
    interactive: !0,
    bubblingMouseEvents: !0
  },
  beforeAdd: function(t) {
    this._renderer = t.getRenderer(this);
  },
  onAdd: function() {
    this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
  },
  onRemove: function() {
    this._renderer._removePath(this);
  },
  redraw: function() {
    return this._map && this._renderer._updatePath(this), this;
  },
  setStyle: function(t) {
    return z(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
  },
  bringToFront: function() {
    return this._renderer && this._renderer._bringToFront(this), this;
  },
  bringToBack: function() {
    return this._renderer && this._renderer._bringToBack(this), this;
  },
  getElement: function() {
    return this._path;
  },
  _reset: function() {
    this._project(), this._update();
  },
  _clickTolerance: function() {
    return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
  }
}), ne = ht.extend({
  options: {
    fill: !0,
    radius: 10
  },
  initialize: function(t, e) {
    z(this, e), this._latlng = T(t), this._radius = this.options.radius;
  },
  setLatLng: function(t) {
    var e = this._latlng;
    return this._latlng = T(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
  },
  getLatLng: function() {
    return this._latlng;
  },
  setRadius: function(t) {
    return this.options.radius = this._radius = t, this.redraw();
  },
  getRadius: function() {
    return this._radius;
  },
  setStyle: function(t) {
    var e = t && t.radius || this._radius;
    return ht.prototype.setStyle.call(this, t), this.setRadius(e), this;
  },
  _project: function() {
    this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
  },
  _updateBounds: function() {
    var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
    this._pxBounds = new C(this._point.subtract(n), this._point.add(n));
  },
  _update: function() {
    this._map && this._updatePath();
  },
  _updatePath: function() {
    this._renderer._updateCircle(this);
  },
  _empty: function() {
    return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
  },
  _containsPoint: function(t) {
    return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
  }
});
function Zo(t, e) {
  return new ne(t, e);
}
var Ue = ne.extend({
  initialize: function(t, e, i) {
    if (typeof e == "number" && (e = w({}, i, { radius: e })), z(this, e), this._latlng = T(t), isNaN(this.options.radius))
      throw new Error("Circle radius cannot be NaN");
    this._mRadius = this.options.radius;
  },
  setRadius: function(t) {
    return this._mRadius = t, this.redraw();
  },
  getRadius: function() {
    return this._mRadius;
  },
  getBounds: function() {
    var t = [this._radius, this._radiusY || this._radius];
    return new H(
      this._map.layerPointToLatLng(this._point.subtract(t)),
      this._map.layerPointToLatLng(this._point.add(t))
    );
  },
  setStyle: ht.prototype.setStyle,
  _project: function() {
    var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
    if (n.distance === at.distance) {
      var o = Math.PI / 180, s = this._mRadius / at.R / o, r = i.project([e + s, t]), a = i.project([e - s, t]), h = r.add(a).divideBy(2), u = i.unproject(h).lat, l = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(u * o)) / (Math.cos(e * o) * Math.cos(u * o))) / o;
      (isNaN(l) || l === 0) && (l = s / Math.cos(Math.PI / 180 * e)), this._point = h.subtract(i.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - i.project([u, t - l]).x, this._radiusY = h.y - r.y;
    } else {
      var f = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
      this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(f).x;
    }
    this._updateBounds();
  }
});
function Oo(t, e, i) {
  return new Ue(t, e, i);
}
var it = ht.extend({
  options: {
    smoothFactor: 1,
    noClip: !1
  },
  initialize: function(t, e) {
    z(this, e), this._setLatLngs(t);
  },
  getLatLngs: function() {
    return this._latlngs;
  },
  setLatLngs: function(t) {
    return this._setLatLngs(t), this.redraw();
  },
  isEmpty: function() {
    return !this._latlngs.length;
  },
  closestLayerPoint: function(t) {
    for (var e = 1 / 0, i = null, n = Ht, o, s, r = 0, a = this._parts.length; r < a; r++)
      for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
        o = h[u - 1], s = h[u];
        var f = n(t, o, s, !0);
        f < e && (e = f, i = n(t, o, s));
      }
    return i && (i.distance = Math.sqrt(e)), i;
  },
  getCenter: function() {
    if (!this._map)
      throw new Error("Must add layer to map before using getCenter()");
    return Ki(this._defaultShape(), this._map.options.crs);
  },
  getBounds: function() {
    return this._bounds;
  },
  addLatLng: function(t, e) {
    return e = e || this._defaultShape(), t = T(t), e.push(t), this._bounds.extend(t), this.redraw();
  },
  _setLatLngs: function(t) {
    this._bounds = new H(), this._latlngs = this._convertLatLngs(t);
  },
  _defaultShape: function() {
    return q(this._latlngs) ? this._latlngs : this._latlngs[0];
  },
  _convertLatLngs: function(t) {
    for (var e = [], i = q(t), n = 0, o = t.length; n < o; n++)
      i ? (e[n] = T(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
    return e;
  },
  _project: function() {
    var t = new C();
    this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
  },
  _updateBounds: function() {
    var t = this._clickTolerance(), e = new p(t, t);
    !this._rawPxBounds || (this._pxBounds = new C([
      this._rawPxBounds.min.subtract(e),
      this._rawPxBounds.max.add(e)
    ]));
  },
  _projectLatlngs: function(t, e, i) {
    var n = t[0] instanceof P, o = t.length, s, r;
    if (n) {
      for (r = [], s = 0; s < o; s++)
        r[s] = this._map.latLngToLayerPoint(t[s]), i.extend(r[s]);
      e.push(r);
    } else
      for (s = 0; s < o; s++)
        this._projectLatlngs(t[s], e, i);
  },
  _clipPoints: function() {
    var t = this._renderer._bounds;
    if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }
      var e = this._parts, i, n, o, s, r, a, h;
      for (i = 0, o = 0, s = this._rings.length; i < s; i++)
        for (h = this._rings[i], n = 0, r = h.length; n < r - 1; n++)
          a = Vi(h[n], h[n + 1], t, n, !0), a && (e[o] = e[o] || [], e[o].push(a[0]), (a[1] !== h[n + 1] || n === r - 2) && (e[o].push(a[1]), o++));
    }
  },
  _simplifyPoints: function() {
    for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
      t[i] = Gi(t[i], e);
  },
  _update: function() {
    !this._map || (this._clipPoints(), this._simplifyPoints(), this._updatePath());
  },
  _updatePath: function() {
    this._renderer._updatePoly(this);
  },
  _containsPoint: function(t, e) {
    var i, n, o, s, r, a, h = this._clickTolerance();
    if (!this._pxBounds || !this._pxBounds.contains(t))
      return !1;
    for (i = 0, s = this._parts.length; i < s; i++)
      for (a = this._parts[i], n = 0, r = a.length, o = r - 1; n < r; o = n++)
        if (!(!e && n === 0) && qi(t, a[o], a[n]) <= h)
          return !0;
    return !1;
  }
});
function Ao(t, e) {
  return new it(t, e);
}
it._flat = ji;
var Pt = it.extend({
  options: {
    fill: !0
  },
  isEmpty: function() {
    return !this._latlngs.length || !this._latlngs[0].length;
  },
  getCenter: function() {
    if (!this._map)
      throw new Error("Must add layer to map before using getCenter()");
    return Xi(this._defaultShape(), this._map.options.crs);
  },
  _convertLatLngs: function(t) {
    var e = it.prototype._convertLatLngs.call(this, t), i = e.length;
    return i >= 2 && e[0] instanceof P && e[0].equals(e[i - 1]) && e.pop(), e;
  },
  _setLatLngs: function(t) {
    it.prototype._setLatLngs.call(this, t), q(this._latlngs) && (this._latlngs = [this._latlngs]);
  },
  _defaultShape: function() {
    return q(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
  },
  _clipPoints: function() {
    var t = this._renderer._bounds, e = this.options.weight, i = new p(e, e);
    if (t = new C(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }
      for (var n = 0, o = this._rings.length, s; n < o; n++)
        s = Yi(this._rings[n], t, !0), s.length && this._parts.push(s);
    }
  },
  _updatePath: function() {
    this._renderer._updatePoly(this, !0);
  },
  _containsPoint: function(t) {
    var e = !1, i, n, o, s, r, a, h, u;
    if (!this._pxBounds || !this._pxBounds.contains(t))
      return !1;
    for (s = 0, h = this._parts.length; s < h; s++)
      for (i = this._parts[s], r = 0, u = i.length, a = u - 1; r < u; a = r++)
        n = i[r], o = i[a], n.y > t.y != o.y > t.y && t.x < (o.x - n.x) * (t.y - n.y) / (o.y - n.y) + n.x && (e = !e);
    return e || it.prototype._containsPoint.call(this, t, !0);
  }
});
function Io(t, e) {
  return new Pt(t, e);
}
var st = _t.extend({
  initialize: function(t, e) {
    z(this, e), this._layers = {}, t && this.addData(t);
  },
  addData: function(t) {
    var e = j(t) ? t : t.features, i, n, o;
    if (e) {
      for (i = 0, n = e.length; i < n; i++)
        o = e[i], (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
      return this;
    }
    var s = this.options;
    if (s.filter && !s.filter(t))
      return this;
    var r = Jt(t, s);
    return r ? (r.feature = se(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
  },
  resetStyle: function(t) {
    return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = w({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
  },
  setStyle: function(t) {
    return this.eachLayer(function(e) {
      this._setLayerStyle(e, t);
    }, this);
  },
  _setLayerStyle: function(t, e) {
    t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
  }
});
function Jt(t, e) {
  var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, o = [], s = e && e.pointToLayer, r = e && e.coordsToLatLng || Ge, a, h, u, l;
  if (!n && !i)
    return null;
  switch (i.type) {
    case "Point":
      return a = r(n), ai(s, t, a, e);
    case "MultiPoint":
      for (u = 0, l = n.length; u < l; u++)
        a = r(n[u]), o.push(ai(s, t, a, e));
      return new _t(o);
    case "LineString":
    case "MultiLineString":
      return h = $t(n, i.type === "LineString" ? 0 : 1, r), new it(h, e);
    case "Polygon":
    case "MultiPolygon":
      return h = $t(n, i.type === "Polygon" ? 1 : 2, r), new Pt(h, e);
    case "GeometryCollection":
      for (u = 0, l = i.geometries.length; u < l; u++) {
        var f = Jt({
          geometry: i.geometries[u],
          type: "Feature",
          properties: t.properties
        }, e);
        f && o.push(f);
      }
      return new _t(o);
    case "FeatureCollection":
      for (u = 0, l = i.features.length; u < l; u++) {
        var d = Jt(i.features[u], e);
        d && o.push(d);
      }
      return new _t(o);
    default:
      throw new Error("Invalid GeoJSON object.");
  }
}
function ai(t, e, i, n) {
  return t ? t(e, i) : new ie(i, n && n.markersInheritOptions && n);
}
function Ge(t) {
  return new P(t[1], t[0], t[2]);
}
function $t(t, e, i) {
  for (var n = [], o = 0, s = t.length, r; o < s; o++)
    r = e ? $t(t[o], e - 1, i) : (i || Ge)(t[o]), n.push(r);
  return n;
}
function qe(t, e) {
  return t = T(t), t.alt !== void 0 ? [Y(t.lng, e), Y(t.lat, e), Y(t.alt, e)] : [Y(t.lng, e), Y(t.lat, e)];
}
function oe(t, e, i, n) {
  for (var o = [], s = 0, r = t.length; s < r; s++)
    o.push(e ? oe(t[s], q(t[s]) ? 0 : e - 1, i, n) : qe(t[s], n));
  return !e && i && o.push(o[0]), o;
}
function Lt(t, e) {
  return t.feature ? w({}, t.feature, { geometry: e }) : se(e);
}
function se(t) {
  return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
    type: "Feature",
    properties: {},
    geometry: t
  };
}
var Ve = {
  toGeoJSON: function(t) {
    return Lt(this, {
      type: "Point",
      coordinates: qe(this.getLatLng(), t)
    });
  }
};
ie.include(Ve);
Ue.include(Ve);
ne.include(Ve);
it.include({
  toGeoJSON: function(t) {
    var e = !q(this._latlngs), i = oe(this._latlngs, e ? 1 : 0, !1, t);
    return Lt(this, {
      type: (e ? "Multi" : "") + "LineString",
      coordinates: i
    });
  }
});
Pt.include({
  toGeoJSON: function(t) {
    var e = !q(this._latlngs), i = e && !q(this._latlngs[0]), n = oe(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
    return e || (n = [n]), Lt(this, {
      type: (i ? "Multi" : "") + "Polygon",
      coordinates: n
    });
  }
});
gt.include({
  toMultiPoint: function(t) {
    var e = [];
    return this.eachLayer(function(i) {
      e.push(i.toGeoJSON(t).geometry.coordinates);
    }), Lt(this, {
      type: "MultiPoint",
      coordinates: e
    });
  },
  toGeoJSON: function(t) {
    var e = this.feature && this.feature.geometry && this.feature.geometry.type;
    if (e === "MultiPoint")
      return this.toMultiPoint(t);
    var i = e === "GeometryCollection", n = [];
    return this.eachLayer(function(o) {
      if (o.toGeoJSON) {
        var s = o.toGeoJSON(t);
        if (i)
          n.push(s.geometry);
        else {
          var r = se(s);
          r.type === "FeatureCollection" ? n.push.apply(n, r.features) : n.push(r);
        }
      }
    }), i ? Lt(this, {
      geometries: n,
      type: "GeometryCollection"
    }) : {
      type: "FeatureCollection",
      features: n
    };
  }
});
function $i(t, e) {
  return new st(t, e);
}
var Bo = $i, re = K.extend({
  options: {
    opacity: 1,
    alt: "",
    interactive: !1,
    crossOrigin: !1,
    errorOverlayUrl: "",
    zIndex: 1,
    className: ""
  },
  initialize: function(t, e, i) {
    this._url = t, this._bounds = A(e), z(this, i);
  },
  onAdd: function() {
    this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (v(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
  },
  onRemove: function() {
    S(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
  },
  setOpacity: function(t) {
    return this.options.opacity = t, this._image && this._updateOpacity(), this;
  },
  setStyle: function(t) {
    return t.opacity && this.setOpacity(t.opacity), this;
  },
  bringToFront: function() {
    return this._map && Tt(this._image), this;
  },
  bringToBack: function() {
    return this._map && bt(this._image), this;
  },
  setUrl: function(t) {
    return this._url = t, this._image && (this._image.src = t), this;
  },
  setBounds: function(t) {
    return this._bounds = A(t), this._map && this._reset(), this;
  },
  getEvents: function() {
    var t = {
      zoom: this._reset,
      viewreset: this._reset
    };
    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
  },
  setZIndex: function(t) {
    return this.options.zIndex = t, this._updateZIndex(), this;
  },
  getBounds: function() {
    return this._bounds;
  },
  getElement: function() {
    return this._image;
  },
  _initImage: function() {
    var t = this._url.tagName === "IMG", e = this._image = t ? this._url : y("img");
    if (v(e, "leaflet-image-layer"), this._zoomAnimated && v(e, "leaflet-zoom-animated"), this.options.className && v(e, this.options.className), e.onselectstart = Z, e.onmousemove = Z, e.onload = M(this.fire, this, "load"), e.onerror = M(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
      this._url = e.src;
      return;
    }
    e.src = this._url, e.alt = this.options.alt;
  },
  _animateZoom: function(t) {
    var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
    mt(this._image, i, e);
  },
  _reset: function() {
    var t = this._image, e = new C(
      this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
      this._map.latLngToLayerPoint(this._bounds.getSouthEast())
    ), i = e.getSize();
    O(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
  },
  _updateOpacity: function() {
    U(this._image, this.options.opacity);
  },
  _updateZIndex: function() {
    this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
  },
  _overlayOnError: function() {
    this.fire("error");
    var t = this.options.errorOverlayUrl;
    t && this._url !== t && (this._url = t, this._image.src = t);
  },
  getCenter: function() {
    return this._bounds.getCenter();
  }
}), No = function(t, e, i) {
  return new re(t, e, i);
}, Qi = re.extend({
  options: {
    autoplay: !0,
    loop: !0,
    keepAspectRatio: !0,
    muted: !1,
    playsInline: !0
  },
  _initImage: function() {
    var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : y("video");
    if (v(e, "leaflet-image-layer"), this._zoomAnimated && v(e, "leaflet-zoom-animated"), this.options.className && v(e, this.options.className), e.onselectstart = Z, e.onmousemove = Z, e.onloadeddata = M(this.fire, this, "load"), t) {
      for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++)
        n.push(i[o].src);
      this._url = i.length > 0 ? n : [e.src];
      return;
    }
    j(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
    for (var s = 0; s < this._url.length; s++) {
      var r = y("source");
      r.src = this._url[s], e.appendChild(r);
    }
  }
});
function Do(t, e, i) {
  return new Qi(t, e, i);
}
var tn = re.extend({
  _initImage: function() {
    var t = this._image = this._url;
    v(t, "leaflet-image-layer"), this._zoomAnimated && v(t, "leaflet-zoom-animated"), this.options.className && v(t, this.options.className), t.onselectstart = Z, t.onmousemove = Z;
  }
});
function Ro(t, e, i) {
  return new tn(t, e, i);
}
var J = K.extend({
  options: {
    interactive: !1,
    offset: [0, 0],
    className: "",
    pane: void 0,
    content: ""
  },
  initialize: function(t, e) {
    t && (t instanceof L.LatLng || j(t)) ? (this._latlng = T(t), z(this, e)) : (z(this, t), this._source = e), this.options.content && (this._content = this.options.content);
  },
  openOn: function(t) {
    return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
  },
  close: function() {
    return this._map && this._map.removeLayer(this), this;
  },
  toggle: function(t) {
    return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
  },
  onAdd: function(t) {
    this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && U(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && U(this._container, 1), this.bringToFront(), this.options.interactive && (v(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
  },
  onRemove: function(t) {
    t._fadeAnimated ? (U(this._container, 0), this._removeTimeout = setTimeout(M(S, void 0, this._container), 200)) : S(this._container), this.options.interactive && (k(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
  },
  getLatLng: function() {
    return this._latlng;
  },
  setLatLng: function(t) {
    return this._latlng = T(t), this._map && (this._updatePosition(), this._adjustPan()), this;
  },
  getContent: function() {
    return this._content;
  },
  setContent: function(t) {
    return this._content = t, this.update(), this;
  },
  getElement: function() {
    return this._container;
  },
  update: function() {
    !this._map || (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
  },
  getEvents: function() {
    var t = {
      zoom: this._updatePosition,
      viewreset: this._updatePosition
    };
    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
  },
  isOpen: function() {
    return !!this._map && this._map.hasLayer(this);
  },
  bringToFront: function() {
    return this._map && Tt(this._container), this;
  },
  bringToBack: function() {
    return this._map && bt(this._container), this;
  },
  _prepareOpen: function(t) {
    var e = this._source;
    if (!e._map)
      return !1;
    if (e instanceof _t) {
      e = null;
      var i = this._source._layers;
      for (var n in i)
        if (i[n]._map) {
          e = i[n];
          break;
        }
      if (!e)
        return !1;
      this._source = e;
    }
    if (!t)
      if (e.getCenter)
        t = e.getCenter();
      else if (e.getLatLng)
        t = e.getLatLng();
      else if (e.getBounds)
        t = e.getBounds().getCenter();
      else
        throw new Error("Unable to get source layer LatLng.");
    return this.setLatLng(t), this._map && this.update(), !0;
  },
  _updateContent: function() {
    if (!!this._content) {
      var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
      if (typeof e == "string")
        t.innerHTML = e;
      else {
        for (; t.hasChildNodes(); )
          t.removeChild(t.firstChild);
        t.appendChild(e);
      }
      this.fire("contentupdate");
    }
  },
  _updatePosition: function() {
    if (!!this._map) {
      var t = this._map.latLngToLayerPoint(this._latlng), e = _(this.options.offset), i = this._getAnchor();
      this._zoomAnimated ? O(this._container, t.add(i)) : e = e.add(t).add(i);
      var n = this._containerBottom = -e.y, o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
      this._container.style.bottom = n + "px", this._container.style.left = o + "px";
    }
  },
  _getAnchor: function() {
    return [0, 0];
  }
});
g.include({
  _initOverlay: function(t, e, i, n) {
    var o = e;
    return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
  }
});
K.include({
  _initOverlay: function(t, e, i, n) {
    var o = i;
    return o instanceof t ? (z(o, n), o._source = this) : (o = e && !n ? e : new t(n, this), o.setContent(i)), o;
  }
});
var ae = J.extend({
  options: {
    pane: "popupPane",
    offset: [0, 7],
    maxWidth: 300,
    minWidth: 50,
    maxHeight: null,
    autoPan: !0,
    autoPanPaddingTopLeft: null,
    autoPanPaddingBottomRight: null,
    autoPanPadding: [5, 5],
    keepInView: !1,
    closeButton: !0,
    autoClose: !0,
    closeOnEscapeKey: !0,
    className: ""
  },
  openOn: function(t) {
    return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, J.prototype.openOn.call(this, t);
  },
  onAdd: function(t) {
    J.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof ht || this._source.on("preclick", ft));
  },
  onRemove: function(t) {
    J.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof ht || this._source.off("preclick", ft));
  },
  getEvents: function() {
    var t = J.prototype.getEvents.call(this);
    return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
  },
  _initLayout: function() {
    var t = "leaflet-popup", e = this._container = y(
      "div",
      t + " " + (this.options.className || "") + " leaflet-zoom-animated"
    ), i = this._wrapper = y("div", t + "-content-wrapper", e);
    if (this._contentNode = y("div", t + "-content", i), Dt(e), De(this._contentNode), m(e, "contextmenu", ft), this._tipContainer = y("div", t + "-tip-container", e), this._tip = y("div", t + "-tip", this._tipContainer), this.options.closeButton) {
      var n = this._closeButton = y("a", t + "-close-button", e);
      n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', m(n, "click", function(o) {
        I(o), this.close();
      }, this);
    }
  },
  _updateLayout: function() {
    var t = this._contentNode, e = t.style;
    e.width = "", e.whiteSpace = "nowrap";
    var i = t.offsetWidth;
    i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
    var n = t.offsetHeight, o = this.options.maxHeight, s = "leaflet-popup-scrolled";
    o && n > o ? (e.height = o + "px", v(t, s)) : k(t, s), this._containerWidth = this._container.offsetWidth;
  },
  _animateZoom: function(t) {
    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
    O(this._container, e.add(i));
  },
  _adjustPan: function(t) {
    if (!!this.options.autoPan) {
      this._map._panAnim && this._map._panAnim.stop();
      var e = this._map, i = parseInt(Zt(this._container, "marginBottom"), 10) || 0, n = this._container.offsetHeight + i, o = this._containerWidth, s = new p(this._containerLeft, -n - this._containerBottom);
      s._add(pt(this._container));
      var r = e.layerPointToContainerPoint(s), a = _(this.options.autoPanPadding), h = _(this.options.autoPanPaddingTopLeft || a), u = _(this.options.autoPanPaddingBottomRight || a), l = e.getSize(), f = 0, d = 0;
      r.x + o + u.x > l.x && (f = r.x + o - l.x + u.x), r.x - f - h.x < 0 && (f = r.x - h.x), r.y + n + u.y > l.y && (d = r.y + n - l.y + u.y), r.y - d - h.y < 0 && (d = r.y - h.y), (f || d) && e.fire("autopanstart").panBy([f, d], { animate: t && t.type === "moveend" });
    }
  },
  _getAnchor: function() {
    return _(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
  }
}), Ho = function(t, e) {
  return new ae(t, e);
};
g.mergeOptions({
  closePopupOnClick: !0
});
g.include({
  openPopup: function(t, e, i) {
    return this._initOverlay(ae, t, e, i).openOn(this), this;
  },
  closePopup: function(t) {
    return t = arguments.length ? t : this._popup, t && t.close(), this;
  }
});
K.include({
  bindPopup: function(t, e) {
    return this._popup = this._initOverlay(ae, this._popup, t, e), this._popupHandlersAdded || (this.on({
      click: this._openPopup,
      keypress: this._onKeyPress,
      remove: this.closePopup,
      move: this._movePopup
    }), this._popupHandlersAdded = !0), this;
  },
  unbindPopup: function() {
    return this._popup && (this.off({
      click: this._openPopup,
      keypress: this._onKeyPress,
      remove: this.closePopup,
      move: this._movePopup
    }), this._popupHandlersAdded = !1, this._popup = null), this;
  },
  openPopup: function(t) {
    return this._popup && this._popup._prepareOpen(t) && this._popup.openOn(this._map), this;
  },
  closePopup: function() {
    return this._popup && this._popup.close(), this;
  },
  togglePopup: function() {
    return this._popup && this._popup.toggle(this), this;
  },
  isPopupOpen: function() {
    return this._popup ? this._popup.isOpen() : !1;
  },
  setPopupContent: function(t) {
    return this._popup && this._popup.setContent(t), this;
  },
  getPopup: function() {
    return this._popup;
  },
  _openPopup: function(t) {
    if (!(!this._popup || !this._map)) {
      vt(t);
      var e = t.layer || t.target;
      if (this._popup._source === e && !(e instanceof ht)) {
        this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
        return;
      }
      this._popup._source = e, this.openPopup(t.latlng);
    }
  },
  _movePopup: function(t) {
    this._popup.setLatLng(t.latlng);
  },
  _onKeyPress: function(t) {
    t.originalEvent.keyCode === 13 && this._openPopup(t);
  }
});
var he = J.extend({
  options: {
    pane: "tooltipPane",
    offset: [0, 0],
    direction: "auto",
    permanent: !1,
    sticky: !1,
    opacity: 0.9
  },
  onAdd: function(t) {
    J.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
  },
  onRemove: function(t) {
    J.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
  },
  getEvents: function() {
    var t = J.prototype.getEvents.call(this);
    return this.options.permanent || (t.preclick = this.close), t;
  },
  _initLayout: function() {
    var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
    this._contentNode = this._container = y("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + x(this));
  },
  _updateLayout: function() {
  },
  _adjustPan: function() {
  },
  _setPosition: function(t) {
    var e, i, n = this._map, o = this._container, s = n.latLngToContainerPoint(n.getCenter()), r = n.layerPointToContainerPoint(t), a = this.options.direction, h = o.offsetWidth, u = o.offsetHeight, l = _(this.options.offset), f = this._getAnchor();
    a === "top" ? (e = h / 2, i = u) : a === "bottom" ? (e = h / 2, i = 0) : a === "center" ? (e = h / 2, i = u / 2) : a === "right" ? (e = 0, i = u / 2) : a === "left" ? (e = h, i = u / 2) : r.x < s.x ? (a = "right", e = 0, i = u / 2) : (a = "left", e = h + (l.x + f.x) * 2, i = u / 2), t = t.subtract(_(e, i, !0)).add(l).add(f), k(o, "leaflet-tooltip-right"), k(o, "leaflet-tooltip-left"), k(o, "leaflet-tooltip-top"), k(o, "leaflet-tooltip-bottom"), v(o, "leaflet-tooltip-" + a), O(o, t);
  },
  _updatePosition: function() {
    var t = this._map.latLngToLayerPoint(this._latlng);
    this._setPosition(t);
  },
  setOpacity: function(t) {
    this.options.opacity = t, this._container && U(this._container, t);
  },
  _animateZoom: function(t) {
    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
    this._setPosition(e);
  },
  _getAnchor: function() {
    return _(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
  }
}), Fo = function(t, e) {
  return new he(t, e);
};
g.include({
  openTooltip: function(t, e, i) {
    return this._initOverlay(he, t, e, i).openOn(this), this;
  },
  closeTooltip: function(t) {
    return t.close(), this;
  }
});
K.include({
  bindTooltip: function(t, e) {
    return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(he, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
  },
  unbindTooltip: function() {
    return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
  },
  _initTooltipInteractions: function(t) {
    if (!(!t && this._tooltipHandlersAdded)) {
      var e = t ? "off" : "on", i = {
        remove: this.closeTooltip,
        move: this._moveTooltip
      };
      this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t;
    }
  },
  openTooltip: function(t) {
    return this._tooltip && this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this)), this;
  },
  closeTooltip: function() {
    if (this._tooltip)
      return this._tooltip.close();
  },
  toggleTooltip: function() {
    return this._tooltip && this._tooltip.toggle(this), this;
  },
  isTooltipOpen: function() {
    return this._tooltip.isOpen();
  },
  setTooltipContent: function(t) {
    return this._tooltip && this._tooltip.setContent(t), this;
  },
  getTooltip: function() {
    return this._tooltip;
  },
  _addFocusListeners: function() {
    this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
  },
  _addFocusListenersOnLayer: function(t) {
    m(t.getElement(), "focus", function() {
      this._tooltip._source = t, this.openTooltip();
    }, this), m(t.getElement(), "blur", this.closeTooltip, this);
  },
  _setAriaDescribedByOnLayer: function(t) {
    t.getElement().setAttribute("aria-describedby", this._tooltip._container.id);
  },
  _openTooltip: function(t) {
    !this._tooltip || !this._map || this._map.dragging && this._map.dragging.moving() || (this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0));
  },
  _moveTooltip: function(t) {
    var e = t.latlng, i, n;
    this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(e);
  }
});
var en = wt.extend({
  options: {
    iconSize: [12, 12],
    html: !1,
    bgPos: null,
    className: "leaflet-div-icon"
  },
  createIcon: function(t) {
    var e = t && t.tagName === "DIV" ? t : document.createElement("div"), i = this.options;
    if (i.html instanceof Element ? (Kt(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
      var n = _(i.bgPos);
      e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
    }
    return this._setIconStyles(e, "icon"), e;
  },
  createShadow: function() {
    return null;
  }
});
function Wo(t) {
  return new en(t);
}
wt.Default = Ct;
var kt = K.extend({
  options: {
    tileSize: 256,
    opacity: 1,
    updateWhenIdle: c.mobile,
    updateWhenZooming: !0,
    updateInterval: 200,
    zIndex: 1,
    bounds: null,
    minZoom: 0,
    maxZoom: void 0,
    maxNativeZoom: void 0,
    minNativeZoom: void 0,
    noWrap: !1,
    pane: "tilePane",
    className: "",
    keepBuffer: 2
  },
  initialize: function(t) {
    z(this, t);
  },
  onAdd: function() {
    this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
  },
  beforeAdd: function(t) {
    t._addZoomLimit(this);
  },
  onRemove: function(t) {
    this._removeAllTiles(), S(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
  },
  bringToFront: function() {
    return this._map && (Tt(this._container), this._setAutoZIndex(Math.max)), this;
  },
  bringToBack: function() {
    return this._map && (bt(this._container), this._setAutoZIndex(Math.min)), this;
  },
  getContainer: function() {
    return this._container;
  },
  setOpacity: function(t) {
    return this.options.opacity = t, this._updateOpacity(), this;
  },
  setZIndex: function(t) {
    return this.options.zIndex = t, this._updateZIndex(), this;
  },
  isLoading: function() {
    return this._loading;
  },
  redraw: function() {
    if (this._map) {
      this._removeAllTiles();
      var t = this._clampZoom(this._map.getZoom());
      t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
    }
    return this;
  },
  getEvents: function() {
    var t = {
      viewprereset: this._invalidateAll,
      viewreset: this._resetView,
      zoom: this._resetView,
      moveend: this._onMoveEnd
    };
    return this.options.updateWhenIdle || (this._onMove || (this._onMove = fi(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
  },
  createTile: function() {
    return document.createElement("div");
  },
  getTileSize: function() {
    var t = this.options.tileSize;
    return t instanceof p ? t : new p(t, t);
  },
  _updateZIndex: function() {
    this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
  },
  _setAutoZIndex: function(t) {
    for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), n = 0, o = e.length, s; n < o; n++)
      s = e[n].style.zIndex, e[n] !== this._container && s && (i = t(i, +s));
    isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
  },
  _updateOpacity: function() {
    if (!!this._map && !c.ielt9) {
      U(this._container, this.options.opacity);
      var t = +new Date(), e = !1, i = !1;
      for (var n in this._tiles) {
        var o = this._tiles[n];
        if (!(!o.current || !o.loaded)) {
          var s = Math.min(1, (t - o.loaded) / 200);
          U(o.el, s), s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0);
        }
      }
      i && !this._noPrune && this._pruneTiles(), e && (G(this._fadeFrame), this._fadeFrame = R(this._updateOpacity, this));
    }
  },
  _onOpaqueTile: Z,
  _initContainer: function() {
    this._container || (this._container = y("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
  },
  _updateLevels: function() {
    var t = this._tileZoom, e = this.options.maxZoom;
    if (t !== void 0) {
      for (var i in this._levels)
        i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (S(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
      var n = this._levels[t], o = this._map;
      return n || (n = this._levels[t] = {}, n.el = y("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), Z(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
    }
  },
  _onUpdateLevel: Z,
  _onRemoveLevel: Z,
  _onCreateLevel: Z,
  _pruneTiles: function() {
    if (!!this._map) {
      var t, e, i = this._map.getZoom();
      if (i > this.options.maxZoom || i < this.options.minZoom) {
        this._removeAllTiles();
        return;
      }
      for (t in this._tiles)
        e = this._tiles[t], e.retain = e.current;
      for (t in this._tiles)
        if (e = this._tiles[t], e.current && !e.active) {
          var n = e.coords;
          this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
        }
      for (t in this._tiles)
        this._tiles[t].retain || this._removeTile(t);
    }
  },
  _removeTilesAtZoom: function(t) {
    for (var e in this._tiles)
      this._tiles[e].coords.z === t && this._removeTile(e);
  },
  _removeAllTiles: function() {
    for (var t in this._tiles)
      this._removeTile(t);
  },
  _invalidateAll: function() {
    for (var t in this._levels)
      S(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
    this._removeAllTiles(), this._tileZoom = void 0;
  },
  _retainParent: function(t, e, i, n) {
    var o = Math.floor(t / 2), s = Math.floor(e / 2), r = i - 1, a = new p(+o, +s);
    a.z = +r;
    var h = this._tileCoordsToKey(a), u = this._tiles[h];
    return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n ? this._retainParent(o, s, r, n) : !1);
  },
  _retainChildren: function(t, e, i, n) {
    for (var o = 2 * t; o < 2 * t + 2; o++)
      for (var s = 2 * e; s < 2 * e + 2; s++) {
        var r = new p(o, s);
        r.z = i + 1;
        var a = this._tileCoordsToKey(r), h = this._tiles[a];
        if (h && h.active) {
          h.retain = !0;
          continue;
        } else
          h && h.loaded && (h.retain = !0);
        i + 1 < n && this._retainChildren(o, s, i + 1, n);
      }
  },
  _resetView: function(t) {
    var e = t && (t.pinch || t.flyTo);
    this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
  },
  _animateZoom: function(t) {
    this._setView(t.center, t.zoom, !0, t.noUpdate);
  },
  _clampZoom: function(t) {
    var e = this.options;
    return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
  },
  _setView: function(t, e, i, n) {
    var o = Math.round(e);
    this.options.maxZoom !== void 0 && o > this.options.maxZoom || this.options.minZoom !== void 0 && o < this.options.minZoom ? o = void 0 : o = this._clampZoom(o);
    var s = this.options.updateWhenZooming && o !== this._tileZoom;
    (!n || s) && (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), o !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
  },
  _setZoomTransforms: function(t, e) {
    for (var i in this._levels)
      this._setZoomTransform(this._levels[i], t, e);
  },
  _setZoomTransform: function(t, e, i) {
    var n = this._map.getZoomScale(i, t.zoom), o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
    c.any3d ? mt(t.el, o, n) : O(t.el, o);
  },
  _resetGrid: function() {
    var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, o = this._map.getPixelWorldBounds(this._tileZoom);
    o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [
      Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
      Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
    ], this._wrapY = e.wrapLat && !this.options.noWrap && [
      Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
      Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
    ];
  },
  _onMoveEnd: function() {
    !this._map || this._map._animatingZoom || this._update();
  },
  _getTiledPixelBounds: function(t) {
    var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), n = e.getZoomScale(i, this._tileZoom), o = e.project(t, this._tileZoom).floor(), s = e.getSize().divideBy(n * 2);
    return new C(o.subtract(s), o.add(s));
  },
  _update: function(t) {
    var e = this._map;
    if (!!e) {
      var i = this._clampZoom(e.getZoom());
      if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
        var n = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(n), s = o.getCenter(), r = [], a = this.options.keepBuffer, h = new C(
          o.getBottomLeft().subtract([a, -a]),
          o.getTopRight().add([a, -a])
        );
        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
          throw new Error("Attempted to load an infinite number of tiles");
        for (var u in this._tiles) {
          var l = this._tiles[u].coords;
          (l.z !== this._tileZoom || !h.contains(new p(l.x, l.y))) && (this._tiles[u].current = !1);
        }
        if (Math.abs(i - this._tileZoom) > 1) {
          this._setView(t, i);
          return;
        }
        for (var f = o.min.y; f <= o.max.y; f++)
          for (var d = o.min.x; d <= o.max.x; d++) {
            var B = new p(d, f);
            if (B.z = this._tileZoom, !!this._isValidTile(B)) {
              var tt = this._tiles[this._tileCoordsToKey(B)];
              tt ? tt.current = !0 : r.push(B);
            }
          }
        if (r.sort(function(N, ut) {
          return N.distanceTo(s) - ut.distanceTo(s);
        }), r.length !== 0) {
          this._loading || (this._loading = !0, this.fire("loading"));
          var W = document.createDocumentFragment();
          for (d = 0; d < r.length; d++)
            this._addTile(r[d], W);
          this._level.el.appendChild(W);
        }
      }
    }
  },
  _isValidTile: function(t) {
    var e = this._map.options.crs;
    if (!e.infinite) {
      var i = this._globalTileRange;
      if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
        return !1;
    }
    if (!this.options.bounds)
      return !0;
    var n = this._tileCoordsToBounds(t);
    return A(this.options.bounds).overlaps(n);
  },
  _keyToBounds: function(t) {
    return this._tileCoordsToBounds(this._keyToTileCoords(t));
  },
  _tileCoordsToNwSe: function(t) {
    var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), o = n.add(i), s = e.unproject(n, t.z), r = e.unproject(o, t.z);
    return [s, r];
  },
  _tileCoordsToBounds: function(t) {
    var e = this._tileCoordsToNwSe(t), i = new H(e[0], e[1]);
    return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
  },
  _tileCoordsToKey: function(t) {
    return t.x + ":" + t.y + ":" + t.z;
  },
  _keyToTileCoords: function(t) {
    var e = t.split(":"), i = new p(+e[0], +e[1]);
    return i.z = +e[2], i;
  },
  _removeTile: function(t) {
    var e = this._tiles[t];
    !e || (S(e.el), delete this._tiles[t], this.fire("tileunload", {
      tile: e.el,
      coords: this._keyToTileCoords(t)
    }));
  },
  _initTile: function(t) {
    v(t, "leaflet-tile");
    var e = this.getTileSize();
    t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = Z, t.onmousemove = Z, c.ielt9 && this.options.opacity < 1 && U(t, this.options.opacity);
  },
  _addTile: function(t, e) {
    var i = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), M(this._tileReady, this, t));
    this._initTile(o), this.createTile.length < 2 && R(M(this._tileReady, this, t, null, o)), O(o, i), this._tiles[n] = {
      el: o,
      coords: t,
      current: !0
    }, e.appendChild(o), this.fire("tileloadstart", {
      tile: o,
      coords: t
    });
  },
  _tileReady: function(t, e, i) {
    e && this.fire("tileerror", {
      error: e,
      tile: i,
      coords: t
    });
    var n = this._tileCoordsToKey(t);
    i = this._tiles[n], i && (i.loaded = +new Date(), this._map._fadeAnimated ? (U(i.el, 0), G(this._fadeFrame), this._fadeFrame = R(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (v(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
      tile: i.el,
      coords: t
    })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), c.ielt9 || !this._map._fadeAnimated ? R(this._pruneTiles, this) : setTimeout(M(this._pruneTiles, this), 250)));
  },
  _getTilePos: function(t) {
    return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
  },
  _wrapCoords: function(t) {
    var e = new p(
      this._wrapX ? Et(t.x, this._wrapX) : t.x,
      this._wrapY ? Et(t.y, this._wrapY) : t.y
    );
    return e.z = t.z, e;
  },
  _pxBoundsToTileRange: function(t) {
    var e = this.getTileSize();
    return new C(
      t.min.unscaleBy(e).floor(),
      t.max.unscaleBy(e).ceil().subtract([1, 1])
    );
  },
  _noTilesToLoad: function() {
    for (var t in this._tiles)
      if (!this._tiles[t].loaded)
        return !1;
    return !0;
  }
});
function Uo(t) {
  return new kt(t);
}
var yt = kt.extend({
  options: {
    minZoom: 0,
    maxZoom: 18,
    subdomains: "abc",
    errorTileUrl: "",
    zoomOffset: 0,
    tms: !1,
    zoomReverse: !1,
    detectRetina: !1,
    crossOrigin: !1,
    referrerPolicy: !1
  },
  initialize: function(t, e) {
    this._url = t, e = z(this, e), e.detectRetina && c.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
  },
  setUrl: function(t, e) {
    return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
  },
  createTile: function(t, e) {
    var i = document.createElement("img");
    return m(i, "load", M(this._tileOnLoad, this, e, i)), m(i, "error", M(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
  },
  getTileUrl: function(t) {
    var e = {
      r: c.retina ? "@2x" : "",
      s: this._getSubdomain(t),
      x: t.x,
      y: t.y,
      z: this._getZoomForUrl()
    };
    if (this._map && !this._map.options.crs.infinite) {
      var i = this._globalTileRange.max.y - t.y;
      this.options.tms && (e.y = i), e["-y"] = i;
    }
    return _i(this._url, w(e, this.options));
  },
  _tileOnLoad: function(t, e) {
    c.ielt9 ? setTimeout(M(t, this, null, e), 0) : t(null, e);
  },
  _tileOnError: function(t, e, i) {
    var n = this.options.errorTileUrl;
    n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
  },
  _onTileRemove: function(t) {
    t.tile.onload = null;
  },
  _getZoomForUrl: function() {
    var t = this._tileZoom, e = this.options.maxZoom, i = this.options.zoomReverse, n = this.options.zoomOffset;
    return i && (t = e - t), t + n;
  },
  _getSubdomain: function(t) {
    var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
    return this.options.subdomains[e];
  },
  _abortLoading: function() {
    var t, e;
    for (t in this._tiles)
      if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = Z, e.onerror = Z, !e.complete)) {
        e.src = Ut;
        var i = this._tiles[t].coords;
        S(e), delete this._tiles[t], this.fire("tileabort", {
          tile: e,
          coords: i
        });
      }
  },
  _removeTile: function(t) {
    var e = this._tiles[t];
    if (!!e)
      return e.el.setAttribute("src", Ut), kt.prototype._removeTile.call(this, t);
  },
  _tileReady: function(t, e, i) {
    if (!(!this._map || i && i.getAttribute("src") === Ut))
      return kt.prototype._tileReady.call(this, t, e, i);
  }
});
function nn(t, e) {
  return new yt(t, e);
}
var on = yt.extend({
  defaultWmsParams: {
    service: "WMS",
    request: "GetMap",
    layers: "",
    styles: "",
    format: "image/jpeg",
    transparent: !1,
    version: "1.1.1"
  },
  options: {
    crs: null,
    uppercase: !1
  },
  initialize: function(t, e) {
    this._url = t;
    var i = w({}, this.defaultWmsParams);
    for (var n in e)
      n in this.options || (i[n] = e[n]);
    e = z(this, e);
    var o = e.detectRetina && c.retina ? 2 : 1, s = this.getTileSize();
    i.width = s.x * o, i.height = s.y * o, this.wmsParams = i;
  },
  onAdd: function(t) {
    this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
    var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
    this.wmsParams[e] = this._crs.code, yt.prototype.onAdd.call(this, t);
  },
  getTileUrl: function(t) {
    var e = this._tileCoordsToNwSe(t), i = this._crs, n = D(i.project(e[0]), i.project(e[1])), o = n.min, s = n.max, r = (this._wmsVersion >= 1.3 && this._crs === Ji ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","), a = yt.prototype.getTileUrl.call(this, t);
    return a + di(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r;
  },
  setParams: function(t, e) {
    return w(this.wmsParams, t), e || this.redraw(), this;
  }
});
function Go(t, e) {
  return new on(t, e);
}
yt.WMS = on;
nn.wms = Go;
var et = K.extend({
  options: {
    padding: 0.1
  },
  initialize: function(t) {
    z(this, t), x(this), this._layers = this._layers || {};
  },
  onAdd: function() {
    this._container || (this._initContainer(), this._zoomAnimated && v(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
  },
  onRemove: function() {
    this.off("update", this._updatePaths, this), this._destroyContainer();
  },
  getEvents: function() {
    var t = {
      viewreset: this._reset,
      zoom: this._onZoom,
      moveend: this._update,
      zoomend: this._onZoomEnd
    };
    return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
  },
  _onAnimZoom: function(t) {
    this._updateTransform(t.center, t.zoom);
  },
  _onZoom: function() {
    this._updateTransform(this._map.getCenter(), this._map.getZoom());
  },
  _updateTransform: function(t, e) {
    var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), o = this._map.project(this._center, e), s = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
    c.any3d ? mt(this._container, s, i) : O(this._container, s);
  },
  _reset: function() {
    this._update(), this._updateTransform(this._center, this._zoom);
    for (var t in this._layers)
      this._layers[t]._reset();
  },
  _onZoomEnd: function() {
    for (var t in this._layers)
      this._layers[t]._project();
  },
  _updatePaths: function() {
    for (var t in this._layers)
      this._layers[t]._update();
  },
  _update: function() {
    var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
    this._bounds = new C(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
  }
}), sn = et.extend({
  options: {
    tolerance: 0
  },
  getEvents: function() {
    var t = et.prototype.getEvents.call(this);
    return t.viewprereset = this._onViewPreReset, t;
  },
  _onViewPreReset: function() {
    this._postponeUpdatePaths = !0;
  },
  onAdd: function() {
    et.prototype.onAdd.call(this), this._draw();
  },
  _initContainer: function() {
    var t = this._container = document.createElement("canvas");
    m(t, "mousemove", this._onMouseMove, this), m(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), m(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
  },
  _destroyContainer: function() {
    G(this._redrawRequest), delete this._ctx, S(this._container), b(this._container), delete this._container;
  },
  _updatePaths: function() {
    if (!this._postponeUpdatePaths) {
      var t;
      this._redrawBounds = null;
      for (var e in this._layers)
        t = this._layers[e], t._update();
      this._redraw();
    }
  },
  _update: function() {
    if (!(this._map._animatingZoom && this._bounds)) {
      et.prototype._update.call(this);
      var t = this._bounds, e = this._container, i = t.getSize(), n = c.retina ? 2 : 1;
      O(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", c.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
    }
  },
  _reset: function() {
    et.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
  },
  _initPath: function(t) {
    this._updateDashArray(t), this._layers[x(t)] = t;
    var e = t._order = {
      layer: t,
      prev: this._drawLast,
      next: null
    };
    this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
  },
  _addPath: function(t) {
    this._requestRedraw(t);
  },
  _removePath: function(t) {
    var e = t._order, i = e.next, n = e.prev;
    i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[x(t)], this._requestRedraw(t);
  },
  _updatePath: function(t) {
    this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
  },
  _updateStyle: function(t) {
    this._updateDashArray(t), this._requestRedraw(t);
  },
  _updateDashArray: function(t) {
    if (typeof t.options.dashArray == "string") {
      var e = t.options.dashArray.split(/[, ]+/), i = [], n, o;
      for (o = 0; o < e.length; o++) {
        if (n = Number(e[o]), isNaN(n))
          return;
        i.push(n);
      }
      t.options._dashArray = i;
    } else
      t.options._dashArray = t.options.dashArray;
  },
  _requestRedraw: function(t) {
    !this._map || (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || R(this._redraw, this));
  },
  _extendRedrawBounds: function(t) {
    if (t._pxBounds) {
      var e = (t.options.weight || 0) + 1;
      this._redrawBounds = this._redrawBounds || new C(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
    }
  },
  _redraw: function() {
    this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
  },
  _clear: function() {
    var t = this._redrawBounds;
    if (t) {
      var e = t.getSize();
      this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
    } else
      this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
  },
  _draw: function() {
    var t, e = this._redrawBounds;
    if (this._ctx.save(), e) {
      var i = e.getSize();
      this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
    }
    this._drawing = !0;
    for (var n = this._drawFirst; n; n = n.next)
      t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
    this._drawing = !1, this._ctx.restore();
  },
  _updatePoly: function(t, e) {
    if (!!this._drawing) {
      var i, n, o, s, r = t._parts, a = r.length, h = this._ctx;
      if (!!a) {
        for (h.beginPath(), i = 0; i < a; i++) {
          for (n = 0, o = r[i].length; n < o; n++)
            s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
          e && h.closePath();
        }
        this._fillStroke(h, t);
      }
    }
  },
  _updateCircle: function(t) {
    if (!(!this._drawing || t._empty())) {
      var e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
      o !== 1 && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, Math.PI * 2, !1), o !== 1 && i.restore(), this._fillStroke(i, t);
    }
  },
  _fillStroke: function(t, e) {
    var i = e.options;
    i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
  },
  _onClick: function(t) {
    for (var e = this._map.mouseEventToLayerPoint(t), i, n, o = this._drawFirst; o; o = o.next)
      i = o.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (n = i);
    this._fireEvent(n ? [n] : !1, t);
  },
  _onMouseMove: function(t) {
    if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
      var e = this._map.mouseEventToLayerPoint(t);
      this._handleMouseHover(t, e);
    }
  },
  _handleMouseOut: function(t) {
    var e = this._hoveredLayer;
    e && (k(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
  },
  _handleMouseHover: function(t, e) {
    if (!this._mouseHoverThrottled) {
      for (var i, n, o = this._drawFirst; o; o = o.next)
        i = o.layer, i.options.interactive && i._containsPoint(e) && (n = i);
      n !== this._hoveredLayer && (this._handleMouseOut(t), n && (v(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(M(function() {
        this._mouseHoverThrottled = !1;
      }, this), 32);
    }
  },
  _fireEvent: function(t, e, i) {
    this._map._fireDOMEvent(e, i || e.type, t);
  },
  _bringToFront: function(t) {
    var e = t._order;
    if (!!e) {
      var i = e.next, n = e.prev;
      if (i)
        i.prev = n;
      else
        return;
      n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
    }
  },
  _bringToBack: function(t) {
    var e = t._order;
    if (!!e) {
      var i = e.next, n = e.prev;
      if (n)
        n.next = i;
      else
        return;
      i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
    }
  }
});
function rn(t) {
  return c.canvas ? new sn(t) : null;
}
var zt = function() {
  try {
    return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
      return document.createElement("<lvml:" + t + ' class="lvml">');
    };
  } catch {
  }
  return function(t) {
    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
  };
}(), qo = {
  _initContainer: function() {
    this._container = y("div", "leaflet-vml-container");
  },
  _update: function() {
    this._map._animatingZoom || (et.prototype._update.call(this), this.fire("update"));
  },
  _initPath: function(t) {
    var e = t._container = zt("shape");
    v(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = zt("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[x(t)] = t;
  },
  _addPath: function(t) {
    var e = t._container;
    this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
  },
  _removePath: function(t) {
    var e = t._container;
    S(e), t.removeInteractiveTarget(e), delete this._layers[x(t)];
  },
  _updateStyle: function(t) {
    var e = t._stroke, i = t._fill, n = t.options, o = t._container;
    o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = zt("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = j(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = zt("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
  },
  _updateCircle: function(t) {
    var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
    this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
  },
  _setPath: function(t, e) {
    t._path.v = e;
  },
  _bringToFront: function(t) {
    Tt(t._container);
  },
  _bringToBack: function(t) {
    bt(t._container);
  }
}, Vt = c.vml ? zt : vi, Ft = et.extend({
  _initContainer: function() {
    this._container = Vt("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Vt("g"), this._container.appendChild(this._rootGroup);
  },
  _destroyContainer: function() {
    S(this._container), b(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
  },
  _update: function() {
    if (!(this._map._animatingZoom && this._bounds)) {
      et.prototype._update.call(this);
      var t = this._bounds, e = t.getSize(), i = this._container;
      (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), O(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
    }
  },
  _initPath: function(t) {
    var e = t._path = Vt("path");
    t.options.className && v(e, t.options.className), t.options.interactive && v(e, "leaflet-interactive"), this._updateStyle(t), this._layers[x(t)] = t;
  },
  _addPath: function(t) {
    this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
  },
  _removePath: function(t) {
    S(t._path), t.removeInteractiveTarget(t._path), delete this._layers[x(t)];
  },
  _updatePath: function(t) {
    t._project(), t._update();
  },
  _updateStyle: function(t) {
    var e = t._path, i = t.options;
    !e || (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
  },
  _updatePoly: function(t, e) {
    this._setPath(t, gi(t._parts, e));
  },
  _updateCircle: function(t) {
    var e = t._point, i = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || i, o = "a" + i + "," + n + " 0 1,0 ", s = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + i * 2 + ",0 " + o + -i * 2 + ",0 ";
    this._setPath(t, s);
  },
  _setPath: function(t, e) {
    t._path.setAttribute("d", e);
  },
  _bringToFront: function(t) {
    Tt(t._path);
  },
  _bringToBack: function(t) {
    bt(t._path);
  }
});
c.vml && Ft.include(qo);
function an(t) {
  return c.svg || c.vml ? new Ft(t) : null;
}
g.include({
  getRenderer: function(t) {
    var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
    return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
  },
  _getPaneRenderer: function(t) {
    if (t === "overlayPane" || t === void 0)
      return !1;
    var e = this._paneRenderers[t];
    return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
  },
  _createRenderer: function(t) {
    return this.options.preferCanvas && rn(t) || an(t);
  }
});
var hn = Pt.extend({
  initialize: function(t, e) {
    Pt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
  },
  setBounds: function(t) {
    return this.setLatLngs(this._boundsToLatLngs(t));
  },
  _boundsToLatLngs: function(t) {
    return t = A(t), [
      t.getSouthWest(),
      t.getNorthWest(),
      t.getNorthEast(),
      t.getSouthEast()
    ];
  }
});
function Vo(t, e) {
  return new hn(t, e);
}
Ft.create = Vt;
Ft.pointsToPath = gi;
st.geometryToLayer = Jt;
st.coordsToLatLng = Ge;
st.coordsToLatLngs = $t;
st.latLngToCoords = qe;
st.latLngsToCoords = oe;
st.getFeature = Lt;
st.asFeature = se;
g.mergeOptions({
  boxZoom: !0
});
var un = Q.extend({
  initialize: function(t) {
    this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
  },
  addHooks: function() {
    m(this._container, "mousedown", this._onMouseDown, this);
  },
  removeHooks: function() {
    b(this._container, "mousedown", this._onMouseDown, this);
  },
  moved: function() {
    return this._moved;
  },
  _destroy: function() {
    S(this._pane), delete this._pane;
  },
  _resetState: function() {
    this._resetStateTimeout = 0, this._moved = !1;
  },
  _clearDeferredResetState: function() {
    this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
  },
  _onMouseDown: function(t) {
    if (!t.shiftKey || t.which !== 1 && t.button !== 1)
      return !1;
    this._clearDeferredResetState(), this._resetState(), Ot(), Ae(), this._startPoint = this._map.mouseEventToContainerPoint(t), m(document, {
      contextmenu: vt,
      mousemove: this._onMouseMove,
      mouseup: this._onMouseUp,
      keydown: this._onKeyDown
    }, this);
  },
  _onMouseMove: function(t) {
    this._moved || (this._moved = !0, this._box = y("div", "leaflet-zoom-box", this._container), v(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
    var e = new C(this._point, this._startPoint), i = e.getSize();
    O(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
  },
  _finish: function() {
    this._moved && (S(this._box), k(this._container, "leaflet-crosshair")), At(), Ie(), b(document, {
      contextmenu: vt,
      mousemove: this._onMouseMove,
      mouseup: this._onMouseUp,
      keydown: this._onKeyDown
    }, this);
  },
  _onMouseUp: function(t) {
    if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
      this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(M(this._resetState, this), 0);
      var e = new H(
        this._map.containerPointToLatLng(this._startPoint),
        this._map.containerPointToLatLng(this._point)
      );
      this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
    }
  },
  _onKeyDown: function(t) {
    t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
  }
});
g.addInitHook("addHandler", "boxZoom", un);
g.mergeOptions({
  doubleClickZoom: !0
});
var ln = Q.extend({
  addHooks: function() {
    this._map.on("dblclick", this._onDoubleClick, this);
  },
  removeHooks: function() {
    this._map.off("dblclick", this._onDoubleClick, this);
  },
  _onDoubleClick: function(t) {
    var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, o = t.originalEvent.shiftKey ? i - n : i + n;
    e.options.doubleClickZoom === "center" ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
  }
});
g.addInitHook("addHandler", "doubleClickZoom", ln);
g.mergeOptions({
  dragging: !0,
  inertia: !0,
  inertiaDeceleration: 3400,
  inertiaMaxSpeed: 1 / 0,
  easeLinearity: 0.2,
  worldCopyJump: !1,
  maxBoundsViscosity: 0
});
var cn = Q.extend({
  addHooks: function() {
    if (!this._draggable) {
      var t = this._map;
      this._draggable = new rt(t._mapPane, t._container), this._draggable.on({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
    }
    v(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
  },
  removeHooks: function() {
    k(this._map._container, "leaflet-grab"), k(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
  },
  moved: function() {
    return this._draggable && this._draggable._moved;
  },
  moving: function() {
    return this._draggable && this._draggable._moving;
  },
  _onDragStart: function() {
    var t = this._map;
    if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
      var e = A(this._map.options.maxBounds);
      this._offsetLimit = D(
        this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
        this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
      ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
    } else
      this._offsetLimit = null;
    t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
  },
  _onDrag: function(t) {
    if (this._map.options.inertia) {
      var e = this._lastTime = +new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
      this._positions.push(i), this._times.push(e), this._prunePositions(e);
    }
    this._map.fire("move", t).fire("drag", t);
  },
  _prunePositions: function(t) {
    for (; this._positions.length > 1 && t - this._times[0] > 50; )
      this._positions.shift(), this._times.shift();
  },
  _onZoomEnd: function() {
    var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
    this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
  },
  _viscousLimit: function(t, e) {
    return t - (t - e) * this._viscosity;
  },
  _onPreDragLimit: function() {
    if (!(!this._viscosity || !this._offsetLimit)) {
      var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
      t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
    }
  },
  _onPreDragWrap: function() {
    var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, s = (n + e + i) % t - e - i, r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
    this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r;
  },
  _onDragEnd: function(t) {
    var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
    if (e.fire("dragend", t), n)
      e.fire("moveend");
    else {
      this._prunePositions(+new Date());
      var o = this._lastPos.subtract(this._positions[0]), s = (this._lastTime - this._times[0]) / 1e3, r = i.easeLinearity, a = o.multiplyBy(r / s), h = a.distanceTo([0, 0]), u = Math.min(i.inertiaMaxSpeed, h), l = a.multiplyBy(u / h), f = u / (i.inertiaDeceleration * r), d = l.multiplyBy(-f / 2).round();
      !d.x && !d.y ? e.fire("moveend") : (d = e._limitOffset(d, e.options.maxBounds), R(function() {
        e.panBy(d, {
          duration: f,
          easeLinearity: r,
          noMoveStart: !0,
          animate: !0
        });
      }));
    }
  }
});
g.addInitHook("addHandler", "dragging", cn);
g.mergeOptions({
  keyboard: !0,
  keyboardPanDelta: 80
});
var fn = Q.extend({
  keyCodes: {
    left: [37],
    right: [39],
    down: [40],
    up: [38],
    zoomIn: [187, 107, 61, 171],
    zoomOut: [189, 109, 54, 173]
  },
  initialize: function(t) {
    this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
  },
  addHooks: function() {
    var t = this._map._container;
    t.tabIndex <= 0 && (t.tabIndex = "0"), m(t, {
      focus: this._onFocus,
      blur: this._onBlur,
      mousedown: this._onMouseDown
    }, this), this._map.on({
      focus: this._addHooks,
      blur: this._removeHooks
    }, this);
  },
  removeHooks: function() {
    this._removeHooks(), b(this._map._container, {
      focus: this._onFocus,
      blur: this._onBlur,
      mousedown: this._onMouseDown
    }, this), this._map.off({
      focus: this._addHooks,
      blur: this._removeHooks
    }, this);
  },
  _onMouseDown: function() {
    if (!this._focused) {
      var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft;
      this._map._container.focus(), window.scrollTo(n, i);
    }
  },
  _onFocus: function() {
    this._focused = !0, this._map.fire("focus");
  },
  _onBlur: function() {
    this._focused = !1, this._map.fire("blur");
  },
  _setPanDelta: function(t) {
    var e = this._panKeys = {}, i = this.keyCodes, n, o;
    for (n = 0, o = i.left.length; n < o; n++)
      e[i.left[n]] = [-1 * t, 0];
    for (n = 0, o = i.right.length; n < o; n++)
      e[i.right[n]] = [t, 0];
    for (n = 0, o = i.down.length; n < o; n++)
      e[i.down[n]] = [0, t];
    for (n = 0, o = i.up.length; n < o; n++)
      e[i.up[n]] = [0, -1 * t];
  },
  _setZoomDelta: function(t) {
    var e = this._zoomKeys = {}, i = this.keyCodes, n, o;
    for (n = 0, o = i.zoomIn.length; n < o; n++)
      e[i.zoomIn[n]] = t;
    for (n = 0, o = i.zoomOut.length; n < o; n++)
      e[i.zoomOut[n]] = -t;
  },
  _addHooks: function() {
    m(document, "keydown", this._onKeyDown, this);
  },
  _removeHooks: function() {
    b(document, "keydown", this._onKeyDown, this);
  },
  _onKeyDown: function(t) {
    if (!(t.altKey || t.ctrlKey || t.metaKey)) {
      var e = t.keyCode, i = this._map, n;
      if (e in this._panKeys)
        (!i._panAnim || !i._panAnim._inProgress) && (n = this._panKeys[e], t.shiftKey && (n = _(n).multiplyBy(3)), i.panBy(n), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds));
      else if (e in this._zoomKeys)
        i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
      else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
        i.closePopup();
      else
        return;
      vt(t);
    }
  }
});
g.addInitHook("addHandler", "keyboard", fn);
g.mergeOptions({
  scrollWheelZoom: !0,
  wheelDebounceTime: 40,
  wheelPxPerZoomLevel: 60
});
var dn = Q.extend({
  addHooks: function() {
    m(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
  },
  removeHooks: function() {
    b(this._map._container, "wheel", this._onWheelScroll, this);
  },
  _onWheelScroll: function(t) {
    var e = Hi(t), i = this._map.options.wheelDebounceTime;
    this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
    var n = Math.max(i - (+new Date() - this._startTime), 0);
    clearTimeout(this._timer), this._timer = setTimeout(M(this._performZoom, this), n), vt(t);
  },
  _performZoom: function() {
    var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
    t._stop();
    var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, s = i ? Math.ceil(o / i) * i : o, r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
    this._delta = 0, this._startTime = null, r && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r));
  }
});
g.addInitHook("addHandler", "scrollWheelZoom", dn);
var jo = 600;
g.mergeOptions({
  tapHold: c.touchNative && c.safari && c.mobile,
  tapTolerance: 15
});
var _n = Q.extend({
  addHooks: function() {
    m(this._map._container, "touchstart", this._onDown, this);
  },
  removeHooks: function() {
    b(this._map._container, "touchstart", this._onDown, this);
  },
  _onDown: function(t) {
    if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
      var e = t.touches[0];
      this._startPos = this._newPos = new p(e.clientX, e.clientY), this._holdTimeout = setTimeout(M(function() {
        this._cancel(), this._isTapValid() && (m(document, "touchend", I), m(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
      }, this), jo), m(document, "touchend touchcancel contextmenu", this._cancel, this), m(document, "touchmove", this._onMove, this);
    }
  },
  _cancelClickPrevent: function t() {
    b(document, "touchend", I), b(document, "touchend touchcancel", t);
  },
  _cancel: function() {
    clearTimeout(this._holdTimeout), b(document, "touchend touchcancel contextmenu", this._cancel, this), b(document, "touchmove", this._onMove, this);
  },
  _onMove: function(t) {
    var e = t.touches[0];
    this._newPos = new p(e.clientX, e.clientY);
  },
  _isTapValid: function() {
    return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
  },
  _simulateEvent: function(t, e) {
    var i = new MouseEvent(t, {
      bubbles: !0,
      cancelable: !0,
      view: window,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY
    });
    i._simulated = !0, e.target.dispatchEvent(i);
  }
});
g.addInitHook("addHandler", "tapHold", _n);
g.mergeOptions({
  touchZoom: c.touch,
  bounceAtZoomLimits: !0
});
var mn = Q.extend({
  addHooks: function() {
    v(this._map._container, "leaflet-touch-zoom"), m(this._map._container, "touchstart", this._onTouchStart, this);
  },
  removeHooks: function() {
    k(this._map._container, "leaflet-touch-zoom"), b(this._map._container, "touchstart", this._onTouchStart, this);
  },
  _onTouchStart: function(t) {
    var e = this._map;
    if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
      var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
      this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), m(document, "touchmove", this._onTouchMove, this), m(document, "touchend touchcancel", this._onTouchEnd, this), I(t);
    }
  },
  _onTouchMove: function(t) {
    if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
      var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), o = i.distanceTo(n) / this._startDist;
      if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && o > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
        if (this._center = this._startLatLng, o === 1)
          return;
      } else {
        var s = i._add(n)._divideBy(2)._subtract(this._centerPoint);
        if (o === 1 && s.x === 0 && s.y === 0)
          return;
        this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
      }
      this._moved || (e._moveStart(!0, !1), this._moved = !0), G(this._animRequest);
      var r = M(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
      this._animRequest = R(r, this, !0), I(t);
    }
  },
  _onTouchEnd: function() {
    if (!this._moved || !this._zooming) {
      this._zooming = !1;
      return;
    }
    this._zooming = !1, G(this._animRequest), b(document, "touchmove", this._onTouchMove, this), b(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
  }
});
g.addInitHook("addHandler", "touchZoom", mn);
g.BoxZoom = un;
g.DoubleClickZoom = ln;
g.Drag = cn;
g.Keyboard = fn;
g.ScrollWheelZoom = dn;
g.TapHold = _n;
g.TouchZoom = mn;
var Ko = {
  __proto__: null,
  version: Sn,
  Control: V,
  control: Rt,
  Class: nt,
  Handler: Q,
  extend: w,
  bind: M,
  stamp: x,
  setOptions: z,
  Browser: c,
  Evented: It,
  Mixin: go,
  Util: kn,
  PosAnimation: Fi,
  Draggable: rt,
  DomEvent: lo,
  DomUtil: ho,
  Point: p,
  point: _,
  Bounds: C,
  bounds: D,
  Transformation: Te,
  transformation: Bt,
  LineUtil: Lo,
  PolyUtil: To,
  LatLng: P,
  latLng: T,
  LatLngBounds: H,
  latLngBounds: A,
  CRS: ot,
  Projection: bo,
  Layer: K,
  LayerGroup: gt,
  layerGroup: So,
  FeatureGroup: _t,
  featureGroup: Co,
  ImageOverlay: re,
  imageOverlay: No,
  VideoOverlay: Qi,
  videoOverlay: Do,
  SVGOverlay: tn,
  svgOverlay: Ro,
  DivOverlay: J,
  Popup: ae,
  popup: Ho,
  Tooltip: he,
  tooltip: Fo,
  icon: ko,
  DivIcon: en,
  divIcon: Wo,
  Marker: ie,
  marker: Eo,
  Icon: wt,
  GridLayer: kt,
  gridLayer: Uo,
  TileLayer: yt,
  tileLayer: nn,
  Renderer: et,
  Canvas: sn,
  canvas: rn,
  Path: ht,
  CircleMarker: ne,
  circleMarker: Zo,
  Circle: Ue,
  circle: Oo,
  Polyline: it,
  polyline: Ao,
  Polygon: Pt,
  polygon: Io,
  Rectangle: hn,
  rectangle: Vo,
  SVG: Ft,
  svg: an,
  GeoJSON: st,
  geoJSON: $i,
  geoJson: Bo,
  Map: g,
  map: co
}, lt = w(Ko, { noConflict: Xo }), je = Jo(), Yo = je.L;
je.L = lt;
function Xo() {
  return je.L = Yo, lt;
}
function Jo() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
L.Proj && (L.CRS.Baidu = new L.Proj.CRS("EPSG:900913", "+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs", {
  resolutions: function() {
    var t = 19, e = [];
    e[0] = Math.pow(2, 18);
    for (var i = 1; i < t; i++)
      e[i] = Math.pow(2, 18 - i);
    return e;
  }(),
  origin: [0, 0],
  bounds: L.bounds([20037508342789244e-9, 0], [0, 20037508342789244e-9])
}));
L.TileLayer.ChinaProvider = L.TileLayer.extend({
  initialize: function(t, e) {
    var i = L.TileLayer.ChinaProvider.providers;
    e = e || {};
    var n = t.split("."), o = n[0], s = n[1], r = n[2], a = i[o][s][r];
    e.subdomains = i[o].Subdomains, e.key = e.key || i[o].key, "tms" in i[o] && (e.tms = i[o].tms), L.TileLayer.prototype.initialize.call(this, a, e);
  },
  getTileUrl: function(t) {
    var e = {
      s: this._getSubdomain(t),
      x: t.x,
      y: t.y,
      z: this._getZoomForUrl()
    };
    if (this._map && !this._map.options.crs.infinite) {
      var i = this._globalTileRange.max.y - t.y;
      this.options.tms && (e.y = i), e["-y"] = i;
    }
    return e.sx = e.x >> 4, e.sy = (1 << e.z) - e.y >> 4, L.Util.template(this._url, L.Util.extend(e, this.options));
  }
});
L.TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    Normal: {
      Map: "//t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}",
      Annotion: "//t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}"
    },
    Satellite: {
      Map: "//t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}",
      Annotion: "//t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}"
    },
    Terrain: {
      Map: "//t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",
      Annotion: "//t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}"
    },
    Subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
    key: "174705aebfe31b79b3587279e211cb9a"
  },
  GaoDe: {
    Normal: {
      Map: "//webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
    },
    Satellite: {
      Map: "//webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
      Annotion: "//webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}"
    },
    Subdomains: ["1", "2", "3", "4"]
  },
  Google: {
    Normal: {
      Map: "//www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
    },
    Satellite: {
      Map: "//www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
      Annotion: "//www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"
    },
    Subdomains: []
  },
  Geoq: {
    Normal: {
      Map: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
      PurplishBlue: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      Gray: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
      Warm: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}"
    },
    Theme: {
      Hydro: "//thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}"
    },
    Subdomains: []
  },
  OSM: {
    Normal: {
      Map: "//{s}.tile.osm.org/{z}/{x}/{y}.png"
    },
    Subdomains: ["a", "b", "c"]
  },
  Baidu: {
    Normal: {
      Map: "//online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1"
    },
    Satellite: {
      Map: "//shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46",
      Annotion: "//online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020"
    },
    Subdomains: "0123456789",
    tms: !0
  },
  Tencent: {
    Normal: {
      Map: "//rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={-y}&type=vector&styleid=3"
    },
    Satellite: {
      Map: "//p{s}.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg"
    },
    Terrain: {
      Map: "//p{s}.map.gtimg.com/demTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg"
    },
    Subdomains: "0123"
  }
};
L.tileLayer.chinaProvider = function(t, e) {
  return new L.TileLayer.ChinaProvider(t, e);
};
const $o = `Basic ${btoa("admin:geoserver")}`;
async function Qo(t, e, i) {
  const o = await (await fetch(
    `${i}/geoserver/rest/workspaces/${t}/datastores/${t}${e}/featuretypes/${e}.json`,
    {
      headers: {
        Authorization: $o
      }
    }
  )).json(), { minx: s, miny: r, maxx: a, maxy: h } = o.featureType.nativeBoundingBox;
  return [
    [r, s],
    [h, a]
  ];
}
async function ts(t, e, i) {
  return (await Promise.all(e.map((o) => Qo(t, o, i)))).map((o, s) => ({ bounds: o, layers: `${t}:${e[s]}` }));
}
const es = /* @__PURE__ */ Ln({
  __name: "njhh-wms-map",
  props: {
    origin: { type: String, required: !0, default: "" }
  },
  emits: ["featureClick"],
  setup(t, { emit: e }) {
    const i = t, n = Tn();
    return bn(() => {
      const o = lt.map(n.value, {
        center: [34.15754, 117.20851],
        zoom: 15,
        zoomControl: !1
      });
      lt.tileLayer.chinaProvider("TianDiTu.Normal.Map", {
        key: "f2ae54b1dcb16d4a9f478401edf0054e",
        maxZoom: 18,
        minZoom: 5
      }).addTo(o), lt.tileLayer.chinaProvider("TianDiTu.Normal.Annotion", {
        key: "f2ae54b1dcb16d4a9f478401edf0054e",
        maxZoom: 18,
        minZoom: 5
      }).addTo(o);
      const s = "tongshan", r = ["guandao", "bengzhan"], a = `${i.origin}/geoserver/${s}/wms`, h = !0, u = "image/png";
      let l = [];
      ts(s, r, i.origin).then((f) => {
        l = f.map(
          (d) => lt.tileLayer.wms(a, {
            ...d,
            transparent: h,
            format: u
          }).addTo(o)
        );
      }), o.on("click", (f) => {
        const d = o.latLngToContainerPoint(f.latlng), B = o.getSize(), tt = l.map((W) => {
          const N = W._url, ut = {
            request: "GetFeatureInfo",
            service: "WMS",
            srs: "EPSG:4326",
            styles: W.wmsParams.styles,
            transparent: h,
            version: W.wmsParams.version,
            format: u,
            bbox: o.getBounds().toBBoxString(),
            height: B.y,
            width: B.x,
            layers: W.wmsParams.layers,
            query_layers: W.wmsParams.layers,
            info_format: "application/json",
            x: d.x,
            y: d.y
          };
          return fetch(N + lt.Util.getParamString(ut, N, !0)).then((ue) => ue.json());
        });
        Promise.all(tt).then((W) => {
          let N = [];
          W.forEach((ut) => {
            N = [...N, ...ut.features];
          }), e("featureClick", N);
        });
      });
    }), (o, s) => (hi(), ui("div", {
      ref_key: "mapElement",
      ref: n,
      style: { width: "100%", height: "100%" }
    }, null, 512));
  }
}), os = /* @__PURE__ */ li(es, [["__file", "C:/Users/chen-pc/WebstormProjects/njhh-ui/lib/njhh-wms-map.vue"]]);
export {
  ns as DemoUi,
  os as NjhhWmsMap
};
