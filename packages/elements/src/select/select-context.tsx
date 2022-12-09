import { Accessor, createContext, useContext } from "solid-js";

import { ListState } from "../list";
import { FocusStrategy, KeyboardDelegate } from "../selection";

export interface SelectDataSet {}

export interface SelectContextValue {
  isOpen: Accessor<boolean>;
  isDisabled: Accessor<boolean>;
  isSingleSelectMode: Accessor<boolean>;
  autoFocus: Accessor<FocusStrategy | boolean>;
  triggerId: Accessor<string | undefined>;
  listboxId: Accessor<string | undefined>;
  listState: Accessor<ListState>;
  keyboardDelegate: Accessor<KeyboardDelegate>;
  toggle: (focusStrategy?: FocusStrategy) => void;
  setTriggerRef: (el: HTMLButtonElement) => void;
  generateId: (part: string) => string;
  registerTrigger: (id: string) => () => void;
  registerListbox: (id: string) => () => void;
}

export const SelectContext = createContext<SelectContextValue>();

export function useSelectContext() {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error("[kobalte]: `useSelectContext` must be used within a `Select` component");
  }

  return context;
}