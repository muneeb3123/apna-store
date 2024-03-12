/** Shopify CDN: Minification failed

Line 17:4 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 18:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 22:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 26:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 31:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 37:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 38:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 39:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 43:8 Transforming const to the configured target environment ("es5") is not supported yet

**/
if (!customElements.get('product-modal')) {
  customElements.define(
    'product-modal',
    class ProductModal extends ModalDialog {
      constructor() {
        super();
      }

      hide() {
        super.hide();
      }

      show(opener) {
        super.show(opener);
        this.showActiveMedia();
      }

      showActiveMedia() {
        this.querySelectorAll(
          `[data-media-id]:not([data-media-id="${this.openedBy.getAttribute('data-media-id')}"])`
        ).forEach((element) => {
          element.classList.remove('active');
        });
        const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute('data-media-id')}"]`);
        const activeMediaTemplate = activeMedia.querySelector('template');
        const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
        activeMedia.classList.add('active');
        activeMedia.scrollIntoView();

        const container = this.querySelector('[role="document"]');
        container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;

        if (
          activeMedia.nodeName == 'DEFERRED-MEDIA' &&
          activeMediaContent &&
          activeMediaContent.querySelector('.js-youtube')
        )
          activeMedia.loadContent();
      }
    }
  );
}
