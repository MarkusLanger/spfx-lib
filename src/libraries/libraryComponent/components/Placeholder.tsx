import * as React from 'react';
import { FunctionComponent } from 'react';
import { Placeholder as PnPPlaceholder } from '@pnp/spfx-controls-react/lib/Placeholder';
import styles from './Placeholder.module.scss';

export const Placeholder: FunctionComponent = () => (
    <PnPPlaceholder iconName="Edit" iconText="iconText" description="description" buttonLabel="buttonLabel" />
);

export const MyDiv: FunctionComponent = () => <div className={styles.container}>My div</div>;
