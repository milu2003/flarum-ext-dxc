import SettingsModal from 'flarum/components/SettingsModal';

export default class DxcApiSettingsModal extends SettingsModal {
  className() {
    return 'DxcApiSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('flarum-ext-dxc.admin.api_key');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('flarum-ext-dxc.admin.api_key')}</label>
        <input className="FormControl" bidi={this.setting('flarum-ext-dxc.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('flarum-ext-dxc.admin.api_key')}</label>
        <input className="FormControl" bidi={this.setting('flarum-ext-dxc.app_secret')}/>
      </div>
    ];
  }
}
