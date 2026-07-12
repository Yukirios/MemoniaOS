import { themes } from "../data/themes";
import type { Theme } from "../types/theme";

export class ThemeService {

    private static current: Theme = themes[0];

    static initialize(): void {

        document.body.classList.add(this.current.className);

    }

    static currentTheme(): Theme {

        return this.current;

    }

    static set(id: string): void {

        const theme = themes.find(theme => theme.id === id);

        if (!theme) {
            return;
        }

        document.body.classList.remove(this.current.className);

        this.current = theme;

        document.body.classList.add(this.current.className);

    }

    static next(): void {

        const index = themes.indexOf(this.current);

        const next = (index + 1) % themes.length;

        this.set(themes[next].id);

    }

}