// i18n
document.documentElement.lang = chrome.i18n.getUILanguage();

function applyLocale() {
    // Handle content
    const contentElements = document.querySelectorAll('[data-i18n-content]');
    contentElements.forEach(element => {
      const messageKey = element.getAttribute('data-i18n-content');
      if (messageKey) {
          try {
              element.textContent = chrome.i18n.getMessage(messageKey);
          } catch (e) {
              element.textContent = messageKey;
          }
      }
    });

    // Handle title attribute using data-i18n-title
    const titleDataElements = document.querySelectorAll('[data-i18n-title]');
    titleDataElements.forEach(element => {
      const messageKey = element.getAttribute('data-i18n-title');
      if (messageKey) {
          try {
              element.title = chrome.i18n.getMessage(messageKey);
          } catch (e) {
              element.title = messageKey;
          }
      }
    });

    const titleMsgElements = document.querySelectorAll('[title^="__MSG_"]');
    titleMsgElements.forEach(element => {
        const rawTitle = element.getAttribute('title');
        const messageKey = rawTitle.substring(6, rawTitle.length - 2);
        if (messageKey) {
            try {
                element.title = chrome.i18n.getMessage(messageKey);
            } catch (e) {
            }
        }
    });

    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(element => {
        const messageKey = element.getAttribute('data-i18n-html');
        if (messageKey) {
            try {
                element.innerHTML = chrome.i18n.getMessage(messageKey);
            } catch (e) {
                element.innerHTML = messageKey;
            }
        }
    });
  }

  // Apply translations on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLocale);
  } else {
    applyLocale();
  }