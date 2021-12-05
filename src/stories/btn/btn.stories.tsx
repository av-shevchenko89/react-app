import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Btn } from './btn';

export default {
  title: 'Example/Btn',
  component: Btn,
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Solid = Template.bind({});
Solid.args = {
  label: "I'm red",
  type: 'solid',
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: 'Transparent',
  type: 'transparent',
};

export const Grey = Template.bind({});
Grey.args = {
  label: "I'm grey",
  type: 'grey',
};
