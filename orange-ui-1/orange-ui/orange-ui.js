import { defineComponent as y, computed as O, openBlock as i, createElementBlock as f, normalizeClass as w, createCommentVNode as C, renderSlot as $, ref as b, useSlots as D, onMounted as A, onUnmounted as M, createVNode as T, withCtx as S, createTextVNode as R, toDisplayString as B, Fragment as N, renderList as z, unref as k, createBlock as x, resolveDynamicComponent as P, useAttrs as X, reactive as G, createElementVNode as m, withDirectives as H, mergeProps as J, vModelDynamic as K, Teleport as U, watchEffect as F, createApp as L, h as j } from "vue";
const Q = ["disabled"], W = {
  key: 0,
  class: "loading-indicator"
}, E = /* @__PURE__ */ y({
  __name: "Button",
  props: {
    theme: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "normal"
    },
    level: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  setup(l) {
    const a = l, t = O(() => {
      const {
        theme: o,
        size: s,
        level: d
      } = a;
      return {
        [`orange-theme-${o}`]: o,
        [`orange-size-${s}`]: s,
        [`orange-level-${d}`]: d
      };
    });
    return (o, s) => (i(), f("button", {
      class: w(["orange-button", t.value]),
      disabled: a.disabled
    }, [l.loading ? (i(), f("div", W)) : C("", !0), $(o.$slots, "default")], 10, Q));
  }
}), Y = {
  key: 0,
  class: "dropdown"
}, Z = /* @__PURE__ */ y({
  __name: "Dropdown",
  props: {
    title: {
      type: String,
      default: "默认标题"
    },
    closeAfterClick: {
      type: Boolean,
      default: !1
    },
    closeClickOutside: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["clickItem"],
  setup(l, {
    emit: a
  }) {
    const t = l, o = a, s = b(!1), d = () => {
      s.value = !s.value;
    }, e = D().default(), u = (_, c) => {
      var r;
      (r = _.props) != null && r.disabled || (t.closeAfterClick && (s.value = !s.value), o("clickItem", c));
    }, p = b(null), v = (_) => {
      p.value && t.closeClickOutside && !p.value.contains(_.target) && s.value && (s.value = !1);
    };
    return A(() => {
      document.addEventListener("click", v), p.value && console.log(p);
    }), M(() => {
      document.removeEventListener("click", v);
    }), (_, c) => (i(), f("div", {
      class: "dropdown-wrapper",
      ref_key: "dropdownRef",
      ref: p
    }, [T(E, {
      level: "main",
      onClick: d
    }, {
      default: S(() => [R(B(t.title), 1)]),
      _: 1
    }), s.value ? (i(), f("div", Y, [(i(!0), f(N, null, z(k(e), (r, n) => (i(), x(P(r), {
      onClick: (g) => u(r, n),
      key: n
    }, null, 8, ["onClick"]))), 128))])) : C("", !0)], 512));
  }
}), I = (l, a) => {
  const t = l.__vccOpts || l;
  for (const [o, s] of a)
    t[o] = s;
  return t;
}, be = /* @__PURE__ */ I(Z, [["__scopeId", "data-v-6ef684ce"]]), ee = /* @__PURE__ */ y({
  __name: "DropdownItem",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(l) {
    const a = l;
    return (t, o) => (i(), f("div", {
      class: w(["orange-dropdown-item", {
        "orange-dropdown-item-disabled": a.disabled
      }])
    }, [$(t.$slots, "default", {}, void 0, !0)], 2));
  }
}), ke = /* @__PURE__ */ I(ee, [["__scopeId", "data-v-e20d4bc0"]]), te = {
  class: "validate-input-container pb-3"
}, se = {
  class: "orange-input-wrapper"
}, oe = ["type"], ne = ["xlink:href"], le = {
  key: 0,
  class: "invalid-feedback",
  style: {
    display: "block"
  }
}, ae = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "Input",
  props: {
    rules: {
      type: Array
    },
    modelValue: {
      type: String
    }
  },
  emits: ["update:modelValue"],
  setup(l, {
    emit: a
  }) {
    const t = X(), o = b(!1), s = l, d = a, e = G({
      val: s.modelValue || "",
      error: !1,
      message: ""
    }), u = (c) => {
      if (_(), c) {
        const r = c.target.value;
        e.val = r, d("update:modelValue", r);
      }
    }, p = b("text"), v = () => {
      o.value = !o.value, o.value ? p.value = "password" : p.value = "text";
    }, _ = () => {
      if (!s.rules)
        return !0;
      let c = !0, r = s.rules;
      for (let n = 0; n < r.length; n++)
        if (r[n].type == "required") {
          if (c = e.val.trim() !== "", !c) {
            e.error = !0, e.message = r[n].message;
            return;
          }
        } else if (r[n].type == "email") {
          if (c = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.val), !c) {
            e.error = !0, e.message = r[n].message;
            return;
          }
        } else if (r[n].type == "phone") {
          if (c = /^1[3-9]\d{9}$/.test(e.val), !c) {
            e.error = !0, e.message = r[n].message;
            return;
          }
        } else if (r[n].type == "idCard" && (c = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/.test(e.val), !c)) {
          e.error = !0, e.message = r[n].message;
          return;
        }
      return e.error = !1, e.message = "", console.log(e), c;
    };
    return (c, r) => (i(), f("div", te, [m("div", se, [H(m("input", J(k(t), {
      type: !o.value && k(t).type == "password" ? "password" : "text",
      class: ["form-control", {
        "is-invalid": e.error,
        disabled: k(t).hasOwnProperty("disabled")
      }],
      "onUpdate:modelValue": r[0] || (r[0] = (n) => e.val = n),
      onBlur: _,
      onInput: u
    }), null, 16, oe), [[K, e.val]]), k(t).type == "password" && s.modelValue ? (i(), f("svg", {
      key: 0,
      class: "orange-input-icon",
      onClick: v
    }, [m("use", {
      "xlink:href": o.value ? "#i-yanjing-kai" : "#i-yanjing-guan"
    }, null, 8, ne)])) : C("", !0)]), e.error ? (i(), f("div", le, B(e.message), 1)) : C("", !0)]));
  }
}), Ce = /* @__PURE__ */ I(ae, [["__scopeId", "data-v-2dea6b93"]]), re = {
  class: "orange-modal-wrapper"
}, ce = {
  class: "orange-modal"
}, ie = /* @__PURE__ */ y({
  __name: "Modal",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
    },
    confirm: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(l, {
    emit: a
  }) {
    const t = l, o = a, s = () => {
      o("update:visible", !1);
    }, d = () => {
      t.closeOnClickOverlay && s();
    }, e = () => {
      t.confirm && t.confirm() !== !1 && s();
    }, u = () => {
      t.confirm && t.cancel() !== !1 && s();
    };
    return (p, v) => t.visible ? (i(), x(U, {
      key: 0,
      to: "body"
    }, [m("div", {
      class: "orange-modal-overlay",
      onClick: d
    }), m("div", re, [m("div", ce, [m("header", null, [$(p.$slots, "title"), m("span", {
      class: "orange-modal-close",
      onClick: s
    })]), m("main", null, [$(p.$slots, "content")]), m("footer", null, [T(E, {
      level: "main",
      onClick: e
    }, {
      default: S(() => [R("确定")]),
      _: 1
    }), T(E, {
      onClick: u
    }, {
      default: S(() => [R("取消")]),
      _: 1
    })])])])])) : C("", !0);
  }
}), de = /* @__PURE__ */ m("span", {
  class: "circle"
}, null, -1), ue = [de], $e = /* @__PURE__ */ y({
  __name: "Switch",
  props: ["value"],
  emits: ["update:value"],
  setup(l, {
    emit: a
  }) {
    const t = l, o = a, s = () => {
      o("update:value", !t.value);
    };
    return (d, e) => (i(), f("button", {
      onClick: s,
      class: w(["orange-switch", {
        "orange-checked": t.value
      }])
    }, ue, 2));
  }
}), pe = {};
function me(l, a) {
  return i(), f("div", null, [$(l.$slots, "default")]);
}
const fe = /* @__PURE__ */ I(pe, [["render", me]]), ve = {
  class: "orange-tabs"
}, _e = ["onClick"], ge = {
  class: "orange-tabs-content"
}, we = /* @__PURE__ */ y({
  __name: "Tabs",
  props: {
    selected: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:selected"],
  setup(l, {
    emit: a
  }) {
    const t = l, o = a, s = D().default();
    s.forEach((n, g) => {
      if (n.type !== fe)
        throw new Error(`Tabs下的第${g + 1}个子组件不是Tab!`);
    });
    const d = s.map((n) => n.props.title), e = [];
    s.forEach((n) => {
      n.props.disabled && e.push(n.props.title);
    });
    const u = O(() => s.find((n) => n.props.title === t.selected)), p = (n) => {
      e.includes(n) || o("update:selected", n);
    }, v = b(null), _ = b(null), c = b(null), r = () => {
      const n = v.value.getBoundingClientRect().width;
      _.value.style.width = n + "px";
      const g = c.value.getBoundingClientRect().left, h = v.value.getBoundingClientRect().left;
      _.value.style.left = h - g + "px";
    };
    return A(() => {
      F(() => {
        r();
      });
    }), (n, g) => (i(), f("div", ve, [m("div", {
      class: "orange-tabs-nav",
      ref_key: "container",
      ref: c
    }, [(i(!0), f(N, null, z(k(d), (h, q) => (i(), f("div", {
      class: w(["orange-tabs-nav-item", {
        selected: h === t.selected,
        disabled: e.includes(h)
      }]),
      ref_for: !0,
      ref: (V) => {
        h === t.selected && (v.value = V);
      },
      onClick: (V) => p(h),
      key: q
    }, B(h), 11, _e))), 128)), m("div", {
      ref_key: "indicator",
      ref: _,
      class: "orange-tabs-nav-indicator"
    }, null, 512)], 512), m("div", ge, [(i(), x(P(u.value), {
      key: u.value.props.title
    }))])]));
  }
}), ye = /* @__PURE__ */ y({
  __name: "Toast",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "default"
    },
    message: {
      type: String,
      default: "这是一条默认信息"
    },
    duration: {
      type: Number,
      default: 2e3
    }
  },
  emits: ["update:visible"],
  setup(l, {
    emit: a
  }) {
    const t = document.createElement("div");
    t.id = "toast", document.body.appendChild(t), M(() => {
      document.body.removeChild(t);
    });
    const o = l, s = O(() => ({
      [`orange-toast-${o.type}`]: o.type
    })), d = a;
    let e = null;
    const u = () => {
      d("update:visible", !1), e && clearTimeout(e);
    };
    return F(() => {
      o.duration && o.visible && (e = setTimeout(() => {
        u();
      }, o.duration));
    }), (p, v) => (i(), x(U, {
      to: "#toast"
    }, [o.visible ? (i(), f("div", {
      key: 0,
      class: w(["orange-toast-wrapper", s.value])
    }, [m("div", null, B(o.message), 1), m("div", {
      class: "close-icon",
      onClick: u
    })], 2)) : C("", !0)]));
  }
}), Be = (l) => {
  const {
    title: a,
    content: t,
    closeOnClickOverlay: o,
    confirm: s,
    cancel: d
  } = l;
  console.log(a, t);
  const e = document.createElement("div");
  document.body.appendChild(e);
  const u = L({
    render() {
      return j(ie, {
        visible: !0,
        // 监听Modal组件自带的update事件,获取关闭与否
        // 如果newVisible是false,就是要关闭它
        "onUpdate:visible": (v) => {
          console.log(v), v === !1 && p();
        },
        closeOnClickOverlay: o,
        confirm: s,
        cancel: d
      }, {
        title: a,
        content: t
      });
    }
  }), p = () => {
    u.unmount(), document.body.removeChild(e);
  };
  u.mount(e);
}, xe = (l) => {
  const {
    message: a,
    type: t,
    duration: o
  } = l;
  console.log(l);
  const s = document.createElement("div");
  document.body.appendChild(s);
  const d = L({
    render() {
      return j(ye, {
        visible: !0,
        // 监听Toast组件自带的update事件,获取关闭与否
        // 如果newVisible是false,就是要关闭它
        "onUpdate:visible": (u) => {
          console.log(u), u === !1 && e();
        },
        message: a,
        type: t,
        duration: o
      });
    }
  }), e = () => {
    d.unmount(), document.body.removeChild(s);
  };
  d.mount(s);
};
export {
  E as Button,
  be as Dropdown,
  ke as DropdownItem,
  Ce as Input,
  ie as Modal,
  $e as Switch,
  fe as Tab,
  we as Tabs,
  ye as Toast,
  Be as openModal,
  xe as openToast
};
