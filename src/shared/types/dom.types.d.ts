export type IKeyboardEvent<T extends HTMLElement, V = never> = CustomEvent<V> & { currentTarget: T }

export type IMouseEvent<T extends HTMLElement, V = never> = CustomEvent<V> & { currentTarget: T }
