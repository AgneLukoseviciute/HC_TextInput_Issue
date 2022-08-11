import React, { useContext } from "react";
import { ColorSchemeName, ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { IHighContrastColors } from "react-native-windows";

export enum Themes {
    Light = "light",
    Dark = "dark",
    HighContrastLight = "highContrastLight",
    HighContrastDark = "highContrastDark",
}

export const mapTheme = (
    theme: ColorSchemeName,
    isHighContrast?: boolean,
    highContrastColors?: IHighContrastColors
): Themes => {
    if (isHighContrast) {
        if (highContrastColors?.WindowColor === "#ffffff") {
            return Themes.HighContrastLight;
        }

        return Themes.HighContrastDark;
    } else {
        if (theme === "light") {
            return Themes.Light;
        }

        return Themes.Dark;
    }
};

export const ThemeContext = React.createContext(Themes.Dark);

export type ThemeMap<T extends StyleSheet.NamedStyles<T>> = {
    [index: string]: T;
};

export function _build<T>(themeMap: ThemeMap<T>): Readonly<ThemeMap<T>> {
    const newMap: ThemeMap<T> = {};
    newMap[Themes.Dark] = StyleSheet.create(themeMap[Themes.Dark]);

    for (const key in themeMap) {
        if (key === Themes.Dark) {
            continue;
        }
        const styleObj: T = {
            ...themeMap[Themes.Dark],
        };
        for (const styleKey in themeMap[Themes.Dark]) {
            styleObj[styleKey] = {
                ...themeMap[Themes.Dark][styleKey],
                ...themeMap[key][styleKey],
            };
        }
        newMap[key] = StyleSheet.create(styleObj);
    }

    return newMap;
}

export function _withTheme<T>(
    name: Themes,
    newStyle: { [P in keyof T]: ViewStyle | TextStyle | ImageStyle },
    themeMap: ThemeMap<T>
) {
    themeMap[name] = { ...themeMap[Themes.Dark], ...newStyle };
    return {
        withTheme: (themeName: Themes, newTheme: StyleSheet.NamedStyles<T>) =>
            _withTheme<T>(themeName, newTheme, themeMap),
        build: (): Readonly<ThemeMap<T>> => _build<T>(themeMap),
    };
}

export function createTheme<T extends StyleSheet.NamedStyles<T>>(baseStyle: T) {
    const themeMap: ThemeMap<T> = {
        [Themes.Dark]: baseStyle,
    };
    return {
        withTheme: (themeName: Themes, newTheme: { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }) =>
            _withTheme<T>(themeName, newTheme, themeMap),
        build: () => _build<T>(themeMap),
    };
}

export function useStyleForTheme<T>(map: ThemeMap<T>): Readonly<T> {
    const theme = useContext(ThemeContext);
    const value = map[theme];
    if (!value) {
        const firstKey = Object.keys(map)[0];
        return map[firstKey];
    } else {
        return value;
    }
}
