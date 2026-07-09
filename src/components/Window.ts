import { Archive } from "./Archive";
import { StatusBar } from "./StatusBar";

export function Window(): string {

    return `
        <div class="os">

            <div class="window">

                <div class="titlebar">

                    <span>MemoniaOS v0.2.1 RC</span>

                    <div class="window-buttons">

                        <span>─</span>
                        <span>□</span>
                        <span>✕</span>

                    </div>

                </div>

                <div class="content">

                    <div class="workspace">

                        <section class="evaluation">

                            <h1>MemoniaOS</h1>

                            <div id="rating-container"></div>

                        </section>

                        <aside id="archive-container">

                            ${Archive([])}

                        </aside>

                    </div>

                </div>

                ${StatusBar("READY")}

            </div>

        </div>
    `;

}