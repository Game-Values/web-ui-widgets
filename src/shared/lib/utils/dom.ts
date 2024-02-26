export function wrapElement(target: Element, wrapper: Element): void {
    target.parentNode?.insertBefore(wrapper, target)
    wrapper.append(target)
}
