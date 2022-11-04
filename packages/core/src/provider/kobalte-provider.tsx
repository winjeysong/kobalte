import { ColorModeProvider, ColorModeProviderProps } from "../color-mode";
import { ComponentConfig, ComponentConfigContext } from "../component-config";
import { watchModals } from "../modal";

interface KobalteProviderProps extends ColorModeProviderProps {
  /** Default props for global configuration of all components. */
  componentConfig?: ComponentConfig;
}

export function KobalteProvider(props: KobalteProviderProps) {
  watchModals();

  return (
    <ColorModeProvider
      storageManager={props.storageManager}
      disableTransitionOnChange={props.disableTransitionOnChange}
    >
      <ComponentConfigContext.Provider value={props.componentConfig}>
        {props.children}
      </ComponentConfigContext.Provider>
    </ColorModeProvider>
  );
}