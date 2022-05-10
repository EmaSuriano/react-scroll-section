export function throttle(this: any, func: Function, wait: number) {
  let timeout: number | null = null;
  let callbackArgs: IArguments | null = null;
  const context = this;

  const later = () => {
    func.apply(context, callbackArgs);
    timeout = null;
  };

  return function () {
    if (!timeout) {
      callbackArgs = arguments;
      timeout = setTimeout(later, wait);
    }
  };
}

export const isWindowDefine = () => typeof window !== 'undefined';

export const throttleEvent = function (
  type: string,
  name: string,
  obj?: HTMLElement | Window | Document,
) {
  obj = obj || (isWindowDefine() ? window : undefined);

  if (!Boolean(obj)) return;

  let running = false;

  let func = function () {
    if (running) {
      return;
    }
    running = true;
    requestAnimationFrame(function () {
      obj?.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };

  obj?.addEventListener(type, func);
};
