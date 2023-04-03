const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/meaganewaller/dev-blog-webring/main/webring.json`
const template = document.createElement("template");
template.innerHTML = `
<style>
.webring {
  background-image:var(--webring-devblog-bg);
  background-color:var(--webring-devblog-bgcolor);
  border:var(--webring-devblog-border);
  padding:var(--webring-devblog-padding);
  color:var(--webring-devblog-color);
  text-align: center;
  width:var(--webring-devblog-width);
  height:var(--webring-devblog-height);
  border-radius:var(--webring-devblog-borderradius);
  line-height:var(--webring-devblog-lineheight);
}
#copy h1 {
  font-family:var(--webring-devblog-fontfamily);
  font-size:var(--webring-devblog-titlesize);
  line-height:20px;
  letter-spacing:2px;
  color:var(--webring-devblog-title);
  margin:var(--webring-devblog-h1margin);
}
#copy {
font-family:var(--webring-devblog-textfamily);
font-size:var(--webring-devblog-textsize);
line-height:1em;
}
#copy a {
color:var(--webring-devblog-linkcolor);
text-decoration:none;
}
#copy p {
margin:var(--webring-devblog-textmargin);
}
.icon {
  font-size: 100px;
}
</style>

<div class="webring">
  <div class="icon">
  </div>

  <div id="copy">
  </div>
  <div class="icon">
  </div>
</div>
`;

interface SiteProps {
  url: string;
  name: string;
  owner: string;
}

export default class DevblogWebring extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const thisSite = this.getAttribute("site");

    fetch(DATA_FOR_WEBRING)
      .then((response) => response.json())
      .then((sites) => {
        // Find the current site in the data
        const matchedSiteIndex = sites.findIndex(
          (site: SiteProps) => site.url === thisSite
        );
        const matchedSite = sites[matchedSiteIndex];

        // let prevSiteIndex = matchedSiteIndex - 1;
        // if (prevSiteIndex === -1) prevSiteIndex = sites.length - 1;
        //
        // let nextSiteIndex = matchedSiteIndex + 1;
        // if (nextSiteIndex > sites.length) nextSiteIndex = 0;

        // const randomSiteIndex = this.getRandomInt(0, sites.length - 1);

        const cp = `
          <h1>Dev Blog Webring</h1>
          <p>
            This site, <a href="${matchedSite.url}">${matchedSite.name}</a> is sharing interesting posts about software development.
<br/>
            Thanks, <strong>${matchedSite.owner}</strong>!
          </p>
          <p class="nav">
            <a href="https://tonicfunk.neocities.org/">[Next]</a>
            <a href="https://toadtoadtoad.neocities.org/">[Prev]</a>
            <a href="https://josef.neocities.org/">[Rand]</a>
            <a href="https://yesterwebring.neocities.org/members.html">[Members]</a>
          </p>
        `;

        this.shadowRoot
          .querySelector("#copy")
          .insertAdjacentHTML("afterbegin", cp);
      });
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

customElements.get("webring-devblog") ||
  customElements.define('webring-devblog', DevblogWebring);
