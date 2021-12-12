import React from 'react';

import { µSettingsDarkMode } from '.';

export const SettingsDarkMode: React.FC<µSettingsDarkMode.Types.Props> =
  props => {
    return (
      <div className={props.enabled ? 'theme--night' : ''}>
        <div className={`theme-toggle`}>
          <span className="moon"></span>
          <span className="sun"></span>
          <small className="sun__ray"></small>
          <small className="sun__ray"></small>
          <small className="sun__ray"></small>
          <small className="sun__ray"></small>
          <small className="sun__ray"></small>
          <small className="sun__ray"></small>
        </div>
      </div>
    );
  };
