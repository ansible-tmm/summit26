/**
 * Open Interact / Arcade / YouTube (and full ansible-f1 theme pages) in-page like the Built to Automate billboard overlay.
 * Note: interact.redhat.com forbids iframe embedding on third-party origins — those URLs use an in-modal launch panel instead.
 */
(function () {
  "use strict";

  /** @param {string} raw */
  function toIframeSrc(raw) {
    try {
      var u = new URL(raw, window.location.href);
      var host = u.hostname.replace(/^www\./, "");

      if (host === "youtube.com") {
        if (u.pathname === "/watch") {
          var v = u.searchParams.get("v");
          if (v) return "https://www.youtube.com/embed/" + v + "?rel=0";
        }
        if (u.pathname.startsWith("/embed/")) return u.toString();
      }
      if (host === "youtu.be") {
        var id = u.pathname.replace(/^\//, "").split("/")[0];
        if (id) return "https://www.youtube.com/embed/" + id + "?rel=0";
      }

      if (host.indexOf("arcade.software") !== -1) {
        if (!u.searchParams.has("embed")) u.searchParams.set("embed", "true");
        u.searchParams.set("embed_mobile", "tab");
        u.searchParams.set("embed_desktop", "inline");
        return u.toString();
      }

      return u.toString();
    } catch {
      return raw;
    }
  }

  /** @param {string} href */
  function isInteractUrl(href) {
    try {
      var u = new URL(href, window.location.href);
      return u.hostname.replace(/^www\./, "").indexOf("interact.redhat.com") !== -1;
    } catch {
      return false;
    }
  }

  /** @param {string} href */
  function shouldOpenInModal(href) {
    try {
      var u = new URL(href, window.location.href);
      if (u.protocol !== "http:" && u.protocol !== "https:") return false;
      var host = u.hostname.replace(/^www\./, "");
      if (host.indexOf("interact.redhat.com") !== -1) return true;
      if (host.indexOf("arcade.software") !== -1) return true;
      if (host === "youtube.com" || host === "youtu.be") return true;
      if (host.indexOf("github.io") !== -1 && u.pathname.indexOf("ansible-f1") !== -1) return true;
      return false;
    } catch {
      return false;
    }
  }

  function init() {
    var overlay = document.getElementById("booth-demo-overlay");
    var iframe = document.getElementById("booth-demo-iframe");
    var titleEl = document.getElementById("booth-demo-title");
    var externalLink = document.getElementById("booth-demo-open-external");
    var fallback = document.getElementById("booth-demo-fallback");
    var launchBtn = document.getElementById("booth-demo-launch");
    if (!overlay || !iframe || !titleEl) return;

    var lastFocus = null;

    function closeModal() {
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      overlay.removeAttribute("data-demo-url");
      iframe.removeAttribute("src");
      iframe.removeAttribute("hidden");
      iframe.title = "";
      if (fallback) fallback.setAttribute("hidden", "");
      document.body.classList.remove("booth-demo-open");
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }

    function openModal(anchor) {
      var href = anchor.getAttribute("href");
      if (!href) return;
      var title =
        (anchor.querySelector(".demo-card-title") &&
          anchor.querySelector(".demo-card-title").textContent.trim()) ||
        "Demo";
      lastFocus = document.activeElement;
      titleEl.textContent = title;
      overlay.setAttribute("data-demo-url", href);

      if (externalLink) {
        externalLink.href = href;
      }

      var useInteractFallback = isInteractUrl(href);

      if (useInteractFallback && fallback) {
        iframe.removeAttribute("src");
        iframe.setAttribute("hidden", "");
        iframe.title = title;
        fallback.removeAttribute("hidden");
      } else {
        if (fallback) fallback.setAttribute("hidden", "");
        iframe.removeAttribute("hidden");
        iframe.title = title;
        iframe.src = toIframeSrc(href);
      }

      overlay.classList.remove("hidden");
      overlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("booth-demo-open");

      if (useInteractFallback && launchBtn) {
        launchBtn.focus();
      } else {
        var closeBtn = overlay.querySelector(".booth-demo-close");
        if (closeBtn) closeBtn.focus();
      }
    }

    if (launchBtn) {
      launchBtn.addEventListener("click", function () {
        var u = overlay.getAttribute("data-demo-url");
        if (u) window.open(u, "_blank", "noopener,noreferrer");
      });
    }

    document.addEventListener(
      "click",
      function (e) {
        var a = e.target.closest && e.target.closest("a.demo-card");
        if (!a) return;
        var href = a.getAttribute("href");
        if (!href || !shouldOpenInModal(href)) return;

        if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

        e.preventDefault();
        openModal(a);
      },
      true
    );

    overlay.addEventListener("click", function (e) {
      if (e.target.closest("[data-demo-close]")) closeModal();
    });

    document.addEventListener("keydown", function (e) {
      if (e.code !== "Escape") return;
      if (overlay.classList.contains("hidden")) return;
      closeModal();
      e.preventDefault();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
