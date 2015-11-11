import Ember from 'ember';

export default Ember.Component.extend({

  imageURI: '',

  thumbURI: Ember.computed('imageURI', function () {
    return this.get('imageURI');
  }),

  isThumbnailAvailable: Ember.computed('thumbURI', function () {
    return !!this.get('thumbURI');
  }),

  _imageHTML: null,

  showFullImage: function (imageHTML) {
    var $img = this.$('img');

    if ($img.length && imageHTML) {
      $img.popover({ content: imageHTML, trigger: 'manual', html: true });

      $img.popover('show');
    }
  },

  loadFullImage: function () {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (this.get('_imageHTML')) {
        resolve(this.get('_imageHTML'));
      } else {
        let imageEl = new Image();

        imageEl.onload = () => {
          imageEl.onload = null;

          let imageHTML = imageEl.outerHTML;
          this.set('_imageHTML', imageHTML);

          resolve(imageHTML);
        };

        imageEl.onerror = () => {
          imageEl.onerror = null;

          reject();
        };

        imageEl.src = this.get('imageURI');
      }
    });
  },

  setupPopover: function () {
    var $img = this.$('img');

    $img.hover(() => {
      this.loadFullImage().then(imgHTML => this.showFullImage(imgHTML));
    }, () => {
      $img.popover('hide');
    });
  },

  didRender: function () {
    var $img = this.$('img');

    if (this.get('isThumbnailAvailable') && $img.length) {
      $img.on('error', () => {
        Ember.run(this, function () {
          if (!this.get('isDestroyed')) {
            this.set('isThumbnailAvailable', false);
          }
        });
      });

      this.setupPopover();
    }
  }
});
