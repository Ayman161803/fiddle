import * as React from 'react';

import { AppState } from '../state';
import { TokenDialog } from './token-dialog';
import { Settings } from './settings';
import { observer } from 'mobx-react';

export interface DialogsProps {
  appState: AppState;
}

/**
 * Dialogs (like the GitHub PAT input).
 *
 * @class Dialogs
 * @extends {React.Component<DialogsProps, {}>}
 */
@observer
export class Dialogs extends React.Component<DialogsProps, {}> {
  public render() {
    const { appState } = this.props;
    const { isTokenDialogShowing, isSettingsShowing } = appState;
    const maybeToken = isTokenDialogShowing
      ? <TokenDialog key='dialogs' appState={appState} />
      : null;
    const maybeSettings = isSettingsShowing
      ? <Settings key='settings' appState={appState} />
      : null;

    return (
      <div key='dialogs' className='dialogs'>
        {maybeToken}
        {maybeSettings}
      </div>
    );
  }
}
