import app from 'flarum/app';

import DxcApiSettingsModal from 'milu2003/dxc/components/DxcApiSettingsModal';

app.initializers.add('flarum-ext-dxc', () => {
    app.extensionSettings['milu2003-dxc'] = () => app.modal.show(new DxcApiSettingsModal());
});
