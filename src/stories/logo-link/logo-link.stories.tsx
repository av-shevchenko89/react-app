import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LogoLink } from './logo-link';

export default {
  title: 'Example/Logo Link',
  component: LogoLink,
} as ComponentMeta<typeof LogoLink>;

const Template: ComponentStory<typeof LogoLink> = (args) => <LogoLink {...args} />;

export const Default = Template.bind({});
