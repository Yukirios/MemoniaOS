export function StatusBar(message: string): string {

    return `
        <div class="status-bar">

            <span class="status-label">
                STATUS
            </span>

            <span id="status-text" class="status-text">
                ${message}
            </span>

        </div>
    `;

}