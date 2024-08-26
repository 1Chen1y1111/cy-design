// BEM 规范

function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifer: string,
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }
  if (element) {
    prefixName += `__${element}`
  }
  if (modifer) {
    prefixName += `--${modifer}`
  }
  return prefixName
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')

  const e = (element: string = '') =>
    element ? _bem(prefixName, '', element, '') : ''

  const m = (modifer: string = '') =>
    modifer ? _bem(prefixName, '', '', modifer) : ''

  const be = (blockSuffix: string = '', element: string = '') =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''

  const bm = (blockSuffix: string = '', modifer: string = '') =>
    blockSuffix && modifer ? _bem(prefixName, blockSuffix, '', modifer) : ''

  const em = (element: string = '', modifer: string = '') =>
    element && modifer ? _bem(prefixName, '', element, modifer) : ''

  const bem = (
    blockSuffix: string = '',
    element: string = '',
    modifer: string = '',
  ) =>
    blockSuffix && element && modifer
      ? _bem(prefixName, blockSuffix, element, modifer)
      : ''

  const is = (name: string, state: string | boolean) =>
    state ? `is-${name}` : ''

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  }
}

export function createNameSpace(name: string) {
  const prefixName = `cy-${name}`

  return createBEM(prefixName)
}

/*
const bem = createNameSpace("icon");

console.log(bem.b("box")); // cy-icon-box
console.log(bem.e("element")); // cy-icon__element
console.log(bem.m("modifier")); //cy-icon--modifier
console.log(bem.be("box", "element")); //cy-icon-box__element
console.log(bem.bm("box", "modifier")); //cy-icon-box--modifier
console.log(bem.em("element", "modifier")); //cy-icon__element--modifier
console.log(bem.bem("box", "element", "modifier")); //cy-icon-box__element--modifier
console.log(bem.is("checked", true)); //is-checked
 */
