(function () {
  var root = document.documentElement;
  var KEY = "nanolize-safety-theme";

  function current() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* preference is a convenience only */ }
    });
  }

  var buttons = document.querySelectorAll("[data-filter]");
  var findings = document.querySelectorAll(".finding[data-sev]");
  function apply(filter) {
    var groups = { all: null, high: ["high"], medium: ["medium"], lower: ["lowmed", "low"] };
    var wanted = groups[filter];
    findings.forEach(function (item) {
      item.hidden = !!wanted && wanted.indexOf(item.getAttribute("data-sev")) < 0;
    });
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-filter") === filter));
    });
  }
  buttons.forEach(function (button) {
    button.addEventListener("click", function () { apply(button.getAttribute("data-filter")); });
  });
  // A link to one finding must show it even when a filter hides it.
  function reveal() {
    var target = location.hash && document.querySelector(location.hash);
    if (target && target.classList.contains("finding") && target.hidden) apply("all");
  }
  window.addEventListener("hashchange", reveal);
  reveal();
})();
