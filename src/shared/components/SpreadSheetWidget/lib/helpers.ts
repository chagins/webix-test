import { SpreadSheetWidgetConfig, SpreadSheetWidgetProps } from './types';

export const shallowCompareConfig = (
  prevProps: SpreadSheetWidgetProps,
  nextProps: SpreadSheetWidgetProps
): boolean => {
  const prevConfig = prevProps.config;
  const nextConfig = nextProps.config;

  if (prevConfig === nextConfig) {
    return true;
  }

  if (!prevConfig || !nextConfig) {
    return false;
  }

  const prevKeys = Object.keys(prevConfig) as Array<keyof SpreadSheetWidgetConfig>;
  const nextKeys = Object.keys(nextConfig) as Array<keyof SpreadSheetWidgetConfig>;

  if (prevKeys.length !== nextKeys.length) {
    return false;
  }

  return prevKeys.every((key) => prevConfig[key] === nextConfig[key]);
};
