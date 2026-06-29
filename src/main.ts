import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

app.innerHTML = `
<div class="os">
    <div class="window">

        <div class="titlebar">
            <span>MemoniaOS v0.0.1</span>
        </div>

        <div class="content">

            <h1>MemoniaOS</h1>

            <p>Initializing...</p>

        </div>

    </div>
</div>
`