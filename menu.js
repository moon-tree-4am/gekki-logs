document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    
    // 判定用のフラグ
    const isColumnPage = currentPath.includes("column_");
    // モノローグ本体、またはアーカイブ（diary_）が含まれる場合にメニューを開く
    const isMonologuePage = currentPath.includes("monologue.html") || currentPath.includes("diary_");

    const navHTML = `
        <h2>AM 4:00の境界線</h2>
        <div class="menu-group">
            <span class="menu-title">Information</span>
            <ul>
                <li><a href="main.html">Home (拠点)</a></li>
                <li><a href="about.html">About (標本)</a></li>
            </ul>
        </div>
        <div class="menu-group">
            <span class="menu-title">Fragments</span>
            <ul>
                <li>
                    <a href="monologue.html">Monologue (独白)</a>
                    <ul class="sub-menu" style="list-style: none; padding-left: 15px; margin-top: 5px; display: ${isMonologuePage ? 'block' : 'none'};">
                        <li><a href="diary_202604.html">・2026.04</a></li>
                        <li><a href="diary_202605.html">・2026.05</a></li>
                    </ul>
                </li>
                <li>
                    <a href="column_01.html">Column (断片)</a>
                    <ul class="sub-menu" style="list-style: none; padding-left: 15px; margin-top: 5px; display: ${isColumnPage ? 'block' : 'none'};">
                        <li><a href="column_01.html">① 黎明と混迷</a></li>
                        <li><a href="column_02.html">② 隔絶された日常</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="menu-group">
            <span class="menu-title">Connection</span>
            <ul>
                <li><a href="links.html">Links</a></li>
                <li><a href="https://www.google.com" style="color:#444; margin-top: 20px;">Exit</a></li>
            </ul>
        </div>
    `;

    const navElement = document.querySelector("nav");
    if (navElement) {
        navElement.innerHTML = navHTML;

        const links = navElement.querySelectorAll("a");
        links.forEach(link => {
            const href = link.getAttribute("href");
            if (href && !href.startsWith('http')) {
                if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'main.html')) {
                    link.classList.add("current-page");
                }
            }
        });
    }
});
