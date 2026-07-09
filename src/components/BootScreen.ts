export function BootScreen(message: string): string {

    return `

        <div class="boot">

            <div class="boot-logo">

                MemoniaOS

            </div>

            <div class="boot-version">

                Version 0.2.2 RC

            </div>

            <div id="boot-message" class="boot-message">

                ${message}

            </div>

            <div class="boot-bar">

                <div id="boot-progress" class="boot-progress"></div>

            </div>

        </div>

    `

}