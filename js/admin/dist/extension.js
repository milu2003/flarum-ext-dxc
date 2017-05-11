'use strict';

System.register('milu2003/dxc/components/DxcApiSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, DxcApiSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      DxcApiSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(DxcApiSettingsModal, _SettingsModal);

        function DxcApiSettingsModal() {
          babelHelpers.classCallCheck(this, DxcApiSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (DxcApiSettingsModal.__proto__ || Object.getPrototypeOf(DxcApiSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(DxcApiSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'DxcApiSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('flarum-ext-dxc.admin.api_key');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-ext-dxc.admin.api_key')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-ext-dxc.app_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-ext-dxc.admin.api_key')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-ext-dxc.app_secret') })
            )];
          }
        }]);
        return DxcApiSettingsModal;
      }(SettingsModal);

      _export('default', DxcApiSettingsModal);
    }
  };
});;
'use strict';

System.register('milu2003/dxc/main', ['flarum/app', 'milu2003/dxc/components/DxcApiSettingsModal'], function (_export, _context) {
    "use strict";

    var app, DxcApiSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_milu2003DxcComponentsDxcApiSettingsModal) {
            DxcApiSettingsModal = _milu2003DxcComponentsDxcApiSettingsModal.default;
        }],
        execute: function () {

            app.initializers.add('flarum-ext-dxc', function () {
                app.extensionSettings['milu2003-dxc'] = function () {
                    return app.modal.show(new DxcApiSettingsModal());
                };
            });
        }
    };
});