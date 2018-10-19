import React from 'react';
import { connect } from 'react-redux';

import { ReduxCounterButton, ReduxCounterView } from '../components/ReduxCounterView';
import translate, { TranslateFunction } from '../../../../i18n';

interface CounterProps {
  t: TranslateFunction;
  onReduxIncrement: (increment: number) => void;
  reduxCount: number;
}

const ReduxCounter = ({ t, onReduxIncrement, reduxCount }: CounterProps) => (
  <ReduxCounterView text={t('text', { reduxCount })}>
    <ReduxCounterButton text={t('btnLabel')} onClick={onReduxIncrement(1)} />
  </ReduxCounterView>
);

export default connect(
  (state: any) => ({ reduxCount: state.counter.reduxCount }),
  (dispatch: any) => ({
    onReduxIncrement(value: number) {
      return () =>
        dispatch({
          type: 'COUNTER_INCREMENT',
          value: Number(value)
        });
    }
  })
)(translate('reduxCounter')(ReduxCounter));
