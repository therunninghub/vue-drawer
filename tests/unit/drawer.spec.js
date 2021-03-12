import { shallowMount } from "@vue/test-utils";
import Drawer from "../../src/index.vue";

describe("Drawer.vue", () => {
  it("renders props.position when passed", () => {
    const position = "left";
    const wrapper = shallowMount(Drawer, {
      propsData: { position },
      slots: {
        default: "<div>hello</div>",
      },
    });

    expect(wrapper.vm.enterClass).toBe("animated slideInLeft");
    expect(wrapper.vm.leaveClass).toBe("animated slideOutLeft");
  });

  it("renders default slots when passed", () => {
    const wrapper = shallowMount(Drawer, {
      slots: {
        default: "<div>hello</div>",
      },
    });

    expect(wrapper.find(".vue-drawer").isVisible()).toBeTruthy();
    expect(wrapper.find(".mask").isVisible()).toBeTruthy();
  });

  it("renders props with mask false when passed", () => {
    const wrapper = shallowMount(Drawer, {
      propsData: { mask: false },
      slots: {
        default: "<div>hello</div>",
      },
    });

    expect(wrapper.find(".vue-drawer").isVisible()).toBeTruthy();
    expect(wrapper.find(".mask").exists()).not.toBeTruthy();
  });

  it("renders props with close event", () => {
    const wrapper = shallowMount(Drawer, {
      propsData: { mask: false, closeable: true, maskClosable: true },
      slots: {
        default: "<div>hello</div>",
      },
    });
    const stub = jest.fn();
    wrapper.vm.$on("close", stub);
    wrapper.find(".close-btn").trigger("click");
    expect(stub).toHaveBeenCalled();
  });

  it("renders props with close by mask event", () => {
    const wrapper = shallowMount(Drawer, {
      propsData: { mask: true, closeable: true, maskClosable: true },
      slots: {
        default: "<div>hello</div>",
      },
    });
    const stub = jest.fn();
    wrapper.vm.$on("close", stub);
    wrapper.find(".mask").trigger("click");
    expect(stub).toHaveBeenCalled();
  });

  it("renders props with maskClosable as false", () => {
    const wrapper = shallowMount(Drawer, {
      propsData: { mask: true, closeable: true, maskClosable: false },
      slots: {
        default: "<div>hello</div>",
      },
    });
    const stub = jest.fn();
    wrapper.vm.$on("close", stub);
    wrapper.find(".mask").trigger("click");
    expect(stub).not.toHaveBeenCalled();
  });

  it("renders props with zIndex as 10002", () => {
    const wrapper = shallowMount(Drawer, {
      propsData: {
        mask: true,
        closeable: true,
        maskClosable: false,
        zIndex: 10002,
      },
      slots: {
        default: "<div>hello</div>",
      },
    });
    expect(wrapper.vm.computedIndex).toEqual(10002);
  });

  it("renders props with zIndex as default", () => {
    const wrapper = shallowMount(Drawer, {
      propsData: {
        mask: true,
        closeable: true,
        maskClosable: false,
      },
      slots: {
        default: "<div>hello</div>",
      },
    });
    expect(wrapper.vm.computedIndex).toEqual(1000);
  });
});
