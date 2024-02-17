export type IKeyboardEvent<T extends HTMLElement> = KeyboardEvent & { currentTarget: T }

export type IMouseEvent<T extends HTMLElement> = MouseEvent & { currentTarget: T }
