import type { Text, View, ImageRequireSource, ImageProps } from 'react-native'
import type { MenuContentProps as RadixContentProps } from '@radix-ui/react-dropdown-menu'
import type { ContextMenuView } from 'react-native-ios-context-menu'
import type { ImageSystemSymbolConfiguration } from 'react-native-ios-context-menu/lib/typescript/types/ImageItemConfig'

type ViewStyle = React.ComponentProps<typeof View>['style']
type TextStyle = React.ComponentProps<typeof Text>['style']

export type MenuRootProps = {
  children: React.ReactNode
  style?: ViewStyle
  onOpenChange?: (isOpen: boolean) => void
}
export type MenuTriggerProps = {
  children: React.ReactElement
  style?: ViewStyle
}

export type MenuContentProps = {
  children: React.ReactNode
  style?: ViewStyle
} & Pick<
  RadixContentProps,
  | 'loop'
  | 'side'
  | 'align'
  | 'alignOffset'
  | 'avoidCollisions'
  | 'collisionTolerance'
  | 'sideOffset'
>

export type ContextMenuContentProps = Omit<MenuContentProps, 'side' | 'align'>

export type MenuGroupProps = {
  children: React.ReactNode
  style?: ViewStyle
}

export type MenuItemProps = (
  | {
      children: string
      style?: TextStyle
    }
  | {
      children: React.ReactNode
      style?: ViewStyle
    }
) & {
  onSelect?: () => void
  textValue?: string
  disabled?: boolean
  hidden?: boolean
  destructive?: boolean
  onFocus?: () => void
  onBlur?: () => void
  key: string
}

export interface MenuItemCommonProps {
  /**
   * The name of an iOS-only SF Symbol. For a full list, see https://developer.apple.com/sf-symbols/.
   * @deprecated Please use the `name` inside of the `ios` prop instead.
   * @platform ios
   */
  iosIconName?: string
  /**
   * Icon configuration to be used on iOS. You can pass a SF Symbol icon using the `name` prop.
   * Additionally, you can configure the SF Symbol's features like weight, scale, color etc. by passing
   * the corresponding props. Note that some of those features require iOS 15+. For the full list of options,
   * refer to the ImageSystemSymbolConfiguration type in react-native-ios-context-menu
   *
   * @platform ios
   */
  ios?: ImageSystemSymbolConfiguration & {
    name: string
  }
  /**
   * The name of an android-only resource drawable. For a full list, see https://developer.android.com/reference/android/R.drawable.html.
   *
   * @platform android
   */
  androidIconName?: string
}

export type MenuItemIconProps = MenuItemCommonProps & {
  /**
   * You can also pass the icon as a React Native component child. This will only work on Web, not iOS or android.
   */
  children?: React.ReactNode
  style?: ViewStyle
}

export type MenuItemImageProps = MenuItemCommonProps & {
  /**
   * `source={require('path/to/image')}`
   */
  source: ImageRequireSource
  style?: ImageProps['style']
  width?: number
  height?: number
  resizeMode?: ImageProps['resizeMode']
  fadeDuration?: ImageProps['fadeDuration']
} & Pick<ImageProps, 'accessibilityLabel'>

export type MenuTriggerItemProps = Omit<
  MenuItemProps,
  keyof Pick<MenuItemProps, 'onSelect'>
> & {
  key: string
}
export type MenuItemTitleProps = {
  children: string
  style?: TextStyle
}
export type MenuItemSubtitleProps = {
  children: string
  style?: TextStyle
}
export type MenuSeparatorProps = {
  style?: ViewStyle
}
export type MenuCheckboxItemProps = Omit<MenuItemProps, 'onSelect'> & {
  value: 'mixed' | 'on' | 'off'
  onValueChange?: (
    state: 'mixed' | 'on' | 'off',
    prevState: 'mixed' | 'on' | 'off'
  ) => void
  key: string
}

export type MenuItemIndicatorProps = {
  style?: ViewStyle
  children?: React.ReactNode
}

export type MenuLabelProps = {
  children: string
  style?: TextStyle
}

type Not<T extends object, O extends keyof NonNullable<T>> = Omit<T, O>

export type ContextMenuPreviewProps = {
  children: React.ReactNode | (() => React.ReactNode)
  size?: NonNullable<
    React.ComponentProps<typeof ContextMenuView>['previewConfig']
  >['previewSize']
  onPress?: React.ComponentProps<typeof ContextMenuView>['onPressMenuPreview']
} & Not<
  NonNullable<React.ComponentProps<typeof ContextMenuView>['previewConfig']>,
  'targetViewNode' | 'previewSize' | 'previewType'
>
