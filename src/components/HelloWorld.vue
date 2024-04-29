
<script>
export default {
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      body: {
        component: [
          {
            component: "div",
            children: [
              {
                component: "div",
                children: [
                  {
                    component: "button",
                    events: ["console.log(123)"],
                    methods: {
                      xxx: "function(){}",
                    },
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "button",
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "button",
              },
            ],
          },
        ],
      },
    };
  },
  render(h) {
    const renderComponentTree = (components) => {
      return components.map((element) => {
        let vnode;
        if (element.children) {
          vnode = h(
            element.component,
            {},
            renderComponentTree(element.children)
          );
        } else {
          vnode = h(
            element.component,
            {
              on: {
                click: () => {
                  new Function(
                    "a",
                    "b",
                    "function xxxx(a,b){\n    console.log(a,b,c())\n    function c(){\n        return 1\n    }\n};xxxx(a,b);"
                  ).call(this, this.msg, "333");
                },
              },
            },
            element.component
          );
        }
        return vnode;
      });
    };

    return h("div", {}, [
      renderComponentTree(this.body.component),
      h("div", {}, "代码编辑器"),
    ]);
  },
};
</script>