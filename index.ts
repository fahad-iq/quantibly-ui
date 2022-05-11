// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HelloWorld from "./src/components/HelloWorld";

const QuantiblyUi = {
  install(Vue: any) {
    Vue.components("hello-world", HelloWorld);
  },
};

export default QuantiblyUi;
